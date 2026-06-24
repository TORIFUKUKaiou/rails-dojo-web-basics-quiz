const questions = [
  {
    category: 'ブラウザとサーバ',
    text: 'Chromeはどれにあたりますか。',
    choices: ['ブラウザ', 'サーバ', 'ルーティング', 'データベース'],
    answer: [0],
    explanation: 'ChromeはWebページを見るためのブラウザです。',
  },
  {
    category: 'ブラウザとサーバ',
    text: 'サーバの役割として最も近いものはどれですか。',
    choices: ['リクエストを受け取り、レスポンスを返す', '画面の文字を入力する', 'ブラウザのタブを増やす', 'URLを手で並べ替える'],
    answer: [0],
    explanation: 'サーバはブラウザからのお願いを受け取り、HTMLなどを返します。',
  },
  {
    category: 'ブラウザとサーバ',
    text: 'ブラウザが最初に行うこととして近いものはどれですか。',
    choices: ['URLをもとにサーバへリクエストを送る', 'Railsのルーティングを書く', 'データベースを直接更新する', 'サーバの中でHTMLを作る'],
    answer: [0],
    explanation: 'ブラウザはURLを手がかりに、サーバへリクエストを送ります。',
  },
  {
    category: 'ブラウザとサーバ',
    text: 'レスポンスを受け取って画面に表示するのはどれですか。',
    choices: ['ブラウザ', 'サーバ', 'ルーティング', 'コントローラ'],
    answer: [0],
    explanation: 'ブラウザはサーバから返ってきたレスポンスを画面に表示します。',
  },
  {
    category: 'ブラウザとサーバ',
    text: 'Webアプリケーションの基本的な流れとして正しいものはどれですか。',
    choices: ['ブラウザがリクエストを送り、サーバがレスポンスを返す', 'サーバがリクエストを送り、ブラウザがレスポンスを返す', 'URLがレスポンスを作り、HTMLがリクエストを送る', 'データベースがブラウザを直接操作する'],
    answer: [0],
    explanation: 'Webはブラウザとサーバの会話で動きます。',
  },
  {
    category: 'ブラウザとサーバ',
    text: 'ブラウザ側の動きとして正しいものをすべて選んでください。',
    choices: ['URLを入力する', 'リクエストを送る', 'レスポンスを受け取る', 'Railsのルーティングを実行する'],
    answer: [0, 1, 2],
    explanation: 'URL入力、リクエスト送信、レスポンス受信はブラウザ側の動きです。Railsのルーティングはサーバ側です。',
  },
  {
    category: 'リクエストとレスポンス',
    text: '「記事一覧をください」は、リクエストとレスポンスのどちらですか。',
    choices: ['リクエスト', 'レスポンス'],
    answer: [0],
    explanation: 'ブラウザからサーバへ送るお願いなので、リクエストです。',
  },
  {
    category: 'リクエストとレスポンス',
    text: '「記事一覧のHTMLを返します」は、リクエストとレスポンスのどちらですか。',
    choices: ['リクエスト', 'レスポンス'],
    answer: [1],
    explanation: 'サーバからブラウザへ返す返事なので、レスポンスです。',
  },
  {
    category: 'リクエストとレスポンス',
    text: '「ログイン情報を送ります」は、リクエストとレスポンスのどちらですか。',
    choices: ['リクエスト', 'レスポンス'],
    answer: [0],
    explanation: 'ブラウザからサーバへ入力内容を送るので、リクエストです。',
  },
  {
    category: 'リクエストとレスポンス',
    text: '「送信完了画面のHTMLを返します」は、リクエストとレスポンスのどちらですか。',
    choices: ['リクエスト', 'レスポンス'],
    answer: [1],
    explanation: 'サーバからブラウザへHTMLを返すので、レスポンスです。',
  },
  {
    category: 'リクエストとレスポンス',
    text: 'リクエストの説明として正しいものはどれですか。',
    choices: ['ブラウザからサーバへ送るお願い', 'サーバからブラウザへ返すHTMLだけ', 'URLの最後の文字だけ', 'Railsで必ず手書きするファイル'],
    answer: [0],
    explanation: 'リクエストは、ブラウザがサーバへ送るお願いです。',
  },
  {
    category: 'リクエストとレスポンス',
    text: 'レスポンスの説明として正しいものはどれですか。',
    choices: ['サーバからブラウザへ返す返事', 'ブラウザからサーバへ送るお願い', 'フォームの送信先', 'パスの別名'],
    answer: [0],
    explanation: 'レスポンスは、サーバが処理結果としてブラウザへ返す返事です。',
  },
  {
    category: 'URL',
    text: '`https://example.com/articles` の通信の種類はどれですか。',
    choices: ['https', 'example.com', '/articles', 'articles'],
    answer: [0],
    explanation: 'URLの先頭にある https は通信の方法を表します。',
  },
  {
    category: 'URL',
    text: '`https://example.com/articles` のサーバの場所はどれですか。',
    choices: ['https', 'example.com', '/articles', 'GET'],
    answer: [1],
    explanation: 'example.com はアクセス先のサーバの場所です。',
  },
  {
    category: 'URL',
    text: '`https://example.com/articles/1` のパスはどれですか。',
    choices: ['/articles/1', 'example.com', 'https', 'articles=1'],
    answer: [0],
    explanation: 'サーバ内のどの場所や処理を使うかを表す部分がパスです。',
  },
  {
    category: 'URL',
    text: '`https://example.com/search?keyword=ruby` の追加の情報はどれですか。',
    choices: ['keyword=ruby', '/search', 'example.com', 'https'],
    answer: [0],
    explanation: '? の後ろは、サーバへ一緒に送る追加の情報です。',
  },
  {
    category: 'URL',
    text: '`/students/10` が表していそうなページはどれですか。',
    choices: ['10番の学生の詳細', '学生一覧', '10年生の検索', '新しい学生の登録'],
    answer: [0],
    explanation: '/students/10 は、学生の中の10番のデータを表していると読めます。',
  },
  {
    category: 'URL',
    text: '`https://shop.example.com/items?category=book` のパスはどれですか。',
    choices: ['/items', 'category=book', 'shop.example.com', 'https'],
    answer: [0],
    explanation: 'パスはサーバの場所の後ろ、? より前の /items です。',
  },
  {
    category: 'URL',
    text: '`https://example.com/products?min_price=1000&max_price=3000` の追加の情報はどれですか。',
    choices: ['min_price=1000&max_price=3000', '/products', 'example.com/products', 'https'],
    answer: [0],
    explanation: '? の後ろにある min_price と max_price が追加の情報です。',
  },
  {
    category: 'GET / POST',
    text: 'GETをよく使う場面はどれですか。',
    choices: ['ページを見る', '新しい記事を登録する', 'ログイン情報を送る', 'お問い合わせ内容を送る'],
    answer: [0],
    explanation: 'GETは情報を見る、取り出す場面でよく使います。',
  },
  {
    category: 'GET / POST',
    text: 'POSTをよく使う場面はどれですか。',
    choices: ['登録フォームの入力内容を送る', '記事一覧を見る', '商品詳細を見る', '検索結果を見る'],
    answer: [0],
    explanation: 'POSTは登録、投稿、ログインなど、入力したデータを送る場面でよく使います。',
  },
  {
    category: 'GET / POST',
    text: '`GET /articles` は何をお願いしていそうですか。',
    choices: ['記事一覧をください', '新しい記事を登録してください', '記事を削除してください', 'ログインしてください'],
    answer: [0],
    explanation: 'GETで /articles なので、記事一覧を取得するリクエストと読めます。',
  },
  {
    category: 'GET / POST',
    text: '`POST /articles` は何をしていそうですか。',
    choices: ['新しい記事を投稿する', '記事一覧を見る', '1番の記事を見る', '記事を検索する'],
    answer: [0],
    explanation: 'POSTで /articles なので、記事データを送って作成する場面が考えられます。',
  },
  {
    category: 'GET / POST',
    text: '商品を検索する場面でよく使うのはどれですか。',
    choices: ['GET', 'POST', 'HTML', 'CSS'],
    answer: [0],
    explanation: '検索は情報を取り出す操作なので、GETがよく使われます。',
  },
  {
    category: 'GET / POST',
    text: 'ログイン情報を送る場面でよく使うのはどれですか。',
    choices: ['POST', 'GET', 'URL', 'HTML'],
    answer: [0],
    explanation: 'ログイン情報のような入力内容を送る場面ではPOSTがよく使われます。',
  },
  {
    category: 'GET / POST',
    text: '記事の詳細を見るリクエストとして自然なものはどれですか。',
    choices: ['GET /articles/1', 'POST /articles/1', 'GET /articles?create=true', 'POST /search'],
    answer: [0],
    explanation: '特定の記事を見る操作なので、GETとIDつきのパスが自然です。',
  },
  {
    category: 'GET / POST',
    text: 'お問い合わせ内容を送るリクエストとして自然なものはどれですか。',
    choices: ['POST /contacts', 'GET /contacts/1', 'GET /contacts?message=', 'POST /articles'],
    answer: [0],
    explanation: 'お問い合わせ内容はフォームから送るデータなので、POSTが自然です。',
  },
  {
    category: 'フォーム',
    text: '次のフォームの送信先はどれですか。',
    code: '<form action="/search" method="get">\n  <input type="text" name="keyword">\n</form>',
    choices: ['/search', 'get', 'form', 'keyword'],
    answer: [0],
    explanation: 'action はフォームの送信先です。',
  },
  {
    category: 'フォーム',
    text: '次のフォームの送信方法はどれですか。',
    code: '<form action="/search" method="get">\n  <input type="text" name="keyword">\n</form>',
    choices: ['GET', 'POST', '/search', 'keyword'],
    answer: [0],
    explanation: 'method="get" なのでGETで送信します。',
  },
  {
    category: 'フォーム',
    text: '次のフォームの入力欄の名前はどれですか。',
    code: '<form action="/search" method="get">\n  <input type="text" name="keyword">\n</form>',
    choices: ['keyword', 'text', 'input', 'search'],
    answer: [0],
    explanation: 'name は、サーバへ送るときの項目名です。',
  },
  {
    category: 'フォーム',
    text: '`/search` に `keyword=ruby` をGETで送るリクエストはどれですか。',
    choices: ['GET /search?keyword=ruby', 'POST /search?keyword=ruby', 'GET /keyword/search/ruby', 'POST /ruby'],
    answer: [0],
    explanation: 'GETでは、入力値がURLの ? の後ろにつくことがあります。',
  },
  {
    category: 'フォーム',
    text: '`/contacts` に `message` をPOSTで送るフォームとして正しい組み合わせはどれですか。',
    choices: ['action="/contacts"、method="post"、name="message"', 'action="/message"、method="get"、name="contacts"', 'action="/contacts"、method="get"、name="title"', 'action="/search"、method="post"、name="keyword"'],
    answer: [0],
    explanation: '送信先、送信方法、入力欄の名前が条件と一致しています。',
  },
  {
    category: 'フォーム',
    text: '次のフォームで `1` と入力して送信すると、どのリクエストになりそうですか。',
    code: '<form action="/students" method="get">\n  <input type="text" name="grade">\n</form>',
    choices: ['GET /students?grade=1', 'POST /students?grade=1', 'GET /grade?students=1', 'POST /students'],
    answer: [0],
    explanation: 'GETで /students へ送り、入力欄の名前が grade なので ?grade=1 がつきます。',
  },
  {
    category: 'フォーム',
    text: '次のフォームは何を送っていそうですか。',
    code: '<form action="/login" method="post">\n  <input type="text" name="email">\n  <input type="password" name="password">\n</form>',
    choices: ['メールアドレスとパスワード', '検索キーワードだけ', '記事の一覧', '商品のカテゴリだけ'],
    answer: [0],
    explanation: 'name が email と password の入力欄をPOSTで送るフォームです。',
  },
  {
    category: 'フォーム',
    text: '`/articles` に `title` をPOSTで送るフォームとして正しいものはどれですか。',
    choices: ['action="/articles"、method="post"、name="title"', 'action="/articles"、method="get"、name="keyword"', 'action="/title"、method="post"、name="articles"', 'action="/search"、method="get"、name="title"'],
    answer: [0],
    explanation: '新しい記事のタイトルを送るので、/articles にPOSTで title を送る形が合います。',
  },
  {
    category: 'ルーティング',
    text: 'ルーティングの役割として正しいものはどれですか。',
    choices: ['リクエストをどの処理につなげるかを決める', 'ブラウザの色を変える', 'URLを自動で英語に翻訳する', 'データベースの中身を直接表示する'],
    answer: [0],
    explanation: 'Railsでは、ルーティングがリクエストとコントローラの処理をつなげます。',
  },
  {
    category: 'ルーティング',
    text: '`get "/articles", to: "articles#index"` はどう読めますか。',
    choices: ['GET /articles が来たら articles#index へつなげる', 'POST /articles が来たら articles#index へつなげる', 'GET /articles が来たら articles#create へつなげる', '/articles をブラウザ側で保存する'],
    answer: [0],
    explanation: 'get、"/articles"、articles#index を順に読みます。',
  },
  {
    category: 'ルーティング',
    text: '`post "/articles", to: "articles#create"` に一致するリクエストはどれですか。',
    choices: ['POST /articles', 'GET /articles', 'POST /articles/1', 'GET /articles/create'],
    answer: [0],
    explanation: 'HTTPメソッドとパスの両方が一致する必要があります。',
  },
  {
    category: 'ルーティング',
    text: '`GET /books` が `books#index` につながるルーティングはどれですか。',
    choices: ['get "/books", to: "books#index"', 'post "/books", to: "books#index"', 'get "/books", to: "books#create"', 'post "/books", to: "books#create"'],
    answer: [0],
    explanation: 'GET、/books、books#index がすべて一致しています。',
  },
  {
    category: 'ルーティング',
    text: '`POST /students` が `students#create` につながるルーティングはどれですか。',
    choices: ['post "/students", to: "students#create"', 'get "/students", to: "students#create"', 'post "/students", to: "students#index"', 'get "/students/1", to: "students#create"'],
    answer: [0],
    explanation: 'POSTで学生情報を送る処理は、作成を表す create につながることが多いです。',
  },
  {
    category: 'ルーティング',
    text: '次のルーティングで `GET /comments` はどこにつながりますか。',
    code: 'get "/comments", to: "comments#index"\npost "/comments", to: "comments#create"',
    choices: ['comments#index', 'comments#create', 'articles#index', 'comments#show'],
    answer: [0],
    explanation: 'GET /comments なので get "/comments" の行に一致します。',
  },
  {
    category: 'ルーティング',
    text: '次のルーティングで `POST /messages` はどこにつながりますか。',
    code: 'get "/messages", to: "messages#index"\npost "/messages", to: "messages#create"',
    choices: ['messages#create', 'messages#index', 'messages#show', 'comments#create'],
    answer: [0],
    explanation: 'POST /messages なので post "/messages" の行に一致します。',
  },
  {
    category: '総合問題',
    text: '本の一覧を見るリクエストとして最も自然なものはどれですか。',
    choices: ['GET /books', 'POST /books', 'GET /books?title=', 'POST /login'],
    answer: [0],
    explanation: '一覧を見る操作なのでGETを使います。',
  },
  {
    category: '総合問題',
    text: '3番の本を見るリクエストとして最も自然なものはどれですか。',
    choices: ['GET /books/3', 'POST /books/3', 'GET /books?new=3', 'POST /books'],
    answer: [0],
    explanation: '特定の本の詳細を見るため、GETとIDつきのパスが自然です。',
  },
  {
    category: '総合問題',
    text: '新しい本を登録するリクエストとして最も自然なものはどれですか。',
    choices: ['POST /books', 'GET /books', 'GET /books/1', 'POST /search'],
    answer: [0],
    explanation: '新しいデータを送る操作なのでPOSTが自然です。',
  },
  {
    category: '総合問題',
    text: '`ruby` で本を検索するリクエストとして最も自然なものはどれですか。',
    choices: ['GET /books?keyword=ruby', 'POST /books/1', 'GET /books/ruby/create', 'POST /keyword'],
    answer: [0],
    explanation: '検索条件を追加情報として送り、結果を取得しています。',
  },
  {
    category: '総合問題',
    text: '次のフォームはどの処理につながりますか。',
    code: '<form action="/books" method="get">\n  <input type="text" name="author">\n</form>\n\nget "/books", to: "books#index"\npost "/books", to: "books#create"',
    choices: ['books#index', 'books#create', 'articles#index', 'authors#create'],
    answer: [0],
    explanation: 'GETで /books に送信するため、get "/books" のルーティングに一致します。name="author" は送るデータの名前です。どの処理につながるかは、method="get" と action="/books" を見ます。',
  },
  {
    category: '総合問題',
    text: '次のフォームはどの処理につながりますか。',
    code: '<form action="/articles" method="post">\n  <input type="text" name="title">\n</form>\n\nget "/articles", to: "articles#index"\npost "/articles", to: "articles#create"',
    choices: ['articles#create', 'articles#index', 'books#create', 'articles#show'],
    answer: [0],
    explanation: 'POSTで /articles に送信するため、post "/articles" のルーティングに一致します。',
  },
  {
    category: '総合問題',
    text: '学生一覧を見る、10番の学生を見る、新しい学生を登録する、の組み合わせとして最も自然なものはどれですか。',
    choices: ['GET /students、GET /students/10、POST /students', 'POST /students、POST /students/10、GET /students', 'GET /students/create、GET /students/10、GET /students', 'POST /login、GET /students、POST /contacts'],
    answer: [0],
    explanation: '一覧と詳細はGET、新規登録はPOSTが自然です。',
  },
  {
    category: '総合問題',
    text: '「URLは画面に表示する文章だけを表している」という説明は正しいですか。',
    choices: ['誤り。URLはサーバの場所やお願いしたい内容を表す', '正しい。URLは文章だけを表す', '正しい。URLはCSSだけを表す', '誤り。URLはブラウザの色だけを表す'],
    answer: [0],
    explanation: 'URLはサーバへの宛先や、パス、追加の情報を含みます。',
  },
  {
    category: '総合問題',
    text: '「GETは必ず新しいデータを登録するときに使う」という説明は正しいですか。',
    choices: ['誤り。GETは情報を見るときによく使う', '正しい。GETは登録専用である', '正しい。GETはログイン専用である', '誤り。GETはフォームでは絶対に使えない'],
    answer: [0],
    explanation: 'GETはページを見る、一覧を見る、検索する場合によく使います。',
  },
  {
    category: '総合問題',
    text: 'Webアプリケーションの流れとして最も自然な順番はどれですか。',
    choices: ['ブラウザがリクエストを送る → サーバが処理する → サーバがレスポンスを返す → ブラウザが表示する', 'サーバが表示する → ブラウザが処理する → URLが消える → レスポンスを送る', 'CSSがリクエストする → HTMLがルーティングする → ブラウザが登録する', 'データベースがURLを入力する → ブラウザがRailsを書く → サーバがタブを開く'],
    answer: [0],
    explanation: 'ブラウザから始まり、サーバで処理し、レスポンスが返って画面に表示されます。',
  },
  {
    category: '総合問題',
    text: 'Railsに入る前に押さえておく考え方として正しいものをすべて選んでください。',
    choices: ['ブラウザがリクエストを送る', 'サーバがレスポンスを返す', 'ルーティングはリクエストを処理へつなげる', 'POSTはページを見るときだけに使う'],
    answer: [0, 1, 2],
    explanation: 'POSTはデータを送る場面でよく使います。ページを見るときはGETがよく使われます。',
  },
  {
    category: '総合問題',
    text: '次回以降のRails学習につながる読み方として正しいものはどれですか。',
    choices: ['GET /articles が来たら、ルーティングが articles#index などの処理へつなげる', 'GET /articles が来たら、ブラウザが直接データベースを書き換える', 'POST /articles が来たら、URLがCSSを作る', 'ルーティングはフォームの文字色だけを決める'],
    answer: [0],
    explanation: 'Railsでは、リクエストをルーティングが受け取り、コントローラの処理へつなげます。',
  },
];

