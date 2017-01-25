//
//  ViewController.swift
//  sample
//
//  Created by esrij on 2015/06/05.
//  Copyright (c) 2015年 esrij. All rights reserved.
//

import UIKit
import ArcGIS

class ViewController: UIViewController{

    @IBOutlet var mapView: AGSMapView!
    
    override func viewDidLoad() {
        
        super.viewDidLoad()
        
        // Web マップが格納されるポータルの URL を設定して、ポータルに接続
        let portal = AGSPortal (url: URL(string: "https://www.arcgis.com")!, loginRequired: false)
        
        // Web マップの ID を設定して、Web マップを作成
        let portalItem = AGSPortalItem(portal: portal, itemID: "<Web マップ ID>")
        
        // マップを表示するビュー（AGSMapView）のマップを Web マップに設定
        self.mapView.map = AGSMap(item: portalItem)
        
    }
    
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

