//
// Copyright 2014 ESRI
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// You may freely redistribute and use this sample code, with or
// without modification, provided you include the original copyright
// notice and use restrictions.
//
// See the use restrictions at http://help.arcgis.com/en/sdk/10.0/usageRestrictions.htm
//

import UIKit
import ArcGIS

class ViewController: UIViewController, AGSLayerDelegate {
    
    @IBOutlet weak var mapView:AGSMapView!
    @IBOutlet weak var downloadPanel:UIView!
    @IBOutlet weak var scaleLabel:UILabel!
    @IBOutlet  var estimateLabel:UILabel!
    @IBOutlet weak var lodLabel:UILabel!
    @IBOutlet weak var estimateButton:UIButton!
    @IBOutlet weak var downloadButton:UIButton!
    @IBOutlet weak var levelStepper:UIStepper!
    @IBOutlet weak var timerLabel:UILabel!
    @IBOutlet weak var resetButton: UIButton!
    
    var tileCacheTask:AGSExportTileCacheTask!
    var tiledLayer:AGSTiledMapServiceLayer!
    
    // in iOS7 this gets called and hides the status bar so the view does not go under the top iPhone status bar
    override func prefersStatusBarHidden() -> Bool {
        return true
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        //ArcGIS for Developers のアカウントのユーザー名とパスワードを入力（検証用）
        let agsCredential = AGSCredential(user: "ユーザー名", password: "パスワード")
        
        //ArcGIS Online のベースマップ（タイルのダウンロード専用）の URL を設定
        let tileServiceURL = "https://tiledbasemaps.arcgis.com/arcgis/rest/services/World_Street_Map/MapServer"
        
        //タイル レイヤーをマップに追加
        //レイヤー読み込みのためのデリゲートを設定
        let tiledUrl = NSURL(string: tileServiceURL)
        self.tiledLayer = AGSTiledMapServiceLayer(URL: tiledUrl, credential: agsCredential)
        self.tiledLayer.maxScale = 1128.497176
        
        self.tiledLayer.delegate  = self
        self.mapView.addMapLayer(self.tiledLayer, withName:"World Street Map")
        
        
        //タイルのエクスポート用タスクを作成
        if self.tileCacheTask == nil {
            self.tileCacheTask = AGSExportTileCacheTask(URL: tiledUrl, credential: agsCredential)
        }
        
        self.scaleLabel.numberOfLines = 0
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    //MARK: - AGSLayer delegate
    
    func layer(layer: AGSLayer!, didFailToLoadWithError error: NSError!) {
        //レイヤーの読み込みのエラー
        UIAlertView(title: "エラー", message: error.localizedDescription, delegate: nil, cancelButtonTitle: nil).show()
    }
    
    func layerDidLoad(layer: AGSLayer!) {
        if layer == self.tiledLayer {
            
            //タイル レイヤーのスケールをもとに UIStepper を作成（ステッパーでダウンロードするタイルの詳細レベルを選択）
            //ステッパーの値の上限値をタイル レイヤーのタイルの詳細レベルをもとに設定（日本ではタイルが存在しないレベルを除外）
            self.levelStepper.value = 0
            self.levelStepper.minimumValue = 0
            self.levelStepper.maximumValue = Double(self.tiledLayer.tileInfo.lods.count - 5)
            
            //マップの現在のスケールが変更された際にステッパーの値をリセット
            self.mapView.addObserver(self, forKeyPath: "mapScale", options: .New, context: nil)
            
            self.levelStepper.enabled = true

        }
    }
    
    //MARK: - KVO
    override func observeValueForKeyPath(keyPath: String?, ofObject object: AnyObject?, change: [String : AnyObject]?, context: UnsafeMutablePointer<Void>) {
        //スケールが変更されたら、ステッパーの値をリセットし、計算/ダウンロードボタンを無効化
        self.estimateLabel.text = ""
        self.scaleLabel.text = ""
        self.lodLabel.text = ""
        self.estimateButton.enabled = false
        self.downloadButton.enabled = false
        
        
        //現在のマップ スケールをもとにステッパーの値を再設定
        //現在の表示スケールより高解像度のタイルのレベルを選択可能にする
        if self.tiledLayer.currentLOD() != nil {
            let lods = self.tiledLayer.mapServiceInfo.tileInfo.lods as! [AGSLOD]
            
            if let index = lods.indexOf(self.tiledLayer.currentLOD()) {
                self.levelStepper.maximumValue = Double(self.tiledLayer.tileInfo.lods.count - index - 4)
                self.levelStepper.minimumValue = 0
                self.levelStepper.value = 0
            }
        }
    }
    
    
    @IBAction func changeLevels(sender:AnyObject) {

        //ステッパーの値が追加されたら計算/ダウンロードボタンを有効化
        self.estimateButton.enabled = true
        self.downloadButton.enabled = true
        self.levelStepper.minimumValue = 1
        
        //選択しているタイルのレベルの数を表示
        self.lodLabel.text = "\(Int(self.levelStepper.value))"
        
        //選択しているタイルのスケールの範囲を表示
        let currentScale = "\(Int(self.tiledLayer.currentLOD().scale))"
        let lods = self.tiledLayer.mapServiceInfo.tileInfo.lods as! [AGSLOD]
        
        let currentLOD = lods.indexOf(self.tiledLayer.currentLOD())
        let maxLOD = self.tiledLayer.mapServiceInfo.tileInfo.lods[Int(self.levelStepper.value) + currentLOD! - 1] as! AGSLOD
        let maxScale = "\(Int(maxLOD.scale))"
        self.scaleLabel.text = String(format: "1:%@\n\tから\n1:%@",currentScale , maxScale)
    }
    
    @IBAction func estimateAction(sender:AnyObject) {
        
        var limitMessage = ""
        
        //ダウンロードするタイルのレベルを設定
        let desiredLevels = self.levelsWithCount(Int(self.levelStepper.value), startingAt:self.tiledLayer.currentLOD(), fromLODs:self.tiledLayer.tileInfo.lods as! [AGSLOD])
        print("LODs requested \(desiredLevels)")
        
        //ダウンロードするマップの範囲を設定（現在の表示範囲）
        let extent = self.mapView.visibleAreaEnvelope
        
        //タイルのレベルとマップの範囲をもとにパラメーターを作成
        let params = AGSExportTileCacheParams(levelsOfDetail: desiredLevels, areaOfInterest:extent)
        
        //パラメーターを指定してダウンロードするタイルのサイズを計算
        self.tileCacheTask.estimateTileCacheSizeWithParameters(params, status: { (status, userInfo) -> Void in
            
            print("\(AGSResumableTaskJobStatusAsString(status)), \(userInfo)")
            
            if userInfo != nil {

                let allMessages =  userInfo["messages"] as? [AGSGPMessage]
                if allMessages != nil && allMessages!.count > 0 {
                
                    //サーバーから送られる最新の処理メッセージを確認
                    if let message = MessageHelper.extractMostRecentMessage(allMessages!) {
                        print(message)

                        //一度のリクエストでダウンロードできるタイル数は1000,000タイルが上限
                        if message.containsString("ERROR 001564") {
                            limitMessage = "ダウンロードするタイル数が制限を超えています。範囲とスケールを変えてお試しください。"
                        }
                    }
                }

            }
            
        }) { (tileCacheSizeEstimate, error) -> Void in
            
            if error != nil {
                
                var errorMessage = ""
                if limitMessage.isEmpty {
                    errorMessage = error.localizedDescription
                } else {
                    errorMessage = limitMessage
                }
                
                //エラー表示
                UIAlertView(title: "エラー", message: errorMessage, delegate: nil, cancelButtonTitle: "OK").show()
                SVProgressHUD.dismiss()
            }else{
                
                //タイル数とデータのサイズを表示
                let tileCountString = "\(tileCacheSizeEstimate.tileCount)"
                
                let byteCountFormatter = NSByteCountFormatter()
                let byteCountString = byteCountFormatter.stringFromByteCount(tileCacheSizeEstimate.fileSize)
                self.estimateLabel.text = "\(byteCountString) / \(tileCountString) タイル"
                
                SVProgressHUD.showSuccessWithStatus("ダウンロードサイズ:\n\(byteCountString) / \(tileCountString) タイル")
                
            }
        }
        
        SVProgressHUD.showWithStatus("サイズを計算中", maskType:4)
    
    }
    
    
    
    @IBAction func downloadAction(sender:AnyObject) {
        
        var limitMessage = ""
        
        //ダウンロードするタイルのレベルを設定
        let desiredLevels = self.levelsWithCount(Int(self.levelStepper.value), startingAt:self.tiledLayer.currentLOD(), fromLODs:self.tiledLayer.tileInfo.lods as! [AGSLOD])
        print("LODs requested \(desiredLevels)")
        
        //ダウンロードするマップの範囲を設定（現在の表示範囲）
        let extent = self.mapView.visibleAreaEnvelope
        
        //タイルのレベルとマップの範囲をもとにパラメーターを作成
        let params = AGSExportTileCacheParams(levelsOfDetail: desiredLevels, areaOfInterest:extent)
        
        //パラメーターを指定してタイルのダウンロードを実行
        self.tileCacheTask.exportTileCacheWithParameters(params, downloadFolderPath: nil, useExisting: true, status: { (status, userInfo) -> Void in
            
            //処理のステータスを確認
            print("\(AGSResumableTaskJobStatusAsString(status)), \(userInfo)")
            if userInfo != nil {
                
                let allMessages =  userInfo["messages"] as? [AGSGPMessage]
                
                if status == .FetchingResult {
                    let totalBytesDownloaded = userInfo["AGSDownloadProgressTotalBytesDownloaded"] as? Double
                    let totalBytesExpected = userInfo["AGSDownloadProgressTotalBytesExpected"] as? Double
                    if totalBytesDownloaded != nil && totalBytesExpected != nil {
                        let dPercentage = totalBytesDownloaded!/totalBytesExpected!
                        print("\(totalBytesDownloaded) / \(totalBytesExpected) = \(dPercentage)")
                        SVProgressHUD.showProgress(Float(dPercentage), status: "ダウンロード中", maskType: 4)
                    }
                }
                else if allMessages != nil && allMessages!.count > 0 {
                    
                    //サーバーから送られる最新の処理メッセージを確認
                    if let message = MessageHelper.extractMostRecentMessage(allMessages!) {
                        print(message)
                        
                        //一度のリクエストでダウンロードできるタイル数は1000,000タイルが上限
                        if message.containsString("ERROR 001564") {
                            limitMessage = "ダウンロードするタイル数が制限を超えています。範囲とスケールを変えてお試しください。"
                        }
                    }
                }
            }
        }) { (localTiledLayer, error) -> Void in
            SVProgressHUD.dismiss()
            if error != nil {
                
                var errorMessage = ""
                if limitMessage.isEmpty {
                    errorMessage = error.localizedDescription
                } else {
                    errorMessage = limitMessage
                }
                
                //エラー表示
                UIAlertView(title: "エラー", message: errorMessage, delegate: nil, cancelButtonTitle: "OK").show()
                self.estimateLabel.text = ""
            }
            else{
                
                //タイル レイヤーを削除して、ダウンロードしたタイルをマップに追加
                self.mapView.reset()
                self.mapView.addMapLayer(localTiledLayer, withName:"offline")
                self.tiledLayer.maxScale = 1128.497176

                UIAlertView(title: "ダウンロード完了", message: "ダウンロードしたタイルをマップに表示します", delegate: nil, cancelButtonTitle: "OK").show()
                

                self.levelStepper.enabled = false
                self.resetButton.hidden = false
                
                BackgroundHelper.postLocalNotificationIfAppNotActive("タイルのダウンロードが完了しました。")
            }
        }
        SVProgressHUD.showWithStatus("ダウンロード \n の準備中", maskType: 4)
    }
    
    
    @IBAction func resetdAction(sender: AnyObject) {
        
        self.resetButton.hidden = true
        self.levelStepper.enabled = true
        
        //ダウンロードしたタイルを削除して、タイル レイヤーをマップに追加
        self.mapView.reset()
        self.mapView.addMapLayer(self.tiledLayer, withName:"World Street Map")
        
    }

    
    func levelsWithCount(count:Int, startingAt startLOD:AGSLOD, fromLODs allLODs:[AGSLOD]) -> [UInt] {
        if let index = allLODs.indexOf(startLOD) {
            let endIndex = index + count-1
            let desiredLODs = Array(allLODs[index...endIndex])
            var desiredLevels = [UInt]()
            for LOD  in desiredLODs {
                desiredLevels.append(LOD.level)
            }
            
            return desiredLevels
        }
        return [UInt]()
    }

}

