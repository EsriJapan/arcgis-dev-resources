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

class BackgroundHelper {
   
    class func checkJobStatusInBackground(completionHandler:(UIBackgroundFetchResult) -> Void) {
        if AGSTask.activeResumeIDs().count > 0  {
            //
            //AGSExportTileCacheTask がサーバー処理のステータスをチェックすることを許可する
            //タイルのダウンロードが可能な場合は、ダウンロードが開始される
            AGSTask.checkStatusForAllResumableTaskJobsWithCompletion(completionHandler)
        }
        else {
            //
            //再開可能な処理が無い場合は UIBackgroundFetchResult.NoData を返す
            completionHandler(UIBackgroundFetchResult.NoData)
        }
    }
    
    class func downloadJobResultInBackgroundWithURLSession(identifier:String, completionHandler:() -> ()) {
        //
        //ASyncTask がバックグラウンドでダウンロードの状態をモニターし、ダウンロードが完了したら completion ブロックを呼び出す
        AGSURLSessionManager.sharedManager().setBackgroundURLSessionCompletionHandler(completionHandler, forIdentifier: identifier)
    }
    
    class func postLocalNotificationIfAppNotActive(message:String) {
        
        //アプリが実行中でない時ににローカル通知を行う
        let state = UIApplication.sharedApplication().applicationState
        
        if state != .Active
        {
            let localNotification = UILocalNotification()
            localNotification.alertBody = message
            UIApplication.sharedApplication().scheduleLocalNotification(localNotification)
        }
    }
}
