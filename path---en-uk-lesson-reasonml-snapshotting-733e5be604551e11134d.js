webpackJsonp([0x699ddb2fc122],{429:function(s,n){s.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Actor Communication",lesson:2,programming_language:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/actor-communication"}}},{node:{frontmatter:{title:"Adapters",lesson:6,programming_language:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/adapters"}}},{node:{frontmatter:{title:"Decoders and Encoders",lesson:2,programming_language:"reasonml",chapter:4,type:"lesson"},fields:{slug:"/decoders-and-encoders"}}},{node:{frontmatter:{title:"Hierarchy",lesson:4,programming_language:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/hierarchy"}}},{node:{frontmatter:{title:"Introduction",lesson:1,programming_language:"reasonml",chapter:1,type:"lesson"},fields:{slug:"/introduction"}}},{node:{frontmatter:{title:"Persist",lesson:1,programming_language:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/persist"}}},{node:{frontmatter:{title:"Persistent Queries",lesson:4,programming_language:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/persistent-queries"}}},{node:{frontmatter:{title:"Querying",lesson:3,programming_language:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/querying"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,programming_language:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Supervision",lesson:5,programming_language:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/supervision"}}},{node:{frontmatter:{title:"Timeouts",lesson:3,programming_language:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/timeouts"}}}]},postBySlug:{html:'<p>Sometimes actors accumulate a lot of persisted events. This is problematic because it means that it can take a potentially long time for an actor to recover. For time-sensitive applictions, this would make nact an unsuitable proposition. Snapshotting is a way to skip replaying every single event. When a persistent actor starts up again, nact checks to see if there are any snapshots available in the <em>snapshot store</em>. Nact selects the latest snapshot. The snapshot contains the sequence number at which it was taken. The snapshot is passed as the initial state to the actor, and only the events which were persisted after the snapshot are replayed. </p>\n<p>To modify the user contacts service to support snapshotting, we refactor the code to the following:</p>\n<div class="gatsby-highlight">\n      <pre class="language-reason"><code><span class="token keyword">let</span> createContactsService <span class="token operator">=</span> <span class="token punctuation">(</span>parent<span class="token punctuation">,</span> userId<span class="token punctuation">)</span> <span class="token operator">=></span>\n  spawnPersistent<span class="token punctuation">(</span>\n    <span class="token operator">~</span>key<span class="token operator">=</span><span class="token string">"contacts"</span> <span class="token operator">+</span><span class="token operator">+</span> userId<span class="token punctuation">,</span>\n    <span class="token operator">~</span>name<span class="token operator">=</span>userId<span class="token punctuation">,</span>\n    <span class="token operator">~</span>snapshotEvery<span class="token operator">=</span><span class="token number">10</span> <span class="token operator">*</span> messages<span class="token punctuation">,</span>\n    parent<span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token punctuation">(</span>sender<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>persist<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token comment">/* Same function as before */</span>\n    <span class="token punctuation">}</span>    \n    <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>contacts<span class="token punctuation">:</span> <span class="token class-name">ContactIdMap</span><span class="token punctuation">.</span>empty<span class="token punctuation">,</span> seqNumber<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Here we are using the optional argument <code>snapshotEvery</code> to instruct nact to take a snapshot every 10 messages.</p>',timeToRead:1,excerpt:"Sometimes actors accumulate a lot of persisted events. This is problematic because it means that it can take a potentially long time for an…",frontmatter:{title:"Snapshotting",date:"11/12/2017",programming_language:"reasonml",tags:["getting-started","nact","reason","bucklescript"]},fields:{slug:"/snapshotting"}}},pathContext:{slug:"/snapshotting",programming_language:"reasonml",language:"en_UK"}}}});
//# sourceMappingURL=path---en-uk-lesson-reasonml-snapshotting-733e5be604551e11134d.js.map