+++
title = "スクリプト実行の自動化"
description = "タスクスケジューラや cron を使用した Python スクリプトの実行の自動化について紹介します。"
weight = 6
aliases = ["/python/task-automation/"]
+++

ArcGIS API for Python や ArcPy は、タスク スケジューラなどと組み合わせることで、様々な GIS タスクの実行を自動化することが可能です。<br>
ここでは、例として以下のようなディレクトリ構成で実行する Python スクリプトを作成したと想定し、そのスクリプトを Windows 及び Linux で 30 分ごとに無期限で定期実行する方法を紹介します。

py-script/<br>
　├ config.ini<br>
　└ task.py

task.py は実行する Python スクリプト、config.ini は task.py の実行に必要なパラメータを記載した設定ファイルとします。

### Windows のタスク スケジューラを使用する場合
Windows では[タスク スケジューラ](https://ja.wikipedia.org/wiki/%E3%82%BF%E3%82%B9%E3%82%AF%E3%82%B9%E3%82%B1%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%A9)を使用することでプログラムやスクリプトを決められた時間や一定の間隔で実行することができます。

タスク スケジューラは以下の手順で設定します。

* タスク スケジューラを開く
    * スタート メニューからタスク スケジューラを検索して開く
<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/automate-task/task-scheduler.png" width="600px">
</div>

* 右側の [操作] ペインから [タスクの作成] をクリック
    * 新規タスクを作成するウィザードが開きます
<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/automate-task/create-task.png" width="300px">
</div>

* [全般] タブ内のパラメーターを設定する
    * 名前：タスクの名前
    * 説明：タスクの説明を記載
    * セキュリティ オプション：
        * タスク実行時に使う Windows のユーザーアカウントを指定
        * [ユーザーがログオンしているかどうかにかかわらず実行する] をクリック
        * [最上位の特権で実行する] にチェックを入れる
    * [構成] は使用している Windows のバージョンに合わせる (今回は Windows 10)
<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/automate-task/general.png" width="450px">
</div>

* [トリガー] タブ内のパラメーターを設定する
    * [新規] をクリックし、新しいトリガーを作成
    * [タスクの開始] は [スケジュールに従う] をドロップダウンから選択
    * 任意の開始時間を指定
    * [繰り返し間隔] にチェックを入れ、30分間を指定
    * [継続時間] は [無期限] を指定
<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/automate-task/trigger.png" width="450px">
</div>

* [操作] タブのパラメーターを設定する
    * [操作] のドロップダウンから [プログラムの開始] を選択
    * [プログラム/スクリプト] で実行する Python の エグゼキュータブル ファイルのパスを指定
        * 上の画像では ArcGIS Pro の Python パッケージ マネージャー で作成した環境の Python を指定しています。
        * パスが不明な場合、実行したい環境で ArcGIS Pro を起動し、Python ウィンドウを表示させて以下のコードを実行することで確認することができます。
            * import sys
            * sys.executable
    * [引数の追加 (オプション)] で実行する Python スクリプトのファイル名を指定
    * [開始 (オプション)] で Python スクリプトが格納されているディレクトリを指定
<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/automate-task/operation.png" width="350px">
</div>

{{% notice warning %}}
指定するパス等にスペースが含まれている場合はダブル クォーテーションで囲んでください。<br>
また半角括弧 `()` が含まれるパスを指定すると正常に動作しないため、ディレクトリ名などを変更してください
{{% /notice %}}

* OK ボタンをクリックし、要求された場合はユーザーアカウント情報を入力

### Linux の cron を使用する場合
Linux で特定のタスクを定期実行する場合は [cron](https://help.ubuntu.com/community/CronHowto?_ga=2.178480100.1147189719.1582793769-2017084658.1580817129) が用いられます。<br>
cron は任意のタスクを任意の時間にバックグラウンドで実行するデーモンです。実行する内容は crontab と呼ばれるテキスト ファイルに記述します。<br>
設定方法は以下のとおりです。

#### crontab を開く
* 以下のコマンドを Bash ターミナルから実行

```
    crontab -e
```

* 次のような使用するテキスト エディタを選択する画像が表示された場合、任意の番号のテキストエディタを選択します (今回は 1 番を選択)。
<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/automate-task/select-editor.png" width="350px">
</div>

#### crontab を編集する
* crontab の編集画面が開くので次のとおり実行する内容を記述

```
*/30 * * * * cd /home/<ユーザー名>/py-script && /home/<ユーザー名>/anaconda3/envs/arcgis171/bin/python task.py
```
<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/automate-task/crontab.png" width="500px">
</div>

* 記述した内容の概要は以下のとおりです
    * `*/30 * * * *`
        * 30分に一回の実行間隔を指定
    * `cd /home/<ユーザー名>/py-script`
        * cd コマンドでカレントのディレクトリを実行するスクリプトと設定ファイルが格納されているディレクトリに移動
        * ※ ここではログインしているユーザーのホーム ディレクトリ直下に配置していると想定
    * `&&`
        * 連続してコマンドを実行する場合に用いるオペレーター
    * `/home/<ユーザー名>/anaconda3/envs/arcgis171/bin/python`
        * 実行する Python のパスを指定
    * `task.py`
        * 実行する Python スクリプトを指定
    

{{% notice note %}}
上記の内容は Anaconda3 をインストールして構築した ArcGIS API for Python の実行環境を想定しています。詳細は[インストールガイド](../python-api-install#2-linux-へのインストール)を参照ください。<br>
より詳細な cron の使い方はubuntu の Community Help Wiki の [Cron How to](https://help.ubuntu.com/community/CronHowto) をご覧下さい。
{{% /notice %}}