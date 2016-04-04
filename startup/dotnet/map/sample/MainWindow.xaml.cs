using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows;
using System.Threading;
using System.Windows.Media;
using Esri.ArcGISRuntime.Portal;
using Esri.ArcGISRuntime.Layers;
using Esri.ArcGISRuntime.WebMap;
using Esri.ArcGISRuntime.Tasks.Geocoding;
using Esri.ArcGISRuntime.Tasks.Query;
using Esri.ArcGISRuntime.Geometry;
using Esri.ArcGISRuntime.Symbology;
using Esri.ArcGISRuntime.Controls;


namespace sample
{
    /// <summary>
    /// MainWindow.xaml の相互作用ロジック
    /// </summary>
    public partial class MainWindow : Window
    {

        //ArcGIS Online REST の URL
        private const string PORTAL_URL = "https://www.arcgis.com/sharing/rest";

        //ArcGIS Online ジオコーディングサービスの URL
        private const string WORLD_GEOCODE_SERVICE_URL = "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer";

        //住所検索結果表示用のグラフィックスオーバーレイ
        private GraphicsOverlay geocodeResultGraphicsOverlay;

        //住所検索用のジオコーディング タスク  
        private OnlineLocatorTask onlineLocatorTask;

        //マップが操作可能であるかどうかを示す変数
        private bool isMapReady;        

        public MainWindow()
        {
            InitializeComponent();

            //住所検索用のジオコーディング タスクを初期化
            onlineLocatorTask = new OnlineLocatorTask(new Uri(WORLD_GEOCODE_SERVICE_URL));
        }

        private async void MyMapView_Loaded(object sender, RoutedEventArgs e)
        {
            // ArcGIS Online への参照を取得
            var portal = await ArcGISPortal.CreateAsync(new Uri(PORTAL_URL));

            // ID を基にアイテムを取得
            var item = await ArcGISPortalItem.CreateAsync(portal, "Web マップ ID");

            // アイテムを Web マップとして取得
            var webmap = await WebMap.FromPortalItemAsync(item);

            // Web マップを格納するために WebMapViewModel を作成
            var vm = await WebMapViewModel.LoadAsync(webmap, portal);

            // MapView コントロールの Map プロパティに、WebMap を割り当て
            MyMapView.Map = vm.Map;


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


        private async void geocoording_Click(object sender, RoutedEventArgs e)
        {
            //マップが準備できていなければ処理を行わない
            if (!isMapReady) return;

            //住所検索用のパラメータを作成
            OnlineLocatorFindParameters parameters = new OnlineLocatorFindParameters(addressTextBox.Text)
            {
                MaxLocations = 5,
                OutSpatialReference = SpatialReferences.WebMercator,
                OutFields = OutFields.All
            };

            try
            {
                //住所の検索
                IList<LocatorFindResult> resultCandidates = await onlineLocatorTask.FindAsync(parameters, CancellationToken.None);

                //住所検索結果に対する処理（1つ以上候補が返されていれば処理を実行）
                if (resultCandidates != null && resultCandidates.Count > 0)
                {
                    //現在の結果を消去
                    geocodeResultGraphicsOverlay.Graphics.Clear();

                    //常に最初の候補を採用
                    LocatorFindResult candidate = resultCandidates.FirstOrDefault();

                    //最初の候補からグラフィックを作成
                    Graphic locatedPoint = new Graphic()
                    {
                        Geometry = candidate.Feature.Geometry,

                    };


                    //住所検索結果表示用のグラフィックスオーバーレイにグラフィックを追加
                    geocodeResultGraphicsOverlay.Graphics.Add(locatedPoint);

                    //追加したグラフィックの周辺に地図を拡大
                    await MyMapView.SetViewAsync((MapPoint)locatedPoint.Geometry, 36112);
                }
                //候補が一つも見つからない場合の処理
                else
                {
                    MessageBox.Show("住所検索：該当する場所がみつかりません。");
                }
            }
            //エラーが発生した場合の処理
            catch (Exception ex)
            {
                MessageBox.Show(string.Format("住所検索：{0}", ex.Message));
            }
        }

        /// <summary>
        /// 住所検索結果用のシンボル作成
        /// </summary>
        private SimpleRenderer createGeocoordingSymbol()
        {
            SimpleMarkerSymbol resultGeocoordingSymbol = new SimpleMarkerSymbol()
            {
                Style = SimpleMarkerStyle.Circle,
                Size = 12,
                Color = Colors.Blue,
            };


            SimpleRenderer resultRenderer = new SimpleRenderer() { Symbol = resultGeocoordingSymbol };

            return resultRenderer;
        }
    }
}
