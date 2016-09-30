---
date: 2010-11-24
title: Long Life Web Performance Optimization
subtitle: 心理学から考えるWebパフォーマンス
categories: 
    - performance
excerpt: 今回はLong Life Designのように長〜く使えるWPOを心理学などの人間側から考えてみようってのが今回のセッションの狙いです。
ogimage: https://images-na.ssl-images-amazon.com/images/I/41VPCPBHRNL.jpg
---

WCAF Seminar Vol.4での講演ログ。

<iframe src="//www.slideshare.net/slideshow/embed_code/5860661" width="512" height="421" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:3rem; max-width: 100%;" allowfullscreen> </iframe>

タイトルのLong Life Web Performance Optimization、長いのでLong Life WPOって略します。これは、Long Life Designからもじりました。Long Life Design というのはD&DEPARTMENT PROJECTのナガオカケンメイさんが行っているプロジェクトで、60年代とか70年代の昔の優れたデザインを今にも伝えて使い続けていこうって趣旨だったと思います。

それに対して、Webの世界はどうでしょう？移り変わりが早いですよね。「お！これが90年代のテーブルレイアウトかぁ〜エクセレント！」なんてことはない。そこで今回はLong Life Designのように長〜く使えるWPOを心理学などの人間側から考えてみようってのが今回のセッションの狙いです。


## 	最近のパフォーマンス事情

最近パフォーマンスの話、聞かないですよね？去年の暮れあたりが賑わい的にピークだったかと思います。(※Googleのランキングアルゴリズ追加に関しても情報全くないですし…)とはいえ、結構パフォーマンス事情は賑やかですってのをこれから紹介していきます。

### Web Performance Working Group

もっともビッグなニュースと言えば、W3Cで8/19にWeb Performance Working Groupが設立されたことです。このWorking GroupのミッションはWebアプリケーションのパフォーマンス計測のための仕様を作ることです。共同議長にはMicrosoftとGoogleの方がいます。この辺からMSのWebパフォーマンスに対する本気度が伺えますよね。今後に期待です。

### API for Measuring Web Performance

そこで策定されていくのが計測のためのAPIです。で、そのAPIとはなんぞや？ってことなんですけども、

> + Navigation Timing ネットワークや読み込みなどの時間、リクエスト回数などの情報を取得することができます。
+ Resource Timing 画像やスクリプトなどのリソースを読み込むときの時間、情報を取得することができます。
+ User Timing UAがコードを実行した時間を取得することができます。

