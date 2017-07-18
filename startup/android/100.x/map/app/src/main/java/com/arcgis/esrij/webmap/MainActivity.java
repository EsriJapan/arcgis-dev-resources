package com.arcgis.esrij.webmap;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.esri.arcgisruntime.mapping.ArcGISMap;
import com.esri.arcgisruntime.mapping.Viewpoint;
import com.esri.arcgisruntime.mapping.view.LocationDisplay;
import com.esri.arcgisruntime.mapping.view.MapView;

public class MainActivity extends AppCompatActivity {

    MapView mMapView;
    ArcGISMap mArcGISMap;
    private LocationDisplay mLocationDisplay;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mMapView = (MapView) findViewById(R.id.mapView);
        mArcGISMap = new ArcGISMap("http://www.arcgis.com/home/item.html?id=<Web マップ ID>");
        mMapView.setMap(mArcGISMap);

        // MapView 上に現在位置を表示するために LocationDisplay を取得する
//        mLocationDisplay = mMapView.getLocationDisplay();
//        // LocationDisplay に LocationListner を設定
//        mLocationDisplay.addLocationChangedListener(new MyLocationListener());
//        // 現在位置の表示を開始
//        mLocationDisplay.startAsync();

    }

//    private class MyLocationListener implements LocationDisplay.LocationChangedListener{
//
//        public MyLocationListener(){
//            super();
//        }
//        @Override
//        public void onLocationChanged(LocationDisplay.LocationChangedEvent locationChangedEvent) {
//
//            if(locationChangedEvent == null){
//                return;
//            }
//            // 現在地を取得して、表示縮尺を設定して現在位置へズーム
//            Viewpoint viewpoint = new Viewpoint(locationChangedEvent.getLocation().getPosition(),1000.0);
//            mMapView.setViewpointAsync(viewpoint);
//        }
//    }
}
