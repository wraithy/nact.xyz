webpackJsonp([88545502529522],{438:function(n,s){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"액터 간 통신",lesson:2,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/액터-간-통신"}}},{node:{frontmatter:{title:"시작하기",lesson:2,programming_language:"javascript",chapter:1,type:"lesson"},fields:{slug:"/시작하기"}}},{node:{frontmatter:{title:"액터의 계층 구조",lesson:4,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/액터의-계층-구조"}}},{node:{frontmatter:{title:"Nact 소개",lesson:1,programming_language:"javascript",chapter:1,type:"lesson"},fields:{slug:"/nact-소개"}}},{node:{frontmatter:{title:"상태 저장(영속성)",lesson:1,programming_language:"javascript",chapter:3,type:"lesson"},fields:{slug:"/상태-저장-영속성"}}},{node:{frontmatter:{title:"퍼시스턴트 쿼리",lesson:4,programming_language:"javascript",chapter:3,type:"lesson"},fields:{slug:"/퍼시스턴트-쿼리"}}},{node:{frontmatter:{title:"스냅샷",lesson:2,programming_language:"javascript",chapter:3,type:"lesson"},fields:{slug:"/스냅샷"}}},{node:{frontmatter:{title:"상태가 있는 액터",lesson:1,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/상태가-있는-액터"}}},{node:{frontmatter:{title:"관리 감독(Supervision)",lesson:5,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/관리-감독-supervision"}}},{node:{frontmatter:{title:"타임아웃",lesson:3,programming_language:"javascript",chapter:3,type:"lesson"},fields:{slug:"/타임아웃"}}},{node:{frontmatter:{title:"질의하기",lesson:3,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/질의하기"}}},{node:{frontmatter:{title:"인코더/디코더",lesson:2,programming_language:"javascript",chapter:4,type:"lesson"},fields:{slug:"/인코더-디코더"}}}]},postBySlug:{html:'<p>Nact는 Node 8 이상 버전 설치된 환경에서 작동합니다. 아래의 방법으로 설치할 수 있습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token comment"># npm 사용자</span>\n$ <span class="token function">npm</span> <span class="token function">install</span> --save nact\n\n<span class="token comment"># yarn 사용자</span>\n$ yarn add nact\n</code></pre>\n      </div>\n<h2 id="액터-시스템을-시작하고-참조를-반환한다-start"><a href="#%EC%95%A1%ED%84%B0-%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%9D%84-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B3%A0-%EC%B0%B8%EC%A1%B0%EB%A5%BC-%EB%B0%98%ED%99%98%ED%95%9C%EB%8B%A4-start" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>액터 시스템을 시작하고 참조를 반환한다: <code>start()</code></h2>\n<p>설치한 후에, 애플리케이션 코드에서 <code>start</code> 함수를 import 합니다. <code>start</code> 함수는 액터 시스템을 시작하고, 그 참조를 반환합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// Node (CommonJS) import</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> start<span class="token punctuation">,</span> dispatch<span class="token punctuation">,</span> stop<span class="token punctuation">,</span> spawnStateless <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'nact\'</span><span class="token punctuation">)</span>\n\n<span class="token comment">// ES6 import</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> start<span class="token punctuation">,</span> dispatch<span class="token punctuation">,</span> stop<span class="token punctuation">,</span> spawnStateless <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'nact\'</span>\n\n<span class="token keyword">const</span> system <span class="token operator">=</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 액터 시스템을 시작하고 참조를 반환한다.</span>\n</code></pre>\n      </div>\n<h2 id="액터를-생성한다-spawn-spawnstateless"><a href="#%EC%95%A1%ED%84%B0%EB%A5%BC-%EC%83%9D%EC%84%B1%ED%95%9C%EB%8B%A4-spawn-spawnstateless" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>액터를 생성한다: <code>spawn()</code>, <code>spawnStateless()</code></h2>\n<p>액터 시스템의 참조(위에서 <code>system</code>)를 가지고 이제 첫번째 액터를 생성할 수 있습니다. 액터를 생성하려면 <code>spawn</code> 해야합니다. 전통에 따라, 메시지를 수신했을 때 "Hello"를 출력하는 액터를 만들어봅시다. 이 액터는 아무 내부 상태가 없으므로, 더 단순한 <code>spawnStateless</code> 함수를 사용합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> greeter <span class="token operator">=</span> <span class="token function">spawnStateless</span><span class="token punctuation">(</span>\n  <span class="token comment">// 부모(상위) 액터 참조, 여기서는 ActorSystem(최상위 액터)</span>\n  system<span class="token punctuation">,</span>\n  <span class="token comment">// 메시지 핸들러 함수</span>\n  <span class="token punctuation">(</span>msg<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 액터의 이름(unique)</span>\n  <span class="token string">\'greeter\'</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code>spawnStateless</code> 함수 인자</p>\n<ul>\n<li>첫번째 인자는 부모(상위) 액터의 참조입니다.<br>\n이 코드에서 <code>system</code>은 액터 시스템 자체이며, 액터 시스템은 곧 최상위 액터입니다. 나중에 <strong>액터의 계층 구조</strong> 항목에서 더 자세히 다루겠습니다.</li>\n<li>두번째 인자는 메시지를 수신했을 때 실행되는 함수입니다.</li>\n<li>세번째 인자는 액터의 고유한 이름입니다. 여기서는 <code>\'greeter\'</code>라고 명명했습니다. 세번째 인자는 생략 가능하며, 생략하면 액터 시스템이 자동으로 이름을 정합니다.</li>\n</ul>\n<h2 id="액터에-메시지를-보낸다-dispatch"><a href="#%EC%95%A1%ED%84%B0%EC%97%90-%EB%A9%94%EC%8B%9C%EC%A7%80%EB%A5%BC-%EB%B3%B4%EB%82%B8%EB%8B%A4-dispatch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>액터에 메시지를 보낸다: <code>dispatch()</code></h2>\n<p>액터와 통신하기 위해 <code>dispatch</code> 함수를 사용합니다.</p>\n<p>여기서 <code>greeter</code> 액터에게, 당신의 이름을 알려주는 메시지를 <code>dispatch</code> 해봅시다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">dispatch</span><span class="token punctuation">(</span>greeter<span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'David Lee\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>결과로 콘솔 화면에 아래와 같이 출력됩니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Hello, David Lee</code></pre>\n      </div>\n<h2 id="액터-시스템을-종료한다-stop"><a href="#%EC%95%A1%ED%84%B0-%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%9D%84-%EC%A2%85%EB%A3%8C%ED%95%9C%EB%8B%A4-stop" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>액터 시스템을 종료한다: <code>stop()</code></h2>\n<p>액터 시스템을 종료하면서 예제 실습을 마치겠습니다.</p>\n<p><code>stop</code> 함수는 액터 하나를 종료할 때도 쓰입니다.</p>\n<p>아래와 같이 해서 <code>greeter</code> 액터를 종료합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">stop</span><span class="token punctuation">(</span>greeter<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>마찬가지로 (<code>system</code>으로 참조된) 최상위 액터인 액터 시스템을 종료하여 전체 액터 시스템을 종료할 수 있습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">stop</span><span class="token punctuation">(</span>system<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2 id="무상태-액터stateless-actor"><a href="#%EB%AC%B4%EC%83%81%ED%83%9C-%EC%95%A1%ED%84%B0stateless-actor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>무상태 액터(Stateless Actor)</h2>\n<p>무상태(Stateless) 액터는 동시에 여러 개의 요청을 처리할 수 있습니다. 무상태성(Statelessness)이란, 액터가 동시성 문제를 신경 쓸 필요가 없다는 뜻입니다.</p>',timeToRead:2,excerpt:"Nact는 Node 8 이상 버전 설치된 환경에서 작동합니다. 아래의 방법으로 설치할 수 있습니다. 액터 시스템을 시작하고 참조를 반환한다:  start() 설치한 후에, 애플리케이션 코드에서  start  함수를 import 합니다.  start…",frontmatter:{title:"시작하기",date:"22/03/2019",programming_language:"javascript",tags:["getting-started","nact","reason","bucklescript"]},fields:{slug:"/시작하기"}}},pathContext:{slug:"/시작하기",programming_language:"javascript",language:"ko_KR"}}}});
//# sourceMappingURL=path---ko-kr-lesson-javascript-시작하기-b61728ebd9dde49828d6.js.map