﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

using Esri.ArcGISRuntime.Mapping;
using Esri.ArcGISRuntime.Portal;
using Esri.ArcGISRuntime.Geometry;
using Esri.ArcGISRuntime.Symbology;
using Esri.ArcGISRuntime.UI;
using Esri.ArcGISRuntime.Tasks.Geocoding;

using Colors = System.Drawing.Color;

namespace sample
{

    public partial class MainPage : ContentPage
    {

        //ArcGIS Online REST の URL
        private const string PORTAL_URL = "https://www.arcgis.com/sharing/rest";

        //ArcGIS Online ジオコーディングサービスの URL
        private const string WORLD_GEOCODE_SERVICE_URL = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer";

        //住所検索結果表示用のグラフィックスオーバーレイ
        private GraphicsOverlay geocodeResultGraphicsOverlay;

        //住所検索用のジオコーディング タスク  
        private LocatorTask onlineLocatorTask;

        //マップが操作可能であるかどうかを示す変数
        private bool isMapReady;

        public MainPage()
        {
            InitializeComponent();
            Initialize();
        }

        private async void Initialize()
        {
            //住所検索用のジオコーディング タスクを初期化
            onlineLocatorTask = await LocatorTask.CreateAsync(new Uri(WORLD_GEOCODE_SERVICE_URL));

            //ArcGIS Online への参照を取得
            ArcGISPortal arcGISOnline = await ArcGISPortal.CreateAsync(new Uri(PORTAL_URL));

            // ID を基にアイテムを取得
            var portalItem = await PortalItem.CreateAsync(arcGISOnline, "Web マップの ID");

            //アイテムから Map オブジェクトを作成
            var Map = new Map(portalItem);

            //MapView コントロールの Map プロパティに、Map を割り当て
            MyMapView.Map = Map;

            // グラフィックス オーバーレイが存在しない場合は、新規に追加
            if (MyMapView.GraphicsOverlays.Count == 0)
            {
                geocodeResultGraphicsOverlay = new GraphicsOverlay()
                {
                    Renderer = createGeocoordingSymbol(),
                };
                MyMapView.GraphicsOverlays.Add(geocodeResultGraphicsOverlay);
            }

            isMapReady = true;
        }

        private async void geocoording_Click(object sender, EventArgs e)
        {
            //マップが準備できていなければ処理を行わない
            if (!isMapReady) return;

            //住所検索用のパラメータを作成
            var geocodeParams = new GeocodeParameters
            {
                MaxResults = 5,
                CountryCode = "Japan",
                OutputLanguage = new System.Globalization.CultureInfo("ja-JP"),
            };

            try
            {
                //住所の検索
                var resultCandidates = await onlineLocatorTask.GeocodeAsync(addressTextBox.Text, geocodeParams);

                //住所検索結果に対する処理（1つ以上候補が返されていれば処理を実行）
                if (resultCandidates != null && resultCandidates.Count > 0)
                {
                    //現在の結果を消去
                    geocodeResultGraphicsOverlay.Graphics.Clear();

                    //常に最初の候補を採用
                    var candidate = resultCandidates.FirstOrDefault();

                    //最初の候補からグラフィックを作成
                    Graphic locatedPoint = new Graphic()
                    {
                        Geometry = candidate.DisplayLocation,
                    };

                    //住所検索結果表示用のグラフィックスオーバーレイにグラフィックを追加
                    geocodeResultGraphicsOverlay.Graphics.Add(locatedPoint);

                    //追加したグラフィックの周辺に地図を拡大
                    await MyMapView.SetViewpointCenterAsync((MapPoint)locatedPoint.Geometry, 30000);
                }
                //候補が一つも見つからない場合の処理
                else
                {
                    await DisplayAlert("住所検索", "該当する場所がみつかりません。", "OK");

                }
            }
            //エラーが発生した場合の処理
            catch (Exception ex)
            {
                await DisplayAlert("住所検索", string.Format("{0}", ex.Message), "OK");
            }
        }

        /// <summary>
        /// 住所検索結果用のシンボル作成
        /// </summary>
        private SimpleRenderer createGeocoordingSymbol()
        {
            SimpleMarkerSymbol resultGeocoordingSymbol = new SimpleMarkerSymbol()
            {
                Style = SimpleMarkerSymbolStyle.Circle,
                Size = 12,
                Color = Colors.Blue,
            };

            SimpleRenderer resultRenderer = new SimpleRenderer() { Symbol = resultGeocoordingSymbol };

            return resultRenderer;
        }
    }
}
