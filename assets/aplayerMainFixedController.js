var ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    lrcType: 1,
    maxHeight:90,
    listFolded: true,
    audio: [{
        'name': 'Winterreise Op. 89, D. 911: Gute Nacht',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/01 - Winterreise Op. 89, D. 911- Gute Nacht.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': '春擬き TVサイズver.',
        'artist': '北川勝利',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/01 - 北川勝利 - 春擬き TVサイズver..mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。続 オリジナルサウンドトラック'
    }, {
        'name': 'WHEN YOU WISH UPON A STAR -prologue-',
        'artist': 'Aimer(エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/01 WHEN YOU WISH UPON A STAR -prologue-.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Midnight Sun'
    }, {
        'name': 'TWINKLE TWINKLE LITTLE STAR -prologue- (Live in BUDOKAN blanc et noir)',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/01-TWINKLE TWINKLE LITTLE STAR -prologue- (Live in BUDOKAN blanc et noir).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Aimer Live in 武道館 "blanc et noir"'
    }, {
        'name': 'MIND CONDUCTOR',
        'artist': 'YURiKA',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/YURiKA - MIND CONDUCTOR.mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVｱﾆﾒ｢ﾘﾄﾙｳｨｯﾁｱｶﾃﾞﾐｱ｣第2ｸｰﾙｵｰﾌﾟﾆﾝｸﾞﾃｰﾏ｢MIND CONDUCTOR｣'
    }, {
        'name': 'Shiny Ray',
        'artist': 'YURiKA',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/YURiKA - Shiny Ray.mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVｱﾆﾒ｢ﾘﾄﾙｳｨｯﾁｱｶﾃﾞﾐｱ｣ｵｰﾌﾟﾆﾝｸﾞﾃｰﾏ｢Shiny Ray｣'
    }, {
        'name': '夜行列車 ～nothing to lose～',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/01. 夜行列車 ～nothing to lose～.mp3',
        'cover': '',
        'lrc': '',
        'album': "Aimer special concert with スロヴァキア国立放送交響楽団 'ARIA STRINGS'"
    }, {
        'name': '星を辿れば',
        'artist': '大原ゆい子',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/大原ゆい子 - 星を辿れば.mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVｱﾆﾒ｢ﾘﾄﾙｳｨｯﾁｱｶﾃﾞﾐｱ｣ｴﾝﾃﾞｨﾝｸﾞﾃｰﾏ｢星を辿れば｣'
    }, {
        'name': '透明な翼',
        'artist': '大原ゆい子',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/大原ゆい子 - 透明な翼 (透明的翅膀).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVｱﾆﾒ｢ﾘﾄﾙｳｨｯﾁｱｶﾃﾞﾐｱ｣第2ｸｰﾙｴﾝﾃﾞｨﾝｸﾞﾃｰﾏ｢透明な翼｣'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Die Wetterfahne',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/02 - Winterreise Op. 89, D. 911- Die Wetterfahne.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': '近からず遠からず',
        'artist': '石濱翔(MONACA)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/02 - 石濱翔(MONACA) - 近からず遠からず.mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。続 オリジナルサウンドトラック'
    }, {
        'name': '眠りの森',
        'artist': 'Aimer(エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/02 眠りの森.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Midnight Sun'
    }, {
        'name': 'スピカ (Live in BUDOKAN blanc et noir)',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/02-スピカ (Live in BUDOKAN blanc et noir).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Aimer Live in 武道館 "blanc et noir"'
    }, {
        'name': 'AKATSUKI DEPARTURE',
        'artist': 'YURiKA',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/02. AKATSUKI DEPARTURE.mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ「リトルウィッチアカデミア」オープニングテーマ「Shiny Ray」'
    }, {
        'name': 'Fairy Way',
        'artist': 'YURiKA',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/02. Fairy Way.mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ「リトルウィッチアカデミア」第2クールオープニングテーマ「MIND CONDUCTOR」'
    }, {
        'name': 'ねあと',
        'artist': '大原ゆい子',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/02. ねあと.mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ「リトルウィッチアカデミア」第2クールエンディングテーマ「透明な翼」'
    }, {
        'name': '寂しくて眠れない夜は',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/02. 寂しくて眠れない夜は.mp3',
        'cover': '',
        'lrc': '',
        'album': "Aimer special concert with スロヴァキア国立放送交響楽団 'ARIA STRINGS'"
    }, {
        'name': '莟',
        'artist': '大原ゆい子',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/02. 莟.mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ「リトルウィッチアカデミア」エンディングテーマ「星を辿れば」'
    }, {
        'name': 'Believe Be:leave',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/02.Aimer - Believe Beleave.mp3',
        'cover': '',
        'lrc': '',
        'album': 'DAWN'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Gefrorne Tränen',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/03 - Winterreise Op. 89, D. 911- Gefrorne Tränen.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': '3人でいる時間',
        'artist': '北川勝利',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/03 - 北川勝利 - 3人でいる時間.mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。続 オリジナルサウンドトラック'
    }, {
        'name': '7月の翼',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/08. 7月の翼.mp3',
        'cover': '',
        'lrc': '',
        'album': "Aimer special concert with スロヴァキア国立放送交響楽団 'ARIA STRINGS'"
    }, {
        'name': 'あなたに出会わなければ～夏雪冬花～ (Live in BUDOKAN blanc et noir)',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/03-あなたに出会わなければ～夏雪冬花～ (Live in BUDOKAN blanc et noir).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Aimer Live in 武道館 "blanc et noir"'
    }, {
        'name': 'Beautiful Future',
        'artist': 'YURiKA',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/03. Beautiful Future.mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ「リトルウィッチアカデミア」第2クールオープニングテーマ「MIND CONDUCTOR」'
    }, {
        'name': 'My Destination',
        'artist': 'YURiKA',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/03. My Destination.mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ「リトルウィッチアカデミア」オープニングテーマ「Shiny Ray」'
    }, {
        'name': 'ノスタルジア',
        'artist': '大原ゆい子',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/03. ノスタルジア.mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ「リトルウィッチアカデミア」第2クールエンディングテーマ「透明な翼」'
    }, {
        'name': 'ユビオリ',
        'artist': '大原ゆい子',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/03. ユビオリ.mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ「リトルウィッチアカデミア」エンディングテーマ「星を辿れば」'
    }, {
        'name': '花の唄',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/03. 花の唄.mp3',
        'cover': '',
        'lrc': '',
        'album': "Aimer special concert with スロヴァキア国立放送交響楽団 'ARIA STRINGS'"
    }, {
        'name': '君を待つ',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/03.Aimer - 君を待つ.mp3',
        'cover': '',
        'lrc': '',
        'album': 'DAWN'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Erstarrung',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/04 - Winterreise Op. 89, D. 911- Erstarrung.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': '人の気持ち、もっと考えてよ',
        'artist': '石濱翔(MONACA)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/04 - 石濱翔(MONACA) - 人の気持ち、もっと考えてよ.mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。続 オリジナルサウンドトラック'
    }, {
        'name': 'words',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - words.mp3',
        'cover': '',
        'lrc': '',
        'album': 'After Dark (天黑之后)'
    }, {
        'name': '星屑ビーナス (Live in BUDOKAN blanc et noir)',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/04-星屑ビーナス (Live in BUDOKAN blanc et noir).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Aimer Live in 武道館 "blanc et noir"'
    }, {
        'name': 'MIND CONDUCTOR (Instrumental)',
        'artist': 'YURiKA',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/04. MIND CONDUCTOR (Instrumental).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ「リトルウィッチアカデミア」第2クールオープニングテーマ「MIND CONDUCTOR」'
    }, {
        'name': 'Shiny Ray (Instrumental)',
        'artist': 'YURiKA',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/04. Shiny Ray (Instrumental).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ「リトルウィッチアカデミア」オープニングテーマ「Shiny Ray」'
    }, {
        'name': '星を辿れば (Instrumental)',
        'artist': '大原ゆい子',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/大原ゆい子 - 星を辿れば (Instrumental).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVｱﾆﾒ｢ﾘﾄﾙｳｨｯﾁｱｶﾃﾞﾐｱ｣ｴﾝﾃﾞｨﾝｸﾞﾃｰﾏ｢星を辿れば｣'
    }, {
        'name': '透明な翼 (Instrumental)',
        'artist': '大原ゆい子',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/04. 透明な翼 (Instrumental).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ「リトルウィッチアカデミア」第2クールエンディングテーマ「透明な翼」'
    }, {
        'name': 'broKen NIGHT',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/07. broKen NIGHT.mp3',
        'cover': '',
        'lrc': '',
        'album': "Aimer special concert with スロヴァキア国立放送交響楽団 'ARIA STRINGS'"
    }, {
        'name': 'Winterreise Op. 89, D. 911: Der Lindenbaum',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/05 - Winterreise Op. 89, D. 911- Der Lindenbaum.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': 'いろは',
        'artist': '高橋邦幸(MONACA)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/05 - 高橋邦幸(MONACA) - いろは.mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。続 オリジナルサウンドトラック'
    }, {
        'name': 'Cold Sun',
        'artist': 'Aimer(エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/05 Cold Sun.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Midnight Sun'
    }, {
        'name': 'Re:pray (Live in BUDOKAN blanc et noir)',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/05-Re-pray (Live in BUDOKAN blanc et noir).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Aimer Live in 武道館 "blanc et noir"'
    }, {
        'name': 'AKATSUKI DEPARTURE (Instrsumental)',
        'artist': 'YURiKA',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/05. AKATSUKI DEPARTURE (Instrsumental).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ「リトルウィッチアカデミア」オープニングテーマ「Shiny Ray」'
    }, {
        'name': 'Fairy Way (Instrumental)',
        'artist': 'YURiKA',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/05. Fairy Way (Instrumental).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ「リトルウィッチアカデミア」第2クールオープニングテーマ「MIND CONDUCTOR」'
    }, {
        'name': 'Ref:rain',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - Ref_rain.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Ref:rain / 眩いばかり(期間生産限定盤) (Ref:rain/光彩照人)'
    }, {
        'name': 'ねあと (Instrsumental)',
        'artist': '大原ゆい子',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/05. ねあと (Instrsumental).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ「リトルウィッチアカデミア」第2クールエンディングテーマ「透明な翼」'
    }, {
        'name': '莟 (Instrsumental)',
        'artist': '大原ゆい子',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/05. 莟 (Instrsumental).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ「リトルウィッチアカデミア」エンディングテーマ「星を辿れば」'
    }, {
        'name': 'Noir! Noir!',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/05.Aimer - Noir! Noir!.mp3',
        'cover': '',
        'lrc': '',
        'album': 'DAWN'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Wasserflut',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/06 - Winterreise Op. 89, D. 911- Wasserflut.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': '決裂',
        'artist': '石濱翔(MONACA)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/06 - 石濱翔(MONACA) - 決裂.mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。続 オリジナルサウンドトラック'
    }, {
        'name': 'AM03:00',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - AM03_00.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Midnight Sun'
    }, {
        'name': 'カタオモイ (Live in BUDOKAN blanc et noir)',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/06-カタオモイ (Live in BUDOKAN blanc et noir).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Aimer Live in 武道館 "blanc et noir"'
    }, {
        'name': 'Beautiful Future (Instrumental)',
        'artist': 'YURiKA',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/06. Beautiful Future (Instrumental).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ「リトルウィッチアカデミア」第2クールオープニングテーマ「MIND CONDUCTOR」'
    }, {
        'name': 'My Destination (Instrumental)',
        'artist': 'YURiKA',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/06. My Destination (Instrumental).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ「リトルウィッチアカデミア」オープニングテーマ「Shiny Ray」'
    }, {
        'name': 'ノスタルジア (Instrumental)',
        'artist': '大原ゆい子',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/06. ノスタルジア (Instrumental).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ「リトルウィッチアカデミア」第2クールエンディングテーマ「透明な翼」'
    }, {
        'name': 'ユビオリ (Instrumental)',
        'artist': '大原ゆい子',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/06. ユビオリ (Instrumental).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ「リトルウィッチアカデミア」エンディングテーマ「星を辿れば」'
    }, {
        'name': '蝶々結び',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/06. 蝶々結び.mp3',
        'cover': '',
        'lrc': '',
        'album': "Aimer special concert with スロヴァキア国立放送交響楽団 'ARIA STRINGS'"
    }, {
        'name': 'Re:far',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/06.Aimer - Refar.mp3',
        'cover': '',
        'lrc': '',
        'album': 'DAWN'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Auf dem Flusse',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/07 - Winterreise Op. 89, D. 911- Auf dem Flusse.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': '対立',
        'artist': '石濱翔(MONACA)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/07 - 石濱翔(MONACA) - 対立.mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。続 オリジナルサウンドトラック'
    }, {
        'name': '小さな星のメロディー',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/15. 小さな星のメロディー.mp3',
        'cover': '',
        'lrc': '',
        'album': "Aimer special concert with スロヴァキア国立放送交響楽団 'ARIA STRINGS'"
    }, {
        'name': 'March of Time (Live in BUDOKAN blanc et noir)',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/07-March of Time (Live in BUDOKAN blanc et noir).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Aimer Live in 武道館 "blanc et noir"'
    }, {
        'name': 'AM04:00',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - AM04_00.mp3',
        'cover': '',
        'lrc': '',
        'album': 'DAWN (黎明)'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Rückblick',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/08 - Winterreise Op. 89, D. 911- Rückblick.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': '結衣の決意',
        'artist': '黒須克彦',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/08 - 黒須克彦 - 結衣の決意.mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。続 オリジナルサウンドトラック'
    }, {
        'name': 'VOICE',
        'artist': 'Aimer(エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/08 VOICE.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Midnight Sun'
    }, {
        'name': '蝶々結び (Live in BUDOKAN blanc et noir)',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/08-蝶々結び (Live in BUDOKAN blanc et noir).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Aimer Live in 武道館 "blanc et noir"'
    }, {
        'name': '誰か、海を。',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/09. 誰か、海を。.mp3',
        'cover': '',
        'lrc': '',
        'album': "Aimer special concert with スロヴァキア国立放送交響楽団 'ARIA STRINGS'"
    }, {
        'name': 'Winterreise Op. 89, D. 911: Irrlicht',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/09 - Winterreise Op. 89, D. 911- Irrlicht.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': '仲直り',
        'artist': '高橋邦幸(MONACA)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/09 - 高橋邦幸(MONACA) - 仲直り.mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。続 オリジナルサウンドトラック'
    }, {
        'name': 'RE:I AM',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - RE_I AM.mp3',
        'cover': '',
        'lrc': '',
        'album': 'BEST SELECTION"noir"'
    }, {
        'name': 'us (Live in BUDOKAN blanc et noir)',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/09-us (Live in BUDOKAN blanc et noir).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Aimer Live in 武道館 "blanc et noir"'
    }, {
        'name': 'LAST STARDUST',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - LAST STARDUST.mp3',
        'cover': '',
        'lrc': '',
        'album': 'DAWN (黎明)'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Rast',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/10 - Winterreise Op. 89, D. 911- Rast.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': '偽物の日常',
        'artist': '高橋邦幸(MONACA)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/10 - 高橋邦幸(MONACA) - 偽物の日常.mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。続 オリジナルサウンドトラック'
    }, {
        'name': 'StarRingChild',
        'artist': 'Aimer(エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/10 StarRingChild.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Midnight Sun'
    }, {
        'name': 'holLow wORlD (Live in BUDOKAN blanc et noir)',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/10-holLow wORlD (Live in BUDOKAN blanc et noir).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Aimer Live in 武道館 "blanc et noir"'
    }, {
        'name': 'あなたに出会わなければ ～夏雪冬花～',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/10. あなたに出会わなければ ～夏雪冬花～.mp3',
        'cover': '',
        'lrc': '',
        'album': "Aimer special concert with スロヴァキア国立放送交響楽団 'ARIA STRINGS'"
    }, {
        'name': 'Brave Shine',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - Brave Shine.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Brave Shine'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Frühlingstraum',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/11 - Winterreise Op. 89, D. 911- Frühlingstraum.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': '繋ぎとめた世界',
        'artist': '黒須克彦',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/11 - 黒須克彦 - 繋ぎとめた世界.mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。続 オリジナルサウンドトラック'
    }, {
        'name': '星の消えた夜に (Re-echoed by Genki Rockets × give me wallets)',
        'artist': 'Aimer(エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/11 星の消えた夜に (Re-echoed by Genki Rockets × give me wallets).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Midnight Sun'
    }, {
        'name': 'LAST STARDUST (Live in BUDOKAN blanc et noir)',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/11-LAST STARDUST (Live in BUDOKAN blanc et noir).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Aimer Live in 武道館 "blanc et noir"'
    }, {
        'name': 'Mine',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - Mine.mp3',
        'cover': '',
        'lrc': '',
        'album': 'StarRingChild'
    }, {
        'name': 'キズナ',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/11.Aimer - キズナ.mp3',
        'cover': '',
        'lrc': '',
        'album': 'DAWN'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Einsamkeit',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/12 - Winterreise Op. 89, D. 911- Einsamkeit.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': 'WIN-WIN',
        'artist': '高橋邦幸(MONACA)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/12 - 高橋邦幸(MONACA) - WIN-WIN.mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。続 オリジナルサウンドトラック'
    }, {
        'name': 'Iris',
        'artist': 'Aimer(エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/12 Iris.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Midnight Sun'
    }, {
        'name': 'Brave Shine (Live in BUDOKAN blanc et noir)',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/12-Brave Shine (Live in BUDOKAN blanc et noir).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Aimer Live in 武道館 "blanc et noir"'
    }, {
        'name': 'DAWN',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - DAWN.mp3',
        'cover': '',
        'lrc': '',
        'album': 'DAWN (黎明)'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Die Post',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/13 - Winterreise Op. 89, D. 911- Die Post.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': 'レプリカ',
        'artist': '北川勝利',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/13 - 北川勝利 - レプリカ.mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。続 オリジナルサウンドトラック'
    }, {
        'name': 'WHEN YOU WISH UPON A STAR',
        'artist': 'Aimer(エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/13 WHEN YOU WISH UPON A STAR.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Midnight Sun'
    }, {
        'name': 'RE:I AM (Live in BUDOKAN blanc et noir)',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/13-RE-I AM (Live in BUDOKAN blanc et noir).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Aimer Live in 武道館 "blanc et noir"'
    }, {
        'name': 'MOON RIVER',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/13.Aimer - MOON RIVER.mp3',
        'cover': '',
        'lrc': '',
        'album': 'DAWN'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Der greise Kopf',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/14 - Winterreise Op. 89, D. 911- Der greise Kopf.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': '特別なヒント',
        'artist': '石濱翔(MONACA)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/14 - 石濱翔(MONACA) - 特別なヒント.mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。続 オリジナルサウンドトラック'
    }, {
        'name': 'zero (Live in BUDOKAN blanc et noir)',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/14-zero (Live in BUDOKAN blanc et noir).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Aimer Live in 武道館 "blanc et noir"'
    }, {
        'name': 'カタオモイ',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/14. カタオモイ.mp3',
        'cover': '',
        'lrc': '',
        'album': "Aimer special concert with スロヴァキア国立放送交響楽団 'ARIA STRINGS'"
    }, {
        'name': 'Winterreise Op. 89, D. 911: Die Krähe',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/15 - Winterreise Op. 89, D. 911- Die Krähe.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': '見守っていてくれる人',
        'artist': '石濱翔(MONACA)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/15 - 石濱翔(MONACA) - 見守っていてくれる人.mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。続 オリジナルサウンドトラック'
    }, {
        'name': 'Stars in the rain (Live in BUDOKAN blanc et noir)',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/15-Stars in the rain (Live in BUDOKAN blanc et noir).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Aimer Live in 武道館 "blanc et noir"'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Letzte Hoffnung',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/16 - Winterreise Op. 89, D. 911- Letzte Hoffnung.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': '自分の本当の気持ちは…',
        'artist': '高橋邦幸(MONACA)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/16 - 高橋邦幸(MONACA) - 自分の本当の気持ちは….mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。続 オリジナルサウンドトラック'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Im Dorfe',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/17 - Winterreise Op. 89, D. 911- Im Dorfe.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': '不合理な感情',
        'artist': '高橋邦幸(MONACA)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/17 - 高橋邦幸(MONACA) - 不合理な感情.mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。続 オリジナルサウンドトラック'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Der stürmische Morgen',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/18 - Winterreise Op. 89, D. 911- Der stürmische Morgen.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': '雪解け',
        'artist': '石濱翔(MONACA)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/18 - 石濱翔(MONACA) - 雪解け.mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。続 オリジナルサウンドトラック'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Täuschung',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/19 - Winterreise Op. 89, D. 911- Täuschung.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': 'エブリデイワールド TVサイズver.',
        'artist': '黒須克彦',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/19 - 黒須克彦 - エブリデイワールド TVサイズver..mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。続 オリジナルサウンドトラック'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Der Wegweiser',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/20 - Winterreise Op. 89, D. 911- Der Wegweiser.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Das Wirthaus',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/21 - Winterreise Op. 89, D. 911- Das Wirthaus.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Mut',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/22 - Winterreise Op. 89, D. 911- Mut.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Die Nebensonnen',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/23 - Winterreise Op. 89, D. 911- Die Nebensonnen.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': 'Winterreise Op. 89, D. 911: Der Leiermann',
        'artist': 'Christoph Prégardien, Michael Gees',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/24 - Winterreise Op. 89, D. 911- Der Leiermann.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Schubert: Winterreise Op. 89, D. 911'
    }, {
        'name': 'オレンジ (Orange) (Acoustic)',
        'artist': '7!! (Seven Oops)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/7!! (Seven Oops) - オレンジ (Orange) (Acoustic).mp3',
        'cover': '',
        'lrc': '',
        'album': 'オレンジ(期間生産限定盤) (Orange)'
    }, {
        'name': 'オレンジ (Orange)',
        'artist': '7!! (Seven Oops)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/7!! (Seven Oops) - オレンジ (Orange).mp3',
        'cover': '',
        'lrc': '',
        'album': 'オレンジ (Orange)'
    }, {
        'name': 'Shocking Party',
        'artist': 'A-RISE',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/A-RISE - Shocking Party.mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ ラブライブ! 2期 オリジナルサウンドトラック Notes of School idol days~Glory~ (TV动画 Love Live! 第2季原声带 Notes of School idol days ~Glory~)'
    }, {
        'name': 'I Need You',
        'artist': 'Actium',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Actium - I Need You.mp3',
        'cover': '',
        'lrc': '',
        'album': 'I Need You'
    }, {
        'name': '3min',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - 3min.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Sun Dance'
    }, {
        'name': '7月の翼 (7月之翼)',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - 7月の翼 (7月之翼).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Midnight Sun'
    }, {
        'name': 'After Rain',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - After Rain.mp3',
        'cover': '',
        'lrc': '',
        'album': 'After Dark (天黑之后)'
    }, {
        'name': 'AM02:00',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - AM02_00.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Sleepless Nights'
    }, {
        'name': 'Daisy',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - Daisy.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Torches'
    }, {
        'name': 'I beg you',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - I beg you.mp3',
        'cover': '',
        'lrc': '',
        'album': 'I beg you / 花びらたちのマーチ / Sailing (I beg you / 花瓣的游行 / Sailing)'
    }, {
        'name': 'marie',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - marie.mp3',
        'cover': '',
        'lrc': '',
        'album': '春はゆく / marie (春逝 / marie)'
    }, {
        'name': 'Monochrome Syndrome',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - Monochrome Syndrome.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Sun Dance'
    }, {
        'name': 'ONE -epilogue-',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - ONE -epilogue-.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Sun Dance'
    }, {
        'name': 'ONE',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - ONE.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Sun Dance'
    }, {
        'name': 'Ref:rain (Instrumental )',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - Ref_rain (Instrumental ).mp3',
        'cover': '',
        'lrc': '',
        'album': '恋は雨上がりのように オリジナル・サウンドトラックCD (恋如雨止 动画原声带)'
    }, {
        'name': 'soleil',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - soleil.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Sun Dance'
    }, {
        'name': 'STAND ALONE',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - STAND ALONE.mp3',
        'cover': '',
        'lrc': '',
        'album': 'STAND ALONE'
    }, {
        'name': 'Torches',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - Torches.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Torches'
    }, {
        'name': 'あなたに出会わなければ ～夏雪冬花～ (如果不曾遇见你~夏雪冬花~)',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - あなたに出会わなければ ～夏雪冬花～ (如果不曾遇见你~夏雪冬花~).mp3',
        'cover': '',
        'lrc': '',
        'album': 'あなたに出会わなければ~夏雪冬花~/星屑ビーナス(期間生産限定アニメ盤) (如果不曾遇见你~夏雪冬花~/星尘中的维纳斯)'
    }, {
        'name': 'カタオモイ (单相思)',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - カタオモイ (单相思).mp3',
        'cover': '',
        'lrc': '',
        'album': 'daydream'
    }, {
        'name': 'スピカ (Spica)',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - スピカ (Spica).mp3',
        'cover': '',
        'lrc': '',
        'album': 'ninelie'
    }, {
        'name': 'ポラリス (北极星)',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - ポラリス (北极星).mp3',
        'cover': '',
        'lrc': '',
        'album': 'After Dark (天黑之后)'
    }, {
        'name': '六等星の夜 (六等星之夜)',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - 六等星の夜 (六等星之夜).mp3',
        'cover': '',
        'lrc': '',
        'album': '六等星の夜 / 悲しみはオーロラに / TWINKLE TWINKLE LITTLE STAR (六等星之夜 / 悲伤化作极光 / TWINKLE TWINKLE LITTLE STAR)'
    }, {
        'name': '君を待つ (等待你) (Acoustic)',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - 君を待つ (等待你) (Acoustic).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Brave Shine'
    }, {
        'name': '思い出は奇麗で (回忆如此美好)',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - 思い出は奇麗で (回忆如此美好).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Black Bird / Tiny Dancers /思い出は奇麗で'
    }, {
        'name': '悲しみはオーロラに (拥抱悲伤的极光)',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - 悲しみはオーロラに (拥抱悲伤的极光).mp3',
        'cover': '',
        'lrc': '',
        'album': '六等星の夜 / 悲しみはオーロラに / TWINKLE TWINKLE LITTLE STAR (六等星之夜 / 悲伤化作极光 / TWINKLE TWINKLE LITTLE STAR)'
    }, {
        'name': '星屑ビーナス (星尘中的维纳斯)',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - 星屑ビーナス (星尘中的维纳斯).mp3',
        'cover': '',
        'lrc': '',
        'album': 'あなたに出会わなければ~夏雪冬花~/星屑ビーナス(期間生産限定アニメ盤) (如果不曾遇见你~夏雪冬花~/星尘中的维纳斯)'
    }, {
        'name': '春はゆく (春逝)',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - 春はゆく (春逝).mp3',
        'cover': '',
        'lrc': '',
        'album': '春はゆく / marie (春逝 / marie)'
    }, {
        'name': '花の唄 (花之歌)',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - 花の唄 (花之歌).mp3',
        'cover': '',
        'lrc': '',
        'album': 'ONE/花の唄/六等星の夜 Magic Blue ver. (ONE/花之歌/六等星之夜 Magic Blue ver.)'
    }, {
        'name': '花の唄 end of spring ver. (花之歌 end of spring ver.)',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - 花の唄 end of spring ver. (花之歌 end of spring ver.).mp3',
        'cover': '',
        'lrc': '',
        'album': '春はゆく / marie (春逝 / marie)'
    }, {
        'name': '茜さす (夕晖)',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - 茜さす (夕晖).mp3',
        'cover': '',
        'lrc': '',
        'album': '茜さす/everlasting snow (夕晖/everlasting snow)'
    }, {
        'name': '蝶々結び (蝴蝶结)',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) - 蝶々結び (蝴蝶结).mp3',
        'cover': '',
        'lrc': '',
        'album': '蝶々結び (蝴蝶结)'
    }, {
        'name': 'ninelie',
        'artist': 'Aimer (エメ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) _ chelly (チェリー) - ninelie.mp3',
        'cover': '',
        'lrc': '',
        'album': 'ninelie'
    }, {
        'name': 'Aimer×chelly - ninelie',
        'artist': 'Aimer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aimer (エメ) _ Chelly - ninelie.mp3',
        'cover': '',
        'lrc': '',
        'album': 'ninelie'
    }, {
        'name': 'Alone',
        'artist': 'Alan Walker',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Alan Walker - Alone.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Alone'
    }, {
        'name': 'Force',
        'artist': 'Alan Walker',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Alan Walker - Force.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Force'
    }, {
        'name': 'Spectre',
        'artist': 'Alan Walker',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Alan Walker - Spectre.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Spectre'
    }, {
        'name': 'Faded',
        'artist': 'Alan Walker',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Alan Walker _ Iselin Solheim - Faded.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Faded'
    }, {
        'name': 'Ruby (Remix)',
        'artist': 'Alwone',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Alwone _ Aori - Ruby (Remix).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Ruby (Alwone remix)'
    }, {
        'name': '君のこころは輝いてるかい? (你的心灵是否光芒闪耀？)',
        'artist': 'Aqours (アクア)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aqours (アクア) - 君のこころは輝いてるかい_ (你的心灵是否光芒闪耀？).mp3',
        'cover': '',
        'lrc': '',
        'album': '君のこころは輝いてるかい? (你的心灵是否光芒闪耀?)'
    }, {
        'name': '届かない星だとしても (哪怕是望尘莫及的星辰)',
        'artist': 'Aqours (アクア)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aqours (アクア) - 届かない星だとしても (哪怕是望尘莫及的星辰).mp3',
        'cover': '',
        'lrc': '',
        'album': '恋になりたいAQUARIUM'
    }, {
        'name': '青空Jumping Heart',
        'artist': 'Aqours (アクア)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Aqours (アクア) - 青空Jumping Heart.mp3',
        'cover': '',
        'lrc': '',
        'album': '青空Jumping Heart'
    }, {
        'name': '言葉にできない想い',
        'artist': 'AQUAPLUS',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/AQUAPLUS - 言葉にできない想い.mp3',
        'cover': '',
        'lrc': '',
        'album': 'WHITE ALBUM2 Original Soundtrack〜introductory〜'
    }, {
        'name': '静かな冬の夜',
        'artist': 'AQUAPLUS',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/AQUAPLUS - 静かな冬の夜.mp3',
        'cover': '',
        'lrc': '',
        'album': 'WHITE ALBUM2 Original Soundtrack〜introductory〜'
    }, {
        'name': 'Into You (Samurah & DVZE Remix)',
        'artist': 'Ariana Grande',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Ariana Grande - Into You (Samurah & DVZE Remix).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Into You (Samurah & DVZE Remix)'
    }, {
        'name': 'One Last Time',
        'artist': 'Ariana Grande',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Ariana Grande - One Last Time.mp3',
        'cover': '',
        'lrc': '',
        'album': 'My Everything (Japanese Edition|Bonus Tracks)'
    }, {
        'name': 'Problem',
        'artist': 'Ariana Grande',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Ariana Grande _ Iggy Azalea - Problem.mp3',
        'cover': '',
        'lrc': '',
        'album': 'My Everything (Japanese Edition|Bonus Tracks)'
    }, {
        'name': 'Break Free',
        'artist': 'Ariana Grande',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Ariana Grande _ Zedd - Break Free.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Break Free'
    }, {
        'name': 'Latenza',
        'artist': 'Asco',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Asco - Latenza.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Maxximize Future Sounds (Explicit)'
    }, {
        'name': "Here's To Never Growing Up (Explicit)",
        'artist': 'Avril Lavigne',
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Avril Lavigne - Here's To Never Growing Up (Explicit).mp3",
        'cover': '',
        'lrc': '',
        'album': "Here's to Never Growing Up"
    }, {
        'name': 'Innocence',
        'artist': 'Avril Lavigne',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Avril Lavigne - Innocence.mp3',
        'cover': '',
        'lrc': '',
        'album': 'The Best Damn Thing/Under My Skin'
    }, {
        'name': 'I\'m On Fire (From "Fifty Shades Of Grey" Soundtrack)',
        'artist': 'Awolnation',
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Awolnation - I'm On Fire (From _Fifty Shades Of Grey_ Soundtrack).mp3",
        'cover': '',
        'lrc': '',
        'album': 'Fifty Shades Of Grey (Original Motion Picture Soundtrack)'
    }, {
        'name': 'Jailbreak',
        'artist': 'Awolnation',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Awolnation - Jailbreak.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Run'
    }, {
        'name': 'Run',
        'artist': 'Awolnation',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Awolnation - Run.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Run'
    }, {
        'name': 'Sail',
        'artist': 'Awolnation',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Awolnation - Sail.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Megalithic Symphony Deluxe'
    }, {
        'name': 'Childhood Memory',
        'artist': 'Bandari',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Bandari - Childhood Memory.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Sunny Bay'
    }, {
        'name': 'Snowdreams',
        'artist': 'Bandari',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Bandari - Snowdreams.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Rhine River'
    }, {
        'name': '初雪',
        'artist': 'Bandari',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Bandari - 初雪.mp3',
        'cover': '',
        'lrc': '',
        'album': '背景音乐之旅-自然之韵'
    }, {
        'name': 'Nightmare(feat. rx Soul)',
        'artist': 'Bear Grillz',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Bear Grillz _ rx Soul - Nightmare(feat_ rx Soul).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Nightmare (feat. rx Soul)'
    }, {
        'name': 'Feel The Light',
        'artist': 'BEAUZ',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/BEAUZ - Feel The Light.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Home',
        'artist': 'BEAUZ',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/BEAUZ _ Brigetta - Home.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Home'
    }, {
        'name': 'ダイヤモンドプリンセスの忧鬱 (钻石公主的忧郁)',
        'artist': 'BiBi',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/BiBi - ダイヤモンドプリンセスの忧鬱 (钻石公主的忧郁).mp3',
        'cover': '',
        'lrc': '',
        'album': 'ダイヤモンドプリンセスの憂鬱 (钻石公主的忧郁)'
    }, {
        'name': 'ラブノベルス (恋爱篇章)',
        'artist': 'BiBi',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/BiBi - ラブノベルス (恋爱篇章).mp3',
        'cover': '',
        'lrc': '',
        'album': 'ダイヤモンドプリンセスの憂鬱 (钻石公主的忧郁)'
    }, {
        'name': '冬がくれた予感 (冬天带给我的预感)',
        'artist': 'BiBi',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/BiBi - 冬がくれた予感 (冬天带给我的预感).mp3',
        'cover': '',
        'lrc': '',
        'album': '冬がくれた予感 (冬天带给我的预感)'
    }, {
        'name': 'MTHRFCKR (Explicit)',
        'artist': 'BlasterJaxx',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/BlasterJaxx - MTHRFCKR (Explicit).mp3',
        'cover': '',
        'lrc': '',
        'album': 'MTHRFCKR'
    }, {
        'name': 'Other Side (feat Drew Ryn)',
        'artist': 'BlasterJaxx  Drew Ryn',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/BlasterJaxx _ Drew Ryn - Other Side (feat_ Drew Ryn).mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Life Is Music',
        'artist': 'BlasterJaxx  Olly James',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/BlasterJaxx _ Olly James - Life Is Music.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'In The Dark (Heyz Remix|Explicit)',
        'artist': 'Breathe Carolina',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Breathe Carolina - In The Dark (Heyz Remix_Explicit).mp3',
        'cover': '',
        'lrc': '',
        'album': 'DEADTHEREMIXES (Explicit)'
    }, {
        'name': 'Just the Way You Are',
        'artist': 'Bruno Mars',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Bruno Mars - Just the Way You Are.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Doo-Wops & Hooligans (Deluxe Version)'
    }, {
        'name': 'Treasure',
        'artist': 'Bruno Mars',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Bruno Mars - Treasure.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Unorthodox Jukebox'
    }, {
        'name': 'This Is What You Came For',
        'artist': 'Calvin Harris',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Calvin Harris _ Rihanna - This Is What You Came For.mp3',
        'cover': '',
        'lrc': '',
        'album': 'This Is What You Came For'
    }, {
        'name': 'Immortal(feat. Stacy Barthe)',
        'artist': 'Capozzi',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Capozzi _ Stacy Barthe - Immortal(feat_ Stacy Barthe).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Immortal (feat. Stacy Barthe)'
    }, {
        'name': 'Call Me Maybe',
        'artist': 'Carly Rae Jepsen',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Carly Rae Jepsen - Call Me Maybe.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Call Me Maybe'
    }, {
        'name': 'This Kiss',
        'artist': 'Carly Rae Jepsen',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Carly Rae Jepsen - This Kiss.mp3',
        'cover': '',
        'lrc': '',
        'album': 'This Kiss'
    }, {
        'name': 'Absolutely Anything',
        'artist': 'CG5',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/CG5 - Absolutely Anything.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Boom Clap',
        'artist': 'Charli XCX',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Charli XCX - Boom Clap.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Sucker'
    }, {
        'name': 'Attention',
        'artist': 'Charlie Puth',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Charlie Puth - Attention.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Attention'
    }, {
        'name': 'Marvin Gaye',
        'artist': 'Charlie Puth',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Charlie Puth _ Meghan Trainor - Marvin Gaye.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Marvin Gaye'
    }, {
        'name': "We Don't Talk Anymore",
        'artist': 'Charlie Puth',
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Charlie Puth _ Selena Gomez - We Don't Talk Anymore.mp3",
        'cover': '',
        'lrc': '',
        'album': 'Nine Track Mind'
    }, {
        'name': 'Irony',
        'artist': 'ClariS (クラリス)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/ClariS (クラリス) - Irony.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Irony'
    }, {
        'name': 'ヒトリゴト (自言自语)',
        'artist': 'ClariS (クラリス)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/ClariS (クラリス) - ヒトリゴト (自言自语).mp3',
        'cover': '',
        'lrc': '',
        'album': 'ヒトリゴト (通常盤) (自言自语)'
    }, {
        'name': 'Feel(feat. Helen)',
        'artist': 'Curbi',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Curbi _ Helen - Feel(feat_ Helen).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Feel (feat. Helen)'
    }, {
        'name': 'Take Me Hand',
        'artist': 'DAISHI DANCE (ダイシ・ダンス)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/DAISHI DANCE (ダイシ・ダンス) _ Cécile Corbel - Take Me Hand.mp3',
        'cover': '',
        'lrc': '',
        'album': 'WONDER Tourism'
    }, {
        'name': 'Forever Friends',
        'artist': 'DAOKO (ダヲコ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/DAOKO (ダヲコ) - Forever Friends.mp3',
        'cover': '',
        'lrc': '',
        'album': '打上花火 (初回限定盤)'
    }, {
        'name': '打上花火',
        'artist': 'DAOKO (ダヲコ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/DAOKO (ダヲコ) _ 米津玄師 (よねづ けんし) - 打上花火.mp3',
        'cover': '',
        'lrc': '',
        'album': '打上花火 (初回限定盤)'
    }, {
        'name': 'Run Free (Radio Edit)',
        'artist': 'Deep Chills',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Deep Chills _ IVIE - Run Free (Radio Edit).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Run Free'
    }, {
        'name': 'Dream It Possible',
        'artist': 'Delacey',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Delacey - Dream It Possible.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Dream It Possible'
    }, {
        'name': 'Heart Attack',
        'artist': 'Demi Lovato',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Demi Lovato - Heart Attack.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Heart Attack - Single'
    }, {
        'name': 'On Fire',
        'artist': 'Dirty Palm',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Dirty Palm - On Fire.mp3',
        'cover': '',
        'lrc': '',
        'album': 'On Fire'
    }, {
        'name': 'Flower Dance',
        'artist': 'DJ OKAWARI',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/DJ OKAWARI - Flower Dance.mp3',
        'cover': '',
        'lrc': '',
        'album': 'A Cup Of Coffee'
    }, {
        'name': 'Luv Letter',
        'artist': 'DJ OKAWARI',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/DJ OKAWARI - Luv Letter.mp3',
        'cover': '',
        'lrc': '',
        'album': 'MIRROR'
    }, {
        'name': 'Pay The Price',
        'artist': 'Do It Big',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Do It Big _ Crasca - Pay The Price.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Pay The Price'
    }, {
        'name': 'Earthquake',
        'artist': 'Dropgun',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Dropgun - Earthquake.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'ハイファイレイヴァー (Hifi Raver)',
        'artist': 'EasyPop (イージィポップ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/EasyPop (イージィポップ) - ハイファイレイヴァー (Hifi Raver).mp3',
        'cover': '',
        'lrc': '',
        'album': '上書きスクールライフ (改写校园生活)'
    }, {
        'name': 'Shape of You',
        'artist': 'Ed Sheeran',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Ed Sheeran - Shape of You.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Shape of You'
    }, {
        'name': 'Love Me Like You Do (From "Fifty Shades Of Grey")',
        'artist': 'Ellie Goulding',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Ellie Goulding - Love Me Like You Do (From _Fifty Shades Of Grey_).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Fifty Shades Of Grey (Original Motion Picture Soundtrack)'
    }, {
        'name': 'Colours',
        'artist': 'Ellis',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Ellis - Colours.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Love The Way You Lie',
        'artist': 'Eminem',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Eminem _ Rihanna - Love The Way You Lie.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Recovery (Deluxe Edition)'
    }, {
        'name': 'For you~月の光が降り注ぐテラス (For you~月光倾泻的凉台)',
        'artist': 'ENA☆',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/ENA☆ - For you~月の光が降り注ぐテラス (For you~月光倾泻的凉台).mp3',
        'cover': '',
        'lrc': '',
        'album': '四月は君の嘘 ORIGINAL SONG & SOUNDTRACK (四月是你的谎言 原声带)'
    }, {
        'name': 'My Truth~ロンド・カプリチオーソ (My Truth~回旋・随想曲)',
        'artist': 'ENA☆',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/ENA☆ - My Truth~ロンド・カプリチオーソ (My Truth~回旋・随想曲).mp3',
        'cover': '',
        'lrc': '',
        'album': '四月は君の嘘 ORIGINAL SONG & SOUNDTRACK (四月是你的谎言 原声带)'
    }, {
        'name': '[A]ddiction',
        'artist': 'EVO+',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/EVO+ - [A]ddiction.mp3',
        'cover': '',
        'lrc': '',
        'album': 'EVOLUTION'
    }, {
        'name': '疑心暗鬼 (疑神疑鬼) (カバー)',
        'artist': 'EVO+',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/EVO+ - 疑心暗鬼 (疑神疑鬼) (カバー).mp3',
        'cover': '',
        'lrc': '',
        'album': 'EVOLUTION'
    }, {
        'name': '疑心暗鬼(カバー)',
        'artist': 'EVO+',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/EVO+ - 疑心暗鬼(カバー).mp3',
        'cover': '',
        'lrc': '',
        'album': 'EVOLUTION'
    }, {
        'name': 'Game Boy',
        'artist': 'Felguk',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Felguk - Game Boy.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Game Boy'
    }, {
        'name': 'OK',
        'artist': 'Felguk',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Felguk - OK.mp3',
        'cover': '',
        'lrc': '',
        'album': 'OK'
    }, {
        'name': 'LEVEL5 -judgelight-',
        'artist': 'fripSide (フリップサイド)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/fripSide (フリップサイド) - LEVEL5 -judgelight-.mp3',
        'cover': '',
        'lrc': '',
        'album': 'infinite synthesis'
    }, {
        'name': 'memory of snow',
        'artist': 'fripSide (フリップサイド)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/fripSide (フリップサイド) - memory of snow.mp3',
        'cover': '',
        'lrc': '',
        'album': 'LEVEL5-judgelight- (科学超电磁炮 OP2)'
    }, {
        'name': 'Perfume!',
        'artist': 'Fusq',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Fusq - Perfume!.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Lost Station'
    }, {
        'name': '光年之外',
        'artist': 'G.E.M. 邓紫棋',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/G.E.M. 邓紫棋 - 光年之外.mp3',
        'cover': '',
        'lrc': '',
        'album': '光年之外'
    }, {
        'name': 'Lamb',
        'artist': 'GARNiDELiA (ガルニデリア)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/GARNiDELiA (ガルニデリア) - Lamb.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Linkage Ring'
    }, {
        'name': '桃源恋歌',
        'artist': 'GARNiDELiA (ガルニデリア)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/GARNiDELiA (ガルニデリア) - 桃源恋歌.mp3',
        'cover': '',
        'lrc': '',
        'album': '   '
    }, {
        'name': '極楽浄土',
        'artist': 'GARNiDELiA (ガルニデリア)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/GARNiDELiA (ガルニデリア) - 極楽浄土.mp3',
        'cover': '',
        'lrc': '',
        'album': '約束 -Promise code- (约定 -Promise code-)'
    }, {
        'name': '光るなら (若能绽放光芒) (TV Version)',
        'artist': 'Goose house (グースハウス)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Goose house (グースハウス) - 光るなら (若能绽放光芒) (TV Version).mp3',
        'cover': '',
        'lrc': '',
        'album': '光るなら (若能绽放光芒)'
    }, {
        'name': '光るなら (若能绽放光芒) (Instrumental)',
        'artist': 'Goose house (グースハウス)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Goose house - 光るなら (若能绽放光芒) (Instrumental).mp3',
        'cover': '',
        'lrc': '',
        'album': '光るなら (若能绽放光芒)'
    }, {
        'name': '心做し',
        'artist': 'GUMI',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/蝶々P (一之瀬ユウ) _ GUMI (グミ) - 心做し (无心).mp3',
        'cover': '',
        'lrc': '',
        'album': 'EXIT TUNES PRESENTS GUMical from Megpoid'
    }, {
        'name': 'Eyes Closed',
        'artist': 'Halsey',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Halsey - Eyes Closed.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Eyes Closed'
    }, {
        'name': 'Everybodied',
        'artist': 'Holy Goof',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Holy Goof _ Massappeals - Everybodied.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Everybodied'
    }, {
        'name': 'Demons',
        'artist': 'Imagine Dragons',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Imagine Dragons - Demons.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Continued Silence'
    }, {
        'name': 'ソレソレ',
        'artist': 'JABBERLOOP (ジャバループ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/JABBERLOOP (ジャバループ) - ソレソレ.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Jabberloop 台湾特选辑'
    }, {
        'name': 'Amsterdam (AMF 2016 Anthem)',
        'artist': 'Jay Hardway',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Jay Hardway - Amsterdam (AMF 2016 Anthem).mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'El Mariachi',
        'artist': 'Jay Hardway',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Jay Hardway - El Mariachi.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Electric Elephants',
        'artist': 'Jay Hardway',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Jay Hardway - Electric Elephants.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Exhale',
        'artist': 'Jay Hardway',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Jay Hardway - Exhale.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Wired',
        'artist': 'Jay Hardway  MOTi  Babet',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Jay Hardway _ MOTi _ Babet - Wired.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Rise - Epic Music',
        'artist': 'John Dreamer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/John Dreamer - Rise - Epic Music.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Rise - Epic Music'
    }, {
        'name': 'Tell Me A Lie',
        'artist': 'Jonas Aden',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Jonas Aden - Tell Me A Lie.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Free',
        'artist': 'Jordan Jay  Stvcks',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Jordan Jay _ Stvcks - Free.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Silence(feat. Trove)',
        'artist': 'Julian Calor',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Julian Calor _ Trove - Silence(feat_ Trove).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Silence (feat. Trove)'
    }, {
        'name': 'Flower Fortune Telling',
        'artist': 'Jun Kuroda',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Jun Kuroda - Flower Fortune Telling.mp3',
        'cover': '',
        'lrc': '',
        'album': 'aspects'
    }, {
        'name': 'SPLASH',
        'artist': 'Jun Kuroda',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Jun Kuroda _ MWK - SPLASH.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Summerlong EP'
    }, {
        'name': 'Shake It Down (Explicit)',
        'artist': 'Juyen Sebulba',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Juyen Sebulba _ RayRay - Shake It Down (Explicit).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Shake It Down'
    }, {
        'name': 'Tell Me(feat. KARRA)',
        'artist': 'KARRA',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/KARRA _ PVLSE - Tell Me(feat_ KARRA).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Tell Me (feat. KARRA)'
    }, {
        'name': 'You Got The Love',
        'artist': 'Keanu Silva  Mo Falk',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Keanu Silva _ Mo Falk - You Got The Love.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'DTL (Drop That Low)',
        'artist': 'Kodat  Freekill  Grizzy',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Kodat _ Freekill _ Grizzy - DTL (Drop That Low).mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': '▲MEW▲△MEW△CAKE',
        'artist': 'KOTOKO (ことこ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/KOTOKO (ことこ) - ▲MEW▲△MEW△CAKE.mp3',
        'cover': '',
        'lrc': '',
        'album': 'OVA「ネコぱら」オリジナルサウンドトラック (猫娘乐园OVA 动画原声带)'
    }, {
        'name': '〇＋●',
        'artist': 'Kous (コウス)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Kous (コウス) _ ef (初心者F) - 〇＋●.mp3',
        'cover': '',
        'lrc': '',
        'album': 'in focus-FResora-'
    }, {
        'name': '千本桜 (千本樱)',
        'artist': '黒うさP (Kurousa-P)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/黒うさP (Kurousa-P) _ 初音ミク (初音未来) - 千本桜 (千本樱).mp3',
        'cover': '',
        'lrc': '',
        'album': '初音ミク 5thバースデー ベスト ～impacts～ (初音未来5周年精选集~impacts～)'
    }, {
        'name': 'TRUE - Sincerely',
        'artist': 'Kyle Xian',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Kyle Xian - TRUE - Sincerely.mp3',
        'cover': '',
        'lrc': '',
        'album': '紫罗兰永恒花园'
    }, {
        'name': '五等分の気持ち~ 五等分的花嫁',
        'artist': 'Kyle Xian',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Kyle Xian - 五等分の気持ち~ 五等分的花嫁.mp3',
        'cover': '',
        'lrc': '',
        'album': '2019一月动漫新番歌曲合集Vol.1'
    }, {
        'name': '言葉にできない想い (无法诉说的思念)',
        'artist': 'Leaf',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Leaf - 言葉にできない想い (无法诉说的思念).mp3',
        'cover': '',
        'lrc': '',
        'album': 'WHITE ALBUM2 ORIGINAL SOUNDTRACK~introductory~ (TV动画《白色相簿第二季》原声带~introductory~)'
    }, {
        'name': '静かな冬の夜 (寂静的冬夜)',
        'artist': 'Leaf',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Leaf - 静かな冬の夜 (寂静的冬夜).mp3',
        'cover': '',
        'lrc': '',
        'album': 'WHITE ALBUM2 ORIGINAL SOUNDTRACK~introductory~ (TV动画《白色相簿第二季》原声带~introductory~)'
    }, {
        'name': 'My Soul, Your Beats!',
        'artist': 'Lia (りあ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Lia (りあ) - My Soul, Your Beats!.mp3',
        'cover': '',
        'lrc': '',
        'album': 'My Soul, Your Beats! / Brave Song'
    }, {
        'name': 'YURIHIME (Freezer Remix)',
        'artist': 'Lilium Records',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Lilium Records - YURIHIME (Freezer Remix).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Spellbound EP'
    }, {
        'name': '知らないLove＊教えてLove (不知道的Love＊教给我吧Love)',
        'artist': 'lily white',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/lily white - 知らないLove＊教えてLove (不知道的Love＊教给我吧Love).mp3',
        'cover': '',
        'lrc': '',
        'album': '知らないLove＊教えてLove (不知道的Love＊教给我吧Love)'
    }, {
        'name': 'Catch the Moment',
        'artist': 'LiSA (織部里沙)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/LiSA (織部里沙) - Catch the Moment.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Little Devil Parade'
    }, {
        'name': 'crossing field (English Ver.)',
        'artist': 'LiSA (織部里沙)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/LiSA (織部里沙) - crossing field (English Ver.).mp3',
        'cover': '',
        'lrc': '',
        'album': 'シルシ (印记)'
    }, {
        'name': 'crossing field (交叉领域)',
        'artist': 'LiSA (織部里沙)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/LiSA (織部里沙) - crossing field (交叉领域).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Crossing field (交叉领域)'
    }, {
        'name': 'oath sign',
        'artist': 'LiSA (織部里沙)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/LiSA (織部里沙) - oath sign.mp3',
        'cover': '',
        'lrc': '',
        'album': 'LiSA BEST -Way-'
    }, {
        'name': 'Rising Hope',
        'artist': 'LiSA (織部里沙)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/LiSA (織部里沙) - Rising Hope.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Rising Hope'
    }, {
        'name': 'シルシ (印记)',
        'artist': 'LiSA (織部里沙)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/LiSA (織部里沙) - シルシ (印记).mp3',
        'cover': '',
        'lrc': '',
        'album': 'シルシ (印记)'
    }, {
        'name': '紅蓮華',
        'artist': 'LiSA (織部里沙)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/LiSA (織部里沙) - 紅蓮華.mp3',
        'cover': '',
        'lrc': '',
        'album': '紅蓮華'
    }, {
        'name': 'Tell Your World',
        'artist': 'livetune (kz)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/livetune (kz) _ DECO_27 (デコ・ニーナ) _ 初音ミク (初音未来) - Tell Your World.mp3',
        'cover': '',
        'lrc': '',
        'album': '初音ミク 5thバースデー ベスト ～memories～ (初音未来 五周年精选碟 ～memories～)'
    }, {
        'name': 'Monster',
        'artist': 'LUM!X  Gabry Ponte',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/LUM!X _ Gabry Ponte - Monster.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'The Passenger (LaLaLa)',
        'artist': 'LUM!X  Mokaby  DTE  Gabry Ponte',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/LUM!X _ Mokaby _ D_T_E _ Gabry Ponte - The Passenger (LaLaLa).mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Life Will Change',
        'artist': 'Lyn (稲泉りん)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Lyn (稲泉りん) - Life Will Change.mp3',
        'cover': '',
        'lrc': '',
        'album': '「ペルソナ5」オリジナル・サウンドトラック (游戏《女神异闻录5》OST)'
    }, {
        'name': 'The Whims of Fate',
        'artist': 'Lyn (稲泉りん)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Lyn (稲泉りん) - The Whims of Fate.mp3',
        'cover': '',
        'lrc': '',
        'album': '「ペルソナ5」オリジナル・サウンドトラック (游戏《女神异闻录5》OST)'
    }, {
        'name': 'BREAK IN TO BREAK OUT',
        'artist': 'Lyn',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Lyn - BREAK IN TO BREAK OUT.mp3',
        'cover': '',
        'lrc': '',
        'album': 'PERSONA 5 the Animation Vol.1 Bonus CD'
    }, {
        'name': 'INFINITY',
        'artist': 'Lyn',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Lyn - INFINITY.mp3',
        'cover': '',
        'lrc': '',
        'album': 'PERSONA 5 the Animation Vol.1 Bonus CD'
    }, {
        'name': 'Avalon',
        'artist': 'Madison Mars',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Madison Mars - Avalon.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Back 2 Underground',
        'artist': 'Madison Mars',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Madison Mars - Back 2 Underground.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Back To You',
        'artist': 'Madison Mars',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Madison Mars - Back To You.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'The Drill',
        'artist': 'Magnificence  7 Skies',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Magnificence _ 7 Skies - The Drill.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Cold Water',
        'artist': 'Major Lazer',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Major Lazer _ Justin Bieber _ MØ - Cold Water.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Major Lazer Essentials (Explicit)'
    }, {
        'name': 'All The Time',
        'artist': 'Marc Benjamin',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Marc Benjamin - All The Time.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Be Alright',
        'artist': 'Marc Benjamin',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Marc Benjamin _ Timmo Hendriks - Be Alright.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Be Alright'
    }, {
        'name': 'Uptown Funk',
        'artist': 'Mark Ronson',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Mark Ronson _ Bruno Mars - Uptown Funk.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Uptown Special'
    }, {
        'name': 'Animals',
        'artist': 'Maroon 5',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Maroon 5 - Animals.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Animals'
    }, {
        'name': 'Lucky Strike',
        'artist': 'Maroon 5',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Maroon 5 - Lucky Strike.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Overexposed (Deluxe)'
    }, {
        'name': 'One More Night',
        'artist': 'Maroon 5',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Maroon 5 - One More Night.mp3',
        'cover': '',
        'lrc': '',
        'album': 'One More Night'
    }, {
        'name': 'Sugar',
        'artist': 'Maroon 5',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Maroon 5 - Sugar.mp3',
        'cover': '',
        'lrc': '',
        'album': 'V (Deluxe Version)'
    }, {
        'name': 'Maps',
        'artist': 'Maroon 5',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Maroon 5 _ Big Sean - Maps.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Maps'
    }, {
        'name': 'Moves Like Jagger (Soul Seekerz Radio Edit)',
        'artist': 'Maroon 5',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Maroon 5 _ Christina Aguilera - Moves Like Jagger (Soul Seekerz Radio Edit).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Moves Like Jagger (The Voice Performance)'
    }, {
        'name': 'Payphone',
        'artist': 'Maroon 5',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Maroon 5 _ Wiz Khalifa - Payphone.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Payphone'
    }, {
        'name': 'Wizard',
        'artist': 'Martin Garrix',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Martin Garrix - Wizard.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Error 404 (Original Mix)',
        'artist': 'Martin Garrix',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Martin Garrix _ Jay Hardway - Error 404 (Original Mix).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Error 404'
    }, {
        'name': 'Spotless',
        'artist': 'Martin Garrix',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Martin Garrix _ Jay Hardway - Spotless.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Spotless'
    }, {
        'name': 'There For You',
        'artist': 'Martin Garrix',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Martin Garrix _ Troye Sivan - There For You.mp3',
        'cover': '',
        'lrc': '',
        'album': 'There For You'
    }, {
        'name': 'Solo Dance',
        'artist': 'Martin Jensen',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Martin Jensen - Solo Dance.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Solo Dance'
    }, {
        'name': 'Czardas',
        'artist': 'Maxim Vengerov',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Maxim Vengerov _ Vag Papian - Hello Alone - 我的青春恋爱物语果然有问题 ED.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Classical Masterpieces [The Best Classical Music From the Great Composers] (The Best Classical Music From the Great Composers)'
    }, {
        'name': 'Sushi',
        'artist': 'Merk  Kremont',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Merk _ Kremont - Sushi.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Dear Teardrop',
        'artist': 'Mia REGINA',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Mia REGINA - Dear Teardrop.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Dear Teardrop'
    }, {
        'name': 'Day Or Night',
        'artist': 'Mike Williams',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Mike Williams - Day Or Night.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Weight of the World (English Version)',
        'artist': 'MONACA (モナカ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/MONACA (モナカ) - Weight of the World (English Version).mp3',
        'cover': '',
        'lrc': '',
        'album': 'NieR:Automata Original Soundtrack'
    }, {
        'name': 'Weight of the World/the End of YoRHa',
        'artist': 'MONACA',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/MONACA - Weight of the World_the End of YoRHa.mp3',
        'cover': '',
        'lrc': '',
        'album': 'NieR:Automata Original Soundtrack (尼尔:机械纪元 原声带)'
    }, {
        'name': 'Aura',
        'artist': 'Moovs',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Moovs - Aura.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Aura'
    }, {
        'name': 'Nightmare (Explicit)',
        'artist': 'Murat Salman',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Murat Salman _ Nickobella - Nightmare (Explicit).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Nightmare (Explicit)'
    }, {
        'name': 'HYDRA',
        'artist': 'MYTH & ROID',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/MYTH & ROID - HYDRA.mp3',
        'cover': '',
        'lrc': '',
        'album': 'HYDRA'
    }, {
        'name': 'L.L.L.',
        'artist': 'MYTH & ROID',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/MYTH & ROID - L.L.L..mp3',
        'cover': '',
        'lrc': '',
        'album': 'L.L.L.'
    }, {
        'name': 'STYX HELIX',
        'artist': 'MYTH & ROID',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/MYTH & ROID - STYX HELIX.mp3',
        'cover': '',
        'lrc': '',
        'album': "eYe's"
    }, {
        'name': 'VORACITY',
        'artist': 'MYTH & ROID',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/MYTH & ROID - VORACITY.mp3',
        'cover': '',
        'lrc': '',
        'album': 'VORACITY'
    }, {
        'name': 'LIKE',
        'artist': 'N2V',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/N2V - LIKE.mp3',
        'cover': '',
        'lrc': '',
        'album': 'LIKE'
    }, {
        'name': 'You',
        'artist': 'N2V',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/N2V - You.mp3',
        'cover': '',
        'lrc': '',
        'album': 'You'
    }, {
        'name': 'アザレア (杜鹃花)',
        'artist': 'nano.RIPE (ナノライプ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/nano.RIPE (ナノライプ) - アザレア (杜鹃花).mp3',
        'cover': '',
        'lrc': '',
        'album': 'アザレア (杜鹃花)'
    }, {
        'name': 'Illusion (feat KARRA)',
        'artist': 'NERVO  Firebeatz  Karra',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/NERVO _ Firebeatz _ Karra - Illusion (feat_ KARRA).mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Last Of The Wilds',
        'artist': 'Nightwish',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Nightwish - Last Of The Wilds.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Dark Passion Play'
    }, {
        'name': 'Hooked (Explicit)',
        'artist': 'Notion',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Notion - Hooked (Explicit).mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Hooked (My Nu Leng Remix|Explicit)',
        'artist': 'Notion',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Notion - Hooked (My Nu Leng Remix_Explicit).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Hooked (My Nu Leng Remix) [Explicit]'
    }, {
        'name': 'Lift Me Up (feat Carla Monroe)',
        'artist': 'Oliver Heldens  Firebeatz  Schella  Carla Monroe',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Oliver Heldens _ Firebeatz _ Schella _ Carla Monroe - Lift Me Up (feat_ Carla Monroe).mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'The GOAT',
        'artist': 'Oliver Heldens  Mesto',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Oliver Heldens _ Mesto - The G_O_A_T_.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Best Song Ever',
        'artist': 'One Direction',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/One Direction - Best Song Ever.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Best Song Ever'
    }, {
        'name': 'Drag Me Down',
        'artist': 'One Direction',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/One Direction - Drag Me Down.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Drag Me Down'
    }, {
        'name': 'Perfect',
        'artist': 'One Direction',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/One Direction - Perfect.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Perfect'
    }, {
        'name': 'What Makes You Beautiful',
        'artist': 'One Direction',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/One Direction - What Makes You Beautiful.mp3',
        'cover': '',
        'lrc': '',
        'album': 'What Makes You Beautiful'
    }, {
        'name': 'Counting Stars',
        'artist': 'OneRepublic',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/OneRepublic - Counting Stars.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Native (Deluxe Version)'
    }, {
        'name': 'Fireflies',
        'artist': 'Owl City',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Owl City - Fireflies.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Ocean Eyes (Deluxe Edition)'
    }, {
        'name': 'Shooting Star',
        'artist': 'Owl City',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Owl City - Shooting Star.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Shooting Star'
    }, {
        'name': 'Speed Of Love',
        'artist': 'Owl City',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Owl City - Speed Of Love.mp3',
        'cover': '',
        'lrc': '',
        'album': 'The Midsummer Station'
    }, {
        'name': 'The Saltwater Room',
        'artist': 'Owl City',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Owl City - The Saltwater Room.mp3',
        'cover': '',
        'lrc': '',
        'album': "Maybe I'm Dreaming"
    }, {
        'name': 'The Technicolor Phase',
        'artist': 'Owl City',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Owl City - The Technicolor Phase.mp3',
        'cover': '',
        'lrc': '',
        'album': "Maybe I'm Dreaming"
    }, {
        'name': 'Vanilla Twilight',
        'artist': 'Owl City',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Owl City - Vanilla Twilight.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Ocean Eyes (Deluxe Edition)'
    }, {
        'name': 'Good Time',
        'artist': 'Owl City',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Owl City _ Carly Rae Jepsen - Good Time.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Good Time'
    }, {
        'name': 'Beautiful Times',
        'artist': 'Owl City',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Owl City _ Lindsey Stirling - Beautiful Times.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Beautiful Times'
    }, {
        'name': 'Silent Solitude',
        'artist': 'OxT',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/OxT - Silent Solitude.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Silent Solitude'
    }, {
        'name': 'Sad Song',
        'artist': 'Parson James',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Parson James - Sad Song.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Sad Song'
    }, {
        'name': 'How It Goes',
        'artist': 'Pharien',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Pharien _ Amero - How It Goes.mp3',
        'cover': '',
        'lrc': '',
        'album': 'How It Goes'
    }, {
        'name': 'Gunning For You(feat. Nevve)',
        'artist': 'QUIX',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/QUIX _ Nevve - Gunning For You(feat_ Nevve).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Gunning For You (feat. Nevve)'
    }, {
        'name': 'Sakura (樱花)',
        'artist': 'R3HAB',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/R3HAB - Sakura (樱花).mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Sakura',
        'artist': 'R3HAB',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/R3HAB - Sakura.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Paranoia',
        'artist': 'Radiology  The Golden Army',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Radiology _ The Golden Army - Paranoia.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Zenzenzense (English ver.)',
        'artist': 'RADWIMPS (ラッドウィンプス)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/RADWIMPS (ラッドウィンプス) - Zenzenzense (English ver.).mp3',
        'cover': '',
        'lrc': '',
        'album': '君の名は。 English edition (你的名字。)'
    }, {
        'name': 'Zenzenzense',
        'artist': 'RADWIMPS',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/RADWIMPS - Zenzenzense.mp3',
        'cover': '',
        'lrc': '',
        'album': '君の名は。 English edition'
    }, {
        'name': 'なんでもないや (没什么大不了) (Movie ver.)',
        'artist': 'RADWIMPS (ラッドウィンプス)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/RADWIMPS (ラッドウィンプス) - なんでもないや (没什么大不了) (Movie ver.).mp3',
        'cover': '',
        'lrc': '',
        'album': '君の名は。 (《你的名字。》动画电影原声带)'
    }, {
        'name': 'なんでもないや',
        'artist': 'RADWIMPS',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/RADWIMPS - なんでもないや.mp3',
        'cover': '',
        'lrc': '',
        'album': '君の名は。'
    }, {
        'name': 'スパークル (火花) (Movie ver.)',
        'artist': 'RADWIMPS (ラッドウィンプス)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/RADWIMPS (ラッドウィンプス) - スパークル (火花) (Movie ver.)(280k).mp3',
        'cover': '',
        'lrc': '',
        'album': '君の名は。 (《你的名字。》动画电影原声带)'
    }, {
        'name': 'スパークル',
        'artist': 'RADWIMPS',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/RADWIMPS - スパークル(280k).mp3',
        'cover': '',
        'lrc': '',
        'album': '君の名は。'
    }, {
        'name': 'No Playin',
        'artist': 'Raven & Kreyn',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Raven & Kreyn - No Playin.mp3',
        'cover': '',
        'lrc': '',
        'album': 'No Playin'
    }, {
        'name': 'Time Is Over',
        'artist': 'RayRay',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/RayRay _ Teknoclash - Time Is Over.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Time Is Over'
    }, {
        'name': 'Found You',
        'artist': 'RetroVision',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/RetroVision - Found You.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Take Off',
        'artist': 'RetroVision',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/RetroVision - Take Off.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'We Found Love',
        'artist': 'Rihanna',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Rihanna _ Calvin Harris - We Found Love.mp3',
        'cover': '',
        'lrc': '',
        'album': 'We Found Love'
    }, {
        'name': 'Work (R3hab Remix)',
        'artist': 'Rihanna',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Rihanna _ Drake _ R3HAB - Work (R3hab Remix).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Work (Remixes)'
    }, {
        'name': 'But still…',
        'artist': 'SawanoHiroyuki[nZk] (泽野弘之)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/SawanoHiroyuki[nZk] (泽野弘之) _ Aimer (エメ) - But still….mp3',
        'cover': '',
        'lrc': '',
        'album': 'UnChild'
    }, {
        'name': 'ninelie ＜cry-v＞',
        'artist': 'SawanoHiroyuki[nZk] (泽野弘之)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/SawanoHiroyuki[nZk] (泽野弘之) _ Aimer (エメ) - ninelie ＜cry-v＞.mp3',
        'cover': '',
        'lrc': '',
        'album': '2V-ALK'
    }, {
        'name': 'X.U.',
        'artist': '澤野弘之 (さわの ひろゆき)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/澤野弘之 (さわの ひろゆき) _ Gemie - X.U..mp3',
        'cover': '',
        'lrc': '',
        'album': 'X.U. | scaPEGoat'
    }, {
        'name': 'INSANITY LOVE',
        'artist': '澤野弘之 (さわの ひろゆき)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/澤野弘之 (さわの ひろゆき) _ Mica Caldito - INSANITY LOVE.mp3',
        'cover': '',
        'lrc': '',
        'album': 'X.U. | scaPEGoat'
    }, {
        'name': 'VV-ALK',
        'artist': 'SawanoHiroyuki[nZk] (泽野弘之)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/SawanoHiroyuki[nZk] (泽野弘之) _ Tielle - VV-ALK.mp3',
        'cover': '',
        'lrc': '',
        'album': '2V-ALK'
    }, {
        'name': 'Gravity Wall',
        'artist': 'SawanoHiroyuki[nZk] (泽野弘之)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/SawanoHiroyuki[nZk] (泽野弘之) _ Tielle _ Gemie - Gravity Wall.mp3',
        'cover': '',
        'lrc': '',
        'album': 'gravityWall/shØut'
    }, {
        'name': 'shØut',
        'artist': 'SawanoHiroyuki[nZk] (泽野弘之)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/SawanoHiroyuki[nZk] (泽野弘之) _ Tielle _ Gemie - shØut.mp3',
        'cover': '',
        'lrc': '',
        'album': 'gravityWall/shØut'
    }, {
        'name': 'aLIEz',
        'artist': '澤野弘之 (さわの ひろゆき)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/澤野弘之 (さわの ひろゆき) _ mizuki (瑞葵) - aLIEz.mp3',
        'cover': '',
        'lrc': '',
        'album': 'A/Z|aLIEz'
    }, {
        'name': '時の魔法',
        'artist': 'Setsuna Ogiso',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/小木曽雪菜 (Setsuna Ogiso) - 時の魔法 (时间的魔法).mp3',
        'cover': '',
        'lrc': '',
        'album': 'WHITE ALBUM2 Original Soundtrack 〜closing〜'
    }, {
        'name': 'Stitches',
        'artist': 'Shawn Mendes',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Shawn Mendes - Stitches.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Handwritten (Deluxe)'
    }, {
        'name': "There's Nothing Holdin' Me Back",
        'artist': 'Shawn Mendes',
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Shawn Mendes - There's Nothing Holdin' Me Back.mp3",
        'cover': '',
        'lrc': '',
        'album': 'Illuminate (Deluxe)'
    }, {
        'name': 'SOS',
        'artist': 'Sikdope',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Sikdope - SOS.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Coming Down (Dux n Bass Remix)',
        'artist': 'Sikdope',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Sikdope _ Duke & Jones - Coming Down (Dux n Bass Remix).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Coming Down (Dux n Bass Remix)'
    }, {
        'name': 'Coming Down',
        'artist': 'Sikdope',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Sikdope _ Duke & Jones - Coming Down.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Coming Down'
    }, {
        'name': 'Want You to Know',
        'artist': 'Slushii',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Slushii - Want You to Know.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Want You to Know'
    }, {
        'name': 'Make It Rock',
        'artist': 'SLVR',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/SLVR - Make It Rock.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Make It Rock'
    }, {
        'name': 'Stupid',
        'artist': 'SLVR',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/SLVR - Stupid.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Stupid'
    }, {
        'name': 'ココロトラベル (心灵之旅)',
        'artist': "Snail's House (Keitaro Ujiie)",
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Snail's House (Keitaro Ujiie) - ココロトラベル (心灵之旅).mp3",
        'cover': '',
        'lrc': '',
        'album': 'ココロトラベル (心灵之旅)'
    }, {
        'name': "Won't Look Back(feat. Soundr)",
        'artist': 'StayLoose',
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/StayLoose _ Last Heroes _ Soundr - Won't Look Back(feat_ Soundr).mp3",
        'cover': '',
        'lrc': '',
        'album': "Won't Look Back (feat. Soundr)"
    }, {
        'name': 'Sky (Radio Edit)',
        'artist': 'Steerner',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Steerner _ Martell - Sky (Radio Edit).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Sky (Radio Edit)'
    }, {
        'name': 'Hype',
        'artist': 'Sunstars',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Sunstars - Hype.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Hype'
    }, {
        'name': 'My Dearest (TV Version)',
        'artist': 'supercell',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/supercell - My Dearest (TV Version).mp3',
        'cover': '',
        'lrc': '',
        'album': 'My Dearest'
    }, {
        'name': 'Invisible Date',
        'artist': 'sweet ARMS (スウィートアームズ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/sweet ARMS (スウィートアームズ) - Invisible Date.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Invisible Date'
    }, {
        'name': 'Trust in you (相信你)',
        'artist': 'sweet ARMS (スウィートアームズ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/sweet ARMS (スウィートアームズ) - Trust in you (相信你).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Trust in you (相信你)'
    }, {
        'name': 'デート・ア・ライブ (约会大作战)',
        'artist': 'sweet ARMS',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/sweet ARMS - デート・ア・ライブ (约会大作战).mp3',
        'cover': '',
        'lrc': '',
        'album': 'デートアライブ (约会大作战)'
    }, {
        'name': '22',
        'artist': 'Taylor Swift',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Taylor Swift - 22.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Red (Deluxe Version)'
    }, {
        'name': 'Fearless',
        'artist': 'Taylor Swift',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Taylor Swift - Fearless.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Fearless (Platinum Edition)'
    }, {
        'name': 'Forever & Always (Piano Version)',
        'artist': 'Taylor Swift',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Taylor Swift - Forever & Always (Piano Version).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Fearless (Platinum Edition)'
    }, {
        'name': 'I Knew You Were Trouble.',
        'artist': 'Taylor Swift',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Taylor Swift - I Knew You Were Trouble..mp3',
        'cover': '',
        'lrc': '',
        'album': 'Red (Deluxe Version)'
    }, {
        'name': 'Long Live',
        'artist': 'Taylor Swift',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Taylor Swift - Long Live.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Speak Now (Deluxe Package)'
    }, {
        'name': 'Love Story',
        'artist': 'Taylor Swift',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Taylor Swift - Love Story.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Fearless (Platinum Edition)'
    }, {
        'name': 'Red',
        'artist': 'Taylor Swift',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Taylor Swift - Red.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Red'
    }, {
        'name': 'Safe & Sound',
        'artist': 'Taylor Swift',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Taylor Swift - Safe & Sound.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Safe & Sound (From "The Hunger Games" Soundtrack)'
    }, {
        'name': 'Sparks Fly',
        'artist': 'Taylor Swift',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Taylor Swift - Sparks Fly.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Speak Now (Deluxe Package)'
    }, {
        'name': 'Stay Stay Stay',
        'artist': 'Taylor Swift',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Taylor Swift - Stay Stay Stay.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Red (Deluxe Version)'
    }, {
        'name': 'We Are Never Ever Getting Back Together',
        'artist': 'Taylor Swift',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Taylor Swift - We Are Never Ever Getting Back Together.mp3',
        'cover': '',
        'lrc': '',
        'album': 'We Are Never Ever Getting Back Together'
    }, {
        'name': 'White Horse',
        'artist': 'Taylor Swift',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Taylor Swift - White Horse.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Fearless (Platinum Edition)'
    }, {
        'name': 'You Belong With Me',
        'artist': 'Taylor Swift',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Taylor Swift - You Belong With Me.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Fearless (Platinum Edition)'
    }, {
        'name': "You're Not Sorry",
        'artist': 'Taylor Swift',
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Taylor Swift - You're Not Sorry.mp3",
        'cover': '',
        'lrc': '',
        'album': 'Fearless (Platinum Edition)'
    }, {
        'name': 'Bad Blood',
        'artist': 'Taylor Swift',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Taylor Swift _ Kendrick Lamar - Bad Blood.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Bad Blood'
    }, {
        'name': 'The Time',
        'artist': 'The Black Eyed Peas',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/The Black Eyed Peas - The Time.mp3',
        'cover': '',
        'lrc': '',
        'album': 'The Beginning'
    }, {
        'name': 'The One (Explicit)',
        'artist': 'The Chainsmokers',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/The Chainsmokers - The One (Explicit).mp3',
        'cover': '',
        'lrc': '',
        'album': 'The One'
    }, {
        'name': 'Something Just Like This',
        'artist': 'The Chainsmokers',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/The Chainsmokers _ Coldplay - Something Just Like This.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Something Just Like This'
    }, {
        'name': "Don't Let Me Down",
        'artist': 'The Chainsmokers',
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/The Chainsmokers _ Daya - Don't Let Me Down.mp3",
        'cover': '',
        'lrc': '',
        'album': "Don't Let Me Down"
    }, {
        'name': 'Closer',
        'artist': 'The Chainsmokers',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/The Chainsmokers _ Halsey - Closer.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Closer'
    }, {
        'name': 'National Anthem of the Ussr',
        'artist': 'The Red Army Choir',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/The Red Army Choir - National Anthem of the Ussr.mp3',
        'cover': '',
        'lrc': '',
        'album': 'The Best Of The Red Army Choir'
    }, {
        'name': 'The Red Army Is the Strongest (红军最强)',
        'artist': 'The Red Army Choir',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/The Red Army Choir - The Red Army Is the Strongest (红军最强).mp3',
        'cover': '',
        'lrc': '',
        'album': 'The Best Of The Red Army Choir'
    }, {
        'name': 'Intro',
        'artist': 'The xx',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/The xx - Intro.mp3',
        'cover': '',
        'lrc': '',
        'album': 'xx'
    }, {
        'name': 'VCR',
        'artist': 'The xx',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/The xx - VCR.mp3',
        'cover': '',
        'lrc': '',
        'album': 'xx'
    }, {
        'name': 'Monody',
        'artist': 'TheFatRat',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/TheFatRat _ Laura Brehm - Monody.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Monody'
    }, {
        'name': 'Unity',
        'artist': 'TheFatRat',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/TheFatRat - Unity.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Unity'
    }, {
        'name': 'Empire of Angels',
        'artist': 'Thomas Bergersen',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Thomas Bergersen - Empire of Angels.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Sun'
    }, {
        'name': 'For the Win',
        'artist': 'Thomas Bergersen',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Thomas Bergersen _ Two Steps From Hell - For the Win.mp3',
        'cover': '',
        'lrc': '',
        'album': 'SkyWorld'
    }, {
        'name': 'SkyWorld',
        'artist': 'Thomas Bergersen',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Thomas Bergersen _ Two Steps From Hell - SkyWorld.mp3',
        'cover': '',
        'lrc': '',
        'album': 'SkyWorld'
    }, {
        'name': 'Apologize',
        'artist': 'Timbaland',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Timbaland _ OneRepublic - Apologize.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Timbaland Presents: Shock Value'
    }, {
        'name': 'My Frequency (feat. RebMoe)',
        'artist': 'Tiësto',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Tiësto _ 7 Skies _ RebMoe - My Frequency (feat_ RebMoe).mp3',
        'cover': '',
        'lrc': '',
        'album': 'My Frequency (feat. RebMoe)'
    }, {
        'name': 'Signal (信号)',
        'artist': 'TK from 凛冽时雨 (TK from 凛として時雨)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/TK from 凛冽时雨 (TK from 凛として時雨) - Signal (信号).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Signal (信号)'
    }, {
        'name': 'contrast',
        'artist': 'TK from 凛冽时雨 (TK from 凛として時雨)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/TK from 凛冽时雨 (TK from 凛として時雨) - contrast.mp3',
        'cover': '',
        'lrc': '',
        'album': 'contrast (对比)'
    }, {
        'name': 'Colors',
        'artist': 'Tobu',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Tobu - Colors.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Colors'
    }, {
        'name': 'Life',
        'artist': 'Tobu',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Tobu - Life.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Life'
    }, {
        'name': 'Sunburst',
        'artist': 'Tobu',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Tobu _ Itro - Sunburst.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Sunburst'
    }, {
        'name': 'The Power (feat Snap!)',
        'artist': 'Tommie Sunshine  Haus of Panda  Snap!',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Tommie Sunshine _ Haus of Panda _ Snap! - The Power (feat_ Snap!).mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Slow Motion',
        'artist': 'Trey Songz',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Trey Songz - Slow Motion.mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'YOUTH',
        'artist': 'Troye Sivan',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Troye Sivan - YOUTH.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Blue Neighbourhood (Deluxe)'
    }, {
        'name': 'Sincerely',
        'artist': 'TRUE (唐沢美帆)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/TRUE (唐沢美帆) - Sincerely.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Sincerely (アニメ盤)'
    }, {
        'name': 'Dragon Rider',
        'artist': 'Two Steps From Hell',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Two Steps From Hell - Dragon Rider.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Dynasty'
    }, {
        'name': 'Empire Of Angels',
        'artist': 'Two Steps From Hell',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Two Steps From Hell - Empire Of Angels.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Eternal'
    }, {
        'name': 'For The Win',
        'artist': 'Two Steps From Hell',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Two Steps From Hell - For The Win.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Skyworld'
    }, {
        'name': 'Skyworld',
        'artist': 'Two Steps From Hell',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Two Steps From Hell - Skyworld.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Skyworld'
    }, {
        'name': 'Star Sky',
        'artist': 'Two Steps From Hell',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Two Steps From Hell _ Thomas Bergersen - Star Sky.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Battlecry'
    }, {
        'name': 'Strength of a Thousand Men',
        'artist': 'Two Steps From Hell',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Two Steps From Hell - Strength of a Thousand Men.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Archangel'
    }, {
        'name': 'Victory',
        'artist': 'Two Steps From Hell',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Two Steps From Hell _ Thomas Bergersen - Victory.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Battlecry'
    }, {
        'name': 'Ya es Navidad',
        'artist': 'Ventino',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Ventino - Ya es Navidad.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Ya es Navidad'
    }, {
        'name': 'Nevada',
        'artist': 'Vicetone',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Vicetone _ Cozi Zuehlsdorff - Nevada.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Monstercat - Best of 2016'
    }, {
        'name': 'いけないボーダーライン (禁绝边境线)',
        'artist': 'ワルキューレ (Walküre)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/ワルキューレ (Walküre) - いけないボーダーライン (禁绝边境线).mp3',
        'cover': '',
        'lrc': '',
        'album': 'いけないボーダーライン (禁绝边境线)'
    }, {
        'name': '一度だけの恋なら (倘若人生唯有一次恋爱)',
        'artist': 'ワルキューレ (Walküre)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/ワルキューレ (Walküre) - 一度だけの恋なら (倘若人生唯有一次恋爱).mp3',
        'cover': '',
        'lrc': '',
        'album': '一度だけの恋なら/ルンがピカッと光ったら (倘若人生唯有一次恋爱/只要符文闪闪发光)'
    }, {
        'name': 'Beautiful World',
        'artist': 'XX:me',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/XX_me - Beautiful World.mp3',
        'cover': '',
        'lrc': '',
        'album': 'ダーリン・イン・ザ・フランキス エンディング集 vol.1 (DARLING in the FRANXX 终结集 vol.1)'
    }, {
        'name': 'トリカゴ (鸟笼)',
        'artist': 'XX:me',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/XX_me - トリカゴ (鸟笼).mp3',
        'cover': '',
        'lrc': '',
        'album': 'ダーリン・イン・ザ・フランキス エンディング集 vol.1 (DARLING in the FRANXX 终结集 vol.1)'
    }, {
        'name': '真夏のセツナ (盛夏的刹那)',
        'artist': 'XX:me',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/XX_me - 真夏のセツナ (盛夏的刹那).mp3',
        'cover': '',
        'lrc': '',
        'album': 'ダーリン・イン・ザ・フランキス エンディング集 vol.1 (DARLING in the FRANXX 终结集 vol.1)'
    }, {
        'name': 'ユキトキ (雪融) (Instrumental)',
        'artist': 'yanaginagi (やなぎなぎ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/yanaginagi (やなぎなぎ) - ユキトキ (雪融) (Instrumental).mp3',
        'cover': '',
        'lrc': '',
        'album': 'ユキトキ TVアニメ「やはり俺の青春ラブコメはまちがっている。」オープニングテーマ (ユキトキ)'
    }, {
        'name': '星降る夜のアデニウム (星降之夜的天宝花)',
        'artist': 'Yunomi (ゆのみ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Yunomi (ゆのみ) _ nicamoq (にかもきゅ) - 星降る夜のアデニウム (星降之夜的天宝花).mp3',
        'cover': '',
        'lrc': '',
        'album': 'ゆのもきゅ (由乃姆Q)'
    }, {
        'name': 'Not So Bad (feat Emie)',
        'artist': 'Yves V  Ilkay Sencan  Emie',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Yves V _ Ilkay Sencan _ Emie - Not So Bad (feat_ Emie).mp3',
        'cover': '',
        'lrc': '',
        'album': ''
    }, {
        'name': 'Stay',
        'artist': 'Zedd',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Zedd _ Alessia Cara - Stay.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Stay'
    }, {
        'name': 'Clarity',
        'artist': 'Zedd',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Zedd _ Foxes - Clarity.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Clarity'
    }, {
        'name': 'Beautiful Now',
        'artist': 'Zedd',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Zedd _ Jon Bellion - Beautiful Now.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Beautiful Now'
    }, {
        'name': 'Happy maker!',
        'artist': "缪斯 (μ's)",
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/缪斯 (μ's) - Happy maker!.mp3",
        'cover': '',
        'lrc': '',
        'album': "μ's Best Album Best Live! Collection II"
    }, {
        'name': 'KiRa-KiRa Sensation!',
        'artist': "缪斯 (μ's)",
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/缪斯 (μ's) - KiRa-KiRa Sensation!.mp3",
        'cover': '',
        'lrc': '',
        'album': 'KiRa-KiRa Sensation!/Happy maker!'
    }, {
        'name': 'No brand girls',
        'artist': "缪斯 (μ's)",
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/缪斯 (μ's) - No brand girls.mp3",
        'cover': '',
        'lrc': '',
        'album': 'No Brand Girls'
    }, {
        'name': 'START:DASH!!',
        'artist': "缪斯 (μ's)",
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/缪斯 (μ's) - START_DASH!!.mp3",
        'cover': '',
        'lrc': '',
        'album': 'No Brand Girls'
    }, {
        'name': 'Wonder zone',
        'artist': "缪斯 (μ's)",
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/缪斯 (μ's) - Wonder zone.mp3",
        'cover': '',
        'lrc': '',
        'album': "μ's Best Album Best Live! Collection II"
    }, {
        'name': 'きっと青春が聞こえる (一定能听见青春的乐章)',
        'artist': "缪斯 (μ's)",
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/缪斯 (μ's) - きっと青春が聞こえる (一定能听见青春的乐章).mp3",
        'cover': '',
        'lrc': '',
        'album': 'きっと青春が聞こえる (一定能听见青春的乐章)'
    }, {
        'name': 'これからのSomeday (从今以后的Someday)',
        'artist': "缪斯 (μ's)",
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/缪斯 (μ's) - これからのSomeday (从今以后的Someday).mp3",
        'cover': '',
        'lrc': '',
        'album': "μ's Best Album Best Live! Collection II"
    }, {
        'name': 'さようならへさよなら！ (向再见告别)',
        'artist': "缪斯 (μ's)",
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/缪斯 (μ's) - さようならへさよなら！ (向再见告别).mp3",
        'cover': '',
        'lrc': '',
        'album': 'MOMENT RING'
    }, {
        'name': 'それは僕たちの奇跡 (那是我们的奇迹)',
        'artist': "缪斯 (μ's)",
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/缪斯 (μ's) - それは僕たちの奇跡 (那是我们的奇迹).mp3",
        'cover': '',
        'lrc': '',
        'album': 'それは僕たちの奇跡 (那是我们的奇迹)'
    }, {
        'name': 'どんなときもずっと (无论何时一直)',
        'artist': "缪斯 (μ's)",
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/缪斯 (μ's) - どんなときもずっと (无论何时一直).mp3",
        'cover': '',
        'lrc': '',
        'album': 'どんなときもずっと (无论何时一直)'
    }, {
        'name': 'ユメノトビラ (梦想之门)',
        'artist': "缪斯 (μ's)",
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/缪斯 (μ's) - ユメノトビラ (梦想之门).mp3",
        'cover': '',
        'lrc': '',
        'album': 'ユメノトビラ (梦想之门)'
    }, {
        'name': '僕たちはひとつの光 (我们是合而为一的光芒)',
        'artist': "缪斯 (μ's)",
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/缪斯 (μ's) - 僕たちはひとつの光 (我们是合而为一的光芒).mp3",
        'cover': '',
        'lrc': '',
        'album': '僕たちはひとつの光 / Future style (我们是合而为一的光芒 / Future style)'
    }, {
        'name': '僕らは今のなかで (我们身处当下)',
        'artist': "缪斯 (μ's)",
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/缪斯 (μ's) - 僕らは今のなかで (我们身处当下).mp3",
        'cover': '',
        'lrc': '',
        'album': '僕らは今のなかで (我们身处当下)'
    }, {
        'name': '輝夜の城で踊りたい (欲于辉夜之城起舞)',
        'artist': "缪斯 (μ's)",
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/缪斯 (μ's) - 輝夜の城で踊りたい (欲于辉夜之城起舞).mp3",
        'cover': '',
        'lrc': '',
        'album': 'きっと青春が聞こえる (一定能听见青春的乐章)'
    }, {
        'name': 'Гимн России',
        'artist': 'Любэ',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/Любэ - Гимн России.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Рассея'
    }, {
        'name': '僕らのつづき (我们的未来)',
        'artist': 'じょん',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/じょん _ 初音未来 (初音ミク) - 僕らのつづき (我们的未来).mp3',
        'cover': '',
        'lrc': '',
        'album': 'meteor'
    }, {
        'name': 'SAYONARA (サヨナラ)',
        'artist': 'てぃあら (tierra)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/てぃあら (tierra) - SAYONARA (サヨナラ).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TIARA (头饰)'
    }, {
        'name': 'Soleil (ソレイユ)',
        'artist': 'てぃあら (tierra)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/てぃあら (tierra) - Soleil (ソレイユ).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TIARA (头饰)'
    }, {
        'name': "Undefined-world's end mix- (アンディファインド\u3000ワールズ\u3000エンド\u3000ミックス) (world's end mix)",
        'artist': 'てぃあら (tierra)',
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/てぃあら (tierra) - Undefined-world's end mix- (アンディファインド\u3000ワールズ\u3000エンド\u3000ミックス) (world's end mix).mp3",
        'cover': '',
        'lrc': '',
        'album': 'TIARA (头饰)'
    }, {
        'name': '雲流れ',
        'artist': 'みかん箱',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/みかん箱 _ Foxtail-Grass Studio - 雲流れ.mp3',
        'cover': '',
        'lrc': '',
        'album': 'pastoral landscape'
    }, {
        'name': '新宝島',
        'artist': 'サカナクション',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/サカナクション - 新宝島.mp3',
        'cover': '',
        'lrc': '',
        'album': '新宝島'
    }, {
        'name': 'ぼなぺてぃーと♡S (Buonappetito♡S)',
        'artist': 'ブレンド・A (Blend·A)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/ブレンド・A (Blend·A) - ぼなぺてぃーと♡S (Buonappetito♡S).mp3',
        'cover': '',
        'lrc': '',
        'album': 'ぼなぺてぃーと♡S/デタラメなマイナスとプラスにおけるブレンド考 (Buonappetito♡S/荒唐的负面和正面的Blend考)'
    }, {
        'name': 'Girls',
        'artist': 'メイリア (水桥舞)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/メイリア (水桥舞) - Girls.mp3',
        'cover': '',
        'lrc': '',
        'album': 'aMazing MusiQue PaRK'
    }, {
        'name': 'Storm in Lover',
        'artist': '三森すずこ (三森铃子)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/三森すずこ (三森铃子) _ 南條愛乃 (なんじょう よしの) - Storm in Lover.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Storm in Lover'
    }, {
        'name': 'Old Memory',
        'artist': '三轮学 (Manack)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/三轮学 (Manack) - Old Memory.mp3',
        'cover': '',
        'lrc': '',
        'album': '『ヨスガノソラ』オリジナルサウンドトラック-New- (《缘之空》原声带-New-)'
    }, {
        'name': 'After All ～綴る想い～ (After All ～编缀回忆～)',
        'artist': '上原れな (上原玲奈)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/上原れな (上原玲奈) - After All ～綴る想い～ (After All ～编缀回忆～).mp3',
        'cover': '',
        'lrc': '',
        'album': 'WHITE ALBUM2 ORIGINAL SOUNDTRACK~introductory~ (TV动画《白色相簿第二季》原声带~introductory~)'
    }, {
        'name': 'さよならのこと (再见的事)',
        'artist': '上原玲奈 (上原れな)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/上原玲奈 (上原れな) - さよならのこと (再见的事).mp3',
        'cover': '',
        'lrc': '',
        'album': "TVアニメ「WHITE ALBUM2」OPテーマ「届かない恋’13」 (TV动画《白色相簿第二季》OP专辑《无法传达的爱恋'13》)"
    }, {
        'name': '届かない恋 (无法传达的恋爱)',
        'artist': '上原玲奈 (上原れな)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/上原玲奈 (上原れな) - 届かない恋 (无法传达的恋爱).mp3',
        'cover': '',
        'lrc': '',
        'album': "l'espoir"
    }, {
        'name': '幸せな記憶 (幸福的记忆)',
        'artist': '上原玲奈 (上原れな)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/上原玲奈 (上原れな) - 幸せな記憶 (幸福的记忆).mp3',
        'cover': '',
        'lrc': '',
        'album': "l'espoir"
    }, {
        'name': 'After All〜綴る想い〜',
        'artist': '上原れな',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/上原玲奈 (上原れな) - After All〜綴る想い〜 (After All ～编缀回忆～).mp3',
        'cover': '',
        'lrc': '',
        'album': 'WHITE ALBUM2 Original Soundtrack〜introductory〜'
    }, {
        'name': 'Answer',
        'artist': '上原玲奈 (上原れな)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/上原玲奈 (上原れな) - Answer.mp3',
        'cover': '',
        'lrc': '',
        'album': 'WHITE ALBUM2 Original Soundtrack ～answer～ (白色相簿2 游戏原声带~answer~)'
    }, {
        'name': '东方红',
        'artist': '东方红合唱队',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/东方红合唱队 - 东方红.mp3',
        'cover': '',
        'lrc': '',
        'album': '激扬的革命歌曲'
    }, {
        'name': '国际歌',
        'artist': '中国广播艺术团交响乐团',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/中国广播艺术团交响乐团 - 国际歌.mp3',
        'cover': '',
        'lrc': '',
        'album': '   '
    }, {
        'name': 'KISS OF DEATH (死亡之吻) (Produced by HYDE)',
        'artist': '中島美嘉 (なかしま みか)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/中島美嘉 (なかしま みか) - KISS OF DEATH (死亡之吻) (Produced by HYDE).mp3',
        'cover': '',
        'lrc': '',
        'album': 'KISS OF DEATH (Produced by HYDE)'
    }, {
        'name': 'Clarence',
        'artist': '中川イサト (Isato Nakagawa)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/中川イサト (Isato Nakagawa) - Clarence.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Dream Catcher'
    }, {
        'name': 'Speed of Light',
        'artist': '二宮愛 (Ai Ninomiya)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/二宮愛 (Ai Ninomiya) _ DJ OKAWARI - Speed of Light.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Speed of Light'
    }, {
        'name': 'ダイスキだったらダイジョウブ! (最喜欢的话就没问题！)',
        'artist': '伊波杏樹 (いなみ あんじゅ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/伊波杏樹 (いなみ あんじゅ) _ 逢田梨香子 (あいだ りかこ) _ 斉藤朱夏 (さいとう しゅか) - ダイスキだったらダイジョウブ! (最喜欢的话就没问题！).mp3',
        'cover': '',
        'lrc': '',
        'album': '決めたよHand in Hand／ダイスキだったらダイジョウブ！ (决定了Hand in Hand／最喜欢的话就没问题！)'
    }, {
        'name': 'Hacking to the Gate',
        'artist': '伊藤加奈子 (いとうかなこ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/伊藤加奈子 (いとうかなこ) - Hacking to the Gate.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Hacking to the Gate'
    }, {
        'name': 'ファティマ (Fátima)',
        'artist': '伊藤加奈子 (いとうかなこ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/伊藤加奈子 (いとうかなこ) - ファティマ (Fátima).mp3',
        'cover': '',
        'lrc': '',
        'album': 'ファティマ (Fátima)'
    }, {
        'name': 'Be clear',
        'artist': '佐々木恵梨',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/佐々木恵梨 - Be clear.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Period'
    }, {
        'name': 'GATE OF STEINER (Acoustic ver.)',
        'artist': '佐々木恵梨',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/佐々木恵梨 - GATE OF STEINER (Acoustic ver.).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Period'
    }, {
        'name': 'Ring of Fortune',
        'artist': '佐々木恵梨',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/佐々木恵梨 - Ring of Fortune.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Ring of Fortune'
    }, {
        'name': '私らしくあるためのpledge (有我风格的誓言)',
        'artist': '佐藤利奈 (さとう りな)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/佐藤利奈 (さとう りな) - 私らしくあるためのpledge (有我风格的誓言).mp3',
        'cover': '',
        'lrc': '',
        'album': 'とある魔術の禁書目録 アーカイブズ1 (魔法禁书目录角色歌曲Archives 1)'
    }, {
        'name': '超電磁少女Days',
        'artist': '佐藤利奈 (さとう りな)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/佐藤利奈 (さとう りな) - 超電磁少女Days.mp3',
        'cover': '',
        'lrc': '',
        'album': '「とある科学の超電磁砲」アーカイブス1 (科学超电磁炮 ARCHIVES 1)'
    }, {
        'name': 'Blue Star (蓝色之星)',
        'artist': '八王子P (8#Prince)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/八王子P (8#Prince) _ 初音未来 (初音ミク) - Blue Star (蓝色之星).mp3',
        'cover': '',
        'lrc': '',
        'album': 'HATSUNE MIKU EXPO 2016 E.P.'
    }, {
        'name': 'ユメノトビラ (梦想之门) (KOTORI Mix)',
        'artist': '内田彩 (うちだ あや)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/内田彩 (うちだ あや) - ユメノトビラ (梦想之门) (KOTORI Mix).mp3',
        'cover': '',
        'lrc': '',
        'album': "ラブライブ! Solo Live! III from μ's 南ことり Memories with Kotori (LoveLive! Solo Live! III from μ's 南小鸟 Memories with Kotori)"
    }, {
        'name': '告白日和、です！ (告白日和！)',
        'artist': '内田彩 (うちだ あや)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/内田彩 (うちだ あや) _ 久保由利香 (久保ユリカ) - 告白日和、です！ (告白日和！).mp3',
        'cover': '',
        'lrc': '',
        'album': "ラブライブ! μ's Best Album Best Live! collection (LOVE LIVE! μ's Best Album Best Live! collection)"
    }, {
        'name': 'NO EXIT ORION',
        'artist': '内田彩 (うちだ あや)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/内田彩 (うちだ あや) _ 久保由利香 (久保ユリカ) _ 新田恵海 (にった えみ) - NO EXIT ORION.mp3',
        'cover': '',
        'lrc': '',
        'album': 'WAO-WAO Powerful day!'
    }, {
        'name': '带着地球去流浪',
        'artist': '刘欢',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/刘欢 - 带着地球去流浪.mp3',
        'cover': '',
        'lrc': '',
        'album': '带着地球去流浪'
    }, {
        'name': 'Dear (Live)',
        'artist': '初音未来 (初音ミク)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/初音未来 (初音ミク) _ 19－iku－ - Dear (Live).mp3',
        'cover': '',
        'lrc': '',
        'album': "ミクの日感謝祭 39's Giving Day Project DIVA presents 初音ミク・ソロコンサート～こんばんは、初音ミクです。～ (初音未来日感谢祭 初音未来单独演唱会～晚上好，我是初音未来。～)"
    }, {
        'name': 'Starlight',
        'artist': '初音未来 (初音ミク)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/初音未来 (初音ミク) - Starlight.mp3',
        'cover': '',
        'lrc': '',
        'album': 'origin'
    }, {
        'name': 'Baby Maniacs',
        'artist': '初音未来 (初音ミク)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/初音未来 (初音ミク) - Baby Maniacs.mp3',
        'cover': '',
        'lrc': '',
        'album': 'electric love'
    }, {
        'name': 'Aibyou',
        'artist': '前田雄吾',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/前田雄吾 - Aibyou.mp3',
        'cover': '',
        'lrc': '',
        'album': 'OVA「ネコぱら」オリジナルサウンドトラック (猫娘乐园OVA 动画原声带)'
    }, {
        'name': '大鱼',
        'artist': '周深',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/周深 - 大鱼.mp3',
        'cover': '',
        'lrc': '',
        'album': '大鱼'
    }, {
        'name': '思い出をありがとう (谢谢你的回忆)',
        'artist': '坂本昌一郎 (Jun.A)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/坂本昌一郎 (Jun.A) - 思い出をありがとう (谢谢你的回忆).mp3',
        'cover': '',
        'lrc': '',
        'album': '少女神域∽少女天獄 オリジナルサウンドトラック (少女神域∽少女天狱 原声音乐集)'
    }, {
        'name': 'Date a Live (约会大作战) (Piano Version)',
        'artist': '坂部剛 (さかべ ごう)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/坂部剛 (さかべ ごう) - Date a Live (约会大作战) (Piano Version).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメーション「デート・ア・ライブ」ミュージック・セレクション DATE A MUSIC SECOND HALF (TV动画《约会大作战》精选集 DATE A MUSIC SECOND HALF)'
    }, {
        'name': 'Date! Date! Date!',
        'artist': '坂部剛 (マネジメント)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/坂部剛 (マネジメント) - Date! Date! Date!.mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメーション「デート・ア・ライブ」ミュージック・セレクション DATE A MUSIC FIRST HALF (TV动画《约会大作战》精选集 DATE A MUSIC FIRST HALF)'
    }, {
        'name': 'Renegade',
        'artist': '塞壬唱片-MSR',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/塞壬唱片-MSR - Renegade.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Renegade'
    }, {
        'name': '春弦',
        'artist': '塞壬唱片-MSR',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/塞壬唱片-MSR _ 横山克 (よこやま まさる) - 春弦.mp3',
        'cover': '',
        'lrc': '',
        'album': '春弦'
    }, {
        'name': 'Angelite',
        'artist': '夏澄kasumi',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/夏澄kasumi - Angelite.mp3',
        'cover': '',
        'lrc': '',
        'album': ' '
    }, {
        'name': 'Blooming Lily',
        'artist': '大西沙織 (おおにし さおり)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/大西沙織 (おおにし さおり) - Blooming Lily.mp3',
        'cover': '',
        'lrc': '',
        'album': '冴えない彼女の育てかた キャラクターイメージソング 澤村・スペンサー・英梨々 (TV动画《路人女主的养成方法》泽村・斯潘塞・英梨梨)'
    }, {
        'name': 'LOVE iLLUSiON (Eriri Solo Ver.)',
        'artist': '大西沙織 (おおにし さおり)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/大西沙織 (おおにし さおり) - LOVE iLLUSiON (Eriri Solo Ver.).mp3',
        'cover': '',
        'lrc': '',
        'album': '冴えない彼女の育てかた キャラクターイメージソング 澤村・スペンサー・英梨々 (TV动画《路人女主的养成方法》泽村・斯潘塞・英梨梨)'
    }, {
        'name': 'LOVE iLLUSiON',
        'artist': '大西沙織 (おおにし さおり)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/大西沙織 (おおにし さおり) _ 茅野愛衣 (かやの あい) _ 安野希世乃 (やすの きよの) - LOVE iLLUSiON.mp3',
        'cover': '',
        'lrc': '',
        'album': '冴えない彼女の育てかた 第1巻 特典CD (TV动画《路人女主的养成方法》第1卷 特典CD)'
    }, {
        'name': 'Four Seasons (四季)',
        'artist': '安室奈美恵 (あむろ なみえ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/安室奈美恵 (あむろ なみえ) - Four Seasons (四季).mp3',
        'cover': '',
        'lrc': '',
        'album': 'BEST OF INUYASHA 清風明月-犬夜叉テーマ全集 弐 (犬夜叉精选 清风明月 -犬夜叉主题歌全集二-)'
    }, {
        'name': 'Hero',
        'artist': '安室奈美恵',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/安室奈美恵 - Hero.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Finally'
    }, {
        'name': 'ETERNAL♭',
        'artist': '安野希世乃 (やすの きよの)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/安野希世乃 (やすの きよの) - ETERNAL♭.mp3',
        'cover': '',
        'lrc': '',
        'album': '冴えない彼女の育てかた Character Song Collection (《路人女主的养成方法》角色歌集)'
    }, {
        'name': 'GLISTENING♭',
        'artist': '安野希世乃 (やすの きよの)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/安野希世乃 (やすの きよの) - GLISTENING♭.mp3',
        'cover': '',
        'lrc': '',
        'album': '冴えない彼女の育てかた Character Song Collection (《路人女主的养成方法》角色歌集)'
    }, {
        'name': 'M♭',
        'artist': '安野希世乃 (やすの きよの)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/安野希世乃 (やすの きよの) - M♭.mp3',
        'cover': '',
        'lrc': '',
        'album': '冴えない彼女の育てかた キャラクターイメージソング 加藤恵 (TV动画《路人女主的养成方法》加藤惠 角色歌)'
    }, {
        'name': 'さよならのこと (再见的事) (Piano Trio Ver.)',
        'artist': '小林俊太郎 (こばやし しゅんたろう)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/小林俊太郎 (こばやし しゅんたろう) - さよならのこと (再见的事) (Piano Trio Ver.).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ WHITE ALBUM2 オリジナルサウンドトラック (TV动画《白色相簿第二季》原声带)'
    }, {
        'name': '見果てぬ夢 (无止境的梦)',
        'artist': '小林俊太郎 (こばやし しゅんたろう)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/小林俊太郎 (こばやし しゅんたろう) - 見果てぬ夢 (无止境的梦).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ WHITE ALBUM2 オリジナルサウンドトラック (TV动画《白色相簿第二季》原声带)'
    }, {
        'name': 'BRE@TH//LESS',
        'artist': '小林未郁 (こばやし みか)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/小林未郁 (こばやし みか) - BRE@TH__LESS.mp3',
        'cover': '',
        'lrc': '',
        'album': 'ALDNOAH.ZERO ORIGINAL SOUNDTRACK (アルドノア・ゼロ オリジナル・サウンドトラック)'
    }, {
        'name': 'βίος',
        'artist': '小林未郁 (こばやし みか)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/小林未郁 (こばやし みか) - βίος.mp3',
        'cover': '',
        'lrc': '',
        'album': 'ギルティクラウン オリジナルサウンドトラック (罪恶王冠原声集)'
    }, {
        'name': '虎視眈々 (虎视眈眈)',
        'artist': '巡音流歌 (巡音ルカ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/巡音流歌 (巡音ルカ) _ 初音未来 (初音ミク) _ GUMI (グミ) _ IA (イア) _ 镜音铃 (鏡音リン) - 虎視眈々 (虎视眈眈).mp3',
        'cover': '',
        'lrc': '',
        'album': '   '
    }, {
        'name': 'China-P',
        'artist': '徐梦圆',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/徐梦圆 - China-P.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Alone'
    }, {
        'name': 'China-X',
        'artist': '徐梦圆',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/徐梦圆 - China-X.mp3',
        'cover': '',
        'lrc': '',
        'album': 'CHINA（徐梦圆Original Mix）'
    }, {
        'name': 'PDD',
        'artist': '徐梦圆',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/徐梦圆 - PDD.mp3',
        'cover': '',
        'lrc': '',
        'album': 'PDD'
    }, {
        'name': 'Courage (勇气)',
        'artist': '戸松遥 (とまつ はるか)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/戸松遥 (とまつ はるか) - Courage (勇气)(1).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Courage (勇气)'
    }, {
        'name': 'courage (勇气)',
        'artist': '戸松遥 (とまつ はるか)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/戸松遥 (とまつ はるか) - courage (勇气).mp3',
        'cover': '',
        'lrc': '',
        'album': 'courage (勇气)'
    }, {
        'name': 'My Independent Destiny',
        'artist': '戸松遥 (とまつ はるか)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/戸松遥 (とまつ はるか) - My Independent Destiny.mp3',
        'cover': '',
        'lrc': '',
        'album': 'My Independent Destiny (『刀剑神域』角色歌 Vol.1)'
    }, {
        'name': '云烟成雨',
        'artist': '房东的猫',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/房东的猫 - 云烟成雨.mp3',
        'cover': '',
        'lrc': '',
        'album': '云烟成雨'
    }, {
        'name': 'Oh,Love&Peace! (HONOKA Mix)',
        'artist': '新田恵海 (にった えみ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/新田恵海 (にった えみ) - Oh,Love&Peace! (HONOKA Mix).mp3',
        'cover': '',
        'lrc': '',
        'album': "ラブライブ!Solo Live! II from μ's 高坂穂乃果 (Love Live!Solo Live! II from μ's 高坂穗乃果)"
    }, {
        'name': 'ススメ→トゥモロウ (向着明天前进)',
        'artist': '新田恵海 (にった えみ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/新田恵海 (にった えみ) _ 内田彩 (うちだ あや) _ 三森すずこ (三森铃子) - ススメ→トゥモロウ (向着明天前进).mp3',
        'cover': '',
        'lrc': '',
        'album': 'ススメ→トゥモロウ/START:DASH!! (向着明天前进)'
    }, {
        'name': '永遠フレンズ (永远的朋友)',
        'artist': '新田恵海 (にった えみ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/新田恵海 (にった えみ) _ 内田彩 (うちだ あや) _ 久保由利香 (久保ユリカ) - 永遠フレンズ (永远的朋友).mp3',
        'cover': '',
        'lrc': '',
        'album': '永遠フレンズ (永远的朋友)'
    }, {
        'name': 'Memory Heart Message',
        'artist': '早见沙织 (はやみ さおり)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/早见沙织 (はやみ さおり) - Memory Heart Message.mp3',
        'cover': '',
        'lrc': '',
        'album': 'ソードアート・オンライン 第2巻 特典CD (TV动画《刀剑神域》第2卷 特典CD)'
    }, {
        'name': '君色シグナル (君颜之暗示)',
        'artist': '春奈るな (春奈露娜)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/春奈るな (春奈露娜) - 君色シグナル (君颜之暗示).mp3',
        'cover': '',
        'lrc': '',
        'album': '君色シグナル (君颜之暗示)'
    }, {
        'name': '威風堂々 (威风堂堂)',
        'artist': '梅とら',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/梅とら - 威風堂々 (威风堂堂).mp3',
        'cover': '',
        'lrc': '',
        'album': '威風堂々 (威风堂堂)'
    }, {
        'name': 'swordland (森林)',
        'artist': '梶浦由記 (かじうら ゆき)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/梶浦由記 (かじうら ゆき) - swordland (森林).mp3',
        'cover': '',
        'lrc': '',
        'album': 'ソードアート・オンライン Original Soundtrack vol.1 (TV动画《刀剑神域》原声带vol.1)'
    }, {
        'name': 'the first town',
        'artist': '梶浦由记 (かじうら ゆき)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/梶浦由记 (かじうら ゆき) - the first town.mp3',
        'cover': '',
        'lrc': '',
        'album': 'ソードアート・オンライン Original Soundtrack vol.1 (TV动画《刀剑神域》原声带vol.1)'
    }, {
        'name': 'swordland',
        'artist': '梶浦由记 (かじうら ゆき)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/梶浦由记 (かじうら ゆき) - swordland.mp3',
        'cover': '',
        'lrc': '',
        'album': 'ソードアート・オンライン Original Soundtrack vol.1 (TV动画《刀剑神域》原声带vol.1)'
    }, {
        'name': 'アゲイン (Again)',
        'artist': '横山克 (よこやま まさる)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/横山克 (よこやま まさる) - アゲイン (Again).mp3',
        'cover': '',
        'lrc': '',
        'album': '四月は君の嘘 ORIGINAL SONG & SOUNDTRACK (四月是你的谎言 原声带)'
    }, {
        'name': '君がいる (有你在)',
        'artist': '横山克 (よこやま まさる)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/横山克 (よこやま まさる) - 君がいる (有你在).mp3',
        'cover': '',
        'lrc': '',
        'album': '四月は君の嘘 ORIGINAL SONG & SOUNDTRACK (四月是你的谎言 原声带)'
    }, {
        'name': 'カラフル。 (色彩缤纷。)',
        'artist': '沢井美空 (さわい みく)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/沢井美空 (さわい みく) - カラフル。 (色彩缤纷。).mp3',
        'cover': '',
        'lrc': '',
        'album': 'カラフル。(期間生産限定盤) (色彩缤纷。)'
    }, {
        'name': 'Twinkle Snow',
        'artist': '须谷尚子',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/须谷尚子 - Twinkle Snow.mp3',
        'cover': '',
        'lrc': '',
        'album': 'WHITE ALBUM2 ORIGINAL SOUNDTRACK~introductory~ (TV动画《白色相簿第二季》原声带~introductory~)'
    }, {
        'name': '心はいつもあなたのそばに',
        'artist': '津田朱里',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/津田朱里 - 心はいつもあなたのそばに.mp3',
        'cover': '',
        'lrc': '',
        'album': 'WHITE ALBUM2 Original Soundtrack 〜closing〜'
    }, {
        'name': 'MAIN THEME',
        'artist': '澤野弘之 (さわの ひろゆき)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/澤野弘之 (さわの ひろゆき) - MAIN THEME.mp3',
        'cover': '',
        'lrc': '',
        'album': 'BEST OF SOUNDTRACK【emU】'
    }, {
        'name': 'Rё.L',
        'artist': '澤野弘之 (さわの ひろゆき)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/澤野弘之 (さわの ひろゆき) - Rё.L.mp3',
        'cover': '',
        'lrc': '',
        'album': 'ギルティクラウン (罪恶王冠)'
    }, {
        'name': 'Rё∀L',
        'artist': '澤野弘之 (さわの ひろゆき)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/澤野弘之 (さわの ひろゆき) - Rё∀L.mp3',
        'cover': '',
        'lrc': '',
        'album': 'ギルティクラウン (罪恶王冠)'
    }, {
        'name': 'UNICORN',
        'artist': '澤野弘之 (さわの ひろゆき)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/澤野弘之 (さわの ひろゆき) - UNICORN.mp3',
        'cover': '',
        'lrc': '',
        'album': '機動戦士ガンダムUC オリジナル・サウンドトラック (机动战士高达独角兽原声集)'
    }, {
        'name': 'βios',
        'artist': '澤野弘之 (さわの ひろゆき)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/澤野弘之 (さわの ひろゆき) _ 小林未郁 (こばやし みか) - βios.mp3',
        'cover': '',
        'lrc': '',
        'album': 'ギルティクラウン (罪恶王冠)'
    }, {
        'name': 'ドジっ娘 (冒失少女)',
        'artist': '百石元 (hyakkoku hajime)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/百石元 (hyakkoku hajime) - ドジっ娘 (冒失少女).mp3',
        'cover': '',
        'lrc': '',
        'album': '冴えない彼女の育てかた 第2巻 特典CD (TV动画《路人女主的养成方法》第2巻 特典CD)'
    }, {
        'name': '小悪魔 (小恶魔)',
        'artist': '百石元 (hyakkoku hajime)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/百石元 (hyakkoku hajime) - 小悪魔 (小恶魔).mp3',
        'cover': '',
        'lrc': '',
        'album': '冴えない彼女の育てかた 第5巻 特典CD (TV动画《路人女主的养成方法》第5卷 特典CD)'
    }, {
        'name': '悲哀',
        'artist': '百石元 (hyakkoku hajime)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/百石元 (hyakkoku hajime) - 悲哀.mp3',
        'cover': '',
        'lrc': '',
        'album': '冴えない彼女の育てかた 第4巻 特典CD (TV动画《路人女主的养成方法》第4巻 特典CD)'
    }, {
        'name': '憔悴',
        'artist': '百石元 (hyakkoku hajime)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/百石元 (hyakkoku hajime) - 憔悴.mp3',
        'cover': '',
        'lrc': '',
        'album': '冴えない彼女の育てかた 第6巻 特典CD (TV动画《路人女主的养成方法》第6卷 特典CD)'
    }, {
        'name': '猪突猛進 (勇往直前)',
        'artist': '百石元 (hyakkoku hajime)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/百石元 (hyakkoku hajime) - 猪突猛進 (勇往直前).mp3',
        'cover': '',
        'lrc': '',
        'album': '冴えない彼女の育てかた 第2巻 特典CD (TV动画《路人女主的养成方法》第2巻 特典CD)'
    }, {
        'name': 'Monologue',
        'artist': '石濱翔 (いしはま かける)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/石濱翔 (いしはま かける) - Monologue.mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。第1巻 特典CD サウンドトラックCD (《我的青春恋爱物语果然有问题。》第1卷 特典CD 原声带CD)'
    }, {
        'name': '人の気持ち、もっと考えてよ (多考虑下别人的心情吧)',
        'artist': '石濱翔 (いしはま かける)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/石濱翔 (いしはま かける) - 人の気持ち、もっと考えてよ (多考虑下别人的心情吧).mp3',
        'cover': '',
        'lrc': '',
        'album': '「やはり俺の青春ラブコメはまちがっている。続」サウンドトラックCD (我的青春恋爱物语果然有问题 续 原声带)'
    }, {
        'name': '反撃 (反击)',
        'artist': '石濱翔 (いしはま かける)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/石濱翔 (いしはま かける) - 反撃 (反击).mp3',
        'cover': '',
        'lrc': '',
        'album': 'やはり俺の青春ラブコメはまちがっている。第1巻 特典CD サウンドトラックCD (《我的青春恋爱物语果然有问题。》第1卷 特典CD 原声带CD)'
    }, {
        'name': '対立 (对立)',
        'artist': '石濱翔 (いしはま かける)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/石濱翔 (いしはま かける) - 対立 (对立).mp3',
        'cover': '',
        'lrc': '',
        'album': '「やはり俺の青春ラブコメはまちがっている。続」サウンドトラックCD (我的青春恋爱物语果然有问题 续 原声带)'
    }, {
        'name': '決裂 (决裂)',
        'artist': '石濱翔 (いしはま かける)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/石濱翔 (いしはま かける) - 決裂 (决裂).mp3',
        'cover': '',
        'lrc': '',
        'album': '「やはり俺の青春ラブコメはまちがっている。続」サウンドトラックCD (我的青春恋爱物语果然有问题 续 原声带)'
    }, {
        'name': '雪解け (雪融)',
        'artist': '石濱翔 (いしはま かける)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/石濱翔 (いしはま かける) - 雪解け (雪融).mp3',
        'cover': '',
        'lrc': '',
        'album': '「やはり俺の青春ラブコメはまちがっている。続」サウンドトラックCD (我的青春恋爱物语果然有问题 续 原声带)'
    }, {
        'name': '恋のEveryDay☆HappyDay (恋爱的EveryDay☆HappyDay) (フルサイズ 丨BONUS TRACK)',
        'artist': '竹達彩奈 (たけたつ あやな)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/竹達彩奈 (たけたつ あやな) - 恋のEveryDay☆HappyDay (恋爱的EveryDay☆HappyDay) (フルサイズ 丨BONUS TRACK).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメーション「デート・ア・ライブ」ミュージック・セレクション DATE A MUSIC SECOND HALF (TV动画《约会大作战》精选集 DATE A MUSIC SECOND HALF)'
    }, {
        'name': 'SOUND OF DESTINY (Live at Campus Fes|TV Anime Ver.)',
        'artist': '米泽圆 (米澤円)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/米泽圆 (米澤円) - SOUND OF DESTINY (Live at Campus Fes_TV Anime Ver.).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ WHITE ALBUM2 VOCAL COLLECTION (TV动画《白色相簿第二季》音乐集)'
    }, {
        'name': 'WHITE ALBUM (Live at Campus Fes|TV Anime Ver.)',
        'artist': '米泽圆 (米澤円)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/米泽圆 (米澤円) - WHITE ALBUM (Live at Campus Fes_TV Anime Ver.).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ WHITE ALBUM2 VOCAL COLLECTION (TV动画《白色相簿第二季》音乐集)'
    }, {
        'name': 'あなたを想いたい (想念你)',
        'artist': '米泽圆 (米澤円)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/米泽圆 (米澤円) - あなたを想いたい (想念你).mp3',
        'cover': '',
        'lrc': '',
        'album': 'WHITE ALBUM2 ORIGINAL SOUNDTRACK~setsuna~ (TV动画《白色相簿第二季》原声带~setsuna~)'
    }, {
        'name': '届かない恋 (无法传达的爱恋) (Live at Campus Fes|TV Anime Ver.)',
        'artist': '米泽圆 (米澤円)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/米泽圆 (米澤円) - 届かない恋 (无法传达的爱恋) (Live at Campus Fes_TV Anime Ver.).mp3',
        'cover': '',
        'lrc': '',
        'album': 'TVアニメ WHITE ALBUM2 VOCAL COLLECTION (TV动画《白色相簿第二季》音乐集)'
    }, {
        'name': 'Lemon',
        'artist': '米津玄師 (よねづ けんし)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/米津玄師 (よねづ けんし) - Lemon.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Lemon (柠檬)'
    }, {
        'name': 'Snow halation',
        'artist': "缪斯 (μ's)",
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/缪斯 (μ's) - Snow halation.mp3",
        'cover': '',
        'lrc': '',
        'album': 'Snow halation'
    }, {
        'name': '愛してるばんざーい! (喜欢你万岁!)',
        'artist': "缪斯 (μ's)",
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/缪斯 (μ's) - 愛してるばんざーい! (喜欢你万岁!).mp3",
        'cover': '',
        'lrc': '',
        'album': 'もぎゅっと“love”で接近中! (满怀爱意接近中!)'
    }, {
        'name': 'カワキヲアメク',
        'artist': '美波',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/美波 - カワキヲアメク.mp3',
        'cover': '',
        'lrc': '',
        'album': 'カワキヲアメク'
    }, {
        'name': 'ライラック',
        'artist': '美波',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/美波 - ライラック (丁香花).mp3',
        'cover': '',
        'lrc': '',
        'album': 'カワキヲアメク'
    }, {
        'name': 'トゥットゥルー (嘟嘟噜)',
        'artist': '花澤香菜 (はなざわ かな)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/花澤香菜 (はなざわ かな) - トゥットゥルー (嘟嘟噜).mp3',
        'cover': '',
        'lrc': '',
        'album': '   '
    }, {
        'name': '恋愛サーキュレーション (恋爱循环)',
        'artist': '花澤香菜 (はなざわ かな)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/花澤香菜 (はなざわ かな) - 恋愛サーキュレーション (恋爱循环).mp3',
        'cover': '',
        'lrc': '',
        'album': '恋爱サーキュレーション (恋爱循环)'
    }, {
        'name': '五等分の気持ち (五等分的心意)',
        'artist': '花澤香菜 (はなざわ かな)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/花澤香菜 (はなざわ かな) _ 竹達彩奈 (たけたつ あやな) _ 伊藤美来 (いとう みく) _ 佐仓绫音 (さくら あやね) _ 水濑祈 (水瀬いのり) - 五等分の気持ち (五等分的心意).mp3',
        'cover': '',
        'lrc': '',
        'album': '五等分の気持ち (五等分的心意)'
    }, {
        'name': '境界の彼方 (境界的彼方)',
        'artist': '茅原実里 (ちはらみのり)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/茅原実里 (ちはらみのり) - 境界の彼方 (境界的彼方).mp3',
        'cover': '',
        'lrc': '',
        'album': '境界の彼方 (アニメ盤) (境界的彼方)'
    }, {
        'name': 'you',
        'artist': '茅野愛衣 (かやの あい)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/茅野愛衣 (かやの あい) - you.mp3',
        'cover': '',
        'lrc': '',
        'album': '冴えない彼女の育てかた 第4巻 特典CD (TV动画《路人女主的养成方法》第4巻 特典CD)'
    }, {
        'name': '届かない恋 (无法传达的爱恋)',
        'artist': '茅野愛衣 (かやの あい)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/茅野愛衣 (かやの あい) - 届かない恋 (无法传达的爱恋).mp3',
        'cover': '',
        'lrc': '',
        'album': '冴えない彼女の育てかた♭第3巻 特典CD (路人女主的养成方法♭第3卷 特典CD)'
    }, {
        'name': 'スターダストクルセイダース (星尘斗士)',
        'artist': '菅野祐悟 (かんの ゆうご)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/菅野祐悟 (かんの ゆうご) - スターダストクルセイダース (星尘斗士).mp3',
        'cover': '',
        'lrc': '',
        'album': 'ジョジョの奇妙な冒険 スターダストクルセイダース O.S.T[Departure] (JOJO的奇妙冒险 星尘斗士 原声)'
    }, {
        'name': 'ダイヤモンドは砕けない～メインテーマ～',
        'artist': '菅野祐悟 (かんの ゆうご)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/菅野祐悟 (かんの ゆうご) - ダイヤモンドは砕けない～メインテーマ～.mp3',
        'cover': '',
        'lrc': '',
        'album': 'ジョジョの奇妙な冒険 ダイヤモンドは砕けない オリジナルサウンドトラック Vol.1～Good Morning Morioh Cho～ (JOJO的奇妙冒险 不灭钻石 原声集Vol.1)'
    }, {
        'name': 'IGNITE (点燃)',
        'artist': '蓝井艾露 (藍井エイル)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/蓝井艾露 (藍井エイル) - IGNITE (点燃).mp3',
        'cover': '',
        'lrc': '',
        'album': 'IGNITE (点燃)'
    }, {
        'name': 'INNOCENCE',
        'artist': '蓝井艾露 (藍井エイル)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/蓝井艾露 (藍井エイル) - INNOCENCE.mp3',
        'cover': '',
        'lrc': '',
        'album': 'INNOCENCE'
    }, {
        'name': '喜帖街',
        'artist': '谢安琪',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/谢安琪 - 喜帖街.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Binary'
    }, {
        'name': 'What If',
        'artist': '谭晶',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/谭晶 - What If.mp3',
        'cover': '',
        'lrc': '',
        'album': 'What If'
    }, {
        'name': '在那东山顶上',
        'artist': '谭晶',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/谭晶 - 在那东山顶上.mp3',
        'cover': '',
        'lrc': '',
        'album': '看见'
    }, {
        'name': '我爱你中国',
        'artist': '谭晶',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/谭晶 - 我爱你中国.mp3',
        'cover': '',
        'lrc': '',
        'album': '   '
    }, {
        'name': 'プレパレード (恋爱预演)',
        'artist': '钉宫理惠 (Kugimiya Rie)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/钉宫理惠 (Kugimiya Rie) _ 堀江由衣 (ほりえ ゆい) _ 喜多村英梨 (きたむら えり) - プレパレード (恋爱预演).mp3',
        'cover': '',
        'lrc': '',
        'album': 'プレパレード (恋爱预演)'
    }, {
        'name': 'THERE IS A REASON',
        'artist': '铃木木乃美 (鈴木このみ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/铃木木乃美 (鈴木このみ) - THERE IS A REASON.mp3',
        'cover': '',
        'lrc': '',
        'album': 'NO SONG NO LIFE'
    }, {
        'name': 'This game',
        'artist': '铃木木乃美 (鈴木このみ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/铃木木乃美 (鈴木このみ) - This game.mp3',
        'cover': '',
        'lrc': '',
        'album': 'This game'
    }, {
        'name': 'Christina I',
        'artist': '阿保剛 (あぼ たけし)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/阿保剛 (あぼ たけし) - Christina I.mp3',
        'cover': '',
        'lrc': '',
        'album': 'STEINS;GATE Vol.8 (命运石之门)'
    }, {
        'name': 'Christina II',
        'artist': '阿保剛 (あぼ たけし)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/阿保剛 (あぼ たけし) - Christina II.mp3',
        'cover': '',
        'lrc': '',
        'album': 'STEINS;GATE Vol.8 (命运石之门)'
    }, {
        'name': '开启新征程',
        'artist': '阿鲲',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/阿鲲 - 开启新征程.mp3',
        'cover': '',
        'lrc': '',
        'album': '流浪地球 电影原声大碟'
    }, {
        'name': 'K歌之王',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - K歌之王.mp3',
        'cover': '',
        'lrc': '',
        'album': '打得火热'
    }, {
        'name': 'Lonely Christmas',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - Lonely Christmas.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Eason 4 A Chance & Hits'
    }, {
        'name': 'Sleep Alone (英语)',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - Sleep Alone (英语).mp3',
        'cover': '',
        'lrc': '',
        'album': 'Sleep Alone'
    }, {
        'name': '一丝不挂',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 一丝不挂.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Time Flies'
    }, {
        'name': '不如不见',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 不如不见.mp3',
        'cover': '',
        'lrc': '',
        'album': "What's Going On…?"
    }, {
        'name': '不要说话',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 不要说话.mp3',
        'cover': '',
        'lrc': '',
        'album': '不想放手'
    }, {
        'name': '兄妹',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 兄妹.mp3',
        'cover': '',
        'lrc': '',
        'album': '黑白灰'
    }, {
        'name': '十年',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 十年.mp3',
        'cover': '',
        'lrc': '',
        'album': '黑白灰'
    }, {
        'name': '十面埋伏',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 十面埋伏.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Live For Today'
    }, {
        'name': '单车',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 单车.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Shall We Dance? Shall We Talk!'
    }, {
        'name': '圣诞结',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 圣诞结.mp3',
        'cover': '',
        'lrc': '',
        'album': '七'
    }, {
        'name': '在这个世界相遇',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 在这个世界相遇.mp3',
        'cover': '',
        'lrc': '',
        'album': '在这个世界相遇'
    }, {
        'name': '好久不见',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 好久不见.mp3',
        'cover': '',
        'lrc': '',
        'album': '认了吧'
    }, {
        'name': '完 (粤语)',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 完 (粤语).mp3',
        'cover': '',
        'lrc': '',
        'album': '...3mm'
    }, {
        'name': '富士山下',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 富士山下.mp3',
        'cover': '',
        'lrc': '',
        'album': "What's Going On…?"
    }, {
        'name': '岁月如歌',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 岁月如歌.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Live For Today'
    }, {
        'name': '明年今日',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 明年今日.mp3',
        'cover': '',
        'lrc': '',
        'album': 'The Line-Up'
    }, {
        'name': '最佳损友',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 最佳损友.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Life Continues…'
    }, {
        'name': '浮夸',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 浮夸.mp3',
        'cover': '',
        'lrc': '',
        'album': 'U-87'
    }, {
        'name': '淘汰',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 淘汰.mp3',
        'cover': '',
        'lrc': '',
        'album': '认了吧'
    }, {
        'name': '热带雨林',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 热带雨林.mp3',
        'cover': '',
        'lrc': '',
        'album': 'The Easy Ride'
    }, {
        'name': '爱情转移',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 爱情转移.mp3',
        'cover': '',
        'lrc': '',
        'album': '认了吧'
    }, {
        'name': '白玫瑰',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 白玫瑰.mp3',
        'cover': '',
        'lrc': '',
        'album': "What's Going On…?"
    }, {
        'name': '碌卡',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 碌卡.mp3',
        'cover': '',
        'lrc': '',
        'album': '...3mm'
    }, {
        'name': '红玫瑰',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 红玫瑰.mp3',
        'cover': '',
        'lrc': '',
        'album': '认了吧'
    }, {
        'name': '苦瓜',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 苦瓜.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Stranger Under My Skin'
    }, {
        'name': '阴天快乐',
        'artist': '陈奕迅',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/陈奕迅 - 阴天快乐.mp3',
        'cover': '',
        'lrc': '',
        'album': 'rice & shine'
    }, {
        'name': 'Skyreach',
        'artist': '雨宮天 (あまみや そら)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/雨宮天 (あまみや そら) - Skyreach.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Skyreach'
    }, {
        'name': '月灯り (月光)',
        'artist': '雨宮天 (あまみや そら)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/雨宮天 (あまみや そら) - 月灯り (月光).mp3',
        'cover': '',
        'lrc': '',
        'album': '月灯り'
    }, {
        'name': '映山红',
        'artist': '韩红',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/韩红 - 映山红.mp3',
        'cover': '',
        'lrc': '',
        'album': '红歌②'
    }, {
        'name': 'Beat in Angel',
        'artist': '飯田里穂 (いいだ りほ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/飯田里穂 (いいだ りほ) _ Pile (パイル) - Beat in Angel.mp3',
        'cover': '',
        'lrc': '',
        'album': "μ's オリジナルソングCD④ (μ's 原声带CD④)"
    }, {
        'name': 'Stay Alive',
        'artist': '高桥李依 (たかはし りえ)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/高桥李依 (たかはし りえ) - Stay Alive.mp3',
        'cover': '',
        'lrc': '',
        'album': 'Stay Alive'
    }, {
        'name': '不合理な感情 (不合理的感情)',
        'artist': '高橋邦幸 (たかはし くにゆき)',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/高橋邦幸 (たかはし くにゆき) - 不合理な感情 (不合理的感情).mp3',
        'cover': '',
        'lrc': '',
        'album': '「やはり俺の青春ラブコメはまちがっている。続」サウンドトラックCD (我的青春恋爱物语果然有问题 续 原声带)'
    }, {
        'name': '愛してる (我爱你)',
        'artist': "高铃 (Callin')",
        'url': "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/高铃 (Callin') - 愛してる (我爱你).mp3",
        'cover': '',
        'lrc': '',
        'album': 'ヒビノウタ (时光之歌)'
    }, {
        'name': '为了谁',
        'artist': '龚玥',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/龚玥 - 为了谁.mp3',
        'cover': '',
        'lrc': '',
        'album': '红歌红'
    }, {
        'name': '南泥湾',
        'artist': '龚玥',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/龚玥 - 南泥湾.mp3',
        'cover': '',
        'lrc': '',
        'album': '红歌红'
    }, {
        'name': '太阳最红，毛主席最亲',
        'artist': '龚玥',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/龚玥 - 太阳最红，毛主席最亲.mp3',
        'cover': '',
        'lrc': '',
        'album': '红歌红'
    }, {
        'name': '山丹丹花开红艳艳',
        'artist': '龚玥',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/龚玥 - 山丹丹花开红艳艳.mp3',
        'cover': '',
        'lrc': '',
        'album': '西部情歌'
    }, {
        'name': '说句心里话',
        'artist': '龚玥',
        'url': 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@latest/APlayer/龚玥 - 说句心里话.mp3',
        'cover': '',
        'lrc': '',
        'album': '红歌红'
    }, ]
});
var theLIST = ap.list.audios;
//ap.list["index"];
ap.on("loadstart", function () {
    if (ap.list.audios[ap.list["index"]].lrc == "" && (ap.list.audios[ap.list["index"]].cover == "" ||
        ap.list.audios[ap.list["index"]].cover == undefined)) {
        var pa = ap.audio.paused;
        ap.pause()
        //console.log("undefine yes")
        var Name = theLIST[ap.list["index"]].name;
        var Album = theLIST[ap.list["index"]].album;
        var Artist = theLIST[ap.list["index"]].artist;
        axios.get('https://api.mochanbw.cn/QMapi/search', {
                params: {
                    key: Artist + " " + Name //+ " " + Album
                }
            })
            .then(function (response) {
                var theSongmid = response.data.data.list[0].songmid;
                var theAlbummid = response.data.data.list[0].albummid;
                theLIST[ap.list["index"]].cover =
                    "https://y.gtimg.cn/music/photo_new/T002R300x300M000" + theAlbummid +
                    ".jpg";
                axios.get('https://api.mochanbw.cn/QMapi/lyric', {
                        params: {
                            songmid: theSongmid
                        }
                    })
                    .then(function (response) {
                        theLIST[ap.list["index"]].lrc = response.data.data.trans == "" ? response.data.data.lyric : response.data.data.trans;
                        let ID = ap.list["index"];
                        ap.list.clear();
                        ap.list.add(theLIST);
                        ap.list.switch(ID)
                        ap.notice("加载完毕")
                        if (pa) {
                            ap.pause();
                        } else {
                            ap.play();
                        }
                        

                    });

            });


    }
});

/*var ShowList = 0;
ap.on("listshow", function () {
    ShowList = 1;
    document.getElementById("aplayer").style = "top:0;position:fixed;overflow-y:auto;";
});
ap.on("listhide", function () {
    ShowList = 0;
    document.getElementById("aplayer").style = "top:1;position:fixed;overflow-y:auto;";
});
var miniswitcherON = 0;
document.getElementsByClassName("aplayer-miniswitcher")[0].onclick =
    function () {
        if (miniswitcherON == 0) {
            miniswitcherON = 1;; //现状态
            if (ShowList) {
                window.setTimeout(function () {
                    document.getElementById("aplayer").style =
                        "top:0;position:fixed;overflow-y:auto;";
                }, 300);
            } else {
                document.getElementById("aplayer").style = "top:1;position:fixed;overflow-y:auto;";
            }
        } else {
            miniswitcherON = 0; //现状态
            document.getElementById("aplayer").style = "top:1;position:fixed;overflow-y:auto;";
        }
    }; */