+ [2010年8月のW3C | Web標準Blog | ミツエーリンクス](http://standards.mitsue.co.jp/archives/001473.html)

window.performance.navigation.loadEnd みたいな感じでページの読み込み時間が簡単に分かるようになるんですね。つまり、YSlow や PageSpeed などのプラグインなしでも詳細な情報が取得することができます。このAPIを実装しているブラウザは共同議長の選出先と同じようにIE9とChrome6からとなっています。

### Boomerang.js

それじゃ利用するにはまだまだ先の話だと思うのですが、そうでもないんですね。次に紹介するのはオープンソースのパフォーマンス計測ライブラリのBoomerang.js です。開発者は Yahoo! Inc. の Philip Tellis さんです。この Boomerang.js 先に紹介したパフォーマンス計測APIに似た機能を提供してくれます。（はてブコメントより、ブラウザがそのAPIをサポートしていればそれを利用するみたいですね。ありがとうございます。

普通、自前でページのパフォーマンス計測しようと思うと、HEAD要素あたりに、new DateしてgetTimeで現在時刻を取ってきて、BODYの最後のほうでまたgetTimeして、その差分の時間を計測するといったことをするかと思います。これですと、最初のnew Dateから次のnew Dateするまでの時間、つまりドキュメント内での時間しか計測できてないわけですね。もっと重要なサーバーとのやりとりの時間、ネットワークのレイテンシなども考慮されていないわけです。これじゃいかんやろうと言うことで、このBoomerang.js を使うとどうなるかと言うと、BODY要素の最後らへんでBoomerang.jsを読み込み、初期化関数を書くだけで、ネットワークのレイテンシなどの時間を計測することが可能です。また取得した情報を任意のサーバーに送れることも可能です。
これをうまく利用できたら、Google Analytics と連携してパフォーマンスの良いユーザーがどれだけコンバージョンがあげたかなど詳細に記録できるかと思います。楽しみですね。

### Beyond Design

最後に話題を変えて、今年5月に開かれたGoogle I/O 。GoogleとYouTubeの人が話したセッションより良いユーザーエクスペリエンスの作り方の原則として、第1に速くあれ！ってことを挙げていました。もともと、Googleのデザインガイドラインでも速さってのは重要だと言ってきているので、これ自体は特に珍しいことではないのですが、そこで引用されていた言葉が興味深かったので挙げてみました。

> “Speed is the most important feature. If your application is slow, people won’t use it. I see this more with mainstream users than I do with power users. I think that power users sometimes have a bit of sympathetic eye to the challenges of building really fast web apps, and maybe they’re willing to live with it, but when I look at my wife and kids, they’re my mainstream view of the world. If something is slow, they’re just gone.” —Fred Wilson (Union Square Ventures)

フレッド・ウィルソンさんはTwitterにも投資している有名なベンチャー投資家ですね。この人が言った言葉に「スピードはもっとも重要な特徴だ、もしアプリケーションが遅ければ誰も使わなくなるだろう。この傾向はパワーユーザーよりもメインストリームのユーザーで顕著だ」と。パワーユーザーというのは日本で言えば、はてなを使っているような人たちでしょう。彼らはそれなりの知識があるので、ページが遅くても同情的な感情になるらしいです。負荷分散大変だろうなとか。大して、メインストリームユーザー、つまりノンデベロッパーの人はそんなこと知りませんから、なんで遅いん？は？みたいな感じですぐ去ってしまうんですね。

ここで重要なのは、スピードというのは決して一部のパフォーマンスオタクのだけのもではないということです。フレッドさん自体、投資家であり開発者ではありませんので、スピードというのは全ての人が当然のように期待するモノなのかなと考えます。

これまで見てきたように言わずもがなWPOというのは私たちにとって常に最重要課題なのではないかと考えます。さらに、前述のパフォーマンス計測の標準化が進めば、皆が同じルールの環境下で比較されるので、パフォーマンスが良いということはセールスポイントになることはもちろん、今後はミリ秒単位での厳しい争いになったりするのかなと考えます。


## 機械は進化する

Webパフォーマンスというのは重要なのは理解できたかと思うので、今度はそれを対策するために機械（コンピュータ）の部分に目を向けてみましょう。

### ムーアの法則

機械というのは当然のことながらものすごく進化が速いです。有名なムーアの法則で半導体の集積密度は18〜24ヶ月で倍増するというのがあります。まぁ簡単に言ったら、半導体の性能はものすごいスピード向上していくことになります。２年前の自分と比べて今の自分が２倍成長してるかと言うと、そうではないですよね？人間と比べれば進化のスピードというのは比較にならないほど速いものです。

Webの世界においても同じことが言えます。現在、WPO でもっとも有効な対策であるHTTPリクエストを減らすこと。これまで２度クライアントサイドでのパフォーマンスについて話してきましたが、言っていることはただ一つです。HTTPリクエストを減らすことしか僕は言っていません。現状はリクエストを減らすには、イメージマップ、CSSスプライト、インライン画像、ファイルの結合といったことが挙げられます。では、こういった対策がブラウザ（機械）の改善（進化）が進めばどのように変わるのか次は見ていきましょう

### CSS3 

![](/mol/images/2010/1124-00.png)

まずはCSS3。画像はコニッターさんのiPhone4をCSS3で描いてみたです！このような込み入ったものもCSS3で描けるということは、言わずもがなグラデーションボタンや見出しの背景画像といった比較的簡単なものならCSS３で十分事足りる可能性は大きいわけです。

ちなみにGoogleが42億ページ調べた結果、１ページにあるリソースの和は平均44個でそのうち画像の平均は29個と最も多く全体の60-70％に当たるらしいです。このようなデータからも画像を減らすことはHTTPリクエストを減らす有効な対策だと考えます。

### Application Cache

アプリケーションキャッシュは、HTML5のオフライン機能ですね。マニフェストファイルというテキストファイルにキャッシュさせたいファイル名（パス）を記述しHTMLのマニフェスト属性に指定するだけで、セッションを越えての、オフラインでのキャッシュが可能になります。

つまり、１回リクエストしてキャッシュしてしまえば、次回以降は余計なリクエストは発生させないということです。この機能と同じことを実現しようと思うと、サーバーの方でEXPIREヘッダに遠い未来を指定しなければならないんですけど、アプリケーションキャッシュの場合クライアント側ですべてできるのは使い勝手がよいですね。


### Resource Package

次に、リソースパッケージなんですがこれはMozillaの中の人提案した機能で、簡潔にゆうとZIPでくれ！ってことです。何回もリクエストするから効率が悪いので全部ZIPでまとめて、そのZIPファイルだけリクエストするというやり方です。いやーこれ考えた頭いいですね。てかなんで今までなかったのか分からないほどクレバーな技術なんですけど、Firefox3.7に実装されるかどうかって話しだったんですけど、全然話にきかないので、たぶんFirefox5とかになるのでしょうか。

実装方法はZIPで配信したいファイル + マニフェストテキストにリソースのパスを書いてlink要素でリクエストするといった感じですね。考え方としてはCSS Sprite（1つの画像に複数の役割を持たせる）に近いのですが、Background Positionをちまちま設定しなくてもいい分、リソースパッケージのほうが圧倒的に管理が楽です。

### SPDY

最後は、Googleが提案したSPDYというプロトコルです。こちらはブラウザの機能改善というより現状のHTTP通信変えようぜってことです。だからといって、http://example.com のところが spdy://example.com となるということではありません。もっと裏側の部分が変わるんですね。SPDY で実現できるのはこの３つです。

+ 多重化ストリーム
+ リクエストの優先付け
+ HTTPヘッダーの圧縮

一番重要なのは多重化ストリームです。これは現状のHTTP通信だと、1のホスト名に同時に2つのリクエストしかできません。2コネクション貼られて2リクエストするわけですから、つまり1コネクション1リクエストの原則です。

これを解消するために、最新のブラウザは6つまでコネクションを貼ることができるのですが、これが1000ユーザー、10000ユーザーが同時接続してきたらどうでしょう？6万コネクションがサーバーに貼られるわけですからあまり効率のよいことではないですよね。。

そこで、SPDYでは1コネクションにリクエストする制限撤廃しました。1つのコネクションを何度も再利用するんですね。これが多重化ストリームです。なぜ、HTTPリクエストがコストが高いのかというと、リクエストするたびに接続・解除を繰り返すから効率が悪いので、SPDYはこの点を解決できるのではないでしょうか。

これまで4つ見てきたように、現在最も注意しなければならないHTTPリクエストも、近い将来、ブラウザの機能改善やネットワークの仕組みが変われば特に意識する必要はなくなるかもしれません。

とはいえ、実際問題、各ブラウザが一斉に改善（アップデート）されるわけではありませんので、各ブラウザの実装度を見つつ対応しなければならない状況は続きます。つまり、私たち製作者はは常に走り続けなければなりません(‘･ω･｀）…

## 人間は変わらない

そこで、人間側に着目する必要があります。人間というのは昔から何も変わっていません。オギャーって生まれて恋をしてカクカクシカジカで死んでいくわけですよ。少なくとも、2年毎に2倍成長しているかといえばそうではありません。

要はこれまでは機械側ばっかりに着目してきたわけですけど、ここは進化が速い、ついて行くのはしんどいってことで、もっと変化の遅い人間側に着目しましょう。そうすればもっと楽できるかもしれませんってのが今回のセッションの狙いでもあります。

__認知・知覚・感受・体感 | Perception__

そこで、人間は知るうえで重要になってくるのが知覚の問題です。理論的に人間は最大で、1秒間126bit、 1分感で7560ビット、1時間50万ビットくらいの大量の情報を処理できるそうです。でも実際は毎秒10ビットくらいしか処理していません。つまり、結構省エネ、 相対的に判断したり、これまでの知識を元に判断したりして情報を簡略して処理しています。 つまり、世界をありのままにインプットしているわけではありません。

![](/mol/images/2010/1124-01.png)

このことを理解するのに良い例があります。上記の図のA、Bのマスの色は違いますよね、実は2つは同じ色なんですね。2本のグレーの線を引きますと、同じ#6B6B6Bのグレーだと理解できます。

![](/mol/images/2010/1124-02.png)

もう1つ例がありますので紹介します。こちらは2つのオレンジ色の円の大きさは左の円の大きさの方が小さく感じます。しかし、これも周りのオブジェクトを消してみると同じ大きさというのが分かりますよね。

つまり、人間というのは曖昧に世界を知覚しているのが理解できるかと思います。

これは、別に視覚だけに限ったことではありません。時間感覚においても同じようなこと言えます。アメリカの神経科学学会の人が発表したレポートによると、同じ3分という時間でも、若い人とお年を召した方では体感時間が違うといったデータが報告されています。この調査によると若い人にとっては3分は自分で秒数をカウントするとで実際は平均3:03秒くらいだったそうです。対して、60歳以上の人にとって3分は3:40秒に感じられたようです。つまり、お年を召した方のほうが流れている時間は速く感じているようです。

時間感覚は年齢以外にも、地理的条件で違ったり、文化気候、体温によっても影響をうけるようです。もうちょっと具体的にWebではどんな事例があるかと言いますと、User Interface Engineering Blog が2001年に調べた調査があります。ユーザーに10個の違うサイトを使ってもらってどのサイトが一番速く感じたか？という調査です。

+ [The Truth About Download Time](http://www.uie.com/articles/download_time/)

調査結果を見てみると、About.comは実際の平均読み込み時間が8秒で一番速かった（※2001年調べです）にもかかわらず、ユーザーからは一番遅いと判断されました。対して、amazon.comは実際の平均読み込み時間が36秒ともっとも遅かったにもかかわらず、ユーザーからは最も速いと評価されました。

この調査のまとめでは、実際のダウンロード時間と体感速度に相関性はなく、それよりもユーザーのタスク処理の成功度具合と体感速度に相関性があると締めくくっていました。

え、これって、スピードって重要じゃないってこと？

<div class="azlink-box"><div class="azlink-image" style="float:left"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/4790706141/warikiru-22/" name="azlinklink" target="_blank"><img src="https://images-na.ssl-images-amazon.com/images/I/41VPCPBHRNL._SL160_.jpg" alt="フロー体験 喜びの現象学 (SEKAISHISO SEMINAR)" style="border:none" /></a></div><div class="azlink-info" style="float:left;margin-left:15px;line-height:120%"><div class="azlink-name" style="margin-bottom:10px;line-height:120%"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/4790706141/warikiru-22/" name="azlinklink" target="_blank">フロー体験 喜びの現象学 (SEKAISHISO SEMINAR)</a><div class="azlink-powered-date" style="font-size:7pt;margin-top:5px;font-family:verdana;line-height:120%">posted at 2015.1.18</div></div><div class="azlink-detail">M. チクセントミハイ,Mihaly Csikszentmihalyi,今村 浩明<br />世界思想社<br />売り上げランキング: 5514<br /></div><div class="azlink-link" style="margin-top:5px"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/4790706141/warikiru-22/" target="_blank">Amazon.co.jp で詳細を見る</a></div></div><div class="azlink-footer" style="clear:left"></div></div>

このことを理解するのに重要なキーワードを持つ人物がアメリカの心理学者のミハイチクセントミハイです。彼が提唱した概念にフローというのがあります。

フローつまり流れるというこの言葉の意味は、

> １つの活動に深く没入し他の何ものも問題とならなくなる状態  
注意が自由に個人の目標達成のために投射されている状態

のことを指します。つまり、完全に集中している状態のことですね。皆さんも経験ありませんか？コーディングがのりに乗って気づいたらお昼だった。またはもう定時？といったことないですかね？ああいった感じを想像してもらえれば理解が速いかと思います。

フローの構成要素にはこうっいったものが挙げられます。

+ 明確な目的
+ 専念と集中
+ 活動と意識の融合
+ 時間感覚のゆがみ
+ 直接的で即座な反応
+ 能力の水準と難易度とのバランス
+ 自分で制御している感覚
+ 活動に本質的な価値がある

明確な目的をもって集中している状態ですよね。ここで重要なのは時間感覚のゆがみです。つまり、先程のamazon.comの結果をフローを用いて、もう1度説明すると実際速度が遅かったにも関わらず速いと評価されたのはタスクの成功率、使いやすさのおかげで集中することができ、軽いフローみたいな状態にユーザが近づいたため、時間感覚がゆがみ、実際の速度以上に速いと感じるようになったのではと考えられます。

つまり、このフローをうまく利用することができれば、サイトの体感速度も向上させることができるのではないでしょうか？

この人間編をまとめますと、人間を曖昧で相対的です。しかし、フローといったモデルをうまく利用することでWPOにもうまく利用できると考えます。

## 実践編

さて、ここからはWebサイトにフローを落とし込むためにはどうしたら良いのか考えてみましょう。

ここまで人間側の部分を考えてきました。しかし、体感速度を向上させるために人間の頭をこねくりまわすことはできないので、知覚される前になにか対策する必要性がありますね。つまり、インターフェイスが重要になってくるわけです。

Webインターフェイスをデザインするパターンはいろいろあるのですが、ここではフローの構成要素から、直接的で即座な反応と、自分で制御している感覚から考えるに、フィードバックというパターンがフローを作り出すに最適なパターンかと今回は考えます。では、実際にフローのためにどのようなフィードバックをしたらよいのか見ていきましょう。

### Live Preview

まずはライブプレビュー。Twitterのパスワード設定とかナイスだと思うんですね。まぁなんてこたないんですけども、パスワードの安全度をタイプするたびに提示（プレビュー）してくれるんですね。もしこれがライブではなくて、とりあえず入力して、設定ボタン押してページが切り替わってから「パスワードに不備があります。もう一度設定しなおしてください。」言われたらどうでしょう。さらに一度入力したフォームの情報もクリアになってたらどうでしょうか？完全にフローは断ち切られますよね。ライブプレビューはそういった意味で、即座の反応と自分で操作している感からフローを作るのに最適化と考えます。

### Progressive Rendering

次のフィードバックはもう少し短いスパンにおいてのフィードバックです。プログレッシブレンダリングとは、まぁプログレッシブエンハンスメントという言葉もあるように、漸次的、段階的レンダリングと考えればよいでしょう。つまり、真っ白なページから、いきなりページが表示されるのではなく、ヘッダー、サイドナビ、メインコンテンツといった具合に順々にレンダリングしていく具合です。

プログレッシブレンダリングで有名なBingの事例のよると、Bingの検索結果画面はそれまでプログレッシブレンダリングしてませんでした。検索クエリを入力して結果が表示されるまでに真っ白な画面をユーザーに表示させていました。そこで、スライドの紫色の選より上の部分、ビジュアルヘッダーの部分是が非でもまず表示させるように対応したようです。そうしただけで、各種評価は軒並み上昇しました。中でも、ユーザーの満足度は0.7％上昇と、ページをリニューアルしたとき並の効果があったようです。

ここで重要なのは全体のページの読み込み速度自体は変わってはいないのですが、まず何か見せておくことでユーザーに安心感を与えるいるわけですね。

### Progress Indication

最後はお馴染みのインジケータですね。ページの読み込み速度が速いことにこしたことはないのですが、やはり、どうしても読み込みに時間がかかる場合もあるわけですよね、FLASHサイトとか。そういった場合に、ユーザーをつなぎとめとくために、フィードバックを返しつづけることで安心感を与えることは大切です。それは、読み込み中… ていった文言でもいいですし、くるくるとか、 プログレスバーなどのケアを心がけたいところです。


+ Clear navigation
+ Match challenge to skills
+ Simplicity
+ Importance
+ Design for fun and utility
+ Avoid cutting-edge technology
+ Minimize animation

[Flow in Web Design - designing sites for optimal user experience or flow state - Chapter 2 - Speed Up Your Site](http://www.websiteoptimization.com/speed/2/)

Web Designにフローを落としこむテクニックはフィードバック以外にも上記のようなものがありますので、みなさんも取り入れてみてはどうでしょうか？

## まとめ

これからもブラウザは進化し続けます。結局、何のためにWebパフォーマンス最適化をするのか？といったことですよね。決して、YSlow のスコアのためでもなければ、開発者の自己満足のためにでもありまん。ユーザーのために最適化するわけです。

そうしたらやっぱりユーザー（人間）側についても考える必要性があるのではないでしょうか。知覚や認知ついて知れば、それは今後数十年といったスパンで使える知識です。

そういった知識をWebに落としこむことで、冒頭で申し上げました Long Life Web Performance Optimization は可能になると考えます。みなさんもより良いWeb Developer Lifeにしてみてください。

ありがとうございました。

















