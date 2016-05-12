//
//  ViewController.swift
//  applogin
//
//  Created by esrij on H28/03/30.
//  Copyright © 平成28年 esrij. All rights reserved.
//

import UIKit
import ArcGIS

class ViewController: UIViewController {
    
    var mapView: AGSMapView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        self.mapView = AGSMapView(frame: CGRectMake(0, 0, self.view.frame.size.width, self.view.frame.size.height))
        self.view.addSubview(self.mapView)
        let tiledMapServiceLayer = AGSTiledMapServiceLayer (URL: NSURL(string: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer"))
        self.mapView.addMapLayer(tiledMapServiceLayer, withName:"Tiled Map Service Layer")
        
        
        let urlString = "https://www.arcgis.com/sharing/oauth2/token"
        let request = NSMutableURLRequest(URL: NSURL(string: urlString)!)
        request.HTTPMethod = "POST"
        
        let clientId:String = "<Applications_Client_Id>"
        let clientSecret:String = "<Applications_Client_Secret>"
        let expiration:String = "60" //1時間
        let grantType:String = "client_credentials"
        let requestStr:String = "client_id=" + clientId + "&client_secret=" + clientSecret + "&expiration=" + expiration + "&grant_type=" + grantType + "&f=json"
        
        request.HTTPBody = requestStr.dataUsingEncoding(NSUTF8StringEncoding)
        
        let task = NSURLSession.sharedSession().dataTaskWithRequest(request, completionHandler: {data, response, error in
            if (error == nil) {
                
                do {
                    
                    let res = try NSJSONSerialization.JSONObjectWithData(data!, options:.AllowFragments) as! NSDictionary
                    
                    dispatch_async(dispatch_get_main_queue()) {

                    
                        if res["error"] != nil {
                            
                            let error = res["error"] as! NSDictionary
                            let errorDetails = error.valueForKey("error_description") as! NSString
                            print(errorDetails)
                            
                        } else {
                        
                            let token = res["access_token"] as! NSString
                            print(token)
                            
                            let credential = AGSCredential(token: token as String)
                            let featureLayer = AGSFeatureLayer(URL: NSURL(string: "<Secure_Service_Layer_URL>"), mode: .OnDemand, credential: credential)
                            self.mapView.addMapLayer(featureLayer, withName:"Feature Service Layer")
                            
                        }
                    
                    }
                } catch {
                    
                    print("serialize_error")
                    return
                }
                
            } else {
                
                print("response_error")
            }
            
        })
        
        task.resume()
        
    

    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

