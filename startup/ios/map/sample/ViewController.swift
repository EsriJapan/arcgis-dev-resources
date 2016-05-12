//
//  ViewController.swift
//  sample
//
//  Created by esrij on 2015/06/05.
//  Copyright (c) 2015年 esrij. All rights reserved.
//

import UIKit
import ArcGIS

// デリゲート プロトコルの宣言
class ViewController: UIViewController, AGSMapViewLayerDelegate {

    @IBOutlet var mapView: AGSMapView!
    
    var webMap: AGSWebMap!
    
    override func viewDidLoad() {
        
        super.viewDidLoad()
        
        // Web マップの取得
        self.webMap = AGSWebMap(itemId: "<Web マップ ID>", credential: nil)
        
        // 地図を表示するビュー（AGSMapView クラス）上で、Web マップを開く
        self.webMap.openIntoMapView(self.mapView)
        
        // AGSMapView のデリゲートを自身に設定
        self.mapView.layerDelegate = self
 
    }
    
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