const state = {
  currentIndex: 0,
  score: 0,
  answered: false,
  incorrect: [],
};

const elements = {
  progressText: document.querySelector('#progressText'),
  scoreText: document.querySelector('#scoreText'),
  categoryText: document.querySelector('#categoryText'),
  questionNumber: document.querySelector('#questionNumber'),
  questionType: document.querySelector('#questionType'),
  questionText: document.querySelector('#questionText'),
  codeBlock: document.querySelector('#codeBlock'),
  choices: document.querySelector('#choices'),
  message: document.querySelector('#message'),
  result: document.querySelector('#result'),
  resultTitle: document.querySelector('#resultTitle'),
  answerText: document.querySelector('#answerText'),
  explanationText: document.querySelector('#explanationText'),
  submitButton: document.querySelector('#submitButton'),
  nextButton: document.querySelector('#nextButton'),
  resetButton: document.querySelector('#resetButton'),
  quizCard: document.querySelector('#quizCard'),
  finishCard: document.querySelector('#finishCard'),
  finishTitle: document.querySelector('#finishTitle'),
  finishLead: document.querySelector('#finishLead'),
  reviewList: document.querySelector('#reviewList'),
  retryButton: document.querySelector('#retryButton'),
};

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function arraysEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  const sortedA = [...a].sort((x, y) => x - y);
  const sortedB = [...b].sort((x, y) => x - y);
  return sortedA.every((value, index) => value === sortedB[index]);
}

