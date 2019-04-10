webpackJsonp([0xbd69b8409847],{436:function(n,s){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"액터 간 통신",lesson:2,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/액터-간-통신"}}},{node:{frontmatter:{title:"시작하기",lesson:2,programming_language:"javascript",chapter:1,type:"lesson"},fields:{slug:"/시작하기"}}},{node:{frontmatter:{title:"액터의 계층 구조",lesson:4,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/액터의-계층-구조"}}},{node:{frontmatter:{title:"Nact 소개",lesson:1,programming_language:"javascript",chapter:1,type:"lesson"},fields:{slug:"/nact-소개"}}},{node:{frontmatter:{title:"상태 저장(영속성)",lesson:1,programming_language:"javascript",chapter:3,type:"lesson"},fields:{slug:"/상태-저장-영속성"}}},{node:{frontmatter:{title:"퍼시스턴트 쿼리",lesson:4,programming_language:"javascript",chapter:3,type:"lesson"},fields:{slug:"/퍼시스턴트-쿼리"}}},{node:{frontmatter:{title:"스냅샷",lesson:2,programming_language:"javascript",chapter:3,type:"lesson"},fields:{slug:"/스냅샷"}}},{node:{frontmatter:{title:"상태가 있는 액터",lesson:1,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/상태가-있는-액터"}}},{node:{frontmatter:{title:"관리 감독(Supervision)",lesson:5,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/관리-감독-supervision"}}},{node:{frontmatter:{title:"타임아웃",lesson:3,programming_language:"javascript",chapter:3,type:"lesson"},fields:{slug:"/타임아웃"}}},{node:{frontmatter:{title:"질의하기",lesson:3,programming_language:"javascript",chapter:2,type:"lesson"},fields:{slug:"/질의하기"}}},{node:{frontmatter:{title:"인코더/디코더",lesson:2,programming_language:"javascript",chapter:4,type:"lesson"},fields:{slug:"/인코더-디코더"}}}]},postBySlug:{html:'<p><strong>액터 시스템</strong>의 주요 장점 가운데 하나는 바로 <strong>상태가 있는 서비스를 안전하게 생성하는</strong> 방법을 제공하는 것입니다. Nact에서는 <code>spawn</code> 함수를 이용해서 <strong>상태 있는 액터</strong>를 생성합니다.</p>\n<p>아래의 예제에서, 상태는 비어있는 객체 <code>state = {}</code> 로 초기화됩니다. 액터가 메시지를 수신할 때마다, 현재 상태는 메시지 핸들러 함수의 첫번째 인자로 들어갑니다. 한 번도 들어오지 않았던 이름(<code>msg.name</code>)이 들어오면, 메시지 핸들러 함수는 기존의 상태(<code>state</code>)에 새로운 이름(<code>msg.name</code>)을 추가해서 새로운 상태로 반환합니다. 만약 이미 들어왔던 이름(<code>msg.name</code>)이라면 그냥 기존의 상태를 그대로 반환합니다. 이때 반환된 상태는 다음 번 메시지 핸들러 함수 호출 시 <code>state</code> 인자의 값으로 사용됩니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> statefulGreeter <span class="token operator">=</span> <span class="token function">spawn</span><span class="token punctuation">(</span>\n  system<span class="token punctuation">,</span> \n  <span class="token punctuation">(</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> msg<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> hasPreviouslyGreetedMe <span class="token operator">=</span> state<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">!==</span> undefined\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>hasPreviouslyGreetedMe<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`Hello again </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.`</span></span><span class="token punctuation">)</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\n        <span class="token template-string"><span class="token string">`Good to meet you, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.\\nI am the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ctx<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> service!`</span></span>\n      <span class="token punctuation">)</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token punctuation">[</span>msg<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">\'stateful-greeter\'</span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>',timeToRead:1,excerpt:"액터 시스템 의 주요 장점 가운데 하나는 바로  상태가 있는 서비스를 안전하게 생성하는  방법을 제공하는 것입니다. Nact에서는  spawn  함수를 이용해서  상태 있는 액터 를 생성합니다. 아래의 예제에서, 상태는 비어있는 객체  state…",frontmatter:{title:"상태가 있는 액터",date:"22/03/2019",programming_language:"javascript",tags:["getting-started","nact","javascript","nodejs"]},fields:{slug:"/상태가-있는-액터"}}},pathContext:{slug:"/상태가-있는-액터",programming_language:"javascript",language:"ko_KR"}}}});
//# sourceMappingURL=path---ko-kr-lesson-javascript-상태가-있는-액터-b5dc949b90122753945c.js.map