function shuffleChoices(choices) {
  const shuffled = choices.map((text, originalIndex) => ({ text, originalIndex }));

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function getSelectedIndexes() {
  return [...elements.choices.querySelectorAll('input:checked')].map((input) => Number(input.value));
}

function renderQuestion() {
  const question = questions[state.currentIndex];
  state.answered = false;

  elements.progressText.textContent = `${state.currentIndex + 1} / ${questions.length}`;
  elements.scoreText.textContent = String(state.score);
  elements.categoryText.textContent = question.category;
  elements.questionNumber.textContent = `Q${state.currentIndex + 1}`;
  elements.questionType.textContent = question.answer.length === 1 ? '1つ選択' : 'すべて選択';
  elements.questionText.innerHTML = escapeHtml(question.text).replaceAll('`', '');
  elements.message.textContent = '';
  elements.result.hidden = true;
  elements.submitButton.hidden = false;
  elements.submitButton.disabled = false;
  elements.nextButton.hidden = true;

  if (question.code) {
    elements.codeBlock.hidden = false;
    elements.codeBlock.textContent = question.code;
  } else {
    elements.codeBlock.hidden = true;
    elements.codeBlock.textContent = '';
  }

  const inputType = question.answer.length === 1 ? 'radio' : 'checkbox';
  const shuffledChoices = shuffleChoices(question.choices);
  elements.choices.innerHTML = shuffledChoices
    .map((choice) => {
      return `
        <label class="choice">
          <input type="${inputType}" name="choice" value="${choice.originalIndex}">
          <span>${escapeHtml(choice.text)}</span>
        </label>
      `;
    })
    .join('');
}

function submitAnswer() {
  if (state.answered) {
    return;
  }

  const question = questions[state.currentIndex];
  const selected = getSelectedIndexes();

  if (selected.length === 0) {
    elements.message.textContent = '選択肢を選んでから submit を押してください。';
    return;
  }

  state.answered = true;
  const isCorrect = arraysEqual(selected, question.answer);

  if (isCorrect) {
    state.score += 1;
  } else {
    state.incorrect.push({
      number: state.currentIndex + 1,
      text: question.text,
      category: question.category,
    });
  }

  [...elements.choices.querySelectorAll('.choice')].forEach((label) => {
    const input = label.querySelector('input');
    const originalIndex = Number(input.value);
    input.disabled = true;

    if (question.answer.includes(originalIndex)) {
      label.classList.add('correct');
    } else if (selected.includes(originalIndex)) {
      label.classList.add('incorrect');
    }
  });

  const answerLabels = question.answer.map((index) => question.choices[index]).join(' / ');
  elements.scoreText.textContent = String(state.score);
  elements.message.textContent = '';
  elements.result.hidden = false;
  elements.resultTitle.textContent = isCorrect ? '正解です' : 'もう一度確認しましょう';
  elements.resultTitle.style.color = isCorrect ? 'var(--ok)' : 'var(--bad)';
  elements.answerText.textContent = `正解：${answerLabels}`;
  elements.explanationText.textContent = question.explanation;
  elements.submitButton.hidden = true;
  elements.nextButton.hidden = false;
  elements.nextButton.textContent = state.currentIndex === questions.length - 1 ? '結果を見る' : '次へ';
}

function showFinish() {
  elements.quizCard.hidden = true;
  elements.finishCard.hidden = false;
  elements.categoryText.textContent = '完了';
  elements.progressText.textContent = `${questions.length} / ${questions.length}`;
  elements.scoreText.textContent = String(state.score);
  elements.finishTitle.textContent = `${questions.length}問中 ${state.score}問 正解`;

  if (state.incorrect.length === 0) {
    elements.finishLead.textContent = 'すべて正解です。ブラウザとサーバの流れを次回のRails学習につなげましょう。';
    elements.reviewList.innerHTML = '<div class="review-item">復習が必要な問題はありません。</div>';
    return;
  }

  elements.finishLead.textContent = '間違えた問題をもう一度確認しましょう。解説の言葉を、Railsのルーティング学習につなげます。';
  elements.reviewList.innerHTML = state.incorrect
    .map((item) => `<div class="review-item"><strong>Q${item.number} ${escapeHtml(item.category)}</strong><br>${escapeHtml(item.text).replaceAll('`', '')}</div>`)
    .join('');
}

function nextQuestion() {
  if (state.currentIndex === questions.length - 1) {
    showFinish();
    return;
  }

  state.currentIndex += 1;
  renderQuestion();
}

function resetQuiz() {
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;
  state.incorrect = [];
  elements.quizCard.hidden = false;
  elements.finishCard.hidden = true;
  renderQuestion();
}

elements.submitButton.addEventListener('click', submitAnswer);
elements.nextButton.addEventListener('click', nextQuestion);
elements.resetButton.addEventListener('click', resetQuiz);
elements.retryButton.addEventListener('click', resetQuiz);

renderQuestion();
