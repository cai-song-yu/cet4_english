/* ============================================================
   文章数据 —— 每篇文章只需在这里追加一个对象
   前端渲染逻辑见 app.js，无需改动任何页面代码
   ============================================================ */

window.ARTICLES = [
  {
    id: 1,
    slug: "001-a-better-morning",
    title: "A Better Morning",
    titleCn: "更好的早晨",
    stage: "阶段一 · 基础",
    stageRange: "第 1–10 篇",
    meta: [
      { k: "篇幅", v: "约 210 词" },
      { k: "新词密度", v: "约 2.5%" },
      { k: "长难句", v: "1 处" },
      { k: "阅读题", v: "5 题" }
    ],
    cover: "assets/covers/001.jpg",
    coverCredit: "Photo: inkknife_2000 / Wikimedia Commons",

    body: [
      'I am not a natural early riser. Last year, my mornings were always <span class="w-cet4" data-cn="匆忙的、仓促的">rushed</span>. Every day I hit the snooze button again and again, got out of bed <span class="w-phrase" data-cn="在最后一刻">at the last minute</span>, and ran to the bus stop. Breakfast was often a piece of bread eaten <span class="w-phrase" data-cn="在路上">on the way</span>.',
      'I told myself that I could not <span class="w-cet4" data-cn="负担得起；有时间做">afford</span> to spend twenty minutes on breakfast, because my classes started at eight. <span class="w-sentence">The result was that I felt tired all morning and could not pay attention in class.</span>',
      'One day, my roommate asked me a simple question: "Do you really have no time, or do you just not <span class="w-phrase" data-cn="（为某事）挤出时间">make time</span>?" The question <span class="w-phrase" data-cn="（话语）萦绕在我心头">stayed with</span> me for a long time.',
      'The next week, I made a small <span class="w-cet4" data-cn="改变">change</span>. I began to wake up twenty minutes <span class="w-cet4" data-cn="额外的">extra</span> early. I wash my face, drink a glass of water, and eat breakfast at the table. This simple change costs nothing and <span class="w-cet4" data-cn="需要、要求">requires</span> no special skill, but it brought two clear <span class="w-cet4" data-cn="好处、益处">benefits</span>.',
      'First, I am <span class="w-synonym" data-cn="不再匆忙（= no longer rushed）">no longer in a hurry</span>, so class begins with a calm mind. Second, I found that a good morning gives the whole day better <span class="w-cet4" data-cn="质量、品质">quality</span>.',
      '<span class="w-writing" data-cn="我认识到……（结尾段常用）">I learned that</span> a good day does not begin at eight o’clock. It begins twenty minutes earlier.'
    ],

    translation: [
      "我并不是天生早起的人。去年，我的早晨总是很匆忙。每天我都一遍遍按掉闹钟，在最后一刻才起床，然后一路跑到公交站。早饭常常是一片面包，边走边吃。",
      "我告诉自己，我负担不起在早餐上花二十分钟，因为八点就要上课。结果就是，整个上午我都觉得疲倦，上课无法集中注意力。",
      "有一天，室友问了我一个简单的问题：「你真的没有时间，还是你只是不肯挤出时间？」这个问题在我心里停留了很久。",
      "第二周，我做了一个小小的改变。我开始提前二十分钟起床，洗脸、喝一杯水、坐在餐桌旁吃早饭。这个改变不花一分钱，也不需要任何技巧，却带来了两个明显的好处。",
      "第一，我不再匆忙，所以上课时心里是平静的。第二，我发现美好的早晨会让一整天的质量都变好。",
      "我明白了：美好的一天不是从八点开始的，而是从提前二十分钟开始。"
    ],

    vocabulary: [
      { w: "rushed", ph: "/rʌʃt/", pos: "adj.", cn: "匆忙的、仓促的", col: "a rushed breakfast — 匆忙的早餐；feel rushed — 感觉很赶", ex: "We had a rushed breakfast before the train." },
      { w: "afford", ph: "/əˈfɔːd/", pos: "vt.", cn: "负担得起、买得起", col: "can’t afford to do — 做不起、没时间做；afford the cost — 承受代价", ex: "I can’t afford to miss this chance." },
      { w: "attention", ph: "/əˈtenʃn/", pos: "n.", cn: "注意、专心", col: "pay attention to — 注意、专心于；attract attention — 引起注意", ex: "Pay attention to the blackboard, please." },
      { w: "change", ph: "/tʃeɪndʒ/", pos: "n./v.", cn: "改变、变化", col: "make a change — 做出改变；change one’s habit — 改变习惯", ex: "She made one small change to her diet." },
      { w: "extra", ph: "/ˈekstrə/", pos: "adj.", cn: "额外的", col: "extra time — 额外的时间；twenty minutes extra — 多二十分钟", ex: "I need some extra time to finish it." },
      { w: "require", ph: "/rɪˈkwaɪə(r)/", pos: "vt.", cn: "需要、要求", col: "require sth. — 需要某物；require sb. to do — 要求某人做", ex: "The job requires a lot of patience." },
      { w: "benefit", ph: "/ˈbenɪfɪt/", pos: "n./v.", cn: "好处、益处", col: "bring benefits — 带来好处；benefit from — 从……中受益", ex: "Exercise brings many benefits." },
      { w: "quality", ph: "/ˈkwɒləti/", pos: "n.", cn: "质量、品质", col: "quality of life — 生活质量；better quality — 更好的质量", ex: "Sleep affects the quality of your work." },
      { w: "result", ph: "/rɪˈzʌlt/", pos: "n.", cn: "结果", col: "the result is that … — 结果是……；as a result — 结果（副词）", ex: "He didn’t study. As a result, he failed." }
    ],

    phrases: [
      { en: "get out of bed", cn: "起床（从床上起来）", ex: "It’s hard to get out of bed in winter." },
      { en: "hit the snooze button", cn: "按掉闹钟（贪睡一会儿）", ex: "I hit the snooze button three times today." },
      { en: "wake up", cn: "醒来；叫醒", ex: "I wake up at seven every day." },
      { en: "at the last minute", cn: "在最后一刻", ex: "He arrived at the last minute and caught the bus." },
      { en: "on the way (to …)", cn: "在（去……的）路上", ex: "I listened to music on the way to school." },
      { en: "pay attention (in class)", cn: "（上课）专心听讲", ex: "If you pay attention, you will remember more." },
      { en: "pay attention to", cn: "注意、专心于（后接宾语）", ex: "Please pay attention to the teacher." },
      { en: "make time (for …)", cn: "（为某事）挤出时间", ex: "You must make time to exercise." },
      { en: "stay with sb.", cn: "（话语）萦绕在某人心头", ex: "Her words stayed with me for years." },
      { en: "no longer / not … anymore", cn: "不再", ex: "He no longer works here." },
      { en: "in a hurry", cn: "匆忙地（= rushed）", ex: "Don’t eat in a hurry. It’s bad for you." },
      { en: "make a change", cn: "做出改变", ex: "The school made a change to the schedule." }
    ],

    writings: [
      {
        expr: "The result was that ...",
        cn: "其结果是……",
        meaning: "引出某个行为造成的结果，是四级写作连接「原因—结果」最常用的句式。",
        context: "先写一个行为或问题，再写它的后果。适合现象分析、图画作文的原因段。",
        alts: [
          { t: "As a result, ...", n: "后接完整句子，更简洁" },
          { t: "... which led to ...", n: "更书面" },
          { t: "Consequently, ...", n: "正式，阶段五以后常用" }
        ],
        register: "中性，写作口语都能用。",
        example: "I stayed up late every night. The result was that I could not focus in class."
      },
      {
        expr: "I learned that ...",
        cn: "我认识到…… / 我明白了……",
        meaning: "用于结尾段总结个人感悟或道理。",
        context: "记叙文、议论文的最后一段，点出全文的道理。",
        alts: [
          { t: "From this experience, I understand that ...", n: "" },
          { t: "It occurred to me that ...", n: "更正式" },
          { t: "Only then did I realize that ...", n: "倒装句，阶段四以后用" }
        ],
        register: "中性偏个人化。",
        example: "I learned that small habits are more powerful than big plans."
      }
    ],

    sentences: [
      {
        text: "The result was that I felt tired all morning and could not pay attention in class.",
        points: [
          "<b>主干</b>：The result was ...（主语 + 系动词 + 表语）",
          "<b>表语从句</b>：that I felt tired all morning and could not pay attention in class —— 整个 that 从句作表语，说明「结果」具体是什么，是 <b>that 引导表语从句</b>的典型结构。",
          "<b>从句内部</b>：felt tired 与 could not pay attention 由 and 并列，两个谓语共用一个从句。",
          "<b>为什么值得学</b>：四级写作最实用的「因果链」——先写行为，再用 The result was that ... 引出后果，逻辑立刻清晰。注意<b>表语从句的 that 一般不可省略</b>。",
          "<b>语法提醒</b>：pay attention 后不直接接宾语，要说 pay attention <b>to</b> sth."
        ]
      }
    ],

    questions: [
      {
        en: "Why did the writer eat breakfast on the way to school?",
        cn: "作者为什么在路上吃早饭？",
        ans: "Because he was always rushed and had no time to eat at home.",
        ansCn: "因为过去早晨太匆忙，没有时间坐在家里吃早饭。"
      },
      {
        en: "What three things did the writer do after getting up twenty minutes earlier?",
        cn: "早起二十分钟后，作者做了哪三件事？",
        ans: "He washed his face, drank a glass of water, and ate breakfast at the table.",
        ansCn: "洗脸、喝一杯水、在餐桌旁吃早饭。"
      },
      {
        en: "What do the roommate’s words suggest: “Do you really have no time, or do you just not make time?”",
        cn: "室友的话暗示了什么？",
        ans: "It suggests that he could make time if he truly wanted to; the problem was not time but his habit.",
        ansCn: "暗示：时间是可以挤出来的，问题不在时间本身，而在习惯和选择。"
      },
      {
        en: "According to the passage, what are the two benefits of the new routine?",
        cn: "新的习惯带来了哪两个好处？",
        ans: "First, he is no longer in a hurry and class begins with a calm mind; second, a good morning gives the whole day better quality.",
        ansCn: "① 不再匆忙，以平静的心态开始上课；② 美好的早晨提升了整天的质量。"
      },
      {
        en: "What is the main idea of the last paragraph?",
        cn: "最后一段的主旨是什么？",
        ans: "A good day does not begin at eight o’clock, but twenty minutes earlier — small changes matter.",
        ansCn: "美好的一天不是从八点开始，而是从提前二十分钟开始——小改变有大作用。"
      }
    ],

    writingTask: {
      en: "Write 50–60 words about your morning routine.",
      hints: [
        "Every day I ...",
        "I told myself that ...",
        "The result was that ..."
      ],
      hintCn: "用 3–5 句话写你现在的早晨：几点起床、做什么、是否匆忙。可套用上面句式。",
      req: "至少使用 1 个本篇学过的词或搭配（rushed / can’t afford to do / pay attention / in a hurry）。"
    },

    speakingTask: {
      en: "Retell this passage in English in 30 seconds.",
      points: [
        "The writer’s old morning",
        "The change",
        "The result"
      ],
      pointCn: "不要背原文，用自己的话讲这三个点。",
      skeleton: "The writer used to ... Then he ... Now ... because ..."
    },

    focus: [
      "<b>新授核心词 8 个</b>：<span class='en'>rushed, afford, attention, change, extra, require, benefit, quality</span> —— 全是四级高频词，<b>afford / attention / benefit / quality 会在后续文章反复复现</b>，记搭配而非只记中文。",
      "<b>因果表达两件套</b>：<span class='en'>because ...</span>（句内原因）+ <span class='en'>The result was that ...</span>（引出结果）。",
      "<b>动词搭配积累</b>：<span class='en'>get out of bed、wake up、make time、pay attention、make a change</span> —— 这类「动词+名词」搭配是口语和写作的骨架，比单个单词更常用。",
      "<b>全文逻辑线</b>：过去（匆忙）→ 转折点（一句话）→ 改变（早起）→ 收获（两个好处）→ 感悟。这是最基础的英语记叙文结构，后面会不断升级复用。",
      "<b>阅读策略</b>：第 3、5 题需要稍微动脑推断 —— 读文章时先问自己「作者为什么写这一句」，而不是急着翻译。"
    ],
    standard: {
      time: "约 25 分钟",
      bar: "阅读题 5 题对 ≥ 4 · 9 个核心词遮住中文说出 ≥ 7 · 讲出长难句主干 · 完成 50 词写作与 30 秒复述",
      items: [
        { k: "词汇", v: "遮住中文能说出 9 个核心词中的 7 个（rushed、afford、attention、benefit、quality …）", lvl: "必达" },
        { k: "搭配", v: "12 个高频搭配掌握 8 个，能各造一句（见 03 节：make time、pay attention to …）", lvl: "建议" },
        { k: "长难句", v: "说出 The result was that … 的主干，并指出 that 引导的是表语从句", lvl: "必达" },
        { k: "阅读题", v: "5 题至少对 4 题；错的题要能回到原文标出依据句", lvl: "必达" },
        { k: "写作", v: "按 07 节写 50–60 词，至少用上 1 个本篇学过的词或搭配", lvl: "必达" },
        { k: "口语", v: "不看原文 30 秒复述「过去 → 转变 → 改变 → 收获」四步", lvl: "建议" },
        { k: "结构", v: "能脱稿说出本篇逻辑线：匆忙 → 一句话 → 早起 → 两个好处 → 感悟", lvl: "加分" }
      ]
    }
  },

  {
    id: 2,
    slug: "002-asking-better-questions",
    title: "Asking Better Questions",
    titleCn: "学会提问",
    stage: "阶段一 · 基础",
    stageRange: "第 1–10 篇",
    meta: [
      { k: "篇幅", v: "约 235 词" },
      { k: "新词密度", v: "约 2.5%" },
      { k: "长难句", v: "1 处" },
      { k: "阅读题", v: "5 题" }
    ],
    cover: "assets/covers/002.jpg",
    coverCredit: "Photo: Yan Krukau / Pexels",

    body: [
      'For my first two weeks at college, I sat quietly in class and could not <span class="w-rev">afford</span> to lose another week. I wrote down everything the teacher said, but I never asked a question. When she asked, "Any questions?" I always <span class="w-phrase" data-cn="低头看……">looked down at</span> my desk.',
      'I told myself that my question was too <span class="w-cet4" data-cn="简单的">simple</span> and that the other students would <span class="w-synonym" data-cn="嘲笑我（= make fun of me）">laugh</span>. <span class="w-sentence">I was so nervous that I could not find the right words.</span> The <span class="w-rev">result</span> was that I left the classroom with more questions than answers.',
      'One afternoon my English teacher, Ms. Wang, stopped me after class and asked why I never spoke. I said I was <span class="w-phrase" data-cn="害怕做某事">afraid of</span> looking stupid. She smiled and <span class="w-cet4" data-cn="建议、提议">suggested</span> one small <span class="w-rev">change</span>: write the question down first.',
      'The next day I tried it. I wrote my question on a piece of paper and <span class="w-phrase" data-cn="读出声、朗读出来">read it out</span>. My hand was still shaking, but the question was clear. She <span class="w-cet4" data-cn="解释、说明">explained</span> it in two minutes.',
      'After that, I asked one question in every class. I never <span class="w-cet4" data-cn="设法做到">managed</span> to ask a clever one, but I stopped being <span class="w-cet4" data-cn="紧张的">nervous</span>. She paid <span class="w-rev">attention</span> to every one of them, which was <span class="w-cet4" data-cn="方便的、便利的">convenient</span> for me.',
      '<span class="w-writing" data-cn="在我看来……（引出观点）">In my opinion</span>, a simple question is better than a silent mistake. <span class="w-writing" data-cn="那就是……的原因">That is why</span> I now sit in the front row and <span class="w-phrase" data-cn="举手">put up my hand</span>. The <span class="w-rev">benefit</span> is clear: my <span class="w-cet4" data-cn="进步、进展">progress</span> is real, and I <span class="w-cet4" data-cn="改善、提高">improve</span> every week.'
    ],

    translation: [
      "上大学的头两周，我上课总是安静地坐着，承受不起再浪费一周。我把老师说的每一句都记下来，却从没提过一个问题。她问「有什么问题吗？」的时候，我总是低头看着课桌。",
      "我告诉自己，我的问题太简单了，别的同学会笑话我。我太紧张，紧张到找不出合适的词。结果就是，我带着更多的问题而不是答案离开教室。",
      "一天下午，英语老师王老师下课后叫住我，问我为什么从不发言。我说我怕自己看起来很蠢。她笑了，建议我做一个小改变：先把问题写下来。",
      "第二天我照做。我把问题写在一张纸上，再把它读出来。手还在抖，但问题很清楚。她两分钟就解释明白了。",
      "从那以后，我每节课都会问一个问题。我从没问出过什么巧妙的问题，但我不再紧张了。她认真对待我提的每一个问题，这对我来说很方便。",
      "在我看来，一个简单的问题胜过一个沉默的错误。这就是我现在坐前排、主动举手的原因。好处很明显：我的进步是真实的，我每周都在提高。"
    ],

    vocabulary: [
      { w: "simple", ph: "/ˈsɪmpl/", pos: "adj.", cn: "简单的、朴素的", col: "a simple question — 一个简单的问题；keep it simple — 保持简单", ex: "The answer is simpler than you think." },
      { w: "nervous", ph: "/ˈnɜːvəs/", pos: "adj.", cn: "紧张的、不安的", col: "feel nervous — 感到紧张；be nervous about sth. — 对某事担心", ex: "She was nervous before the exam." },
      { w: "suggest", ph: "/səˈdʒest/", pos: "vt.", cn: "建议、提议；暗示", col: "suggest doing sth. — 建议做某事（不接 to do）；suggest a plan — 提出一个计划", ex: "He suggested leaving early." },
      { w: "explain", ph: "/ɪkˈspleɪn/", pos: "v.", cn: "解释、说明", col: "explain sth. to sb. — 向某人解释某事；explain why — 解释为什么", ex: "Could you explain this rule to me?" },
      { w: "opinion", ph: "/əˈpɪnjən/", pos: "n.", cn: "意见、看法", col: "in my opinion — 在我看来；give an opinion — 发表看法", ex: "In my opinion, the film is too long." },
      { w: "manage", ph: "/ˈmænɪdʒ/", pos: "v.", cn: "设法做到；管理", col: "manage to do sth. — 设法做成某事；manage a team — 管理一个团队", ex: "She managed to finish the work on time." },
      { w: "improve", ph: "/ɪmˈpruːv/", pos: "v.", cn: "改善、提高", col: "improve your English — 提高你的英语；improve quickly — 提高得很快", ex: "Reading aloud can improve your speaking." },
      { w: "progress", ph: "/ˈprəʊɡres/", pos: "n.", cn: "进步、进展", col: "make progress — 取得进步（不可数，不说 make a progress）；great progress — 很大的进步", ex: "You have made progress this month." },
      { w: "convenient", ph: "/kənˈviːniənt/", pos: "adj.", cn: "方便的、便利的", col: "convenient for sb. — 对某人方便；a convenient time — 方便的时间", ex: "Is Monday convenient for you?" }
    ],

    phrases: [
      { en: "ask a question", cn: "提问、问一个问题", ex: "Don’t be shy to ask a question in class." },
      { en: "look down at", cn: "低头看……", ex: "He looked down at his shoes when the teacher called him." },
      { en: "be afraid of doing sth.", cn: "害怕做某事（of 后接名词或动名词）", ex: "She is afraid of speaking in public." },
      { en: "look stupid", cn: "看起来很蠢", ex: "I didn’t want to look stupid, so I said nothing." },
      { en: "after class", cn: "课后、下课后", ex: "Let’s talk about it after class." },
      { en: "write down", cn: "写下、记下", ex: "Please write down your question." },
      { en: "read out", cn: "读出声、朗读出来", ex: "She read the sentence out to the class." },
      { en: "put up one’s hand", cn: "举手", ex: "If you know the answer, put up your hand." },
      { en: "at first", cn: "起初、一开始（常与 later / but 连用）", ex: "At first I didn’t like the city." },
      { en: "little by little", cn: "一点一点地、逐渐地", ex: "Little by little, my English got better." },
      { en: "in the front row", cn: "在第一排", ex: "I like sitting in the front row." }
    ],

    writings: [
      {
        expr: "In my opinion, ...",
        cn: "在我看来……",
        meaning: "引出个人观点，是四级写作中表达立场最常用的开头句式。",
        context: "议论文、观点类作文的开头或主体段首句，用来明确「我的看法」。",
        alts: [
          { t: "From my point of view, ...", n: "更书面" },
          { t: "As far as I am concerned, ...", n: "正式且略长" },
          { t: "I hold the view that ...", n: "正式，阶段四以后用" }
        ],
        register: "中性，写作口语都能用。",
        example: "In my opinion, students should ask more questions in class."
      },
      {
        expr: "That is why ...",
        cn: "那就是……的原因",
        meaning: "用结果反推原因，把前文的现象收束成一句结论。",
        context: "段落结尾或全文结尾：前面先写现象或行为，再用它点出原因。",
        alts: [
          { t: "This is the reason why ...", n: "更完整，稍长" },
          { t: "... which is why ...", n: "书面，接在句尾" },
          { t: "So that is why ...", n: "口语化" }
        ],
        register: "中性，偏口语但写作完全可用。",
        example: "I never asked questions, and that is why I made slow progress."
      }
    ],

    sentences: [
      {
        text: "I was so nervous that I could not find the right words.",
        points: [
          "<b>主干</b>：I was nervous（主语 + 系动词 + 表语）。",
          "<b>so ... that ...</b>：so + 形容词 / 副词 + that 从句，表示「如此……以至于……」。that 引导<b>结果状语从句</b>，说明「紧张」带来的后果。",
          "<b>为什么值得学</b>：这是四级写作里最好用的「程度 + 结果」句式之一。把 I was very nervous. I couldn’t speak. 两句合成一句，句子立刻更紧凑、更像地道英文。",
          "<b>注意</b>：so 后面跟形容词或副词（so nervous / so quickly）；如果是名词短语，要用 such（such a good question）。",
          "<b>常见变体</b>：too + 形容词 + to do（太……而不能……）—— I was too nervous to speak."
        ]
      }
    ],

    questions: [
      {
        en: "Why did the writer always look down at his desk in the first two weeks?",
        cn: "前两周作者上课时为什么总是低头看桌子？",
        ans: "Because he was too nervous to ask a question and was afraid that other students would laugh.",
        ansCn: "因为他太紧张、不敢提问，还怕别的同学笑话他。"
      },
      {
        en: "What did the teacher suggest when she stopped the writer after class?",
        cn: "老师课后拦住作者时，建议了什么？",
        ans: "She suggested writing the question down first and then reading it out.",
        ansCn: "先把问题写下来，然后再读出来。"
      },
      {
        en: "What happened when the writer read his question out?",
        cn: "作者把问题读出来之后发生了什么？",
        ans: "The question was clear, the teacher answered it in two minutes, and nothing bad happened.",
        ansCn: "问题说得很清楚，老师两分钟就解答了，什么不好的事也没发生。"
      },
      {
        en: "What does “a simple question is better than a silent mistake” mean?",
        cn: "「一个简单的问题胜过一个沉默的错误」是什么意思？",
        ans: "It is better to ask an easy question than to stay silent and keep a misunderstanding.",
        ansCn: "问一个简单的问题，好过不出声、一直带着误解。"
      },
      {
        en: "How has the writer changed by the end of the passage?",
        cn: "到文章结尾，作者有了什么变化？",
        ans: "He now sits in the front row and puts up his hand to ask one question in every class.",
        ansCn: "他现在坐在第一排，每节课都举手问一个问题。"
      }
    ],

    writingTask: {
      en: "Write 50–60 words about a question you wanted to ask but didn’t.",
      hints: [
        "At first, I ...",
        "I told myself that ...",
        "That is why ..."
      ],
      hintCn: "用 3–5 句话写一次「想问却没问」的经历：在什么场合、为什么没问、结果如何。",
      req: "至少使用 1 个本篇学过的词或搭配（nervous / suggest / be afraid of doing / in my opinion / make progress）。"
    },

    speakingTask: {
      en: "Retell this passage in English in 30 seconds.",
      points: [
        "The problem",
        "The teacher’s advice",
        "The result"
      ],
      pointCn: "不要背原文，用自己的话讲这三个点。",
      skeleton: "At first, the writer ... Then his teacher told him to ... Now he ..."
    },

    focus: [
      "<b>新授核心词 9 个</b>：<span class='en'>simple, nervous, suggest, explain, opinion, manage, improve, progress, convenient</span> —— 其中 <b>suggest / improve / progress / opinion 是四级写作与口语高频词</b>，重点记 <span class='en'>suggest doing sth.</span>（不接 to do）与 <span class='en'>make progress</span>（不可数）。",
      "<b>本篇复现的旧词</b>：第 1 篇的 <span class='en'>result</span>（The result was that ...）、<span class='en'>change</span>（make a change）、<span class='en'>I learned that</span> —— 换了新语境再用一次，看到就要能认出来。",
      "<b>so ... that ... 句式</b>：本篇唯一需要精读的句子，把两句合成一句，是阶段一写作的加分句；记住 so + 形容词、such + 名词的区别。",
      "<b>动词搭配三连</b>：<span class='en'>write down</span>（写下）、<span class='en'>read out</span>（读出来）、<span class='en'>put up one’s hand</span>（举手）—— 校园场景最高频的三个动作。",
      "<b>全文逻辑线</b>：问题（不敢问）→ 转折（老师一句话）→ 尝试（写下来再读）→ 收获（不再紧张）→ 升华（提问不是软弱）。和第 1 篇是同一个叙事骨架，主题从「习惯」换到「学习」。"
    ],
    standard: {
      time: "约 25 分钟",
      bar: "阅读题 5 题对 ≥ 4 · 核心词遮住中文说出 ≥ 7 · so…that 会仿写 · 完成写作与 30 秒复述",
      items: [
        { k: "词汇", v: "遮住中文能说出 9 个核心词中的 7 个（simple、nervous、suggest、manage、progress、improve）", lvl: "必达" },
        { k: "搭配", v: "11 个高频搭配掌握 8 个，能各造一句（look down at、be afraid of、put up one’s hand …）", lvl: "建议" },
        { k: "长难句", v: "说出 I was so nervous that … 的 so…that 结构，并仿写一句自己的经历", lvl: "必达" },
        { k: "阅读题", v: "5 题至少对 4 题；第 3、5 题要能说明推断的依据", lvl: "必达" },
        { k: "写作", v: "按 07 节写 50–60 词，至少用上 In my opinion, … 或 That is why …", lvl: "必达" },
        { k: "口语", v: "30 秒复述「不敢提问 → 老师建议 → 每节课一问」", lvl: "建议" },
        { k: "复现", v: "点划正文里 5 处灰点旧词，说出其中 3 个的意思，并查到它首次出现的篇目", lvl: "加分" }
      ]
    }
  },

  {
    id: 3,
    slug: "003-a-friend-who-listens",
    title: "A Friend Who Listens",
    titleCn: "会倾听的朋友",
    stage: "阶段一 · 基础",
    stageRange: "第 1–10 篇",
    meta: [
      { k: "篇幅", v: "约 255 词" },
      { k: "新词密度", v: "约 2.6%" },
      { k: "长难句", v: "1 处" },
      { k: "阅读题", v: "5 题" }
    ],
    cover: "assets/covers/003.jpg",
    coverCredit: "Photo: Mental Health America (MHA) / Pexels",

    body: [
      'When I first moved to this city, I felt <span class="w-cet4" data-cn="孤独的、寂寞的（情绪上的）">lonely</span>. I had classes all day, but nobody to talk to, and I could not <span class="w-rev">afford</span> to keep it all inside. <span class="w-writing" data-cn="老实说……（引出真实想法）">To be honest</span>, I did not miss the city. I missed someone who would listen.',
      'Then I met Lin in the library. She sat <span class="w-phrase" data-cn="紧挨着、在……旁边">next to</span> me for three weeks and said almost nothing. She is quiet and very <span class="w-cet4" data-cn="有耐心的">patient</span>, even when I was still <span class="w-rev">nervous</span> around her.',
      'One evening I <span class="w-phrase" data-cn="跟某人谈某事">talked to her about</span> my family for almost an hour. <span class="w-sentence">She did not say much, but her silence told me that she was listening.</span> She gave me no <span class="w-cet4" data-cn="建议（不可数）">advice</span>, though she could have <span class="w-rev">suggested</span> ten things. She only said, "That sounds really hard."',
      'Those four words helped more than a long speech. I felt <span class="w-synonym" data-cn="心里轻松多了（= much better）">lighter</span> on the way home, and the <span class="w-rev">result</span> of that evening was simple: I had a friend. That is why I began to <span class="w-cet4" data-cn="信任">trust</span> her.',
      'Now we are close friends. She still talks less than I do, but never <span class="w-phrase" data-cn="走开、离开">walks away</span> in the middle of a sentence. She knows how to <span class="w-cet4" data-cn="鼓励">encourage</span> me: when I want to give up, she says one sentence and I try again. We both make <span class="w-rev">progress</span>.',
      'I used to think a good friend must be funny or brave. Now I think <span class="w-writing" data-cn="重要的是……">what matters is</span> to <span class="w-cet4" data-cn="支持">support</span> someone in a small way. We are <span class="w-cet4" data-cn="诚实的、坦率的">honest</span> with each other and <span class="w-cet4" data-cn="分享">share</span> the small things of the day. Listening is a real <span class="w-rev">benefit</span> to both of us.'
    ],

    translation: [
      "刚搬到这座城市的时候，我很孤独。我整天都有课，却没有可以说话的人，而我承受不了一直憋在心里。说实话，我怀念的不是这座城市，而是一个愿意听我说话的人。",
      "后来我在图书馆遇见了林。她在我旁边坐了三个星期，几乎没说过话。她安静又有耐心，即使我在她面前仍然紧张，也一直如此。",
      "一天晚上，我和她聊了将近一个小时的家人。她没说多少话，但她的沉默告诉我，她一直在听。她没有给我任何建议——尽管她完全可以提出十条。她只说了一句：「那听起来真的很难。」",
      "这四个字比一长串说教还有用。回家路上我感觉轻松了许多，而那个晚上的结果很简单：我有了一个朋友。这就是我开始信任她的原因。",
      "现在我们是很亲近的朋友。她说话还是比我少，但绝不会在我话说到一半时走开。她知道怎么鼓励我：当我想放弃的时候，她说一句话，我就愿意再试一次。我们都在进步。",
      "我过去以为好朋友一定风趣或者勇敢。现在我觉得，重要的是用小事支持一个人。我们对彼此坦诚，分享一天里的琐事。倾听对我们俩来说，都是实实在在的收获。"
    ],

    vocabulary: [
      { w: "lonely", ph: "/ˈləʊnli/", pos: "adj.", cn: "孤独的、寂寞的（强调感受）", col: "feel lonely — 感到孤独；a lonely child — 孤独的孩子", ex: "He felt lonely in the new city." },
      { w: "patient", ph: "/ˈpeɪʃnt/", pos: "adj.", cn: "有耐心的", col: "be patient with sb. — 对某人有耐心；be patient with sth. — 对某事有耐心", ex: "Please be patient with beginners." },
      { w: "advice", ph: "/ədˈvaɪs/", pos: "n.", cn: "建议、忠告（不可数）", col: "give advice — 提出建议；a piece of advice — 一条建议（不能说 an advice）", ex: "She gave me a piece of good advice." },
      { w: "trust", ph: "/trʌst/", pos: "v./n.", cn: "信任、信赖", col: "trust sb. — 信任某人；build trust — 建立信任", ex: "Trust me, it will be fine." },
      { w: "encourage", ph: "/ɪnˈkʌrɪdʒ/", pos: "vt.", cn: "鼓励、鼓舞", col: "encourage sb. to do sth. — 鼓励某人做某事", ex: "My teacher encouraged me to try again." },
      { w: "support", ph: "/səˈpɔːt/", pos: "v./n.", cn: "支持、支撑", col: "support sb. — 支持某人；with the support of — 在……的支持下", ex: "My family always supports me." },
      { w: "honest", ph: "/ˈɒnɪst/", pos: "adj.", cn: "诚实的、坦率的", col: "to be honest — 老实说（常放句首）；be honest with sb. — 对某人说实话", ex: "To be honest, I don’t like it." },
      { w: "share", ph: "/ʃeə(r)/", pos: "v.", cn: "分享、共用", col: "share sth. with sb. — 与某人分享某物", ex: "He shared his notes with me." },
      { w: "matter", ph: "/ˈmætə(r)/", pos: "v.", cn: "要紧、重要", col: "it doesn’t matter — 没关系；what matters is ... — 重要的是……", ex: "It doesn’t matter if you make a mistake." }
    ],

    phrases: [
      { en: "listen to sb.", cn: "倾听某人（listen 是不及物动词，必须加 to）", ex: "She always listens to me carefully." },
      { en: "talk to sb. about sth.", cn: "跟某人谈某事", ex: "I talked to Lin about my family." },
      { en: "next to", cn: "紧挨着、在……旁边", ex: "She sat next to me in the library." },
      { en: "in the middle of", cn: "在……中途、在……当中", ex: "He left in the middle of the meeting." },
      { en: "walk away", cn: "走开、离开", ex: "She never walks away when I am talking." },
      { en: "give up", cn: "放弃", ex: "Don’t give up after one failure." },
      { en: "used to do", cn: "过去常常做（现在不这样了）", ex: "I used to think a good friend must be funny." },
      { en: "cheer sb. up", cn: "让某人高兴起来", ex: "A joke can cheer me up." },
      { en: "turn to sb.", cn: "向某人求助", ex: "When I have a problem, I turn to my best friend." },
      { en: "be there for sb.", cn: "随时支持某人、随叫随到", ex: "A real friend is there for you." },
      { en: "on the way home", cn: "在回家的路上（复现第 1 篇 on the way）", ex: "I felt lighter on the way home." }
    ],

    writings: [
      {
        expr: "To be honest, ...",
        cn: "老实说……",
        meaning: "引出真实想法或不太客气的评价，语气自然、不生硬。",
        context: "议论文主体段、书信、口语回答；用于说出与前文不同、或不太好听的真心话。",
        alts: [
          { t: "Honestly speaking, ...", n: "稍正式一点" },
          { t: "To tell the truth, ...", n: "更口语" },
          { t: "Frankly, ...", n: "更正式，阶段五以后用" }
        ],
        register: "中性偏口语，写作完全可用，通常放在句首并加逗号。",
        example: "To be honest, I did not like the plan at first."
      },
      {
        expr: "What matters is ...",
        cn: "重要的是……",
        meaning: "用主语从句收束观点，把焦点放在最关键的一点上。",
        context: "结尾段总结全文，或主体段主题句；前面通常已经列过几个因素。",
        alts: [
          { t: "The important thing is ...", n: "更简单直接" },
          { t: "It is important to ...", n: "最常见的普通版" },
          { t: "What counts is ...", n: "更地道、稍难，阶段三以后用" }
        ],
        register: "中性偏书面。",
        example: "The price is not high, but what matters is the quality."
      }
    ],

    sentences: [
      {
        text: "She did not say much, but her silence told me that she was listening.",
        points: [
          "<b>主干</b>：这是一个由 <b>but</b> 连接的<b>并列句</b>，前后两个分句地位相等、语义转折。",
          "<b>后半句</b>：her silence told me that she was listening —— 主语 <b>her silence</b> 是「抽象名词作主语」，把「她没说话」写成「她的沉默告诉我……」，比 She listened quietly. 更有画面感。",
          "<b>宾语从句</b>：<b>that she was listening</b> 整个从句作 told 的直接宾语（tell sb. that ...）。",
          "<b>为什么值得学</b>：英语常把动作、情绪、时间这类抽象概念当主语（The rain ruined our plan. / Her smile made my day.），这是中英文最大的句式差异之一，写作里用上一次就很地道。",
          "<b>语法提醒</b>：「告诉某人」用 <b>tell sb.</b>，「说某事」用 <b>say sth.</b>；say 后面不能直接接人。"
        ]
      }
    ],

    questions: [
      {
        en: "Why did the writer feel lonely when he first moved to the city?",
        cn: "作者刚搬到这座城市时为什么感到孤独？",
        ans: "Because he had classmates around him all day but nobody to talk to at night.",
        ansCn: "因为白天身边都是同学，可到了晚上却没有人可以说话。"
      },
      {
        en: "What kind of person is Lin?",
        cn: "Lin 是个什么样的人？",
        ans: "She is quiet and patient; she talks less but always listens to the end.",
        ansCn: "她话不多、很有耐心；说得少，但从不会听到一半就走开。"
      },
      {
        en: "What did Lin say after the writer talked for almost an hour?",
        cn: "作者说了将近一个小时之后，Lin 说了什么？",
        ans: "She gave no advice at all and only said, “That sounds really hard.”",
        ansCn: "她一条建议也没给，只说了句「那听起来真的很难」。"
      },
      {
        en: "Why did those four words help more than a long speech?",
        cn: "为什么那四个词比一长段话更有用？",
        ans: "Because they showed that the writer was understood, and he felt lighter afterwards.",
        ansCn: "因为它们让作者感到自己被理解了，说完之后心里轻松了很多。"
      },
      {
        en: "What does the writer think a good friend should do now?",
        cn: "作者现在认为好朋友应该做什么？",
        ans: "Support someone in a small way, for example by listening patiently.",
        ansCn: "用很小的方式支持对方，比如耐心地倾听。"
      }
    ],

    writingTask: {
      en: "Write 50–60 words about a person who helped you in a small way.",
      hints: [
        "When I ..., I felt ...",
        "He / She did not ... but ...",
        "To be honest, ..."
      ],
      hintCn: "用 3–5 句话写一个「用小举动帮过你的人」：当时你什么处境、他/她做了什么、你什么感受。",
      req: "至少使用 1 个本篇学过的词或搭配（lonely / patient / listen to / in the middle of / what matters is）。"
    },

    speakingTask: {
      en: "Retell this passage in English in 30 seconds.",
      points: [
        "Why the writer felt lonely",
        "What Lin did (and did not do)",
        "What the writer learned"
      ],
      pointCn: "不要背原文，用自己的话讲这三个点。",
      skeleton: "The writer felt ... because ... Then he met ... who ... Now he thinks ..."
    },

    focus: [
      "<b>新授核心词 9 个</b>：<span class='en'>lonely, patient, advice, trust, encourage, support, honest, share, matter</span> —— <b>advice 不可数</b>（a piece of advice），<b>matter</b> 常用于 <span class='en'>it doesn’t matter</span> 与 <span class='en'>what matters is ...</span>，这两个结构四级作文里非常值钱。",
      "<b>本篇复现的旧词</b>：第 1 篇的 <span class='en'>on the way</span>（on the way home）、第 2 篇的 <span class='en'>I learned that</span>；另用到 <span class='en'>give up / help</span> 等初中词，属「已知词复现」。",
      "<b>lonely 与 alone 辨析</b>：<span class='en'>lonely</span> 是<b>情绪</b>（孤独的），<span class='en'>alone</span> 是<b>状态</b>（独自一人）。He lives alone but he never feels lonely. —— 一句就把两者分开，四级完形最爱考。",
      "<b>抽象名词作主语</b>：her silence told me ... 是本篇的长难句，也是「中英文句式差异」的第一个正式样本，后面会不断升级。",
      "<b>全文逻辑线</b>：孤独（背景）→ 遇到（一个人）→ 关键场景（一次倾诉）→ 变化（信任）→ 感悟（倾听是礼物）。比第 1、2 篇多了一层「人物描写」，难度小幅上升。"
    ],
    standard: {
      time: "约 25 分钟",
      bar: "阅读题 5 题对 ≥ 4 · 核心词遮住中文说出 ≥ 7 · 拆出 but 两个分句 · 完成写作与 30 秒复述",
      items: [
        { k: "词汇", v: "遮住中文能说出 9 个核心词中的 7 个（lonely、patient、advice、trust、encourage、support）", lvl: "必达" },
        { k: "搭配", v: "11 个高频搭配掌握 8 个，能各造一句（to be honest、cheer sb. up、be there for sb. …）", lvl: "建议" },
        { k: "长难句", v: "拆出 but 连接的两个分句，并说明「她的沉默」为什么等于「她在听」", lvl: "必达" },
        { k: "阅读题", v: "5 题至少对 4 题；错的题要能回到原文定位", lvl: "必达" },
        { k: "写作", v: "按 07 节写 50–60 词，至少用上 To be honest, … 或 What matters is …", lvl: "必达" },
        { k: "口语", v: "30 秒复述「孤独 → 遇到林 → 那四个字」", lvl: "建议" },
        { k: "复现", v: "点划正文里 6 处灰点旧词，说出其中 3 个的意思，并查到它首次出现的篇目", lvl: "加分" }
      ]
    }
  },

  {
    id: 4,
    slug: "004-the-cheapest-thing",
    title: "The Cheapest Thing",
    titleCn: "最便宜的东西",
    stage: "阶段一 · 基础",
    stageRange: "第 1–10 篇",
    meta: [
      { k: "篇幅", v: "约 255 词" },
      { k: "新词密度", v: "约 2.8%" },
      { k: "长难句", v: "1 处" },
      { k: "阅读题", v: "5 题" }
    ],
    cover: "assets/covers/004.jpg",
    coverCredit: "Photo: Phil Desforges / Pexels",

    body: [
      'Last winter I bought a pair of shoes for thirty yuan. They were the <span class="w-cet4" data-cn="便宜的">cheapest</span> shoes in the shop, and I was very <span class="w-phrase" data-cn="对……满意">pleased with</span> the <span class="w-cet4" data-cn="价格">price</span>. It was a <span class="w-rev">simple</span> decision, made in two minutes.',
      'Three weeks later, the front of the left shoe <span class="w-phrase" data-cn="脱落、掉下来">came off</span>. It was raining, and my sock was wet before I reached the classroom. <span class="w-writing" data-cn="其结果是……（引出后果）">The result was that</span> I had to buy another pair <span class="w-phrase" data-cn="匆忙地">in a hurry</span>, with no time to <span class="w-rev">compare</span> anything.',
      'My roommate watched me <span class="w-phrase" data-cn="把……扔掉">throw the old shoes away</span>. Then he asked a question I still remember: "Did you save money, or did you just pay twice?" He said it very <span class="w-rev">honestly</span>, and the question stayed with me.',
      '<span class="w-sentence">He was right: the cheap shoes cost me thirty yuan, and the second pair cost me eighty.</span> <span class="w-writing" data-cn="如果我当时……，就不会……（事后假设）">If I had bought the good pair first, I would have</span> <span class="w-cet4" data-cn="花费（时间或钱）">spent</span> less. It was a <span class="w-rev">useful</span> lesson for a student with a small budget.',
      'Now, before I buy anything, I ask three questions. Do I really <span class="w-cet4" data-cn="需要">need</span> it? Can I <span class="w-cet4" data-cn="比较、对比">compare</span> the <span class="w-cet4" data-cn="质量、品质">quality</span> first? And will I still want it next month? The <span class="w-cet4" data-cn="有用的、实用的">useful</span> thing is not always the expensive one, but it is never the cheapest one.',
      'I am not saying we must buy <span class="w-cet4" data-cn="品牌、名牌">brand</span> names. I am only saying that a low price can hide a high <span class="w-cet4" data-cn="花费、成本">cost</span>. The second pair was <span class="w-synonym" data-cn="贵一倍（= cost twice as much）">twice as expensive</span>, and it taught me more than the first. Cheap and good are two different questions, and that <span class="w-rev">matters</span> to every student.'
    ],

    translation: [
      "去年冬天，我花三十元买了一双鞋。那是店里最便宜的一双，我对这个价格很满意。那是个很简单的决定，两分钟就做完了。",
      "三周之后，左脚鞋的前帮开了。当时正在下雨，还没走到教室，我的袜子就湿了。结果是我不得不匆忙再买一双，根本没时间比较什么。",
      "室友看着我把旧鞋扔掉，然后问了一个我至今记得的问题：「你是省了钱，还是只是付了两遍？」他问得很坦率，这个问题一直留在我心里。",
      "他说得对：便宜的鞋花了我三十元，第二双花了八十。如果我一开始就买那双好的，反而花得更少。这对预算有限的学生来说，是一堂有用的课。",
      "现在买东西之前，我会问自己三个问题：我真的需要吗？我能先比较一下质量吗？下个月我还会想要它吗？有用的东西不一定是贵的，但绝不会是最便宜的。",
      "我并不是说我们非得买名牌。我只是说，低价可能藏着高昂的代价。第二双贵了一倍，却比第一双教会我更多。便宜和好是两个不同的问题，而这一点对每个学生都很重要。"
    ],

    vocabulary: [
      { w: "cheap", ph: "/tʃiːp/", pos: "adj.", cn: "便宜的（常含「质量差」的暗示）", col: "cheap and good — 物美价廉；cheapest of all — 所有中最便宜的", ex: "The shoes were cheap, but they broke quickly." },
      { w: "price", ph: "/praɪs/", pos: "n.", cn: "价格", col: "the price of ... — ……的价格；at a low price — 以低价", ex: "The price of the book is too high." },
      { w: "compare", ph: "/kəmˈpeə(r)/", pos: "v.", cn: "比较、对比", col: "compare A with B — 把 A 和 B 比较；compare prices — 比价", ex: "Compare the two answers before you choose." },
      { w: "quality", ph: "/ˈkwɒləti/", pos: "n.", cn: "质量、品质", col: "good quality — 质量好；quality of life — 生活质量", ex: "I care about quality more than price." },
      { w: "useful", ph: "/ˈjuːsfl/", pos: "adj.", cn: "有用的、实用的", col: "be useful for ... — 对……有用；a useful skill — 一项实用技能", ex: "This is a useful website for students." },
      { w: "brand", ph: "/brænd/", pos: "n.", cn: "品牌、牌子", col: "brand name — 名牌；a famous brand — 知名品牌", ex: "You don’t have to buy a famous brand." },
      { w: "cost", ph: "/kɒst/", pos: "v./n.", cn: "花费、价钱为；成本", col: "sth. costs sb. + 钱 — 某物花某人多少钱；the cost of living — 生活成本", ex: "The trip cost me two hundred yuan." },
      { w: "spend", ph: "/spend/", pos: "v.", cn: "花费（时间或钱）", col: "spend money on sth. — 在某物上花钱；spend time doing sth. — 花时间做某事", ex: "I spent a whole day writing the report." },
      { w: "need", ph: "/niːd/", pos: "v./n.", cn: "需要", col: "need to do sth. — 需要做某事；there is no need to ... — 没必要……", ex: "You need to compare the price first." }
    ],

    phrases: [
      { en: "be pleased with", cn: "对……满意", ex: "I was pleased with the price." },
      { en: "come off", cn: "脱落、掉下来", ex: "The button came off my coat." },
      { en: "in a hurry", cn: "匆忙地（复现第 1 篇）", ex: "He left home in a hurry." },
      { en: "throw ... away", cn: "把……扔掉", ex: "Don’t throw the old box away." },
      { en: "save money", cn: "省钱、存钱", ex: "I try to save money every month." },
      { en: "pay twice", cn: "付两次钱、花双份钱", ex: "If it breaks easily, you pay twice." },
      { en: "before I buy anything", cn: "在我买任何东西之前", ex: "I check the price before I buy anything." },
      { en: "still want it", cn: "（一个月后）还想要它", ex: "Will you still want it next month?" },
      { en: "care about", cn: "在乎、关心", ex: "I care about quality more than price." },
      { en: "two different questions", cn: "两个不同的问题", ex: "Cheap and good are two different questions." }
    ],

    writings: [
      {
        expr: "The result was that ...",
        cn: "其结果是……（第 1 篇已学，本篇复现并升级）",
        meaning: "引出某个行为造成的结果。本篇把「原因—结果」链用在「消费决定」上。",
        context: "先写一个选择或行为，再写它的后果；适合现象分析、图画作文的原因段。",
        alts: [
          { t: "As a result, ...", n: "后接完整句子，更简洁" },
          { t: "So I had to ...", n: "口语化，直接说后果" },
          { t: "... which cost me ...", n: "书面，把代价写进句子里" }
        ],
        register: "中性，写作口语都能用。",
        example: "I bought the cheapest shoes. The result was that I paid twice."
      },
      {
        expr: "If I had ..., I would have ...",
        cn: "如果我当时……，我就不会……（虚拟语气，提前了解）",
        meaning: "对过去的事实做相反假设，表达「后悔 / 事后诸葛亮」。",
        context: "总结教训时用：先写真实发生的事，再假设「当初换个做法会怎样」。",
        alts: [
          { t: "I should have bought the good pair first.", n: "更简单，先掌握这句" },
          { t: "If only I had ...", n: "语气更强，「要是……就好了」" },
          { t: "I wish I had ...", n: "我希望我当时……" }
        ],
        register: "书面、正式。阶段一只要求<b>看懂</b>，写作中先用 I should have ... 就够了。",
        example: "If I had bought the good pair first, I would have spent less."
      }
    ],

    sentences: [
      {
        text: "He was right: the cheap shoes cost me thirty yuan, and the second pair cost me eighty.",
        points: [
          "<b>主干</b>：He was right（主语 + 系动词 + 表语）。",
          "<b>冒号的作用</b>：冒号后面整个部分是对前面结论的<b>具体说明</b>——「他说得对：……」。这是英语写作里很好用的「观点 + 证据」写法。",
          "<b>后半句</b>：由 <b>and</b> 连接两个并列分句，结构完全一样（X cost me Y yuan），形成<b>对比</b>。英语很爱用这种「平行结构」做比较。",
          "<b>cost 的用法</b>：物作主语 —— <b>sth. costs sb. + 钱</b>；人作主语要用 spend（I spent eighty yuan）或 pay（I paid eighty yuan for it）。三者不能混。",
          "<b>为什么值得学</b>：把两个数字并排放，读者自己就能算出「便宜 = 贵」。写作里，<b>具体的数字比形容词更有说服力</b>。"
        ]
      }
    ],

    questions: [
      {
        en: "How much did the first pair of shoes cost?",
        cn: "第一双鞋多少钱？",
        ans: "Thirty yuan.",
        ansCn: "三十元。"
      },
      {
        en: "What happened three weeks later?",
        cn: "三周后发生了什么？",
        ans: "The front of the left shoe came off, and the writer’s sock got wet in the rain.",
        ansCn: "左脚鞋头掉了，下雨天袜子全湿了。"
      },
      {
        en: "What does the roommate’s question “Did you save money, or did you just pay twice?” mean?",
        cn: "室友那句「你是省钱了，还是只是付了两次钱？」是什么意思？",
        ans: "It means that buying a very cheap thing can end up costing more, because you have to buy it again.",
        ansCn: "意思是买太便宜的东西最后可能更费钱，因为还得再买一次。"
      },
      {
        en: "What three questions does the writer ask before buying anything now?",
        cn: "作者现在买东西前会问哪三个问题？",
        ans: "Do I really need it? Can I compare the quality first? Will I still want it next month?",
        ansCn: "我真的需要吗？能不能先比较质量？下个月我还会想要它吗？"
      },
      {
        en: "What is the main idea of the last paragraph?",
        cn: "最后一段的主旨是什么？",
        ans: "A low price can hide a high cost, so cheap and good are two different questions.",
        ansCn: "低价可能藏着高成本，所以「便宜」和「好用」是两个不同的问题。"
      }
    ],

    writingTask: {
      en: "Write 50–60 words about something you bought and later regretted.",
      hints: [
        "Last ... I bought ...",
        "The result was that ...",
        "I should have ..."
      ],
      hintCn: "用 3–5 句话写一次「买了后悔」的经历：买了什么、为什么便宜、结果怎样。",
      req: "至少使用 1 个本篇学过的词或搭配（cheap / price / compare / quality / cost / care about）。"
    },

    speakingTask: {
      en: "Retell this passage in English in 30 seconds.",
      points: [
        "The cheap shoes",
        "The roommate’s question",
        "The three questions the writer asks now"
      ],
      pointCn: "不要背原文，用自己的话讲这三个点。",
      skeleton: "The writer bought ... but ... Then his roommate asked ... Now, before buying anything, he asks ..."
    },

    focus: [
      "<b>新授核心词 9 个</b>：<span class='en'>cheap, price, compare, quality, useful, brand, cost, spend, need</span> —— <b>cost / spend / pay 三个「花费」的主语和搭配完全不同</b>（物 cost 人 + 钱 / 人 spend 钱 on / 人 pay 钱 for），是本篇最该记牢的一组。",
      "<b>本篇复现的旧词</b>：第 1 篇的 <span class='en'>quality</span>（换个语境：从「生活质量」到「产品质量」）、<span class='en'>in a hurry</span>、<span class='en'>The result was that</span>；第 2 篇的 <span class='en'>In my opinion</span>。",
      "<b>对比与数字</b>：三十元 vs 八十元 —— 写作里<b>给具体数字</b>比用 very expensive 更有说服力，这是议论文举例子的基本功。",
      "<b>虚拟语气提前看</b>：<span class='en'>If I had ..., I would have ...</span> 本篇只要求看懂、能认出「事后假设」的意思；自己写作用更简单的 <span class='en'>I should have ...</span>。",
      "<b>全文逻辑线</b>：贪便宜（行为）→ 出问题（结果）→ 被点醒（一个问题）→ 算账（两个数字）→ 新习惯（三个问题）→ 升华（便宜 ≠ 好）。这是「消费类」话题的标准写法，后面阶段二会用到。"
    ],
    standard: {
      time: "约 30 分钟",
      bar: "阅读题 5 题对 ≥ 4 · 核心词遮住中文说出 ≥ 7 · 讲清 If I had …, I would have … · 完成写作与复述",
      items: [
        { k: "词汇", v: "遮住中文能说出 9 个核心词中的 7 个（cheap、price、compare、quality、cost、spend、need）", lvl: "必达" },
        { k: "搭配", v: "10 个高频搭配掌握 7 个，能各造一句（be pleased with、come off、throw … away …）", lvl: "建议" },
        { k: "长难句", v: "说出 If I had bought …, I would have spent … 是「与过去相反的假设」，并仿写一句", lvl: "必达" },
        { k: "阅读题", v: "5 题至少对 4 题；能复述「三十元 + 八十元」这笔账是怎么算的", lvl: "必达" },
        { k: "写作", v: "按 07 节写 50–60 词，至少用上 The result was that … 或 If I had …, I would have …", lvl: "必达" },
        { k: "口语", v: "30 秒复述「买便宜鞋 → 三周坏掉 → 三个问题」", lvl: "建议" },
        { k: "复现", v: "点划正文里 5 处灰点旧词，说出其中 3 个的意思，并查到它首次出现的篇目", lvl: "加分" }
      ]
    }
  },

  {
    id: 5,
    slug: "005-a-plan-for-a-rainy-day",
    title: "A Plan for a Rainy Day",
    titleCn: "雨天的计划",
    stage: "阶段一 · 基础",
    stageRange: "第 1–10 篇",
    meta: [
      { k: "篇幅", v: "约 255 词" },
      { k: "新词密度", v: "约 2.8%" },
      { k: "长难句", v: "1 处" },
      { k: "阅读题", v: "5 题" }
    ],
    cover: "assets/covers/005.jpg",
    coverCredit: "Photo: Cihan Yüce / Pexels",

    body: [
      'We had planned that Saturday for two weeks, because we could not <span class="w-rev">afford</span> to lose a free day. Four of us were going to ride to the lake, take photos, and come back before dark. As expected, the <span class="w-cet4" data-cn="天气">weather</span> had <span class="w-synonym" data-cn="有别的打算（= did not agree with us）">other ideas</span>.',
      'I woke up and <span class="w-phrase" data-cn="看窗外">looked out of the window</span>. There was <span class="w-cet4" data-cn="雾">fog</span> on the road and the sky was grey. I checked the <span class="w-phrase" data-cn="天气预报">weather forecast</span>: rain until six. It was <span class="w-rev">clear</span> that the day was lost, and I felt <span class="w-rev">rushed</span> and low.',
      'At nine my friend called. The trip was <span class="w-cet4" data-cn="取消">cancelled</span>. He sounded <span class="w-cet4" data-cn="失望的">disappointed</span>, <span class="w-phrase" data-cn="我也是（倒装：so was I）">and so was I</span>. We had <span class="w-cet4" data-cn="预料、期待">expected</span> a whole day outside, and now we had to stay <span class="w-cet4" data-cn="在室内">indoors</span>.',
      'For an hour nobody knew what to do. Then I said, "We cannot change the weather, but we can <span class="w-phrase" data-cn="改变计划">change the plan</span>." <span class="w-sentence">We stayed in the library, which was warm and quiet, and we talked for the whole afternoon.</span> My friend gave me one piece of <span class="w-rev">advice</span>: pay <span class="w-rev">attention</span> to the old maps on the wall.',
      '<span class="w-writing" data-cn="结果是……（出乎意料）">It turned out that</span> the library had a small exhibition about our city. <span class="w-writing" data-cn="我们没有……而是……">Instead of waiting at home</span>, we read the old maps and took photos there. The <span class="w-rev">benefit</span> of that exhibition was bigger than we had thought.',
      'When the rain <span class="w-cet4" data-cn="（天气）放晴">cleared</span> up at six, we walked home slowly. In this <span class="w-cet4" data-cn="情况、处境">situation</span>, the best thing is not to wait for a better day. <span class="w-rev">Compared with</span> the trip we lost, this quiet afternoon was better. A good day is a decision, not a forecast.'
    ],

    translation: [
      "那个周六我们已经计划了两个星期，因为我们承受不起白白丢掉一个休息日。我们四个人打算骑车去湖边，拍些照片，天黑之前回来。不出所料，天公不作美。",
      "我醒来望向窗外。路上有雾，天色发灰。我查了天气预报：雨会下到六点。很明显，这一天已经泡汤了，我又慌又低落。",
      "九点的时候朋友打来电话。行程取消了。他听起来很失望，我也一样。我们本来以为能在外面待上一整天，现在却只能待在室内。",
      "整整一个小时，谁也不知道该做什么。后来我说：「我们改变不了天气，但可以改变计划。」我们留在图书馆，那里温暖安静，聊了整整一下午。朋友给了我一个建议：留意墙上那些旧地图。",
      "原来图书馆正在办一个关于我们城市的小展览。我们没有在家干等，而是去看了那些旧地图，还在那里拍了照片。这个展览带来的收获，比我们想象的要大。",
      "雨在六点停了，我们慢慢走回家。在这种时候，最好的做法不是等一个更好的天气。和失去的那次出行相比，这个安静的下午反而更好。美好的一天是一个决定，而不是一份天气预报。"
    ],

    vocabulary: [
      { w: "weather", ph: "/ˈweðə(r)/", pos: "n.", cn: "天气（不可数）", col: "the weather forecast — 天气预报；in all kinds of weather — 风雨无阻", ex: "The weather changed very quickly." },
      { w: "expect", ph: "/ɪkˈspekt/", pos: "v.", cn: "预料、期待", col: "expect to do sth. — 期望做某事；as expected — 正如所料", ex: "I expect to finish it today." },
      { w: "cancel", ph: "/ˈkænsl/", pos: "vt.", cn: "取消", col: "cancel a plan — 取消计划；cancel a class — 停课", ex: "The meeting was cancelled because of the rain." },
      { w: "disappointed", ph: "/ˌdɪsəˈpɔɪntɪd/", pos: "adj.", cn: "失望的（人的感受）", col: "be disappointed with sth. — 对某事失望；feel disappointed — 感到失望", ex: "He was disappointed with the result." },
      { w: "indoors", ph: "/ˌɪnˈdɔːz/", pos: "adv.", cn: "在室内、往室内", col: "stay indoors — 留在室内（反义 outdoors）", ex: "It’s raining, so we stay indoors." },
      { w: "fog", ph: "/fɒɡ/", pos: "n.", cn: "雾", col: "thick fog — 浓雾；in the fog — 在雾中", ex: "The train stopped because of thick fog." },
      { w: "clear", ph: "/klɪə(r)/", pos: "v./adj.", cn: "（天气）放晴；清楚的", col: "clear up — 放晴、转晴；make it clear — 说清楚", ex: "The sky cleared up after lunch." },
      { w: "decide", ph: "/dɪˈsaɪd/", pos: "v.", cn: "决定", col: "decide to do sth. — 决定做某事；decide on sth. — 就某事做决定", ex: "We decided to stay at home." },
      { w: "situation", ph: "/ˌsɪtʃuˈeɪʃn/", pos: "n.", cn: "情况、处境", col: "in this situation — 在这种情况下；a difficult situation — 困境", ex: "In this situation, you should ask for help." }
    ],

    phrases: [
      { en: "weather forecast", cn: "天气预报", ex: "The weather forecast said rain." },
      { en: "look out of the window", cn: "看窗外", ex: "I looked out of the window and saw the fog." },
      { en: "stay indoors", cn: "留在室内", ex: "We had to stay indoors all day." },
      { en: "change the plan", cn: "改变计划（复现第 1 篇 make a change）", ex: "We cannot change the weather, but we can change the plan." },
      { en: "at the last minute", cn: "在最后一刻（复现第 1 篇）", ex: "He cancelled the trip at the last minute." },
      { en: "make the best of", cn: "充分利用（不好的情况）", ex: "Let’s make the best of a bad situation." },
      { en: "turn out (to be)", cn: "结果是、原来（常指出乎意料）", ex: "It turned out to be the best part of the day." },
      { en: "as planned", cn: "按计划地、如计划的那样", ex: "Nothing went as planned." },
      { en: "clear up", cn: "（天气）放晴；（问题）解决", ex: "The sky cleared up at six." },
      { en: "walk home slowly", cn: "慢慢走回家", ex: "We walked home slowly in the rain." }
    ],

    writings: [
      {
        expr: "It turned out that ...",
        cn: "结果是…… / 原来……",
        meaning: "引出一个<b>出乎意料</b>的真实结果，语气比 The result was that ... 多一层「没想到」。",
        context: "先写原计划或原来的判断，再写实际发生的事；适合叙事文的转折处。",
        alts: [
          { t: "As it turned out, ...", n: "放句首，更书面" },
          { t: "In the end, ...", n: "更简单，只说最后结果" },
          { t: "..., which turned out to be ...", n: "把结果接在句尾" }
        ],
        register: "中性，写作口语都能用。",
        example: "We stayed in the library. It turned out to be the best part of the day."
      },
      {
        expr: "Instead of doing ..., we ...",
        cn: "我们没有……而是……",
        meaning: "用「替代关系」写选择：原本会做的事没做，做了另一件事。一个介词短语顶半句话。",
        context: "计划落空、改变做法、对比两种方案时用；of 后面接<b>名词或动名词</b>。",
        alts: [
          { t: "We did not ... ; instead, we ...", n: "改成两句，更简单" },
          { t: "Rather than doing ..., we ...", n: "更书面" },
          { t: "We chose to ... instead.", n: "口语化，放句尾" }
        ],
        register: "中性，写作口语都能用。",
        example: "Instead of waiting at home, we went to the library."
      }
    ],

    sentences: [
      {
        text: "We stayed in the library, which was warm and quiet, and we talked for the whole afternoon.",
        points: [
          "<b>主干</b>：We stayed in the library ... and we talked ... —— 由 <b>and</b> 连接的两个并列分句。",
          "<b>which 从句</b>：<b>which was warm and quiet</b> 是<b>非限制性定语从句</b>，对前面的 the library 补充说明，前后有逗号隔开。",
          "<b>限制性 vs 非限制性</b>：没有逗号时是「限定哪一个」（The library which was near my house is closed.）；有逗号时是「补充说明」，去掉也不影响主句成立——本篇属于后者。",
          "<b>为什么值得学</b>：四级阅读里 <b>which 从句</b>几乎每篇都出现，而且常常被逗号或插入语隔开，容易被误读成新的一句。看到 which 先问一句「它指代前面哪个词」。",
          "<b>写作迁移</b>：把两个短句合成一句的最简单方法就是加一个 which 从句：I sat by the window. It was quiet. → I sat by the window, which was quiet."
        ]
      }
    ],

    questions: [
      {
        en: "What was the original plan for Saturday?",
        cn: "星期六原本的计划是什么？",
        ans: "Four of them were going to ride to the lake, take photos, and come back before dark.",
        ansCn: "四个人骑车去湖边拍照，天黑前回来。"
      },
      {
        en: "Why was the trip cancelled?",
        cn: "为什么行程取消了？",
        ans: "Because of the fog and the rain, which the forecast said would last until six in the evening.",
        ansCn: "因为有雾又有雨，天气预报说雨会下到晚上六点。"
      },
      {
        en: "What did the writer mean by “We cannot change the weather, but we can change the plan”?",
        cn: "「我们改不了天气，但可以改计划」是什么意思？",
        ans: "It means we cannot control what happens, but we can still choose how to respond.",
        ansCn: "意思是：我们控制不了发生的事，但可以自己选择怎么应对。"
      },
      {
        en: "What did they find in the library?",
        cn: "他们在图书馆发现了什么？",
        ans: "A small exhibition about their city, with old maps they could read and photograph.",
        ansCn: "一个关于他们城市的小展览，有老地图可以看、可以拍。"
      },
      {
        en: "What is the main idea of the last paragraph?",
        cn: "最后一段的主旨是什么？",
        ans: "A good day is a decision, not a forecast — we can make the best of a bad situation.",
        ansCn: "美好的一天是一个决定，不是天气预报——情况不好也能把它过好。"
      }
    ],

    writingTask: {
      en: "Write 50–60 words about a day when your plan changed.",
      hints: [
        "We had planned to ...",
        "It turned out that ...",
        "Instead of ..., we ..."
      ],
      hintCn: "用 3–5 句话写一次「计划被打乱」的日子：原计划是什么、发生了什么、你们改做了什么。",
      req: "至少使用 1 个本篇学过的词或搭配（weather / cancel / expect / disappointed / indoors / turn out / make the best of）。"
    },

    speakingTask: {
      en: "Retell this passage in English in 30 seconds.",
      points: [
        "The plan",
        "What the weather did",
        "What they did instead"
      ],
      pointCn: "不要背原文，用自己的话讲这三个点。",
      skeleton: "They had planned to ... but ... Instead of ..., they ... It turned out that ..."
    },

    focus: [
      "<b>新授核心词 9 个</b>：<span class='en'>weather, expect, cancel, disappointed, indoors, fog, clear, decide, situation</span> —— 注意 <b>disappointed 修饰人、disappointing 修饰物</b>（a disappointing result / I was disappointed）；<b>clear up</b> 可以指天气放晴，也可以指问题解决。",
      "<b>本篇复现的旧词</b>：第 1 篇的 <span class='en'>at the last minute</span>、<span class='en'>make a change</span>；第 4 篇的 <span class='en'>whole</span>（the whole day / the whole afternoon）。",
      "<b>两个「结果」句式的分工</b>：<span class='en'>The result was that ...</span>（中性，讲因果）vs <span class='en'>It turned out that ...</span>（出乎意料）。四级写作里两个都用上，句式就不单一了。",
      "<b>instead of 的陷阱</b>：of 是介词，后面必须跟<b>名词或动名词</b>（instead of waiting ✅ / instead of wait ❌）。",
      "<b>全文逻辑线</b>：计划（期待）→ 天气变卦（冲突）→ 低落一小时（情绪）→ 一句话转折（改计划）→ 意外收获（展览）→ 升华（好日子是决定）。叙事的「起伏」比前四篇更明显，是记叙文的下一步。"
    ],
    standard: {
      time: "约 30 分钟",
      bar: "阅读题 5 题对 ≥ 4 · 核心词遮住中文说出 ≥ 7 · 讲出 which 从句 · 完成写作与复述",
      items: [
        { k: "词汇", v: "遮住中文能说出 9 个核心词中的 7 个（weather、expect、cancel、disappointed、indoors、situation）", lvl: "必达" },
        { k: "搭配", v: "10 个高频搭配掌握 7 个，能各造一句（weather forecast、stay indoors、make the best of …）", lvl: "建议" },
        { k: "长难句", v: "说出 which was warm and quiet 是非限制性定语从句，修饰 the library", lvl: "必达" },
        { k: "阅读题", v: "5 题至少对 4 题；错的题要能回到原文定位", lvl: "必达" },
        { k: "写作", v: "按 07 节写 50–60 词，至少用上 It turned out that … 或 Instead of doing …, we …", lvl: "必达" },
        { k: "口语", v: "30 秒复述「计划出行 → 下雨取消 → 图书馆半日」", lvl: "建议" },
        { k: "复现", v: "点划正文里 7 处灰点旧词，说出其中 3 个的意思，并查到它首次出现的篇目", lvl: "加分" }
      ]
    }
  },

  {
    id: 6,
    slug: "006-where-my-time-goes",
    title: "Where My Time Goes",
    titleCn: "我的时间去哪了",
    stage: "阶段一 · 基础",
    stageRange: "第 1–10 篇",
    meta: [
      { k: "篇幅", v: "约 250 词" },
      { k: "新词密度", v: "约 2.8%" },
      { k: "长难句", v: "1 处" },
      { k: "阅读题", v: "5 题" }
    ],
    cover: "assets/covers/006.jpg",
    coverCredit: "Photo: Katrin Bolovtsova / Pexels",

    body: [
      'Every Sunday night I made a <span class="w-cet4" data-cn="日程表；安排时间">schedule</span> for the coming week. It looked perfect <span class="w-phrase" data-cn="在纸上、理论上">on paper</span>: two hours of reading every evening, all homework before Friday, no phone after ten. It was a <span class="w-rev">simple</span> list, and the <span class="w-rev">quality</span> of my week depended on it.',
      'By Wednesday, it was already <span class="w-synonym" data-cn="已经失效（= no longer working）">broken</span>. <span class="w-writing" data-cn="问题在于……">The problem is that</span> I always thought I had enough time, so I never started early. A small message would <span class="w-cet4" data-cn="使分心">distract</span> me, and twenty minutes disappeared. I never <span class="w-rev">expected</span> a phone to cost me so much.',
      'Last month I missed a <span class="w-cet4" data-cn="截止日期">deadline</span> for the first time, although I had known about it for ten days. <span class="w-sentence">The problem was not that I had no time, but that I used it badly.</span> It was not a <span class="w-rev">cheap</span> mistake.',
      'That night I wrote down what I actually did for three days, <span class="w-phrase" data-cn="一小时一小时地">hour by hour</span>. The list was not pretty. Nothing on it was <span class="w-cet4" data-cn="紧急的">urgent</span>, but all of it took time, and the <span class="w-rev">benefit</span> of the list was that I could finally see the truth.',
      'Now I <span class="w-cet4" data-cn="专注于">focus</span> on <span class="w-phrase" data-cn="一次做一件事">one thing at a time</span>, and I pay <span class="w-rev">attention</span> to nothing else. I use my <span class="w-cet4" data-cn="空闲的">spare</span> ten minutes to read, and I keep a better <span class="w-cet4" data-cn="平衡">balance</span> between work and rest. A <span class="w-rev">useful</span> habit is worth more than a perfect plan.',
      '<span class="w-writing" data-cn="……不在于……，而在于……">It is not about having more time, but about</span> not <span class="w-cet4" data-cn="浪费">wasting</span> it. I am <span class="w-cet4" data-cn="可能的">likely</span> to forget this again one day. It is a <span class="w-rev">convenient</span> thing to know, and it <span class="w-rev">matters</span> more than any app.'
    ],

    translation: [
      "每个周日晚上，我都会为接下来的一周排一张时间表。它在纸上看起来完美无缺：每晚两小时阅读、周五前做完全部作业、十点之后不碰手机。这是一份简单的清单，而我一周的质量都取决于它。",
      "到了周三，它就已经碎了。问题在于，我总觉得自己时间充裕，所以从不早点开始。一条小小的消息就能让我分心，二十分钟就这样消失了。我从没想到，一部手机会花掉我这么多时间。",
      "上个月我第一次错过了截止日期，尽管我提前十天就知道了。问题不在于我没有时间，而在于我把时间用得很糟。这个错误的代价并不小。",
      "那天夜里，我逐小时地记下自己这三天实际做了什么。这份清单并不好看。上面没有一件是紧急的，但每一件都占了时间。这份清单的好处是，我终于看清了真相。",
      "现在我一次只专注一件事，别的什么都不看。我用零碎的十分钟来阅读，在劳逸之间保持更好的平衡。一个有用的习惯，胜过一份完美的计划。",
      "问题不在于拥有更多时间，而在于不浪费时间。总有一天，我大概还会忘记。知道这件事本身就很方便，它比任何一款应用都重要。"
    ],

    vocabulary: [
      { w: "schedule", ph: "/ˈʃedjuːl/", pos: "n./v.", cn: "日程表；安排时间", col: "make a schedule — 做日程表；ahead of schedule — 提前", ex: "I made a schedule for the whole week." },
      { w: "deadline", ph: "/ˈdedlaɪn/", pos: "n.", cn: "截止日期、最后期限", col: "meet a deadline — 赶上截止；miss a deadline — 错过截止", ex: "The deadline is next Monday." },
      { w: "focus", ph: "/ˈfəʊkəs/", pos: "v./n.", cn: "专注、集中注意力", col: "focus on sth. — 专注于某事（on 不可省）", ex: "Please focus on your work." },
      { w: "distract", ph: "/dɪˈstrækt/", pos: "vt.", cn: "使分心、转移注意力", col: "distract sb. from sth. — 使某人从某事上分心", ex: "Noise distracts me from reading." },
      { w: "urgent", ph: "/ˈɜːdʒənt/", pos: "adj.", cn: "紧急的、急迫的", col: "an urgent letter — 急件；nothing urgent — 没什么急事", ex: "It’s not urgent, so take your time." },
      { w: "spare", ph: "/speə(r)/", pos: "adj./v.", cn: "空闲的；抽出、匀出", col: "in one’s spare time — 在业余时间；spare 10 minutes — 挤出十分钟", ex: "What do you do in your spare time?" },
      { w: "balance", ph: "/ˈbæləns/", pos: "n./v.", cn: "平衡；使平衡", col: "keep a balance between A and B — 保持 A 与 B 的平衡", ex: "It’s hard to keep a balance between work and rest." },
      { w: "waste", ph: "/weɪst/", pos: "v./n.", cn: "浪费；废物", col: "waste time doing sth. — 浪费时间做某事（doing 不可换 to do）", ex: "Don’t waste time on the phone." },
      { w: "likely", ph: "/ˈlaɪkli/", pos: "adj./adv.", cn: "可能的；很可能", col: "be likely to do sth. — 很可能做某事", ex: "He is likely to arrive late." }
    ],

    phrases: [
      { en: "make a schedule", cn: "做一张日程表", ex: "I made a schedule for the coming week." },
      { en: "on paper", cn: "在纸上、理论上", ex: "The plan looks perfect on paper." },
      { en: "hour by hour", cn: "一小时一小时地", ex: "I wrote down what I did hour by hour." },
      { en: "for the first time", cn: "第一次", ex: "I missed a deadline for the first time." },
      { en: "one thing at a time", cn: "一次做一件事", ex: "I focus on one thing at a time." },
      { en: "end up doing", cn: "最后（不知不觉）做了某事", ex: "I ended up watching videos for an hour." },
      { en: "work on", cn: "从事、忙于", ex: "I am working on a new report." },
      { en: "run out of", cn: "用完、耗尽", ex: "We ran out of time." },
      { en: "according to", cn: "根据、按照", ex: "According to my list, I wasted two hours a day." },
      { en: "so far", cn: "到目前为止", ex: "So far, everything is going well." }
    ],

    writings: [
      {
        expr: "The problem is that ...",
        cn: "问题在于……",
        meaning: "用一个表语从句把「问题在哪」一句话说清楚，比 The problem is + 名词 更能展开解释。",
        context: "分析原因的段落开头；后面跟着具体的解释或例子。",
        alts: [
          { t: "The trouble is (that) ...", n: "更口语，that 可省" },
          { t: "The point is that ...", n: "关键是……" },
          { t: "What’s wrong is that ...", n: "口语化" }
        ],
        register: "中性，写作口语都能用。",
        example: "The problem is that I always start too late."
      },
      {
        expr: "It is not about ..., but about ...",
        cn: "……不在于……，而在于……",
        meaning: "用「否定一个、肯定一个」的方式给出定义或结论，是很好的<b>主题句</b>。",
        context: "主体段首句或全文结尾；两个 about 后面结构要一致（都是名词或动名词）。",
        alts: [
          { t: "... is not about X. It is about Y.", n: "拆成两句，更简单" },
          { t: "It is less about X than about Y.", n: "「与其说……不如说……」" },
          { t: "X matters less than Y.", n: "X 不如 Y 重要" }
        ],
        register: "中性偏书面，写主题句很漂亮。",
        example: "Learning English is not about being smart, but about being regular."
      }
    ],

    sentences: [
      {
        text: "The problem was not that I had no time, but that I used it badly.",
        points: [
          "<b>主干</b>：The problem was ...（主语 + 系动词 + 表语），表语是两个并列的 that 从句。",
          "<b>not ... but ...</b>：「不是……而是……」。not 和 but 后面的<b>结构必须完全对称</b>——本篇是 not that 从句 + but that 从句，两边都是完整的句子。",
          "<b>表语从句的 that 不可省</b>：这是第 1 篇 <span class='en'>The result was that ...</span> 的同族结构，只是把表语换成了两个并列从句。",
          "<b>为什么值得学</b>：四级写作里最能体现「逻辑清楚」的句式之一。它先破后立，一句话同时完成「否定旧看法」和「给出新看法」，比两句分开写更有力。",
          "<b>写作迁移</b>：只要记住模板 <b>A is not that ..., but that ...</b>，换成 The reason was not that ... / My mistake was not that ... 都能直接用。"
        ]
      }
    ],

    questions: [
      {
        en: "What did the writer’s schedule for the week look like on paper?",
        cn: "作者每周的日程表「在纸上」是什么样的？",
        ans: "It looked perfect: two hours of reading every evening, homework done before Friday, and no phone after ten.",
        ansCn: "看起来很完美：每晚读两小时书、周五前写完作业、十点后不看手机。"
      },
      {
        en: "Why was the schedule always broken by Wednesday?",
        cn: "为什么日程表到周三总是被打乱？",
        ans: "Because he thought he had enough time and never started early, and his phone kept distracting him.",
        ansCn: "因为他总以为时间够用、不早点开始，手机又一直让他分心。"
      },
      {
        en: "What does “The problem was not that I had no time, but that I used it badly” mean?",
        cn: "「问题不是没有时间，而是没把时间用好」是什么意思？",
        ans: "He did have enough time; the real problem was how he spent it.",
        ansCn: "他其实有足够的时间，真正的问题是他怎么花这些时间。"
      },
      {
        en: "What did the writer do that night to understand his time?",
        cn: "那天晚上作者做了什么来弄清自己的时间？",
        ans: "He wrote down what he actually did for three days, hour by hour.",
        ansCn: "他按小时把自己三天里实际做的事记了下来。"
      },
      {
        en: "Which change does the writer mention in the fifth paragraph?",
        cn: "第五段作者提到了哪个改变？",
        ans: "He focuses on one thing at a time, puts the phone in another room, and uses spare minutes to read.",
        ansCn: "一次只做一件事，把手机放到别的房间，用零碎时间读书。"
      }
    ],

    writingTask: {
      en: "Write 50–60 words about one hour of your day that you want to use better.",
      hints: [
        "Every day I ...",
        "The problem is that ...",
        "It is not about ..., but about ..."
      ],
      hintCn: "用 3–5 句话写你一天里想用得更好的那一个小时：现在怎么用的、问题在哪、你打算怎么改。",
      req: "至少使用 1 个本篇学过的词或搭配（schedule / deadline / focus on / spare / waste / balance / be likely to）。"
    },

    speakingTask: {
      en: "Retell this passage in English in 30 seconds.",
      points: [
        "The perfect schedule",
        "The real problem",
        "What the writer does now"
      ],
      pointCn: "不要背原文，用自己的话讲这三个点。",
      skeleton: "Every week the writer made ..., but ... The problem was not that ..., but that ... Now he ..."
    },

    focus: [
      "<b>新授核心词 9 个</b>：<span class='en'>schedule, deadline, focus, distract, urgent, spare, balance, waste, likely</span> —— 三个固定搭配必须连着记：<span class='en'>focus on sth.</span>、<span class='en'>waste time doing sth.</span>、<span class='en'>be likely to do sth.</span>。",
      "<b>本篇复现的旧词</b>：第 1 篇的 <span class='en'>attention / pay attention</span>（换成了 focus on，正好做<b>同义替换</b>）；第 2 篇的 <span class='en'>improve</span>；第 3 篇的 <span class='en'>used to</span> 结构。",
      "<b>not ... but ... 平行结构</b>：本篇长难句的核心。判断标准很简单——<b>not 后面是什么结构，but 后面就必须是什么结构</b>，写完自己检查一遍。",
      "<b>focus on 与 pay attention to</b>：意思接近但搭配不同。focus on 后接<b>要做的事</b>，pay attention to 后接<b>要注意的对象</b>。四级阅读的同义替换题常考这一对。",
      "<b>全文逻辑线</b>：完美计划 → 周三崩盘 → 一次事故（错过截止）→ 做记录（发现问题）→ 三个改变 → 升华（时间不在于多，在于不浪费）。从「讲一件事」升级到「讲一个自我观察的过程」。"
    ],
    standard: {
      time: "约 30 分钟",
      bar: "阅读题 5 题对 ≥ 4 · 核心词遮住中文说出 ≥ 7 · 会用 not that …, but that … · 完成写作与复述",
      items: [
        { k: "词汇", v: "遮住中文能说出 9 个核心词中的 7 个（schedule、deadline、focus、distract、urgent、spare、balance）", lvl: "必达" },
        { k: "搭配", v: "10 个高频搭配掌握 7 个，能各造一句（make a schedule、on paper、hour by hour …）", lvl: "建议" },
        { k: "长难句", v: "说出 The problem was not that …, but that … 的对比结构，并仿写一句", lvl: "必达" },
        { k: "阅读题", v: "5 题至少对 4 题；错的题要能回到原文定位", lvl: "必达" },
        { k: "写作", v: "按 07 节写 50–60 词，至少用上 The problem is that … 或 It is not about …, but about …", lvl: "必达" },
        { k: "口语", v: "30 秒复述「完美计划 → 周三崩盘 → 逐小时记账」", lvl: "建议" },
        { k: "复现", v: "点划正文里 9 处灰点旧词，说出其中 3 个的意思，并查到它首次出现的篇目", lvl: "加分" }
      ]
    }
  },

  {
    id: 7,
    slug: "007-cooking-for-one",
    title: "Cooking for One",
    titleCn: "一个人做饭",
    stage: "阶段一 · 基础",
    stageRange: "第 1–10 篇",
    meta: [
      { k: "篇幅", v: "约 265 词" },
      { k: "新词密度", v: "约 2.8%" },
      { k: "长难句", v: "1 处" },
      { k: "阅读题", v: "5 题" }
    ],
    cover: "assets/covers/007.jpg",
    coverCredit: "Photo: Gustavo Fring / Pexels",

    body: [
      'For my first year at college I almost never cooked. I <span class="w-cet4" data-cn="点餐、订购">ordered</span> food on my phone every night, telling myself it was cheaper than <span class="w-phrase" data-cn="出去吃、在外就餐">eating out</span> and faster too. I could <span class="w-cet4" data-cn="节省">save</span> the <span class="w-cet4" data-cn="整个的">whole</span> evening. I never <span class="w-rev">compared</span> the real <span class="w-rev">price</span> of the two ways of eating.',
      'Then I got sick for a week. Nothing serious, but I felt <span class="w-cet4" data-cn="饥饿的">hungry</span> and tired at the same time. The doctor said one simple thing: my <span class="w-cet4" data-cn="日常饮食">diet</span> was the problem. He did not <span class="w-rev">explain</span> much, and he did not need to.',
      'That weekend I <span class="w-rev">decided</span> to <span class="w-cet4" data-cn="做饭、烹饪">cook</span> for myself. I bought some <span class="w-cet4" data-cn="新鲜的">fresh</span> vegetables, eggs, and rice. The first dish was <span class="w-synonym" data-cn="很难吃（= awful）">terrible</span> — too much salt, and the rice was hard. But it cost six yuan, and I did not feel <span class="w-rev">rushed</span>.',
      '<span class="w-writing" data-cn="事实上……（纠正 / 强调）">In fact</span>, six yuan is less than half of what I used to pay. <span class="w-writing" data-cn="与……相比……">Compared with</span> the food I ordered, my own cooking had better <span class="w-cet4" data-cn="质量、品质">quality</span>, and I knew every <span class="w-cet4" data-cn="（烹饪的）原料、配料">ingredient</span> in it. The real <span class="w-rev">benefit</span> was not the money at all.',
      '<span class="w-sentence">I used to order food every night, but cooking for one taught me something that money cannot buy.</span> It taught me to <span class="w-phrase" data-cn="照顾、照料">look after</span> myself. Now I cook four times a week and <span class="w-phrase" data-cn="犒劳自己">treat myself to</span> a nice meal on Friday. Little by little, my cooking has <span class="w-rev">improved</span>.',
      'I am not a good cook yet, and I still use the same three recipes. But I <span class="w-phrase" data-cn="不再">no longer</span> eat at midnight, and I sleep better. Cooking for one is not about food. It is about learning to look after your own life, and it <span class="w-rev">wastes</span> nothing.'
    ],

    translation: [
      "大学第一年，我几乎从不做饭。每晚都在手机上点外卖，告诉自己这比出去吃便宜，也更快，这样能省下一整个晚上。我从没比较过这两种吃法真正的价钱。",
      "后来我病了一周。不算严重，但我同时觉得又饿又累。医生只说了一句很简单的话：问题出在我的饮食上。他没有多解释，也不需要解释。",
      "那个周末，我决定自己做饭。我买了些新鲜蔬菜、鸡蛋和米。第一道菜糟透了——盐放多了，米也是硬的。但它只花了六元，而我并不觉得赶时间。",
      "事实上，六元还不到我过去花的一半。和我点的外卖比，自己做的饭质量更好，而且每一样食材我都清楚。真正的好处，其实根本不在钱上。",
      "我过去每晚都点外卖，但一个人做饭教会了我一件钱买不来的事：照顾自己。现在我一周做四次饭，周五还会犒劳自己一顿好的。我的厨艺在一点点进步。",
      "我还算不上好厨子，用的还是同样三个菜谱。但我不再在半夜吃东西，睡得也更好了。一个人做饭关乎的不是食物，而是学着照顾自己的生活，而且一点也不浪费。"
    ],

    vocabulary: [
      { w: "cook", ph: "/kʊk/", pos: "v./n.", cn: "做饭、烹调；厨师", col: "cook dinner — 做晚饭；cook for oneself — 给自己做饭", ex: "I cook for myself four times a week." },
      { w: "ingredient", ph: "/ɪnˈɡriːdiənt/", pos: "n.", cn: "（烹饪的）原料、配料", col: "fresh ingredients — 新鲜食材；the ingredients of ... — ……的成分", ex: "You only need three ingredients for this dish." },
      { w: "save", ph: "/seɪv/", pos: "v.", cn: "节省；挽救、保存", col: "save money — 省钱；save time — 节省时间；save one’s life — 救某人的命", ex: "Cooking at home can save money." },
      { w: "diet", ph: "/ˈdaɪət/", pos: "n.", cn: "日常饮食；节食", col: "a healthy diet — 健康饮食；be on a diet — 节食中", ex: "A good diet is important for students." },
      { w: "hungry", ph: "/ˈhʌŋɡri/", pos: "adj.", cn: "饥饿的", col: "feel hungry — 觉得饿；go hungry — 挨饿", ex: "I was hungry after the long class." },
      { w: "fresh", ph: "/freʃ/", pos: "adj.", cn: "新鲜的", col: "fresh fruit / vegetables — 新鲜水果 / 蔬菜；fresh air — 新鲜空气", ex: "The vegetables here are very fresh." },
      { w: "quality", ph: "/ˈkwɒləti/", pos: "n.", cn: "质量、品质（第 1、4 篇复现）", col: "good quality — 质量好；better quality — 更好的质量", ex: "I care about the quality of my food." },
      { w: "order", ph: "/ˈɔːdə(r)/", pos: "v./n.", cn: "点餐；订购；顺序", col: "order food — 点餐；place an order — 下订单；in order to — 为了", ex: "We ordered food on the phone." },
      { w: "whole", ph: "/həʊl/", pos: "adj.", cn: "整个的、全部的", col: "the whole day — 一整天；a whole hour — 整整一小时", ex: "I slept for the whole morning." }
    ],

    phrases: [
      { en: "cook for oneself", cn: "给自己做饭", ex: "I started to cook for myself on weekends." },
      { en: "order food", cn: "点餐、点外卖", ex: "He orders food on his phone every night." },
      { en: "eat out", cn: "出去吃、在外就餐", ex: "Cooking is cheaper than eating out." },
      { en: "a healthy diet", cn: "健康的饮食", ex: "A healthy diet needs fresh vegetables." },
      { en: "at the same time", cn: "同时", ex: "I felt hungry and tired at the same time." },
      { en: "treat oneself to", cn: "犒劳自己、请自己（吃/买）", ex: "I treat myself to a nice meal on Friday." },
      { en: "look after", cn: "照顾、照料（= take care of）", ex: "You should look after yourself." },
      { en: "again and again", cn: "一次又一次、反复", ex: "I use the same three recipes again and again." },
      { en: "no longer", cn: "不再（复现第 1 篇）", ex: "I no longer eat at midnight." },
      { en: "half of what ...", cn: "……的一半（后接 what 从句）", ex: "It is half of what I used to pay." }
    ],

    writings: [
      {
        expr: "In fact, ...",
        cn: "事实上……",
        meaning: "用来<b>纠正</b>读者的预设，或<b>强调</b>一个比看上去更强的事实。",
        context: "紧接在一个可能被误解的说法之后；也常用于举出反直觉的证据。",
        alts: [
          { t: "Actually, ...", n: "更口语" },
          { t: "As a matter of fact, ...", n: "更正式、更完整" },
          { t: "In reality, ...", n: "书面，强调「现实是」" }
        ],
        register: "中性，写作口语都能用。",
        example: "It sounds expensive. In fact, it costs half of what I used to pay."
      },
      {
        expr: "Compared with ..., ...",
        cn: "与……相比……",
        meaning: "把两样东西放在一起比，一个短语就建立对比关系，是四级写作的高频开头。",
        context: "主体段开头做对比；compared with 后接被比较的对象，主句写差异。",
        alts: [
          { t: "Compared to ..., ...", n: "两者基本通用" },
          { t: "In comparison with ..., ...", n: "更正式" },
          { t: "... is better than ...", n: "最简单的普通版" }
        ],
        register: "中性偏书面，图表作文和对比作文尤其常用。",
        example: "Compared with the food I ordered, my own cooking had better quality."
      }
    ],

    sentences: [
      {
        text: "I used to order food every night, but cooking for one taught me something that money cannot buy.",
        points: [
          "<b>主干</b>：I used to order food ... but ... taught me something —— 由 <b>but</b> 连接的两个并列分句。",
          "<b>used to do</b>：「过去常常做（现在不这样了）」。注意与 <b>be used to doing</b>（习惯于做）完全不同——I used to order food.（我以前总点外卖）/ I am used to cooking now.（我现在习惯做饭了）。",
          "<b>that money cannot buy</b>：定语从句，修饰 something。当先行词是 <b>something / anything / everything / nothing</b> 时，关系词一般用 <b>that</b>，不用 which。",
          "<b>动名词作主语</b>：<b>cooking for one</b> 这整个短语作主语，谓语用单数（taught）。英语里「一件事」当主语时，常把动作名次化（动名词）开头。",
          "<b>为什么值得学</b>：一个句子里同时含 used to、并列句、动名词主语、定语从句四个考点，而且读起来完全自然——这就是四级写作的目标句式。"
        ]
      }
    ],

    questions: [
      {
        en: "Why did the writer order food every night in his first year?",
        cn: "第一年作者为什么每晚点外卖？",
        ans: "He thought it was cheaper than eating out and faster, so he could save the evening for other things.",
        ansCn: "他觉得比出去吃便宜又快，能把整个晚上的时间省下来做别的。"
      },
      {
        en: "What did the doctor say was the problem?",
        cn: "医生说问题出在哪？",
        ans: "His diet was the problem.",
        ansCn: "问题出在他的饮食上。"
      },
      {
        en: "How was the writer’s first dish?",
        cn: "作者做的第一道菜怎么样？",
        ans: "It was terrible — too much salt and the rice was hard — but it only cost six yuan.",
        ansCn: "很难吃——盐放太多、饭是硬的——但只花了六块钱。"
      },
      {
        en: "What does cooking give the writer that money cannot buy?",
        cn: "做饭给了作者什么是钱买不到的？",
        ans: "The ability to look after himself and a better daily life, such as sleeping better.",
        ansCn: "照顾自己的能力，以及更好的日常生活，比如睡得更好。"
      },
      {
        en: "What is the main idea of the last paragraph?",
        cn: "最后一段的主旨是什么？",
        ans: "Cooking for one is not about food; it is about learning to look after your own life.",
        ansCn: "一个人做饭不只是为了吃饭，而是学着照顾自己的生活。"
      }
    ],

    writingTask: {
      en: "Write 50–60 words about a small change in your daily life.",
      hints: [
        "I used to ...",
        "Compared with ...",
        "I found that ..."
      ],
      hintCn: "用 3–5 句话写一个日常生活的小改变：以前怎样、改变后有什么不同、你发现了什么。",
      req: "至少使用 1 个本篇学过的词或搭配（cook / diet / fresh / save / treat oneself to / look after / no longer）。"
    },

    speakingTask: {
      en: "Retell this passage in English in 30 seconds.",
      points: [
        "The old habit",
        "The first attempt at cooking",
        "What the writer learned"
      ],
      pointCn: "不要背原文，用自己的话讲这三个点。",
      skeleton: "The writer used to ... Then he ... He found that cooking for one is not about ..., but about ..."
    },

    focus: [
      "<b>新授核心词 9 个</b>：<span class='en'>cook, ingredient, save, diet, hungry, fresh, quality, order, whole</span> —— <b>quality</b> 与 <b>whole</b> 都是<b>复现词</b>（第 1、4 篇已学），本篇换了新语境（食物质量 / the whole evening）。",
      "<b>本篇复现的旧词</b>：第 1 篇的 <span class='en'>no longer</span>、<span class='en'>quality</span>；第 4 篇的 <span class='en'>compared with</span> 线索、<span class='en'>half of what I used to pay</span> 里的 <span class='en'>pay</span>。",
      "<b>used to 三兄弟</b>：<span class='en'>used to do</span>（过去常常）/ <span class='en'>be used to doing</span>（习惯于）/ <span class='en'>be used to do</span>（被用来做）。四级完形和翻译年年考，本篇出现第一个。",
      "<b>something that ...</b>：先行词是 something / anything / nothing 时，定语从句用 <b>that</b> 不用 which。这一条记住，阅读里的长句就少一个卡点。",
      "<b>全文逻辑线</b>：坏习惯（点外卖）→ 警告（生病）→ 尝试（第一道菜）→ 算账与对比（六元 vs 高价）→ 变化（每周做四次）→ 升华（照顾生活）。和第 4 篇的「消费」话题呼应，但落点从「省钱」变成「照顾自己」。"
    ],
    standard: {
      time: "约 30 分钟",
      bar: "阅读题 5 题对 ≥ 4 · 核心词遮住中文说出 ≥ 7 · 会用 Compared with … · 完成写作与复述",
      items: [
        { k: "词汇", v: "遮住中文能说出 9 个核心词中的 7 个（cook、ingredient、save、diet、hungry、fresh、order）", lvl: "必达" },
        { k: "搭配", v: "10 个高频搭配掌握 7 个，能各造一句（cook for oneself、order food、treat oneself to …）", lvl: "建议" },
        { k: "长难句", v: "拆出 but 前后的对比，并说明「钱买不到的东西」具体指什么", lvl: "必达" },
        { k: "阅读题", v: "5 题至少对 4 题；能说清六元与原来花费之间的对比", lvl: "必达" },
        { k: "写作", v: "按 07 节写 50–60 词，至少用上 In fact, … 或 Compared with …, …", lvl: "必达" },
        { k: "口语", v: "30 秒复述「常点外卖 → 生病一周 → 自己做饭」", lvl: "建议" },
        { k: "复现", v: "点划正文里 8 处灰点旧词，说出其中 3 个的意思，并查到它首次出现的篇目", lvl: "加分" }
      ]
    }
  },

  {
    id: 8,
    slug: "008-twenty-minutes-a-day",
    title: "Twenty Minutes a Day",
    titleCn: "每天二十分钟",
    stage: "阶段一 · 基础",
    stageRange: "第 1–10 篇",
    meta: [
      { k: "篇幅", v: "约 260 词" },
      { k: "新词密度", v: "约 2.8%" },
      { k: "长难句", v: "1 处" },
      { k: "阅读题", v: "5 题" }
    ],
    cover: "assets/covers/008.jpg",
    coverCredit: "Photo: Hilal Cavus / Pexels",

    body: [
      'Every winter I tell myself I will start running. I buy the shoes, I watch three videos, and then I do nothing for three months. At first I thought the problem was the cold. It was not. I simply never made time for it.',
      'In March, my friend <span class="w-rev">suggested</span> that I walk with him after dinner. His <span class="w-rev">advice</span> was simple: only twenty minutes a day. I agreed because it sounded easy. It was not easy. On the second day I was <span class="w-phrase" data-cn="上气不接下气">out of breath</span> before we reached the corner.',
      'But I did not <span class="w-phrase" data-cn="放弃">give up</span>, because his <span class="w-rev">support</span> never stopped. We walked <span class="w-phrase" data-cn="一天又一天">day after day</span>, and by the third week something had changed. I was less tired, I slept better, and I had more <span class="w-cet4" data-cn="精力、能量">energy</span> in the morning. He <span class="w-rev">encouraged</span> me with one short sentence every evening.',
      '<span class="w-sentence">The more I walked, the more energy I had for the rest of the day.</span> That surprised me, because I had always thought that <span class="w-cet4" data-cn="锻炼">exercise</span> makes you tired. I had not <span class="w-rev">expected</span> that at all.',
      'Now walking is a <span class="w-cet4" data-cn="规律的、定期的">regular</span> part of my week. It <span class="w-cet4" data-cn="减少">reduces</span> my stress, takes away the small <span class="w-cet4" data-cn="疼痛">pain</span> in my back, and my <span class="w-cet4" data-cn="情绪、心情">mood</span> is better. I am more <span class="w-cet4" data-cn="活跃的、积极的">active</span> than last year, and my <span class="w-rev">diet</span> is better too.',
      'My friend never gave me a long speech. He only offered twenty minutes and stayed with me. <span class="w-writing" data-cn="只要……就……">As long as</span> you <span class="w-phrase" data-cn="坚持">stick to</span> something small, it becomes big. The hard part is not the exercise. It is <span class="w-cet4" data-cn="继续、持续">continuing</span>. It <span class="w-rev">costs</span> nothing, and it <span class="w-rev">improves</span> your <span class="w-rev">whole</span> day.'
    ],

    translation: [
      "每年冬天我都告诉自己，我要开始跑步。我买了鞋，看了三个视频，然后一连三个月什么都没做。起初我以为问题出在天冷。其实不是。我只是从来没有为它挤出时间。",
      "三月，朋友建议我晚饭后和他一起散步。他的建议很简单：一天只要二十分钟。我答应了，因为听起来很容易。其实并不容易。第二天还没走到拐角，我就已经上气不接下气。",
      "但我没有放弃，因为他的支持从未中断。我们一天接一天地走，到了第三周，有些事情已经变了。我不那么累了，睡得更好了，早上也更有精神。每天晚上，他都用短短一句话鼓励我。",
      "我走得越多，一天里剩下的时间精力就越充沛。这让我很意外，因为我一直以为运动会让人疲倦。这一点我完全没料到。",
      "现在散步是我每周固定的一部分。它减轻我的压力，带走背部的小酸痛，我的心情也更好了。我比去年更活跃，饮食也更健康了。",
      "朋友从没对我说过一番长篇大论。他只提出二十分钟，并且一直陪着我。只要坚持一件小事，它就会变成大事。难的不是运动本身，而是坚持下去。它不花一分钱，却能改善你的整个一天。"
    ],

    vocabulary: [
      { w: "exercise", ph: "/ˈeksəsaɪz/", pos: "n./v.", cn: "锻炼；练习", col: "take exercise — 锻炼身体；do exercises — 做操、做习题", ex: "Walking is an easy exercise." },
      { w: "energy", ph: "/ˈenədʒi/", pos: "n.", cn: "精力、能量（不可数）", col: "full of energy — 精力充沛；save energy — 节省精力", ex: "I have more energy after a good sleep." },
      { w: "mood", ph: "/muːd/", pos: "n.", cn: "情绪、心情", col: "be in a good mood — 心情好；be in a bad mood — 心情不好", ex: "A short walk improves my mood." },
      { w: "regular", ph: "/ˈreɡjələ(r)/", pos: "adj.", cn: "规律的、定期的", col: "regular exercise — 规律的锻炼；a regular customer — 老顾客", ex: "Regular exercise is good for the heart." },
      { w: "reduce", ph: "/rɪˈdjuːs/", pos: "vt.", cn: "减少、降低", col: "reduce stress — 减轻压力；reduce the cost — 降低成本", ex: "Walking can reduce stress." },
      { w: "pain", ph: "/peɪn/", pos: "n.", cn: "疼痛、痛苦", col: "a pain in the back — 背疼；no pain, no gain — 一分耕耘一分收获", ex: "The pain in my back is gone." },
      { w: "active", ph: "/ˈæktɪv/", pos: "adj.", cn: "活跃的、积极的", col: "an active life — 积极的生活；be active in — 在……方面积极", ex: "He is an active member of the club." },
      { w: "breath", ph: "/breθ/", pos: "n.", cn: "呼吸、气息", col: "out of breath — 上气不接下气；take a deep breath — 深呼吸", ex: "I was out of breath after running." },
      { w: "continue", ph: "/kənˈtɪnjuː/", pos: "v.", cn: "继续、持续", col: "continue doing sth. — 继续做同一件事；continue to do sth. — 接着做另一件事", ex: "She continued walking for an hour." }
    ],

    phrases: [
      { en: "take exercise", cn: "锻炼身体", ex: "You should take exercise every day." },
      { en: "out of breath", cn: "上气不接下气、喘不过气", ex: "He was out of breath after the stairs." },
      { en: "give up", cn: "放弃（复现第 3 篇）", ex: "Don’t give up after the second day." },
      { en: "day after day", cn: "一天又一天、日复一日", ex: "We walked day after day." },
      { en: "stick to", cn: "坚持、信守（to 是介词，后接名词或动名词）", ex: "Stick to your plan and you will see change." },
      { en: "the rest of", cn: "其余的、剩下的", ex: "I had energy for the rest of the day." },
      { en: "take away", cn: "带走；消除（疼痛、压力）", ex: "A walk takes away my stress." },
      { en: "as long as", cn: "只要（引导条件）", ex: "As long as you keep trying, you will improve." },
      { en: "keep fit", cn: "保持健康", ex: "I walk to keep fit." },
      { en: "make time for", cn: "为……挤出时间（复现第 1 篇 make time）", ex: "Make time for exercise, even if it is only twenty minutes." }
    ],

    writings: [
      {
        expr: "The more ..., the more ...",
        cn: "越……，就越……",
        meaning: "表示「两件事同时变化」的比例关系，一个句式就能写出因果递进。",
        context: "说明某个行为带来的持续效果；两边都要用<b>比较级</b>，前面通常加 the。",
        alts: [
          { t: "As I did more X, I got more Y.", n: "更普通的说法" },
          { t: "The harder you ..., the ...", n: "最经典的励志句式" },
          { t: "Doing more X means more Y.", n: "换成动名词主语" }
        ],
        register: "中性，写作口语都能用，是很加分的结构。",
        example: "The more I read, the more words I remember."
      },
      {
        expr: "As long as ...",
        cn: "只要……",
        meaning: "给出一个<b>充分条件</b>：满足这个条件，结果就成立。",
        context: "提出建议或总结规律时用；as long as 引导<b>条件状语从句</b>，用一般现在时表将来。",
        alts: [
          { t: "If you keep ..., you will ...", n: "最简单的普通版" },
          { t: "Provided that ...", n: "正式，阶段五以后用" },
          { t: "On condition that ...", n: "正式，条件是……" }
        ],
        register: "中性，偏书面，口语也很常用。",
        example: "As long as you stick to something small, it becomes big."
      }
    ],

    sentences: [
      {
        text: "The more I walked, the more energy I had for the rest of the day.",
        points: [
          "<b>结构</b>：<b>the + 比较级 ..., the + 比较级 ...</b>「越……，就越……」。两个 the 都不能省。",
          "<b>本句拆解</b>：前半句是 The more I walked（the more 作状语，修饰 walked）；后半句是 the more energy I had（the more 修饰名词 energy，后接 I had）。",
          "<b>语序</b>：两个分句都是<b>完整句子</b>，不是倒装——The more I walked, the more energy I had.（✅）/ The more I walked, the more had I energy.（❌）",
          "<b>为什么值得学</b>：四级作文里想写「因果递进」时，这个句式比 because ... because ... 好看太多，而且模板固定、几乎不会写错。",
          "<b>常见变体</b>：The harder you work, the luckier you get. / The sooner, the better.（越快越好，后半句可省略）"
        ]
      }
    ],

    questions: [
      {
        en: "Why did the writer never start running in winter?",
        cn: "作者冬天为什么一直没开始跑步？",
        ans: "He thought the problem was the cold, but in fact he simply never got started.",
        ansCn: "他以为问题是天冷，其实只是自己一直没真正开始。"
      },
      {
        en: "What did the friend suggest in March?",
        cn: "三月里朋友建议了什么？",
        ans: "Walking together after dinner for only twenty minutes a day.",
        ansCn: "晚饭后一起散步，每天只走二十分钟。"
      },
      {
        en: "How did the writer feel on the second day?",
        cn: "第二天作者感觉怎么样？",
        ans: "He was out of breath before they reached the corner.",
        ansCn: "还没走到路口就喘不上气了。"
      },
      {
        en: "What changes did the writer notice after the third week?",
        cn: "第三周之后作者注意到了哪些变化？",
        ans: "He was less tired in class and his mood was better after each walk.",
        ansCn: "上课没那么累了，每次走完心情也更好。"
      },
      {
        en: "What does the writer mean by “the hard part is not the exercise. It is continuing”?",
        cn: "「难的不是运动，而是坚持下去」是什么意思？",
        ans: "Starting is easy; keeping the habit every day is the real difficulty.",
        ansCn: "开始很容易，真正难的是每天都把习惯做下去。"
      }
    ],

    writingTask: {
      en: "Write 50–60 words about a small habit you want to keep.",
      hints: [
        "At first, I thought ...",
        "The more ..., the more ...",
        "As long as ..."
      ],
      hintCn: "用 3–5 句话写一个你想坚持的小习惯：一开始怎么想的、坚持后有什么变化、为什么能坚持。",
      req: "至少使用 1 个本篇学过的词或搭配（exercise / energy / mood / regular / reduce / stick to / out of breath）。"
    },

    speakingTask: {
      en: "Retell this passage in English in 30 seconds.",
      points: [
        "The winter habit that never started",
        "The friend’s offer",
        "What changed after three weeks"
      ],
      pointCn: "不要背原文，用自己的话讲这三个点。",
      skeleton: "Every winter the writer said he would ... but ... Then a friend asked him to ... After three weeks he found that ..."
    },

    focus: [
      "<b>新授核心词 9 个</b>：<span class='en'>exercise, energy, mood, regular, reduce, pain, active, breath, continue</span> —— <b>energy 不可数</b>（不说 an energy）；<b>continue doing</b>（继续同一件事）和 <b>continue to do</b>（接着做另一件事）意思不同。",
      "<b>本篇复现的旧词</b>：第 1 篇的 <span class='en'>make time for</span>；第 3 篇的 <span class='en'>give up</span>；第 2 篇的 <span class='en'>At first</span>；第 6 篇的 <span class='en'>reduce / balance</span> 线索。",
      "<b>the more ..., the more ...</b>：本篇长难句，也是阶段一最好用的「递进」句式。记住两点：两个 <b>the</b> 不能省，两边都是<b>完整句子</b>。",
      "<b>stick to 的 to 是介词</b>：后面跟名词或动名词（stick to doing ✅ / stick to do ❌）。同类的还有 <span class='en'>look forward to / be used to / pay attention to</span>，都是「介词 to」。",
      "<b>全文逻辑线</b>：年年下决心（失败）→ 一个很小的邀请（二十分钟）→ 第二天就想放弃 → 第三周出现变化 → 归纳规律（越走越有劲）→ 升华（难的是继续）。本篇是「习惯类」话题的完整范文，和第 1 篇「早起」是同一个家族。"
    ],
    standard: {
      time: "约 30 分钟",
      bar: "阅读题 5 题对 ≥ 4 · 核心词遮住中文说出 ≥ 7 · 会用 the more …, the more … · 完成写作与复述",
      items: [
        { k: "词汇", v: "遮住中文能说出 9 个核心词中的 7 个（exercise、energy、mood、regular、reduce、pain、active、continue）", lvl: "必达" },
        { k: "搭配", v: "10 个高频搭配掌握 7 个，能各造一句（take exercise、out of breath、day after day、stick to）", lvl: "建议" },
        { k: "长难句", v: "说出 The more I walked, the more energy … 的「the more …, the more …」结构并仿写", lvl: "必达" },
        { k: "阅读题", v: "5 题至少对 4 题；错的题要能回到原文定位", lvl: "必达" },
        { k: "写作", v: "按 07 节写 50–60 词，至少用上 The more …, the more … 或 As long as …", lvl: "必达" },
        { k: "口语", v: "30 秒复述「每年立誓 → 每天二十分钟 → 第三周起变化」", lvl: "建议" },
        { k: "复现", v: "点划正文里 9 处灰点旧词，说出其中 3 个的意思，并查到它首次出现的篇目", lvl: "加分" }
      ]
    }
  },

  {
    id: 9,
    slug: "009-the-new-neighbor",
    title: "The New Neighbor",
    titleCn: "新邻居",
    stage: "阶段一 · 基础",
    stageRange: "第 1–10 篇",
    meta: [
      { k: "篇幅", v: "约 260 词" },
      { k: "新词密度", v: "约 2.8%" },
      { k: "长难句", v: "1 处" },
      { k: "阅读题", v: "5 题" }
    ],
    cover: "assets/covers/009.jpg",
    coverCredit: "Photo: Egor Komarov / Pexels",

    body: [
      'Our building has always been quiet. People <span class="w-phrase" data-cn="向某人打招呼">say hello to</span> each other in the lift and then close their doors. I lived there two years and could not tell you the <span class="w-cet4" data-cn="名字">name</span> of the family <span class="w-phrase" data-cn="紧挨着">next to</span> me. In fact, I felt a little <span class="w-rev">lonely</span> there.',
      'One Friday in April, a <span class="w-cet4" data-cn="陌生人">stranger</span> <span class="w-phrase" data-cn="搬进来">moved in</span>. She was about sixty, with two heavy bags and a small cat. Nobody <span class="w-cet4" data-cn="提供、提出">offered</span> to help, although it was a <span class="w-rev">simple</span> thing to do. I did not either.',
      'The next morning I <span class="w-cet4" data-cn="注意到">noticed</span> her at the door of the <span class="w-cet4" data-cn="社区">community</span> room, holding a note that said, "Where can I buy milk?" She was not asking for a lot. She stood there ten minutes, very <span class="w-rev">patient</span> and quiet.',
      'I told her <span class="w-phrase" data-cn="去……的路">the way to</span> the shop. <span class="w-writing" data-cn="不久以后……">Before long</span>, we were talking about her cat, my classes, and the terrible lift. She invited me to her new flat, and we <span class="w-rev">shared</span> a cup of tea while she <span class="w-rev">explained</span> why she had moved here.',
      'Her name is Mrs. Chen. She is a very <span class="w-cet4" data-cn="亲切的、友善的">kind</span> person, and she has a warm <span class="w-cet4" data-cn="问候、打招呼">greeting</span> for everyone in the building. <span class="w-sentence">She is the kind of person who always notices when someone needs help.</span> Soon I began to <span class="w-rev">trust</span> her, and my neighbours too.',
      '<span class="w-writing" data-cn="直到……我才意识到……">I didn’t realize how much a simple greeting could change until I gave one myself.</span> Now I <span class="w-cet4" data-cn="欢迎">welcome</span> every new face in the lift. A building is not a community because of its walls. It becomes one when someone speaks first. That is the whole <span class="w-rev">benefit</span>, and it <span class="w-rev">costs</span> nothing.'
    ],

    translation: [
      "我们这栋楼一直很安静。人们在电梯里互相打个招呼，然后就关上各自的门。我住了两年，却说不出隔壁那家人叫什么名字。说实话，我在那里有点孤独。",
      "四月的一个周五，一个陌生人搬了进来。她大约六十岁，拎着两个很沉的袋子，还带着一只小猫。没有人主动帮忙，尽管那只是举手之劳。我也没有。",
      "第二天早上，我看见她站在活动室门口，手里拿着一张纸条，上面写着：「哪里能买到牛奶？」她要的并不多。她在那儿站了十分钟，耐心而安静。",
      "我告诉了她去商店怎么走。没过多久，我们聊起了她的猫、我的课，还有那台糟糕的电梯。她请我去她的新家，我们一起喝了杯茶，她一边解释自己为什么搬到这里。",
      "她姓陈，是个非常和善的人，对楼里的每个人都很热情。她就是这样的人——总能察觉到有人需要帮助。不久，我开始信任她，也开始信任我的邻居们。",
      "直到我自己给出一声问候，我才发现一句简单的问候能改变多少东西。现在，我在电梯里会欢迎每一张新面孔。一栋楼不会因为墙而成为社区；当有人先开口时，它才会成为社区。这就是全部的好处，而且不花一分钱。"
    ],

    vocabulary: [
      { w: "stranger", ph: "/ˈstreɪndʒə(r)/", pos: "n.", cn: "陌生人", col: "talk to a stranger — 和陌生人说话；don’t trust strangers — 别信陌生人", ex: "She was a stranger to everyone in the building." },
      { w: "notice", ph: "/ˈnəʊtɪs/", pos: "v./n.", cn: "注意到；通知、告示", col: "notice that ... — 注意到……；take notice of — 注意到、理会", ex: "I noticed that the door was open." },
      { w: "community", ph: "/kəˈmjuːnəti/", pos: "n.", cn: "社区、群体", col: "community centre — 社区活动中心；the local community — 当地社区", ex: "Our community has a small library." },
      { w: "offer", ph: "/ˈɒfə(r)/", pos: "v./n.", cn: "提供；主动提出", col: "offer to do sth. — 主动提出做某事；offer sb. sth. — 给某人提供某物", ex: "She offered to carry my bag." },
      { w: "invite", ph: "/ɪnˈvaɪt/", pos: "vt.", cn: "邀请", col: "invite sb. to do sth. — 邀请某人做某事；invite sb. to + 地点 — 邀请某人去某地", ex: "She invited me to her new flat." },
      { w: "kind", ph: "/kaɪnd/", pos: "adj./n.", cn: "亲切的、友善的；种类", col: "be kind to sb. — 对某人友善；a kind of — 一种", ex: "It’s very kind of you to help." },
      { w: "greeting", ph: "/ˈɡriːtɪŋ/", pos: "n.", cn: "问候、招呼", col: "a warm greeting — 热情的问候；say hello to — 向……打招呼", ex: "She always has a warm greeting for me." },
      { w: "welcome", ph: "/ˈwelkəm/", pos: "v./adj.", cn: "欢迎", col: "welcome to ... — 欢迎来到……；welcome sb. — 欢迎某人", ex: "Welcome to our community." },
      { w: "name", ph: "/neɪm/", pos: "n./v.", cn: "名字；命名", col: "tell sb. one’s name — 告诉某人名字；named after — 以……命名", ex: "I can’t tell you the name of the family next to me." }
    ],

    phrases: [
      { en: "say hello to sb.", cn: "向某人打招呼", ex: "People say hello in the lift." },
      { en: "next to", cn: "紧挨着、在……旁边（复现第 3 篇）", ex: "The family next to me is very quiet." },
      { en: "move in", cn: "搬进来（反义 move out）", ex: "A new neighbor moved in on Friday." },
      { en: "offer to do sth.", cn: "主动提出做某事", ex: "Nobody offered to help her." },
      { en: "ask for", cn: "请求、要求（某物）", ex: "She was asking for help." },
      { en: "the way to", cn: "去……的路", ex: "Can you tell me the way to the shop?" },
      { en: "Before long", cn: "不久以后、很快", ex: "Before long, we were talking like old friends." },
      { en: "the kind of person who ...", cn: "……的那种人（who 引导定语从句）", ex: "She is the kind of person who always helps." },
      { en: "take care of", cn: "照顾、照料（= look after，复现第 7 篇）", ex: "She takes care of a small cat." },
      { en: "speak first", cn: "先开口、主动说话", ex: "It becomes a community when someone speaks first." }
    ],

    writings: [
      {
        expr: "I didn’t realize ... until ...",
        cn: "直到……我才意识到……",
        meaning: "「not ... until」表示<b>直到某个时间点，某个认识或动作才发生</b>。这是四级翻译和作文里最高频的结构之一。",
        context: "写「转变 / 领悟」时用；主句用<b>过去时</b>或<b>现在完成时</b>，until 从句用一般过去时。",
        alts: [
          { t: "I didn’t understand ... until ...", n: "把 realize 换成 understand" },
          { t: "Not until ... did I realize ...", n: "倒装句，阶段四以后用，更高级" },
          { t: "Only then did I understand ...", n: "倒装句，「只有那时我才……」" }
        ],
        register: "中性，写作口语都能用；翻译题极常考。",
        example: "I didn’t realize how important health was until I got sick."
      },
      {
        expr: "Before long, ...",
        cn: "不久以后…… / 很快……",
        meaning: "表示时间推进很快，用来把叙事从一个场景带进下一个场景。",
        context: "记叙文中间的时间过渡；后面常接<b>意想不到的进展</b>。",
        alts: [
          { t: "Soon, ...", n: "更简单" },
          { t: "It was not long before ...", n: "更书面，没过多久就……" },
          { t: "After a while, ...", n: "过了一会儿" }
        ],
        register: "中性偏书面，记叙文过渡很好用。",
        example: "Before long, we were talking like old friends."
      }
    ],

    sentences: [
      {
        text: "She is the kind of person who always notices when someone needs help.",
        points: [
          "<b>主干</b>：She is the kind of person（主语 + 系动词 + 表语）。",
          "<b>who 从句</b>：<b>who always notices ...</b> 是<b>定语从句</b>，修饰 person，回答「什么样的人」。",
          "<b>when 从句</b>：<b>when someone needs help</b> 作 notices 的<b>时间状语从句</b>——who 从句里面又套了一个 when 从句，这是本篇的长难句所在。",
          "<b>两个从句的方向不同</b>：who 往<b>前</b>修饰名词（定语），when 往<b>后</b>说明动作发生的时间（状语）。读长句时先分清这两种，句子结构就出来了。",
          "<b>为什么值得学</b>：<b>the kind of person who ...</b> 是英语里描写人物最常见的固定说法（the kind of person who listens / who never gives up），写作里可以直接套，非常地道。"
        ]
      }
    ],

    questions: [
      {
        en: "What was the writer’s building like before?",
        cn: "之前作者住的楼是什么样的？",
        ans: "It was quiet; people only said hello in the lift and then closed their doors.",
        ansCn: "很安静；大家只在电梯里打个招呼，然后就关上门了。"
      },
      {
        en: "Why did the writer feel a little bad the next morning?",
        cn: "第二天早上作者为什么有点不好意思？",
        ans: "Because he noticed the new neighbor holding a note asking where to buy milk, and nobody had offered to help her.",
        ansCn: "因为他看到新邻居举着一张问「哪里能买到牛奶」的纸条，而没有一个人帮过她。"
      },
      {
        en: "How did the two of them start talking?",
        cn: "他们俩是怎么聊起来的？",
        ans: "The writer told her the way to the shop, and before long they were talking about her cat, his classes and the lift.",
        ansCn: "作者告诉了她去商店的路，很快他们就聊起了她的猫、他的课，还有那部糟糕的电梯。"
      },
      {
        en: "What kind of person is Mrs. Chen?",
        cn: "陈女士是个什么样的人？",
        ans: "She is kind and always notices when someone needs help; she has a warm greeting for everyone.",
        ansCn: "她很友善，总能注意到谁需要帮助，对楼里每个人都很热情。"
      },
      {
        en: "What does the last sentence mean?",
        cn: "最后一句是什么意思？",
        ans: "A community is not created by the building itself, but by people who are willing to speak to each other first.",
        ansCn: "社区不是由房子造就的，而是由愿意先开口说话的人造就的。"
      }
    ],

    writingTask: {
      en: "Write 50–60 words about someone you met in an unexpected way.",
      hints: [
        "At first, I didn’t ...",
        "Before long, ...",
        "I didn’t realize ... until ..."
      ],
      hintCn: "用 3–5 句话写一个「意想不到地认识的人」：一开始是什么情形、怎么聊起来的、你因此明白了什么。",
      req: "至少使用 1 个本篇学过的词或搭配（stranger / notice / offer to do / invite / kind / welcome / the kind of person who）。"
    },

    speakingTask: {
      en: "Retell this passage in English in 30 seconds.",
      points: [
        "The quiet building",
        "The note on the door",
        "What the writer now does"
      ],
      pointCn: "不要背原文，用自己的话讲这三个点。",
      skeleton: "The building used to be ... One day a ... moved in. The writer ... and before long ... Now he ..."
    },

    focus: [
      "<b>新授核心词 9 个</b>：<span class='en'>stranger, notice, community, offer, invite, kind, greeting, welcome, name</span> —— 三个动词都接不定式：<span class='en'>offer to do / invite sb. to do / notice sb. do</span>，这组搭配放在一起记最省力。",
      "<b>本篇复现的旧词</b>：第 3 篇的 <span class='en'>next to</span>；第 7 篇的 <span class='en'>look after</span>（本篇换成同义的 <span class='en'>take care of</span>——<b>同义替换</b>）；第 2 篇的 <span class='en'>simple</span>。",
      "<b>not ... until 结构</b>：本篇的写作表达 <span class='en'>I didn’t realize ... until ...</span> 是四级翻译题的常客，务必能写能认。",
      "<b>从句套从句</b>：本篇长难句里 who 定语从句套 when 时间从句。读长句的通用办法是<b>先找最外层的主干</b>（She is the kind of person），再一层层往里看。",
      "<b>全文逻辑线</b>：冷漠的楼（背景）→ 新邻居搬来（事件）→ 没人帮忙（转折点）→ 一张纸条（契机）→ 聊起来（发展）→ 一个习惯（升华）。结尾用「楼房 vs 社区」做<b>概念对比</b>，是记叙文向议论文过渡的雏形。"
    ],
    standard: {
      time: "约 30 分钟",
      bar: "阅读题 5 题对 ≥ 4 · 核心词遮住中文说出 ≥ 7 · 会用 not … until · 完成写作与复述",
      items: [
        { k: "词汇", v: "遮住中文能说出 9 个核心词中的 7 个（stranger、notice、community、offer、invite、kind、greeting、welcome）", lvl: "必达" },
        { k: "搭配", v: "10 个高频搭配掌握 7 个，能各造一句（say hello to、move in、offer to do、speak first）", lvl: "建议" },
        { k: "长难句", v: "说出 I didn’t realize … until … 的「直到……才……」结构，并仿写一句", lvl: "必达" },
        { k: "阅读题", v: "5 题至少对 4 题；错的题要能回到原文定位", lvl: "必达" },
        { k: "写作", v: "按 07 节写 50–60 词，至少用上 I didn’t realize … until … 或 Before long, …", lvl: "必达" },
        { k: "口语", v: "30 秒复述「冷漠的楼道 → 新邻居 → 一声问候」", lvl: "建议" },
        { k: "复现", v: "点划正文里 8 处灰点旧词，说出其中 3 个的意思，并查到它首次出现的篇目", lvl: "加分" }
      ]
    }
  },

  {
    id: 10,
    slug: "010-what-one-month-taught-me",
    title: "What One Month Taught Me",
    titleCn: "一个月教会我的",
    stage: "阶段一 · 基础",
    stageRange: "第 1–10 篇",
    meta: [
      { k: "篇幅", v: "约 260 词" },
      { k: "新词密度", v: "约 2.8%" },
      { k: "长难句", v: "1 处" },
      { k: "阅读题", v: "5 题" }
    ],
    cover: "assets/covers/010.jpg",
    coverCredit: "Photo: Alina Vilchenko / Pexels",

    body: [
      'One month ago I made a list of ten small things I wanted to change. Wake up earlier. Ask one question in class. Cook twice a week. Walk twenty minutes a day. They all sounded easy <span class="w-phrase" data-cn="在纸上、理论上">on paper</span>, and I <span class="w-rev">needed</span> a plan.',
      'Today I can say that I kept four. Four out of ten is not a good result, and <span class="w-phrase" data-cn="起初、一开始">at first</span> I was not <span class="w-cet4" data-cn="自豪的、骄傲的">proud</span> of it. But looking at the list again, I see something new: the <span class="w-rev">benefit</span> was never the four habits.',
      'The four things I kept were the ones with a clear <span class="w-cet4" data-cn="目标">goal</span> and a fixed time. "Cook twice a week" worked; "be a better person" did not. I only <span class="w-rev">managed</span> the things I could <span class="w-rev">focus</span> on.',
      'I also learned to <span class="w-cet4" data-cn="记录">record</span> what I do. A simple note in my phone takes one minute, and when I <span class="w-cet4" data-cn="复习、回顾">review</span> my week every Sunday I see where the <span class="w-cet4" data-cn="努力">effort</span> went. I pay <span class="w-rev">attention</span> to my time now, and that <span class="w-rev">costs</span> nothing.',
      '<span class="w-sentence">The habits were small, but the change they brought was not.</span> My sleep is better, my class notes are clearer, my <span class="w-rev">energy</span> and <span class="w-rev">mood</span> are better, and I spend less time on my phone. Those are not big things, but they are real.',
      '<span class="w-writing" data-cn="回顾起来……">Looking back</span>, I want to <span class="w-cet4" data-cn="继续">continue</span> with the four habits <span class="w-phrase" data-cn="而不是、代替">instead of</span> starting ten new ones. <span class="w-writing" data-cn="我学到的是……">What I have learned is that</span> a goal without a plan is only a wish. <span class="w-rev">To be honest</span>, it is not about being clever: it needs <span class="w-cet4" data-cn="耐心">patience</span>, not <span class="w-cet4" data-cn="天赋、才能">talent</span>, and it <span class="w-rev">requires</span> a little time every day.'
    ],

    translation: [
      "一个月前，我列了十件想改变的小事：早点起床、上课提一个问题、一周做两次饭、每天走二十分钟。它们在纸上听起来都很容易，而我需要一个计划。",
      "今天我可以说，我坚持下来四件。十件里只剩四件，算不上好成绩，起初我对此并不自豪。但再看一遍这份清单，我看见了新的东西：好处从来就不在那四个习惯上。",
      "我坚持下来的那四件，都是有明确目标和固定时间的。「一周做两次饭」奏效了，「成为一个更好的人」却没有。我只坚持住了那些我能专注去做的事。",
      "我还学会了记录自己做了什么。手机里记一条只要一分钟，每周日回顾的时候，我就能看出力气花在了哪里。我现在会关注自己的时间，而这不花一分钱。",
      "这些习惯很小，但它们带来的改变并不小。我的睡眠更好了，课堂笔记更清楚了，精力和心情也更好了，花在手机上的时间也少了。这些不是什么大事，但都很真实。",
      "回头看，我想继续坚持这四个习惯，而不是再开十个新的。我学到的是：没有计划的目标只是一个愿望。说实话，这不在于聪明——它需要的是耐心而不是天赋，还需要每天一点点时间。"
    ],

    vocabulary: [
      { w: "proud", ph: "/praʊd/", pos: "adj.", cn: "自豪的、骄傲的", col: "be proud of ... — 为……自豪（不说 be proud for）", ex: "I am proud of my small progress." },
      { w: "goal", ph: "/ɡəʊl/", pos: "n.", cn: "目标、目的", col: "set a goal — 设定目标；reach / achieve a goal — 达到目标", ex: "My goal this month is to read four books." },
      { w: "record", ph: "/rɪˈkɔːd/", pos: "v.", cn: "记录、录制", col: "keep a record of ... — 把……记录下来", ex: "I record what I eat every day." },
      { w: "review", ph: "/rɪˈvjuː/", pos: "v./n.", cn: "复习、回顾、评论", col: "review the lessons — 复习功课；under review — 在审查中", ex: "I review my week every Sunday." },
      { w: "effort", ph: "/ˈefət/", pos: "n.", cn: "努力、尽力（可数）", col: "make an effort to do sth. — 努力做某事；without effort — 毫不费力", ex: "It takes effort to build a habit." },
      { w: "continue", ph: "/kənˈtɪnjuː/", pos: "v.", cn: "继续（第 8 篇复现）", col: "continue doing sth. — 继续做同一件事；continue with sth. — 继续某事", ex: "I will continue with the four habits." },
      { w: "achieve", ph: "/əˈtʃiːv/", pos: "vt.", cn: "实现、达到", col: "achieve a goal — 实现目标；achieve success — 取得成功", ex: "You can achieve a lot with small steps." },
      { w: "patience", ph: "/ˈpeɪʃns/", pos: "n.", cn: "耐心（不可数）", col: "with patience — 耐心地；lose patience — 失去耐心", ex: "Learning a language needs patience." },
      { w: "talent", ph: "/ˈtælənt/", pos: "n.", cn: "天赋、才能", col: "have a talent for — 有……的天赋", ex: "Patience matters more than talent." }
    ],

    phrases: [
      { en: "keep a habit", cn: "保持一个习惯", ex: "I kept four of the ten habits." },
      { en: "at first", cn: "起初、一开始（复现第 2、8 篇）", ex: "At first I was not proud of it." },
      { en: "look at ... again", cn: "再看一遍……", ex: "Looking at the list again, I saw something new." },
      { en: "keep a record of", cn: "把……记录下来", ex: "Keep a record of what you eat." },
      { en: "make an effort to do", cn: "努力去做某事", ex: "I made an effort to wake up earlier." },
      { en: "be proud of", cn: "为……感到自豪", ex: "Be proud of small progress." },
      { en: "instead of", cn: "而不是、代替（复现第 5 篇）", ex: "I want to continue instead of starting ten new habits." },
      { en: "little by little", cn: "一点一点地（复现第 2 篇）", ex: "Little by little, the small habits changed my days." },
      { en: "step by step", cn: "一步一步地", ex: "You can learn anything step by step." },
      { en: "in the end", cn: "最后、最终", ex: "In the end, four habits were enough." }
    ],

    writings: [
      {
        expr: "Looking back, ...",
        cn: "回顾起来……",
        meaning: "把时间拉回过去、从现在的位置看过去，是写<b>总结段</b>最自然的开头。",
        context: "全文最后一段；后面写「我明白了什么」。",
        alts: [
          { t: "When I look back, ...", n: "完整的从句版" },
          { t: "In hindsight, ...", n: "更书面，阶段五以后用" },
          { t: "Thinking about it now, ...", n: "口语化" }
        ],
        register: "中性偏书面，记叙文和总结段都好用。",
        example: "Looking back, I want to continue with the four habits."
      },
      {
        expr: "What I have learned is that ...",
        cn: "我学到的是……",
        meaning: "用<b>主语从句</b>引出结论，比 I learned that ... 更强调「这一整件事让我明白」。",
        context: "结尾段的中心句；后面直接写道理。",
        alts: [
          { t: "I learned that ...", n: "第 1 篇已学，更简单" },
          { t: "The lesson is that ...", n: "教训是……" },
          { t: "What matters is that ...", n: "第 3 篇已学，重要的是……" }
        ],
        register: "中性偏书面；与第 1 篇的 I learned that 是<b>同一功能的升级版</b>。",
        example: "What I have learned is that a goal without a plan is only a wish."
      }
    ],

    sentences: [
      {
        text: "The habits were small, but the change they brought was not.",
        points: [
          "<b>主干</b>：The habits were small, but the change was not. —— 由 <b>but</b> 连接的两个并列分句，前后句式对称。",
          "<b>省略的关系代词</b>：<b>the change they brought</b> = the change <b>that / which</b> they brought。当关系代词在定语从句中作<b>宾语</b>时可以省略，这是英语阅读里最常见、也最容易看漏的省略。",
          "<b>not 的指代</b>：句末的 <b>not</b> 代替 was not small，也就是 was big。英语里用 not 省略重复部分，读的时候要能还原。",
          "<b>为什么值得学</b>：一句话同时含<b>转折、省略定语从句、省略表语</b>三个点，但读起来很自然——这就是「简洁」的来源。<b>写作里，省略让句子像母语者写的。</b>",
          "<b>写作迁移</b>：The problem is easy, but the solution <b>we need</b> is not. / The book is short, but the message <b>it carries</b> is not."
        ]
      }
    ],

    questions: [
      {
        en: "How many of the ten small changes did the writer keep?",
        cn: "十个小改变中作者坚持了几个？",
        ans: "Four out of ten.",
        ansCn: "十个里坚持了四个。"
      },
      {
        en: "Why was the writer not proud at first?",
        cn: "作者一开始为什么不觉得自豪？",
        ans: "Because he thought four out of ten was not a good result.",
        ansCn: "因为他觉得十个里只做到四个成绩不好。"
      },
      {
        en: "What did the four successful habits have in common?",
        cn: "坚持下来的四个习惯有什么共同点？",
        ans: "They had a clear goal and a fixed time.",
        ansCn: "它们都有清楚的目标和固定的时间。"
      },
      {
        en: "Why does the writer record what he does?",
        cn: "作者为什么把自己做的事记下来？",
        ans: "Because a one-minute note shows him the truth, and reviewing it each week shows where his effort went.",
        ansCn: "因为一分钟的记录能让他看到真实情况，每周回顾能看到努力花在了哪里。"
      },
      {
        en: "What is the main idea of the last paragraph?",
        cn: "最后一段的主旨是什么？",
        ans: "A goal without a plan is only a wish; small steps kept every day need patience, not talent.",
        ansCn: "没有计划的目标只是愿望；每天坚持的小步骤靠的是耐心，不是天赋。"
      }
    ],

    writingTask: {
      en: "Write 50–60 words about one month of trying to change something.",
      hints: [
        "One month ago, I ...",
        "Looking back, ...",
        "What I have learned is that ..."
      ],
      hintCn: "用 3–5 句话写一个月的改变尝试：当初想做什么、实际做到了多少、你明白了什么。",
      req: "至少使用 2 个本篇学过的词或搭配（goal / effort / record / review / proud / continue / achieve / patience）。"
    },

    speakingTask: {
      en: "Retell this passage in English in 30 seconds, then add one sentence about your own month.",
      points: [
        "The list of ten",
        "Why only four worked",
        "The lesson + one sentence about you"
      ],
      pointCn: "先讲文章三点，再补一句自己的情况（可以说 real experience）。",
      skeleton: "The writer tried to ... but only ... The habits that worked had ... What he learned is that ... As for me, ..."
    },

    focus: [
      "<b>新授核心词 9 个</b>：<span class='en'>proud, goal, record, review, effort, continue, achieve, patience, talent</span> —— <b>effort 可数</b>（make an effort / efforts），<b>patience 不可数</b>（不能说 a patience）；<b>proud of</b> 的 of 不可换。",
      "<b>本篇复现的旧词（本篇是节点篇，复现密度最高）</b>：第 1 篇的 <span class='en'>result</span>；第 2 篇的 <span class='en'>at first / improve / progress</span>；第 3 篇的 <span class='en'>patient → patience（词性转换）</span>、<span class='en'>what matters</span>；第 5 篇的 <span class='en'>instead of</span>；第 6 篇的 <span class='en'>schedule / focus</span>；第 8 篇的 <span class='en'>stick to / continue</span>。",
      "<b>词性转换是四级的核心考点</b>：<span class='en'>patient → patience</span>（本篇）、<span class='en'>kind → kindness</span>、<span class='en'>proud → pride</span>。看到名词题先想「这个词的其他词性是什么」。",
      "<b>省略定语从句</b>：the change <b>(that)</b> they brought —— 关系代词作宾语时可省略。阅读时如果发现句子「少一个词」，多半就是这里。",
      "<b>⭐ 本阶段复盘 · 词汇抽查</b>：请盖住释义，认一认这 10 个词 —— <span class='en'>afford, attention, benefit, quality, suggest, improve, progress, opinion, patient, encourage</span>。任何两个想不起来的，告诉老师，会写进第 11–15 篇的复现队列。",
      "<b>⭐ 本阶段复盘 · 已掌握的句型</b>：<span class='en'>The result was that ...</span>（因果）· <span class='en'>so ... that ...</span>（程度+结果）· <span class='en'>not ... but ...</span>（对比）· <span class='en'>the more ..., the more ...</span>（递进）· <span class='en'>I didn’t ... until ...</span>（直到才）· <span class='en'>which 从句</span>（补充说明）· <span class='en'>the kind of person who ...</span>（人物描写）。这七个是阶段一的全部产出句型，写作里至少用两个。",
      "<b>⭐ 本阶段复盘 · 下阶段难度确认</b>：阶段二（第 11–20 篇）将小幅上调三个维度 —— 篇幅 250→320 词、新词密度 3–4.5%、每篇 10–14 个新词，并开始出现简单非谓语（to do / doing）与推断题。<b>如果你读完这一篇觉得「刚好」或「偏简单」，我们就按计划推进；如果偏难，下一篇只下调新词密度，其余不变。</b>请在反馈里给一个 1–5 的难度自评。"
    ],
    standard: {
      time: "约 35 分钟",
      bar: "阶段一复盘：阅读题 5 题对 ≥ 4 · 核心词遮住中文说出 ≥ 7 · 复述四个坚持下来的习惯 · 完成写作与复述",
      items: [
        { k: "词汇", v: "遮住中文能说出 9 个核心词中的 7 个（proud、goal、record、review、effort、patience、talent …）", lvl: "必达" },
        { k: "搭配", v: "10 个高频搭配掌握 7 个，能各造一句（keep a record of、make an effort to do、instead of …）", lvl: "建议" },
        { k: "长难句", v: "说出 The habits were small, but the change … was not 的省略与对比，并仿写一句", lvl: "必达" },
        { k: "阅读题", v: "5 题至少对 4 题；错的题要能回到原文定位", lvl: "必达" },
        { k: "写作", v: "按 07 节写 50–60 词，至少用上 Looking back, … 或 What I have learned is that …", lvl: "必达" },
        { k: "口语", v: "30 秒复述「十项计划 → 只剩四项 → 学到的道理」", lvl: "建议" },
        { k: "复现", v: "点划正文里 10 处灰点旧词，说出其中 3 个的意思；并能用一句话总结阶段一的收获", lvl: "加分" }
      ]
    }
  },
{
    id: 11,
    slug: '011-the-weekend-i-said-yes',
    title: 'The Weekend I Said Yes',
    titleCn: '我说“好”的那个周末',
    stage: '阶段二 · 基础过渡',
    stageRange: '第 11–20 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 270 词'
      },
      {
        k: '新词密度',
        v: '约 4.0%'
      },
      {
        k: '长难句',
        v: '2 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/011.jpg',
    coverCredit: 'Photo: Zack Gilbert / Pexels',
    body: [
      'My <span class="w-cet4" data-cn="典型的、平常的">typical</span> weekend used to look the same. I stayed at home and slept late. When friends asked me out, I would <span class="w-phrase" data-cn="拒绝（邀请、提议）">turn down</span> almost every invitation. The truth was that I was <span class="w-rev">nervous</span> about new things.',
      'One Thursday, my neighbor asked me to <span class="w-phrase" data-cn="报名参加">sign up for</span> a <span class="w-rev">community</span> activity: getting an old garden ready for spring. My first answer was no, as usual. Then she said, “Just say yes this once.” I <span class="w-rev">decided</span> to go.',
      'I arrived early on Saturday and felt <span class="w-cet4" data-cn="尴尬的、不自在的">awkward</span> at once, because I knew no one there. An older neighbor <span class="w-rev">offered</span> me tea, and we talked while we worked. Little by little I began to <span class="w-cet4" data-cn="放松、休息">relax</span>, and our <span class="w-cet4" data-cn="交谈、谈话">conversation</span> became easy.',
      'By noon we had cleared the stones and planted trees. I tried to <span class="w-phrase" data-cn="帮忙、搭把手">help out</span> and <span class="w-cet4" data-cn="意识到、认识到">realized</span> how fast the hours went. <span class="w-sentence">By the time we finished, the garden looked bright and new, and I could not remember why I had stayed at home.</span>',
      '<span class="w-sentence">What surprised me most was not the garden, but the way I felt at the end of the day.</span> I was <span class="w-synonym" data-cn="＝ pleased / happy 的替换词">glad</span> and a little <span class="w-rev">proud</span> of our work, and <span class="w-cet4" data-cn="好奇的">curious</span> about the people there. It turned out better than I <span class="w-rev">expected</span>.',
      '<span class="w-writing" data-cn="从那以后……（引出后续变化）">Ever since then</span>, I have learned to <span class="w-phrase" data-cn="对……说好、答应">say yes to</span> more things: a book club, a weekend hike, an <span class="w-cet4" data-cn="机会">opportunity</span> to help at a school. I still say no sometimes, but now I <span class="w-cet4" data-cn="犹豫、迟疑">hesitate</span> less, and I am <span class="w-cet4" data-cn="感激的、感谢的">grateful</span> for every yes.',
      '<span class="w-writing" data-cn="回头看……（引出回顾与感悟）">Looking back</span>, that one yes cost me a morning, but the <span class="w-rev">benefit</span> was clear. I never <span class="w-cet4" data-cn="后悔、遗憾">regretted</span> it. Before you say no, ask yourself what you might <span class="w-cet4" data-cn="发现、发觉">discover</span>.'
    ],
    translation: [
      '我平常的周末总是老样子：待在家里，睡到很晚。朋友约我出门，我几乎每次都会拒绝邀请。我说自己很忙，可真正的原因是，我害怕任何新鲜事。',
      '一个星期四，邻居让我报名参加一个社区活动：把一座老园子收拾好，准备迎接春天。我的第一反应是拒绝，像往常一样。然后她说：「这次就答应一次吧。」我决定去了。',
      '周六早上我到得很早，一下子就感到不自在，因为我谁都不认识。一位上了年纪的邻居给我倒了茶，我们一边干活一边聊天。慢慢地，我放松下来，聊起天来也自在了。',
      '中午时，我们已经清走了石块，种下了树苗。我尽力搭把手，也意识到时间过得有多快。等我们收工时，那座园子看上去又明亮又新鲜，我怎么也想不明白，自己为什么在家待了那么久。',
      '最让我惊讶的不是那座园子，而是一天结束时我自己的感受。我为我们的活儿感到高兴，甚至有点自豪，也对身边的人好奇起来。结果比我预想的还要好。',
      '从那以后，我学会了对更多的事说好：一个读书会、一次周末徒步、一个去小学帮忙的机会。我有时还是会说不，但现在我犹豫得少了，也对每一次「好」心怀感激。',
      '回头看，那一次「好」只花了一个上午，可它带来的好处清清楚楚。我从没后悔过。在说「不」之前，先问问自己，可能会发现什么。'
    ],
    vocabulary: [
      {
        w: 'typical',
        ph: '/ˈtɪpɪkl/',
        pos: 'adj.',
        cn: '典型的、平常的',
        col: 'a typical weekend — 一个平常的周末；be typical of sb. — 是某人的一贯作风',
        ex: 'This photo is a typical example of her style.'
      },
      {
        w: 'hesitate',
        ph: '/ˈhezɪteɪt/',
        pos: 'v.',
        cn: '犹豫、迟疑',
        col: 'hesitate to do sth. — 犹豫做某事；without hesitation — 毫不犹豫地',
        ex: 'She hesitated before she opened the door.'
      },
      {
        w: 'awkward',
        ph: '/ˈɔːkwəd/',
        pos: 'adj.',
        cn: '尴尬的、不自在的',
        col: 'feel awkward — 感到不自在；an awkward moment — 尴尬的时刻',
        ex: 'There was an awkward silence after his question.'
      },
      {
        w: 'conversation',
        ph: '/ˌkɒnvəˈseɪʃn/',
        pos: 'n.',
        cn: '交谈、谈话',
        col: 'have a conversation — 交谈；start a conversation — 打开话匣子',
        ex: 'We had a long conversation about our plans.'
      },
      {
        w: 'relax',
        ph: '/rɪˈlæks/',
        pos: 'v.',
        cn: '放松、休息',
        col: 'relax for a while — 放松一会儿；relax and enjoy — 放松下来享受',
        ex: 'I like to relax with a book on Sundays.'
      },
      {
        w: 'discover',
        ph: '/dɪˈskʌvə/',
        pos: 'v.',
        cn: '发现、发觉',
        col: 'discover that … — 发现……；discover a place — 发现一个地方',
        ex: 'You may discover a new hobby by accident.'
      },
      {
        w: 'opportunity',
        ph: '/ˌɒpəˈtjuːnəti/',
        pos: 'n.',
        cn: '机会',
        col: 'an opportunity to do sth. — 做某事的机会；take the opportunity — 抓住机会',
        ex: 'This trip is a good opportunity to practice speaking.'
      },
      {
        w: 'realize',
        ph: '/ˈrɪəlaɪz/',
        pos: 'v.',
        cn: '意识到、认识到',
        col: 'realize that … — 意识到……；realize one’s mistake — 意识到自己的错误',
        ex: 'I did not realize how late it was.'
      },
      {
        w: 'grateful',
        ph: '/ˈɡreɪtfl/',
        pos: 'adj.',
        cn: '感激的、感谢的',
        col: 'be grateful to sb. for sth. — 因某事感激某人；feel grateful — 心怀感激',
        ex: 'I am grateful to my neighbor for her help.'
      },
      {
        w: 'regret',
        ph: '/rɪˈɡret/',
        pos: 'v./n.',
        cn: '后悔、遗憾',
        col: 'regret doing sth. — 后悔做过某事（后接动名词）；have no regrets — 没有遗憾',
        ex: 'She regretted turning down the invitation.'
      },
      {
        w: 'curious',
        ph: '/ˈkjʊəriəs/',
        pos: 'adj.',
        cn: '好奇的',
        col: 'be curious about — 对……感到好奇；be curious to know — 想知道',
        ex: 'Children are often curious about everything.'
      }
    ],
    phrases: [
      {
        en: 'say yes to',
        cn: '对……说“好”、答应',
        ex: 'I want to say yes to more things this year.'
      },
      {
        en: 'turn down',
        cn: '拒绝（邀请、提议）',
        ex: 'He turned down the invitation because he was busy.'
      },
      {
        en: 'sign up for',
        cn: '报名参加',
        ex: 'She signed up for a weekend class.'
      },
      {
        en: 'help out',
        cn: '帮忙、搭把手',
        ex: 'Can you help out in the kitchen?'
      },
      {
        en: 'get along with',
        cn: '与……相处融洽',
        ex: 'I get along with my neighbors.'
      },
      {
        en: 'look forward to',
        cn: '期待、盼望（to 是介词，后接名词或动名词）',
        ex: 'I am looking forward to the weekend.'
      },
      {
        en: 'by the end of',
        cn: '到……结束的时候',
        ex: 'By the end of the day, we were all happy.'
      },
      {
        en: 'on one’s own',
        cn: '独自、靠自己',
        ex: 'She finished the work on her own.'
      },
      {
        en: 'as usual',
        cn: '像往常一样',
        ex: 'As usual, he arrived first.'
      },
      {
        en: 'make friends with',
        cn: '与……交朋友',
        ex: 'I made friends with two neighbors that day.'
      }
    ],
    writings: [
      {
        expr: 'Ever since then, ...',
        cn: '从那以后……',
        meaning: '用过去发生的某件事作为起点，引出此后持续到现在的变化，后面常接现在完成时。',
        context: '经历类记叙文的转折段或结尾段：先写那件事，再用它带出之后的改变。',
        alts: [
          {
            t: 'From then on, ...',
            n: '更口语，后面可接一般过去时'
          },
          {
            t: 'Since that day, ...',
            n: '强调从某一天开始'
          },
          {
            t: 'After that, ...',
            n: '最简单，时态不限'
          }
        ],
        register: '中性，记叙文里最常用的过渡句式。',
        example: 'Ever since then, I have said yes to more things.'
      },
      {
        expr: 'Looking back, ...',
        cn: '回头看……',
        meaning: '把视角拉回现在，对过去的经历做一句总结或感悟。',
        context: '全文最后一段的开头，用来点明这段经历带来的收获。',
        alts: [
          {
            t: 'Looking back on it, ...',
            n: '更完整'
          },
          {
            t: 'When I look back, ...',
            n: '完整从句形式'
          },
          {
            t: 'In hindsight, ...',
            n: '更书面，以后阶段常用'
          }
        ],
        register: '中性偏书面，结尾收束最合适。',
        example: 'Looking back, saying yes was easier than I thought.'
      }
    ],
    sentences: [
      {
        text: 'By the time we finished, the garden looked bright and new, and I could not remember why I had stayed at home.',
        points: [
          '<b>主干</b>：the garden looked bright and new 与 I could not remember … 由 and 连接成两个并列分句；句首的 By the time we finished 是时间状语从句。',
          '<b>By the time + 从句</b>：意思是「到……的时候为止」，主句通常写「到那时已经发生的事」，是记叙文交代时间节点的常用开头。',
          '<b>why I had stayed at home</b>：why 引导宾语从句，用过去完成时（had stayed）表示「在那之前一直待在家」，时间层次比 could not remember 更早一层。',
          '<b>为什么值得学</b>：一句话里叠了时间从句、并列句、宾语从句三层结构，是四级阅读里最常见的长句模型，也是记叙文「前后对比」的好句式。',
          '<b>常见变体</b>：By the time 从句也可以放到句尾 —— I could not remember why I had stayed at home by the time we finished.'
        ]
      },
      {
        text: 'What surprised me most was not the garden, but the way I felt at the end of the day.',
        points: [
          '<b>主干</b>：What surprised me most was the way I felt …（主语 + 系动词 + 表语）。',
          '<b>What 引导主语从句</b>：What 相当于 the thing that，整个从句作主语，谓语用单数 was。写作里可以照抄这个开头：What I learned was that …。',
          '<b>not … but …</b>：不是……而是……，用来否定前者、突出后者，这里连接两个并列表语：the garden 与 the way I felt。',
          '<b>the way I felt</b>：the way 后面跟一个省略了引导词的定语从句，表示「我感受的方式」，比 how I felt 更像地道英文。',
          '<b>为什么值得学</b>：这是记叙文的「升华句」模板——把故事的意义从「事情」转到「人的变化」，放在结尾段前面，立意立刻不一样。'
        ]
      }
    ],
    questions: [
      {
        en: 'What did the writer usually do at weekends before this experience?',
        cn: '在这次经历之前，作者周末通常做什么？',
        ans: 'He stayed at home, slept late, and turned down almost every invitation from friends.',
        ansCn: '他待在家里，睡到很晚，几乎每次都会拒绝朋友的邀请。'
      },
      {
        en: 'What did the neighbor ask the writer to do that Thursday?',
        cn: '那个星期四，邻居请作者去做什么？',
        ans: 'She asked him to sign up for a community activity: getting an old garden ready for spring.',
        ansCn: '她请他报名参加一个社区活动：把一座老园子收拾好，迎接春天。'
      },
      {
        en: 'What can we infer about the writer’s weekends now?',
        cn: '从文中可以推出作者现在的周末是什么样的？',
        ans: 'They are much fuller than before, because he now says yes to things like a book club, a weekend hike and helping at a school.',
        ansCn: '比从前丰富得多，因为他现在会答应读书会、周末徒步、去小学帮忙这样的事。'
      },
      {
        en: 'What is the function of the first paragraph in the story?',
        cn: '第一段在故事里起什么作用？',
        ans: 'It describes the writer’s old habit of always saying no, so that the change after that weekend stands out.',
        ansCn: '它写出作者过去总说「不」的老习惯，好让那个周末之后的变化显得格外明显。'
      },
      {
        en: 'In the last paragraph, what does “that one yes” refer to?',
        cn: '最后一段中的「那一次『好』」指的是什么？',
        ans: 'It refers to the writer’s decision to say yes to the neighbor and go to the community activity.',
        ansCn: '指的是作者答应邻居、去参加社区活动的那个决定。'
      }
    ],
    writingTask: {
      en: 'Write 60–80 words about a time you said yes to something new.',
      hints: [
        'I used to ...',
        'One day, ... asked me to ...',
        'Ever since then, ...',
        'Looking back, ...'
      ],
      hintCn: '用 4–6 句话写一次「答应新事物」的经历：先写过去的老习惯，再写那次邀请和过程中的感受，最后写现在的变化。',
      req: '至少使用 1 个本篇学过的词或搭配（hesitate / opportunity / turn down / say yes to / ever since then）。'
    },
    speakingTask: {
      en: 'Would you like to say yes more often? Answer the question in 45 seconds and give one reason.',
      points: [
        'Your answer',
        'One reason',
        'One small example'
      ],
      pointCn: '先明确回答会或不会，再给一个理由，最后举一个自己的小例子。',
      skeleton: 'In my opinion, I would like to say yes more often. That is because ... For example, ...'
    },
    focus: [
      '<b>新授核心词 11 个</b>：<span class=\'en\'>typical, hesitate, awkward, conversation, relax, discover, opportunity, realize, grateful, regret, curious</span> —— 其中 <b>hesitate / opportunity / realize</b> 是四级写作高频词；记住 <span class=\'en\'>hesitate to do sth.</span>（犹豫做某事）、<span class=\'en\'>an opportunity to do sth.</span>（做某事的机会），<span class=\'en\'>regret</span> 表示「后悔做过」时后面接动名词。',
      '<b>本篇复现的旧词</b>：第 1 篇的 <span class=\'en\'>benefit</span>（the benefit was clear）、第 2 篇的 <span class=\'en\'>nervous</span>（nervous about new things）、第 5 篇的 <span class=\'en\'>decide / expect</span>（decided to go, better than I expected）、第 9 篇的 <span class=\'en\'>community / offer</span>（a community activity, offered me tea）、第 10 篇的 <span class=\'en\'>proud</span>（proud of our work）—— 都是换了新语境再认一次，看到灰点先自己说意思。',
      '<b>叙事骨架</b>：老习惯（总说不）→ 邀请与犹豫（一句话推动）→ 体验与转变（从尴尬到放松）→ 现在的变化 → 结尾点题。写经历类短文照这个顺序排材料，转折点只需要一个。',
      '<b>两个写作表达</b>：<span class=\'en\'>Ever since then, …</span> 放在「从那以后」的段首，后面常跟现在完成时；<span class=\'en\'>Looking back, …</span> 放在结尾段开头，引出回顾与感悟。一前一后，正好撑起一篇经历类短文。',
      '<b>题型提醒</b>：段落作用题（第 4 题）要答「写了什么 + 为什么这样写」两层；指代题（第 5 题）把指代短语还原成具体的人、事或决定，答案一般就在本段或上一段。'
    ],
    standard: {
      time: '约 30 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 11 个核心词遮住中文说出 ≥ 8 · 完成 60–80 词写作与 45 秒口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 11 个核心词中的 8 个（hesitate、opportunity、realize、regret …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '10 个高频搭配掌握 8 个，能各造一句（say yes to、turn down、sign up for …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 By the time we finished, … 的时间状语从句与 not … but … 结构，并各仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；第 3 题要能说出推断依据，第 4、5 题要能答出段落作用与指代对象',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 60–80 词，至少用上 Ever since then, … 或 Looking back, …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '45 秒说清「要不要多说好」的立场，并给出一个理由和一个小例子',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 7 处灰点旧词，说出其中 5 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 12,
    slug: '012-my-first-part-time-job',
    title: 'My First Part-Time Job',
    titleCn: '我的第一份兼职',
    stage: '阶段二 · 基础过渡',
    stageRange: '第 11–20 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 275 词'
      },
      {
        k: '新词密度',
        v: '约 4.0%'
      },
      {
        k: '长难句',
        v: '2 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/012.jpg',
    coverCredit: 'Photo: Thới Nam Cao / Pexels',
    body: [
      'Last summer I got my first part-time job at a coffee shop near my school. I wanted to earn my own money. Then the manager left me at the counter, and I felt <span class="w-rev">nervous</span> at once.',
      'My job was to <span class="w-phrase" data-cn="记下客人点的餐和饮料">take orders</span>. <span class="w-cet4" data-cn="顾客">Customers</span> came in waves during the morning <span class="w-phrase" data-cn="（上下班）高峰时段">rush hour</span>. One morning I <span class="w-phrase" data-cn="犯错">made a mistake</span> and put the wrong names on three cups. A man came back <span class="w-synonym" data-cn="＝ angry 的替换词">annoyed</span> and made a loud <span class="w-cet4" data-cn="抱怨、投诉">complaint</span>.',
      'The manager walked over, listened to the man, and gave him a <span class="w-cet4" data-cn="折扣">discount</span>. Then she turned to me and said, “It happens. Apologize first, and then fix it.” I <span class="w-cet4" data-cn="道歉">apologized</span> to the man, and his face changed.',
      'After that I <span class="w-cet4" data-cn="记住、熟记">memorized</span> the whole menu. I <span class="w-phrase" data-cn="对……负责">took responsibility for</span> every cup and <span class="w-cet4" data-cn="重复、复述">repeated</span> the <span class="w-rev">order</span> back to each customer. <span class="w-writing" data-cn="说实话……">To be honest</span>, the step felt slow, but it saved me from another mistake.',
      'One Saturday the shop was busy, and I <span class="w-rev">wasted</span> two minutes looking for the right <span class="w-cet4" data-cn="托盘">tray</span>. The manager stopped me: “Do the small things well first.” <span class="w-sentence">When I stopped trying to do everything at once and did each small thing carefully, the busy hours became much easier.</span>',
      'Two months later the manager put me on the evening <span class="w-cet4" data-cn="轮班、班次">shift</span>. I learned to <span class="w-cet4" data-cn="处理、应付">handle</span> the busy hours and <span class="w-cet4" data-cn="推荐">recommend</span> drinks. I stayed <span class="w-rev">patient</span> with the slow ones and felt <span class="w-rev">proud</span> of my work. My <span class="w-cet4" data-cn="态度">attitude</span> had clearly changed.',
      '<span class="w-writing" data-cn="即便如此……">Even so</span>, the best lesson was not about coffee. <span class="w-sentence">I still make mistakes now and then, but I no longer worry about them the way I did on that first morning.</span> The job was small, but the <span class="w-rev">effort</span> I put into it changed my work.'
    ],
    translation: [
      '去年夏天，我在学校附近的一家咖啡店找到了第一份兼职。我想自己挣钱。然后店长把我留在柜台前，我一下子就紧张起来。',
      '我的工作是记下客人点的东西。早上高峰时段，顾客一波接一波地来。一天早上我犯了错，把三只杯子上的名字都写错了。一个男人气冲冲地回来，大声抱怨。',
      '店长走过去，听那位顾客说完，给了他一点折扣。然后她转向我说：“这很正常。先道歉，再去解决。”我向那位顾客道了歉，他的脸色缓和了下来。',
      '从那以后，我把整份菜单都背了下来。每一杯我都认真负责，还会把客人点的东西复述一遍。说实话，这一步做起来很慢，但它让我没有再犯错。',
      '有一个周六店里很忙，我为了找对托盘浪费了两分钟。店长叫住我：“先把小事做好。”当我不再想着一次做完所有事，而是认真做好每一件小事的时候，忙碌的时段就变得容易多了。',
      '两个月后，店长把我排进了晚班。我学会了应付忙碌的时段，也会给客人推荐饮品。对动作慢的顾客，我变得有耐心，也为自己做的工作感到骄傲。我的态度明显变了。',
      '即便如此，这两个月里最深的教训并不在咖啡上。我偶尔还是会犯错，但再也不会像第一天早上那样为它们担心了。这份工作很小，但我为它付出的努力改变了我做事的方式。'
    ],
    vocabulary: [
      {
        w: 'customer',
        ph: '/ˈkʌstəmə(r)/',
        pos: 'n.',
        cn: '顾客',
        col: 'a regular customer — 老顾客；customer service — 顾客服务',
        ex: 'The customer asked for a large coffee.'
      },
      {
        w: 'complaint',
        ph: '/kəmˈpleɪnt/',
        pos: 'n.',
        cn: '抱怨、投诉',
        col: 'make a complaint — 提出投诉；listen to a complaint — 听取投诉',
        ex: 'The manager listened to the complaint and said sorry.'
      },
      {
        w: 'apologize',
        ph: '/əˈpɒlədʒaɪz/',
        pos: 'vi.',
        cn: '道歉',
        col: 'apologize to sb. — 向某人道歉；apologize for sth. — 为某事道歉',
        ex: 'I apologized to the customer for the wrong drink.'
      },
      {
        w: 'memorize',
        ph: '/ˈmeməraɪz/',
        pos: 'vt.',
        cn: '记住、熟记',
        col: 'memorize the menu — 熟记菜单；memorize a poem — 背下一首诗',
        ex: 'She memorized the whole menu in one evening.'
      },
      {
        w: 'recommend',
        ph: '/ˌrekəˈmend/',
        pos: 'vt.',
        cn: '推荐',
        col: 'recommend sth. to sb. — 向某人推荐某物；recommend doing sth. — 建议做某事',
        ex: 'He recommended the tea to the new customer.'
      },
      {
        w: 'handle',
        ph: '/ˈhændl/',
        pos: 'vt.',
        cn: '处理、应付',
        col: 'handle a problem — 处理问题；handle pressure — 应对压力',
        ex: 'She handled the busy hour without help.'
      },
      {
        w: 'attitude',
        ph: '/ˈætɪtjuːd/',
        pos: 'n.',
        cn: '态度',
        col: 'a good attitude — 良好的态度；one’s attitude to sth. — 某人对某事的态度',
        ex: 'Your attitude to small things matters.'
      },
      {
        w: 'repeat',
        ph: '/rɪˈpiːt/',
        pos: 'v.',
        cn: '重复、复述',
        col: 'repeat an order — 复述点单；repeat after sb. — 跟某人朗读',
        ex: 'Please repeat the question after me.'
      },
      {
        w: 'discount',
        ph: '/ˈdɪskaʊnt/',
        pos: 'n.',
        cn: '折扣',
        col: 'give sb. a discount — 给某人打折；at a discount — 打折出售',
        ex: 'The shop gave him a discount on the next drink.'
      },
      {
        w: 'shift',
        ph: '/ʃɪft/',
        pos: 'n.',
        cn: '轮班、班次',
        col: 'the evening shift — 晚班；work a shift — 上一个班',
        ex: 'I work the evening shift on Fridays.'
      },
      {
        w: 'tray',
        ph: '/treɪ/',
        pos: 'n.',
        cn: '托盘',
        col: 'carry a tray — 端托盘；a coffee tray — 咖啡托盘',
        ex: 'He carried three trays at the same time.'
      }
    ],
    phrases: [
      {
        en: 'take orders',
        cn: '记下客人点的餐和饮料',
        ex: 'It is my job to take orders at the counter.'
      },
      {
        en: 'rush hour',
        cn: '（上下班）高峰时段',
        ex: 'The shop is always busy during rush hour.'
      },
      {
        en: 'make a mistake',
        cn: '犯错',
        ex: 'Everyone makes a mistake sometimes.'
      },
      {
        en: 'get … wrong',
        cn: '把……弄错',
        ex: 'I got the order wrong and said sorry.'
      },
      {
        en: 'take responsibility for',
        cn: '对……负责',
        ex: 'A good worker takes responsibility for his own work.'
      },
      {
        en: 'clean up',
        cn: '打扫干净、收拾',
        ex: 'Please clean up the table after the meeting.'
      },
      {
        en: 'keep doing sth.',
        cn: '一直做某事',
        ex: 'Keep trying and you will improve.'
      },
      {
        en: 'learn from one’s mistakes',
        cn: '从错误中学习',
        ex: 'We learn from our mistakes.'
      },
      {
        en: 'pay attention to',
        cn: '注意、专心于',
        ex: 'Pay attention to the small things.'
      },
      {
        en: 'be busy with',
        cn: '忙于',
        ex: 'She is busy with her homework.'
      },
      {
        en: 'now and then',
        cn: '偶尔、有时',
        ex: 'Now and then we eat out.'
      }
    ],
    writings: [
      {
        expr: 'To be honest, ...',
        cn: '说实话……',
        meaning: '引出真心话，承认某个不太光彩的事实或真实感受，让叙述更可信。',
        context: '记叙文或感想段的段中：先写事实，再用它带出自己真实的想法。',
        alts: [
          {
            t: 'Honestly speaking, ...',
            n: '更书面'
          },
          {
            t: 'To tell the truth, ...',
            n: '语气更坦白'
          },
          {
            t: 'Frankly, ...',
            n: '更正式，议论文常用'
          }
        ],
        register: '中性偏口语，写作里常放段首。',
        example: 'To be honest, I was afraid of the busy hours at first.'
      },
      {
        expr: 'Even so, ...',
        cn: '即便如此……',
        meaning: '先承认前文所说的困难或不足，仍然引出相反的结论，用作转折收束。',
        context: '结尾段开头：前一句写困难或遗憾，用它引出仍然成立的收获。',
        alts: [
          {
            t: 'Even then, ...',
            n: '强调“即使到了那一步”'
          },
          {
            t: 'Still, ...',
            n: '更简短'
          },
          {
            t: 'Nevertheless, ...',
            n: '书面、正式'
          }
        ],
        register: '中性偏书面，适合放在结尾。',
        example: 'The job was tiring. Even so, I learned a lot from it.'
      }
    ],
    sentences: [
      {
        text: 'When I stopped trying to do everything at once and did each small thing carefully, the busy hours became much easier.',
        points: [
          '<b>主干</b>：the busy hours became much easier（主语 + 系动词 + 表语），句首整块是 When 引导的时间状语从句。',
          '<b>从句里的并列谓语</b>：stopped trying to do everything at once 与 did each small thing carefully 由 and 连接，主语都是 I，两个动作一先一后。',
          '<b>try to do</b>：trying 后面接 to do 作宾语；at once 在这里是“一下子、同时”，不是“立刻”的意思。',
          '<b>为什么值得学</b>：一句话里同时有时间从句、并列谓语和系表结构，是四级阅读里最常见的长句骨架，也正好讲出本文的转折点。',
          '<b>常见变体</b>：从句可以放到句末——The busy hours became much easier when I did one small thing at a time.'
        ]
      },
      {
        text: 'I still make mistakes now and then, but I no longer worry about them the way I did on that first morning.',
        points: [
          '<b>主干</b>：两个并列分句 I still make mistakes 与 I no longer worry about them，由 but 连接，形成前后对照。',
          '<b>no longer</b>：表示“不再”，放在实义动词之前（I no longer worry），如果句子里有 be 动词则放在 be 之后。',
          '<b>the way I did ...</b>：the way 后面跟一个省略了引导词的定语从句，表示“像我那天早上那样”，比 as I did 更口语、更自然。',
          '<b>指代</b>：them 指代前面的 mistakes，读完回头还原指代对象，是阅读题的常考点（本篇第 5 题就考这里）。',
          '<b>常见变体</b>：worry about them the way I used to，把 did 换成 used to，语气更强调今昔对比。'
        ]
      }
    ],
    questions: [
      {
        en: 'What was the writer’s job at the coffee shop?',
        cn: '作者在咖啡店的工作是什么？',
        ans: 'His job was to take orders at the front counter and make coffee.',
        ansCn: '他的工作是在前台记下客人点的东西并做咖啡。'
      },
      {
        en: 'What did the manager do after the customer’s complaint?',
        cn: '顾客投诉后，店长是怎么做的？',
        ans: 'She gave the customer a discount and told the writer to apologize first and then fix it.',
        ansCn: '她给了那位顾客一点折扣，并告诉作者先道歉，再去解决问题。'
      },
      {
        en: 'What can we infer about the writer two months later?',
        cn: '从文中可以推出作者两个月后是什么样子的？',
        ans: 'He had become a skilled worker: he handled busy hours, recommended drinks and worked the evening shift.',
        ansCn: '他已经是一名熟练的店员了：能应付忙碌的时段、给客人推荐饮品，还上了晚班。'
      },
      {
        en: 'What does the paragraph about the busy Saturday do in the story?',
        cn: '写那个忙碌周六的段落在故事里起什么作用？',
        ans: 'It shows the turning point: the manager’s words taught the writer to do the small things well first.',
        ansCn: '它写出故事的转折点：店长那句话让作者学会先把小事做好。'
      },
      {
        en: 'In the last paragraph, what does “them” refer to?',
        cn: '最后一段中的“them”指什么？',
        ans: 'It refers to the mistakes the writer still makes now and then.',
        ansCn: '指作者偶尔还会犯的那些错误。'
      }
    ],
    writingTask: {
      en: 'Write 60–80 words about a small job you did or a small thing you learned to do well.',
      hints: [
        'At first, I thought ... would be easy.',
        'One morning, I ...',
        'Then someone told me, “...”',
        'Even so, ...'
      ],
      hintCn: '用 4 句左右写一次“觉得容易 → 做错了 → 被一句话点醒 → 后来做好了”的经历，最后一句写收获。',
      req: '至少使用 1 个本篇学过的词或搭配（apologize / memorize / repeat / take orders / make a mistake / take responsibility for）。'
    },
    speakingTask: {
      en: 'Should students take a part-time job? Answer the question in 45 seconds and give one reason.',
      points: [
        'Your answer',
        'One reason',
        'One small example'
      ],
      pointCn: '先明确回答应该或不应该，再给一个理由，最后举一个自己的小例子。',
      skeleton: 'In my opinion, students should ... That is because ... For example, ...'
    },
    focus: [
      '<b>新授核心词 11 个</b>：<span class=\'en\'>customer, complaint, apologize, memorize, recommend, handle, attitude, repeat, discount, shift, tray</span> —— 其中 <b>apologize / recommend / handle</b> 是高频动词：apologize to sb.（向某人道歉）、recommend sth. to sb.（向某人推荐）、handle 后面直接跟事情（handle the busy hour）。',
      '<b>本篇复现的旧词</b>：第 2 篇的 <span class=\'en\'>nervous</span>（felt nervous at once）、第 3 篇的 <span class=\'en\'>patient</span>（patient with the slow ones）、第 6 篇的 <span class=\'en\'>waste</span>（wasted two minutes）、第 7 篇的 <span class=\'en\'>order</span>（repeated the order back）、第 10 篇的 <span class=\'en\'>effort / proud</span>（the effort I put into it / proud of my work）—— 都是换到打工语境再认一次，看到灰点先自己说意思。',
      '<b>叙事骨架</b>：上手（觉得容易）→ 出错（记错订单、被投诉）→ 一句话点醒（Do the small things well first.）→ 改正（熟记菜单、复述点单）→ 收获。经历类短文照这个顺序排材料，转折点只需要一个。',
      '<b>两个写作表达</b>：<span class=\'en\'>To be honest, …</span> 放在段中引出真心话；<span class=\'en\'>Even so, …</span> 放在结尾段开头，承认不足之后仍然得出收获。一中一尾，正好撑起一篇经历类短文。',
      '<b>题型提醒</b>：指代题（第 5 题）把 them 还原成上一句的具体名词；段落作用题（第 4 题）要答“写了什么 + 为什么这样写”两层，只答“写了一个周六”不给分。'
    ],
    standard: {
      time: '约 30 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 11 个核心词遮住中文说出 ≥ 8 · 11 个搭配掌握 8 个 · 完成 60–80 词写作与 45 秒口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 11 个核心词中的 8 个（customer、complaint、apologize、memorize、handle、shift …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '11 个高频搭配掌握 8 个，能各造一句（take orders、make a mistake、take responsibility for …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 2 个长难句的结构（When 时间状语从句 + 并列谓语；but 连接的并列分句 + the way 比较），并各仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；第 3 题要能说出推断依据，第 5 题要能指出 them 的指代对象',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按第 07 节写 60–80 词，至少用上 To be honest, … 或 Even so, …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '45 秒说清“学生该不该做兼职”的立场，并给出一个理由和一个小例子',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 6 处灰点旧词，说出其中 4 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 13,
    slug: '013-a-message-i-almost-sent',
    title: 'A Message I Almost Sent',
    titleCn: '差点发出去的那条消息',
    stage: '阶段二 · 基础过渡',
    stageRange: '第 11–20 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 280 词'
      },
      {
        k: '新词密度',
        v: '约 3.9%'
      },
      {
        k: '长难句',
        v: '2 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/013.jpg',
    coverCredit: 'Photo: RDNE Stock project / Pexels',
    body: [
      'My best friend and I message each other every day. One Friday I asked if we were still going to the library on Saturday. He read my message but did not <span class="w-cet4" data-cn="回复、答复">reply</span>. It was the start of a small <span class="w-cet4" data-cn="误会、误解">misunderstanding</span>.',
      'That evening I saw a photo of my classmates at a party without me. I felt <span class="w-phrase" data-cn="觉得被冷落">left out</span> and <span class="w-cet4" data-cn="难过的、不高兴的">upset</span>. I <span class="w-cet4" data-cn="假定、以为">assumed</span> the worst: he did not want me there.',
      'I opened the chat and wrote a long, angry message: “If you want to <span class="w-cet4" data-cn="忽视、不理睬">ignore</span> me, just say so. I am tired of being the last to know.” I read it twice and was about to press send.',
      'Then I remembered the day I failed an exam and he sat beside me. <span class="w-sentence">I had written a message that I would regret sending, but something stopped me before I pressed send.</span> <span class="w-writing" data-cn="转念一想……">On second thoughts</span>, I put the phone face down and went to bed.',
      'The next morning he waited at the library with two coffees. We finally talked <span class="w-phrase" data-cn="当面、亲自">in person</span>. <span class="w-writing" data-cn="令我惊讶的是……">To my surprise</span>, his <span class="w-cet4" data-cn="解释、说明">explanation</span> was <span class="w-synonym" data-cn="＝ short 的替换词">brief</span> but <span class="w-cet4" data-cn="真诚的">sincere</span>: the party was for my birthday, and it was a secret. His phone had died before he could write back.',
      'At first it felt <span class="w-rev">awkward</span>, but we sat down and had an <span class="w-rev">honest</span> <span class="w-rev">conversation</span>. I wanted to <span class="w-phrase" data-cn="向某人道歉">say sorry to</span> him, and he wanted to <span class="w-rev">apologize</span> to me. In the end nobody <span class="w-cet4" data-cn="责怪">blamed</span> anyone, and the <span class="w-cet4" data-cn="争论、争吵">argument</span> never started.',
      'I <span class="w-cet4" data-cn="删除">deleted</span> the message that evening. <span class="w-sentence">I knew at that moment that the angry words on a screen had almost cost me a friendship.</span> Now, before I send anything, I wait until I am <span class="w-cet4" data-cn="冷静的">calm</span> and <span class="w-phrase" data-cn="（做某事前）三思">think twice</span>. I would have <span class="w-rev">regretted</span> those words.'
    ],
    translation: [
      '我和最好的朋友每天都互发消息。一个星期五，我问他周六是否还去图书馆。他看了消息却没有回复。这是一场小小误会的开始。',
      '那天晚上，我看到一张照片：同学们在参加聚会，却没有我。我觉得被冷落，心里很难受。我认定最坏的可能：他是不想让我去。',
      '我打开聊天窗口，写了一段很长、很生气的话：“如果你不想理我，就直说。我讨厌总是最后一个知道。”我读了两遍，几乎就要按下发送键。',
      '这时我想起考试失利的那天，他什么也没说，只是陪在我身边。我已经写好了一段发出去就会后悔的话，但有什么东西拦住了我，没让我按下发送。转念一想，我把手机屏幕朝下放好，就去睡了。',
      '第二天一早，他拿着两杯咖啡在图书馆等我。我们终于当面谈了。令我惊讶的是，他的解释很短，却很真诚：那场聚会是为我准备的生日惊喜，而且要保密。他的手机没电了，没能回消息。',
      '起初有点尴尬，但我们坐下来，坦诚地聊了一次。我想向他道歉，他也想向我道歉。最后谁也没有责怪谁，我们设想中的那场争吵根本没有发生。',
      '那天晚上，我把那条消息删掉了。那一刻我明白，屏幕上的几句话险些让我失去一段友谊。现在，发送任何消息之前，我都会等自己冷静下来，再三思。那些话如果发了出去，我会后悔很多年。'
    ],
    vocabulary: [
      {
        w: 'reply',
        ph: '/rɪˈplaɪ/',
        pos: 'v./n.',
        cn: '回复、答复',
        col: 'reply to sb. — 回复某人；a quick reply — 很快的回复',
        ex: 'He read the message but did not reply.'
      },
      {
        w: 'misunderstanding',
        ph: '/ˌmɪsʌndəˈstændɪŋ/',
        pos: 'n.',
        cn: '误会、误解',
        col: 'a small misunderstanding — 一场小误会；clear up a misunderstanding — 消除误会',
        ex: 'The misunderstanding started with one short message.'
      },
      {
        w: 'upset',
        ph: '/ʌpˈset/',
        pos: 'adj.',
        cn: '难过的、不高兴的',
        col: 'be upset about sth. — 为某事难过；get upset — 变得不高兴',
        ex: 'She was upset about the bad news.'
      },
      {
        w: 'assume',
        ph: '/əˈsjuːm/',
        pos: 'vt.',
        cn: '假定、以为',
        col: 'assume that … — 以为……；assume the worst — 往最坏处想',
        ex: 'Do not assume that he is angry.'
      },
      {
        w: 'ignore',
        ph: '/ɪɡˈnɔː(r)/',
        pos: 'vt.',
        cn: '忽视、不理睬',
        col: 'ignore a message — 不理睬一条消息；ignore sb.’s advice — 无视某人的建议',
        ex: 'He ignored the question and walked away.'
      },
      {
        w: 'explanation',
        ph: '/ˌekspləˈneɪʃn/',
        pos: 'n.',
        cn: '解释、说明',
        col: 'give an explanation — 作出解释；a simple explanation — 一个简单的说明',
        ex: 'His explanation was short but clear.'
      },
      {
        w: 'sincere',
        ph: '/sɪnˈsɪə(r)/',
        pos: 'adj.',
        cn: '真诚的',
        col: 'a sincere apology — 真诚的道歉；be sincere about sth. — 对某事真心实意',
        ex: 'She gave me a sincere answer.'
      },
      {
        w: 'blame',
        ph: '/bleɪm/',
        pos: 'vt.',
        cn: '责怪',
        col: 'blame sb. for sth. — 为某事责怪某人；nobody to blame — 怪不了谁',
        ex: 'Do not blame others for your own mistake.'
      },
      {
        w: 'argument',
        ph: '/ˈɑːɡjumənt/',
        pos: 'n.',
        cn: '争论、争吵',
        col: 'have an argument — 吵了一架；start an argument — 挑起争论',
        ex: 'They had an argument about money.'
      },
      {
        w: 'delete',
        ph: '/dɪˈliːt/',
        pos: 'vt.',
        cn: '删除',
        col: 'delete a message — 删除一条消息；delete files — 删除文件',
        ex: 'I deleted the message before anyone saw it.'
      },
      {
        w: 'calm',
        ph: '/kɑːm/',
        pos: 'adj./v.',
        cn: '冷静的；使冷静',
        col: 'stay calm — 保持冷静；calm down — 冷静下来',
        ex: 'Keep calm and think before you speak.'
      }
    ],
    phrases: [
      {
        en: 'feel left out',
        cn: '觉得被冷落',
        ex: 'He felt left out when his friends went without him.'
      },
      {
        en: 'in person',
        cn: '当面、亲自',
        ex: 'It is better to talk in person.'
      },
      {
        en: 'say sorry to',
        cn: '向某人道歉',
        ex: 'She said sorry to her friend the next day.'
      },
      {
        en: 'think twice',
        cn: '（做某事前）三思、再想一想',
        ex: 'Think twice before you send an angry message.'
      },
      {
        en: 'keep in touch',
        cn: '保持联系',
        ex: 'We keep in touch by message every day.'
      },
      {
        en: 'get in touch with',
        cn: '与……取得联系',
        ex: 'I got in touch with my old teacher last week.'
      },
      {
        en: 'write back',
        cn: '回信、回复',
        ex: 'He wrote back within an hour.'
      },
      {
        en: 'press send',
        cn: '按下发送键',
        ex: 'She pressed send before she thought twice.'
      },
      {
        en: 'again and again',
        cn: '一再地、反复地',
        ex: 'He read the letter again and again.'
      },
      {
        en: 'be about to do sth.',
        cn: '刚要做某事',
        ex: 'I was about to leave when the phone rang.'
      },
      {
        en: 'calm down',
        cn: '冷静下来',
        ex: 'Take a minute and calm down first.'
      }
    ],
    writings: [
      {
        expr: 'On second thoughts, ...',
        cn: '转念一想……',
        meaning: '写到一半改变主意，用它把前一个念头收住，引出新的决定。',
        context: '记叙文里“差点做某事”之后：先写原来的冲动，再用它转折成新的选择。',
        alts: [
          {
            t: 'On second thought, ...',
            n: '单数形式，美式口语更常见'
          },
          {
            t: 'Then again, ...',
            n: '语气更随意'
          },
          {
            t: 'After a second thought, ...',
            n: '更完整的书面形式'
          }
        ],
        register: '中性偏口语，写作里放在转折处。',
        example: 'I was about to send the message. On second thoughts, I put the phone down.'
      },
      {
        expr: 'To my surprise, ...',
        cn: '令我惊讶的是……',
        meaning: '引出与预期相反的事实，把“没想到”的感觉写出来。',
        context: '记叙文的关键信息之前：前面先写自己的猜测，再用它引出真相。',
        alts: [
          {
            t: 'What surprised me was ...',
            n: '后面接句子'
          },
          {
            t: 'Surprisingly, ...',
            n: '更简短、更书面'
          },
          {
            t: 'To my amazement, ...',
            n: '惊讶程度更强'
          }
        ],
        register: '中性，写作和口语里都很自然。',
        example: 'To my surprise, he was waiting at the gate with two coffees.'
      }
    ],
    sentences: [
      {
        text: 'I had written a message that I would regret sending, but something stopped me before I pressed send.',
        points: [
          '<b>主干</b>：两个并列分句 I had written a message 与 something stopped me，由 but 连接，前半写“写好了”，后半写“没发出去”。',
          '<b>that I would regret sending</b>：定语从句修饰 a message；regret 后面接动名词 sending，表示“后悔发出（这条消息）”。',
          '<b>had written</b>：过去完成时，表示“在那个晚上想起来之前就已经写好”，比 wrote 多一层更早的时间。',
          '<b>before I pressed send</b>：时间状语从句，交代“没发出去”的关键时机，整句正好是全文的转折点。',
          '<b>常见变体</b>：a message I would regret（省略 that 从句的开头）；press send 也常说 hit send。'
        ]
      },
      {
        text: 'I knew at that moment that the angry words on a screen had almost cost me a friendship.',
        points: [
          '<b>主干</b>：I knew + that 宾语从句；at that moment 是插入的时间状语，强调“就在那一刻”。',
          '<b>从句主干</b>：the angry words had almost cost me a friendship（主语 + 谓语 + 双宾语），cost 的过去式、过去分词与原形同形。',
          '<b>had cost</b>：过去完成时，表示“在我意识到之前，差一点就已经失去”；almost 表示“险些、差一点”。',
          '<b>为什么值得学</b>：cost sb. sth.（让某人付出……的代价）是高频搭配，一句话里还有宾语从句和双宾语结构。',
          '<b>常见变体</b>：cost me a friendship 可以换成 cost me a friend，意思更口语。'
        ]
      }
    ],
    questions: [
      {
        en: 'Why did the writer feel left out that Friday evening?',
        cn: '那个星期五晚上，作者为什么觉得被冷落？',
        ans: 'Because his friend read his message but did not reply, and a photo showed their classmates at a party without him.',
        ansCn: '因为朋友看了消息却没有回复，而且一张照片里同学们在参加聚会，却没有他。'
      },
      {
        en: 'Why didn’t the friend write back to the message?',
        cn: '朋友为什么没有回复那条消息？',
        ans: 'Because his phone had died before he could write back, and the party was a secret plan for the writer’s birthday.',
        ansCn: '因为他的手机没电了，没能回复；而且那场聚会是为作者准备的生日惊喜，必须保密。'
      },
      {
        en: 'What can we infer about the message the writer wrote on Friday night?',
        cn: '从文中可以推出作者周五晚上写的那条消息是什么样的？',
        ans: 'It was angry and unfair, and the writer would have regretted sending it.',
        ansCn: '那是一条气话，说得并不公平；如果发出去，作者会后悔。'
      },
      {
        en: 'What does the paragraph that begins “Then I remembered” do in the story?',
        cn: '以“这时我想起”开头的段落在故事里起什么作用？',
        ans: 'It is the turning point: remembering how his friend had helped him stopped the writer from sending the angry message.',
        ansCn: '它是故事的转折点：想起朋友曾经的陪伴，让作者没有把那条气话发出去。'
      },
      {
        en: 'In the last paragraph, what does “those words” refer to?',
        cn: '最后一段中的“those words”指什么？',
        ans: 'It refers to the angry words in the message the writer wrote but never sent.',
        ansCn: '指作者写下、却始终没有发出去的那条消息里的气话。'
      }
    ],
    writingTask: {
      en: 'Write 60–80 words about a message you almost sent or a misunderstanding with a friend.',
      hints: [
        'I was sure that ...',
        'I wrote a message that ...',
        'On second thoughts, ...',
        'Now, before I send anything, I ...'
      ],
      hintCn: '用 4 句左右写一次“误会 → 写了气话 → 忍住没发 → 当面说清”的经历，最后一句写现在的做法。',
      req: '至少使用 1 个本篇学过的词或搭配（reply / assume / explanation / in person / think twice）。'
    },
    speakingTask: {
      en: 'Should we answer a message right away when we are angry? Answer the question in 45 seconds and give one reason.',
      points: [
        'Your answer',
        'One reason',
        'One small example'
      ],
      pointCn: '先明确回答该不该马上回，再给一个理由，最后举一个自己的小例子。',
      skeleton: 'In my opinion, we should not ... That is because ... For example, ...'
    },
    focus: [
      '<b>新授核心词 11 个</b>：<span class=\'en\'>reply, misunderstanding, upset, assume, ignore, explanation, sincere, blame, argument, delete, calm</span> —— 重点记搭配：<span class=\'en\'>reply to sb.</span>（回复某人）、<span class=\'en\'>assume that …</span>（以为……）、<span class=\'en\'>blame sb. for sth.</span>（为某事责怪某人）；<span class=\'en\'>calm</span> 既是形容词也是动词（calm down）。',
      '<b>本篇复现的旧词</b>：第 3 篇的 <span class=\'en\'>honest</span>（an honest conversation）、第 11 篇的 <span class=\'en\'>awkward / conversation / regret</span>（felt awkward, had a conversation, would have regretted）、第 12 篇的 <span class=\'en\'>apologize</span>（wanted to apologize to me）—— 都是换到“网络沟通”的语境再认一次，看到灰点先自己说意思。',
      '<b>叙事骨架</b>：误会起因（没回消息）→ 情绪升级（照片）→ 差点发出狠话 → 一个回忆拦住我 → 当面说清 → 收获。和第 12 篇一样只留一个转折点，但这次转折是“内心的停顿”。',
      '<b>两个写作表达</b>：<span class=\'en\'>On second thoughts, …</span> 放在“差点做某事”之后，引出改变主意的决定；<span class=\'en\'>To my surprise, …</span> 放在真相揭晓之前，引出与猜测相反的事实。',
      '<b>题型提醒</b>：指代题（第 5 题）把 those words 还原成“没发出去的那条消息里的气话”；推断题（第 3 题）要答出“会后悔”这一层，只答“很生气”不完整。'
    ],
    standard: {
      time: '约 30 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 11 个核心词遮住中文说出 ≥ 8 · 11 个搭配掌握 8 个 · 完成 60–80 词写作与 45 秒口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 11 个核心词中的 8 个（reply、assume、explanation、argument、calm …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '11 个高频搭配掌握 8 个，能各造一句（feel left out、in person、think twice …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 2 个长难句的结构（regret 后接动名词的定语从句；cost sb. sth. 的双宾结构），并各仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；第 3 题要能说出推断依据，第 5 题要能指出 those words 的指代对象',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按第 07 节写 60–80 词，至少用上 On second thoughts, … 或 To my surprise, …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '45 秒说清“生气时该不该马上回消息”的立场，并给出一个理由和一个小例子',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 5 处灰点旧词，说出其中 3 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 14,
    slug: '014-what-my-grandfather-kept',
    title: 'What My Grandfather Kept',
    titleCn: '爷爷留下的东西',
    stage: '阶段二 · 基础过渡',
    stageRange: '第 11–20 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 285 词'
      },
      {
        k: '新词密度',
        v: '约 4.2%'
      },
      {
        k: '长难句',
        v: '2 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/014.jpg',
    coverCredit: 'Photo: furkanfdemir / Pexels',
    body: [
      'Last month my family cleaned out my grandfather’s old house. In the <span class="w-cet4" data-cn="阁楼">attic</span> I found a <span class="w-cet4" data-cn="布满灰尘的">dusty</span> <span class="w-cet4" data-cn="木制的">wooden</span> box. My mother said it was all rubbish and I could throw it out.',
      'I put the box on the floor and began to <span class="w-phrase" data-cn="翻看、逐一查看">look through</span> it. It was <span class="w-phrase" data-cn="充满">full of</span> small things that <span class="w-cet4" data-cn="属于">belonged</span> to him: old tickets, a little notebook, some <span class="w-cet4" data-cn="邮票">stamps</span>, and an <span class="w-cet4" data-cn="未拆开的">unopened</span> letter. Nothing there looked <span class="w-cet4" data-cn="珍贵的、值钱的">valuable</span>.',
      'My mother watched from the door and told me to <span class="w-rev">throw them away</span>. I was <span class="w-phrase" data-cn="刚要做某事">about to</span> do it when I <span class="w-rev">noticed</span> the <span class="w-cet4" data-cn="笔迹">handwriting</span> on the notebook. It was my grandfather’s, small and neat, and every page was dated.',
      'The notebook was not a diary. It listed the days he took a train to see my grandmother, and small notes about his <span class="w-cet4" data-cn="童年">childhood</span> and each trip. Then I opened the letter at the bottom of the box.',
      '<span class="w-writing" data-cn="最打动我的是……">What touched me most was</span> the letter to his brother. He wrote it, but he never sent it. My mother read it and went quiet. <span class="w-sentence">She told me that he kept every little thing because each one carried a moment he was not ready to lose.</span>',
      '<span class="w-sentence">What he left us was not money or gold, but small things that told the story of his life.</span> The tickets were <span class="w-synonym" data-cn="＝ of no value 的替换说法">worthless</span>, and the stamps were common. But the <span class="w-cet4" data-cn="记忆">memories</span> in that box were <span class="w-cet4" data-cn="珍贵的">precious</span>, and that is all that <span class="w-rev">matters</span>.',
      'I decided to <span class="w-phrase" data-cn="保留、不放手">hold on to</span> the box. <span class="w-writing" data-cn="即使今天">Even today</span>, I open it when I miss him. These small things <span class="w-cet4" data-cn="提醒、使想起">remind</span> me of the man he was, and I am <span class="w-rev">grateful</span> I did not throw them away. One day I will <span class="w-rev">share</span> his stories and <span class="w-phrase" data-cn="把……传给后代">pass down</span> what he kept.'
    ],
    translation: [
      '上个月，我们全家整理爷爷留下的老房子。在阁楼里，我发现一个落满灰尘的木箱。妈妈说里面全是垃圾，我可以把它扔掉。',
      '我把箱子放在地上，开始一件件翻看。里面装满了属于他的小东西：旧车票、一个小笔记本、几张邮票，还有一封没有拆开的信。看上去没有一样值钱。',
      '妈妈站在门口看着，让我把这些东西都扔掉。我正要动手，忽然注意到笔记本上的笔迹。那是爷爷的字，又小又整齐，每一页都写着日期。',
      '这个笔记本并不是日记。它只记着他坐火车去看奶奶的那些日子，还有关于他童年和每次出门的小记事。然后我打开了箱子最底下的那封信。',
      '最打动我的是那封写给他兄弟的信。他写了，却一直没有寄出去。妈妈读完信，沉默了。她说，爷爷什么都留着，因为每件东西都带着一个他舍不得丢掉的时刻。',
      '他留给我们的不是钱，也不是金银，而是一些讲出他一生的小东西。车票不值钱，邮票也很普通。但那个箱子里的回忆无比珍贵，而这才是最重要的。',
      '我决定把这个箱子留下来。直到今天，想他的时候我还会打开它。这些小东西让我想起他这个人。我很庆幸自己没有把它们扔掉。总有一天，我会把他的故事讲给别人听，把他留下的东西传下去。'
    ],
    vocabulary: [
      {
        w: 'attic',
        ph: '/ˈætɪk/',
        pos: 'n.',
        cn: '阁楼',
        col: 'in the attic — 在阁楼里；an attic room — 顶楼房间',
        ex: 'We found an old box in the attic.'
      },
      {
        w: 'wooden',
        ph: '/ˈwʊdn/',
        pos: 'adj.',
        cn: '木制的',
        col: 'a wooden box — 木箱；a wooden chair — 木椅子',
        ex: 'The wooden door was painted brown.'
      },
      {
        w: 'dusty',
        ph: '/ˈdʌsti/',
        pos: 'adj.',
        cn: '布满灰尘的',
        col: 'a dusty room — 落满灰尘的房间；get dusty — 落上灰尘',
        ex: 'The books on the shelf were dusty.'
      },
      {
        w: 'belong',
        ph: '/bɪˈlɒŋ/',
        pos: 'vi.',
        cn: '属于',
        col: 'belong to sb. — 属于某人（不用被动）；belong with — 和……放在一起',
        ex: 'This bag belongs to my sister.'
      },
      {
        w: 'stamp',
        ph: '/stæmp/',
        pos: 'n.',
        cn: '邮票',
        col: 'collect stamps — 集邮；a stamp album — 集邮册',
        ex: 'He put a stamp on the envelope.'
      },
      {
        w: 'unopened',
        ph: '/ˌʌnˈəʊpənd/',
        pos: 'adj.',
        cn: '未拆开的',
        col: 'an unopened letter — 未拆开的信；leave sth. unopened — 让某物原封不动',
        ex: 'The letter stayed unopened for twenty years.'
      },
      {
        w: 'valuable',
        ph: '/ˈvæljuəbl/',
        pos: 'adj.',
        cn: '珍贵的、值钱的',
        col: 'valuable to sb. — 对某人很珍贵；a valuable lesson — 有价值的一课',
        ex: 'The box was valuable to my family.'
      },
      {
        w: 'handwriting',
        ph: '/ˈhændraɪtɪŋ/',
        pos: 'n.',
        cn: '笔迹、手写的字',
        col: 'in one’s handwriting — 用某人的笔迹；neat handwriting — 工整的字',
        ex: 'I knew the handwriting at once.'
      },
      {
        w: 'childhood',
        ph: '/ˈtʃaɪldhʊd/',
        pos: 'n.',
        cn: '童年',
        col: 'in one’s childhood — 在某人的童年；childhood memories — 童年的回忆',
        ex: 'He wrote about his childhood in the village.'
      },
      {
        w: 'memory',
        ph: '/ˈmeməri/',
        pos: 'n.',
        cn: '记忆、回忆',
        col: 'a happy memory — 一段快乐的回忆；bring back memories — 唤起回忆',
        ex: 'This song brings back memories.'
      },
      {
        w: 'precious',
        ph: '/ˈpreʃəs/',
        pos: 'adj.',
        cn: '珍贵的',
        col: 'precious to sb. — 对某人很珍贵；precious moments — 珍贵的时刻',
        ex: 'Time with my grandparents is precious.'
      },
      {
        w: 'remind',
        ph: '/rɪˈmaɪnd/',
        pos: 'vt.',
        cn: '提醒、使想起',
        col: 'remind sb. of sth. — 使某人想起某事；remind sb. to do sth. — 提醒某人做某事',
        ex: 'The photo reminds me of him.'
      }
    ],
    phrases: [
      {
        en: 'look through',
        cn: '翻看、逐一查看',
        ex: 'She looked through the old photos after dinner.'
      },
      {
        en: 'be full of',
        cn: '充满',
        ex: 'The box is full of old tickets.'
      },
      {
        en: 'sort out',
        cn: '整理、归类',
        ex: 'We sorted out the books on the shelf.'
      },
      {
        en: 'pass down',
        cn: '把……传给后代',
        ex: 'These stories are passed down from father to son.'
      },
      {
        en: 'hold on to',
        cn: '保留、不放手',
        ex: 'She held on to the old photos for years.'
      },
      {
        en: 'throw … away',
        cn: '把……扔掉',
        ex: 'Do not throw the box away.'
      },
      {
        en: 'clean up',
        cn: '打扫干净、收拾',
        ex: 'Let us clean up the room first.'
      },
      {
        en: 'piece by piece',
        cn: '一件一件地',
        ex: 'We took the box out piece by piece.'
      },
      {
        en: 'be about to do sth.',
        cn: '刚要做某事',
        ex: 'I was about to leave when he called.'
      },
      {
        en: 'think of',
        cn: '想到、想起',
        ex: 'I often think of my grandfather.'
      }
    ],
    writings: [
      {
        expr: 'What touched me most was ...',
        cn: '最打动我的是……',
        meaning: '从一堆细节里挑出最触动自己的那一点，把它提到句首，成为一段的情感焦点。',
        context: '记叙文的感悟段开头：前面先写看到、读到的内容，再用它点出最打动自己的部分。',
        alts: [
          {
            t: 'What moved me most was ...',
            n: 'moved 与 touched 同义'
          },
          {
            t: 'What impressed me most was ...',
            n: '偏“留下深刻印象”'
          },
          {
            t: 'The thing that touched me most was ...',
            n: '更完整的名词结构'
          }
        ],
        register: '中性，写经历和读后感都好用。',
        example: 'What touched me most was the letter he never sent.'
      },
      {
        expr: 'Even today, ...',
        cn: '即使今天……',
        meaning: '把过去的经历延伸到现在，说明某个动作或感受一直延续，适合收尾。',
        context: '全文最后一段：先写当年的事，再用它写现在的做法或感受。',
        alts: [
          {
            t: 'To this day, ...',
            n: '更书面'
          },
          {
            t: 'Still today, ...',
            n: '语气稍弱'
          },
          {
            t: 'Even now, ...',
            n: '强调“到了现在也一样”'
          }
        ],
        register: '中性偏书面，结尾收束最自然。',
        example: 'Even today, I open the box when I miss him.'
      }
    ],
    sentences: [
      {
        text: 'What he left us was not money or gold, but small things that told the story of his life.',
        points: [
          '<b>主干</b>：What he left us was small things（主语从句 + 系动词 + 表语）。',
          '<b>What 引导主语从句</b>：What 相当于 the things that，整个从句作主语，谓语用单数 was；写作里可以照抄这个开头：What he taught me was …。',
          '<b>not … but …</b>：不是……而是……，否定前者、突出后者，这里连接两个并列表语：money or gold 与 small things。',
          '<b>that told the story of his life</b>：定语从句修饰 small things，把“旧物”提升成“他的一生”，是记叙文的升华句。',
          '<b>常见变体</b>：What he left behind was …（他留下来的）；What he gave me was not … but …。'
        ]
      },
      {
        text: 'She told me that he kept every little thing because each one carried a moment he was not ready to lose.',
        points: [
          '<b>主干</b>：She told me + that 宾语从句，told sb. that … 表示“告诉某人……”。',
          '<b>从句结构</b>：he kept every little thing 是主句，because 引导原因状语从句，解释“为什么什么都留着”。',
          '<b>he was not ready to lose</b>：定语从句修饰 a moment，省略了关系代词 that；be not ready to do 表示“还没有准备好做某事”。',
          '<b>为什么值得学</b>：一句话里有宾语从句、原因状语从句和定语从句三层，是四级阅读里的典型长句。',
          '<b>常见变体</b>：a moment he could not give up（他放不下的时刻）意思相近，语气更强。'
        ]
      }
    ],
    questions: [
      {
        en: 'Where did the writer find the wooden box?',
        cn: '作者在哪里发现了那个木箱？',
        ans: 'He found it in the attic of his grandfather’s old house.',
        ansCn: '他在爷爷老房子的阁楼里发现了它。'
      },
      {
        en: 'What was inside the box?',
        cn: '箱子里有什么？',
        ans: 'Old tickets, a little notebook, some stamps and an unopened letter.',
        ansCn: '旧车票、一个小笔记本、几张邮票，还有一封没有拆开的信。'
      },
      {
        en: 'What can we infer about the little notebook?',
        cn: '从文中可以推出那个小笔记本是什么样的？',
        ans: 'It was not a diary but a record of the trips he took to see the writer’s grandmother and notes about his childhood, so it kept the small things of his life.',
        ansCn: '它不是日记，而是记录他坐火车去看奶奶的日子和童年小事的本子，留下的是他生活里的点点滴滴。'
      },
      {
        en: 'What is the function of the paragraph that begins “What touched me most”?',
        cn: '以“最打动我的是”开头的段落在故事里起什么作用？',
        ans: 'It is the turning point: the letter and the mother’s words explain why the grandfather kept all these small things.',
        ansCn: '它是故事的转折点：那封信和妈妈的话解释了爷爷为什么舍不得扔这些东西。'
      },
      {
        en: 'In the last paragraph, what does “what he kept” refer to?',
        cn: '最后一段中的“what he kept”指什么？',
        ans: 'It refers to the small things in the wooden box: the tickets, the notebook, the stamps and the letter.',
        ansCn: '指木箱里的那些小东西：车票、笔记本、邮票和那封信。'
      }
    ],
    writingTask: {
      en: 'Write 60–80 words about something old your family keeps and why it is important.',
      hints: [
        'In the corner of ..., there is ...',
        'What touched me most was ...',
        'Even today, ...'
      ],
      hintCn: '用 3–4 句写一件家里的旧物：它是什么、关于它的故事、它为什么舍不得扔，最后一句写它今天的意义。',
      req: '至少使用 1 个本篇学过的词或搭配（memory / remind / precious / look through / hold on to / pass down）。'
    },
    speakingTask: {
      en: 'Should we keep old things from our family? Answer the question in 45 seconds and give one reason.',
      points: [
        'Your answer',
        'One reason',
        'One small example'
      ],
      pointCn: '先明确回答该不该留，再给一个理由，最后举一件自己家里的旧物当例子。',
      skeleton: 'In my opinion, we should ... That is because ... For example, ...'
    },
    focus: [
      '<b>新授核心词 12 个</b>：<span class=\'en\'>attic, wooden, dusty, belong, stamp, unopened, valuable, handwriting, childhood, memory, precious, remind</span> —— 重点记搭配：<span class=\'en\'>belong to sb.</span>（属于某人，不用被动）、<span class=\'en\'>remind sb. of sth.</span>（使某人想起）、<span class=\'en\'>memory</span> 是可数名词（a memory / memories）。',
      '<b>本篇复现的旧词</b>：第 4 篇的 <span class=\'en\'>throw … away</span>（throw them away）、第 3 篇的 <span class=\'en\'>share</span>（share his stories）、第 9 篇的 <span class=\'en\'>notice</span>（noticed the handwriting）、第 10 篇的 <span class=\'en\'>matter</span>（all that matters）、第 11 篇的 <span class=\'en\'>grateful</span>（grateful I did not）—— 都是换到“旧物”语境再认一次。',
      '<b>叙事骨架</b>：发现旧物 → 差点扔掉 → 注意到细节（笔迹）→ 读出内容（笔记本与信）→ 一句话点题（每件东西都是一个时刻）→ 收束（留下来、传下去）。和第 12、13 篇一样只有一个转折点，这次是“一个细节改变决定”。',
      '<b>两个写作表达</b>：<span class=\'en\'>What touched me most was …</span> 放在感悟段开头，点出情感焦点；<span class=\'en\'>Even today, …</span> 放在结尾段，把当年的事延伸到现在。',
      '<b>题型提醒</b>：指代题（第 5 题）把 what he kept 还原成“箱子里的旧物”；段落作用题（第 4 题）要答“转折 + 解释原因”两层，只答“写了一封信”不完整。'
    ],
    standard: {
      time: '约 30 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 12 个核心词遮住中文说出 ≥ 9 · 10 个搭配掌握 8 个 · 完成 60–80 词写作与 45 秒口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 12 个核心词中的 9 个（attic、handwriting、memory、precious、remind …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '10 个高频搭配掌握 8 个，能各造一句（look through、hold on to、pass down …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 2 个长难句的结构（What 主语从句 + not … but …；宾语从句里套原因从句和定语从句），并各仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；第 3 题要能说出推断依据，第 5 题要能指出 what he kept 的指代对象',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按第 07 节写 60–80 词，至少用上 What touched me most was … 或 Even today, …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '45 秒说清“该不该保留家里的旧物”的立场，并给出一个理由和一件旧物作为例子',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 5 处灰点旧词，说出其中 3 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 15,
    slug: '015-cooking-with-my-roommate',
    title: 'Cooking with My Roommate',
    titleCn: '和室友下厨',
    stage: '阶段二 · 基础过渡',
    stageRange: '第 11–20 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 290 词'
      },
      {
        k: '新词密度',
        v: '约 4.1%'
      },
      {
        k: '长难句',
        v: '2 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/015.jpg',
    coverCredit: 'Photo: Kampus Production / Pexels',
    body: [
      'My roommate and I moved into our small apartment last September, and we soon ran into one problem: neither of us could <span class="w-rev">cook</span>. So we <span class="w-rev">ordered</span> takeout almost every night and spent too much money on food.',
      'One Friday we decided to make dinner ourselves. We <span class="w-phrase" data-cn="挑选">picked out</span> a simple <span class="w-cet4" data-cn="食谱">recipe</span> and bought <span class="w-rev">fresh</span> <span class="w-rev">ingredients</span>, but ten minutes later the noodles were <span class="w-cet4" data-cn="烧糊的">burned</span> black. The kitchen was a <span class="w-cet4" data-cn="一团糟">mess</span>, and we were both <span class="w-rev">hungry</span> and angry.',
      'We almost <span class="w-rev">gave up</span> that night. Then my roommate said that we should <span class="w-phrase" data-cn="尽最大努力">try our best</span> one more time. <span class="w-sentence">We wrote down what went wrong: the fire was too strong, nobody stirred the noodles, and nobody watched the time.</span>',
      'The next week we tried again, and this time we <span class="w-cet4" data-cn="分配、分担">divided</span> the work. He washed and <span class="w-cet4" data-cn="切碎、剁">chopped</span> the vegetables; I <span class="w-phrase" data-cn="照看、盯着">kept an eye on</span> the <span class="w-cet4" data-cn="煮着的、沸腾的">boiling</span> soup and <span class="w-cet4" data-cn="尝、品尝">tasted</span> it every few minutes. Little by little, our <span class="w-cet4" data-cn="菜肴">dishes</span> began to look like real food.',
      'Now we cook at home three times a week. Before we start, we read the recipe together and <span class="w-phrase" data-cn="列一张……的清单">make a list of</span> what we need. The rule is simple: one person cooks, the other cleans, and we never leave the kitchen in a mess.',
      'Last Saturday we made a <span class="w-rev">whole</span> dinner — soup, chicken and vegetables — and <span class="w-cet4" data-cn="端上饭菜、招待">served</span> it to two <span class="w-cet4" data-cn="客人">guests</span> we had <span class="w-phrase" data-cn="邀请……来家里做客">invited over</span>. <span class="w-writing" data-cn="令我惊讶的是……">To my surprise</span>, they <span class="w-synonym" data-cn="＝ ask 的替换词">wondered</span> who had cooked it, and we looked at each other and laughed.',
      'That burned pot of noodles cost us one evening, and it took time and <span class="w-rev">effort</span> to get better. <span class="w-sentence">Learning to cook was not the only gain; learning to divide tasks and trust my roommate mattered just as much.</span> <span class="w-writing" data-cn="结果、因此……">As a result</span>, we now cook together every Sunday.'
    ],
    translation: [
      '我和室友去年九月搬进了我们的小公寓，很快就碰上一个难题：我们俩谁都不会做饭。于是我们几乎每晚都点外卖，在吃上面花了太多钱。',
      '一个星期五，我们决定自己做晚饭。我们挑了一份简单的食谱，买了新鲜的食材，可十分钟后面条就糊成了黑炭。厨房里一团糟，我们俩又饿又气。',
      '那天晚上我们差点就放弃了。室友说，我们应该再尽一次最大努力。我们把出问题的地方写了下来：火太大，没人搅拌面条，也没人看着时间。',
      '第二周我们又试了一次，这次我们分了工。他洗菜、切菜；我盯着锅里滚着的汤，每隔几分钟尝一口。慢慢地，我们做的菜开始像样了。',
      '现在我们每周在家做三次饭。开始之前，我们一起看食谱，把需要的东西列成清单。规矩很简单：一个人做饭，另一个人收拾，厨房绝不留到一团糟。',
      '上个星期六我们做了一整顿饭——汤、鸡肉和蔬菜——还请了两位客人来家里。令我惊讶的是，他们问这饭是谁做的，我们俩对视一眼，笑了起来。',
      '那锅烧糊的面花掉了我们一个晚上，厨艺变好也花了不少时间和力气。学会做饭不是唯一的收获；学会分担任务、信任室友，同样重要。结果，我们现在每周日一起做饭。'
    ],
    vocabulary: [
      {
        w: 'recipe',
        ph: '/ˈresəpi/',
        pos: 'n.',
        cn: '食谱',
        col: 'follow a recipe — 照着食谱做；a simple recipe — 一份简单的食谱',
        ex: 'She found a simple recipe for tomato soup.'
      },
      {
        w: 'stir',
        ph: '/stɜː/',
        pos: 'v.',
        cn: '搅拌',
        col: 'stir the soup — 搅拌汤；stir … into … — 把……搅进……',
        ex: 'Please stir the noodles while they are cooking.'
      },
      {
        w: 'boil',
        ph: '/bɔɪl/',
        pos: 'v.',
        cn: '煮沸、烧开',
        col: 'boil water — 烧开水；keep … boiling — 让……保持沸腾',
        ex: 'Boil the eggs for eight minutes.'
      },
      {
        w: 'burn',
        ph: '/bɜːn/',
        pos: 'v.',
        cn: '烧糊、燃烧',
        col: 'burn the food — 把食物烧糊；burned black — 糊成黑色',
        ex: 'I burned the rice because the fire was too strong.'
      },
      {
        w: 'mess',
        ph: '/mes/',
        pos: 'n.',
        cn: '一团糟、杂乱',
        col: 'make a mess — 弄得一团糟；in a mess — 乱糟糟的',
        ex: 'The kitchen was a mess after dinner.'
      },
      {
        w: 'divide',
        ph: '/dɪˈvaɪd/',
        pos: 'v.',
        cn: '分开、分配',
        col: 'divide the work — 分工；divide … into … — 把……分成……',
        ex: 'We divided the work and finished early.'
      },
      {
        w: 'task',
        ph: '/tɑːsk/',
        pos: 'n.',
        cn: '任务',
        col: 'a simple task — 一项简单的任务；share tasks — 分担任务',
        ex: 'Each of us has one task tonight.'
      },
      {
        w: 'taste',
        ph: '/teɪst/',
        pos: 'v./n.',
        cn: '尝、品尝；味道',
        col: 'taste the soup — 尝一口汤；have a sweet taste — 有甜味',
        ex: 'Taste the soup and tell me if it needs salt.'
      },
      {
        w: 'dish',
        ph: '/dɪʃ/',
        pos: 'n.',
        cn: '菜肴、盘子',
        col: 'a cold dish — 一道凉菜；do the dishes — 洗碗',
        ex: 'This dish is the best one on the table.'
      },
      {
        w: 'chop',
        ph: '/tʃɒp/',
        pos: 'v.',
        cn: '切碎、剁',
        col: 'chop up the vegetables — 把菜切碎；chop … into … — 把……切成……',
        ex: 'He chopped the onions into small pieces.'
      },
      {
        w: 'serve',
        ph: '/sɜːv/',
        pos: 'v.',
        cn: '端上饭菜、招待',
        col: 'serve dinner — 上菜；serve tea to guests — 给客人上茶',
        ex: 'Dinner is ready. Let me serve it.'
      },
      {
        w: 'guest',
        ph: '/ɡest/',
        pos: 'n.',
        cn: '客人',
        col: 'have guests — 有客人来；a guest at dinner — 饭桌上的客人',
        ex: 'We had two guests for dinner last night.'
      }
    ],
    phrases: [
      {
        en: 'pick out',
        cn: '挑选',
        ex: 'She picked out a dress for the party.'
      },
      {
        en: 'make a list of',
        cn: '列一张……的清单',
        ex: 'Make a list of the things you need.'
      },
      {
        en: 'keep an eye on',
        cn: '照看、盯着（留意）',
        ex: 'Keep an eye on the soup while I answer the phone.'
      },
      {
        en: 'try your best',
        cn: '尽最大努力（所有格可随人称更换）',
        ex: 'I will try my best to finish on time.'
      },
      {
        en: 'invite … over',
        cn: '邀请……来家里做客',
        ex: 'We invited our neighbors over for dinner.'
      },
      {
        en: 'cut up',
        cn: '切碎',
        ex: 'Cut up the fruit before you eat it.'
      },
      {
        en: 'go wrong',
        cn: '出错、出问题',
        ex: 'Something went wrong with the machine.'
      },
      {
        en: 'clean up',
        cn: '收拾干净、打扫',
        ex: 'Please clean up the kitchen after cooking.'
      },
      {
        en: 'start over',
        cn: '重新开始',
        ex: 'The cake failed, so we started over.'
      }
    ],
    writings: [
      {
        expr: 'To my surprise, ...',
        cn: '令我惊讶的是……',
        meaning: '用来引出与预期相反的结果，把“我没想到”这件事直接写出来。',
        context: '记叙文的中段或结尾：前面先写原本的预料，后面用它引出实际发生的事。',
        alts: [
          {
            t: 'To my amazement, ...',
            n: '更书面'
          },
          {
            t: 'What surprised me was that ...',
            n: '后面接完整从句'
          },
          {
            t: 'I was surprised to find that ...',
            n: '主语换成自己'
          }
        ],
        register: '中性，记叙文里最常见的转折引导。',
        example: 'To my surprise, the second try was much better than the first.'
      },
      {
        expr: 'As a result, ...',
        cn: '结果、因此……',
        meaning: '承接上文的原因，直接写出随之而来的结果。',
        context: '段首或句首：前面写原因或变化，后面用它收出结果。',
        alts: [
          {
            t: 'As a consequence, ...',
            n: '更书面'
          },
          {
            t: 'Therefore, ...',
            n: '正式'
          },
          {
            t: 'So ...',
            n: '口语化'
          }
        ],
        register: '中性偏书面，写作里最稳的因果连接。',
        example: 'We divided the work. As a result, dinner was ready in thirty minutes.'
      }
    ],
    sentences: [
      {
        text: 'We wrote down what went wrong: the fire was too strong, nobody stirred the noodles, and nobody watched the time.',
        points: [
          '<b>主干</b>：We wrote down …（主语 + 谓语 + 宾语），冒号后面三小句都是对“出问题的地方”的具体说明。',
          '<b>what went wrong</b>：what 引导宾语从句，作 wrote down 的宾语；what 相当于 the thing that，不能换成 that。',
          '<b>冒号 + 三个并列句</b>：the fire was too strong / nobody stirred the noodles / nobody watched the time 用逗号和并列连词排成三项，节奏清楚，是四级写作里“列举原因”的标准写法。',
          '<b>为什么值得学</b>：把“哪里出了错”一次说清，比写三句独立的短句更紧凑；记叙文复盘、议论文分析原因都能照这个结构写。',
          '<b>常见变体</b>：冒号可以换成 that is 或 that is to say，但列举的力度会弱一些。'
        ]
      },
      {
        text: 'Learning to cook was not the only gain; learning to divide tasks and trust my roommate mattered just as much.',
        points: [
          '<b>主干</b>：Learning to cook was not the gain 与 learning to divide tasks … mattered just as much 两个分句用分号连接。',
          '<b>动名词作主语</b>：Learning to cook 与 learning to divide tasks and trust my roommate 都是动名词短语作主语，谓语都用单数形式（was / mattered）。',
          '<b>just as much</b>：表示“同样多、同样重要”，这里把“做饭”和“分工与信任”放在天平两端。',
          '<b>为什么值得学</b>：这是记叙文的升华句模板——把收获从“事情”写到“人和方法”，放在结尾段前面，立意立刻不一样。',
          '<b>注意</b>：分号前后必须是两个完整的句子，不能像逗号那样接半个句子。'
        ]
      }
    ],
    questions: [
      {
        en: 'Why did the two roommates order takeout almost every night at first?',
        cn: '一开始两个室友为什么几乎每晚都点外卖？',
        ans: 'Because neither of them could cook.',
        ansCn: '因为他们俩谁都不会做饭。'
      },
      {
        en: 'What mistakes did they make with the first pot of noodles?',
        cn: '第一锅面他们犯了哪些错误？',
        ans: 'The fire was too strong, nobody stirred the noodles, and nobody watched the time, so the noodles were burned black.',
        ansCn: '火太大，没人搅拌面条，也没人看着时间，结果面条糊成了黑炭。'
      },
      {
        en: 'What can we infer about how the two roommates live now?',
        cn: '从文中可以推出两个室友现在是怎么生活的？',
        ans: 'They cook at home several times a week and share the work, so they no longer rely on takeout.',
        ansCn: '他们每周在家做几次饭，而且分工合作，不再靠外卖过日子。'
      },
      {
        en: 'What does the second paragraph mainly do in the story?',
        cn: '第二段在故事里主要起什么作用？',
        ans: 'It describes their failed first attempt at cooking, which leads to the changes they make later.',
        ansCn: '它写出两人第一次下厨的失败，才引出后面的改进和分工。'
      },
      {
        en: 'In the last paragraph, what does “That burned pot of noodles” refer to?',
        cn: '最后一段里的“那锅烧糊的面”指的是什么？',
        ans: 'It refers to their failed first attempt at making dinner together on that Friday.',
        ansCn: '指的是那个星期五两人第一次合作做晚饭却做砸了的那次。'
      }
    ],
    writingTask: {
      en: 'Write 60–80 words about a time you learned to do something together with someone.',
      hints: [
        'Neither of us could ... at first.',
        'We divided the work: ...',
        'To my surprise, ...',
        'As a result, ...'
      ],
      hintCn: '用 4–6 句话写一次和别人合作做事的经历：先写起初的困难，再写怎么分工，最后写结果和收获。',
      req: '至少使用 1 个本篇学过的词或搭配（divide / dish / keep an eye on / try one’s best / to my surprise）。'
    },
    speakingTask: {
      en: 'Is it better to cook at home or to eat out? Answer the question in 45 seconds and give one reason.',
      points: [
        'Your answer',
        'One reason',
        'One small example'
      ],
      pointCn: '先明确回答哪种更好，再给一个理由，最后举一个自己的小例子。',
      skeleton: 'In my opinion, cooking at home is better. That is because ... For example, last week ...'
    },
    focus: [
      '<b>新授核心词 12 个</b>：<span class=\'en\'>recipe, stir, boil, burn, mess, divide, task, taste, dish, chop, serve, guest</span> —— <b>divide the work</b>（分工）与 <b>divide … into …</b>（把……分成……）要分清；<b>taste</b> 既作动词“尝”也作名词“味道”；<b>dish</b> 可数，指“一道菜”，洗碗说 <b>do the dishes</b>；<b>burn</b> 的过去式写 burned 或 burnt 都可以。',
      '<b>本篇复现的旧词</b>：第 7 篇的 <span class=\'en\'>cook / ingredient / fresh / hungry / order / whole</span>（煮面、买食材、点外卖、做一整顿饭的场景）、第 10 篇的 <span class=\'en\'>effort</span>（进步要花力气），以及旧短语 <span class=\'en\'>give up</span>（差点放弃）—— 都是厨房语境里再认一次，看到灰点先自己说意思。',
      '<b>叙事骨架</b>：困难（不会做饭）→ 失败（煮糊一锅面）→ 复盘（写下哪里出错）→ 分工（一人做饭一人收拾）→ 收获（升华到信任）。写经历类短文照这个顺序排材料，失败只需要写一次。',
      '<b>两个写作表达</b>：<span class=\'en\'>To my surprise, …</span> 引出和预期相反的结果；<span class=\'en\'>As a result, …</span> 收出结果。一个制造波折，一个收束因果，正好一前一后。',
      '<b>题型提醒</b>：段落作用题（第 4 题）要答“写了什么 + 为什么这样写”两层；推断题（第 3 题）要回到“现在每周做三次饭、一人做饭一人收拾”这两句找依据。'
    ],
    standard: {
      time: '约 30 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 12 个核心词遮住中文说出 ≥ 9 · 9 个搭配掌握 7 个 · 完成 60–80 词写作与 45 秒口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 12 个核心词中的 9 个（recipe、divide、serve、guest …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '9 个高频搭配掌握 7 个，能各造一句（keep an eye on、cut up、try one’s best …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 We wrote down what went wrong: … 的宾语从句与冒号列举结构，并用动名词作主语仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；第 3 题要能说出推断的依据',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 60–80 词，至少用上 To my surprise, … 或 As a result, …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '45 秒说清「自己做饭还是外食」的立场，并给出一个理由和一个小例子',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 8 处灰点旧词，说出其中 5 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 16,
    slug: '016-the-bus-stop-conversation',
    title: 'The Bus Stop Conversation',
    titleCn: '公交站的对话',
    stage: '阶段二 · 基础过渡',
    stageRange: '第 11–20 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 295 词'
      },
      {
        k: '新词密度',
        v: '约 4.0%'
      },
      {
        k: '长难句',
        v: '2 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/016.jpg',
    coverCredit: 'Photo: Emre Bilgiç / Pexels',
    body: [
      'It rains a lot in early summer, and I never carry an <span class="w-cet4" data-cn="雨伞">umbrella</span>. Last Tuesday the rain came down hard at six in the evening, and the bus stop was the only <span class="w-cet4" data-cn="避雨处、遮蔽处">shelter</span> on the street.',
      'Ten minutes later a <span class="w-rev">notice</span> on the sign said that buses would stop for two hours because of the <span class="w-cet4" data-cn="暴风雨">storm</span>. Some people complained, and the rest of us <span class="w-phrase" data-cn="被困住、动弹不得">got stuck</span> there. I watched the rain <span class="w-cet4" data-cn="倾泻、下个不停">pour</span> down.',
      'I noticed an old man beside me. <span class="w-sentence">I had seen this old man at the bus stop almost every morning for two years, but we had never said a word to each other.</span> His face was <span class="w-cet4" data-cn="熟悉的">familiar</span>, yet he was still a <span class="w-rev">stranger</span> to me.',
      'I decided to <span class="w-phrase" data-cn="和……攀谈起来">strike up a conversation</span> with him. <span class="w-writing" data-cn="说实话……">To be honest</span>, I only asked about the <span class="w-rev">weather</span>, but he answered with a smile, and soon we were talking like old friends. His voice was <span class="w-rev">kind</span>.',
      'He <span class="w-cet4" data-cn="提到、说起">mentioned</span> that he had worked in a factory in our <span class="w-cet4" data-cn="街区、社区">neighborhood</span> for forty years and had <span class="w-cet4" data-cn="退休">retired</span> last spring. Now he still walked through the old <span class="w-rev">community</span> every morning, because he did not like staying at home alone.',
      'I listened and <span class="w-cet4" data-cn="点头">nodded</span>, and the <span class="w-cet4" data-cn="沉默、寂静">silence</span> between us disappeared. We talked for forty minutes. He was <span class="w-rev">patient</span> with my questions, and I <span class="w-phrase" data-cn="了解到、查明">found out</span> that he had three grandchildren. He <span class="w-rev">offered</span> me one piece of advice: “Talk to the people around you before it is too late.”',
      'When the bus finally came, we got on together. <span class="w-sentence">He talked about the street where he had grown up, and I understood why he still walked past it every morning.</span> <span class="w-writing" data-cn="实情是……、说真的……">The truth is that</span> a <span class="w-cet4" data-cn="一生、终生">lifetime</span> of stories can hide behind a familiar face. Now we <span class="w-phrase" data-cn="（与……）保持联系">keep in touch</span>, and that rainy <span class="w-cet4" data-cn="记忆、回忆">memory</span> stays with me.'
    ],
    translation: [
      '初夏雨水很多，可我从来不带伞。上周二傍晚六点雨下得很大，公交站是这条街上唯一能避雨的地方。',
      '十分钟后，站牌上的一则通知说，因为暴风雨，公交车要停运两个小时。有人抱怨，其余的人就这么被困在了那里。我看着雨下个不停。',
      '我注意到身边站着一位老人。这两年来，我几乎每天早上都在这个公交站见到他，可我们从来没说过一句话。他的面孔很熟悉，可他对我来说仍然是个陌生人。',
      '我决定和他攀谈起来。说实话，我问的不过是天气，可他笑着回答，很快我们就像老朋友一样聊了起来。他的声音很和善。',
      '他提到，他在我们街区的一家工厂干了四十年，去年春天退休了。如今他每天早上仍会走过这片老街区，因为他不喜欢一个人待在家里。',
      '我听着，不时点头，我们之间的沉默消失了。我们聊了四十分钟。他很有耐心地回答我的问题，我了解到他有三个孙辈。他给了我一句忠告：「趁还来得及，多和身边的人说说话。」',
      '公交车终于来了，我们一起上了车。他讲起他从小长大的那条街，我也明白了他为什么每天早上还从那条街走过。说真的，一生的故事可以藏在一张熟悉的面孔后面。现在我们保持着联系，那个雨天的回忆会一直陪着我。'
    ],
    vocabulary: [
      {
        w: 'umbrella',
        ph: '/ʌmˈbrelə/',
        pos: 'n.',
        cn: '雨伞',
        col: 'take an umbrella — 带伞；under an umbrella — 在伞下',
        ex: 'Take an umbrella with you; it may rain.'
      },
      {
        w: 'shelter',
        ph: '/ˈʃeltə/',
        pos: 'n./v.',
        cn: '遮蔽处、躲避处；躲避',
        col: 'take shelter from the rain — 躲雨；a bus shelter — 公交候车亭',
        ex: 'We took shelter under a tree.'
      },
      {
        w: 'storm',
        ph: '/stɔːm/',
        pos: 'n.',
        cn: '暴风雨',
        col: 'a heavy storm — 一场大暴风雨；after the storm — 暴风雨之后',
        ex: 'The storm stopped all the buses.'
      },
      {
        w: 'pour',
        ph: '/pɔː/',
        pos: 'v.',
        cn: '倾泻、下个不停',
        col: 'pour down — 倾泻而下；the rain pours — 大雨倾盆',
        ex: 'It was pouring all night.'
      },
      {
        w: 'familiar',
        ph: '/fəˈmɪliə/',
        pos: 'adj.',
        cn: '熟悉的',
        col: 'look familiar — 看着眼熟；be familiar to sb. — 为某人所熟悉',
        ex: 'His face looks familiar to me.'
      },
      {
        w: 'mention',
        ph: '/ˈmenʃn/',
        pos: 'v.',
        cn: '提到、说起',
        col: 'mention that … — 提到……；not to mention — 更不用说',
        ex: 'She mentioned that she was busy that day.'
      },
      {
        w: 'neighborhood',
        ph: '/ˈneɪbəhʊd/',
        pos: 'n.',
        cn: '街区、社区',
        col: 'in the neighborhood — 在附近；an old neighborhood — 老街区',
        ex: 'This neighborhood is quiet in the morning.'
      },
      {
        w: 'retire',
        ph: '/rɪˈtaɪə/',
        pos: 'v.',
        cn: '退休',
        col: 'retire from a job — 从工作岗位退休；retire last year — 去年退休',
        ex: 'My father retired after forty years of work.'
      },
      {
        w: 'nod',
        ph: '/nɒd/',
        pos: 'v.',
        cn: '点头',
        col: 'nod one’s head — 点头；nod with a smile — 微笑着点头',
        ex: 'He nodded and said nothing.'
      },
      {
        w: 'silence',
        ph: '/ˈsaɪləns/',
        pos: 'n.',
        cn: '沉默、寂静',
        col: 'a long silence — 长久的沉默；in silence — 沉默地',
        ex: 'There was a short silence after the question.'
      },
      {
        w: 'lifetime',
        ph: '/ˈlaɪftaɪm/',
        pos: 'n.',
        cn: '一生、终生',
        col: 'in one’s lifetime — 在某人一生中；a lifetime of work — 一辈子的工作',
        ex: 'He told stories from a lifetime of work.'
      },
      {
        w: 'memory',
        ph: '/ˈmeməri/',
        pos: 'n.',
        cn: '记忆、回忆',
        col: 'keep a memory — 留住一段回忆；bring back memories — 唤起回忆',
        ex: 'That trip is a happy memory for me.'
      }
    ],
    phrases: [
      {
        en: 'take shelter (from)',
        cn: '躲避（风雨等）',
        ex: 'We took shelter from the rain under a tree.'
      },
      {
        en: 'strike up a conversation',
        cn: '和……攀谈起来',
        ex: 'He struck up a conversation with the man next to him.'
      },
      {
        en: 'get stuck',
        cn: '被困住、动弹不得',
        ex: 'We got stuck at the bus stop for two hours.'
      },
      {
        en: 'for a while',
        cn: '一会儿、一阵子',
        ex: 'We waited for a while and then walked home.'
      },
      {
        en: 'on foot',
        cn: '步行',
        ex: 'The buses stopped, so we went home on foot.'
      },
      {
        en: 'by accident',
        cn: '偶然、无意中',
        ex: 'We met by accident at the bus stop.'
      },
      {
        en: 'keep in touch (with)',
        cn: '（与……）保持联系',
        ex: 'We have kept in touch ever since.'
      },
      {
        en: 'find out',
        cn: '了解到、查明',
        ex: 'I found out that he grew up here.'
      },
      {
        en: 'chat with',
        cn: '和……闲聊',
        ex: 'She chatted with her neighbors for a while.'
      }
    ],
    writings: [
      {
        expr: 'To be honest, ...',
        cn: '说实话……',
        meaning: '先说出自己真实的想法或感受，再讲原因，语气真诚。',
        context: '观点类口语或记叙文的自我评价处：先表态，再解释。',
        alts: [
          {
            t: 'Honestly speaking, ...',
            n: '更书面'
          },
          {
            t: 'To tell the truth, ...',
            n: '同义，稍长'
          },
          {
            t: 'Actually, ...',
            n: '最口语化'
          }
        ],
        register: '中性偏口语，写作里也常见。',
        example: 'To be honest, I was afraid to speak to him first.'
      },
      {
        expr: 'The truth is that ...',
        cn: '实情是……、说真的……',
        meaning: '用一句话点破事情的真相或自己的真实看法。',
        context: '结尾段或段落末尾：故事讲完之后，用它收出一句实话。',
        alts: [
          {
            t: 'The fact is that ...',
            n: '更强调事实'
          },
          {
            t: 'What is true is that ...',
            n: '语气稍缓'
          },
          {
            t: 'In fact, ...',
            n: '最简单'
          }
        ],
        register: '中性，口语和写作都好用。',
        example: 'The truth is that a short talk can change the way you see a person.'
      }
    ],
    sentences: [
      {
        text: 'I had seen this old man at the bus stop almost every morning for two years, but we had never said a word to each other.',
        points: [
          '<b>主干</b>：I had seen this old man 与 we had never said a word 由 but 连接成两个并列分句，前后形成对比。',
          '<b>时态层次</b>：前半句用过去完成时 had seen，表示“在开口之前那两年里一直见到”；后半句 had never said 同样是过去完成时，强调“到那时为止从没说过话”。',
          '<b>时间状语</b>：almost every morning 与 for two years 分别交代频率和长度，让“从没说过话”这件小事更有分量。',
          '<b>为什么值得学</b>：这是记叙文写“熟悉却陌生”的经典句式，两个完成时分句就把人物关系交代清楚了。',
          '<b>常见变体</b>：I often saw him, but we never spoke.（更简单，全用一般过去时）'
        ]
      },
      {
        text: 'He talked about the street where he had grown up, and I understood why he still walked past it every morning.',
        points: [
          '<b>主干</b>：He talked about the street 与 I understood … 由 and 连接成并列句。',
          '<b>where he had grown up</b>：定语从句修饰 the street，where 相当于 in which，过去完成时表示“在更早之前长大”。',
          '<b>why he still walked past it every morning</b>：作 understood 的宾语从句，回答“明白了什么”。',
          '<b>为什么值得学</b>：一句话里同时出现定语从句和宾语从句，是四级长句的典型结构，写人记事时可以用它把人物、地方和习惯串起来。',
          '<b>注意</b>：it 指代上文的 the street，写同类句子时先把被指代的名词放在前面。'
        ]
      }
    ],
    questions: [
      {
        en: 'Why did the buses stop running that evening?',
        cn: '那天晚上为什么公交车停运了？',
        ans: 'Because a storm hit the city and buses stopped for two hours.',
        ansCn: '因为暴风雨袭击了城市，公交车要停运两个小时。'
      },
      {
        en: 'How long had the writer seen the old man at the bus stop before they spoke?',
        cn: '在开口说话之前，作者在公交站见到这位老人多久了？',
        ans: 'For two years, almost every morning.',
        ansCn: '两年了，几乎每天早上都见到他。'
      },
      {
        en: 'What can we infer about the old man’s life now?',
        cn: '从文中可以推出这位老人现在的生活是什么样的？',
        ans: 'He is retired and lives alone, and he keeps walking through the old neighborhood every morning because he does not like staying at home alone.',
        ansCn: '他已经退休、一个人住，每天早上仍去老街区走走，因为他不喜欢独自待在家里。'
      },
      {
        en: 'What is the function of the second paragraph in the story?',
        cn: '第二段在故事里起什么作用？',
        ans: 'It explains why everyone had to stay at the bus stop for a long time, which gave the writer the chance to talk to the old man.',
        ansCn: '它交代大家为什么要在公交站待很久，这才给了作者和老人说话的机会。'
      },
      {
        en: 'In the last paragraph, what does “it” in “walked past it every morning” refer to?',
        cn: '最后一段里“每天早上从它旁边走过”的“它”指的是什么？',
        ans: 'It refers to the street where the old man had grown up.',
        ansCn: '指的是老人从小长大的那条街。'
      }
    ],
    writingTask: {
      en: 'Write 60–80 words about a conversation with someone you see often but never talk to.',
      hints: [
        'I had seen ... for ..., but ...',
        'To be honest, ...',
        'He mentioned that ...',
        'The truth is that ...'
      ],
      hintCn: '用 4–6 句话写一次和“熟悉的陌生人”的交谈：先写见过多久却没说过话，再写怎么开口、聊了什么，最后写一句自己的真实感受。',
      req: '至少使用 1 个本篇学过的词或搭配（familiar / stranger / mention / strike up a conversation / keep in touch）。'
    },
    speakingTask: {
      en: 'Do you often talk to strangers? Answer the question in 45 seconds and give one reason.',
      points: [
        'Your answer',
        'One reason',
        'One small example'
      ],
      pointCn: '先明确回答会不会，再给一个理由，最后举一个自己的小例子。',
      skeleton: 'To be honest, I ... That is because ... For example, ...'
    },
    focus: [
      '<b>新授核心词 12 个</b>：<span class=\'en\'>umbrella, shelter, storm, pour, familiar, mention, neighborhood, retire, nod, silence, lifetime, memory</span> —— <b>familiar</b> 只作表语或定语，说“对某人熟悉”用 <b>be familiar to sb.</b>；<b>mention</b> 后面直接跟宾语或从句，不加介词；<b>memory</b> 可数，一段回忆就是 a memory；<b>retire</b> 常说 retire from …。',
      '<b>本篇复现的旧词</b>：第 3 篇的 <span class=\'en\'>patient</span>（耐心回答）、第 5 篇的 <span class=\'en\'>weather</span>（从天气聊起）、第 9 篇的 <span class=\'en\'>notice / stranger / community / offer / kind</span>（公交站里的邻里场景）—— 都是“人与人”场景里的老词，看到灰点先自己说意思。',
      '<b>叙事骨架</b>：环境（大雨、停运）→ 熟悉却陌生（两年没说话）→ 开口（从天气聊起）→ 听到故事（工厂、老街）→ 收束（一生的故事藏在一张脸后面）。写“和陌生人的一次交谈”就照这个顺序。',
      '<b>两个写作表达</b>：<span class=\'en\'>To be honest, …</span> 先真诚表态；<span class=\'en\'>The truth is that …</span> 收出一句实话。一个放在开口处，一个放在结尾段。',
      '<b>题型提醒</b>：指代题（第 5 题）把代词还原成具体名词，答案一般就在本句或上一句；段落作用题（第 4 题）要答“写了什么 + 为什么这样写”两层。'
    ],
    standard: {
      time: '约 30 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 12 个核心词遮住中文说出 ≥ 9 · 9 个搭配掌握 7 个 · 完成 60–80 词写作与 45 秒口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 12 个核心词中的 9 个（familiar、mention、silence、lifetime …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '9 个高频搭配掌握 7 个，能各造一句（strike up a conversation、get stuck、keep in touch …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 I had seen … but we had never … 的过去完成时对比，并仿写一句“见过却没说过话”的句子',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；第 3 题要能说出推断的依据',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 60–80 词，至少用上 To be honest, … 或 The truth is that …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '45 秒说清「会不会和陌生人说话」的立场，并给出一个理由和一个小例子',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 7 处灰点旧词，说出其中 5 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 17,
    slug: '017-when-the-internet-was-gone',
    title: 'When the Internet Was Gone',
    titleCn: '断网的那两天',
    stage: '阶段二 · 基础过渡',
    stageRange: '第 11–20 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 300 词'
      },
      {
        k: '新词密度',
        v: '约 3.7%'
      },
      {
        k: '长难句',
        v: '2 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/017.jpg',
    coverCredit: 'Photo: Matthias Polen / Pexels',
    body: [
      'At six o’clock on Friday evening, a typhoon hit our city, and the Internet in our building was <span class="w-phrase" data-cn="中断、被切断">cut off</span>. I did not think it was a big problem at first, because I still had power, food and a warm bed.',
      'But twenty minutes later, I picked up my phone for the tenth time. Nothing loaded. The <span class="w-cet4" data-cn="信号">signal</span> was gone, my <span class="w-cet4" data-cn="设备">devices</span> were useless, and I felt <span class="w-synonym" data-cn="＝ nervous 的替换词">anxious</span> without knowing why.',
      'The first night was long. I walked around the room and checked the <span class="w-cet4" data-cn="网络连接">connection</span> again and again, hoping it would <span class="w-phrase" data-cn="恢复正常">go back to normal</span> by itself. It made me think about how much time I usually <span class="w-rev">waste</span> online.',
      '<span class="w-writing" data-cn="随着时间推移……">As time went by</span>, I stopped watching the clock. <span class="w-sentence">With no messages to answer and no endless videos to watch, I made breakfast slowly, tidied my room, and finished the book that had been on my desk for a month.</span>',
      'In the afternoon, my neighbor’s two children came to our home because they were <span class="w-cet4" data-cn="无聊的">bored</span>. We <span class="w-phrase" data-cn="轮流">took turns</span> telling stories, and the little boy asked me to <span class="w-phrase" data-cn="陪伴某人">keep him company</span> while he drew. For two hours nobody looked at a <span class="w-cet4" data-cn="屏幕">screen</span>, and nothing <span class="w-rev">distracted</span> us.',
      '<span class="w-writing" data-cn="就在那时我意识到……">That is when I realized</span> something <span class="w-cet4" data-cn="有价值的">valuable</span>: the problem was not my phone but my <span class="w-cet4" data-cn="日常习惯、生活节奏">routine</span>. So I wrote a simple <span class="w-rev">schedule</span> for my evenings: study first, read for half an hour, and <span class="w-phrase" data-cn="关掉（电器、屏幕）">turn off</span> the screen before bed. I also wanted to <span class="w-rev">balance</span> study and rest, so life could move at a slower <span class="w-cet4" data-cn="节奏">pace</span>.',
      'The Internet came back on Sunday afternoon, and hundreds of <span class="w-cet4" data-cn="最新消息、动态">updates</span> poured in at once. <span class="w-sentence">It was only when the Internet was gone that I noticed the books on my desk.</span> Now I <span class="w-cet4" data-cn="更喜欢">prefer</span> reading to videos, my <span class="w-rev">mood</span> is better, and I am learning to <span class="w-rev">reduce</span> the time I spend online.'
    ],
    translation: [
      '星期五傍晚六点，台风袭击了我们城市，我们楼里的网络被切断了。我起初没觉得是多大的问题，因为我还有电、有吃的、有温暖的床。',
      '可二十分钟后，我第十次拿起了手机。什么也刷不出来。信号没了，我的设备全成了摆设，我也说不清为什么，只觉得焦虑。',
      '第一夜很难熬。我在房间里走来走去，一遍又一遍地检查网络连接，盼着它自己恢复正常。这让我想到，平时我在网上浪费了多少时间。',
      '随着时间过去，我不再盯着钟看。没有消息要回，也没有没完没了的视频要看，我慢慢做了一顿早饭，收拾了房间，还读完了那本在桌上放了一个月的书。',
      '下午，邻居家的两个孩子来我们家，因为他们觉得无聊。我们轮流讲故事，小男孩让我陪着他画画。整整两个小时，没有人看屏幕，也没有任何事让我们分心。',
      '就在那时我意识到一件很有价值的事：问题不在手机，而在我的日常习惯。于是我给晚上写了一份简单的安排：先学习，读半小时书，睡前关掉屏幕。我也想把学习和休息平衡好，让生活以更慢的节奏往前走。',
      '星期天下午，网络恢复了，成百上千条消息一下子涌了进来。只有当网络断掉的时候，我才注意到桌上的那些书。现在我更喜欢读书而不是看视频，心情也好多了，我正在慢慢减少上网的时间。'
    ],
    vocabulary: [
      {
        w: 'signal',
        ph: '/ˈsɪɡnəl/',
        pos: 'n.',
        cn: '信号',
        col: 'lose the signal — 失去信号；a weak signal — 微弱的信号',
        ex: 'There was no signal inside the building.'
      },
      {
        w: 'device',
        ph: '/dɪˈvaɪs/',
        pos: 'n.',
        cn: '设备、装置',
        col: 'an electronic device — 电子设备；use a device — 使用设备',
        ex: 'My devices were useless without the Internet.'
      },
      {
        w: 'connection',
        ph: '/kəˈnekʃn/',
        pos: 'n.',
        cn: '连接、网络连接',
        col: 'lose the connection — 断网；a slow connection — 网速慢',
        ex: 'The connection came back on Sunday.'
      },
      {
        w: 'endless',
        ph: '/ˈendləs/',
        pos: 'adj.',
        cn: '没完没了的',
        col: 'endless messages — 没完没了的消息；seem endless — 显得没完没了',
        ex: 'I was tired of the endless videos.'
      },
      {
        w: 'bored',
        ph: '/bɔːd/',
        pos: 'adj.',
        cn: '无聊的、厌倦的',
        col: 'get bored — 变得无聊；be bored with — 对……感到厌倦',
        ex: 'The children were bored on rainy afternoons.'
      },
      {
        w: 'screen',
        ph: '/skriːn/',
        pos: 'n.',
        cn: '屏幕',
        col: 'look at the screen — 看屏幕；turn off the screen — 关掉屏幕',
        ex: 'Do not look at the screen before bed.'
      },
      {
        w: 'routine',
        ph: '/ruːˈtiːn/',
        pos: 'n.',
        cn: '日常习惯、生活节奏',
        col: 'a daily routine — 日常作息；break the routine — 打破习惯',
        ex: 'A good routine helps you sleep well.'
      },
      {
        w: 'valuable',
        ph: '/ˈvæljuəbl/',
        pos: 'adj.',
        cn: '有价值的',
        col: 'a valuable lesson — 有价值的一课；valuable advice — 有价值的建议',
        ex: 'He gave me some valuable advice.'
      },
      {
        w: 'pace',
        ph: '/peɪs/',
        pos: 'n.',
        cn: '节奏、步速',
        col: 'at a slow pace — 以缓慢的节奏；keep pace with — 跟上……的步伐',
        ex: 'Life moved at a slower pace that weekend.'
      },
      {
        w: 'update',
        ph: '/ˈʌpdeɪt/',
        pos: 'n./v.',
        cn: '更新、最新消息',
        col: 'check for updates — 查看更新；the latest update — 最新消息',
        ex: 'Hundreds of updates poured in when the Internet returned.'
      },
      {
        w: 'prefer',
        ph: '/prɪˈfɜː/',
        pos: 'v.',
        cn: '更喜欢',
        col: 'prefer A to B — 更喜欢前者而不是后者；prefer doing sth. — 更喜欢做某事',
        ex: 'I prefer reading to watching videos.'
      }
    ],
    phrases: [
      {
        en: 'cut off',
        cn: '中断、切断',
        ex: 'The storm cut off the electricity in our street.'
      },
      {
        en: 'go back to normal',
        cn: '恢复正常',
        ex: 'Everything went back to normal after the storm.'
      },
      {
        en: 'take turns',
        cn: '轮流',
        ex: 'We took turns telling stories.'
      },
      {
        en: 'keep … company',
        cn: '陪伴……',
        ex: 'I kept the little boy company while he drew.'
      },
      {
        en: 'turn off',
        cn: '关掉（电器、屏幕）',
        ex: 'Turn off the screen before you go to bed.'
      },
      {
        en: 'make up for',
        cn: '弥补',
        ex: 'I want to make up for the time I wasted.'
      },
      {
        en: 'sooner or later',
        cn: '迟早',
        ex: 'The Internet will come back sooner or later.'
      },
      {
        en: 'come up with',
        cn: '想出（办法、主意）',
        ex: 'She came up with a good plan.'
      },
      {
        en: 'be used to doing sth.',
        cn: '习惯于做某事',
        ex: 'I am used to reading before bed.'
      }
    ],
    writings: [
      {
        expr: 'As time went by, ...',
        cn: '随着时间推移……',
        meaning: '表示时间一点点过去，后面接随之发生的变化，谓语常用一般过去时。',
        context: '记叙文的中段过渡：先写某个状态，再写它慢慢改变。',
        alts: [
          {
            t: 'As time passed, ...',
            n: '同义'
          },
          {
            t: 'Gradually, ...',
            n: '更短，直接修饰动词'
          },
          {
            t: 'Little by little, ...',
            n: '强调变化缓慢'
          }
        ],
        register: '中性，记叙文和议论文都能用。',
        example: 'As time went by, I stopped checking my phone.'
      },
      {
        expr: 'That is when I realized that ...',
        cn: '就在那时我意识到……',
        meaning: '把“某个时刻 + 顿悟”写成一句话，强调认识发生的时间点。',
        context: '经历类文章的转折处或结尾之前：先写发生了什么，再写明白了什么。',
        alts: [
          {
            t: 'It was then that I realized that ...',
            n: '强调句，更书面'
          },
          {
            t: 'That is the moment when I knew that ...',
            n: '更完整'
          },
          {
            t: 'Only then did I realize that ...',
            n: '倒装，语气更强'
          }
        ],
        register: '中性偏书面，结尾升华最好用。',
        example: 'That is when I realized that the problem was my routine.'
      }
    ],
    sentences: [
      {
        text: 'With no messages to answer and no endless videos to watch, I made breakfast slowly, tidied my room, and finished the book that had been on my desk for a month.',
        points: [
          '<b>主干</b>：I made breakfast, tidied my room, and finished the book，三个并列谓语用逗号和 and 排开，是典型的动作列举。',
          '<b>with + 名词 + to do</b>：With no messages to answer and no endless videos to watch 是介词 with 的复合结构作状语，说明当时的状态，可以译成“没有……要……”。',
          '<b>that had been on my desk for a month</b>：定语从句修饰 the book，过去完成时表示“在那之前已经放了一个月”。',
          '<b>为什么值得学</b>：一句话把“没有网络时做了什么”交代完整，是四级写作里“背景 + 三个动作”的实用模板。',
          '<b>常见变体</b>：With no messages to answer, I made breakfast slowly.（只留一个动作，句子更短）'
        ]
      },
      {
        text: 'It was only when the Internet was gone that I noticed the books on my desk.',
        points: [
          '<b>强调句型</b>：It was … that … 用来强调句子的某一部分，这里强调的是时间状语从句 only when the Internet was gone。',
          '<b>还原句子主干</b>：去掉强调框架后是 I noticed the books on my desk when the Internet was gone；only 提前后语气是“直到……才……”。',
          '<b>时态呼应</b>：前面的 was 与后面的 noticed 都在过去，强调句的时态要和原句一致。',
          '<b>为什么值得学</b>：强调句是四级写作与翻译的高频句型，比 It was not until … that … 更容易掌握，可以先练这一句式。',
          '<b>注意</b>：强调句里的 that 不能换成 when，只有强调的成分本身是时间状语从句时，从句里才会有 when。'
        ]
      }
    ],
    questions: [
      {
        en: 'How long was the Internet in the writer’s building cut off?',
        cn: '作者楼里的网络断了多久？',
        ans: 'From Friday evening to Sunday afternoon, about two days.',
        ansCn: '从星期五傍晚到星期天下午，大约两天。'
      },
      {
        en: 'What did the writer do on Saturday morning instead of going online?',
        cn: '星期六上午作者没上网，做了些什么？',
        ans: 'He made breakfast slowly, tidied his room, and finished a book.',
        ansCn: '他慢慢做了一顿早饭，收拾了房间，还读完了一本书。'
      },
      {
        en: 'What can we infer about the writer’s evenings before the typhoon?',
        cn: '从文中可以推出台风之前作者的晚上是怎么过的？',
        ans: 'Most of his evening went to messages and videos online, so he had little time left for reading.',
        ansCn: '晚上大部分时间都花在上网回消息、看视频上，几乎没时间读书。'
      },
      {
        en: 'What is the function of the fifth paragraph in the passage?',
        cn: '第五段在全文里起什么作用？',
        ans: 'It gives an example of how the writer spent the afternoon with people instead of a screen, which shows the change the outage brought.',
        ansCn: '它用一个具体例子写出作者下午是和人而不是和屏幕一起度过的，说明断网带来的变化。'
      },
      {
        en: 'In the third paragraph, what does “it” in “hoping it would go back to normal” refer to?',
        cn: '第三段里“盼着它自己恢复正常”的“它”指的是什么？',
        ans: 'It refers to the Internet connection in the writer’s building.',
        ansCn: '指的是作者楼里的网络连接。'
      }
    ],
    writingTask: {
      en: 'Write 60–80 words about a day or two without your phone or the Internet.',
      hints: [
        'At first, I ...',
        'As time went by, ...',
        'That is when I realized that ...',
        'Now I ...'
      ],
      hintCn: '用 4–6 句话写一次“没网”的一天或两天：先写起初的不安，再写后来做了什么，最后写自己明白了什么、现在有什么改变。',
      req: '至少使用 1 个本篇学过的词或搭配（routine / pace / turn off / cut off / go back to normal）。'
    },
    speakingTask: {
      en: 'Would life be better without the Internet? Answer the question in 45 seconds and give one reason.',
      points: [
        'Your answer',
        'One reason',
        'One small example'
      ],
      pointCn: '先明确回答会不会更好，再给一个理由，最后举一个自己的小例子。',
      skeleton: 'In my opinion, life would be better without the Internet because ... For example, ...'
    },
    focus: [
      '<b>新授核心词 11 个</b>：<span class=\'en\'>signal, device, connection, endless, bored, screen, routine, valuable, pace, update, prefer</span> —— <b>prefer A to B</b>（更喜欢 A 而不是 B）里的 to 是介词，后面接名词或动名词；<b>device</b> 可数；<b>update</b> 作名词指“更新、最新消息”；<b>pace</b> 常用搭配是 at a … pace。',
      '<b>本篇复现的旧词</b>：第 6 篇的 <span class=\'en\'>waste / distract / schedule / balance</span>（时间管理老词）、第 8 篇的 <span class=\'en\'>mood / reduce</span>（状态与减少）—— 正好是本篇主题词，看到灰点先自己说意思，再查它首次出现的篇目。',
      '<b>叙事骨架</b>：意外（断网）→ 焦虑（反复刷手机）→ 转折（时间变多）→ 观察（和人在一起）→ 重新安排（写下晚间安排）→ 收束（改变留下）。写“戒掉一种依赖”的经历，就照这条线排材料。',
      '<b>两个写作表达</b>：<span class=\'en\'>As time went by, …</span> 引出缓慢的变化；<span class=\'en\'>That is when I realized that …</span> 把“时刻 + 顿悟”写成一句，放在结尾段前最有力。',
      '<b>题型提醒</b>：指代题（第 5 题）要还原成本句或上一句里的具体名词（这里是网络连接）；推断题（第 3 题）的依据在“消息和视频”与“桌上放了一个月的书”这两处对比里。'
    ],
    standard: {
      time: '约 30 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 11 个核心词遮住中文说出 ≥ 8 · 9 个搭配掌握 7 个 · 完成 60–80 词写作与 45 秒口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 11 个核心词中的 8 个（routine、pace、prefer、valuable …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '9 个高频搭配掌握 7 个，能各造一句（cut off、go back to normal、take turns …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 It was only when … that … 的强调句结构，并用它仿写一句自己的经历',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；第 3 题要能说出推断的依据',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 60–80 词，至少用上 As time went by, … 或 That is when I realized that …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '45 秒说清「没有网络生活会不会更好」的立场，并给出一个理由和一个小例子',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 6 处灰点旧词，说出其中 4 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 18,
    slug: '018-a-choice-between-two-clubs',
    title: 'A Choice Between Two Clubs',
    titleCn: '两个社团之间的选择',
    stage: '阶段二 · 基础过渡',
    stageRange: '第 11–20 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 305 词'
      },
      {
        k: '新词密度',
        v: '约 3.6%'
      },
      {
        k: '长难句',
        v: '2 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/018.jpg',
    coverCredit: 'Photo: Monstera Production / Pexels',
    body: [
      'Last month I did something new: I <span class="w-cet4" data-cn="申请">applied</span> to two clubs at school in the same week. Both <span class="w-cet4" data-cn="接受">accepted</span> me, but instead of feeling happy, I felt worried. I had never made such a big choice.',
      'For a whole week I could not <span class="w-rev">decide</span>. Both <span class="w-cet4" data-cn="选项">options</span> looked good, so my friends gave different <span class="w-rev">advice</span>: the drama club was exciting, the hiking club was better for my health. I <span class="w-rev">compared</span> them again and again.',
      'Then an older student told me a simple <span class="w-cet4" data-cn="方法">method</span>: do not ask what you will get; ask what you will pay. The real question was how much time and <span class="w-rev">effort</span> each club would <span class="w-phrase" data-cn="占用（时间、精力）">take up</span> in my week.',
      'So I <span class="w-phrase" data-cn="列一张清单">made a list</span> for each club: meetings, homework and money. The drama club wanted three evenings a week. The hiking club wanted one weekend a month and money for a bus ticket. Then I put the two lists <span class="w-phrase" data-cn="并排、并排放着">side by side</span>. The <span class="w-cet4" data-cn="数量">amount</span> of work was clear, and so was my time <span class="w-cet4" data-cn="限度、限制">limit</span>.',
      '<span class="w-sentence">When I saw the two lists together, the choice became easy, because I knew what each club would ask of me.</span> That night I <span class="w-synonym" data-cn="＝ at last 的替换词">finally</span> <span class="w-phrase" data-cn="下定决心">made up my mind</span>.',
      'I <span class="w-cet4" data-cn="更偏好、更喜欢">preferred</span> the drama club, but three evenings a week was too much this term. <span class="w-writing" data-cn="因此、结果">As a result</span>, I chose the hiking club and wrote an <span class="w-rev">honest</span> letter to <span class="w-rev">turn down</span> the other place. My parents said the <span class="w-cet4" data-cn="决定">decision</span> was mine, as long as I was <span class="w-cet4" data-cn="负责的">responsible</span> for it. I made a <span class="w-cet4" data-cn="承诺">promise</span> to myself: one club only.',
      '<span class="w-writing" data-cn="说到底、其实">The truth is that</span> a good choice is not about getting everything; it is about knowing what you give up. <span class="w-sentence">It is better to do one thing well than to do two things badly.</span> The <span class="w-rev">benefit</span> is real: I <span class="w-cet4" data-cn="重视、珍惜">value</span> my free time, and I never <span class="w-rev">waste</span> my evenings again.'
    ],
    translation: [
      '上个月我做了一件新鲜事：同一周里，我向学校的两个社团递交了申请。两个社团都接受了我，可我非但不高兴，反而很担心。我从没做过这么大的一个选择。',
      '整整一个星期我都定不下来。两个选项看上去都不错，朋友们给出的意见也各不相同：话剧社更刺激，徒步社对身体更好。我把它们比较了一遍又一遍。',
      '后来一位学姐教了我一个简单的办法：别问你能得到什么，要问你要付出什么。真正的问题是，每个社团会从我的一周里占用多少时间和精力。',
      '于是我给每个社团列了一张清单：开会、作业和钱。话剧社要求每周三个晚上。徒步社要求每月一个周末，还要一点买车票的钱。然后我把两张清单并排放好。工作量清清楚楚，我的时间限制也是。',
      '等我把两张清单放在一起看，选择一下子变容易了，因为我明白了每个社团会向我要什么。那天晚上我终于下定了决心。',
      '我更喜欢话剧社，可这学期每周三个晚上实在太多。于是我选了徒步社，写了一封真诚的信，婉拒了另一个名额。父母说，这个决定是我的，只要我为它负责就好。我对自己许下承诺：只参加一个社团。',
      '说到底，好的选择不是什么都得到，而是知道自己放弃了什么。宁可把一件事做好，也不要两件事都做砸。好处实在：我现在珍惜自己的空闲时间，再也不浪费一个个晚上。'
    ],
    vocabulary: [
      {
        w: 'apply',
        ph: '/əˈplaɪ/',
        pos: 'v.',
        cn: '申请；应用',
        col: 'apply for sth. — 申请某物；apply a rule — 应用一条规则',
        ex: 'I applied to two clubs last month.'
      },
      {
        w: 'accept',
        ph: '/əkˈsept/',
        pos: 'vt.',
        cn: '接受',
        col: 'accept an offer — 接受邀请；accept the result — 接受结果',
        ex: 'Both clubs accepted me in the same week.'
      },
      {
        w: 'option',
        ph: '/ˈɒpʃn/',
        pos: 'n.',
        cn: '选项、可选择的东西',
        col: 'two options — 两个选项；have no option — 别无选择',
        ex: 'Both options looked good at first.'
      },
      {
        w: 'prefer',
        ph: '/prɪˈfɜː(r)/',
        pos: 'v.',
        cn: '更喜欢、偏好',
        col: 'prefer A to B — 喜欢甲胜过乙；prefer to do sth. — 更愿意做某事',
        ex: 'I preferred the drama club, but I chose the other one.'
      },
      {
        w: 'method',
        ph: '/ˈmeθəd/',
        pos: 'n.',
        cn: '方法、办法',
        col: 'a simple method — 一个简单的方法；by this method — 用这个办法',
        ex: 'She told me a simple method for making a choice.'
      },
      {
        w: 'amount',
        ph: '/əˈmaʊnt/',
        pos: 'n.',
        cn: '数量、总额',
        col: 'the amount of … — ……的数量；a large amount of — 大量的',
        ex: 'The amount of work was clear on the paper.'
      },
      {
        w: 'limit',
        ph: '/ˈlɪmɪt/',
        pos: 'n./v.',
        cn: '限度、限制；限制',
        col: 'a time limit — 时间上的限制；limit the cost — 限制花费',
        ex: 'My free time has a limit.'
      },
      {
        w: 'responsible',
        ph: '/rɪˈspɒnsəbl/',
        pos: 'adj.',
        cn: '负责的、有责任心的',
        col: 'be responsible for … — 对……负责（介词用 for）；a responsible person — 一个有责任心的人',
        ex: 'I am responsible for my own decision.'
      },
      {
        w: 'decision',
        ph: '/dɪˈsɪʒn/',
        pos: 'n.',
        cn: '决定、决心',
        col: 'make a decision — 做决定；a hard decision — 一个艰难的决定',
        ex: 'In the end, my decision was clear.'
      },
      {
        w: 'promise',
        ph: '/ˈprɒmɪs/',
        pos: 'n./v.',
        cn: '承诺、答应',
        col: 'make a promise — 做出承诺；promise to do sth. — 承诺做某事',
        ex: 'I made a promise to myself.'
      },
      {
        w: 'value',
        ph: '/ˈvæljuː/',
        pos: 'n./v.',
        cn: '价值；重视、珍惜',
        col: 'value your time — 珍惜你的时间；be of great value — 很有价值',
        ex: 'I value my free time more now.'
      }
    ],
    phrases: [
      {
        en: 'apply for',
        cn: '申请（名额、机会等）',
        ex: 'I applied for a place in the club.'
      },
      {
        en: 'make a list',
        cn: '列一张清单',
        ex: 'Make a list before you decide.'
      },
      {
        en: 'side by side',
        cn: '并排、并排放在一起',
        ex: 'I put the two lists side by side.'
      },
      {
        en: 'take up',
        cn: '占用（时间、空间）',
        ex: 'The job takes up too much of my week.'
      },
      {
        en: 'make up my mind',
        cn: '下定决心、拿定主意',
        ex: 'I finally made up my mind.'
      },
      {
        en: 'turn down',
        cn: '拒绝（邀请、提议）',
        ex: 'He turned down the place with a letter.'
      },
      {
        en: 'in the end',
        cn: '最后、最终',
        ex: 'In the end, I chose the hiking club.'
      },
      {
        en: 'be responsible for',
        cn: '对……负责',
        ex: 'You must be responsible for your choice.'
      },
      {
        en: 'make a promise',
        cn: '做出承诺',
        ex: 'She made a promise to herself.'
      },
      {
        en: 'give up',
        cn: '放弃',
        ex: 'A good choice is about knowing what you give up.'
      },
      {
        en: 'as long as',
        cn: '只要',
        ex: 'You can join as long as you come every week.'
      }
    ],
    writings: [
      {
        expr: 'The truth is that ...',
        cn: '说到底、其实……',
        meaning: '用一个固定的判断句开头，把前文的具体叙述收束成一句结论。',
        context: '记叙文或观点文的结尾段，后面直接写你想说的道理。',
        alts: [
          {
            t: 'In fact, ...',
            n: '更中性，语气稍弱'
          },
          {
            t: 'The point is that ...',
            n: '重点在于……'
          },
          {
            t: 'What is true is that ...',
            n: '更书面，主语从句版'
          }
        ],
        register: '中性，写作与口语都常用。',
        example: 'The truth is that a good choice is not about getting everything.'
      },
      {
        expr: 'As a result, ...',
        cn: '因此、结果……',
        meaning: '承接前一句的原因，引出结果；前后必须真的是因果关系，不能随便当过渡词用。',
        context: '段落中间的过渡句：先写原因，再用它引出结果。',
        alts: [
          {
            t: 'Therefore, ...',
            n: '更书面'
          },
          {
            t: 'So, ...',
            n: '最口语'
          },
          {
            t: 'That is why ...',
            n: '第 2 篇已学，后接结果句'
          }
        ],
        register: '中性偏书面，因果段必备。',
        example: 'Three evenings a week was too much. As a result, I chose the other club.'
      }
    ],
    sentences: [
      {
        text: 'When I saw the two lists together, the choice became easy, because I knew what each club would ask of me.',
        points: [
          '<b>主干</b>：the choice became easy（主语 + 系动词 + 表语）。句首的 When I saw the two lists together 是<b>时间状语从句</b>。',
          '<b>because 引导原因状语从句</b>：说明「变容易」的原因不是题目变简单了，而是我弄清了每个选项的代价。',
          '<b>what each club would ask of me</b> 是 knew 后面的<b>宾语从句</b>；what 同时作 ask 的宾语（ask sth. of sb. 向某人要某物）。',
          '<b>为什么值得学</b>：一句话里叠了时间从句、原因从句、宾语从句三层，是四级阅读长句最常见的模型；写「做决定」的作文可以直接套。',
          '<b>常见变体</b>：把原因从句提到句首 —— Because I knew what each club would ask of me, the choice became easy.'
        ]
      },
      {
        text: 'It is better to do one thing well than to do two things badly.',
        points: [
          '<b>主干</b>：It is better to do A than to do B。it 是<b>形式主语</b>，真正的主语是后面的不定式短语。',
          '<b>better … than …</b>：两者之间取舍；than 前后结构要对称（to do … than to do …），这是比较句的硬要求。',
          '<b>为什么值得学</b>：这是「取舍类」作文的万能句，把「不要贪多」说得又短又有力，比用两个否定句更像地道英文。',
          '<b>注意</b>：than 后面的 to 可以省略（than do two things badly），但考试写作里写全更稳妥。',
          '<b>常见变体</b>：It is better to give up one thing than to fail at both. / It is better to start early than to hurry at the last minute.'
        ]
      }
    ],
    questions: [
      {
        en: 'What did the older student tell the writer to ask?',
        cn: '那位学姐让作者问自己什么问题？',
        ans: 'Not what he would get from a club, but what he would pay — how much time and effort each club would take up in his week.',
        ansCn: '别问能从社团得到什么，要问自己要付出什么——每个社团会占用一周里多少时间和精力。'
      },
      {
        en: 'What did the drama club and the hiking club each want from a member?',
        cn: '话剧社和徒步社各自要求成员付出什么？',
        ans: 'The drama club wanted three evenings a week, while the hiking club wanted one weekend a month and some money for a bus ticket.',
        ansCn: '话剧社要每周三个晚上；徒步社要每月一个周末，外加一点买车票的钱。'
      },
      {
        en: 'Why did the writer choose the hiking club in the end?',
        cn: '作者最后为什么选了徒步社？',
        ans: 'Because he knew what each club would cost and decided that three evenings a week was too much this term, so he gave up the club he liked more.',
        ansCn: '因为他看清了两个社团各自的代价，觉得这学期每周三个晚上太多，于是放弃了自己更喜欢的那一个。'
      },
      {
        en: 'What is the function of the third paragraph in the passage?',
        cn: '第三段在全文中起什么作用？',
        ans: 'It brings in the new question — what you will pay — which turns a hard choice into an easy one and leads to the two lists in the next paragraph.',
        ansCn: '它引出「你要付出什么」这个新问题，把难做的选择变简单，并引出下一段的两张清单。'
      },
      {
        en: 'In paragraph 6, what does “it” in “as long as I was responsible for it” refer to?',
        cn: '第六段里「只要我为它负责」中的「它」指的是什么？',
        ans: 'It refers to the writer’s own decision about which club to join.',
        ansCn: '指的是作者自己做出的那个决定——参加哪一个社团。'
      }
    ],
    writingTask: {
      en: 'Write 60–80 words about a choice you had to make between two things.',
      hints: [
        'Last month I ...',
        'The truth is that ...',
        'It is better to ... than to ...',
        'As a result, ...'
      ],
      hintCn: '用 4–6 句话写一次「二选一」：先写两个选项各要你付出什么，再写你用什么办法下决心，最后写你明白了什么。',
      req: '至少使用 2 个本篇学过的词或搭配（apply / option / take up / make up my mind / the truth is that）。'
    },
    speakingTask: {
      en: 'When you have to choose between two things, do you decide quickly or slowly? Answer the question in 45 seconds and give one reason.',
      points: [
        'Your answer',
        'One reason',
        'One small example'
      ],
      pointCn: '先明确回答「快」还是「慢」，再给一个理由，最后举一个自己的小例子。',
      skeleton: 'I usually decide ... because ... For example, when I had to choose between ... and ..., I ...'
    },
    focus: [
      '<b>新授核心词 11 个</b>：<span class=\'en\'>apply, accept, option, prefer, method, amount, limit, responsible, decision, promise, value</span> —— 注意 <span class=\'en\'>decide → decision</span> 的词性转换；<span class=\'en\'>be responsible for</span> 的介词只能用 for；<span class=\'en\'>promise</span> 名词动词两用（make a promise / promise to do）。',
      '<b>本篇复现的旧词</b>：第 1 篇的 <span class=\'en\'>benefit</span>、第 3 篇的 <span class=\'en\'>advice / honest</span>、第 4 篇的 <span class=\'en\'>compare</span>、第 5 篇的 <span class=\'en\'>decide</span>、第 6 篇的 <span class=\'en\'>waste</span>、第 10 篇的 <span class=\'en\'>effort</span>、第 11 篇的 <span class=\'en\'>turn down</span> —— 灰点 8 处，看到灰点先自己说意思再往下读。',
      '<b>取舍句型</b>：<span class=\'en\'>It is better to do one thing well than to do two things badly.</span> 形式主语 it + 比较结构，than 前后结构必须对称；凡是写「二选一」的作文都能套这一句。',
      '<b>决策三件套搭配</b>：<span class=\'en\'>take up</span>（占用时间）、<span class=\'en\'>make a list</span>（列清单）、<span class=\'en\'>make up my mind</span>（下决心）—— 再加 <span class=\'en\'>side by side</span>（并排对比），就是完整的决策流程。',
      '<b>全文逻辑线与题型提醒</b>：纠结一周 → 学来新问法（问代价）→ 列清单对比 → 取舍（放弃更喜欢的）→ 收束（好的选择是知道自己放弃了什么）。段落作用题答「写了什么 + 为什么这样写」两层；指代题把代词还原成本段里的具体名词。'
    ],
    standard: {
      time: '约 30 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 11 个核心词遮住中文说出 ≥ 8 · 会用 It is better to … than to … · 完成 60–80 词写作与 45 秒口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 11 个核心词中的 8 个（apply、option、prefer、decision、responsible …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '11 个高频搭配掌握 8 个，能各造一句（take up、make a list、make up my mind …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 When I saw the two lists together, … 的三层结构（时间从句 + 原因从句 + 宾语从句），并仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；第 3 题要能说出推断依据，第 5 题要指对指代对象',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 60–80 词，至少用上 The truth is that … 或 It is better to … than to …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '45 秒说清自己「快决定还是慢决定」，并给出一个理由和一个小例子',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 8 处灰点旧词，说出其中 5 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 19,
    slug: '019-the-neighbors-garden',
    title: 'The Neighbors’ Garden',
    titleCn: '邻居们的花园',
    stage: '阶段二 · 基础过渡',
    stageRange: '第 11–20 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 315 词'
      },
      {
        k: '新词密度',
        v: '约 3.8%'
      },
      {
        k: '长难句',
        v: '2 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/019.jpg',
    coverCredit: 'Photo: Berna / Pexels',
    body: [
      'The <span class="w-cet4" data-cn="空的、没人用的">empty</span> <span class="w-cet4" data-cn="角落">corner</span> under my building has looked the same for years: broken chairs, old bags, and a lot of <span class="w-cet4" data-cn="垃圾">rubbish</span>. Every time I passed it, I <span class="w-rev">noticed</span> it, and then I forgot it. Nobody thought it could be anything else.',
      'One Saturday morning, three <span class="w-cet4" data-cn="志愿者">volunteers</span> from the building came down with bags and <span class="w-cet4" data-cn="工具">tools</span>. They <span class="w-rev">offered</span> me gloves, but I said I was busy and went back to my window. From there I watched them <span class="w-cet4" data-cn="收拾、整理">tidy</span> the corner.',
      '<span class="w-sentence">I told myself that a garden was something other people built, not something a passer-by like me could help with.</span> Every weekend they came back and worked for hours. Little by little they <span class="w-phrase" data-cn="把……变成……">turned the corner into</span> a place for young <span class="w-cet4" data-cn="植物">plants</span>, and every green leaf showed their <span class="w-rev">effort</span>.',
      'One evening an older neighbor asked me to <span class="w-phrase" data-cn="照料、照顾">take care of</span> the young plants for a week, because her family was away. It was a <span class="w-synonym" data-cn="＝ small 的替换词">tiny</span> job, but I said yes. Every evening I went down with a bottle of water and began to <span class="w-cet4" data-cn="想象">imagine</span> how the corner would look in summer.',
      'The next Saturday I <span class="w-phrase" data-cn="参加">took part in</span> the work myself. We <span class="w-rev">supported</span> one another with heavy bags, and an old man <span class="w-rev">encouraged</span> me when I wanted to stop. It was <span class="w-cet4" data-cn="令人愉快的">cheerful</span> work, and no one was in a hurry.',
      '<span class="w-writing" data-cn="随着时间推移">As time went by</span>, the corner became a real garden. We <span class="w-cet4" data-cn="修理">repaired</span> the broken fence, the flowers <span class="w-cet4" data-cn="生长">grew</span>, and on warm evenings people <span class="w-cet4" data-cn="聚集">gathered</span> there to talk. <span class="w-sentence">What surprised me was not the flowers themselves, but the people who now stopped there every evening.</span> I was <span class="w-rev">proud</span> of it, though I had done less than the others.',
      '<span class="w-writing" data-cn="更重要的是">More importantly</span>, the garden changed me. I went from my window to the flower bed, and our <span class="w-rev">community</span> felt closer. A small corner is now a good place to plant something — and to grow a little yourself.'
    ],
    translation: [
      '我楼下那个空角落多年来一个样：破椅子、旧袋子，还有一大堆垃圾。每次路过我都看它一眼，然后就忘了。没人想过它还能变成别的样子。',
      '一个星期六的早上，楼里的三个志愿者带着袋子和工具下来了。他们递给我手套，可我说自己很忙，又回到了窗前。我就在那儿看着他们把角落收拾干净。',
      '我告诉自己，花园是别人建的东西，不是我这样的路人能帮上忙的。每个周末他们都会回来干上几个小时。慢慢地，他们把角落变成了一块种小苗的地方，每一片绿叶都看得出他们付出的心血。',
      '一天傍晚，一位上了年纪的邻居请我照料这些小苗一个星期，因为她一家要出门。活儿很小，可我答应了。每天傍晚我都拎着一瓶水下楼，开始想象这个角落到了夏天会是什么样子。',
      '下一个周六，我亲自参加了劳动。我们互相帮着搬重袋子，我想停下的时候，一位老人会给我鼓劲。这是令人愉快的活儿，谁也不慌不忙。',
      '随着时间推移，这个角落真的变成了花园。我们修好了破栅栏，花儿长了起来，天气暖和的傍晚，人们聚在那里聊天。最让我惊讶的不是花，而是那些如今每天傍晚都会在那里停一停的人。我为它感到自豪，虽然我干的活儿比别人都少。',
      '更重要的是，花园改变了我。我从窗前走到了花坛边，邻里之间也亲近多了。一个小小的角落，如今是种点什么的好地方——也是让自己长一点的地方。'
    ],
    vocabulary: [
      {
        w: 'empty',
        ph: '/ˈempti/',
        pos: 'adj.',
        cn: '空的、没人用的',
        col: 'an empty corner — 一个空着的角落；an empty room — 一间空屋子',
        ex: 'The empty corner was full of old bags.'
      },
      {
        w: 'rubbish',
        ph: '/ˈrʌbɪʃ/',
        pos: 'n.',
        cn: '垃圾',
        col: 'pick up the rubbish — 捡起垃圾；a pile of rubbish — 一堆垃圾',
        ex: 'There was a lot of rubbish under the tree.'
      },
      {
        w: 'corner',
        ph: '/ˈkɔːnə(r)/',
        pos: 'n.',
        cn: '角落、拐角',
        col: 'on the corner of … — 在……的拐角；around the corner — 在附近',
        ex: 'We sat in the corner of the room.'
      },
      {
        w: 'volunteer',
        ph: '/ˌvɒlənˈtɪə(r)/',
        pos: 'n./v.',
        cn: '志愿者；自愿做',
        col: 'a volunteer — 一名志愿者；volunteer to do sth. — 自愿做某事',
        ex: 'Three volunteers came down with tools.'
      },
      {
        w: 'tool',
        ph: '/tuːl/',
        pos: 'n.',
        cn: '工具',
        col: 'a garden tool — 园艺工具；tool box — 工具箱',
        ex: 'He brought two tools for the work.'
      },
      {
        w: 'tidy',
        ph: '/ˈtaɪdi/',
        pos: 'v./adj.',
        cn: '收拾整洁；整洁的',
        col: 'tidy up — 收拾整齐；keep sth. tidy — 保持某物整洁',
        ex: 'They tidied the corner all morning.'
      },
      {
        w: 'plant',
        ph: '/plɑːnt/',
        pos: 'v./n.',
        cn: '种植；植物',
        col: 'plant trees — 种树；a young plant — 一株幼苗',
        ex: 'It is a good place to plant flowers.'
      },
      {
        w: 'imagine',
        ph: '/ɪˈmædʒɪn/',
        pos: 'v.',
        cn: '想象',
        col: 'imagine doing sth. — 想象做某事；it is hard to imagine — 很难想象',
        ex: 'I imagine the corner will be beautiful in summer.'
      },
      {
        w: 'cheerful',
        ph: '/ˈtʃɪəfl/',
        pos: 'adj.',
        cn: '令人愉快的、快乐的',
        col: 'cheerful work — 令人愉快的活儿；a cheerful voice — 快活的声音',
        ex: 'It was cheerful work for everyone.'
      },
      {
        w: 'repair',
        ph: '/rɪˈpeə(r)/',
        pos: 'v.',
        cn: '修理',
        col: 'repair a fence — 修理栅栏；under repair — 在修理中',
        ex: 'We repaired the broken fence together.'
      },
      {
        w: 'grow',
        ph: '/ɡrəʊ/',
        pos: 'v.',
        cn: '生长、种植',
        col: 'grow flowers — 种花；grow up — 长大',
        ex: 'The flowers grew quickly after the rain.'
      },
      {
        w: 'gather',
        ph: '/ˈɡæðə(r)/',
        pos: 'v.',
        cn: '聚集、聚拢',
        col: 'gather together — 聚在一起；gather information — 收集信息',
        ex: 'People gather there on warm evenings.'
      }
    ],
    phrases: [
      {
        en: 'turn … into …',
        cn: '把……变成……',
        ex: 'They turned the corner into a garden.'
      },
      {
        en: 'take care of',
        cn: '照料、照顾',
        ex: 'She takes care of the young plants.'
      },
      {
        en: 'take part in',
        cn: '参加（活动、劳动）',
        ex: 'I took part in the work myself.'
      },
      {
        en: 'show up',
        cn: '出现、到场',
        ex: 'Three neighbors showed up with tools.'
      },
      {
        en: 'at first',
        cn: '起初、一开始',
        ex: 'At first I only watched from my window.'
      },
      {
        en: 'little by little',
        cn: '一点一点地、逐渐地',
        ex: 'Little by little, the corner changed.'
      },
      {
        en: 'be pleased with',
        cn: '对……感到满意',
        ex: 'The neighbors were pleased with the new garden.'
      },
      {
        en: 'get rid of',
        cn: '摆脱、扔掉',
        ex: 'We got rid of the broken chairs.'
      },
      {
        en: 'by the end of',
        cn: '到……结束的时候',
        ex: 'By the end of the month, the work was done.'
      },
      {
        en: 'in the middle of',
        cn: '在……中间',
        ex: 'There is a small seat in the middle of the garden.'
      },
      {
        en: 'as usual',
        cn: '像往常一样',
        ex: 'As usual, he came first and left last.'
      }
    ],
    writings: [
      {
        expr: 'As time went by, ...',
        cn: '随着时间推移……',
        meaning: '用时间作主语，把「慢慢变化」的过程压缩成一句开头，后面常接一般过去时或完成时。',
        context: '写变化类记叙文的中段或转折处：先交代起点，再用它带出变化。',
        alts: [
          {
            t: 'With time, ...',
            n: '更短，书面'
          },
          {
            t: 'As time passed, ...',
            n: 'passed 比 went by 更书面'
          },
          {
            t: 'Time went by, ...',
            n: '直接用时间作主语'
          }
        ],
        register: '中性，记叙文与说明文都好用。',
        example: 'As time went by, the corner became a real garden.'
      },
      {
        expr: 'More importantly, ...',
        cn: '更重要的是……',
        meaning: '在前一层意思之上再推进一层，通常从「事情」推到「人」或「道理」。',
        context: '结尾段开头：先写看得见的变化，再用它点出更重要的收获。',
        alts: [
          {
            t: 'What is more, ...',
            n: '并列递进，语气稍弱'
          },
          {
            t: 'Above all, ...',
            n: '最重要的是，语气最强'
          },
          {
            t: 'Even more importantly, ...',
            n: '强调程度更高'
          }
        ],
        register: '中性偏书面，收束段必备。',
        example: 'More importantly, the garden changed me.'
      }
    ],
    sentences: [
      {
        text: 'I told myself that a garden was something other people built, not something a passer-by like me could help with.',
        points: [
          '<b>主干</b>：I told myself that …，that 引导<b>宾语从句</b>；从句的主干是 a garden was something。',
          '<b>省略关系代词的定语从句</b>：something <b>(that)</b> other people built 修饰 something；后半句 not something (that) a passer-by like me could help with 与它结构对称。',
          '<b>not …, not …</b>：两个否定句并排，先否定「别人做的事」，再否定「我能帮上忙的事」，把「旁观者」的心理写得很具体。',
          '<b>为什么值得学</b>：something + 定语从句是四级阅读里最常见的「模糊指代 + 修饰」结构；写心理活动时可以照抄这个句式。',
          '<b>常见变体</b>：It was not something I could help with. / I told myself that it was none of my business.'
        ]
      },
      {
        text: 'What surprised me was not the flowers themselves, but the people who now stopped there every evening.',
        points: [
          '<b>主干</b>：What surprised me was the people …；<b>What 引导主语从句</b>（相当于 the thing that），谓语用单数 was。',
          '<b>not A but B</b>：不是甲而是乙，否定「花」、突出「人」，是记叙文把立意从「物」转到「人」的标准句式。',
          '<b>the people who now stopped there every evening</b> 是 who 引导的<b>定语从句</b>，修饰 the people。',
          '<b>为什么值得学</b>：和第 11 篇的 What surprised me most was not …, but … 是同一句型的升级版：把收获落在「人」上，结尾立刻有分量。',
          '<b>常见变体</b>：What changed was not the garden, but me.'
        ]
      }
    ],
    questions: [
      {
        en: 'What did the corner under the building look like at the beginning?',
        cn: '一开始，楼下的空角落是什么样子？',
        ans: 'It had looked the same for years, with broken chairs, old bags and a lot of rubbish.',
        ansCn: '多年来都是老样子：破椅子、旧袋子，还有一大堆垃圾。'
      },
      {
        en: 'What did the older neighbor ask the writer to do one evening?',
        cn: '一天傍晚，那位上了年纪的邻居请作者做什么？',
        ans: 'She asked him to take care of the young plants for a week, because her family was away.',
        ansCn: '请他照料那些小苗一个星期，因为她一家要出门。'
      },
      {
        en: 'Why did the writer say he was busy when the volunteers first offered him gloves?',
        cn: '志愿者第一次递给作者手套时，他为什么说自己很忙？',
        ans: 'Because he still thought a garden was something other people built and that a passer-by like him could not help, so he stayed a watcher at the window.',
        ansCn: '因为他当时还认为花园是别人建的东西，自己这样的路人帮不上忙，所以只肯留在窗前旁观。'
      },
      {
        en: 'What does the last paragraph do in the passage?',
        cn: '最后一段在全文中起什么作用？',
        ans: 'It turns the story into a lesson: the garden changed the writer from a watcher into a participant and brought the neighbors closer.',
        ansCn: '它把故事收成一个收获：花园让作者从旁观者变成参与者，也让邻里更亲近。'
      },
      {
        en: 'In paragraph 6, what does “it” in “I was proud of it” refer to?',
        cn: '第六段里「我为它感到自豪」中的「它」指的是什么？',
        ans: 'It refers to the garden that the neighbors had made in the corner.',
        ansCn: '指的是邻居们在那个角落里建起来的花园。'
      }
    ],
    writingTask: {
      en: 'Write 60–80 words about a place near your home that changed little by little.',
      hints: [
        'At first, ...',
        'As time went by, ...',
        'More importantly, ...'
      ],
      hintCn: '用 4–6 句话写一处慢慢变化的地方：先写它原来的样子，再写人们做了什么，最后写更重要的收获。',
      req: '至少使用 2 个本篇学过的词或搭配（turn … into … / take care of / gather / volunteer / as time went by）。'
    },
    speakingTask: {
      en: 'Would you like to help change a place near your home? Answer the question in 45 seconds and give one reason.',
      points: [
        'Your answer',
        'One reason',
        'One small example'
      ],
      pointCn: '先明确回答想不想，再给一个理由，最后举一个自己能做的小事。',
      skeleton: 'Yes, I would like to ... because ... For example, I could ...'
    },
    focus: [
      '<b>新授核心词 12 个</b>：<span class=\'en\'>empty, rubbish, corner, volunteer, tool, tidy, plant, imagine, cheerful, repair, grow, gather</span> —— <span class=\'en\'>plant / grow / gather</span> 都能当动词用；<span class=\'en\'>cheerful</span> 是 cheer + ful；<span class=\'en\'>volunteer to do sth.</span> 里的 to 不省。',
      '<b>本篇复现的旧词</b>：第 3 篇的 <span class=\'en\'>support / encourage</span>、第 9 篇的 <span class=\'en\'>notice / offer</span>、第 10 篇的 <span class=\'en\'>effort / proud</span>、第 9 篇的 <span class=\'en\'>community</span> —— 灰点 7 处，都在新的故事里换了语境。',
      '<b>两个要背的句型</b>：<span class=\'en\'>something (that) other people built</span>（省略关系代词的定语从句）与 <span class=\'en\'>What … was not A, but B</span>（把收获从「物」转到「人」的升华句）—— 一写心理、一写立意。',
      '<b>动词搭配四连</b>：<span class=\'en\'>turn … into …</span>（把……变成……）、<span class=\'en\'>take care of</span>（照料）、<span class=\'en\'>take part in</span>（参加）、<span class=\'en\'>show up</span>（到场）—— 社区劳动场景最常见的四个动作。',
      '<b>全文逻辑线与题型提醒</b>：旁观（看一眼就忘）→ 别人动手（我只在窗前看）→ 被托付小事（照料小苗）→ 亲自参与 → 变化与升华（从窗前到花坛边）。推断题要抓住「行为背后的想法」，指代题把代词还原成本段的具体名词。'
    ],
    standard: {
      time: '约 32 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 12 个核心词遮住中文说出 ≥ 9 · 会用 What … was not A, but B · 完成 60–80 词写作与 45 秒口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 12 个核心词中的 9 个（volunteer、gather、imagine、cheerful、repair …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '11 个高频搭配掌握 8 个，能各造一句（turn … into …、take care of、take part in …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 What surprised me was not …, but … 的主语从句与对比结构，并仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；第 3 题要能说出推断依据，第 5 题要指对指代对象',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 60–80 词，至少用上 As time went by, … 或 More importantly, …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '45 秒说清「想不想参与改变住处附近的一个地方」，并给出一个理由和一件小事',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 7 处灰点旧词，说出其中 5 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 20,
    slug: '020-three-lessons-from-a-bad-week',
    title: 'Three Lessons from a Bad Week',
    titleCn: '糟糕一周的三个教训',
    stage: '阶段二 · 基础过渡',
    stageRange: '第 11–20 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 315 词'
      },
      {
        k: '新词密度',
        v: '约 3.8%'
      },
      {
        k: '长难句',
        v: '2 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/020.jpg',
    coverCredit: 'Photo: cottonbro studio / Pexels',
    body: [
      'Last week started badly and got worse. On Monday I <span class="w-cet4" data-cn="掉落、摔落">dropped</span> my phone and the screen was <span class="w-cet4" data-cn="损坏">damaged</span>. On Wednesday I lost my <span class="w-cet4" data-cn="钱包">wallet</span> on the bus. On Friday I <span class="w-cet4" data-cn="失败、考砸">failed</span> a test I had <span class="w-rev">expected</span> to pass.',
      'By Friday evening I felt <span class="w-rev">disappointed</span> and <span class="w-synonym" data-cn="＝ very tired 的替换词">exhausted</span>. <span class="w-cet4" data-cn="幸运地">Luckily</span>, a friend gave me some <span class="w-rev">advice</span>: write down what happened, and look at the week again on Sunday.',
      'On Sunday I <span class="w-phrase" data-cn="把……记录下来">kept a record of</span> the three bad days and <span class="w-rev">reviewed</span> the week. <span class="w-sentence">When I looked at the three days on paper, I saw that two of the three problems had started with something small.</span> A full desk, an open bag, and late revision were the real causes.',
      'What did that week teach me? <span class="w-writing" data-cn="教训是……">The lesson is that</span> small <span class="w-cet4" data-cn="细节">details</span> can <span class="w-cet4" data-cn="阻止、预防">prevent</span> big problems: a clean desk, a closed bag, and one hour of revision a day would have stopped all three. I now pay attention to the little things before they grow.',
      'The second lesson is about feelings. When everything goes wrong at once, the first step is to <span class="w-phrase" data-cn="冷静下来">calm down</span> and think. A bad week does not need a bad <span class="w-cet4" data-cn="态度">attitude</span>. I stay in <span class="w-cet4" data-cn="控制">control</span> of my day and look for a <span class="w-cet4" data-cn="解决办法">solution</span> before I say anything I might <span class="w-rev">regret</span>.',
      'The third lesson is about preparation. My <span class="w-rev">schedule</span> was a mess: I left everything to the last minute. Now I write things down and <span class="w-cet4" data-cn="准备">prepare</span> early, because a small note can <span class="w-cet4" data-cn="提醒">remind</span> me at the right time. That way I can <span class="w-phrase" data-cn="弥补">make up for</span> a bad day instead of losing a whole week.',
      '<span class="w-writing" data-cn="简而言之">In short</span>, a bad week is not a bad life. <span class="w-sentence">I could not stop every problem that week, but I could change what I did after each one, and that made all the difference.</span> Using these lessons costs little <span class="w-rev">effort</span>, and I have <span class="w-phrase" data-cn="吸取教训">learned a lesson</span>: I will not <span class="w-rev">waste</span> what that week taught me.'
    ],
    translation: [
      '上周一开头就不顺，之后越来越糟。周一我摔了手机，屏幕摔坏了。周三我在公交车上丢了钱包。周五，一场我本以为能考过的考试，我考砸了。',
      '到周五晚上，我又失望，又筋疲力尽。幸好一位朋友给了我一些建议：把发生的事写下来，周日再回头看这一周。',
      '周日我照做了：把这三个糟糕的日子记录下来，又回顾了一遍。当我把这三天摊在纸上来看，我发现三个问题里有两个都是从小事开始的。一张堆满东西的书桌、一个敞开的包、拖到最后一刻才复习——这些才是真正的原因。',
      '那一周教会了我什么？教训是：小细节能防住大麻烦。一张干净的书桌、一个拉好的包、每天一小时的复习，本可以把这三件事都挡在外面。现在我会在小事变大之前就留意它们。',
      '第二条教训和情绪有关。当所有事一下子都出错，第一步是冷静下来想一想。糟糕的一周不需要糟糕的态度。我要管住自己的一天，在说出可能后悔的话之前，先找解决办法。',
      '第三条教训是关于准备。我的时间安排一团糟：什么事都拖到最后一刻。现在我会把要做的事写下来，早早准备，因为一张小纸条能在合适的时候提醒我。这样，糟糕的一天就能补回来，不至于丢掉一整周。',
      '简而言之，糟糕的一周不等于糟糕的人生。那一周里的问题我一个也拦不住，但每件事之后怎么做，我可以改变，而这一点带来天壤之别。用上这些教训并不费力，我也已经吸取了教训：那一周教给我的东西，我不会白白浪费。'
    ],
    vocabulary: [
      {
        w: 'fail',
        ph: '/feɪl/',
        pos: 'v.',
        cn: '失败、不及格',
        col: 'fail a test — 考试不及格；fail to do sth. — 未能做成某事',
        ex: 'He failed the test by three points.'
      },
      {
        w: 'damage',
        ph: '/ˈdæmɪdʒ/',
        pos: 'v./n.',
        cn: '损坏、损害',
        col: 'be damaged — 被损坏了；do damage to — 对……造成损害',
        ex: 'The screen was damaged in the fall.'
      },
      {
        w: 'wallet',
        ph: '/ˈwɒlɪt/',
        pos: 'n.',
        cn: '钱包',
        col: 'lose one’s wallet — 丢钱包；an open wallet — 敞开的钱包',
        ex: 'I lost my wallet on the bus.'
      },
      {
        w: 'drop',
        ph: '/drɒp/',
        pos: 'v.',
        cn: '掉落、摔落；降低',
        col: 'drop one’s phone — 摔手机；drop to the floor — 掉到地上',
        ex: 'I dropped my phone on Monday.'
      },
      {
        w: 'luckily',
        ph: '/ˈlʌkɪli/',
        pos: 'adv.',
        cn: '幸运地、幸好',
        col: 'luckily for sb. — 某人幸运的是；luckily, … — 幸好……',
        ex: 'Luckily, a friend gave me some advice.'
      },
      {
        w: 'prevent',
        ph: '/prɪˈvent/',
        pos: 'vt.',
        cn: '阻止、预防',
        col: 'prevent sth. from happening — 防止某事发生；prevent problems — 预防问题',
        ex: 'Small details can prevent big problems.'
      },
      {
        w: 'detail',
        ph: '/ˈdiːteɪl/',
        pos: 'n.',
        cn: '细节、详情',
        col: 'pay attention to details — 注意细节；in detail — 详细地',
        ex: 'The lesson is about small details.'
      },
      {
        w: 'attitude',
        ph: '/ˈætɪtjuːd/',
        pos: 'n.',
        cn: '态度、心态',
        col: 'a bad attitude — 消极的态度；one’s attitude to … — 对……的态度',
        ex: 'A bad week does not need a bad attitude.'
      },
      {
        w: 'control',
        ph: '/kənˈtrəʊl/',
        pos: 'n./v.',
        cn: '控制；控制住',
        col: 'stay in control of … — 管住、掌控……；lose control — 失去控制',
        ex: 'I must stay in control of my day.'
      },
      {
        w: 'solution',
        ph: '/səˈluːʃn/',
        pos: 'n.',
        cn: '解决办法',
        col: 'find a solution — 找到解决办法；the solution to … — ……的解决办法',
        ex: 'We looked for a solution before we spoke.'
      },
      {
        w: 'remind',
        ph: '/rɪˈmaɪnd/',
        pos: 'vt.',
        cn: '提醒',
        col: 'remind sb. to do sth. — 提醒某人做某事；remind sb. of … — 使某人想起……',
        ex: 'A small note can remind me at the right time.'
      },
      {
        w: 'prepare',
        ph: '/prɪˈpeə(r)/',
        pos: 'v.',
        cn: '准备',
        col: 'prepare for sth. — 为某事做准备；prepare early — 早点准备',
        ex: 'I prepare early now.'
      }
    ],
    phrases: [
      {
        en: 'keep a record of',
        cn: '把……记录下来',
        ex: 'I keep a record of my bad days.'
      },
      {
        en: 'calm down',
        cn: '冷静下来',
        ex: 'Calm down before you answer.'
      },
      {
        en: 'make up for',
        cn: '弥补、补偿',
        ex: 'One good day can make up for a bad one.'
      },
      {
        en: 'learn a lesson',
        cn: '吸取教训',
        ex: 'I learned a lesson from that week.'
      },
      {
        en: 'make a mistake',
        cn: '犯一个错误',
        ex: 'Everyone makes a mistake sometimes.'
      },
      {
        en: 'take … seriously',
        cn: '认真对待……',
        ex: 'Take the little things seriously.'
      },
      {
        en: 'run out of',
        cn: '用完、耗尽',
        ex: 'We ran out of time before the test.'
      },
      {
        en: 'as usual',
        cn: '像往常一样',
        ex: 'As usual, he left everything to the last minute.'
      },
      {
        en: 'at least',
        cn: '至少',
        ex: 'At least one of the problems was easy to stop.'
      },
      {
        en: 'in the end',
        cn: '最后、最终',
        ex: 'In the end, the bad week taught me a lot.'
      },
      {
        en: 'pay attention to',
        cn: '注意、留意',
        ex: 'I now pay attention to the little things.'
      },
      {
        en: 'by the end of',
        cn: '到……结束的时候',
        ex: 'By the end of the week, I was tired.'
      }
    ],
    writings: [
      {
        expr: 'The lesson is that ...',
        cn: '教训是……',
        meaning: '用「教训」作主语直接引出道理，比 I learned that 更突出「这件事换来的经验」。',
        context: '复盘类文章的主体段或结尾段：先写事实，再用它点出道理。',
        alts: [
          {
            t: 'What I have learned is that ...',
            n: '第 10 篇已学，更强调过程'
          },
          {
            t: 'The point is that ...',
            n: '重点在于……'
          },
          {
            t: 'It teaches me that ...',
            n: '它让我明白……'
          }
        ],
        register: '中性，总结段最好用。',
        example: 'The lesson is that small details can prevent big problems.'
      },
      {
        expr: 'In short, ...',
        cn: '简而言之……',
        meaning: '把前文的几层意思压缩成一句话收尾，是结尾段最常见的开头。',
        context: '全文最后一段的首句，后面写一到两句结论。',
        alts: [
          {
            t: 'In a word, ...',
            n: '一句话概括'
          },
          {
            t: 'To sum up, ...',
            n: '更书面，演讲常用'
          },
          {
            t: 'All in all, ...',
            n: '总而言之'
          }
        ],
        register: '中性偏书面，收束全文。',
        example: 'In short, a bad week is not a bad life.'
      }
    ],
    sentences: [
      {
        text: 'When I looked at the three days on paper, I saw that two of the three problems had started with something small.',
        points: [
          '<b>主干</b>：I saw that …（主语 + 谓语 + <b>宾语从句</b>）；句首的 When I looked at the three days on paper 是时间状语从句。',
          '<b>on paper</b>：写到纸上、落在文字上；呼应第 10 篇的 on paper —— 事情写下来才看得清。',
          '<b>had started</b> 是<b>过去完成时</b>：问题「开始」发生在 saw 之前，比一般过去时早一个时间层次。',
          '<b>something small</b>：形容词<b>后置</b>修饰不定代词（something wrong / nothing new），这是固定语序，不能说 small something。',
          '<b>为什么值得学</b>：复盘类文章的万能句式，把「倒霉事件」变成「可以分析的对象」，是写出深度的第一步。'
        ]
      },
      {
        text: 'I could not stop every problem that week, but I could change what I did after each one, and that made all the difference.',
        points: [
          '<b>主干</b>：由 but 和 and 连接的三个分句层层递进：不能阻止问题 → 能改变应对方式 → 带来巨大改变。',
          '<b>what I did after each one</b> 是 change 的<b>宾语从句</b>，what 同时作 did 的宾语；each one 回指前面的 every problem。',
          '<b>make all the difference</b>：起决定性作用、差别巨大，比 very important 更地道，是四级写作的高频加分短语。',
          '<b>为什么值得学</b>：把「无能为力」和「有能为力」分开写，是总结段的高级思路；结构可以直接照抄。',
          '<b>常见变体</b>：I cannot control what happens, but I can control what I do.'
        ]
      }
    ],
    questions: [
      {
        en: 'What three things went wrong during the writer’s week?',
        cn: '那一周作者遇到了哪三件倒霉事？',
        ans: 'He dropped his phone and the screen was damaged, he lost his wallet on the bus, and he failed a test.',
        ansCn: '他摔了手机、屏幕摔坏了，在公交车上丢了钱包，还有一场考试考砸了。'
      },
      {
        en: 'What did the writer do on Sunday?',
        cn: '作者周日做了什么？',
        ans: 'He kept a record of the three bad days, reviewed the week, and looked at the three days on paper.',
        ansCn: '他把三个糟糕的日子记录下来，回顾了这一周，并把这三天摊在纸上看。'
      },
      {
        en: 'What can we infer about how the writer dealt with problems before that week?',
        cn: '从文中可以推出，作者在那之前是怎么处理问题的？',
        ans: 'He probably paid little attention to small details and left everything to the last minute, so small problems grew into big ones.',
        ansCn: '他大概不太注意小细节，什么事都拖到最后一刻，于是小问题变成了大麻烦。'
      },
      {
        en: 'What does the fourth paragraph do in the passage?',
        cn: '第四段在全文中起什么作用？',
        ans: 'It states the first lesson — small details can prevent big problems — and gives examples from that week before the other two lessons follow.',
        ansCn: '它点出第一条教训——小细节能防住大麻烦——并用那一周的例子说明，后面再接另外两条教训。'
      },
      {
        en: 'In the sentence “I could not stop every problem that week ...”, what does “each one” refer to?',
        cn: '在「那一周里的问题我一个也拦不住……」这句话里，「每一件」指的是什么？',
        ans: 'It refers to each problem in that bad week.',
        ansCn: '指的是那糟糕一周里的每一个问题。'
      }
    ],
    writingTask: {
      en: 'Write 60–80 words about a difficult week or day and what it taught you.',
      hints: [
        'Last week, ...',
        'The lesson is that ...',
        'In short, ...'
      ],
      hintCn: '用 4–6 句话写一次不顺的经历：先写发生了什么，再写你总结出的教训，最后用一句话收尾。',
      req: '至少使用 2 个本篇学过的词或搭配（prevent / detail / calm down / make up for / the lesson is that）。'
    },
    speakingTask: {
      en: 'What is the most useful lesson from a difficult experience? Answer the question in 45 seconds and give one reason.',
      points: [
        'Your answer',
        'One reason',
        'One small example'
      ],
      pointCn: '先说出你认为最有用的一条经验，再给一个理由，最后举一件自己的小事。',
      skeleton: 'The most useful lesson for me is that ... because ... For example, when I ..., I ...'
    },
    focus: [
      '<b>新授核心词 12 个</b>：<span class=\'en\'>fail, damage, wallet, drop, luckily, prevent, detail, attitude, control, solution, remind, prepare</span> —— <span class=\'en\'>fail</span> 既是「失败」也是「不及格」；<span class=\'en\'>prevent … from doing</span> 的 from 不省；<span class=\'en\'>the solution to</span> 的介词用 to；<span class=\'en\'>remind sb. to do</span> 与 <span class=\'en\'>remind sb. of</span> 意思不同。',
      '<b>本篇复现的旧词（本篇是节点篇，复现密度最高）</b>：第 3 篇的 <span class=\'en\'>advice</span>、第 5 篇的 <span class=\'en\'>expected / disappointed</span>、第 6 篇的 <span class=\'en\'>schedule / waste</span>、第 10 篇的 <span class=\'en\'>effort / review</span>、第 11 篇的 <span class=\'en\'>regret</span> —— 灰点 8 处，覆盖阶段一、二两批重点旧词。',
      '<b>复盘的写法</b>：先摆事实（三件倒霉事）→ 再写分析（摊在纸上找原因）→ 逐条给教训 → 一句话收束。<span class=\'en\'>The lesson is that …</span> 与 <span class=\'en\'>In short, …</span> 一开一合，正好撑起这类短文。',
      '<b>动词搭配四连</b>：<span class=\'en\'>keep a record of</span>（记录）、<span class=\'en\'>calm down</span>（冷静）、<span class=\'en\'>make up for</span>（弥补）、<span class=\'en\'>learn a lesson</span>（吸取教训）—— 复盘场景的四个必备动作。',
      '<b>全文逻辑线与题型提醒</b>：糟糕一周 → 周日复盘 → 教训一（细节防大问题）→ 教训二（情绪要管住）→ 教训三（提前准备）→ 收束（糟糕的一周不等于糟糕的人生）。推断题要抓「从前的行为」；段落作用题答「本段写了什么 + 为下文做了什么铺垫」。',
      '<b>⭐ 本阶段复盘 · 词汇抽查</b>：请盖住释义，认一认这 10 个阶段一、二的旧词 —— <span class=\'en\'>afford, benefit, suggest, improve, encourage, support, compare, decide, effort, hesitate</span>。任何两个想不起来的，写进下一阶段的复习清单，会安排在第 21–25 篇里再次复现。',
      '<b>⭐ 本阶段复盘 · 下阶段难度确认</b>：阶段三（第 21–30 篇）会一次上调五个维度 —— 篇幅 300→400 词、新词密度 4–6%、每篇 12–18 个新词、<b>定语从句与被动语态正式登场</b>、<b>同义替换标注系统出现</b>（阅读题开始考「题目换一种说法」）。<b>如果这一篇你读起来「刚好」或「偏简单」，就按计划推进；如果偏难，第 21 篇只下调新词密度，其余维度照旧。</b>请给一个 1–5 的难度自评：1＝偏难，3＝刚好，5＝偏简单。'
    ],
    standard: {
      time: '约 35 分钟',
      bar: '阶段二复盘：阅读题 5 题对 ≥ 4 · 12 个核心词遮住中文说出 ≥ 9 · 能说出三条教训 · 完成 60–80 词写作与 45 秒口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 12 个核心词中的 9 个（prevent、detail、attitude、solution、remind …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '12 个高频搭配掌握 9 个，能各造一句（keep a record of、calm down、make up for …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 I could not stop every problem … 的三分句递进结构与 make all the difference，并仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；第 3 题要能说出推断依据，第 5 题要指对指代对象',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 60–80 词，至少用上 The lesson is that … 或 In short, …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '45 秒说出「一次不顺经历里最有用的一条经验」，并给出一个理由和一件小事',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 8 处灰点旧词，说出其中 6 个的意思，并在心里给阶段二的收获打一个 1–5 分',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 21,
    slug: '021-why-walking-works',
    title: 'Why Walking Works',
    titleCn: '为什么走路有效',
    stage: '阶段三 · 中级',
    stageRange: '第 21–30 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 315 词'
      },
      {
        k: '新词密度',
        v: '约 4.1%'
      },
      {
        k: '长难句',
        v: '3 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/021.jpg',
    coverCredit: 'Photo: Sonya Livshits / Pexels',
    body: [
      'I used to think that real <span class="w-rev">exercise</span> meant a gym and a strict plan, so I did nothing. Last spring my doctor said my back hurt from sitting too long. Her advice was simple: walk for thirty minutes.',
      '<span class="w-writing" data-cn="这并不是说……（防止观点太绝对）">This is not to say that</span> walking is exciting. I <span class="w-phrase" data-cn="腾出时间做……">made time for</span> a walk after lunch and slowly <span class="w-phrase" data-cn="习惯做某事">got used to</span> the route around the lake. <span class="w-sentence">What I noticed first was not a change in my body, but a change in the way my afternoons felt.</span>',
      '<span class="w-cet4" data-cn="逐渐地">Gradually</span> the changes showed up. Walking builds <span class="w-cet4" data-cn="肌肉">muscles</span> around the knees and keeps the <span class="w-cet4" data-cn="关节">joints</span> moving, so the pain in my legs began to <span class="w-rev">reduce</span>. My <span class="w-cet4" data-cn="体重">weight</span> changed little, but I could walk a longer <span class="w-cet4" data-cn="距离">distance</span> each week.',
      'Walking does something for the mind as well. When <span class="w-cet4" data-cn="压力">stress</span> builds up at work, a walk helps me <span class="w-cet4" data-cn="恢复（精力与状态）">recover</span> better than coffee does. I come back with more <span class="w-rev">energy</span> and a better <span class="w-rev">balance</span> between work and rest. The <span class="w-cet4" data-cn="影响、效果">effect</span> is easy to feel.',
      'Then my sleep began to <span class="w-rev">improve</span>. <span class="w-sentence">People who walk in the evening fall asleep faster, because the body cools down and the mind has had time to slow.</span>',
      '<span class="w-writing" data-cn="更重要的是……（递进引出重点）">More importantly</span>, the habit is easy to keep. If your knees hurt, <span class="w-cet4" data-cn="避免">avoid</span> hills and choose a flat route. If you are a busy <span class="w-cet4" data-cn="成年人">adult</span>, walk to the next stop. You do not need to <span class="w-cet4" data-cn="追踪、记录">track</span> every step, and beginners are <span class="w-rev">likely</span> to start too fast.',
      'My <span class="w-cet4" data-cn="目标">aim</span> is not to run a race but to <span class="w-cet4" data-cn="保持、维持">maintain</span> this small habit <span class="w-phrase" data-cn="从长远来看">in the long run</span>. <span class="w-sentence">Studies show that people who walk for half an hour a day are less likely to fall ill as they grow older.</span>',
      'Walking is not a magic pill. But the <span class="w-rev">benefit</span> is real, the cost is zero, and the <span class="w-synonym" data-cn="＝ important 的替换词">key</span> is to start before you feel ready. Put on your shoes and <span class="w-phrase" data-cn="去散步">go for a walk</span> today.'
    ],
    translation: [
      '我过去总觉得，真正的锻炼意味着进健身房、执行严格的计划，所以我什么都没做。去年春天，医生说我的背痛是因为久坐。她的建议很简单：每天走三十分钟。',
      '这并不是说走路有多兴奋。午饭后我腾出时间走一走，慢慢习惯了绕湖的那条路。我最先注意到的不是身体的变化，而是整个下午感受的变化。',
      '变化一点点显现出来。走路能让膝盖周围的肌肉变得结实，也让关节保持活动，所以我腿上的疼痛开始减轻。我的体重几乎没变，但每周能走的距离越来越长。',
      '走路对心情也有作用。工作上压力堆积的时候，走一走比喝咖啡更能让我恢复过来。回来时我更有精力，工作和休息也更平衡。这种效果很容易感觉到。',
      '然后我的睡眠开始变好。晚上走路的人入睡更快，因为身体慢慢凉了下来，心情也有了放缓的时间。',
      '更重要的是，这个习惯很容易坚持。如果膝盖疼，就避开坡路，选一条平坦的路线。如果你是个忙碌的成年人，就走到下一站再坐车。你不必记录每一步，而且新手往往一开始走得太快。',
      '我的目标不是跑出成绩，而是从长远来看把这个小习惯保持下去。研究显示，每天走半小时的人，随着年纪变大，生病的可能性更小。',
      '走路不是万能药。但好处是真实的，成本是零，关键在于在你觉得自己准备好之前就先开始。穿上鞋，今天就去走一走。'
    ],
    vocabulary: [
      {
        w: 'adult',
        ph: '/ˈædʌlt/',
        pos: 'n./adj.',
        cn: '成年人；成年的',
        col: 'an adult — 一个成年人；adult education — 成人教育',
        ex: 'An adult should not sit for ten hours a day.'
      },
      {
        w: 'gradually',
        ph: '/ˈɡrædʒuəli/',
        pos: 'adv.',
        cn: '逐渐地、渐渐',
        col: 'gradually increase — 逐渐增加；change gradually — 慢慢变化',
        ex: 'The weather gradually got warmer.'
      },
      {
        w: 'muscle',
        ph: '/ˈmʌsl/',
        pos: 'n.',
        cn: '肌肉',
        col: 'build muscle — 锻炼出肌肉；muscle pain — 肌肉酸痛',
        ex: 'Walking builds muscle around the knees.'
      },
      {
        w: 'joint',
        ph: '/dʒɔɪnt/',
        pos: 'n.',
        cn: '关节；接合处',
        col: 'knee joint — 膝关节；joint pain — 关节痛',
        ex: 'Running can be hard on the joints.'
      },
      {
        w: 'weight',
        ph: '/weɪt/',
        pos: 'n.',
        cn: '体重；重量',
        col: 'lose weight — 减重；put on weight — 体重增加',
        ex: 'My weight changed very little.'
      },
      {
        w: 'distance',
        ph: '/ˈdɪstəns/',
        pos: 'n.',
        cn: '距离',
        col: 'walk a distance — 走一段距离；within walking distance — 步行能到',
        ex: 'He can walk a longer distance than before.'
      },
      {
        w: 'stress',
        ph: '/stres/',
        pos: 'n.',
        cn: '压力；紧张',
        col: 'under stress — 在压力下；reduce stress — 减轻压力',
        ex: 'Stress builds up when you work too long.'
      },
      {
        w: 'recover',
        ph: '/rɪˈkʌvə/',
        pos: 'vi.',
        cn: '恢复（体力、状态）',
        col: 'recover from sth. — 从……中恢复过来；recover quickly — 恢复得快',
        ex: 'A short walk helps me recover from a hard morning.'
      },
      {
        w: 'effect',
        ph: '/ɪˈfekt/',
        pos: 'n.',
        cn: '影响、效果',
        col: 'have an effect on — 对……有影响；take effect — 开始起作用',
        ex: 'The effect of walking is easy to feel.'
      },
      {
        w: 'avoid',
        ph: '/əˈvɔɪd/',
        pos: 'vt.',
        cn: '避免、避开',
        col: 'avoid doing sth. — 避免做某事；avoid mistakes — 少犯错误',
        ex: 'Avoid hills if your knees hurt.'
      },
      {
        w: 'track',
        ph: '/træk/',
        pos: 'v.',
        cn: '追踪、记录',
        col: 'track your steps — 记录步数；keep track of — 随时了解……的情况',
        ex: 'You do not need to track every step.'
      },
      {
        w: 'aim',
        ph: '/eɪm/',
        pos: 'n./v.',
        cn: '目标；旨在',
        col: 'aim to do sth. — 力求做某事；the aim of — ……的目标',
        ex: 'My aim is to keep walking every day.'
      },
      {
        w: 'maintain',
        ph: '/meɪnˈteɪn/',
        pos: 'vt.',
        cn: '保持、维持',
        col: 'maintain a habit — 保持一个习惯；maintain contact — 保持联系',
        ex: 'It is easy to start but hard to maintain a habit.'
      }
    ],
    phrases: [
      {
        en: 'go for a walk',
        cn: '去散步、去走一走',
        ex: 'Let me go for a walk after dinner.'
      },
      {
        en: 'make time for',
        cn: '为……腾出时间',
        ex: 'She makes time for a walk every lunch break.'
      },
      {
        en: 'get used to doing sth.',
        cn: '习惯做某事（to 是介词，后接名词或动名词）',
        ex: 'I slowly got used to getting up early.'
      },
      {
        en: 'in the long run',
        cn: '从长远来看',
        ex: 'In the long run, small habits matter most.'
      },
      {
        en: 'at least',
        cn: '至少',
        ex: 'Walk for at least twenty minutes.'
      },
      {
        en: 'take exercise',
        cn: '锻炼、运动',
        ex: 'Old people should take exercise every day.'
      },
      {
        en: 'keep fit',
        cn: '保持健康',
        ex: 'He runs every morning to keep fit.'
      },
      {
        en: 'instead of',
        cn: '而不是……（后接名词或动名词）',
        ex: 'Walk to work instead of taking the bus.'
      },
      {
        en: 'as long as',
        cn: '只要',
        ex: 'As long as you keep going, it works.'
      },
      {
        en: 'little by little',
        cn: '一点一点地、逐渐地',
        ex: 'Little by little, the pain went away.'
      }
    ],
    writings: [
      {
        expr: 'This is not to say that ...',
        cn: '这并不是说……',
        meaning: '先排除一种极端的理解，再给出自己的判断，让观点显得不绝对。',
        context: '议论文里给出观点之后，用来做一次「预防性让步」，防止读者把话理解过头。',
        alts: [
          {
            t: 'I am not saying that ...',
            n: '更口语'
          },
          {
            t: 'This does not mean that ...',
            n: '中性常用'
          },
          {
            t: 'That is not to suggest that ...',
            n: '更书面'
          }
        ],
        register: '中性偏书面，写作最常用。',
        example: 'This is not to say that walking is exciting; it simply works.'
      },
      {
        expr: 'More importantly, ...',
        cn: '更重要的是……',
        meaning: '在已有理由之后再递进一层，引出分量更重的那个论点。',
        context: '主体段之间做递进，或在两个并列理由之后强调后者。',
        alts: [
          {
            t: 'What is more, ...',
            n: '书面'
          },
          {
            t: 'Even more importantly, ...',
            n: '语气更强'
          },
          {
            t: 'Above all, ...',
            n: '放在最后、最强的递进'
          }
        ],
        register: '中性，写作口语都能用。',
        example: 'More importantly, this habit is easy to keep.'
      }
    ],
    sentences: [
      {
        text: 'What I noticed first was not a change in my body, but a change in the way my afternoons felt.',
        points: [
          '<b>主干</b>：What I noticed first was not A, but B（我最先注意到的不是甲，而是乙）。',
          '<b>语法点</b>：What 引导<b>名词性从句</b>作主语；not ... but ... 连接两个并列表语，前后结构完全对称（a change in ...）。',
          '<b>语法点</b>：the way my afternoons felt 里，the way 后省略了关系词（that / in which），后面跟一个句子，表示「……的那种感觉方式」。',
          '<b>为什么值得学</b>：把「变化」写成 not ... but ... 的对比句，既准确又显得有想法，是四级写作里非常好用的观点句。',
          '<b>注意</b>：not 和 but 两边必须结构一致，本句都是「a change in + 名词」；一边是名词、一边是从句就会读着别扭。'
        ]
      },
      {
        text: 'People who walk in the evening fall asleep faster, because the body cools down and the mind has had time to slow.',
        points: [
          '<b>主干</b>：People fall asleep faster（人入睡更快）。',
          '<b>语法点</b>：who walk in the evening 是<b>限制性定语从句</b>，修饰 people，说明是「哪一类人」。',
          '<b>语法点</b>：because 引导<b>原因状语从句</b>，里面用 and 并列两个谓语：the body cools down 与 the mind has had time to slow。',
          '<b>注意</b>：has had time to slow 用现在完成时，强调「到睡前这段时间已经够了」，不是在讲某一次的具体经历。',
          '<b>常见变体</b>：把 because 从句提到句首也自然——Because the body cools down ..., people fall asleep faster.'
        ]
      },
      {
        text: 'Studies show that people who walk for half an hour a day are less likely to fall ill as they grow older.',
        points: [
          '<b>主干</b>：Studies show that ...（研究表明……）。',
          '<b>语法点</b>：that 引导<b>宾语从句</b>，从句内部又套一个 who 引导的定语从句修饰 people，形成「主句 + 从句 + 从句」的两层结构。',
          '<b>语法点</b>：be likely to do 表示「有可能做某事」，less likely to 就是「可能性更小」；as they grow older 里 as 表示「随着」。',
          '<b>为什么值得学</b>：Studies show that ... 是说明文引用研究结论的万能开头，比 Some people think ... 更有说服力。',
          '<b>注意</b>：likely 是形容词，要说 be likely to do，不要写成 are likely falling ill。'
        ]
      }
    ],
    questions: [
      {
        en: 'What did the doctor tell the writer to do last spring?',
        cn: '去年春天医生让作者做什么？',
        ans: 'She told him to walk for thirty minutes every day, because his back hurt from sitting too long.',
        ansCn: '让他每天走三十分钟，因为他坐得太久、背开始疼。'
      },
      {
        en: 'What change did the writer notice first?',
        cn: '作者最先注意到的变化是什么？',
        ans: 'Not a change in his body, but a change in the way his afternoons felt.',
        ansCn: '不是身体上的变化，而是整个下午的感受变了。'
      },
      {
        en: 'Which word in the last paragraph has the same meaning as “important”?',
        cn: '最后一段里哪个词和「重要的」意思相同？',
        ans: 'The word “key”, as in “the key is to start before you feel ready”.',
        ansCn: '就是 key 这个词（关键的），出现在「关键在于先开始」这句里。'
      },
      {
        en: 'In the sentence “When stress builds up at work”, what does “builds up” most probably mean?',
        cn: '在「工作上压力堆积」这句话里，短语 build up 最可能是什么意思？',
        ans: 'It means becoming greater over time, so “builds up” means the stress grows little by little.',
        ansCn: '指随着时间一点点增加，也就是压力越来越大。'
      },
      {
        en: 'What is the main idea of the passage?',
        cn: '这篇文章的主旨是什么？',
        ans: 'A thirty-minute walk every day is a simple habit that improves the body, the mood and sleep, and anyone can start it.',
        ansCn: '每天走三十分钟这个简单的习惯，对身体、心情和睡眠都有好处，而且人人都能开始。'
      }
    ],
    writingTask: {
      en: 'Write 80–100 words about one small habit that has improved your life.',
      hints: [
        'In my view, the small habit that changed my life is ...',
        'This is not to say that ..., but ...',
        'More importantly, ...',
        'Take last month as an example: ...'
      ],
      hintCn: '三要素缺一不可：先亮出观点（哪个小习惯有用），再给一到两条理由，最后用自己的一段真实小例子收尾。',
      req: '至少使用 2 个本篇学过的词或搭配（gradually / recover / maintain / in the long run / get used to doing）。'
    },
    speakingTask: {
      en: 'Speak for one minute: give your opinion, one reason and one example.',
      points: [
        'Your opinion: which small habit matters',
        'One reason',
        'One example from your own life'
      ],
      pointCn: '一分钟内说完三段：观点、理由、例子；例子要具体到时间、地点或数字。',
      skeleton: 'In my view, ... The reason is that ... For example, last month I ... That is why I believe ...'
    },
    focus: [
      '<b>新授核心词 13 个</b>：<span class=\'en\'>adult, gradually, muscle, joint, weight, distance, stress, recover, effect, avoid, track, aim, maintain</span> —— 注意 <span class=\'en\'>avoid doing sth.</span>（后接动名词）、<span class=\'en\'>aim to do</span>（力求）、<span class=\'en\'>maintain</span> 后面直接跟名词；<span class=\'en\'>effect</span> 是名词，别和动词「影响」混写。',
      '<b>本篇复现的旧词</b>：第 1 篇的 <span class=\'en\'>benefit</span>、第 2 篇的 <span class=\'en\'>improve</span>、第 6 篇的 <span class=\'en\'>likely / balance</span>、第 8 篇的 <span class=\'en\'>exercise / energy / reduce</span> —— 都是「健康与日常」话题的老朋友，换个语境要能立刻认出来。',
      '<b>句型：What 引导名词性从句 + not ... but ...</b>：What I noticed first was not A, but B. 一句话写清「我最先感到的变化」，是本篇最值得模仿的观点句。',
      '<b>搭配三连</b>：<span class=\'en\'>make time for</span>（腾出时间）、<span class=\'en\'>get used to doing</span>（习惯做，to 是介词）、<span class=\'en\'>in the long run</span>（从长远看）—— 讲「习惯养成」时几乎每篇都用得上。',
      '<b>题型提醒</b>：本阶段新增「同义替换识别」与「词义猜测」两种题。同义替换题要回到原文找那个词（如 key ＝ important）；词义猜测题靠上下文推（如 build up ＝ 一点点增加），不要查词典。'
    ],
    standard: {
      time: '约 35 分钟',
      bar: '315 词读两遍 · 核心词 13 个会认会用 · 阅读 5 题对 ≥ 4 · 80–100 词写作 + 1 分钟口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 13 个核心词中的 10 个（muscle、recover、maintain、gradually …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '10 个高频搭配掌握 7 个，能各造一句（get used to doing、in the long run …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '3 处长难句都能说出主干，并仿写其中 1 句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；同义替换与词义猜测各 1 题要说清判断依据',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 80–100 词，观点—理由—例子三要素齐全，至少用上 2 个本篇词或搭配',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟说完「观点 + 理由 + 例子」，例子具体到时间或数字',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点出正文里 7 处灰点旧词，说出意思并指出它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 22,
    slug: '022-the-second-hand-market',
    title: 'The Second-Hand Market',
    titleCn: '二手市场',
    stage: '阶段三 · 中级',
    stageRange: '第 21–30 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 325 词'
      },
      {
        k: '新词密度',
        v: '约 4.3%'
      },
      {
        k: '长难句',
        v: '2 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/022.jpg',
    coverCredit: 'Photo: cottonbro studio / Pexels',
    body: [
      'Ten years ago my friends would <span class="w-rev">hesitate</span> to say that a jacket came from a second-hand shop. Today these shops are full of young <span class="w-cet4" data-cn="消费者">consumers</span>. <span class="w-synonym" data-cn="＝ second-hand 的委婉说法">Pre-owned</span> things have become fashionable, and old objects are popular again.',
      'There are several reasons for this <span class="w-cet4" data-cn="趋势">trend</span>. First, prices keep rising, and not everyone can <span class="w-rev">afford</span> new things. A <span class="w-cet4" data-cn="磨损的、用旧的">worn</span> chair or a used phone may cost only a tenth of its original <span class="w-rev">price</span>.',
      'Second, people care more about the <span class="w-cet4" data-cn="环境">environment</span>. Every new <span class="w-cet4" data-cn="物品、商品">item</span> takes <span class="w-cet4" data-cn="资源">resources</span> to make and to move across the world, while <span class="w-phrase" data-cn="把……扔掉">throwing things away</span> only adds to the rubbish. <span class="w-writing" data-cn="也就是说……（把道理说明白）">That is to say</span>, one book that changes hands three times saves three new books.',
      'There is also joy in the search. Second-hand markets sell things that no <span class="w-rev">brand</span> sells any more: a <span class="w-cet4" data-cn="独一无二的">unique</span> lamp, a coat from another decade, a book with somebody’s notes in it. <span class="w-sentence">Built to last for years, an old chair may serve two more families before it finally breaks.</span>',
      '<span class="w-writing" data-cn="诚然……但是……（先让步再转折）">It is true that</span> second-hand shopping has problems. <span class="w-sentence">A phone that looks fine in a photo may fail within a week, which is why careful checks matter more than low prices.</span> Meet a <span class="w-cet4" data-cn="可靠的">reliable</span> seller <span class="w-phrase" data-cn="当面、亲自">in person</span> and test things before you pay.',
      'Buying from strangers needs <span class="w-rev">trust</span>, so I <span class="w-phrase" data-cn="多想一想、斟酌一下">think twice</span> about a very cheap <span class="w-cet4" data-cn="划算的交易">bargain</span>. If I have any <span class="w-cet4" data-cn="怀疑">doubt</span> about the quality, I do not buy. Some phones look <span class="w-cet4" data-cn="真正的、真品的">genuine</span> but are not.',
      'For things I no longer need, the answer is not to <span class="w-phrase" data-cn="把……处理掉">get rid of</span> them. I <span class="w-cet4" data-cn="捐赠">donate</span> clothes that still look good, put what is <span class="w-rev">valuable</span> up <span class="w-phrase" data-cn="待售、出售">for sale</span>, and <span class="w-cet4" data-cn="回收利用">recycle</span> what is broken. Something I <span class="w-cet4" data-cn="购买">purchased</span> years ago may be what another person is looking for.',
      'In the end, the second-hand market is not about money alone. It gives old things a second life and makes us ask one question before buying new: do I really need it? Asking it helps us <span class="w-rev">waste</span> less and want less.'
    ],
    translation: [
      '十年前，朋友们不好意思说出某件外套来自二手店。如今这些店里挤满了年轻的消费者。二手的东西变得时髦起来，旧物件又流行了。',
      '这一趋势有几个原因。第一，价格一直上涨，而并不是人人买得起新东西。一把用旧的椅子或者一部二手手机，可能只要原价的十分之一。',
      '第二，人们更在意环境了。每件新商品都要消耗资源才能生产出来、运到各地，而把东西扔掉只会增加垃圾。也就是说，一本转手三次的书，就省下了三本新书。',
      '寻找的过程也有乐趣。二手市场里卖的都是再没有品牌生产的物件：一盏独一无二的灯、一件另一个年代的外套、一本写着别人笔记的书。一把为耐用而造的老椅子，在彻底坏掉之前还能陪伴两户人家。',
      '诚然，买二手货也有问题。照片里看着不错的手机，可能一周就坏了，所以仔细检查比低价格更重要。要当面见一见可靠的卖家，付钱前先试一试。',
      '跟陌生人做生意需要信任，所以面对特别便宜的划算买卖，我会多想一想。只要对质量有一点怀疑，我就不买。有些手机看着像真品，其实不是。',
      '至于我用不上的东西，答案并不是把它们处理掉。我把还很好的衣服捐出去，把值钱的挂上去出售，把坏掉的回收利用。我多年前买下的东西，可能正是另一个人在找的。',
      '说到底，二手市场不只是钱的事。它让旧东西获得第二次生命，也让我们在买新东西之前先问一句：我真的需要它吗？光是问这个问题，就能让我们少浪费一点、少想要一点。'
    ],
    vocabulary: [
      {
        w: 'consumer',
        ph: '/kənˈsjuːmə/',
        pos: 'n.',
        cn: '消费者、用户',
        col: 'consumer goods — 消费品；young consumers — 年轻消费者',
        ex: 'Young consumers care about the price.'
      },
      {
        w: 'trend',
        ph: '/trend/',
        pos: 'n.',
        cn: '趋势、潮流',
        col: 'a growing trend — 日益增长的趋势；follow a trend — 追随潮流',
        ex: 'There is a trend towards buying used things.'
      },
      {
        w: 'worn',
        ph: '/wɔːn/',
        pos: 'adj.',
        cn: '磨损的、用旧的',
        col: 'worn shoes — 穿旧的鞋；get worn — 穿旧、用旧',
        ex: 'The worn chair was still strong.'
      },
      {
        w: 'environment',
        ph: '/ɪnˈvaɪrənmənt/',
        pos: 'n.',
        cn: '环境、自然环境',
        col: 'protect the environment — 保护环境；the natural environment — 自然环境',
        ex: 'People care more about the environment now.'
      },
      {
        w: 'item',
        ph: '/ˈaɪtəm/',
        pos: 'n.',
        cn: '物品、一件商品',
        col: 'an item of clothing — 一件衣服；every item — 每一件东西',
        ex: 'Every new item takes resources to make.'
      },
      {
        w: 'resource',
        ph: '/rɪˈsɔːs/',
        pos: 'n.',
        cn: '资源',
        col: 'natural resources — 自然资源；save resources — 节省资源',
        ex: 'Making new things uses up resources.'
      },
      {
        w: 'unique',
        ph: '/juˈniːk/',
        pos: 'adj.',
        cn: '独一无二的、独特的',
        col: 'unique to sb. — 某人独有的；a unique chance — 千载难逢的机会',
        ex: 'Each old lamp is unique.'
      },
      {
        w: 'reliable',
        ph: '/rɪˈlaɪəbl/',
        pos: 'adj.',
        cn: '可靠的、可信赖的',
        col: 'a reliable seller — 可靠的卖家；reliable information — 可靠的信息',
        ex: 'Meet a reliable seller in person.'
      },
      {
        w: 'bargain',
        ph: '/ˈbɑːɡɪn/',
        pos: 'n.',
        cn: '划算的交易；便宜货',
        col: 'a real bargain — 真正划算的买卖；bargain price — 便宜的价格',
        ex: 'The old book was a real bargain.'
      },
      {
        w: 'doubt',
        ph: '/daʊt/',
        pos: 'n./v.',
        cn: '怀疑、疑问',
        col: 'have doubt about — 对……有怀疑；no doubt — 毫无疑问',
        ex: 'If you have any doubt, do not buy it.'
      },
      {
        w: 'genuine',
        ph: '/ˈdʒenjuɪn/',
        pos: 'adj.',
        cn: '真正的、真品的',
        col: 'genuine goods — 正品；a genuine reason — 真实的理由',
        ex: 'Some phones look genuine but are not.'
      },
      {
        w: 'donate',
        ph: '/dəʊˈneɪt/',
        pos: 'v.',
        cn: '捐赠、捐献',
        col: 'donate sth. to sb. — 把某物捐给某人；donate blood — 献血',
        ex: 'She donated her old coats to the village school.'
      },
      {
        w: 'recycle',
        ph: '/ˌriːˈsaɪkl/',
        pos: 'v.',
        cn: '回收利用',
        col: 'recycle paper — 回收纸张；recycle waste — 回收废物',
        ex: 'We recycle what is broken.'
      },
      {
        w: 'purchase',
        ph: '/ˈpɜːtʃəs/',
        pos: 'v./n.',
        cn: '购买；买到的东西',
        col: 'purchase sth. online — 在网上购买某物；make a purchase — 买下一件东西',
        ex: 'I purchased the desk two years ago.'
      }
    ],
    phrases: [
      {
        en: 'get rid of',
        cn: '把……处理掉、去掉',
        ex: 'It is hard to get rid of old books.'
      },
      {
        en: 'throw … away',
        cn: '把……扔掉',
        ex: 'Don’t throw that chair away; someone may need it.'
      },
      {
        en: 'think twice',
        cn: '多想一想、斟酌一下',
        ex: 'Think twice before you buy anything cheap.'
      },
      {
        en: 'in person',
        cn: '当面、亲自',
        ex: 'It is better to test the phone in person.'
      },
      {
        en: 'for sale',
        cn: '待售、出售',
        ex: 'She put the old bike up for sale.'
      },
      {
        en: 'end up doing sth.',
        cn: '最后（做了）某事、到头来',
        ex: 'He ended up buying a used one.'
      },
      {
        en: 'at least',
        cn: '至少',
        ex: 'Check the item for at least five minutes.'
      },
      {
        en: 'look for',
        cn: '寻找',
        ex: 'I am looking for a cheap desk.'
      },
      {
        en: 'keep an eye on',
        cn: '留意、留心看管',
        ex: 'Keep an eye on the second-hand apps.'
      },
      {
        en: 'be worth doing sth.',
        cn: '值得做某事',
        ex: 'The old market is worth visiting.'
      }
    ],
    writings: [
      {
        expr: 'It is true that ..., but ...',
        cn: '诚然……但是……',
        meaning: '先承认事物的缺点或对方的合理之处，再转折到自己的主张，论证显得公允而不偏激。',
        context: '议论文主体段的「让步 + 转折」：批评一件事之前先承认它的另一面。',
        alts: [
          {
            t: 'Admittedly, ...',
            n: '更书面'
          },
          {
            t: 'It cannot be denied that ...',
            n: '语气更强'
          },
          {
            t: 'To be fair, ...',
            n: '口语一些'
          }
        ],
        register: '中性偏书面，四级写作的高分句式。',
        example: 'It is true that second-hand shopping takes time, but the savings are real.'
      },
      {
        expr: 'That is to say, ...',
        cn: '也就是说……',
        meaning: '换一种更直白的说法重述上一句，把道理彻底说明白。',
        context: '解释完一个道理之后，用它把结论再压一遍；也用于澄清容易误解的地方。',
        alts: [
          {
            t: 'In other words, ...',
            n: '最常用'
          },
          {
            t: 'Put simply, ...',
            n: '更口语'
          },
          {
            t: 'Which means that ...',
            n: '接在句尾'
          }
        ],
        register: '中性，写作口语皆可。',
        example: 'One book that changes hands three times saves three new books; that is to say, reuse cuts waste.'
      }
    ],
    sentences: [
      {
        text: 'Built to last for years, an old chair may serve two more families before it finally breaks.',
        points: [
          '<b>主干</b>：an old chair may serve two more families（一把老椅子还能为两户人家所用）。',
          '<b>语法点</b>：Built to last for years 是<b>过去分词短语作状语</b>，逻辑主语就是主句的 an old chair——它是「被造成经久耐用的」。',
          '<b>语法点</b>：before 引导时间状语从句，it finally breaks 是「最终坏掉」，说明这句话说的是整段使用寿命。',
          '<b>为什么值得学</b>：把「Because it was built to ...」压缩成分词短语，句子立刻紧凑，是四级写作开头句的高级写法。',
          '<b>注意</b>：分词短语的逻辑主语必须和主句主语一致；换成 Built to last, people can use the chair for years. 就错了（people 并不是「被造出来的」）。常见变体：Made in 1980, this lamp still works.（产于 1980 年，这盏灯还能亮。）'
        ]
      },
      {
        text: 'A phone that looks fine in a photo may fail within a week, which is why careful checks matter more than low prices.',
        points: [
          '<b>主干</b>：A phone may fail within a week（一部手机可能一周内就坏）。',
          '<b>语法点</b>：that looks fine in a photo 是定语从句修饰 a phone，说明「照片里看着挺好」的那一部。',
          '<b>语法点</b>：which is why ... 是<b>非限制性定语从句</b>，which 指代前面整件事，再引出结果——「这就是为什么仔细检查更重要」。',
          '<b>为什么值得学</b>：which is why 可以把「现象 + 结论」两句话焊成一句，是议论文里最实用的衔接手段之一。',
          '<b>常见变体</b>：... , which is why I always test things before paying.（……所以我总要先试再付钱。）'
        ]
      }
    ],
    questions: [
      {
        en: 'What are the two main reasons why second-hand shopping has become popular?',
        cn: '二手购物流行起来的两个主要原因是什么？',
        ans: 'Prices keep rising, so not everyone can afford new things, and people care more about the environment.',
        ansCn: '一是价格不断上涨、不是人人买得起新东西，二是人们更关心环境。'
      },
      {
        en: 'What does the writer do with the things he no longer needs?',
        cn: '作者怎么处理自己不再需要的东西？',
        ans: 'He donates clothes that still look good, puts what is valuable up for sale, and recycles what is broken.',
        ansCn: '把还很好的衣服捐出去，把值钱的挂出去卖掉，把坏掉的回收利用。'
      },
      {
        en: 'What is the main idea of the passage?',
        cn: '这篇文章的主旨是什么？',
        ans: 'Second-hand shopping has become fashionable because it saves money and resources, though buyers should be careful when they buy.',
        ansCn: '二手购物因为省钱又省资源而流行起来，但买的时候要小心。'
      },
      {
        en: 'The idea “not everyone can afford new things” in the second paragraph can be replaced by which sentence?',
        cn: '第二段「并不是人人买得起新东西」这句话，可以用下面哪种说法替换？',
        ans: 'New things are too expensive for some people to buy.',
        ansCn: '新东西太贵，有些人买不起。'
      },
      {
        en: 'In “one book that changes hands three times saves three new books”, what does “changes hands” most probably mean?',
        cn: '在「一本转手三次的书能省下三本新书」这句话里，change hands 最可能是什么意思？',
        ans: 'It means the book is passed from one owner to another.',
        ansCn: '指书从一个主人手里转到另一个主人手里，也就是转手。'
      }
    ],
    writingTask: {
      en: 'Write 80–100 words about whether people should buy more second-hand things.',
      hints: [
        'It is true that ..., but ...',
        'That is to say, ...',
        'Take my own experience as an example: ...',
        'In the end, I believe that ...'
      ],
      hintCn: '三要素：先亮观点（该不该多买二手），再给理由（省钱、环保、有个性、有风险里挑两条），最后举一个自己的小例子。',
      req: '至少使用 2 个本篇学过的词或搭配（trend / consumer / reliable / think twice / get rid of / in person）。'
    },
    speakingTask: {
      en: 'Speak for one minute: give your opinion, one reason and one example.',
      points: [
        'Your opinion on buying second-hand',
        'One reason',
        'One example from your own life'
      ],
      pointCn: '一分钟内说完三段：观点、理由、例子；例子最好讲清楚买或卖的是什么东西。',
      skeleton: 'In my opinion, ... The reason is that ... For example, last winter I ... That is why ...'
    },
    focus: [
      '<b>新授核心词 14 个</b>：<span class=\'en\'>consumer, trend, worn, environment, item, resource, unique, reliable, bargain, doubt, genuine, donate, recycle, purchase</span> —— <span class=\'en\'>purchase</span> 比 <span class=\'en\'>buy</span> 正式；<span class=\'en\'>donate sth. to sb.</span> 与 <span class=\'en\'>recycle</span> 后面直接跟物；<span class=\'en\'>resource</span> 常用复数 <span class=\'en\'>resources</span>。',
      '<b>本篇复现的旧词</b>：第 1 篇的 <span class=\'en\'>afford</span>、第 3 篇的 <span class=\'en\'>trust</span>、第 4 篇的 <span class=\'en\'>brand / price</span>、第 6 篇的 <span class=\'en\'>waste</span>、第 11 篇的 <span class=\'en\'>hesitate</span>、第 14 篇的 <span class=\'en\'>valuable</span> —— 消费话题的老词又聚齐了。',
      '<b>句型：It is true that ..., but ...</b>：先承认缺点再转折，是议论文最稳的「让步 + 反驳」骨架；另一句 Built to last for years, ... 用分词短语开头，注意逻辑主语要和主句一致。',
      '<b>搭配四连</b>：<span class=\'en\'>get rid of</span>（处理掉）、<span class=\'en\'>throw … away</span>（扔掉）、<span class=\'en\'>think twice</span>（多想想）、<span class=\'en\'>in person</span>（当面）—— 二手交易场景里最高频的四个动作。',
      '<b>题型提醒</b>：同义替换题（not everyone can afford → too expensive to buy）要「换个说法还认得出」；词义猜测题（changes hands）要靠上下文与常识推断，别逐字硬译。'
    ],
    standard: {
      time: '约 35 分钟',
      bar: '325 词读两遍 · 核心词 14 个会认会用 · 阅读 5 题对 ≥ 4 · 80–100 词写作 + 1 分钟口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 14 个核心词中的 11 个（consumer、trend、reliable、recycle …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '10 个高频搭配掌握 7 个，能各造一句（get rid of、think twice、in person …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '2 处长难句能说出主干：分词短语开头句与 which is why 句，并仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；同义替换与词义猜测各 1 题要说清判断依据',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 80–100 词，观点—理由—例子三要素齐全，至少用上 2 个本篇词或搭配',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟说完「观点 + 理由 + 例子」，例子讲清买卖的具体物件',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点出正文里 7 处灰点旧词，说出意思并指出它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 23,
    slug: '023-friends-in-the-group-chat',
    title: 'Friends in the Group Chat',
    titleCn: '群聊里的朋友',
    stage: '阶段三 · 中级',
    stageRange: '第 21–30 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 335 词'
      },
      {
        k: '新词密度',
        v: '约 4.5%'
      },
      {
        k: '长难句',
        v: '3 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/023.jpg',
    coverCredit: 'Photo: Gists And Thrills Studios / Pexels',
    body: [
      'My phone never goes quiet: three group chats send jokes and news all day, and I answer with a tap. <span class="w-phrase" data-cn="表面上看">On the surface</span>, we are all close. <span class="w-sentence">What looks like a busy social life may be nothing more than a pile of quick replies.</span> But is this <span class="w-cet4" data-cn="现象">phenomenon</span> really <span class="w-cet4" data-cn="友谊">friendship</span>?',
      'Last month I almost missed my best friend’s birthday. I saw the photos in the group chat and pressed the usual button. That night I felt <span class="w-phrase" data-cn="受到冷落、被排斥在外">left out</span> and <span class="w-rev">lonely</span>: I knew everything about my friends and nothing about their days.',
      'The next day I did something I had not done for years. <span class="w-sentence">Calling instead of typing, I heard the pauses in his voice that a message can never carry.</span> We talked for an hour about nothing, and it felt <span class="w-cet4" data-cn="有意义的">meaningful</span>.',
      'Now we have a <span class="w-synonym" data-cn="＝ meaningful 的替换词">deep</span> <span class="w-rev">conversation</span> at least once a week, and meet <span class="w-phrase" data-cn="当面、面对面">in person</span> whenever we can. <span class="w-writing" data-cn="问题不在于……而在于……">The problem is not that</span> we are too busy, but that we let taps do the work of talking.',
      'Group chats are not the enemy. They help us <span class="w-cet4" data-cn="联系、接触">contact</span> people we rarely see and <span class="w-rev">reply</span> quickly when someone needs help. They also <span class="w-cet4" data-cn="影响">influence</span> us: we <span class="w-cet4" data-cn="反应、回应">react</span> to a joke in one second, and an <span class="w-cet4" data-cn="情感上的">emotional</span> day is <span class="w-rev">ignored</span> as fast.',
      'There is a hidden cost. <span class="w-sentence">When every message is answered at once, we begin to expect the same speed from everyone we know.</span> That <span class="w-cet4" data-cn="期待">expectation</span> becomes <span class="w-cet4" data-cn="压力">pressure</span>: we want an <span class="w-cet4" data-cn="即时的、立刻的">instant</span> answer and <span class="w-cet4" data-cn="打断">interrupt</span> whatever we are doing.',
      'So I made some rules. Every week I <span class="w-phrase" data-cn="主动联系某人">reach out to</span> one friend and <span class="w-phrase" data-cn="为……腾出时间">make time for</span> a long talk. When a message matters, I never <span class="w-cet4" data-cn="推迟、拖延">delay</span> my answer; when it does not, the phone can wait.',
      '<span class="w-writing" data-cn="简而言之……（收束全文）">To put it simply</span>, a group chat is a tool, not a friend. Use it to <span class="w-cet4" data-cn="交流、沟通">communicate</span>, but never let it <span class="w-cet4" data-cn="取代">replace</span> a <span class="w-synonym" data-cn="＝ close relationship 的替换词">bond</span> that grows face to face. On a screen, <span class="w-cet4" data-cn="语气">tone</span> is hard to read; real <span class="w-rev">attention</span> to one person turns the <span class="w-rev">distance</span> between two phones into a <span class="w-rev">connection</span>.'
    ],
    translation: [
      '我的手机从没安静过：三个群整天发来笑话和消息，我随手点一下就算回应。表面上看，我们彼此很熟。可一场看起来很热闹的社交生活，也许只是一堆快速回复而已。但这种现象真的算友谊吗？',
      '上个月，我差点错过最好朋友的生日。我在群里看到照片，按了一下惯常的按钮。那天夜里我莫名觉得被冷落又孤独：朋友们的一切我都知道，唯独不知道他们过得怎么样。',
      '第二天，我做了一件很多年没做过的事。我打了电话而不是打字，我听见了他声音里的停顿，那是消息永远带不来的东西。我们聊了一个小时的闲话，却觉得很有意义。',
      '现在我们每周至少有一次认真的交谈，能见面时就当面见。问题不在于我们太忙，而在于我们让手指的点击代替了说话。',
      '群聊并不是敌人。它帮我们联系上很少见面的人，有人需要帮忙时也能很快回应。它也在影响我们：一个笑话我们一秒就有反应，而朋友情绪糟糕的一天，同样一秒就被忽略了。',
      '还有一层看不见的代价。当每条消息都被立刻回复，我们就开始期待身边的每个人也这么快。这种期待变成压力：我们想要即时的回答，动不动就打断手头正在做的事。',
      '所以我给自己定了几条小规矩。每周主动联系一位朋友，为一次长谈腾出时间。真要紧的消息，我从不拖延回复；不要紧的，让手机等着就好。',
      '简而言之，群聊是工具，不是朋友。用它去沟通，但别让它取代那种只能面对面生长的情谊。屏幕上看不出语气；正是对一个人的真正关注，把两部手机之间的距离变成了人与人之间的联系。'
    ],
    vocabulary: [
      {
        w: 'phenomenon',
        ph: '/fəˈnɒmɪnən/',
        pos: 'n.',
        cn: '现象',
        col: 'a common phenomenon — 一种常见现象；social phenomenon — 社会现象',
        ex: 'This is a phenomenon of modern life.'
      },
      {
        w: 'friendship',
        ph: '/ˈfrendʃɪp/',
        pos: 'n.',
        cn: '友谊、友情',
        col: 'a close friendship — 亲密的友谊；build a friendship — 建立友谊',
        ex: 'Real friendship needs time.'
      },
      {
        w: 'meaningful',
        ph: '/ˈmiːnɪŋfl/',
        pos: 'adj.',
        cn: '有意义的、有意思的',
        col: 'a meaningful talk — 一次有意义的谈话；meaningful to sb. — 对某人有意义',
        ex: 'The hour felt meaningful to both of us.'
      },
      {
        w: 'contact',
        ph: '/ˈkɒntækt/',
        pos: 'n./v.',
        cn: '联系、联络',
        col: 'keep in contact with — 与……保持联系；contact sb. — 联系某人',
        ex: 'Group chats help me contact old classmates.'
      },
      {
        w: 'influence',
        ph: '/ˈɪnfluəns/',
        pos: 'n./v.',
        cn: '影响、感化',
        col: 'have an influence on — 对……有影响；influence sb. to do — 影响某人去做',
        ex: 'Phones influence how we treat each other.'
      },
      {
        w: 'react',
        ph: '/riˈækt/',
        pos: 'vi.',
        cn: '反应、回应',
        col: 'react to sth. — 对某事作出反应；react quickly — 反应很快',
        ex: 'We react to a joke in one second.'
      },
      {
        w: 'emotional',
        ph: '/ɪˈməʊʃənl/',
        pos: 'adj.',
        cn: '情感上的；情绪化的',
        col: 'emotional support — 情感上的支持；an emotional day — 情绪波动的一天',
        ex: 'An emotional day is easily ignored online.'
      },
      {
        w: 'expectation',
        ph: '/ˌekspekˈteɪʃn/',
        pos: 'n.',
        cn: '期待、期望',
        col: 'high expectations — 很高的期望；meet one’s expectations — 达到某人的期望',
        ex: 'Quick replies create a strong expectation.'
      },
      {
        w: 'pressure',
        ph: '/ˈpreʃə/',
        pos: 'n.',
        cn: '压力',
        col: 'under pressure — 在压力下；put pressure on sb. — 给某人施压',
        ex: 'The pressure to reply at once is real.'
      },
      {
        w: 'instant',
        ph: '/ˈɪnstənt/',
        pos: 'adj.',
        cn: '即时的、立刻的',
        col: 'an instant answer — 即时回复；instant food — 方便食品',
        ex: 'We want an instant answer to every message.'
      },
      {
        w: 'delay',
        ph: '/dɪˈleɪ/',
        pos: 'v./n.',
        cn: '推迟、拖延',
        col: 'delay doing sth. — 推迟做某事；without delay — 毫不拖延',
        ex: 'Never delay a message that matters.'
      },
      {
        w: 'interrupt',
        ph: '/ˌɪntəˈrʌpt/',
        pos: 'v.',
        cn: '打断、中断',
        col: 'interrupt sb. — 打断某人；be interrupted — 被打断',
        ex: 'Do not interrupt your work for every message.'
      },
      {
        w: 'communicate',
        ph: '/kəˈmjuːnɪkeɪt/',
        pos: 'vi.',
        cn: '交流、沟通',
        col: 'communicate with sb. — 与某人沟通；communicate ideas — 交流想法',
        ex: 'Use the chat to communicate, not to replace friends.'
      },
      {
        w: 'replace',
        ph: '/rɪˈpleɪs/',
        pos: 'vt.',
        cn: '取代、替换',
        col: 'replace A with B — 用乙取代甲；replace sb. — 接替某人',
        ex: 'A screen cannot replace a face.'
      },
      {
        w: 'tone',
        ph: '/təʊn/',
        pos: 'n.',
        cn: '语气、语调',
        col: 'in a friendly tone — 用友好的语气；the tone of a voice — 说话的语气',
        ex: 'Tone is hard to read on a screen.'
      }
    ],
    phrases: [
      {
        en: 'on the surface',
        cn: '表面上看',
        ex: 'On the surface, everything is fine.'
      },
      {
        en: 'feel left out',
        cn: '感到被冷落、觉得插不上话',
        ex: 'She felt left out in the big group chat.'
      },
      {
        en: 'in person',
        cn: '当面、面对面',
        ex: 'It is better to talk in person.'
      },
      {
        en: 'reach out to sb.',
        cn: '主动联系某人、向某人伸出援手',
        ex: 'Reach out to an old friend this week.'
      },
      {
        en: 'make time for',
        cn: '为……腾出时间',
        ex: 'Make time for a long talk.'
      },
      {
        en: 'keep in touch (with)',
        cn: '（与……）保持联系',
        ex: 'We keep in touch by phone.'
      },
      {
        en: 'at least',
        cn: '至少',
        ex: 'Call a friend at least once a week.'
      },
      {
        en: 'end up doing sth.',
        cn: '到头来（做了）某事',
        ex: 'We ended up talking for two hours.'
      },
      {
        en: 'turn … into …',
        cn: '把……变成……',
        ex: 'Turn online contacts into real friends.'
      },
      {
        en: 'catch up with',
        cn: '与……叙旧、了解近况',
        ex: 'Let us catch up with each other soon.'
      }
    ],
    writings: [
      {
        expr: 'The problem is not that ..., but that ...',
        cn: '问题不在于……而在于……',
        meaning: '把问题的真正原因指出来，先否定一个常见误解，再落到自己的判断上。',
        context: '分析现象成因的段落里，用来纠正「大家都这么想」的表面解释。',
        alts: [
          {
            t: 'It is not that ...; it is that ...',
            n: '语气更强'
          },
          {
            t: 'The trouble is not ... but ...',
            n: '稍口语'
          },
          {
            t: 'What really matters is not ... but ...',
            n: '书面'
          }
        ],
        register: '中性偏书面，议论与分析都好用。',
        example: 'The problem is not that we are too busy, but that we never plan the time.'
      },
      {
        expr: 'To put it simply, ...',
        cn: '简而言之……',
        meaning: '把前面复杂的分析压缩成一句好记的结论，收束全文。',
        context: '结尾段或长分析之后，给出一句话的核心观点。',
        alts: [
          {
            t: 'In short, ...',
            n: '最常用'
          },
          {
            t: 'In a word, ...',
            n: '更简短'
          },
          {
            t: 'To sum up, ...',
            n: '总结多条时用'
          }
        ],
        register: '中性，写作口语皆可。',
        example: 'To put it simply, a group chat is a tool, not a friend.'
      }
    ],
    sentences: [
      {
        text: 'What looks like a busy social life may be nothing more than a pile of quick replies.',
        points: [
          '<b>主干</b>：What looks like ... may be nothing more than ...（看起来像……的东西也许只是……）。',
          '<b>语法点</b>：What 引导<b>名词性从句</b>作主语；look like + 名词是「看起来像」，look 在这里是系动词。',
          '<b>语法点</b>：nothing more than 表示「只不过、仅仅是」，比 only 语气更带一点失望或揭穿的味道。',
          '<b>为什么值得学</b>：这是「给现象下定义」的高级句式，四级写作里批判某个流行做法时非常好用。',
          '<b>常见变体</b>：What he calls love may be nothing more than habit.（他所谓的爱也许只是习惯。）'
        ]
      },
      {
        text: 'Calling instead of typing, I heard the pauses in his voice that a message can never carry.',
        points: [
          '<b>主干</b>：I heard the pauses in his voice（我听见了他声音里的停顿）。',
          '<b>语法点</b>：Calling instead of typing 是<b>现在分词短语作状语</b>，表示动作方式；逻辑主语是主句的 I，也就是「我打电话而不是打字」。',
          '<b>语法点</b>：instead of 后面接动名词（typing）；that a message can never carry 是定语从句，修饰 the pauses。',
          '<b>为什么值得学</b>：分词短语开头把「对比」和「主句」压进一句话，读起来节奏好，也展示了非谓语的用法。',
          '<b>注意</b>：分词的逻辑主语必须等于主句主语。写成 Calling instead of typing, the pauses were clear. 就错了（pauses 不会打电话）。'
        ]
      },
      {
        text: 'When every message is answered at once, we begin to expect the same speed from everyone we know.',
        points: [
          '<b>主干</b>：we begin to expect the same speed（我们开始期待同样的速度）。',
          '<b>语法点</b>：when 引导时间状语从句，里面用<b>被动语态</b> is answered，让「消息」当主语，突出「被立刻回复」这件事。',
          '<b>语法点</b>：expect sth. from sb. 表示「对某人抱有某方面的期待」；everyone 后省略了关系词 that，we know 是定语从句。',
          '<b>为什么值得学</b>：被动 + 时间从句的组合，把一个社会现象写成了因果链条，正是阶段三要练的「夹叙夹议」句式。',
          '<b>常见变体</b>：Once a message is answered at once, we expect the same of others.（一旦消息被秒回，我们也这样要求别人。）'
        ]
      }
    ],
    questions: [
      {
        en: 'What did the writer do when he saw the photos of his best friend’s birthday?',
        cn: '看到最好朋友的生日照片时，作者做了什么？',
        ans: 'He pressed the usual button and went back to work.',
        ansCn: '他按了一下惯常的按钮，就回头继续工作了。'
      },
      {
        en: 'What did the writer do differently the next day?',
        cn: '第二天作者做了什么不一样的事？',
        ans: 'He called his friend instead of typing, and they talked for an hour.',
        ansCn: '他给朋友打了电话而不是发消息，两人聊了一个小时。'
      },
      {
        en: 'What is the main idea of the passage?',
        cn: '这篇文章的主旨是什么？',
        ans: 'Group chats keep us connected but rarely bring real communication, so we should give real attention to one person at a time.',
        ansCn: '群聊让我们随时相连，却很少带来真正的交流，所以要把真正的关注一次给一个人。'
      },
      {
        en: 'The sentence “we let taps do the work of talking” can be replaced by which idea?',
        cn: '「我们让手指的点击代替了说话」这句话，可以换成下面哪种说法？',
        ans: 'We use quick messages instead of having real conversations.',
        ansCn: '我们用快速的短消息代替了真正的交谈。'
      },
      {
        en: 'In “may be nothing more than a pile of quick replies”, what does “nothing more than” most probably mean?',
        cn: '在「也许只是一堆快速回复」中，nothing more than 最可能是什么意思？',
        ans: 'It means “only” or “just”, so the busy social life is nothing beyond quick replies.',
        ansCn: '意思是「只不过、仅仅是」，热闹的社交生活说到底只是快速回复而已。'
      }
    ],
    writingTask: {
      en: 'Write 80–100 words about how to turn online contacts into real friends.',
      hints: [
        'The problem is not that ..., but that ...',
        'To put it simply, ...',
        'Take my own experience as an example: ...',
        'That is why I now ...'
      ],
      hintCn: '三要素：先亮观点（线上之交如何变回真朋友），再给理由，最后用自己的一次具体经历收尾（打了电话、见了面、聊了什么）。',
      req: '至少使用 2 个本篇学过的词或搭配（meaningful / communicate / reach out to / in person / make time for）。'
    },
    speakingTask: {
      en: 'Speak for one minute: give your opinion, one reason and one example.',
      points: [
        'Your opinion on online friendship',
        'One reason',
        'One example from your own life'
      ],
      pointCn: '一分钟内说完三段：观点、理由、例子；例子要讲清楚你联系了谁、说了什么。',
      skeleton: 'In my opinion, ... The reason is that ... For example, last week I ... That is why I think ...'
    },
    focus: [
      '<b>新授核心词 15 个</b>：<span class=\'en\'>phenomenon, friendship, meaningful, contact, influence, react, emotional, expectation, pressure, instant, delay, interrupt, communicate, replace, tone</span> —— <span class=\'en\'>delay doing sth.</span>（推迟做，后接动名词）、<span class=\'en\'>react to</span>（对……作出反应）、<span class=\'en\'>replace A with B</span>（用乙取代甲）、<span class=\'en\'>communicate with</span>（与……沟通）是本批最该记住的四个搭配。',
      '<b>本篇复现的旧词</b>：第 1 篇的 <span class=\'en\'>attention</span>、第 3 篇的 <span class=\'en\'>lonely</span>、第 11 篇的 <span class=\'en\'>conversation</span>、第 13 篇的 <span class=\'en\'>reply / ignore</span>、第 17 篇的 <span class=\'en\'>connection</span>、第 21 篇的 <span class=\'en\'>distance</span> —— 跨了二十篇的老词，正好串起「沟通」这条线。',
      '<b>句型两连</b>：What 引导名词性从句给现象定性（What looks like ... may be nothing more than ...）；分词短语开头做对比（Calling instead of typing, I heard ...），注意逻辑主语要与主句一致。',
      '<b>搭配四连</b>：<span class=\'en\'>reach out to</span>（主动联系）、<span class=\'en\'>make time for</span>（腾出时间）、<span class=\'en\'>in person</span>（当面）、<span class=\'en\'>on the surface</span>（表面上看）—— 把「点赞之交」变回真朋友，靠的就是这几个动作。',
      '<b>题型提醒</b>：同义替换题（let taps do the work of talking ＝ use quick messages instead of real conversations）要看整句意思，别盯着单个词；词义猜测题（nothing more than）常考「看似否定其实只是弱化」的短语。'
    ],
    standard: {
      time: '约 35 分钟',
      bar: '335 词读两遍 · 核心词 15 个会认会用 · 阅读 5 题对 ≥ 4 · 80–100 词写作 + 1 分钟口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 15 个核心词中的 12 个（phenomenon、influence、communicate、tone …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '10 个高频搭配掌握 7 个，能各造一句（reach out to、make time for、in person …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '3 处长难句都能说出主干（名词性从句、分词短语、被动语态各 1 处），并仿写其中 1 句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；同义替换与词义猜测各 1 题要说清判断依据',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 80–100 词，观点—理由—例子三要素齐全，至少用上 2 个本篇词或搭配',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟说完「观点 + 理由 + 例子」，例子讲清联系了谁、聊了什么',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点出正文里 7 处灰点旧词，说出意思并指出它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 24,
    slug: '024-the-myth-of-multitasking',
    title: 'The Myth of Multitasking',
    titleCn: '多任务的误区',
    stage: '阶段三 · 中级',
    stageRange: '第 21–30 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 355 词'
      },
      {
        k: '新词密度',
        v: '约 4.2%'
      },
      {
        k: '长难句',
        v: '3 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/024.jpg',
    coverCredit: 'Photo: kaboompics / Pexels',
    body: [
      'Last term I believed I could do three things at once. One busy week in November, I wrote a report, answered messages, and listened to an online lecture <span class="w-phrase" data-cn="同时">at the same time</span>. I thought it was <span class="w-cet4" data-cn="高效的">efficient</span>.',
      'By midnight the report was full of <span class="w-cet4" data-cn="错误">errors</span>, I had missed <span class="w-synonym" data-cn="＝ almost 的替换词">nearly</span> half the lecture, and two friends felt <span class="w-rev">ignored</span>. <span class="w-sentence">I had sat at my desk for four hours, yet what I finished was worse than what I could have done in one quiet hour.</span>',
      'The problem has a name: the cost of <span class="w-cet4" data-cn="（注意力的）切换">switching</span>. The brain holds one thing in <span class="w-rev">focus</span>, and <span class="w-cet4" data-cn="频繁的">frequent</span> changes of direction force it to restart the next <span class="w-rev">task</span>: this <span class="w-cet4" data-cn="脑力的、精神上的">mental</span> work is not free. <span class="w-sentence">What looks like hard work is often only the tired feeling of starting again and again, which is why hours pass with no result.</span>',
      'So I ran an experiment. For one week I made a <span class="w-rev">schedule</span> each evening and did <span class="w-rev">one thing at a time</span>: the phone stayed in my bag, and I <span class="w-phrase" data-cn="关掉（设备、通知）">turned off</span> most notifications. Nothing important was <span class="w-cet4" data-cn="推迟、耽搁">delayed</span>.',
      '<span class="w-writing" data-cn="结果、因此（引出结果）">As a result</span>, everything got faster and cleaner. The report that had cost me an evening was finished before dinner, and my <span class="w-cet4" data-cn="表现、成绩">performance</span> in class improved. I stopped <span class="w-rev">wasting</span> minutes and felt more <span class="w-cet4" data-cn="富有成效的">productive</span>.',
      'The <span class="w-cet4" data-cn="策略">strategy</span> is simple. First, <span class="w-phrase" data-cn="列出……的清单">make a list of</span> what must be done. Second, keep every <span class="w-cet4" data-cn="打断、干扰">interruption</span> out of the room and <span class="w-cet4" data-cn="避免">avoid</span> the phone: one message can <span class="w-rev">distract</span> you for minutes. Third, <span class="w-phrase" data-cn="注意、专心于">pay attention to</span> one item until it is finished, or you will <span class="w-phrase" data-cn="最终落得……（常指不好的结果）">end up doing</span> the whole list badly.',
      'Of course, single-tasking is not a rule for everything. The problem is work that needs thought, where you really must <span class="w-cet4" data-cn="全神贯注、集中（注意力）">concentrate</span>. <span class="w-sentence">If your mind is asked to change direction every three minutes, it will never go deep enough to do anything well.</span>',
      '<span class="w-writing" data-cn="换句话说">In other words</span>, this is not about going slowly. Once you are <span class="w-cet4" data-cn="意识到的、察觉到的">aware</span> of the cost of switching, the simplest plan is often the most <span class="w-cet4" data-cn="有效的">effective</span> one, and it <span class="w-cet4" data-cn="保持、延续">remains</span> with you. What <span class="w-synonym" data-cn="＝ matters 的替换词">counts</span> is how much of each thing you finish. Even with a <span class="w-rev">deadline</span> ahead, a clear plan beats a busy one.'
    ],
    translation: [
      '上个学期，我一直以为自己能同时做三件事。十一月里忙碌的一周，我一边写报告，一边回消息，还同时听一场线上讲座。我以为这样很高效。',
      '到了半夜，报告里满是错误，讲座我漏掉了几乎一半，还有两位朋友觉得被冷落了。我在书桌前坐了四个小时，可最后做出来的东西，还不如安静的一小时里能做出来的好。',
      '这个问题有个名字：切换成本。大脑一次只能把一件事保持在焦点上，频繁的方向变化迫使它重新开始下一项任务：这种脑力消耗并不是免费的。看起来像在拼命干活的，其实往往只是反复从头开始带来的疲惫感；这就是时间一点点过去，却留不下任何成果的原因。',
      '于是我做了一次实验。有一周，我每天晚上都列好安排，一次只做一件事：手机放在包里，我把大部分通知都关掉。重要的事情一件也没耽搁。',
      '结果，一切都变得更快也更干净。那份曾经耗掉我一整个晚上的报告，晚饭前就写完了，我在课堂上的表现也提高了。我不再把时间浪费在找回进度上，也觉得更有成效了。',
      '这个策略很简单。第一，把要做的事列成清单。第二，把每一次打断都挡在房间外，也别碰手机：一条消息就能让你分心好几分钟。第三，专心做一件事，直到做完，否则你最终会把整张清单都做得很糟。',
      '当然，一次只做一件事并不是什么都要遵守的规矩。真正的问题出在需要思考的工作上，那类工作要求你全神贯注。如果每隔三分钟就要求你的思绪换一个方向，它就永远深入不下去，什么也做不好。',
      '换句话说，这并不是要你慢吞吞。一旦意识到切换的代价，最简单的方案往往也最有效，而且它会一直陪着你。真正要紧的是每件事你真正完成了多少。哪怕截止日期就在眼前，一个清晰的计划也胜过一个手忙脚乱的计划。'
    ],
    vocabulary: [
      {
        w: 'avoid',
        ph: '/əˈvɔɪd/',
        pos: 'vt.',
        cn: '避免、避开',
        col: 'avoid doing sth. — 避免做某事（后接动名词）；avoid a mistake — 避免犯错',
        ex: 'I avoid checking my phone while I write.'
      },
      {
        w: 'aware',
        ph: '/əˈweə/',
        pos: 'adj.',
        cn: '意识到的、察觉到的',
        col: 'be aware of sth. — 意识到某事；become aware — 察觉到',
        ex: 'Most students are not aware of the cost of switching.'
      },
      {
        w: 'concentrate',
        ph: '/ˈkɒnsntreɪt/',
        pos: 'v.',
        cn: '全神贯注、集中（注意力）',
        col: 'concentrate on sth. — 专心于某事；concentrate hard — 全神贯注',
        ex: 'Please be quiet; I need to concentrate.'
      },
      {
        w: 'delay',
        ph: '/dɪˈleɪ/',
        pos: 'v./n.',
        cn: '推迟、耽搁',
        col: 'delay doing sth. — 推迟做某事；a long delay — 长时间的耽搁',
        ex: 'Do not delay the report until Sunday.'
      },
      {
        w: 'effective',
        ph: '/ɪˈfektɪv/',
        pos: 'adj.',
        cn: '有效的、奏效的',
        col: 'an effective plan — 有效的计划；effective against — 对……有效',
        ex: 'Short daily practice is effective.'
      },
      {
        w: 'efficient',
        ph: '/ɪˈfɪʃnt/',
        pos: 'adj.',
        cn: '高效的、效率高的',
        col: 'an efficient way — 高效的方法；efficient work — 效率高的工作',
        ex: 'This is an efficient way to learn new words.'
      },
      {
        w: 'error',
        ph: '/ˈerə/',
        pos: 'n.',
        cn: '错误',
        col: 'make an error — 犯一个错误；full of errors — 错误百出',
        ex: 'The report was full of errors.'
      },
      {
        w: 'frequent',
        ph: '/ˈfriːkwənt/',
        pos: 'adj.',
        cn: '频繁的、经常的',
        col: 'frequent changes — 频繁的变化；frequent breaks — 经常性的休息',
        ex: 'Frequent changes make the work slower.'
      },
      {
        w: 'interruption',
        ph: '/ˌɪntəˈrʌpʃn/',
        pos: 'n.',
        cn: '打断、干扰',
        col: 'without interruption — 不受打扰地；an interruption to — 对……的干扰',
        ex: 'I studied for an hour without interruption.'
      },
      {
        w: 'mental',
        ph: '/ˈmentl/',
        pos: 'adj.',
        cn: '脑力的、精神上的',
        col: 'mental work — 脑力工作；mental health — 心理健康',
        ex: 'Writing a report is hard mental work.'
      },
      {
        w: 'performance',
        ph: '/pəˈfɔːməs/',
        pos: 'n.',
        cn: '表现、成绩',
        col: 'good performance — 表现好；improve one’s performance — 提高表现',
        ex: 'Her performance in class improved.'
      },
      {
        w: 'productive',
        ph: '/prəˈdʌktɪv/',
        pos: 'adj.',
        cn: '富有成效的',
        col: 'a productive day — 有成效的一天；productive work — 有成效的工作',
        ex: 'I was more productive after I changed my plan.'
      },
      {
        w: 'remain',
        ph: '/rɪˈmeɪn/',
        pos: 'v.',
        cn: '保持、仍然是；剩余',
        col: 'remain calm — 保持冷静；remain the same — 保持不变',
        ex: 'The habit will remain with you for years.'
      },
      {
        w: 'strategy',
        ph: '/ˈstrætədʒi/',
        pos: 'n.',
        cn: '策略、方法',
        col: 'a learning strategy — 学习策略；work out a strategy — 制定策略',
        ex: 'This strategy is easy to copy.'
      },
      {
        w: 'switch',
        ph: '/swɪtʃ/',
        pos: 'v./n.',
        cn: '切换、转换',
        col: 'switch from A to B — 从 A 切换到 B；a switch of — ……的转变',
        ex: 'Do not switch between two jobs every minute.'
      }
    ],
    phrases: [
      {
        en: 'at the same time',
        cn: '同时',
        ex: 'She cooks and listens to the news at the same time.'
      },
      {
        en: 'turn off',
        cn: '关掉（电器、屏幕、通知）',
        ex: 'Turn off your phone before the exam.'
      },
      {
        en: 'make a list of',
        cn: '列出……的清单',
        ex: 'Make a list of the things you must do today.'
      },
      {
        en: 'pay attention to',
        cn: '注意、专心于（后接宾语）',
        ex: 'Pay attention to one thing at a time.'
      },
      {
        en: 'end up doing sth.',
        cn: '最终落得……（常指出乎意料的结果）',
        ex: 'He tried to do everything and ended up doing nothing well.'
      },
      {
        en: 'be full of',
        cn: '充满、到处是',
        ex: 'The report is full of small errors.'
      },
      {
        en: 'again and again',
        cn: '一次又一次、反复',
        ex: 'He read the message again and again.'
      },
      {
        en: 'at once',
        cn: '同时（做几件事）；立刻',
        ex: 'You cannot do three things at once.'
      },
      {
        en: 'long after',
        cn: '在……过去很久之后',
        ex: 'She still remembers it long after the exam is over.'
      },
      {
        en: 'in class',
        cn: '在课堂上',
        ex: 'My performance in class got better.'
      },
      {
        en: 'from the beginning',
        cn: '从头开始',
        ex: 'After the break, he started again from the beginning.'
      }
    ],
    writings: [
      {
        expr: 'As a result, ...',
        cn: '结果、因此……',
        meaning: '引出前文行为或原因直接导致的结果，把因果关系说得明明白白。',
        context: '段首或句首：前面先写做法或原因，后面用它接上后果，说明类和叙事类作文都常用。',
        alts: [
          {
            t: 'As a consequence, ...',
            n: '更书面'
          },
          {
            t: 'Therefore, ...',
            n: '正式，议论文常用'
          },
          {
            t: 'So, ...',
            n: '口语化'
          }
        ],
        register: '中性，写作与口语都能用。',
        example: 'I worked on one thing at a time. As a result, I finished earlier and made fewer mistakes.'
      },
      {
        expr: 'In other words, ...',
        cn: '换句话说……',
        meaning: '换一种说法重申前一句，把抽象结论讲得更好懂，或者强调重点。',
        context: '解释完一个道理或结论之后，用更直白的话再说一遍；也可放在结尾段收束全文。',
        alts: [
          {
            t: 'That is to say, ...',
            n: '书面，稍正式'
          },
          {
            t: 'Put simply, ...',
            n: '口语化，好用'
          },
          {
            t: 'To put it another way, ...',
            n: '解释复杂观点时用'
          }
        ],
        register: '中性偏书面，说明与议论都合适。',
        example: 'Multitasking is slower in the short run. In other words, you save time by not switching.'
      }
    ],
    sentences: [
      {
        text: 'I had sat at my desk for four hours, yet what I finished was worse than what I could have done in one quiet hour.',
        points: [
          '<b>主干</b>：I had sat at my desk for four hours 与 what I finished was worse … 由 yet 连接成两个并列分句，yet 表转折，语气比 but 更强。',
          '<b>过去完成时 had sat</b>：表示「到半夜为止已经坐了四个小时」，比句中的过去视角更早、持续更久，是叙事里交代「此前已发生」的常用时态。',
          '<b>两个 what 从句</b>：what I finished 作主句的主语，what I could have done 作比较对象；what 相当于 the thing that，是名词性从句。',
          '<b>could have done</b>：情态动词 + 完成式，表示「本来能做到、实际上没有做到」，四级阅读里常考这一层含义。',
          '<b>为什么值得学</b>：一句话叠了并列、名词性从句、情态完成式三层结构，正好把「看似努力、实则低效」的对比说清楚，写作时可照这个模型仿写。'
        ]
      },
      {
        text: 'What looks like hard work is often only the tired feeling of starting again and again, which is why hours pass with no result.',
        points: [
          '<b>主干</b>：What looks like hard work is the tired feeling …，主语是 What 引导的主语从句，谓语动词用单数 is。',
          '<b>What = the thing that</b>：整个从句作主语，写作里可套用「What looks like … is often …」（看起来像……的，其实往往是……）。',
          '<b>which is why …</b>：非限制性定语从句，which 指前面一整句话，后面接表语从句，意思是「这就是……的原因」。',
          '<b>with no result</b>：介词短语作状语，result 在这里是可数名词，用 no 比 not any 语气更干脆。',
          '<b>为什么值得学</b>：这句把「假努力」解释得很透，四级写作里分析原因时，可以直接仿写这个「现象 + 原因」的句型。'
        ]
      },
      {
        text: 'If your mind is asked to change direction every three minutes, it will never go deep enough to do anything well.',
        points: [
          '<b>主干</b>：it will never go deep enough to do anything well；句首的 if 引导条件状语从句。',
          '<b>被动语态 is asked to</b>：主动形式是 ask your mind to …，改用被动后，「你的思绪」被放在主语位置，突出被支配、被打断的感觉。',
          '<b>enough to do</b>：「足够……可以做……」，enough 修饰形容词 deep 时要放在形容词之后，位置最容易写错。',
          '<b>never 的位置</b>：放在助动词 will 之后、实义动词之前；语气比 not 强，说明「永远不可能」。',
          '<b>常见变体</b>：可改成祈使句 Never change direction every three minutes；或者 …… enough for sb. to do sth.（对某人来说足够……去做……）。'
        ]
      }
    ],
    questions: [
      {
        en: 'What did the writer try to do in the busy week in November?',
        cn: '十一月那个忙碌的一周里，作者想做什么？',
        ans: 'He tried to write a report, answer messages, and listen to an online lecture at the same time.',
        ansCn: '他想同时写报告、回消息，还听一场线上讲座。'
      },
      {
        en: 'How did the writer work during the week of his experiment?',
        cn: '实验的那一周里，作者是怎么工作的？',
        ans: 'He made a schedule each evening and did one thing at a time, keeping the phone in his bag and turning off most notifications.',
        ansCn: '他每天晚上列好安排，一次只做一件事，把手机放在包里，关掉大部分通知。'
      },
      {
        en: 'What is the main idea of the passage?',
        cn: '这篇文章的主旨是什么？',
        ans: 'Multitasking looks fast, but it wastes time and lowers the quality of work, so doing one thing at a time is the more effective way.',
        ansCn: '同时做几件事看似更快，其实既费时间又降低质量，所以一次只做一件事才是更有效的做法。'
      },
      {
        en: 'In the last paragraph, which word can be replaced by “is important” without changing the meaning of the sentence?',
        cn: '最后一段里，哪个词可以换成「是重要的」而不改变句意？',
        ans: 'The word is “counts”, in the sentence “What counts is how much of each thing you finish”.',
        ansCn: '是那个表示「重要、要紧」的动词，出现在「真正要紧的是……」这句里。'
      },
      {
        en: 'In paragraph 3, the writer talks about “the cost of switching”. What does “switching” mean here?',
        cn: '第三段讲到「切换的代价」，这里的「切换」指的是什么？',
        ans: 'It means moving from one job to another before it is finished, so that the brain has to start again from the beginning.',
        ansCn: '指的是一件事还没做完就换到另一件，大脑不得不从头开始。'
      }
    ],
    writingTask: {
      en: 'Write 80–100 words about a time when doing several things at once caused problems, and what you do now instead.',
      hints: [
        'Last term, I tried to ... at the same time.',
        'As a result, ...',
        'In other words, ...',
        'Now I ... instead.'
      ],
      hintCn: '用 5–7 句话写一次「同时做几件事反而更糟」的经历：先写当时的情形，再写结果，最后写你现在改用的做法。观点、理由、例子三要素要齐全。',
      req: '至少使用 1 个本篇学过的词或搭配（efficient / concentrate / switch / end up doing / as a result）。'
    },
    speakingTask: {
      en: 'Do you agree that doing one thing at a time is better than doing several things at once? Speak for one minute: give your opinion, one reason and one example.',
      points: [
        'Your opinion',
        'One reason',
        'One small example'
      ],
      pointCn: '先明确表明立场，再给一个理由，最后举一个自己的小例子，三部分都要有。',
      skeleton: 'In my opinion, doing one thing at a time is better. That is because ... For example, last week I ...'
    },
    focus: [
      '<b>新授核心词 15 个</b>：<span class=\'en\'>avoid, aware, concentrate, delay, effective, efficient, error, frequent, interruption, mental, performance, productive, remain, strategy, switch</span> —— 重点记 <span class=\'en\'>avoid doing sth.</span>（后接动名词）、<span class=\'en\'>delay doing sth.</span>（推迟做某事）、<span class=\'en\'>concentrate on</span>（专心于）；<span class=\'en\'>effective</span>（有效的）与 <span class=\'en\'>efficient</span>（高效的）拼写相近、意思不同，别记混。',
      '<b>本篇复现的旧词</b>：第 6 篇的 <span class=\'en\'>focus</span>（保持在焦点上）、<span class=\'en\'>schedule</span>（每天列安排）、<span class=\'en\'>waste</span>（浪费时间）、<span class=\'en\'>distract</span>（使分心）、<span class=\'en\'>deadline</span>（截止日期）与短语 <span class=\'en\'>one thing at a time</span>（一次做一件事）、第 13 篇的 <span class=\'en\'>ignored</span>（被冷落、被忽视）、第 15 篇的 <span class=\'en\'>task</span>（任务）—— 都是换了新语境再认一次，灰点只标一次。',
      '<b>三个长难句</b>：第一句是 yet 连接的并列 + 两个 what 从句 + could have done（本来能做到、实际没做到）；第二句是 What 主语从句 + which is why 的非限制性定语从句；第三句是条件句里的被动 + enough to。三句分别承担「对比」「解释原因」「提建议」三种功能，值得各仿写一句。',
      '<b>高频搭配 5 个</b>：<span class=\'en\'>at the same time</span>（同时）、<span class=\'en\'>turn off</span>（关掉）、<span class=\'en\'>make a list of</span>（列出清单）、<span class=\'en\'>pay attention to</span>（专心于）、<span class=\'en\'>end up doing sth.</span>（最终落得……）—— 注意 end up 后面接动名词，不接不定式。',
      '<b>全文逻辑线与题型提醒</b>：以为多任务快（经历）→ 结果更糟（转折）→ 解释切换成本（原因）→ 一周实验（证据）→ 三条做法（建议）→ 留出例外（让步）→ 点题（要紧的是完成）。第 4 题的同义替换识别题，做法是把题干里的替换词还原成原文用词；第 5 题的词义猜测题，答案就在该词后面的解释句里。'
    ],
    standard: {
      time: '约 35 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 15 个核心词遮住中文说出 ≥ 11 · 3 个长难句会拆结构 · 完成 80–100 词写作与 1 分钟口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 15 个核心词中的 11 个（switch、concentrate、efficient、interruption …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '11 个高频搭配掌握 8 个，能各造一句（at the same time、end up doing、make a list of …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 3 个长难句各自的主干与从句类型，并各仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；同义替换与词义猜测题要在原文找到依据',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 80–100 词，至少用上 As a result, … 或 In other words, …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟说清「一次只做一件事是否更好」的立场，给出一个理由和一个例子',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 8 处灰点旧词，说出其中 6 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 25,
    slug: '025-city-convenience-country-quiet',
    title: 'City Convenience, Country Quiet',
    titleCn: '城市的便利，乡村的安静',
    stage: '阶段三 · 中级',
    stageRange: '第 21–30 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 355 词'
      },
      {
        k: '新词密度',
        v: '约 4.2%'
      },
      {
        k: '长难句',
        v: '2 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/025.jpg',
    coverCredit: 'Photo: John Bravar / Pexels',
    body: [
      'I grew up in a small village and now study in a city far from home. I <span class="w-phrase" data-cn="过去常常做某事">used to</span> think the village was too quiet, and now I am <span class="w-phrase" data-cn="习惯于做某事">used to doing</span> everything in a hurry. <span class="w-writing" data-cn="说到……（引出话题）">When it comes to</span> where to live, my answer keeps changing.',
      'In the city, <span class="w-cet4" data-cn="便利、方便">convenience</span> is everywhere. A clinic, a library and a night market are all within a short walk, buses run until midnight, and packages arrive the next morning. <span class="w-synonym" data-cn="＝ convenient 的替换词">Handy</span> <span class="w-cet4" data-cn="服务">services</span> like these <span class="w-rev">save</span> me time.',
      'But city life has its own <span class="w-cet4" data-cn="要求、需求">demands</span>. <span class="w-cet4" data-cn="房租">Rent</span> takes half of my monthly budget, streets are <span class="w-cet4" data-cn="拥挤的、挤满的">crowded</span> at rush hours, and traffic noise <span class="w-phrase" data-cn="占据（时间、空间）">takes up</span> the quiet of the evening. Buses are packed, and even a short trip <span class="w-rev">costs</span> an hour.',
      'At home in the village, life is <span class="w-cet4" data-cn="宁静的、平和的">peaceful</span>. The air is clean, the <span class="w-cet4" data-cn="风景">scenery</span> changes with the seasons, and neighbours greet you by name. <span class="w-sentence">Living in the village for a month last summer, I found that the quiet nights did more for my sleep than any medicine I had tried.</span>',
      'Yet the village is not perfect. Public <span class="w-cet4" data-cn="交通运输">transport</span> stops at eight, so evening classes are <span class="w-phrase" data-cn="不再">no longer</span> possible; there is a <span class="w-cet4" data-cn="缺乏">lack</span> of doctors, and the nearest bookshop is some <span class="w-cet4" data-cn="距离">distance</span> away. <span class="w-cet4" data-cn="当地的">Local</span> jobs are few, which is why most young people are drawn to cities and <span class="w-cet4" data-cn="安顿下来、定居">settle</span> there.',
      'What that month taught me is that every <span class="w-cet4" data-cn="选择">choice</span> gives something and asks for something in return. The city offers <span class="w-synonym" data-cn="＝ a lot of 的替换词">plenty of</span> <span class="w-cet4" data-cn="资源">resources</span> and more <span class="w-rev">opportunities</span>; the village offers a healthier <span class="w-cet4" data-cn="环境">environment</span> and a slower <span class="w-rev">pace</span> of life.',
      'So the real question is which place you need now. <span class="w-sentence">What I miss most about the city is not the shopping centres, but the feeling that anything I need is only ten minutes away.</span> <span class="w-writing" data-cn="这取决于……">It depends on</span> your age, your work and your health.',
      'These days I live in the city, but I keep a few country habits: I go everywhere <span class="w-phrase" data-cn="步行">on foot</span> when I can, <span class="w-rev">turn off</span> the screen early, and keep in touch with home every Sunday. Whatever you choose, choose it with clear eyes, and keep a little <span class="w-rev">balance</span>.'
    ],
    translation: [
      '我在一个小村庄长大，现在在离家很远的城市读书。我过去总觉得村子太安静，如今却习惯了什么都匆匆忙忙。说到该住在哪里，我的答案一直在变。',
      '在城市里，便利无处不在。诊所、图书馆、夜市都在步行几分钟的地方，公交运行到半夜，包裹第二天一早就送到。这些方便的服务帮我省下了时间。',
      '但城市生活也有自己的要求。房租吃掉我每月一半的预算，早晚高峰街上挤满了人，交通噪音占去了夜晚的安静。公交车里挤得满满当当，哪怕很短的一趟路，也要花掉我一个小时。',
      '在村里的家，生活是宁静的。空气干净，风景随四季变化，邻居能叫出你的名字。去年夏天我在村里住了一个月，发现安静的夜晚对睡眠的帮助，胜过我试过的任何药物。',
      '然而村子也并不完美。公共交通八点就收车，晚上的课再也上不成；医生缺乏，最近的书店也在一段距离之外。当地的工作很少，所以大多数年轻人被城市吸引，在那里安顿下来。',
      '那一个月让我明白，每一种选择都会给予一些东西，也会要求一些回报。城市提供更多的资源和机会；乡村提供更健康的环境和更慢的生活节奏。',
      '所以真正的问题是你此刻需要哪个地方。我想念城市，最想念的不是购物中心，而是那种任何需要的东西都只有十分钟路程的感觉。这取决于你的年纪、工作和身体状况。',
      '如今我住在城市，但也保留着几个乡村习惯：能走路就走路，早早关掉屏幕，每个星期天和家里保持联系。无论你选什么，都要看得清楚，并给自己留一点平衡。'
    ],
    vocabulary: [
      {
        w: 'choice',
        ph: '/tʃɔɪs/',
        pos: 'n.',
        cn: '选择、挑选',
        col: 'make a choice — 做出选择；have no choice — 别无选择',
        ex: 'Living in the city is a choice, not a rule.'
      },
      {
        w: 'convenience',
        ph: '/kənˈviːniəns/',
        pos: 'n.',
        cn: '便利、方便',
        col: 'for convenience — 为了方便；modern convenience — 现代化的便利',
        ex: 'I enjoy the convenience of the city.'
      },
      {
        w: 'crowded',
        ph: '/ˈkraʊdɪd/',
        pos: 'adj.',
        cn: '拥挤的、挤满的',
        col: 'crowded streets — 挤满人的街道；be crowded with — 挤满了……',
        ex: 'The bus was crowded at rush hour.'
      },
      {
        w: 'demand',
        ph: '/dɪˈmɑːnd/',
        pos: 'n./v.',
        cn: '要求、需求',
        col: 'meet the demands — 满足要求；demand an answer — 要求答复',
        ex: 'City life has its own demands.'
      },
      {
        w: 'distance',
        ph: '/ˈdɪstəns/',
        pos: 'n.',
        cn: '距离、远处',
        col: 'in the distance — 在远处；some distance away — 有一段距离',
        ex: 'The village is some distance from the city.'
      },
      {
        w: 'environment',
        ph: '/ɪnˈvaɪrənmənt/',
        pos: 'n.',
        cn: '环境',
        col: 'a healthy environment — 健康的环境；protect the environment — 保护环境',
        ex: 'The country offers a quieter environment.'
      },
      {
        w: 'lack',
        ph: '/læk/',
        pos: 'n./v.',
        cn: '缺乏、没有',
        col: 'a lack of — 缺乏……；lack experience — 缺乏经验',
        ex: 'There is a lack of doctors in the village.'
      },
      {
        w: 'local',
        ph: '/ˈləʊkl/',
        pos: 'adj.',
        cn: '当地的、本地的',
        col: 'local jobs — 当地的工作；the local people — 当地人',
        ex: 'Local shops close early in the evening.'
      },
      {
        w: 'peaceful',
        ph: '/ˈpiːsfl/',
        pos: 'adj.',
        cn: '宁静的、平和的',
        col: 'a peaceful evening — 宁静的夜晚；feel peaceful — 感到平静',
        ex: 'The village is peaceful at night.'
      },
      {
        w: 'rent',
        ph: '/rent/',
        pos: 'n./v.',
        cn: '房租；租用',
        col: 'pay the rent — 付房租；rent a room — 租一个房间',
        ex: 'Rent takes half of my monthly budget.'
      },
      {
        w: 'resource',
        ph: '/rɪˈsɔːs/',
        pos: 'n.',
        cn: '资源',
        col: 'natural resources — 自然资源；share resources — 共享资源',
        ex: 'The city offers plenty of resources for students.'
      },
      {
        w: 'scenery',
        ph: '/ˈsiːnəri/',
        pos: 'n.',
        cn: '风景、景色（不可数）',
        col: 'beautiful scenery — 美丽的风景；enjoy the scenery — 欣赏风景',
        ex: 'The scenery changes with the seasons.'
      },
      {
        w: 'service',
        ph: '/ˈsɜːvɪs/',
        pos: 'n.',
        cn: '服务',
        col: 'public services — 公共服务；be of service to — 对……有帮助',
        ex: 'Handy services save me a lot of time.'
      },
      {
        w: 'settle',
        ph: '/ˈsetl/',
        pos: 'v.',
        cn: '安顿下来、定居；解决',
        col: 'settle in a place — 在某地安顿下来；settle a problem — 解决问题',
        ex: 'Many young people settle in big cities.'
      },
      {
        w: 'transport',
        ph: '/ˈtrænspɔːt/',
        pos: 'n.',
        cn: '交通运输',
        col: 'public transport — 公共交通；means of transport — 交通方式',
        ex: 'Public transport stops at eight here.'
      }
    ],
    phrases: [
      {
        en: 'used to do sth.',
        cn: '过去常常做某事（现在已经不这样）',
        ex: 'I used to think the village was too quiet.'
      },
      {
        en: 'be used to doing sth.',
        cn: '习惯于做某事（后接动名词）',
        ex: 'Now I am used to getting up early.'
      },
      {
        en: 'in a hurry',
        cn: '匆忙、赶时间',
        ex: 'He left in a hurry and forgot his bag.'
      },
      {
        en: 'take up',
        cn: '占据（时间、空间）；开始从事',
        ex: 'Rent takes up half of my budget.'
      },
      {
        en: 'no longer',
        cn: '不再',
        ex: 'The shop is no longer open at night.'
      },
      {
        en: 'by name',
        cn: '叫出名字、按名字',
        ex: 'The teacher knows every student by name.'
      },
      {
        en: 'in return',
        cn: '作为回报、作为交换',
        ex: 'The city asks for money, and gives convenience in return.'
      },
      {
        en: 'be drawn to',
        cn: '被吸引到……',
        ex: 'Young people are drawn to big cities.'
      },
      {
        en: 'on foot',
        cn: '步行',
        ex: 'I go to class on foot when I can.'
      },
      {
        en: 'keep in touch (with)',
        cn: '（与……）保持联系',
        ex: 'She keeps in touch with her family every week.'
      },
      {
        en: 'far from',
        cn: '远离；远非',
        ex: 'The village is far from the nearest hospital.'
      }
    ],
    writings: [
      {
        expr: 'When it comes to ...',
        cn: '说到……、涉及到……',
        meaning: '把话题引到某件事上，是对比类、议论类作文最常用的开头句式。',
        context: '段首或全文开头：先用它点出要讨论的话题，再给出双方观点或自己的立场。',
        alts: [
          {
            t: 'As for ..., ...',
            n: '更简单，转到某个方面'
          },
          {
            t: 'On the subject of ..., ...',
            n: '正式，书面'
          },
          {
            t: 'Talking about ..., ...',
            n: '口语化'
          }
        ],
        register: '中性，写作口语都常用。',
        example: 'When it comes to where to live, people rarely agree.'
      },
      {
        expr: 'It depends on ...',
        cn: '这取决于……',
        meaning: '表示结论不是绝对的，要看具体情况，用来给出有分寸的判断。',
        context: '提出「没有唯一答案」的论点时使用，后面列出取决的因素（时间、年龄、预算……）。',
        alts: [
          {
            t: 'That depends on ...',
            n: '承接上文时用'
          },
          {
            t: 'It is decided by ...',
            n: '更书面'
          },
          {
            t: 'Whether ... depends on ...',
            n: '完整句式，书面'
          }
        ],
        register: '中性，回答选择类问题最好用。',
        example: 'It depends on your age, your work and what you can afford.'
      }
    ],
    sentences: [
      {
        text: 'Living in the village for a month last summer, I found that the quiet nights did more for my sleep than any medicine I had tried.',
        points: [
          '<b>主干</b>：I found that …，that 引导宾语从句；句首的 Living in the village for a month last summer 是非谓语作状语。',
          '<b>非谓语作状语</b>：现在分词短语放在句首，表示「在村里住了一个月之后」，逻辑主语就是主句的 I；比写 After I lived in the village … 更紧凑。',
          '<b>比较结构 did more for my sleep than …</b>：more 与 than 配对，比较的对象是「安静夜晚的作用」与「药物的作用」，注意前后结构一致。',
          '<b>I had tried</b>：过去完成时，表示「在那之前我试过的所有药」，时间层次比 found 更早。',
          '<b>为什么值得学</b>：一句话里有非谓语状语、宾语从句、比较结构、过去完成时四层结构，是四级阅读长句的经典模型，也适合用来写「经历 + 发现」。'
        ]
      },
      {
        text: 'What I miss most about the city is not the shopping centres, but the feeling that anything I need is only ten minutes away.',
        points: [
          '<b>主干</b>：What I miss most … is the feeling …，主语是 What 引导的主语从句，谓语用单数 is。',
          '<b>not … but …</b>：不是……而是……，否定前者、突出后者，这里对比「购物中心」与「随时可得的感觉」。',
          '<b>the feeling that …</b>：that 引导同位语从句，说明 feeling 的内容；这是名词后面解释「内容」的常见写法。',
          '<b>only ten minutes away</b>：away 表示距离，前面接具体时间或路程，是很地道的口语表达。',
          '<b>为什么值得学</b>：这句是「对比类」作文的模板句——把「想念什么」写成抽象感受而不是具体事物，立意立刻更深一层。'
        ]
      }
    ],
    questions: [
      {
        en: 'What conveniences of city life does the writer mention?',
        cn: '作者提到了城市生活的哪些便利？',
        ans: 'A clinic, a library and a night market within a short walk, buses running until midnight, and packages arriving the next morning.',
        ansCn: '步行几分钟就有诊所、图书馆和夜市，公交运行到半夜，包裹第二天一早就送到。'
      },
      {
        en: 'Why are evening classes no longer possible in the village?',
        cn: '为什么在村里再也上不了晚上的课？',
        ans: 'Because public transport stops at eight, so people cannot get home after an evening class.',
        ansCn: '因为公共交通八点就收车，上完晚课回不了家。'
      },
      {
        en: 'What is the main idea of the passage?',
        cn: '这篇文章的主旨是什么？',
        ans: 'Both the city and the country have their own advantages and costs, and which one is better depends on what you need at the moment.',
        ansCn: '城市和乡村各有各的好与难，哪一个更好取决于你此刻需要什么。'
      },
      {
        en: 'In paragraph 2, which word can be replaced by “convenient” without changing the meaning?',
        cn: '第二段中哪个词可以换成「方便的」而不改变句意？',
        ans: 'The word is “handy”, as in “Handy services like these save me a lot of time”.',
        ansCn: '是那个表示「方便、顺手」的形容词，句中用来修饰服务。'
      },
      {
        en: 'In paragraph 5, what does “settle” mean when the writer says young people settle in cities?',
        cn: '第五段说年轻人在城市「安顿下来」，这里的「安顿」是什么意思？',
        ans: 'It means to make a place your home and live there for a long time.',
        ansCn: '指在一个地方安家、长期住下去。'
      }
    ],
    writingTask: {
      en: 'Write 80–100 words about whether you would rather live in a city or in the country, and explain why.',
      hints: [
        'When it comes to where to live, ...',
        'The city offers ..., while the village offers ...',
        'It depends on ...',
        'I would rather live ... because ...'
      ],
      hintCn: '用 5–7 句话写你的选择：先表明观点，再给两条理由，最后举一个自己的小例子。观点、理由、例子三要素要齐全。',
      req: '至少使用 1 个本篇学过的词或搭配（convenience / resource / environment / be used to doing / take up）。'
    },
    speakingTask: {
      en: 'Would you rather live in a big city or in the countryside? Speak for one minute: give your opinion, one reason and one example.',
      points: [
        'Your opinion',
        'One reason',
        'One example from your life'
      ],
      pointCn: '先表明你会选城市还是乡村，再给一个理由，最后举一个来自自己生活的例子。',
      skeleton: 'I would rather live in ... In my opinion, ... For example, ...'
    },
    focus: [
      '<b>新授核心词 15 个</b>：<span class=\'en\'>choice, convenience, crowded, demand, distance, environment, lack, local, peaceful, rent, resource, scenery, service, settle, transport</span> —— <span class=\'en\'>convenience / environment / resource</span> 是四级写作高频抽象词；<span class=\'en\'>lack</span> 既可作名词（a lack of）也可作动词（lack sth.）；<span class=\'en\'>scenery</span> 是不可数名词，不说 a scenery。',
      '<b>本篇复现的旧词</b>：第 4 篇的 <span class=\'en\'>cost</span>（花掉一个小时）、第 6 篇的 <span class=\'en\'>balance</span>（留一点平衡）、第 7 篇的 <span class=\'en\'>save</span>（省下时间）、第 11 篇的 <span class=\'en\'>opportunities</span>（机会）、第 17 篇的 <span class=\'en\'>pace / turn off</span>（生活节奏、关掉屏幕）—— 换了城乡语境再认一次。',
      '<b>两个长难句</b>：第一句是「非谓语作状语 + that 宾语从句 + 比较结构 + 过去完成时」四层叠加；第二句是「What 主语从句 + not … but … + that 同位语从句」。第一句写「经历 + 发现」，第二句写「对比 + 升华」，正好覆盖本篇的两种写法。',
      '<b>搭配对比</b>：<span class=\'en\'>used to do sth.</span>（过去常常、现在不了）与 <span class=\'en\'>be used to doing sth.</span>（习惯于）只差一个字，但意思完全不同，是四级语法改错的常客；另记 <span class=\'en\'>take up</span>（占据）、<span class=\'en\'>no longer</span>（不再）、<span class=\'en\'>in return</span>（作为回报）。',
      '<b>全文逻辑线与题型提醒</b>：城市的好 → 城市的难 → 乡村的好 → 乡村的难 → 各有得失 → 取决于需要 → 折中做法。对比类文章两面都要写足，结论才有分寸。第 4 题同义替换识别，把题干里的形容词还原成原文用词；第 5 题词义猜测，看该词后面的落脚点（在哪里长期住）。'
    ],
    standard: {
      time: '约 35 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 15 个核心词遮住中文说出 ≥ 11 · 2 个长难句会拆结构 · 完成 80–100 词写作与 1 分钟口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 15 个核心词中的 11 个（convenience、resource、environment、settle …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '11 个高频搭配掌握 8 个，尤其分清 used to do 与 be used to doing',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 2 个长难句各自的主干与从句类型，并各仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；同义替换与词义猜测题要在原文找到依据',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 80–100 词，至少用上 When it comes to … 或 It depends on …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟说清「选城市还是乡村」的立场，给出一个理由和一个例子',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 6 处灰点旧词，说出其中 5 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 26,
    slug: '026-one-small-green-habit',
    title: 'One Small Green Habit',
    titleCn: '一个小小的环保习惯',
    stage: '阶段三 · 中级',
    stageRange: '第 21–30 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 365 词'
      },
      {
        k: '新词密度',
        v: '约 4.1%'
      },
      {
        k: '长难句',
        v: '3 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/026.jpg',
    coverCredit: 'Photo: Kevin Malik / Pexels',
    body: [
      'Last winter I bought coffee every morning <span class="w-phrase" data-cn="在去……的路上">on the way to class</span>, and each cup was <span class="w-cet4" data-cn="一次性的">disposable</span>: paper on the outside, <span class="w-cet4" data-cn="塑料">plastic</span> on the inside. As an <span class="w-cet4" data-cn="普通的">ordinary</span> <span class="w-cet4" data-cn="消费者">consumer</span>, I never thought about where those cups went.',
      'Then a teacher asked us to keep every paper cup for one week. By Friday the pile on my desk was ugly, and <span class="w-phrase" data-cn="第一次">for the first time</span> I felt real <span class="w-cet4" data-cn="担心、忧虑">concern</span>. I was <span class="w-cet4" data-cn="愿意的">willing</span> to try one small change: carry my own cup.',
      '<span class="w-cet4" data-cn="习惯">Habits</span> like this work better than big slogans. <span class="w-writing" data-cn="一则……（引出第一条理由）">For one thing</span>, a slogan is far away, while a cup in your bag is real and <span class="w-cet4" data-cn="实用的">practical</span>. <span class="w-sentence">Once a behaviour is repeated for a few weeks, it stops being a decision and becomes part of the day.</span>',
      'The first week took real <span class="w-rev">effort</span>: I forgot the cup twice. Then I made the habit easy: a light cup that is widely <span class="w-cet4" data-cn="可获得的、可买到的">available</span>, left <span class="w-phrase" data-cn="紧挨着、在……旁边">next to</span> the door where a small <span class="w-rev">reminder</span> is enough. <span class="w-cet4" data-cn="逐渐地">Gradually</span> it became automatic, and it was easy to <span class="w-cet4" data-cn="保持、维持">maintain</span>.',
      'After two months the change was <span class="w-synonym" data-cn="＝ obvious 的替换词">clear</span>. My own cup had <span class="w-cet4" data-cn="取代、替换">replaced</span> about a hundred disposable ones, and I had <span class="w-rev">reduced</span> the paper and plastic I <span class="w-phrase" data-cn="把……扔掉">threw away</span> every week. The café near school even gives a discount to students with their own cup.',
      'One cup does not save the planet, but habits have <span class="w-cet4" data-cn="影响">influence</span>. When my roommate saw my cup, he bought one too, and soon half of our class carried their own: a small <span class="w-rev">community</span> change. <span class="w-sentence">What begins as one person’s small decision can travel further than any poster on the classroom wall.</span>',
      'Some people say one cup is nothing against a mountain of <span class="w-rev">rubbish</span>, and they are half right: one cup cannot <span class="w-rev">prevent</span> waste by itself. But once you start carrying it, you also <span class="w-cet4" data-cn="回收利用">recycle</span> more and buy things with less <span class="w-cet4" data-cn="包装">packaging</span>, and small habits begin to <span class="w-phrase" data-cn="堆积起来、越积越多">pile up</span>.',
      'So if you want to help, do not wait for a perfect plan. <span class="w-writing" data-cn="只有……（才能……）">Only by starting small</span> can real change begin. <span class="w-sentence">The habit that you can keep for a year will always do more than the perfect plan that you give up after a week.</span> The cup is <span class="w-synonym" data-cn="＝ inexpensive 的替换词">cheap</span>, but the habit has <span class="w-rev">value</span> that lasts.'
    ],
    translation: [
      '去年冬天，我每天早上在上学路上买咖啡，每个杯子都是一次性的：外面是纸，里面是塑料。作为一个普通的消费者，我从没想过这些杯子后来去了哪里。',
      '然后老师让我们把每一个纸杯都留一周。到星期五，我桌上的那一堆很难看，我第一次感到了真正的担忧。我愿意试一个小改变：自己带杯子。',
      '这样的习惯比响亮的口号更管用。一则，口号离得太远，而包里的杯子是真实又实用的。一个行为重复几周之后，它就不再是一个决定，而成了生活的一部分。',
      '第一周花了我不少力气：我忘了带两次杯子。后来我把这个习惯变得容易：一只轻便、到处都买得到的杯子，放在门边，那一点提醒就够了。慢慢地，它变成了自动的动作，坚持下来也很容易。',
      '两个月后，变化很清楚。我自己的杯子已经取代了大约一百个一次性杯子，我每周扔掉的纸和塑料也少了。学校附近的咖啡店甚至会给自带杯子的同学打折。',
      '一只杯子救不了地球，但习惯会有影响。室友看到我的杯子，也买了一只，很快我们班一半的同学都自带杯子：这是一个小小的社区变化。一个人的小决定，能走得比教室墙上的任何海报都远。',
      '有人说，面对成堆的垃圾，一只杯子什么也不是；他们说对了一半：靠杯子本身，阻止不了浪费。但一旦你开始带杯子，你也会更多地回收，买包装更少的东西，小习惯开始一点点累积起来。',
      '所以，如果你想做点什么，不要等一个完美的计划。只有从小处做起，真正的改变才会开始。一个你能坚持一年的习惯，永远比一个你一周就放弃的完美计划更有用。杯子很便宜，但这个习惯带来的价值会一直都在。'
    ],
    vocabulary: [
      {
        w: 'available',
        ph: '/əˈveɪləbl/',
        pos: 'adj.',
        cn: '可获得的、可买到的',
        col: 'be available — 可以买到／可以得到；widely available — 到处都有',
        ex: 'Light cups are widely available online.'
      },
      {
        w: 'concern',
        ph: '/kənˈsɜːn/',
        pos: 'n./v.',
        cn: '担心、忧虑；关心',
        col: 'feel concern — 感到担忧；be concerned about — 关心、担心',
        ex: 'I felt real concern when I saw the pile.'
      },
      {
        w: 'consumer',
        ph: '/kənˈsjuːmə/',
        pos: 'n.',
        cn: '消费者',
        col: 'an ordinary consumer — 普通消费者；consumer choice — 消费者的选择',
        ex: 'Consumers can change the market with small choices.'
      },
      {
        w: 'disposable',
        ph: '/dɪˈspəʊzəbl/',
        pos: 'adj.',
        cn: '一次性的、用后即弃的',
        col: 'disposable cups — 一次性杯子；disposable income — 可支配收入',
        ex: 'We should use fewer disposable products.'
      },
      {
        w: 'gradually',
        ph: '/ˈɡrædʒuəli/',
        pos: 'adv.',
        cn: '逐渐地',
        col: 'gradually change — 逐渐改变；gradually get used to — 慢慢习惯',
        ex: 'Gradually, carrying the cup became automatic.'
      },
      {
        w: 'habit',
        ph: '/ˈhæbɪt/',
        pos: 'n.',
        cn: '习惯',
        col: 'form a habit — 养成习惯；break a habit — 改掉习惯',
        ex: 'One small habit can change a lot.'
      },
      {
        w: 'influence',
        ph: '/ˈɪnfluəns/',
        pos: 'n./v.',
        cn: '影响',
        col: 'have influence on — 对……有影响；be influenced by — 受……影响',
        ex: 'Friends have a strong influence on what we buy.'
      },
      {
        w: 'maintain',
        ph: '/meɪnˈteɪn/',
        pos: 'vt.',
        cn: '保持、维持；保养',
        col: 'maintain a habit — 保持一个习惯；maintain a car — 保养汽车',
        ex: 'It is easy to maintain the habit once it is formed.'
      },
      {
        w: 'ordinary',
        ph: '/ˈɔːdnri/',
        pos: 'adj.',
        cn: '普通的、平常的',
        col: 'ordinary people — 普通人；in ordinary times — 在平常时候',
        ex: 'Ordinary people can make a difference.'
      },
      {
        w: 'packaging',
        ph: '/ˈpækɪdʒɪŋ/',
        pos: 'n.',
        cn: '包装（不可数）',
        col: 'less packaging — 更少的包装；plastic packaging — 塑料包装',
        ex: 'Try to buy things with less packaging.'
      },
      {
        w: 'plastic',
        ph: '/ˈplæstɪk/',
        pos: 'n./adj.',
        cn: '塑料；塑料的',
        col: 'plastic bag — 塑料袋；plastic waste — 塑料垃圾',
        ex: 'The inside of the cup is plastic.'
      },
      {
        w: 'practical',
        ph: '/ˈpræktɪkl/',
        pos: 'adj.',
        cn: '实用的、切实可行的',
        col: 'a practical idea — 实用的想法；practical advice — 实用的建议',
        ex: 'This is a practical way to start.'
      },
      {
        w: 'recycle',
        ph: '/ˌriːˈsaɪkl/',
        pos: 'v.',
        cn: '回收利用',
        col: 'recycle paper — 回收纸张；recycle bottles — 回收瓶子',
        ex: 'We recycle more now than last year.'
      },
      {
        w: 'replace',
        ph: '/rɪˈpleɪs/',
        pos: 'vt.',
        cn: '取代、替换',
        col: 'replace A with B — 用 B 替换 A；replace old ones — 换掉旧的',
        ex: 'My own cup replaced a hundred paper ones.'
      },
      {
        w: 'willing',
        ph: '/ˈwɪlɪŋ/',
        pos: 'adj.',
        cn: '愿意的',
        col: 'be willing to do sth. — 愿意做某事；willing to help — 乐意帮忙',
        ex: 'She is willing to try new things.'
      }
    ],
    phrases: [
      {
        en: 'on the way (to …)',
        cn: '在去……的路上',
        ex: 'I buy coffee on the way to class.'
      },
      {
        en: 'for the first time',
        cn: '第一次、首次',
        ex: 'For the first time, I felt concern about the cups.'
      },
      {
        en: 'next to',
        cn: '紧挨着、在……旁边',
        ex: 'Leave the cup next to the door.'
      },
      {
        en: 'throw … away',
        cn: '把……扔掉',
        ex: 'We threw away too much paper last week.'
      },
      {
        en: 'pile up',
        cn: '堆积起来、越积越多',
        ex: 'Small habits pile up and become real change.'
      },
      {
        en: 'be willing to do sth.',
        cn: '愿意做某事',
        ex: 'He is willing to carry his own cup.'
      },
      {
        en: 'on the outside / on the inside',
        cn: '外面一层／里面一层',
        ex: 'Paper on the outside, plastic on the inside.'
      },
      {
        en: 'give a discount',
        cn: '打折、给折扣',
        ex: 'The café gives a discount to students.'
      },
      {
        en: 'wait for',
        cn: '等待',
        ex: 'Do not wait for a perfect plan.'
      },
      {
        en: 'think about',
        cn: '考虑、想到',
        ex: 'Think about where the cup goes after the coffee.'
      },
      {
        en: 'by itself',
        cn: '靠自己、独自；自动地',
        ex: 'One cup cannot change the world by itself.'
      }
    ],
    writings: [
      {
        expr: 'For one thing, ...',
        cn: '一则……、首先……',
        meaning: '引出第一条理由，常与 For another, …（再则……）配对使用，把理由分成两点来说。',
        context: '主体段落：说明「为什么」时，先用它列第一条理由，下一句用 For another 补第二条。',
        alts: [
          {
            t: 'For another, ...',
            n: '配对的第二条，常跟在同一段里'
          },
          {
            t: 'First of all, ...',
            n: '更口语，序数感更强'
          },
          {
            t: 'On the one hand, ...',
            n: '用于两面对比时'
          }
        ],
        register: '中性，议论文与说明文都好用。',
        example: 'For one thing, a habit is small enough to keep every day.'
      },
      {
        expr: 'Only by ...',
        cn: '只有通过……（才能……）',
        meaning: '把「方式」提到句首加以强调，后面的主句要用部分倒装（can we / will we / do we）。',
        context: '结尾段提做法、给建议时使用，语气比普通句式更强，是四级写作的加分句型。',
        alts: [
          {
            t: 'Not until ..., ...',
            n: '直到……才……，同样要倒装'
          },
          {
            t: 'It is by ... that ...',
            n: '强调句式，不倒装'
          },
          {
            t: 'Without ..., ...',
            n: '从反面说「没有……就……」'
          }
        ],
        register: '偏书面，结尾收束最有力。',
        example: 'Only by starting small can real change begin.'
      }
    ],
    sentences: [
      {
        text: 'Once a behaviour is repeated for a few weeks, it stops being a decision and becomes part of the day.',
        points: [
          '<b>主干</b>：it stops being a decision and becomes part of the day；句首 Once 引导时间状语从句，意思是「一旦……就……」。',
          '<b>被动语态 is repeated</b>：动作的执行者被省略，重点放在「行为被反复做」这件事上；写习惯类文章时用被动可以避免重复提「你」。',
          '<b>stops being / becomes</b>：stop 后接动名词表示「停止做某事」，become 是系动词，后面接名词短语 part of the day 作表语。',
          '<b>for a few weeks</b>：表示持续时间，注意 for + 时间段，不能换成 during。',
          '<b>为什么值得学</b>：一句话讲清「习惯是怎么养成的」，四级写作里谈习惯、坚持、改变时可以直接套用这个句型。'
        ]
      },
      {
        text: 'What begins as one person’s small decision can travel further than any poster on the classroom wall.',
        points: [
          '<b>主干</b>：What begins as one person’s small decision can travel further …，主语是 What 引导的主语从句。',
          '<b>What = the thing that</b>：从句整体作主语，谓语用单数 can travel；这是四级写作里「以小见大」的常用开头。',
          '<b>begin as …</b>：「以……开始」，说明起点很小；与后面的 travel further 形成对比。',
          '<b>further than any poster</b>：比较结构，further 是 far 的比较级，表示「比……走得更远」，暗含「影响更大」。',
          '<b>为什么值得学</b>：这句话把「个人小事」与「公共宣传」作对比，是环保、习惯类作文最好用的升华句之一。'
        ]
      },
      {
        text: 'The habit that you can keep for a year will always do more than the perfect plan that you give up after a week.',
        points: [
          '<b>主干</b>：The habit will always do more than the perfect plan，主语和宾语各带一个 that 定语从句。',
          '<b>两个 that 定语从句</b>：that you can keep for a year 修饰 The habit，that you give up after a week 修饰 the perfect plan，都是限制性定语从句，that 在从句中作宾语。',
          '<b>do more than</b>：「比……做得更多、更有用」，do 在这里表示「起作用」，比 be better 更口语也更有力。',
          '<b>give up</b>：放弃，短语动词；注意与 give away、give out 区分。',
          '<b>为什么值得学</b>：两个定语从句对称出现，形成「能坚持的小习惯 vs 一周就放弃的完美计划」的对比，四级写作的对比句可以照这个结构写。'
        ]
      }
    ],
    questions: [
      {
        en: 'What did the teacher ask the students to do for one week?',
        cn: '老师让学生做一件什么事，做一周？',
        ans: 'He asked them to keep every paper cup for one week.',
        ansCn: '老师让他们把每一个纸杯都留一周。'
      },
      {
        en: 'How did the writer make the new habit easy to keep?',
        cn: '作者怎么让这个新习惯变得容易坚持？',
        ans: 'He chose a light cup that is widely available and left it next to the door as a small reminder.',
        ansCn: '他挑了一只轻便、到处都买得到的杯子，放在门边当作提醒。'
      },
      {
        en: 'What is the main idea of the passage?',
        cn: '这篇文章的主旨是什么？',
        ans: 'A small habit that you can keep is more effective than a big slogan or a perfect plan, because repeated small actions slowly change what you do.',
        ansCn: '能长期坚持的小习惯，比响亮的口号和完美的计划更有效，因为反复的小行动会慢慢改变你的行为。'
      },
      {
        en: 'In paragraph 3, which word can be replaced by “useful” without changing the meaning?',
        cn: '第三段中哪个词可以换成「有用的」而不改变句意？',
        ans: 'The word is “practical”, as in “a cup in your bag is real and practical”.',
        ansCn: '是那个表示「实用的」形容词。'
      },
      {
        en: 'In paragraph 7, the writer says “small habits begin to pile up”. What does “pile up” mean here?',
        cn: '第七段说小习惯开始「堆积起来」，这里是什么意思？',
        ans: 'It means that small actions become more and more and finally add up to something big.',
        ansCn: '指小行动越来越多，最后累积成很大的效果。'
      }
    ],
    writingTask: {
      en: 'Write 80–100 words about one small green habit you want to start, and explain why small habits work.',
      hints: [
        'As an ordinary consumer, I ...',
        'For one thing, ...',
        'Only by ... can we ...',
        'The habit I want to keep is ...'
      ],
      hintCn: '用 5–7 句话写你想开始的一个小环保习惯：先表明观点，再给理由，最后举一个具体的例子。观点、理由、例子三要素要齐全。',
      req: '至少使用 1 个本篇学过的词或搭配（habit / practical / gradually / pile up / be willing to）。'
    },
    speakingTask: {
      en: 'Is one small habit enough to help the environment? Speak for one minute: give your opinion, one reason and one example.',
      points: [
        'Your opinion',
        'One reason',
        'One example from your life'
      ],
      pointCn: '先明确回答够不够，再给一个理由，最后举一个自己生活里的小例子。',
      skeleton: 'In my opinion, one small habit is / is not enough. That is because ... For example, ...'
    },
    focus: [
      '<b>新授核心词 15 个</b>：<span class=\'en\'>available, concern, consumer, disposable, gradually, habit, influence, maintain, ordinary, packaging, plastic, practical, recycle, replace, willing</span> —— <span class=\'en\'>consumer / influence / concern</span> 是四级高频抽象词；<span class=\'en\'>replace A with B</span>（用 B 替换 A）；<span class=\'en\'>be willing to do sth.</span>（愿意做某事）；<span class=\'en\'>maintain</span> 比 keep 更书面，强调「长期维持」；<span class=\'en\'>packaging</span> 是不可数名词。',
      '<b>本篇复现的旧词</b>：第 8 篇的 <span class=\'en\'>reduced</span>（减少了纸和塑料）、第 9 篇的 <span class=\'en\'>community</span>（社区层面的小变化）、第 10 篇的 <span class=\'en\'>effort</span>（第一周很费力）、第 18 篇的 <span class=\'en\'>value</span>（习惯的价值）、第 19 篇的 <span class=\'en\'>rubbish</span>（成堆的垃圾）、第 20 篇的 <span class=\'en\'>prevent / remind</span>（阻止浪费、门边的提醒）。',
      '<b>三个长难句</b>：第一句是 Once 条件句 + 被动 + stop doing；第二句是 What 主语从句 + 比较结构；第三句是两个对称的 that 定语从句 + do more than 比较。三句分别讲「习惯如何养成」「小事如何变大」「坚持胜过计划」，正好是本篇的三步立意。',
      '<b>搭配与写作表达</b>：<span class=\'en\'>be willing to do sth.</span>、<span class=\'en\'>give a discount</span>、<span class=\'en\'>throw … away</span>、<span class=\'en\'>pile up</span>、<span class=\'en\'>for the first time</span>；写作表达 <span class=\'en\'>For one thing, …</span>（一则）常与 For another 配对，<span class=\'en\'>Only by …</span> 后面主句要部分倒装（can real change begin）。',
      '<b>全文逻辑线与题型提醒</b>：一次性杯子的觉察（经历）→ 一周实验（证据）→ 小习惯为何有效（道理）→ 怎么坚持（方法）→ 两个月后的变化（结果）→ 影响身边的人（升华）→ 回应质疑（让步）→ 倒装句收尾（立意）。第 4 题同义替换识别，把题干里的常用词还原成原文用词；第 5 题词义猜测，看短语动词所在的整句意思。'
    ],
    standard: {
      time: '约 35 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 15 个核心词遮住中文说出 ≥ 11 · 3 个长难句会拆结构 · 完成 80–100 词写作与 1 分钟口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 15 个核心词中的 11 个（habit、practical、influence、maintain …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '11 个高频搭配掌握 8 个，能各造一句（be willing to、throw … away、pile up …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 3 个长难句各自的主干与从句类型，并各仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；同义替换与词义猜测题要在原文找到依据',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 80–100 词，至少用上 For one thing, … 或 Only by … can we …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟说清「一个小习惯够不够」的立场，给出一个理由和一个例子',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 7 处灰点旧词，说出其中 5 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 27,
    slug: '027-what-we-buy-when-we-are-tired',
    title: 'What We Buy When We Are Tired',
    titleCn: '疲惫时我们买什么',
    stage: '阶段三 · 中级',
    stageRange: '第 21–30 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 375 词'
      },
      {
        k: '新词密度',
        v: '约 4.2%'
      },
      {
        k: '长难句',
        v: '2 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/027.jpg',
    coverCredit: 'Photo: Tim Douglas / Pexels',
    body: [
      'Last month, during two hard weeks of exams, every evening I came home with no energy left, dropped onto the sofa and opened a shopping app. <span class="w-sentence">I told myself I was only looking, but by the end of the second week five small boxes had arrived at my door.</span>',
      'The things themselves were <span class="w-rev">cheap</span>: socks, a bottle and a lamp <span class="w-phrase" data-cn="特价、打折出售">on sale</span>. <span class="w-writing" data-cn="问题在于……（点出关键）">The problem is that</span> my tired self kept making choices my rested self would never make, and a small <span class="w-rev">waste</span> became a large one.',
      'Shopping when we are tired is not really about the things. After a long and <span class="w-cet4" data-cn="压力大的、紧张的">stressful</span> day, the brain wants a quick <span class="w-cet4" data-cn="奖赏、回报">reward</span>, and buying something is the fastest way to get one. A bright picture can give us a feeling of success.',
      'Shops know this; the way they <span class="w-cet4" data-cn="做广告、宣传">advertise</span> is built for tired eyes. The buy button is large, the <span class="w-cet4" data-cn="购物车">cart</span> is one click away, and <span class="w-cet4" data-cn="把戏、花招">tricks</span> like “only two left” make us act at once. Nothing in that <span class="w-cet4" data-cn="设计">design</span> makes us think twice, so we are easily <span class="w-cet4" data-cn="说服">persuaded</span>.',
      'One Sunday, sitting with my phone, I <span class="w-phrase" data-cn="把……加起来算一算">added up</span> what those boxes had really <span class="w-rev">cost</span> me and <span class="w-rev">decided</span> to try a small rule. I may look at any <span class="w-cet4" data-cn="商品、一件东西">item</span>, but <span class="w-cet4" data-cn="除非">unless</span> I still want it the next morning, I do not buy it. Every <span class="w-synonym" data-cn="＝ buy 的书面替换词">purchase</span> has to survive a night.',
      'The rule is small, but it changed my evenings. The <span class="w-cet4" data-cn="冲动、强烈的欲望">urge</span> to buy still comes when I am <span class="w-synonym" data-cn="＝ very tired 的替换词">exhausted</span>, but now I do not <span class="w-phrase" data-cn="向……屈服、忍不住">give in to</span> the <span class="w-cet4" data-cn="冲动、一时的念头">impulse</span>; <span class="w-cet4" data-cn="避免">avoiding</span> a bad buy costs me nothing. <span class="w-cet4" data-cn="反而、代替">Instead</span> of paying at once, I <span class="w-phrase" data-cn="把事情留到第二天再决定">sleep on it</span>.',
      '<span class="w-sentence">What we buy when we are tired is not really an object but a few minutes of rest, and those minutes are gone long before the box is opened.</span> <span class="w-writing" data-cn="老实说……（引出坦白的看法）">To be honest</span>, that short <span class="w-cet4" data-cn="安慰、舒适">comfort</span> never <span class="w-cet4" data-cn="使满足">satisfies</span> us for long; the things we thought we <span class="w-rev">needed</span> sit <span class="w-rev">unopened</span> in a corner.',
      'Being tired is not a good adviser. Next time you want to buy at eleven at night, wait until morning; that small <span class="w-cet4" data-cn="暂停、停顿">pause</span> is <span class="w-phrase" data-cn="值得做">worth doing</span>. If the want is real, it will still be there; if not, you save money. My late-night shopping is under <span class="w-rev">control</span>, and what I finally buy keeps its <span class="w-rev">value</span>.'
    ],
    translation: [
      '上个月，备考最紧张的两周里，每天晚上回到家，我一点力气都不剩，瘫在沙发上，打开手机里的购物软件。我告诉自己只是随便看看，可到第二周快结束时，门口已经堆了五个小包裹。',
      '东西本身都不贵：一双袜子、一个瓶子，还有一盏打折的台灯。问题在于，累坏了的我一直在替休息好了的我做决定，于是一点点的小浪费变成了一个大数目。',
      '人在疲惫时购物，买的其实不是东西。劳累了一天之后，大脑想要一点快速的奖赏，而买东西是拿到奖赏最快的办法。一张亮眼的图片，就能给我们一点成就感。',
      '商家很清楚这一点；他们做广告的方式，就是为疲惫的眼睛设计的。购买按钮很大，购物车离一键下单只差一步，「只剩两件」这样的小花招让我们立刻行动。那样的设计里没有任何东西让我们多想一步，于是我们很容易就被说服了。',
      '一个星期天，我拿着手机坐下来，把那些包裹真正花掉的钱加在一起，然后决定给自己立一条小规矩：什么东西我都可以看，但除非第二天早上我还想要，否则我就不买。每一笔购买都得先熬过一个晚上。',
      '这条规矩很小，却改变了我的晚上。疲惫的时候，想买东西的冲动还是会来，但我不再向它屈服；避开一次糟糕的购买，对我没有任何损失。我不再当场付钱，而是把事情留到第二天再决定。',
      '我们疲惫时买的，其实不是一件物品，而是几分钟的休息，可这几分钟在箱子打开之前早就溜走了。老实说，那一点点安慰从来没有满足过我们；我们以为自己需要的东西，就那样原封不动地堆在角落里。',
      '疲惫不是一个好顾问。下次深夜十一点想买东西时，先等到第二天早上；这一下小小的暂停是值得的。如果想要的东西是真的想要，它明早还在；如果不是，你就省下了钱。我深夜的购物得到了控制，而我最终买下的东西也保得住价值。'
    ],
    vocabulary: [
      {
        w: 'reward',
        ph: '/rɪˈwɔːd/',
        pos: 'n./v.',
        cn: '奖赏、回报',
        col: 'a small reward — 一点小奖赏；reward sb. for sth. — 因某事奖赏某人',
        ex: 'A quiet evening is a good reward after a hard day.'
      },
      {
        w: 'stress',
        ph: '/stres/',
        pos: 'n./v.',
        cn: '压力；使紧张',
        col: 'under stress — 在压力之下；stress the importance of — 强调……的重要性',
        ex: 'Students often eat badly when they are under stress.'
      },
      {
        w: 'urge',
        ph: '/ɜːdʒ/',
        pos: 'n./v.',
        cn: '冲动、强烈的欲望；力劝',
        col: 'an urge to do sth. — 做某事的冲动；urge sb. to do sth. — 力劝某人做某事',
        ex: 'She felt a sudden urge to buy the whole box.'
      },
      {
        w: 'impulse',
        ph: '/ˈɪmpʌls/',
        pos: 'n.',
        cn: '冲动、一时的念头',
        col: 'buy on impulse — 凭冲动购买；a sudden impulse — 一时的念头',
        ex: 'Most things bought on impulse end up in a corner.'
      },
      {
        w: 'persuade',
        ph: '/pəˈsweɪd/',
        pos: 'vt.',
        cn: '说服、劝服',
        col: 'persuade sb. to do sth. — 说服某人做某事；be persuaded by — 被……说服',
        ex: 'The bright picture persuaded me to open my wallet.'
      },
      {
        w: 'advertise',
        ph: '/ˈædvətaɪz/',
        pos: 'v.',
        cn: '做广告、宣传',
        col: 'advertise online — 在网上做广告；advertise a product — 宣传一件产品',
        ex: 'Shops advertise the same thing again and again.'
      },
      {
        w: 'item',
        ph: '/ˈaɪtəm/',
        pos: 'n.',
        cn: '商品、一件东西',
        col: 'every item — 每一件商品；an item of clothing — 一件衣服',
        ex: 'I returned two items the next morning.'
      },
      {
        w: 'cart',
        ph: '/kɑːt/',
        pos: 'n.',
        cn: '购物车',
        col: 'a shopping cart — 购物车；put sth. in the cart — 把某物放进购物车',
        ex: 'I left three things in the cart overnight.'
      },
      {
        w: 'pause',
        ph: '/pɔːz/',
        pos: 'n./v.',
        cn: '暂停、停顿',
        col: 'make a pause — 停顿一下；pause for a moment — 停一会儿',
        ex: 'A short pause before paying can save a lot.'
      },
      {
        w: 'avoid',
        ph: '/əˈvɔɪd/',
        pos: 'vt.',
        cn: '避免、避开',
        col: 'avoid doing sth. — 避免做某事（后接动名词）；avoid a mistake — 避免犯错',
        ex: 'It is hard to avoid buying things late at night.'
      },
      {
        w: 'unless',
        ph: '/ənˈles/',
        pos: 'conj.',
        cn: '除非、如果不',
        col: 'unless it rains — 除非下雨；not … unless … — 除非……才……',
        ex: 'I do not shop after ten unless I really have to.'
      },
      {
        w: 'satisfy',
        ph: '/ˈsætɪsfaɪ/',
        pos: 'vt.',
        cn: '使满足、使满意',
        col: 'satisfy one’s needs — 满足需要；satisfy sb. — 让某人满意',
        ex: 'A new thing rarely satisfies us for long.'
      },
      {
        w: 'design',
        ph: '/dɪˈzaɪn/',
        pos: 'n./v.',
        cn: '设计；设计、打算',
        col: 'be designed for — 为……而设计；a new design — 一个新的设计',
        ex: 'The page is designed to make paying easy.'
      },
      {
        w: 'trick',
        ph: '/trɪk/',
        pos: 'n.',
        cn: '把戏、花招；诡计',
        col: 'play a trick on — 捉弄；a clever trick — 一个小花招',
        ex: '“Only two left” is a common trick on shopping pages.'
      },
      {
        w: 'instead',
        ph: '/ɪnˈsted/',
        pos: 'adv.',
        cn: '反而、代替',
        col: 'instead of — 代替、而不是（后接名词或动名词）；do sth. instead — 改做某事',
        ex: 'I closed the app and read instead.'
      },
      {
        w: 'comfort',
        ph: '/ˈkʌmfət/',
        pos: 'n.',
        cn: '安慰、舒适',
        col: 'a small comfort — 一点安慰；for comfort — 为了舒服',
        ex: 'Buying gives a short comfort, not a real answer.'
      }
    ],
    phrases: [
      {
        en: 'on sale',
        cn: '特价、打折出售',
        ex: 'The lamp was on sale for one evening only.'
      },
      {
        en: 'add up',
        cn: '把……加起来、合计',
        ex: 'Add up what you spent last month.'
      },
      {
        en: 'give in to',
        cn: '向……屈服、忍不住（诱惑、冲动）',
        ex: 'Do not give in to the urge to buy at once.'
      },
      {
        en: 'sleep on it',
        cn: '把事情留到第二天再决定',
        ex: 'If you are not sure, sleep on it.'
      },
      {
        en: 'be worth doing',
        cn: '值得做',
        ex: 'Waiting one day is worth doing.'
      },
      {
        en: 'a waste of money',
        cn: '浪费钱',
        ex: 'That shirt was a waste of money.'
      },
      {
        en: 'keep … under control',
        cn: '把……控制住',
        ex: 'A simple rule keeps late-night shopping under control.'
      },
      {
        en: 'pay for sth.',
        cn: '为某物付钱',
        ex: 'I paid for the book the next morning.'
      },
      {
        en: 'act at once',
        cn: '立刻行动、马上动手',
        ex: 'Pages like this make us act at once.'
      },
      {
        en: 'have a clear head',
        cn: '头脑清醒',
        ex: 'You shop better with a clear head.'
      }
    ],
    writings: [
      {
        expr: 'The problem is that ...',
        cn: '问题在于……',
        meaning: '用来点出真正的问题所在，把前文的现象收束成一句判断，比直接说 I think 更有分析感。',
        context: '议论段的开头或中间：先描述一个现象，再用它指出关键问题。',
        alts: [
          {
            t: 'The trouble is that ...',
            n: '稍口语'
          },
          {
            t: 'What really matters is that ...',
            n: '更强调重点'
          },
          {
            t: 'The point is that ...',
            n: '口语常用'
          }
        ],
        register: '中性，写作口语都自然。',
        example: 'The problem is that tired people make fast choices.'
      },
      {
        expr: 'To be honest, ...',
        cn: '老实说……（引出坦白的看法）',
        meaning: '在给出个人感受或不太光彩的事实之前先作铺垫，语气坦诚。',
        context: '夹叙夹议的文章里，从叙事转到自我剖析的段落开头。',
        alts: [
          {
            t: 'Honestly, ...',
            n: '更短、更口语'
          },
          {
            t: 'To tell the truth, ...',
            n: '意思相同，稍正式'
          },
          {
            t: 'Admittedly, ...',
            n: '书面，承认某个事实时用'
          }
        ],
        register: '中性偏口语，写作中用在个人感受处最自然。',
        example: 'To be honest, I knew the lamp was useless the next morning.'
      }
    ],
    sentences: [
      {
        text: 'I told myself I was only looking, but by the end of the second week five small boxes had arrived at my door.',
        points: [
          '<b>主干</b>：I told myself … 与 five small boxes had arrived … 由 but 连接成两个并列分句。',
          '<b>tell oneself (that) …</b>：心里对自己说、自我安慰，常带有「说服自己」的意味，比 I thought 更有自欺的味道。',
          '<b>by the end of + 时间</b>：到……结束时为止，主句用<b>过去完成时</b>（had arrived），表示「在那之前已经送到」，时间层次比 told 更早。',
          '<b>为什么值得学</b>：一句里同时有并列、宾语从句和过去完成时，是记叙文交代「问题已经悄悄发生」的标准句式。',
          '<b>常见变体</b>：By the end of the week, I had spent … —— 放句首强调时间点，后接完成时。'
        ]
      },
      {
        text: 'What we buy when we are tired is not really an object but a few minutes of rest, and those minutes are gone long before the box is opened.',
        points: [
          '<b>主干</b>：What we buy … is not … but …，and those minutes are gone … —— 前半句是主系表，后半句由 and 并列。',
          '<b>What 引导主语从句</b>：What 相当于 the thing that，整个从句作主语，谓语用单数 is；写作里可以照抄：What we need is not … but …。',
          '<b>not … but …</b>：不是……而是……，否定前者、突出后者，这里把「买的东西」和「几分钟的安慰」作对比。',
          '<b>被动语态</b>：are gone 与 is opened 都是被动或系表结构，中文里往往译成主动句，读英文时要还原动作的承受者。',
          '<b>为什么值得学</b>：这是全文的点题句，把消费话题从「东西」升到「心理」，观点类作文的结尾段可以直接模仿这个高度。'
        ]
      }
    ],
    questions: [
      {
        en: 'What did the writer usually do every evening during the two hard weeks of exams?',
        cn: '备考的那两周里，作者每天晚上通常做什么？',
        ans: 'He came home with no energy, dropped onto the sofa and opened a shopping app on his phone.',
        ansCn: '他回到家时已经没有力气，瘫在沙发上，打开手机里的购物软件。'
      },
      {
        en: 'What is the writer’s rule before he pays for anything?',
        cn: '作者在付钱之前给自己定了什么规矩？',
        ans: 'He may look at anything, but unless he still wants it the next morning, he does not pay for it; every purchase has to survive a night.',
        ansCn: '什么东西都可以看，但除非第二天早上还想要，否则就不付钱；每一笔购买都要先熬过一个晚上。'
      },
      {
        en: 'What is the passage mainly about?',
        cn: '这篇文章主要讲什么？',
        ans: 'When we are tired we buy feelings rather than things, so we should slow down and wait before paying.',
        ansCn: '人在疲惫时买的其实是感觉而不是东西，所以付钱之前应该慢下来、等一等。'
      },
      {
        en: 'In the fifth paragraph, the writer uses “purchase” as a written-style substitute for which common word?',
        cn: '第五段里作者用「购买」这个词作为哪个常用词的书面替换？',
        ans: 'It is used as a substitute for “buy”.',
        ansCn: '它是「买」这个常用词的书面替换说法。'
      },
      {
        en: 'What does “sleep on it” most probably mean in the passage?',
        cn: '文中的「把事情留到第二天再决定」这个短语最可能是什么意思？',
        ans: 'To wait until the next day before deciding whether to buy something.',
        ansCn: '在决定要不要买某件东西之前，先等到第二天再说。'
      }
    ],
    writingTask: {
      en: 'Write 80–100 words about a thing you bought but did not really need.',
      hints: [
        'When I am tired, I ...',
        'The problem is that ...',
        'So I made a rule for myself: ...',
        'To be honest, ...'
      ],
      hintCn: '用 5–7 句话写一次「不需要却买了」的经历：先写什么情况下买的、买了什么，再点出真正的问题，最后写自己立的规矩。',
      req: '至少使用 2 个本篇学过的词或搭配（urge / impulse / persuade / avoid / sleep on it / give in to / be worth doing）。'
    },
    speakingTask: {
      en: 'Talk for 1 minute: Should people wait one day before buying something online? Give your opinion, one reason and one example.',
      points: [
        'Your opinion',
        'One reason',
        'One example from your own life'
      ],
      pointCn: '先明确表态该不该等，再给一个理由，最后举一个自己的小例子，三个要素都要有。',
      skeleton: 'In my opinion, people should wait one day before buying. The problem is that ... For example, last month I ...'
    },
    focus: [
      '<b>新授核心词 16 个</b>：<span class=\'en\'>reward, stress, urge, impulse, persuade, advertise, item, cart, pause, avoid, unless, satisfy, design, trick, instead, comfort</span> —— 重点记 <span class=\'en\'>avoid doing sth.</span>（后接动名词）、<span class=\'en\'>persuade sb. to do sth.</span>、<span class=\'en\'>instead of</span>（后接名词或动名词）；<span class=\'en\'>unless</span> 相当于 if … not，别写成双重否定。',
      '<b>本篇复现的旧词</b>：第 4 篇的 <span class=\'en\'>cheap / cost / need</span>、第 5 篇的 <span class=\'en\'>decide</span>、第 6 篇的 <span class=\'en\'>waste</span>、第 14 篇的 <span class=\'en\'>unopened</span>、第 18 篇的 <span class=\'en\'>value</span>、第 20 篇的 <span class=\'en\'>control</span> —— 都是换到「深夜购物」的新语境再认一次，看到灰点先自己说意思，再查它首次出现的篇目。',
      '<b>两个长难句</b>：第一句练「<span class=\'en\'>by the end of + 过去完成时</span>」，交代问题早已发生；第二句练「<span class=\'en\'>What 主语从句 + not … but … + 被动</span>」，是全文点题句，观点作文结尾可直接仿写。',
      '<b>搭配与写作表达</b>：<span class=\'en\'>add up</span>（算一算）、<span class=\'en\'>give in to</span>（向冲动屈服）、<span class=\'en\'>sleep on it</span>（留到第二天决定）是一组「踩刹车」的动作链；写作里 <span class=\'en\'>The problem is that …</span> 点问题，<span class=\'en\'>To be honest, …</span> 坦白感受，一前一后。',
      '<b>全文逻辑线与题型提醒</b>：现象（疲惫时买买买）→ 解释（大脑要奖赏、商家会设计）→ 转折（立规矩）→ 效果（少买了）→ 点题（买的是安慰）。同义替换题认准「书面替换词」＝ 常用词；词义猜测题把短语放回句子里，看它前后给出的条件。'
    ],
    standard: {
      time: '约 35 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 16 个核心词遮住中文说出 ≥ 12 · 2 个长难句会拆解 · 完成 80–100 词写作与 1 分钟口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 16 个核心词中的 12 个（urge、impulse、persuade、avoid、unless …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '10 个高频搭配掌握 8 个，能各造一句（on sale、add up、give in to、sleep on it …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '2 个长难句各说出结构（by the end of + 过去完成时；What 主语从句 + not … but …），并各仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；主旨题与词义猜测题要能说出原文依据',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 80–100 词，至少用上 The problem is that … 或 To be honest, …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟说清「要不要等一天再买」的观点，并给出一个理由和一个自己的例子',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 8 处灰点旧词，说出其中 6 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 28,
    slug: '028-the-cost-of-being-always-online',
    title: 'The Cost of Being Always Online',
    titleCn: '永远在线的代价',
    stage: '阶段三 · 中级',
    stageRange: '第 21–30 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 380 词'
      },
      {
        k: '新词密度',
        v: '约 4.2%'
      },
      {
        k: '长难句',
        v: '2 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/028.jpg',
    coverCredit: 'Photo: mikoto.raw Photographer / Pexels',
    body: [
      'Until last term, my phone was the first <span class="w-rev">device</span> I touched in the morning and the last at night. If a friend sent me a message, I <span class="w-cet4" data-cn="回应、答复">responded</span> within minutes, feeling a <span class="w-cet4" data-cn="压力">pressure</span> to reply at once. If they answered slowly, I felt <span class="w-cet4" data-cn="焦虑的、不安的">anxious</span>.',
      'This is the cost of being always online. Every <span class="w-cet4" data-cn="通知、消息提醒">notification</span> seems urgent, and each one <span class="w-cet4" data-cn="打断">interrupts</span> whatever we are doing. Our <span class="w-rev">attention</span> is cut into small pieces, we cannot <span class="w-cet4" data-cn="集中（注意力）">concentrate</span> for long, and real talks grow shorter than the ones we type.',
      '<span class="w-sentence">One evening a friend joked that I answered messages faster than I answered my own door.</span> Her words stayed with me. That night I thought about the kind of evening I wanted.',
      'I wanted one quiet hour, <span class="w-cet4" data-cn="分开的、独立的">separate</span> from the rest of the day. So I <span class="w-cet4" data-cn="宣布、告知">announced</span> a small change and <span class="w-phrase" data-cn="确保">made sure</span> my close friends understood: from nine to ten, my phone would be <span class="w-phrase" data-cn="把……收起来">put away</span> in the kitchen <span class="w-cet4" data-cn="抽屉">drawer</span>. If anything was important, they could call.',
      'The first week was harder than I <span class="w-rev">expected</span>. Several times I <span class="w-phrase" data-cn="想要做某事">felt like</span> opening the drawer to see if anything had happened. My friends asked whether I was angry with them; I explained that it was not about them.',
      'Then it became normal: I <span class="w-rev">managed</span> to keep the rule for a whole month, and I slept better. My homework now ended at ten, not at midnight. When I did reply, I had a real <span class="w-cet4" data-cn="话题">topic</span>, and I <span class="w-phrase" data-cn="回复某人、给某人回音">got back to</span> everyone the next morning.',
      '<span class="w-sentence">Being reachable is not the same as being present, and the fastest answer is not always the kindest one.</span> What <span class="w-rev">matters</span> is how well we listen together. We do not <span class="w-cet4" data-cn="欠、亏欠">owe</span> everyone an <span class="w-cet4" data-cn="即时的、立刻的">instant</span> reply, and a <span class="w-cet4" data-cn="持续不断的">constant</span> <span class="w-synonym" data-cn="＝ flow 的替换词">stream</span> of short messages is not real conversation.',
      '<span class="w-writing" data-cn="换句话说（换个说法重述）">In other words</span>, a <span class="w-rev">screen</span> has real <span class="w-cet4" data-cn="影响">influence</span> on our evenings, and <span class="w-writing" data-cn="没有必要做某事">there is no need to</span> give it everything. It is worth <span class="w-phrase" data-cn="记住">keeping one thing in mind</span>: the <span class="w-cet4" data-cn="自由">freedom</span> to answer later is also part of a healthy friendship.',
      'In <span class="w-cet4" data-cn="最近的">recent</span> weeks my friends have begun to do the same, and I <span class="w-synonym" data-cn="＝ seldom 的替换词">rarely</span> return to my old habit. The <span class="w-rev">balance</span> between my online life and my real one feels right again. My friends are <span class="w-rev">patient</span> with my slow replies, and our talks are longer than before.'
    ],
    translation: [
      '上个学期之前，手机是我早上摸到的第一件东西，也是夜里最后碰的一件。朋友发来消息，我几分钟内就会回复，总觉得有压力、必须马上回应。要是对方回得慢了，我就会坐立不安。',
      '这就是永远在线的代价。每一条通知看起来都很紧急，每一条都会打断我们手头正在做的事。我们的注意力被切成碎片，做什么都难以持久，真正的交谈也变得比我们打出来的字还要短。',
      '一天晚上，一个朋友开玩笑说，我回消息的速度比我开门迎客还快。这句话一直留在我心里。那天晚上，我认真想了想自己想要一个什么样的夜晚。',
      '我想要一个安静的小时，和一天里的其他时间分开。于是我宣布了一个小改变，也跟好朋友说清楚：每天九点到十点，手机会被收进厨房的抽屉。真有要紧事，他们可以打电话。',
      '第一周比我预想的难熬。有好几次，我忍不住想去打开抽屉，看看是不是错过了什么。朋友们问我是不是在生他们的气；我解释说，这和他们没有关系。',
      '然后一切变得正常了。这条规矩我坚持了整整一个月，觉也睡得更好了。作业十点就写完了，不用再拖到半夜。每次回消息的时候，我都有真正想说的话题，第二天也一一回复了大家。',
      '随时联系得上，并不等于真的在场；最快的回复也不总是最贴心的。重要的是我们在一起时听得有多认真。我们不欠每个人一条即时回复，接连不断的短消息也算不上真正的交谈。',
      '换句话说，屏幕对我们晚上时间的影响是实实在在的，而我们没有必要把一切都交给它。有一件事值得记住：晚一点再回复的自由，也是健康友谊的一部分。',
      '最近几周，朋友们也开始这样做了，我也很少再回到从前的习惯。线上生活和现实生活重新找回了平衡。朋友们对我慢半拍的回复很包容，而我们的谈话，比从前更长了。'
    ],
    vocabulary: [
      {
        w: 'instant',
        ph: '/ˈɪnstənt/',
        pos: 'adj.',
        cn: '即时的、立刻的',
        col: 'an instant reply — 即时回复；instant food — 方便食品',
        ex: 'Nobody can give an instant answer to every message.'
      },
      {
        w: 'respond',
        ph: '/rɪˈspɒnd/',
        pos: 'v.',
        cn: '回应、答复',
        col: 'respond to — 回应……；respond quickly — 回应得很快',
        ex: 'She responded to my message within a minute.'
      },
      {
        w: 'pressure',
        ph: '/ˈpreʃə(r)/',
        pos: 'n.',
        cn: '压力',
        col: 'under pressure — 在压力下；a pressure to do sth. — 做某事的压力',
        ex: 'Many students feel a pressure to reply at once.'
      },
      {
        w: 'anxious',
        ph: '/ˈæŋkʃəs/',
        pos: 'adj.',
        cn: '焦虑的、不安的',
        col: 'feel anxious — 感到不安；be anxious about — 为……担心',
        ex: 'He grew anxious when no one answered him.'
      },
      {
        w: 'constant',
        ph: '/ˈkɒnstənt/',
        pos: 'adj.',
        cn: '持续不断的、经常的',
        col: 'a constant stream of — 连续不断的……；constant noise — 持续的噪音',
        ex: 'Constant messages make it hard to think.'
      },
      {
        w: 'interrupt',
        ph: '/ˌɪntəˈrʌpt/',
        pos: 'v.',
        cn: '打断、中断',
        col: 'interrupt sb. — 打断某人；be interrupted by — 被……打断',
        ex: 'A notification interrupts whatever you are doing.'
      },
      {
        w: 'concentrate',
        ph: '/ˈkɒnsntreɪt/',
        pos: 'v.',
        cn: '集中（注意力）',
        col: 'concentrate on — 专心于；cannot concentrate — 无法集中注意力',
        ex: 'It is hard to concentrate with a phone beside you.'
      },
      {
        w: 'notification',
        ph: '/ˌnəʊtɪfɪˈkeɪʃn/',
        pos: 'n.',
        cn: '通知、消息提醒',
        col: 'a notification from — 来自……的提醒；turn off notifications — 关掉消息提醒',
        ex: 'Every notification looks urgent on a small screen.'
      },
      {
        w: 'recent',
        ph: '/ˈriːsnt/',
        pos: 'adj.',
        cn: '最近的、近来的',
        col: 'in recent weeks — 最近几周；a recent change — 最近的一个变化',
        ex: 'Recent months have changed the way we talk.'
      },
      {
        w: 'drawer',
        ph: '/drɔː(r)/',
        pos: 'n.',
        cn: '抽屉',
        col: 'a kitchen drawer — 厨房抽屉；put sth. in the drawer — 把某物放进抽屉',
        ex: 'My phone sleeps in the kitchen drawer at night.'
      },
      {
        w: 'owe',
        ph: '/əʊ/',
        pos: 'vt.',
        cn: '欠、亏欠',
        col: 'owe sb. sth. — 欠某人某物；owe sb. an answer — 欠某人一个答复',
        ex: 'We do not owe everyone an instant reply.'
      },
      {
        w: 'announce',
        ph: '/əˈnaʊns/',
        pos: 'vt.',
        cn: '宣布、告知',
        col: 'announce a change — 宣布一个改变；announce that … — 宣布……',
        ex: 'He announced that he would be offline after nine.'
      },
      {
        w: 'separate',
        ph: '/ˈseprət/',
        pos: 'adj./v.',
        cn: '分开的；分开',
        col: 'separate from — 与……分开；keep … separate — 把……分开',
        ex: 'Keep one quiet hour separate from the rest of the day.'
      },
      {
        w: 'freedom',
        ph: '/ˈfriːdəm/',
        pos: 'n.',
        cn: '自由',
        col: 'the freedom to do sth. — 做某事的自由；freedom of choice — 选择的自由',
        ex: 'The freedom to answer later is a small but real thing.'
      },
      {
        w: 'influence',
        ph: '/ˈɪnfluəns/',
        pos: 'n./v.',
        cn: '影响',
        col: 'have an influence on — 对……有影响；be influenced by — 受……影响',
        ex: 'The phone has a real influence on our evenings.'
      },
      {
        w: 'topic',
        ph: '/ˈtɒpɪk/',
        pos: 'n.',
        cn: '话题',
        col: 'a topic worth talking about — 值得谈的话题；change the topic — 换个话题',
        ex: 'After a quiet evening, we had a real topic to talk about.'
      }
    ],
    phrases: [
      {
        en: 'get back to sb.',
        cn: '回复某人、给某人回音',
        ex: 'I will get back to you tomorrow morning.'
      },
      {
        en: 'put … away',
        cn: '把……收起来',
        ex: 'Put your phone away when you study.'
      },
      {
        en: 'make sure',
        cn: '确保、弄清楚',
        ex: 'Make sure your friends know about the change.'
      },
      {
        en: 'keep … in mind',
        cn: '记住、把……放在心上',
        ex: 'Keep one thing in mind: you can answer later.'
      },
      {
        en: 'feel like doing sth.',
        cn: '想要做某事（后接动名词）',
        ex: 'Sometimes I feel like checking my phone for no reason.'
      },
      {
        en: 'to one’s surprise',
        cn: '令某人惊讶的是',
        ex: 'To my surprise, the first week was the hardest.'
      },
      {
        en: 'change one’s mind',
        cn: '改变主意',
        ex: 'I almost changed my mind on the third night.'
      },
      {
        en: 'stay up late',
        cn: '熬夜',
        ex: 'I used to stay up late answering messages.'
      },
      {
        en: 'be fed up with',
        cn: '对……感到厌烦',
        ex: 'She was fed up with answering messages all evening.'
      },
      {
        en: 'put up with',
        cn: '忍受、容忍',
        ex: 'You do not have to put up with constant noise.'
      }
    ],
    writings: [
      {
        expr: 'In other words, ...',
        cn: '换句话说（换个说法重述）',
        meaning: '用更清楚、更直白的话把上一句再说一遍，帮助读者抓住重点。',
        context: '议论段中间：先说一个抽象结论，再用它换一种说法讲透。',
        alts: [
          {
            t: 'That is to say, ...',
            n: '更书面'
          },
          {
            t: 'Put simply, ...',
            n: '强调「说得简单点」'
          },
          {
            t: 'To put it another way, ...',
            n: '稍长，正式'
          }
        ],
        register: '中性，写作口语都好用。',
        example: 'We are always online. In other words, we never really rest.'
      },
      {
        expr: 'There is no need to ...',
        cn: '没有必要做某事',
        meaning: '用来劝人不必做某件事，比 do not 语气更委婉，也更像在讲道理。',
        context: '建议段、结尾段：指出某个常见做法其实可以不做。',
        alts: [
          {
            t: 'You don’t have to ...',
            n: '更口语'
          },
          {
            t: 'It is not necessary to ...',
            n: '更正式'
          },
          {
            t: 'Nobody needs to ...',
            n: '强调「谁都不必」'
          }
        ],
        register: '中性，建议类写作里最常用。',
        example: 'There is no need to answer every message at once.'
      }
    ],
    sentences: [
      {
        text: 'One evening a friend joked that I answered messages faster than I answered my own door.',
        points: [
          '<b>主干</b>：One evening a friend joked，时间状语 One evening 放句首，交代故事发生的时点。',
          '<b>that 引导宾语从句</b>：joked that …，玩笑的内容整个从句作 joke 的宾语；口语里 joke / say / add that … 是引出原话的常见写法。',
          '<b>比较结构</b>：faster than I answered my own door，前后动词相同、宾语不同，用「回消息」对比「开门迎客」，反差一读就懂。',
          '<b>为什么值得学</b>：这是夹叙夹议文章的引子句——用朋友的一句玩笑推动改变，比直接讲道理自然得多。',
          '<b>常见变体</b>：A friend joked that …, and her words stayed with me.（玩笑句 + 感受句，两拍就完成一段的转折）'
        ]
      },
      {
        text: 'Being reachable is not the same as being present, and the fastest answer is not always the kindest one.',
        points: [
          '<b>主干</b>：两个分句由 and 并列：Being reachable is not the same as being present 与 the fastest answer is not always the kindest one。',
          '<b>动名词作主语和表语</b>：Being reachable / being present，把动作变成抽象概念，是下定义时最常用的句式。',
          '<b>not the same as …</b>：和……不一样，as 后接比较对象；类似的还有 the same as / different from。',
          '<b>the kindest one</b>：最高级前加 the，one 指代前面的 answer，避免重复名词。',
          '<b>为什么值得学</b>：这是全文点题句，把「随时联系得上」与「真的在场」区分开，观点类作文的中心句可以直接仿写。'
        ]
      }
    ],
    questions: [
      {
        en: 'What did the writer ask his close friends to do?',
        cn: '作者让好朋友们怎么做？',
        ans: 'He made sure they knew that from nine to ten his phone would be put away in the kitchen drawer, and they could call him if anything was truly important.',
        ansCn: '他跟朋友们说清楚：每天九点到十点手机会被收进厨房抽屉，真有要紧事可以直接打电话。'
      },
      {
        en: 'What happened during the first week of the experiment?',
        cn: '试验的第一周发生了什么？',
        ans: 'It was harder than he expected: several times he felt like opening the drawer, and his friends asked whether he was angry with them.',
        ansCn: '比他预想的难熬：他有好几次想去打开抽屉，朋友们还问他是不是在生他们的气。'
      },
      {
        en: 'What is the passage mainly about?',
        cn: '这篇文章主要讲什么？',
        ans: 'Being always online has a real cost, and setting one quiet offline hour each evening can bring back sleep, better replies and better conversations.',
        ansCn: '永远在线有实实在在的代价，而每晚留出一段安静的离线时间，能换回睡眠、更好的回复和更好的交谈。'
      },
      {
        en: 'In the last paragraph, the writer uses which word as a substitute for “seldom”?',
        cn: '最后一段里，作者用哪个词来替换「很少」这个意思？',
        ans: 'He uses “rarely”.',
        ansCn: '他用的是「很少」的那个词。'
      },
      {
        en: 'In paragraph 7, “constant” most probably means ______.',
        cn: '第七段中「持续不断的」这个词最可能是什么意思？',
        ans: 'Going on all the time without stopping.',
        ansCn: '一直发生、从不间断的。'
      }
    ],
    writingTask: {
      en: 'Write 80–100 words about how being online all the time has changed your daily life.',
      hints: [
        'Until last term, ...',
        'The problem was that ...',
        'There is no need to ...',
        'In other words, ...'
      ],
      hintCn: '用 5–7 句话写：先写从前「永远在线」的样子，再写它带来的麻烦，最后写自己做出的改变和现在的状态。',
      req: '至少使用 2 个本篇学过的词或搭配（instant / respond / pressure / constant / get back to / keep … in mind）。'
    },
    speakingTask: {
      en: 'Talk for 1 minute: Is one offline hour a day a good idea for students? Give your opinion, one reason and one example.',
      points: [
        'Your opinion',
        'One reason',
        'One example from your own life'
      ],
      pointCn: '先明确表态好还是不好，再给一个理由，最后举一个自己的小例子，观点、理由、例子三要素缺一不可。',
      skeleton: 'In my opinion, one offline hour a day is a good idea. The reason is that ... For example, last month I ...'
    },
    focus: [
      '<b>新授核心词 16 个</b>：<span class=\'en\'>instant, respond, pressure, anxious, constant, interrupt, concentrate, notification, recent, drawer, owe, announce, separate, freedom, influence, topic</span> —— 记住 <span class=\'en\'>respond to</span>（回应……）、<span class=\'en\'>concentrate on</span>（专心于）、<span class=\'en\'>owe sb. sth.</span>（欠某人某物）；<span class=\'en\'>pressure</span> 作「压力」讲不可数，但可以说 a pressure to do sth.。',
      '<b>本篇复现的旧词</b>：第 1 篇的 <span class=\'en\'>attention</span>、第 2 篇的 <span class=\'en\'>manage</span>、第 3 篇的 <span class=\'en\'>matter / patient</span>、第 5 篇的 <span class=\'en\'>expect</span>、第 6 篇的 <span class=\'en\'>balance</span>、第 17 篇的 <span class=\'en\'>device / screen</span> —— 断网故事的这批词又回到「永远在线」的新语境里，灰点先自测再查篇目。',
      '<b>两个长难句</b>：第一句练「<span class=\'en\'>joke that + 比较结构</span>」，用一句玩笑推动叙事；第二句练「<span class=\'en\'>动名词作主语 + not … but … 式对比</span>」，是全文中心句。正文里的 <span class=\'en\'>feeling a pressure …</span> 是非谓语作状语，写作时可照用。',
      '<b>搭配与写作表达</b>：<span class=\'en\'>made sure</span>（说清楚）、<span class=\'en\'>put away</span>（收起来）、<span class=\'en\'>get back to</span>（回复）、<span class=\'en\'>keep … in mind</span>（记住）是一条「设规矩—守规矩」的动作链；写作里 <span class=\'en\'>In other words, …</span> 重述观点，<span class=\'en\'>There is no need to …</span> 给出委婉建议。',
      '<b>全文逻辑线与题型提醒</b>：现状（秒回的焦虑）→ 代价（注意力碎片、对话变短）→ 转折（朋友一句话）→ 试验（离线一小时）→ 效果（睡得好、聊得深）→ 点题（在线不等于在场）。同义替换题找「＝ 英文同义词」的提示词；词义猜测题把词放回原句，看它前后的动作和结果。'
    ],
    standard: {
      time: '约 40 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 16 个核心词遮住中文说出 ≥ 12 · 2 个长难句会拆解 · 完成 80–100 词写作与 1 分钟口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 16 个核心词中的 12 个（instant、respond、constant、owe、separate …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '10 个高频搭配掌握 8 个，能各造一句（get back to、put … away、make sure、keep … in mind …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '2 个长难句各说出结构（joke that + 比较结构；动名词作主语），并各仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；主旨题与词义猜测题要能说出原文依据',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 80–100 词，至少用上 In other words, … 或 There is no need to …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟说清「每天一小时离线好不好」的观点，并给出一个理由和一个自己的例子',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 8 处灰点旧词，说出其中 6 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 29,
    slug: '029-eating-well-on-a-small-budget',
    title: 'Eating Well on a Small Budget',
    titleCn: '小预算吃得好',
    stage: '阶段三 · 中级',
    stageRange: '第 21–30 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 395 词'
      },
      {
        k: '新词密度',
        v: '约 4.1%'
      },
      {
        k: '长难句',
        v: '3 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/029.jpg',
    coverCredit: 'Photo: Nataliya Vaitkevich / Pexels',
    body: [
      '<span class="w-sentence">When I moved into the student dormitory, I believed that eating well cost a lot of money.</span> Good food, I thought, meant imported fruit and anything with a modern <span class="w-cet4" data-cn="标签">label</span>. So I skipped the <span class="w-cet4" data-cn="食堂、餐厅">canteen</span>, lived on <span class="w-cet4" data-cn="零食">snacks</span> and take-away food, and my <span class="w-rev">wallet</span> was empty by the end of each month.',
      'Then one month I wrote down every <span class="w-cet4" data-cn="开销、花费">expense</span> on food. The total <span class="w-synonym" data-cn="＝ very surprised 的替换词">shocked</span> me: I was <span class="w-rev">spending</span> more on coffee and cold drinks than on real meals. I was also often <span class="w-rev">hungry</span> an hour after eating, because most of what I bought <span class="w-cet4" data-cn="包含、含有">contained</span> a lot of sugar and very little <span class="w-cet4" data-cn="营养">nutrition</span>.',
      'So I tried three simple rules for one month. None is difficult, and together they changed both my wallet and my health.',
      '<span class="w-writing" data-cn="一则……（列举第一条理由）">For one thing</span>, <span class="w-phrase" data-cn="从……开始">start with</span> a plan. I now <span class="w-cet4" data-cn="安排">arrange</span> five dinners on Sunday and <span class="w-rev">make a list</span> from them. The list keeps me away from shelves of <span class="w-cet4" data-cn="加工过的">processed</span> food, and it takes about ten minutes to write.',
      'Second, buy what is <span class="w-phrase" data-cn="当季、正当时令">in season</span>. Fruit and vegetables in season are usually the cheapest and the <span class="w-rev">freshest</span>, and they taste better than fruit flown across the world. I also <span class="w-phrase" data-cn="留出（时间、钱）">set aside</span> one hour and look for vegetables <span class="w-phrase" data-cn="以半价">at half price</span> at the evening market.',
      '<span class="w-sentence">Third, if you cook simple food at home and watch the portion, a good meal costs less than you think.</span> A bowl of rice with an egg and green vegetables <span class="w-rev">costs</span> a small part of a take-away meal, and <span class="w-cet4" data-cn="冷冻的">frozen</span> vegetables are <span class="w-synonym" data-cn="＝ almost 的替换词">nearly</span> as good as fresh ones.',
      'After four weeks the <span class="w-cet4" data-cn="账单">bill</span> spoke for itself: my food <span class="w-cet4" data-cn="预算">budget</span> fell by about a third, and I had more energy for morning classes. I still <span class="w-rev">eat out</span> with friends now and then, but I <span class="w-phrase" data-cn="减少（某物的量）">cut down on</span> cold drinks and stopped <span class="w-cet4" data-cn="替代">replacing</span> real meals with snacks.',
      '<span class="w-writing" data-cn="诚然……但是……（先让步再转折）">It is true that</span> good food is not always the cheapest, but eating well on a small budget is possible. <span class="w-sentence">What we really need is not expensive food but simple cooking at home.</span> A healthy <span class="w-rev">diet</span> is mostly about choices: a <span class="w-cet4" data-cn="合理的、公道的">reasonable</span> <span class="w-cet4" data-cn="一份（食物）">portion</span> and a <span class="w-cet4" data-cn="多样、种类">variety</span> of colours on the plate.',
      'Eating well on a small budget is a skill you keep for life. The <span class="w-cet4" data-cn="平均的、一般的">average</span> student needs no expensive food, only a plan, a market and an hour at the stove. That is how a small change in the kitchen becomes a better year at school.'
    ],
    translation: [
      '搬进学生宿舍时，我一直以为吃得健康要花很多钱。我心目中的好东西，是进口水果，还有一切包装新潮的食品。于是我很少去食堂，靠零食和外卖过日子，每个月底钱包都是空的。',
      '后来有一个月，我把花在吃上的每一笔开销都记了下来。总数吓了我一跳：我花在咖啡和冷饮上的钱，比花在正餐上的还多。而且吃过东西不到一小时我就又饿了，因为我买的东西大多含糖很多、几乎没有什么营养。',
      '于是我试着用一个月的时间执行三条简单的规矩。没有一条难做到，合在一起，却同时改变了我的钱包和身体。',
      '第一，从计划开始。现在我每个星期天先安排好五顿晚饭，再照着列一张购物单。这张单子让我远离堆满加工食品的货架，而且写下来也就十分钟。',
      '第二，买当季的东西。当季的水果和蔬菜通常最便宜、最新鲜，味道也比漂洋过海运来的同类水果好。我还会留出一个小时，去傍晚的市场找半价的蔬菜。',
      '第三，自己在家做简单的饭菜，并且注意分量。一碗米饭加一个鸡蛋和一些青菜，花的钱只是外卖的一小部分；冷冻蔬菜也不比新鲜的差多少。',
      '四周之后，账单自己说明了一切：我的伙食预算降了差不多三分之一，上午上课也更有精神。我仍然会和朋友偶尔出去吃，但我减少了冷饮，也不再用零食代替正餐。',
      '诚然，好东西并不总是最便宜的，但在小预算里吃得好并非不可能。我们真正需要的不是昂贵的食物，而是自己动手做的简单饭菜。健康的饮食主要在于选择：分量合理，餐盘里有几种颜色。',
      '在小预算里吃得好，是一门能受用一生的本事。普通学生不需要昂贵的食物，只需要一张计划、一个市场，和灶台前的一个小时。厨房里的这一点小改变，就是这样变成更顺的一年的。'
    ],
    vocabulary: [
      {
        w: 'budget',
        ph: '/ˈbʌdʒɪt/',
        pos: 'n./v.',
        cn: '预算',
        col: 'on a small budget — 在预算很少的情况下；keep to a budget — 不超出预算',
        ex: 'Our food budget fell by about a third.'
      },
      {
        w: 'nutrition',
        ph: '/njuːˈtrɪʃn/',
        pos: 'n.',
        cn: '营养',
        col: 'good nutrition — 好的营养；very little nutrition — 几乎没有营养',
        ex: 'Cheap food can still give you good nutrition.'
      },
      {
        w: 'reasonable',
        ph: '/ˈriːznəbl/',
        pos: 'adj.',
        cn: '合理的、公道的',
        col: 'a reasonable price — 公道的价格；a reasonable amount — 合理的量',
        ex: 'Ten minutes a day is a reasonable amount of time.'
      },
      {
        w: 'process',
        ph: '/ˈprəʊses/',
        pos: 'v./n.',
        cn: '加工；过程',
        col: 'processed food — 加工食品；a long process — 一个漫长的过程',
        ex: 'Processed food usually costs more than it looks.'
      },
      {
        w: 'portion',
        ph: '/ˈpɔːʃn/',
        pos: 'n.',
        cn: '一份（食物）、份额',
        col: 'a small portion — 一小份；watch the portion — 注意分量',
        ex: 'A reasonable portion is half of what most of us take.'
      },
      {
        w: 'snack',
        ph: '/snæk/',
        pos: 'n.',
        cn: '零食、点心',
        col: 'a snack between meals — 两餐之间的小点心；live on snacks — 靠零食过日子',
        ex: 'Snacks are fine, but they are not real meals.'
      },
      {
        w: 'variety',
        ph: '/vəˈraɪəti/',
        pos: 'n.',
        cn: '多样、种类',
        col: 'a variety of — 各种各样的；add variety to — 给……增加花样',
        ex: 'A variety of colours on the plate is a good sign.'
      },
      {
        w: 'contain',
        ph: '/kənˈteɪn/',
        pos: 'vt.',
        cn: '包含、含有',
        col: 'contain sugar — 含糖；contain a lot of — 含有大量的……',
        ex: 'Most cheap snacks contain too much sugar.'
      },
      {
        w: 'replace',
        ph: '/rɪˈpleɪs/',
        pos: 'vt.',
        cn: '替代、取代',
        col: 'replace A with B — 用 B 替代 A；replace a meal — 代替一顿饭',
        ex: 'Do not replace real meals with snacks.'
      },
      {
        w: 'average',
        ph: '/ˈævərɪdʒ/',
        pos: 'adj./n.',
        cn: '平均的、一般的',
        col: 'the average student — 一般学生；on average — 平均来说',
        ex: 'The average student spends too much on drinks.'
      },
      {
        w: 'expense',
        ph: '/ɪkˈspens/',
        pos: 'n.',
        cn: '开销、花费',
        col: 'cut down expenses — 削减开销；every expense — 每一笔花费',
        ex: 'Write down every expense on food for one month.'
      },
      {
        w: 'arrange',
        ph: '/əˈreɪndʒ/',
        pos: 'v.',
        cn: '安排、整理',
        col: 'arrange a plan — 安排一个计划；arrange sth. for sb. — 为某人安排某事',
        ex: 'I arrange five dinners every Sunday.'
      },
      {
        w: 'bill',
        ph: '/bɪl/',
        pos: 'n.',
        cn: '账单',
        col: 'pay the bill — 付账；the bill spoke for itself — 账单说明了一切',
        ex: 'The bill at the end of the month surprised me.'
      },
      {
        w: 'canteen',
        ph: '/kænˈtiːn/',
        pos: 'n.',
        cn: '食堂、餐厅',
        col: 'the school canteen — 学校食堂；eat in the canteen — 在食堂吃饭',
        ex: 'The canteen is cheaper than most take-away food.'
      },
      {
        w: 'frozen',
        ph: '/ˈfrəʊzn/',
        pos: 'adj.',
        cn: '冷冻的',
        col: 'frozen vegetables — 冷冻蔬菜；frozen food — 冷冻食品',
        ex: 'Frozen vegetables are cheap and easy to cook.'
      },
      {
        w: 'label',
        ph: '/ˈleɪbl/',
        pos: 'n./v.',
        cn: '标签；贴标签',
        col: 'read the label — 看标签；a bright label — 醒目的标签',
        ex: 'Read the label before you buy anything.'
      }
    ],
    phrases: [
      {
        en: 'in season',
        cn: '当季、正当时令',
        ex: 'Fruit in season is cheaper and fresher.'
      },
      {
        en: 'cut down on',
        cn: '减少（某物的量）',
        ex: 'I cut down on cold drinks last month.'
      },
      {
        en: 'set aside',
        cn: '留出（时间、钱）',
        ex: 'Set aside one hour on Sunday for shopping.'
      },
      {
        en: 'at half price',
        cn: '以半价',
        ex: 'The market sells vegetables at half price in the evening.'
      },
      {
        en: 'start with',
        cn: '从……开始',
        ex: 'Start with a plan for the whole week.'
      },
      {
        en: 'fill up',
        cn: '吃饱、装满',
        ex: 'Rice and eggs fill you up without costing much.'
      },
      {
        en: 'live on',
        cn: '靠……过活、以……为主食',
        ex: 'I lived on snacks during my first month here.'
      },
      {
        en: 'be based on',
        cn: '以……为基础',
        ex: 'A good week of meals is based on a simple plan.'
      },
      {
        en: 'in the long run',
        cn: '从长远来看',
        ex: 'Cooking at home is cheaper in the long run.'
      },
      {
        en: 'do the shopping',
        cn: '买东西、采购',
        ex: 'I do the shopping once a week with a list.'
      }
    ],
    writings: [
      {
        expr: 'It is true that ..., but ...',
        cn: '诚然……但是……（先让步再转折）',
        meaning: '先承认对方或常识里有道理的一面，再引出自己的重点，让观点显得公允而不偏激。',
        context: '观点段的开头或结尾：讨论省钱、健康、学习方法这类「两面都有理」的话题。',
        alts: [
          {
            t: 'Admittedly, ..., but ...',
            n: '更书面'
          },
          {
            t: 'Surely ..., but ...',
            n: '语气更口语'
          },
          {
            t: 'While this is true, ...',
            n: '把让步压进从句，更紧凑'
          }
        ],
        register: '中性偏书面，议论类作文里最稳的转折句式。',
        example: 'It is true that good food is not always the cheapest, but cooking at home costs less.'
      },
      {
        expr: 'For one thing, ...',
        cn: '一则……（列举第一条理由）',
        meaning: '列举理由时的起手式，常与 for another 或 second、third 配对，把论证排成清单。',
        context: '主体段各段开头，用来标明「第一条理由」「第二条理由」。',
        alts: [
          {
            t: 'For another, ...',
            n: '接第二条理由'
          },
          {
            t: 'To begin with, ...',
            n: '更强调「先说第一点」'
          },
          {
            t: 'First of all, ...',
            n: '最常见，稍口语'
          }
        ],
        register: '中性，列举类写作必备。',
        example: 'For one thing, planning costs nothing and saves a lot.'
      }
    ],
    sentences: [
      {
        text: 'When I moved into the student dormitory, I believed that eating well cost a lot of money.',
        points: [
          '<b>主干</b>：I believed …，句首 When I moved into the student dormitory 是时间状语从句，交代想法出现的时间点。',
          '<b>that 引导宾语从句</b>：believed that …，从句里的主语是动名词短语 eating well，谓语用单数 cost（过去式与主语数无关）。',
          '<b>cost 的用法</b>：某物花多少钱用 sth. costs (sb.) money；花费的对象是人时用 spend / pay，注意主语不同。',
          '<b>为什么值得学</b>：夹叙夹议的开头模板——「过去以为……」，为后文的转变埋下伏笔。',
          '<b>常见变体</b>：When I first came here, I thought that …（用 thought that 引出被推翻的旧想法）'
        ]
      },
      {
        text: 'Third, if you cook simple food at home and watch the portion, a good meal costs less than you think.',
        points: [
          '<b>主干</b>：a good meal costs less than you think，主句放在句尾，前面是条件状语从句。',
          '<b>条件从句里有并列谓语</b>：if you cook … and watch …，两个动作合用一个 if，写作里可以少写一个从句。',
          '<b>than you think</b>：比你想象的更……，than 后接一个省略的比较从句，口语书面都常用。',
          '<b>costs less than …</b>：花得比……少，注意 cost 的主语是物；这里用「一顿好饭」作主语，句子更活。',
          '<b>为什么值得学</b>：提建议的句式：if + 两个动作 + 一个结果，一条规矩就讲清楚了。'
        ]
      },
      {
        text: 'What we really need is not expensive food but simple cooking at home.',
        points: [
          '<b>主干</b>：What we really need is …，主语从句 + 系动词 + 表语。',
          '<b>What 引导主语从句</b>：What 相当于 the thing that，整个从句作主语；写作里可仿写 What we need is not … but …。',
          '<b>not … but …</b>：不是……而是……，否定「昂贵的食物」、突出「自己做的简单饭菜」，是观点句的常见对比。',
          '<b>simple cooking at home</b>：动名词作名词用，前面加形容词修饰，比 cooking simple food at home 更简洁。',
          '<b>为什么值得学</b>：这是全文的立意句，把「吃得好」从钱的问题转成选择的问题，结尾段或主题句都能用。'
        ]
      }
    ],
    questions: [
      {
        en: 'What are the three rules the writer tried for one month?',
        cn: '作者用一个月的时间试了哪三条规矩？',
        ans: 'Start with a plan and make a list before shopping; buy fruit and vegetables in season and at half price; cook simple food at home and watch the portion.',
        ansCn: '购物前先做计划、列购物单；买当季、半价的水果和蔬菜；自己在家做简单的饭菜，并注意分量。'
      },
      {
        en: 'How much did the writer’s food budget fall after four weeks?',
        cn: '四周之后，作者的伙食预算降了多少？',
        ans: 'By about a third.',
        ansCn: '降了差不多三分之一。'
      },
      {
        en: 'What is the passage mainly about?',
        cn: '这篇文章主要讲什么？',
        ans: 'Eating well on a small budget is possible if we plan before shopping, buy food in season and cook simple meals at home.',
        ansCn: '只要购物前有计划、买当季食材、自己在家做简单的饭菜，在小预算里吃得好是完全做得到的。'
      },
      {
        en: 'In paragraph 6, the writer uses which word as a substitute for “almost”?',
        cn: '第六段里，作者用哪个词来替换「几乎」这个意思？',
        ans: 'He uses “nearly”.',
        ansCn: '他用的是「几乎」的那个词。'
      },
      {
        en: 'What does “in season” most probably mean in the passage?',
        cn: '文中的「当季」这个短语最可能是什么意思？',
        ans: 'Fruit and vegetables that are ready to be picked and sold at the time of year when they naturally grow.',
        ansCn: '在一年中自然成熟、正当采摘上市的水果和蔬菜。'
      }
    ],
    writingTask: {
      en: 'Write 80–100 words about how to eat well without spending too much money.',
      hints: [
        'It is true that ..., but ...',
        'For one thing, ...',
        'Second, ...',
        'Start with ... and cut down on ...'
      ],
      hintCn: '用 5–7 句话写：先承认「吃得好」听起来费钱，再给出两三条具体做法（计划、当季、自己做），最后点出立意。',
      req: '至少使用 2 个本篇学过的词或搭配（budget / nutrition / reasonable / in season / set aside / cut down on）。'
    },
    speakingTask: {
      en: 'Talk for 1 minute: Is cooking at home really cheaper and healthier than buying take-away food? Give your opinion, one reason and one example.',
      points: [
        'Your opinion',
        'One reason',
        'One example from your own life'
      ],
      pointCn: '先明确表态是不是真的更省钱更健康，再给一个理由，最后举一个自己的小例子，观点、理由、例子三要素缺一不可。',
      skeleton: 'In my opinion, cooking at home is cheaper and healthier. For one thing, ... For example, last month I ...'
    },
    focus: [
      '<b>新授核心词 16 个</b>：<span class=\'en\'>budget, nutrition, reasonable, process, portion, snack, variety, contain, replace, average, expense, arrange, bill, canteen, frozen, label</span> —— 记住 <span class=\'en\'>replace A with B</span>（用 B 替代 A）、<span class=\'en\'>contain</span>（含有，一般不用进行时）、<span class=\'en\'>on a small budget</span>（预算很少的情况下）；<span class=\'en\'>process</span> 作动词是「加工」，processed food 才是「加工食品」。',
      '<b>本篇复现的旧词</b>：第 4 篇的 <span class=\'en\'>spend / cost</span>、第 7 篇的 <span class=\'en\'>hungry / fresh / diet / eat out</span>、第 18 篇的 <span class=\'en\'>make a list</span>、第 20 篇的 <span class=\'en\'>wallet</span> —— 都是从「做饭、省钱」的老语境里换过来再认一次，灰点先自测再查篇目。',
      '<b>三个长难句</b>：第一句练「<span class=\'en\'>When 时间从句 + 动名词作主语</span>」，写「过去的旧想法」；第二句练「<span class=\'en\'>if 并列动作 + than you think</span>」，一条规矩讲清楚；第三句练「<span class=\'en\'>What 主语从句 + not … but …</span>」，是全文立意句。正文里的 <span class=\'en\'>flown across the world</span> 是非谓语作后置定语，可以顺带学。',
      '<b>搭配与写作表达</b>：<span class=\'en\'>in season</span>（当季）、<span class=\'en\'>set aside</span>（留出）、<span class=\'en\'>at half price</span>（半价）、<span class=\'en\'>cut down on</span>（减少）是「省钱买菜」四件套；写作里 <span class=\'en\'>It is true that …, but …</span> 先让步再转折，<span class=\'en\'>For one thing, …</span> 开始列举理由。',
      '<b>全文逻辑线与题型提醒</b>：旧观念（吃得好＝花钱多）→ 记账发现的问题 → 三条规矩（计划 / 当季 / 自己做）→ 效果（预算降三分之一）→ 点意（吃得好靠选择不靠钱）。细节题答案就落在三条规矩里；同义替换题看解析里的「＝ 英文同义词」提示；词义猜测题把短语放回句子，看搭配和上下文。'
    ],
    standard: {
      time: '约 40 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 16 个核心词遮住中文说出 ≥ 12 · 3 个长难句会拆解 · 完成 80–100 词写作与 1 分钟口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 16 个核心词中的 12 个（budget、nutrition、portion、expense、variety …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '10 个高频搭配掌握 8 个，能各造一句（in season、set aside、at half price、cut down on …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '3 个长难句各说出结构（When 时间从句 + 动名词主语；if 并列动作；What 主语从句），并各仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；主旨题与词义猜测题要能说出原文依据',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 80–100 词，至少用上 It is true that …, but … 或 For one thing, …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟说清「自己做饭是不是更省钱更健康」的观点，并给出一个理由和一个自己的例子',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 8 处灰点旧词，说出其中 6 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 30,
    slug: '030-half-a-year-of-small-changes',
    title: 'Half a Year of Small Changes',
    titleCn: '半年的小改变',
    stage: '阶段三 · 中级',
    stageRange: '第 21–30 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 400 词'
      },
      {
        k: '新词密度',
        v: '约 4.0%'
      },
      {
        k: '长难句',
        v: '3 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/030.jpg',
    coverCredit: 'Photo: Berna / Pexels',
    body: [
      'Half a year ago I <span class="w-phrase" data-cn="列一张……的清单">made a list of</span> small changes, one for each part of my day: wake up earlier, ask one question in class, cook twice a week, and walk <span class="w-phrase" data-cn="而不是、代替">instead of</span> taking the bus. The list had twelve <span class="w-cet4" data-cn="条目、一则记录">entries</span>, all small enough to try.',
      '<span class="w-phrase" data-cn="到目前为止">So far</span>, five of the twelve <span class="w-cet4" data-cn="留存、坚持下来">survive</span>, and those five have changed my days more than the twelve ever did. What they share is <span class="w-cet4" data-cn="具体的、明确的">specific</span>: a fixed time and a clear <span class="w-synonym" data-cn="＝ goal 的替换词">target</span>. “Be healthier” never lasted a week; “walk after dinner” is still here.',
      '<span class="w-sentence">Looking at the list today, I can see which small things a person can keep when nobody is watching.</span> It is not a report card; nobody gives me a grade. It is simply a <span class="w-cet4" data-cn="衡量；尺度">measure</span> of my own days.',
      '<span class="w-sentence">Half of the money I used to spend on little things is now kept for books, and the rest is spent on food that I cook myself.</span> The clearest <span class="w-cet4" data-cn="影响、冲击">impact</span> is that I no longer buy things I do not need. My hours go into a notebook, so I can <span class="w-cet4" data-cn="大致、大约">roughly</span> <span class="w-cet4" data-cn="监测、盯着看">monitor</span> where each day goes.',
      '<span class="w-sentence">What surprised me most was that the changes nobody noticed were the ones that lasted.</span> I now say hello to my neighbors first, <span class="w-rev">encourage</span> my friends to walk with me, and no longer <span class="w-rev">hesitate</span> to ask when I do not understand.',
      'My sleep is better now, and the change is <span class="w-cet4" data-cn="明显的">obvious</span> in my <span class="w-cet4" data-cn="每日的、日常的">daily</span> life. That was never on the list, and I would not give it back. The <span class="w-rev">benefit</span> of a small <span class="w-cet4" data-cn="习惯">habit</span> is often something you did not plan to get.',
      'None of this happened quickly. The real <span class="w-cet4" data-cn="挑战">challenge</span> was the third month, when <span class="w-cet4" data-cn="担忧、顾虑">concerns</span> grew and the <span class="w-rev">progress</span> was so slow that I almost stopped. A friend <span class="w-rev">suggested</span> that I check the numbers once a month, and that one idea saved the plan. <span class="w-cet4" data-cn="稳步地、持续地">Steadily</span>, my <span class="w-cet4" data-cn="信心">confidence</span> came back.',
      '<span class="w-writing" data-cn="总结起来……">To sum up</span>, half a year of small changes is a short <span class="w-cet4" data-cn="总结">summary</span>: sleep earlier, move every day, cook at home, <span class="w-phrase" data-cn="把……记录下来">keep a record of</span> time, and <span class="w-phrase" data-cn="三思、仔细想一想">think twice</span> before spending. <span class="w-rev">Effort</span> matters more than talent here, and I <span class="w-rev">realized</span> this in the fourth month.',
      '<span class="w-writing" data-cn="说实话……">The truth is that</span> I am still the same person; I just <span class="w-rev">improve</span> a little each month. Nobody can <span class="w-rev">afford</span> to wait for a perfect moment, <span class="w-cet4" data-cn="因此">therefore</span> choose one <span class="w-synonym" data-cn="＝ small 的替换词">tiny</span> thing tonight and let the list grow slowly.'
    ],
    translation: [
      '半年前，我列了一张小改变清单，一天的每个环节各一条：早起一点、上课提一个问题、一周做两次饭，出门走路而不是坐车。清单上共有十二条，每条都小到可以试一试。',
      '到目前为止，十二条里还剩五条，而正是这五条改变我的日子，比原来那十二条加起来还多。它们的共同点很具体：固定的时间、明确的目标。「更健康」从来没撑过一周；「晚饭后走一走」却一直留到了现在。',
      '今天再看这份清单，我能看出哪些小事是一个人在没人看着的时候也坚持得住的。它不是成绩单；没有人给我打分。它只是用来量一量我自己的日子。',
      '我以前花在零碎小东西上的钱，现在有一半留着买书，剩下的花在自己做的饭上。最明显的影响是：我不再买自己并不需要的东西。我的时间记在本子里，所以我能大致看出每一天去了哪里。',
      '最让我意外的是，没人注意到的那些改变，反倒坚持得最久。我现在会先跟邻居打招呼，鼓励朋友陪我走一走，不懂的时候也不再犹豫着不敢开口。',
      '我的睡眠变好了，变化在日常生活里看得很清楚。这从来不在清单上，而这是我最不愿放手的东西。一个小习惯带来的好处，常常是你原本没打算得到的。',
      '这一切都不是很快发生的。真正难的是第三个月：顾虑越来越多，进步又慢得让我差点放弃。一个朋友建议我每个月看一次数字，这个主意救了整个计划。慢慢地，我的信心又回来了。',
      '总结起来，半年的小改变其实是一张短短的清单：早点睡、每天动一动、在家做饭、记录时间、花钱前再想一想。在这里，努力比天赋更重要，而我是到第四个月才明白这一点的。',
      '说实话，我还是原来的那个人；只是每个月都进步一点点。没有人等得起一个完美的开始时机，所以今晚就挑一件小小的事，让这张清单慢慢长起来。'
    ],
    vocabulary: [
      {
        w: 'entry',
        ph: '/ˈentrɪ/',
        pos: 'n.',
        cn: '条目、一则记录',
        col: 'an entry on the list — 清单上的一条；make an entry — 记一条',
        ex: 'The list had twelve entries.'
      },
      {
        w: 'survive',
        ph: '/səˈvaɪv/',
        pos: 'v.',
        cn: '留存、坚持下来',
        col: 'survive the week — 撑过这一周；survive on … — 靠……维持',
        ex: 'Five of the twelve habits survive.'
      },
      {
        w: 'specific',
        ph: '/spəˈsɪfɪk/',
        pos: 'adj.',
        cn: '具体的、明确的',
        col: 'a specific goal — 明确的目标；be specific about … — 对……说得具体',
        ex: 'A specific plan is easier to follow.'
      },
      {
        w: 'measure',
        ph: '/ˈmeʒə(r)/',
        pos: 'v./n.',
        cn: '衡量；尺度',
        col: 'measure progress — 衡量进步；take measures — 采取措施',
        ex: 'The list is a quiet measure of my days.'
      },
      {
        w: 'impact',
        ph: '/ˈɪmpækt/',
        pos: 'n.',
        cn: '影响、冲击',
        col: 'have an impact on … — 对……有影响；a big impact — 很大的影响',
        ex: 'The clearest impact is on my money.'
      },
      {
        w: 'roughly',
        ph: '/ˈrʌfli/',
        pos: 'adv.',
        cn: '大致、大约',
        col: 'roughly speaking — 大致来说；roughly half — 大约一半',
        ex: 'I can roughly see where my time goes.'
      },
      {
        w: 'monitor',
        ph: '/ˈmɒnɪtə(r)/',
        pos: 'v.',
        cn: '监测、盯着看',
        col: 'monitor progress — 盯着进展；monitor the situation — 关注情况',
        ex: 'I monitor where each day goes.'
      },
      {
        w: 'obvious',
        ph: '/ˈɒbviəs/',
        pos: 'adj.',
        cn: '明显的',
        col: 'it is obvious that … — 明显……；for obvious reasons — 出于明显的原因',
        ex: 'The change is obvious in my daily life.'
      },
      {
        w: 'daily',
        ph: '/ˈdeɪli/',
        pos: 'adj.',
        cn: '每日的、日常的',
        col: 'daily life — 日常生活；daily routine — 每天的固定安排',
        ex: 'Small habits shape a daily life.'
      },
      {
        w: 'habit',
        ph: '/ˈhæbɪt/',
        pos: 'n.',
        cn: '习惯',
        col: 'build a habit — 养成习惯；break a habit — 改掉一个习惯',
        ex: 'A small habit can change a whole day.'
      },
      {
        w: 'challenge',
        ph: '/ˈtʃælɪndʒ/',
        pos: 'n.',
        cn: '挑战',
        col: 'face a challenge — 面对挑战；a real challenge — 一个真正的挑战',
        ex: 'The third month was the real challenge.'
      },
      {
        w: 'concern',
        ph: '/kənˈsɜːn/',
        pos: 'n.',
        cn: '担忧、顾虑',
        col: 'a growing concern — 越来越大的担忧；raise a concern — 提出顾虑',
        ex: 'Concerns grew when nothing seemed to change.'
      },
      {
        w: 'steadily',
        ph: '/ˈstedɪli/',
        pos: 'adv.',
        cn: '稳步地、持续地',
        col: 'change steadily — 持续改变；grow steadily — 稳步增长',
        ex: 'Steadily, my confidence came back.'
      },
      {
        w: 'confidence',
        ph: '/ˈkɒnfɪdəns/',
        pos: 'n.',
        cn: '信心',
        col: 'build confidence — 建立信心；with confidence — 有信心地',
        ex: 'Small wins build confidence.'
      },
      {
        w: 'summary',
        ph: '/ˈsʌməri/',
        pos: 'n.',
        cn: '总结',
        col: 'in summary — 总之；a brief summary — 简短的总结',
        ex: 'The passage ends with a short summary.'
      },
      {
        w: 'therefore',
        ph: '/ˈðeəfɔː(r)/',
        pos: 'adv.',
        cn: '因此',
        col: 'and therefore — 因此；therefore do sth. — 所以做某事',
        ex: 'He felt tired, therefore he went to bed early.'
      }
    ],
    phrases: [
      {
        en: 'make a list of',
        cn: '列一张……的清单（复现第 14 篇）',
        ex: 'I made a list of small changes.'
      },
      {
        en: 'instead of',
        cn: '而不是、代替（复现第 5 篇）',
        ex: 'Walk instead of taking the bus.'
      },
      {
        en: 'so far',
        cn: '到目前为止（复现第 7 篇）',
        ex: 'So far, five habits are still here.'
      },
      {
        en: 'keep a record of',
        cn: '把……记录下来（复现第 10 篇）',
        ex: 'Keep a record of how you spend your time.'
      },
      {
        en: 'think twice',
        cn: '三思、仔细想一想（复现第 20 篇）',
        ex: 'Think twice before spending money.'
      },
      {
        en: 'give back',
        cn: '归还、把……还回来',
        ex: 'I would not give that habit back.'
      },
      {
        en: 'stick to',
        cn: '坚持、信守（复现第 8 篇）',
        ex: 'Stick to one small habit at a time.'
      },
      {
        en: 'little by little',
        cn: '一点一点地（复现第 2 篇）',
        ex: 'Little by little, the days became different.'
      },
      {
        en: 'at least',
        cn: '至少（复现第 20 篇）',
        ex: 'Read at least one page a day.'
      },
      {
        en: 'by the end of',
        cn: '到……结束时（复现第 18 篇）',
        ex: 'By the end of the month I knew where my money went.'
      },
      {
        en: 'take … seriously',
        cn: '认真对待……（复现第 20 篇）',
        ex: 'Take the small changes seriously.'
      }
    ],
    writings: [
      {
        expr: 'To sum up, ...',
        cn: '总结起来……',
        meaning: '用四个字把全文收进一句话，是<b>总结段</b>的信号词；后面只写最重要的两三点，不再展开新例子。',
        context: '全文倒数第二段或最后一段的开头；前面已经写完事实与例子。',
        alts: [
          {
            t: 'In short, ...',
            n: '第 20 篇已学，更口语'
          },
          {
            t: 'All in all, ...',
            n: '口语总结时最常用'
          },
          {
            t: 'In a word, ...',
            n: '最短，语气最强'
          }
        ],
        register: '中性，书面与口语都好用；一个总结段只用一个总结词。',
        example: 'To sum up, half a year of small changes is a short summary.'
      },
      {
        expr: 'The truth is that ...',
        cn: '说实话……',
        meaning: '用<b>表语从句</b>引出一句真心话，适合在写完客观结果之后补一个「其实」，让结尾有人味。',
        context: '结尾段；前面写了事实和数字，这里写自己真实的感受或判断。',
        alts: [
          {
            t: 'In fact, ...',
            n: '更中性，只加分句'
          },
          {
            t: 'The fact is that ...',
            n: '强调这是事实'
          },
          {
            t: 'To be honest, ...',
            n: '第 10 篇已学，更口语'
          }
        ],
        register: '中性偏口语，语气真诚不生硬；后面接完整句子。',
        example: 'The truth is that I am still the same person.'
      }
    ],
    sentences: [
      {
        text: 'Looking at the list today, I can see which small things a person can keep when nobody is watching.',
        points: [
          '<b>主干</b>：I can see … —— 句首 <b>Looking at the list today</b> 是现在分词短语作状语，动作由主语 I 发出，相当于 When I look at the list today。',
          '<b>宾语从句</b>：see 后面是 <b>which</b> 引导的名词性从句，which small things 兼作从句里 keep 的宾语，「看见哪些小事」。',
          '<b>第三层</b>：从句里再套一个 <b>when nobody is watching</b> 时间状语从句 —— 一句话里「分词状语 + 名词性从句 + 时间从句」三层结构，是阶段三的典型长句。',
          '<b>为什么值得学</b>：它把「什么时候看、看见什么、在什么条件下成立」一次说全，正是写总结段需要的句子。',
          '<b>写作迁移</b>：Looking at my notes, I can see which habits are worth keeping.'
        ]
      },
      {
        text: 'What surprised me most was that the changes nobody noticed were the ones that lasted.',
        points: [
          '<b>主干</b>：What surprised me most was that … —— 主语是 <b>What</b> 引导的名词性从句，表语是 <b>that</b> 引导的名词性从句，两个从句一前一后夹住系动词。',
          '<b>省略的关系代词</b>：the changes <b>(that)</b> nobody noticed 里关系代词作宾语，可省；而 the ones <b>that</b> lasted 里的 that 作主语，<b>不能省</b>。',
          '<b>对比关系</b>：nobody noticed（没人注意到）与 lasted（坚持得最久）形成反差，句子的信息焦点就落在这个反差上。',
          '<b>为什么值得学</b>：英语常用 What … is that … 给结论，比 The most surprising thing is that … 更紧凑、更像母语者写的。',
          '<b>写作迁移</b>：What I learned from the trip was that small plans work better.'
        ]
      },
      {
        text: 'Half of the money I used to spend on little things is now kept for books, and the rest is spent on food that I cook myself.',
        points: [
          '<b>主干</b>：Half of the money is now kept …, and the rest is spent … —— 由 and 连接的两个<b>并列被动句</b>，主语分别是 Half of the money 和 the rest。',
          '<b>定语从句两处</b>：I used to spend on little things 是省略关系代词的定语从句，修饰 money；that I cook myself 修饰 food。',
          '<b>被动语态的作用</b>：把「钱」放在主语位置，突出钱的去向而不是花钱的人；is kept / is spent 是一般现在时的被动，表示现在的常态。',
          '<b>易错点</b>：<b>used to do</b>（过去常常）与 <b>be used to doing</b>（习惯于）长得像、意思完全不同，读到 used to 要先判断是哪一个。',
          '<b>写作迁移</b>：Half of my free time is now spent on reading, and the rest is spent on sport.'
        ]
      }
    ],
    questions: [
      {
        en: 'How many items from the original list are still in the writer’s life after half a year?',
        cn: '半年之后，原清单上还有几条留在作者的生活里？',
        ans: 'Five of the twelve are still there.',
        ansCn: '十二条里还剩五条。'
      },
      {
        en: 'What do the changes that lasted have in common?',
        cn: '坚持下来的改变有什么共同点？',
        ans: 'They have a fixed time and a clear target.',
        ansCn: '它们都有固定的时间和明确的目标。'
      },
      {
        en: 'What is the main idea of the passage?',
        cn: '这篇文章的主旨是什么？',
        ans: 'Small changes kept for half a year bring quiet but real improvements to daily life.',
        ansCn: '坚持半年的小改变，会给日常生活带来安静而真实的改善。'
      },
      {
        en: 'Which word in the second paragraph means the same as “goal”?',
        cn: '第二段中的哪个词是「目标」的同义替换？',
        ans: 'Target.',
        ansCn: '第二段里表示「目标」的那个词。'
      },
      {
        en: 'What does the writer mean by saying “It is not a report card”?',
        cn: '作者说它「不是成绩单」，这句话是什么意思？',
        ans: 'Nobody gives him a grade; the list is not for showing a score.',
        ansCn: '没有人给他打分，这份清单不是用来亮出分数的。'
      }
    ],
    writingTask: {
      en: 'Write 80–100 words about one small change you want to keep for half a year.',
      hints: [
        'Half a year ago, I ...',
        'So far, ...',
        'To sum up, ...',
        'The truth is that ...'
      ],
      hintCn: '用 5–6 句话写：你半年前想改的那件小事、到现在的进展、它带来的实际变化，最后一句总结你的心得。',
      req: '至少使用 3 个本篇学过的词或搭配（habit / summary / monitor / keep a record of / think twice / instead of）。'
    },
    speakingTask: {
      en: 'Speak for one minute: give your opinion on small changes, one reason, and one example from your own life.',
      points: [
        'Your opinion: are small changes worth the effort?',
        'One reason',
        'One example from your life, with a time or a number',
        'One sentence to close'
      ],
      pointCn: '一分钟里讲完「观点 → 理由 → 例子 → 收尾」四步；例子一定要具体到时间、地点或数字。',
      skeleton: 'In my opinion, small changes are worth it. The main reason is that ... For example, last month I ... To sum up, ...'
    },
    focus: [
      '<b>新授核心词 16 个</b>：<span class=\'en\'>entry, survive, specific, measure, impact, roughly, monitor, obvious, daily, habit, challenge, concern, steadily, confidence, summary, therefore</span> —— <b>entry 的复数是 entries</b>（清单上的「一条」）；<b>measure</b> 既是动词「衡量」也是名词「尺度」；<b>concern</b> 表示「担忧」时可数（a concern / concerns）；<b>confidence 不可数</b>，不能说 a confidence；<b>therefore</b> 是副词，前后要留逗号。',
      '<b>本篇复现的旧词（本篇是节点篇，共 9 处灰点，覆盖阶段一、二重点旧词）</b>：第 1 篇的 <span class=\'en\'>afford / benefit</span>、第 2 篇的 <span class=\'en\'>suggest → suggested / improve / progress</span>、第 3 篇的 <span class=\'en\'>encourage</span>、第 10 篇的 <span class=\'en\'>effort</span>、第 11 篇的 <span class=\'en\'>hesitate / realize → realized</span>。',
      '<b>四类句法在本篇收口</b>：<span class=\'en\'>Looking at the list today, I can see …</span>（非谓语作状语）· <span class=\'en\'>What surprised me most was that …</span>（名词性从句）· <span class=\'en\'>Half of the money I used to spend … is now kept …</span>（定语从句 + 被动语态）。阶段三要求的句法每类至少出现一次，这里都在长难句解析里拆开了。',
      '<b>盘点类文章的骨架搭配</b>：<span class=\'en\'>make a list of</span>（列清单）→ <span class=\'en\'>so far</span>（交代现状）→ <span class=\'en\'>keep a record of</span>（记录数据）→ <span class=\'en\'>think twice</span>（写取舍）→ <span class=\'en\'>To sum up</span>（收束）。从第 4 篇的比价、第 10 篇的月度复盘到本篇的半年清单，都靠这条线撑住。',
      '<b>全文逻辑线与题型提醒</b>：半年前列清单 → 十二剩五 → 清单只是尺子 → 钱与时间的变化 → 没人注意的改变最持久 → 睡眠与心情 → 第三个月最难 → 一句话总结 → 真心话收尾。主旨题抓「小改变 + 半年 + 真实变化」三点齐全；词义猜测题要把比喻放回上下文（report card 说的不是成绩单本身，而是「没人打分」）。',
      '<b>⭐ 本阶段复盘 · 词汇抽查</b>：请盖住释义，认一认这 10 个阶段一、二的旧词 —— <span class=\'en\'>afford, attention, benefit, suggest, improve, opinion, encourage, support, compare, decide</span>。任何两个想不起来的，写进阶段四的复习清单，会安排在第 31–35 篇里再次复现。',
      '<b>⭐ 本阶段复盘 · 下阶段难度确认</b>：阶段四（第 31–40 篇）会一次上调多个维度 —— 篇幅 400→500 词、新词密度 5–7%、每篇 15–20 个新词、长难句 3–5 句（<b>多从句嵌套、插入语、同位语、强调与倒装初步</b>）；阅读题新增<b>态度题、论证关系（因果 / 转折 / 举例的作用）、写作目的题</b>；写作 100–120 词（对比 / 因果 / 转折 + 段落主题句）；口语 1 分钟结构化（观点 → 原因 → 例子）。<b>如果你读完这一篇觉得「刚好」或「偏简单」，就按计划推进；如果偏难，第 31 篇只下调新词密度，其余维度照旧。</b>请在反馈里给一个 1–5 的难度自评：1＝偏难，3＝刚好，5＝偏简单。'
    ],
    standard: {
      time: '约 40 分钟',
      bar: '阶段三复盘：阅读题 5 题对 ≥ 4 · 16 个核心词遮住中文说出 ≥ 12 · 说出 3 处长难句的结构 · 完成 80–100 词写作与 1 分钟口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 16 个核心词中的 12 个（entry、survive、specific、measure、impact、monitor …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '11 个高频搭配掌握 8 个，能各造一句（make a list of、keep a record of、think twice …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 3 处长难句各自的结构（分词状语 / 名词性从句 / 被动语态），并仿写其中 2 处',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；错的题要能回到原文定位',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 80–100 词，至少用上 To sum up, … 或 The truth is that …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟讲完「观点 → 理由 → 例子 → 收尾」，例子要具体到时间或数字',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 9 处灰点旧词，说出其中 7 个的意思；并给阶段三的收获打一个 1–5 分',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 31,
    slug: '031-why-we-remember-stories-not-facts',
    title: 'Why We Remember Stories, Not Facts',
    titleCn: '为什么我们记得住故事',
    stage: '阶段四 · 中级提高',
    stageRange: '第 31–40 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 415 词'
      },
      {
        k: '新词密度',
        v: '约 5.5%'
      },
      {
        k: '长难句',
        v: '4 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/031.jpg',
    coverCredit: 'Photo: Matheus Bertelli / Pexels',
    body: [
      'Ask anyone what he learned at school, and the answer is rarely a date. It is a story: a king who lost a war, a ship caught in a storm, a painting that vanished. The dates are long gone, but the stories are easy to <span class="w-cet4" data-cn="回想起、回忆起">recall</span>.',
      'Psychologists argue that the mind does not store information as a list. It stores a <span class="w-cet4" data-cn="顺序、一连串">sequence</span>: what happened first, what came next, and why one event <span class="w-cet4" data-cn="导致">caused</span> another. <span class="w-cet4" data-cn="抽象的">Abstract</span> facts, taken <span class="w-phrase" data-cn="一个接一个">one by one</span>, break that sequence: nothing can be <span class="w-cet4" data-cn="联系、连接">linked</span>, and what the mind cannot <span class="w-cet4" data-cn="理解、领会">grasp</span> is rarely <span class="w-cet4" data-cn="保留、记住">retained</span>.',
      'A second reason is feeling. A list asks only for attention, but a story <span class="w-cet4" data-cn="吸引、使参与">engages</span> us: when a <span class="w-cet4" data-cn="人物、角色">character</span> is hungry, lost or afraid, we feel some of it ourselves. What touches us becomes <span class="w-synonym" data-cn="＝ easy to remember 的替换词">memorable</span>, and emotion works like a highlighter, telling the brain which details <span class="w-rev">matter</span>.',
      '<span class="w-sentence">When a page offers nothing but facts in a row, the student must work twice as hard, and much of that work is in vain.</span> <span class="w-writing" data-cn="这意味着……">What this means is that</span> we should stop asking whether facts were <span class="w-rev">memorized</span> and start asking whether our <span class="w-rev">effort</span> gave them a shape the mind can recall.',
      '<span class="w-writing" data-cn="例如">For instance</span>, a teacher who tells a great fire story <span class="w-phrase" data-cn="以……结束">ends with</span> a question, and the room fills with <span class="w-rev">curious</span> voices. <span class="w-sentence">Read only the year and the death toll, and the same teacher gets silence, because numbers give the mind no one to follow.</span> One lesson is <span class="w-synonym" data-cn="＝ told 的替换词">recounted</span> as an event and engages the class; the other is copied and forgotten.',
      '<span class="w-cet4" data-cn="证据、依据">Evidence</span> from study after study points <span class="w-phrase" data-cn="以同样的方式、同样地">in the same way</span>, and the <span class="w-rev">advice</span> is short: turn any list into <span class="w-phrase" data-cn="一系列">a series of</span> linked events, give each fact a clear <span class="w-cet4" data-cn="上下文、语境">context</span>, and the pattern <span class="w-phrase" data-cn="记得牢、印在脑子里">sticks in one’s mind</span> longer than a bare list of dates.',
      '<span class="w-sentence">Readers who remember the scene often forget the figures behind it, and the story ends up proving something it never proved.</span> A <span class="w-cet4" data-cn="生动的">vivid</span> scene may <span class="w-cet4" data-cn="歪曲、使失真">distort</span> the <span class="w-cet4" data-cn="准确的">accurate</span> record, because readers keep the <span class="w-cet4" data-cn="情节">plot</span> and drop the numbers. Good students use the story as a way in, not as proof, and check the <span class="w-rev">details</span> in context.',
      'None of this means the facts can be ignored: facts are the material, but a story is the shape that lets the mind <span class="w-cet4" data-cn="吸收、理解">absorb</span> and retain them. <span class="w-sentence">A good story does not replace the facts; it gives them a form the mind can hold, and only then do they stay.</span> That is how a bare sequence becomes a story <span class="w-rev">worth</span> keeping.'
    ],
    translation: [
      '随便问一个人，十年前在历史课上学到了什么，答案很少是一个年份，而是一个故事：一位打了败仗的国王、一艘遇上风暴的船、一幅忽然消失的画。年份早就没了，可故事一想起来就清楚。',
      '心理学家认为，大脑并不是把信息当成一张清单保存的。它保存的是一串顺序：什么先发生、什么紧随其后，以及一件事为什么会引发另一件。抽象的事实一个接一个地摆着，把这个顺序打断了，什么都连不起来；连不起来的东西，脑子抓不住，也就很少留得住。',
      '第二个原因是情感。清单只要求我们专心，故事却把我们拉了进去：当一个人物挨饿、迷路或害怕时，我们也跟着难受一点。被触动的东西才会被人记住，而情绪就像一支荧光笔，告诉大脑哪些细节要紧。',
      '当一整页摆的都是事实、却没有一个故事把它们串起来时，学生就必须多花一倍力气，而这些力气多半是白费的。这意味着，我们该问的不再是事实有没有被背下来，而是我们的努力有没有给它们一个脑子回想得起的形状。',
      '比如，一位老师讲完一场大火的故事，最后抛出一个问题，教室里顿时都是追问的声音。只念年份和死亡人数，同一位老师换来的却是安静，因为数字给不了头脑一个可以跟随的对象。一堂课当成事件讲出来，学生会跟进；另一堂被抄进本子，然后就被忘了。',
      '一项又一项研究都指向同一个方向，给学生的建议也很短：把任何清单变成一连串相互关联的事件，给每条事实一个清楚的背景，这样形成的图样，会在脑子里留得比一串光秃秃的日期久得多。',
      '读者记得住那一幕，却常常忘了幕后的数字，故事最后会证明一件它从没证明过的事。生动的画面可能扭曲本来准确的记录，因为读者记住了情节，丢掉了数字。所以好学生只把故事当入口、不当证据，还会回到细节，在原有的背景里核对。',
      '这并不意味着事实可以被忽略：事实是材料，故事则是让头脑吸收并留住它们的形状。好故事不会取代事实，它给事实一个握得住的形状，事实这才留了下来。一串光秃秃的事实，就是这样变成一个值得留住的故事的。'
    ],
    vocabulary: [
      {
        w: 'recall',
        ph: '/rɪˈkɔːl/',
        pos: 'v./n.',
        cn: '回想起、回忆起',
        col: 'recall a story — 回想起一个故事；beyond recall — 无法挽回',
        ex: 'She could not recall the name of the town.'
      },
      {
        w: 'retain',
        ph: '/rɪˈteɪn/',
        pos: 'vt.',
        cn: '保留、记住',
        col: 'retain information — 记住信息；retain what you learn — 留住学到的东西',
        ex: 'Students retain a story far longer than a list.'
      },
      {
        w: 'sequence',
        ph: '/ˈsiːkwəns/',
        pos: 'n.',
        cn: '顺序、一连串',
        col: 'in sequence — 按顺序；a sequence of events — 一连串事件',
        ex: 'The mind stores a sequence, not a list.'
      },
      {
        w: 'abstract',
        ph: '/ˈæbstrækt/',
        pos: 'adj.',
        cn: '抽象的',
        col: 'abstract ideas — 抽象的概念；abstract facts — 抽象的事实',
        ex: 'Abstract facts are hard to link to anything.'
      },
      {
        w: 'vivid',
        ph: '/ˈvɪvɪd/',
        pos: 'adj.',
        cn: '生动的、逼真的',
        col: 'a vivid scene — 生动的画面；a vivid memory — 清晰的记忆',
        ex: 'The story gives a vivid picture of that night.'
      },
      {
        w: 'engage',
        ph: '/ɪnˈɡeɪdʒ/',
        pos: 'vt.',
        cn: '吸引、使参与',
        col: 'engage the reader — 吸引读者；engage the class — 让全班投入',
        ex: 'A good story engages the whole class.'
      },
      {
        w: 'link',
        ph: '/lɪŋk/',
        pos: 'v./n.',
        cn: '联系、连接',
        col: 'link A to B — 把 A 和 B 连起来；a link between — ……之间的联系',
        ex: 'Readers link one event to the next.'
      },
      {
        w: 'distort',
        ph: '/dɪˈstɔːt/',
        pos: 'vt.',
        cn: '歪曲、使失真',
        col: 'distort the record — 歪曲记录；distort the truth — 歪曲真相',
        ex: 'A good story can distort an accurate record.'
      },
      {
        w: 'accurate',
        ph: '/ˈækjərət/',
        pos: 'adj.',
        cn: '准确的',
        col: 'an accurate record — 准确的记录；accurate numbers — 准确的数字',
        ex: 'Give an accurate account of what happened.'
      },
      {
        w: 'absorb',
        ph: '/əbˈzɔːb/',
        pos: 'vt.',
        cn: '吸收、理解',
        col: 'absorb information — 吸收信息；absorb a lesson — 消化一课的内容',
        ex: 'The mind absorbs what it can connect.'
      },
      {
        w: 'grasp',
        ph: '/ɡrɑːsp/',
        pos: 'vt./n.',
        cn: '理解、领会；抓住',
        col: 'grasp the meaning — 领会意思；a good grasp of — 对……掌握得好',
        ex: 'Students grasp the idea when it comes with an example.'
      },
      {
        w: 'evidence',
        ph: '/ˈevɪdəns/',
        pos: 'n.',
        cn: '证据、依据',
        col: 'evidence for — ……的证据；a piece of evidence — 一条证据',
        ex: 'The evidence points in the same way.'
      },
      {
        w: 'character',
        ph: '/ˈkærəktə/',
        pos: 'n.',
        cn: '人物、性格',
        col: 'a main character — 主人公；character traits — 性格特点',
        ex: 'We follow the character through the whole story.'
      },
      {
        w: 'plot',
        ph: '/plɒt/',
        pos: 'n.',
        cn: '情节',
        col: 'the plot of a story — 故事的情节；a confusing plot — 混乱的情节',
        ex: 'Readers remember the plot and forget the numbers.'
      },
      {
        w: 'context',
        ph: '/ˈkɒntekst/',
        pos: 'n.',
        cn: '上下文、语境',
        col: 'in context — 在语境中；give sth. a context — 给某事一个背景',
        ex: 'A date means very little without its context.'
      },
      {
        w: 'cause',
        ph: '/kɔːz/',
        pos: 'n./v.',
        cn: '原因；导致',
        col: 'cause and effect — 因果关系；cause a change — 导致一种变化',
        ex: 'The story shows why one event caused another.'
      }
    ],
    phrases: [
      {
        en: 'at first glance',
        cn: '第一眼看上去',
        ex: 'At first glance the list looks simple enough.'
      },
      {
        en: 'a series of',
        cn: '一系列',
        ex: 'The mind prefers a series of linked events.'
      },
      {
        en: 'one by one',
        cn: '一个接一个',
        ex: 'Read the dates one by one and they blur together.'
      },
      {
        en: 'end with',
        cn: '以……结束',
        ex: 'The lesson ends with a question from the class.'
      },
      {
        en: 'in the same way',
        cn: '以同样的方式、同样地',
        ex: 'Study after study points in the same way.'
      },
      {
        en: 'stick in one’s mind',
        cn: '记得牢、印在脑子里',
        ex: 'That story stuck in my mind for years.'
      },
      {
        en: 'by heart',
        cn: '记住、背熟',
        ex: 'He learned the whole poem by heart.'
      },
      {
        en: 'figure out',
        cn: '弄明白、搞清楚',
        ex: 'It takes a minute to figure out the order.'
      },
      {
        en: 'pay off',
        cn: '见效、得到回报',
        ex: 'The extra effort pays off in the exam.'
      },
      {
        en: 'count on',
        cn: '依赖、指望',
        ex: 'Do not count on a bare list to remind you.'
      }
    ],
    writings: [
      {
        expr: 'What this means is that ...',
        cn: '这意味着……',
        meaning: '把前文的现象或证据直接推成一个结论，让「事实 → 观点」的一步看得见。',
        context: '主体段或结论段：前面先摆现象或研究，后面用它推出你真正要说的那句话。',
        alts: [
          {
            t: 'In other words, ...',
            n: '更侧重换一种说法重讲'
          },
          {
            t: 'The point is that ...',
            n: '更强调要点本身'
          },
          {
            t: 'So we can say that ...',
            n: '语气更口语'
          }
        ],
        register: '中性偏书面，说明文与议论文都稳。',
        example: 'The dates were forgotten while the story stayed. What this means is that structure beats a list.'
      },
      {
        expr: 'For instance, ...',
        cn: '例如……',
        meaning: '用一个具体例子支撑前面刚说完的道理，比空讲观点有说服力。',
        context: '观点句之后、段落中后部；与 for example 可互换，语气稍书面。',
        alts: [
          {
            t: 'For example, ...',
            n: '最常见，稍口语'
          },
          {
            t: 'Take ... as an example.',
            n: '把例子放在句首强调'
          },
          {
            t: 'A case in point is ...',
            n: '书面，议论性强'
          }
        ],
        register: '中性，写作与口语都能用。',
        example: 'Structure beats a list. For instance, a teacher who tells a story gets questions about the dates.'
      }
    ],
    sentences: [
      {
        text: 'When a page offers nothing but facts in a row, the student must work twice as hard, and much of that work is in vain.',
        points: [
          '<b>主干</b>：the student must work twice as hard；句首 When 引导时间状语从句，交代「什么时候会更吃力」。',
          '<b>nothing but + 名词</b>：「除了……什么都没有」，but 在这里是介词；写作里可替换 nothing except，语气更强调「只有」。',
          '<b>并列句 + in vain</b>：and 后接一个完整分句，in vain（徒劳）作表语，把「多花力气」和「白费」连成因果。',
          '<b>为什么值得学</b>：「条件 + 更费力 + 结果落空」三段式，是说明文里解释「为什么老方法不行」的常用模型。'
        ]
      },
      {
        text: 'Read only the year and the death toll, and the same teacher gets silence, because numbers give the mind no one to follow.',
        points: [
          '<b>主干</b>：祈使句 Read … 加 and 加陈述句 the same teacher gets silence，等于「如果你只念……就会……」的条件句。',
          '<b>祈使句 + and + 陈述句</b>：不用 if 也能表达条件，语气更干脆；否定条件要用祈使句 + or（否则）。',
          '<b>because 原因从句</b>：放在主句之后补充理由；从句里 give sb. sth. 双宾语结构，no one to follow 是「无人可跟随」的宾语。',
          '<b>为什么值得学</b>：一句话同时给出做法、结果和原因，段落里用它做「例子 → 结论」的过渡非常顺。'
        ]
      },
      {
        text: 'Readers who remember the scene often forget the figures behind it, and the story ends up proving something it never proved.',
        points: [
          '<b>主干</b>：Readers … forget the figures 与 the story ends up proving … 由 and 并列，前后形成「读者做了什么 / 故事做了什么」的对照。',
          '<b>两个定语从句</b>：who remember the scene 修饰 readers；proving something (that) it never proved 里省略了关系代词 that，修饰 something。',
          '<b>end up doing sth.</b>：「最终落得……（常指出乎意料的结果）」，是第 24 篇就学过的搭配，这里再次出现。',
          '<b>时态对照</b>：remembers / forget 用一般现在时表示规律，never proved 用过去时表示「从未做到过」，时态差本身就是对比。'
        ]
      },
      {
        text: 'A good story does not replace the facts; it gives them a form the mind can hold, and only then do they stay.',
        points: [
          '<b>主干</b>：分号连接两个分句，前句否定、后句给出正面说法，是「不是……而是……」的高级写法。',
          '<b>省略定语从句</b>：a form (that) the mind can hold，关系代词作宾语时可以省略，读起来更轻。',
          '<b>only then 部分倒装</b>：only + 状语置于句首时，主句助动词提前（do they stay），这是阶段四的重点句型。',
          '<b>为什么值得学</b>：全文立意句，把「故事」和「事实」的关系一次说清；结尾段或主题句都能直接仿写。'
        ]
      }
    ],
    questions: [
      {
        en: 'How does the mind store information, according to psychologists?',
        cn: '按心理学家的说法，大脑是怎样保存信息的？',
        ans: 'As a sequence: what happened first, what came next, and why one event caused another.',
        ansCn: '按一串顺序保存：什么先发生、什么紧随其后，以及一件事为什么会引发另一件。'
      },
      {
        en: 'What happens to abstract facts that the mind cannot link?',
        cn: '大脑连不起来的抽象事实会怎么样？',
        ans: 'They are hard to grasp, and they are rarely retained.',
        ansCn: '它们很难被领会，也很少能被留住。'
      },
      {
        en: 'Why does reading a bare list of dates usually fail to make anything stick?',
        cn: '为什么光读一串日期，基本留不下什么印象？',
        ans: 'Because a list gives the mind nothing to link, so the facts stay separate from one another and are soon forgotten.',
        ansCn: '因为清单没有给大脑任何可连接的东西，事实彼此孤立，很快就被忘掉。'
      },
      {
        en: 'What is the purpose of the great fire example in paragraph 5?',
        cn: '第五段里那场大火的例子是干什么用的？',
        ans: 'It shows that a lesson told as an event engages the class, while the same facts read out as numbers get silence.',
        ansCn: '它说明：当成事件讲的一节课能让全班投入，而同样的事实如果只用数字念出来，换来的只是安静。'
      },
      {
        en: 'What is the writer’s purpose in the last paragraph?',
        cn: '作者在最后一段的写作目的是什么？',
        ans: 'To explain that stories do not replace facts but give them a shape the mind can absorb and keep.',
        ansCn: '说明故事并不取代事实，而是给事实一个能被头脑吸收并留住的形状。'
      }
    ],
    writingTask: {
      en: 'Write 100–120 words about how you remember something difficult, such as words, dates or rules.',
      hints: [
        'It is easy to forget ..., but ...',
        'What this means is that ...',
        'For instance, ...',
        'In the end, ...'
      ],
      hintCn: '用 6–8 句话写：先说那样东西为什么难记，再用 What this means is that 引出结论，中间举一个自己学习中的例子，最后收在方法上。',
      req: '至少使用 2 个本篇学过的词或搭配（recall / sequence / context / a series of / stick in one’s mind）。'
    },
    speakingTask: {
      en: 'Speak for 1 minute: Do stories help you remember better than lists? Give your opinion, one reason and one example.',
      points: [
        'Your opinion',
        'One reason',
        'One example from your own study'
      ],
      pointCn: '先明确表态，再给一个理由，最后举一个自己学习中的例子；三段都要有，1 分钟内说完。',
      skeleton: 'In my view, stories help me remember better. The reason is that ... For instance, last week I ...'
    },
    focus: [
      '<b>新授核心词 16 个</b>：<span class=\'en\'>recall, retain, sequence, abstract, vivid, engage, link, distort, accurate, absorb, grasp, evidence, character, plot, context, cause</span> —— 三个「记 / 抓」类动词搭配各不同：<span class=\'en\'>recall a story</span>（回想起）、<span class=\'en\'>retain information</span>（留住信息）、<span class=\'en\'>grasp the meaning</span>（领会意思）；<span class=\'en\'>cause</span> 作动词直接接宾语，不加介词，常考 <span class=\'en\'>cause and effect</span>（因果）。',
      '<b>本篇复现的旧词</b>：第 3 篇的 <span class=\'en\'>matter</span>（哪些细节要紧）与 <span class=\'en\'>advice</span>（给学生的建议）、第 10 篇的 <span class=\'en\'>effort</span>（努力有没有变成形状）、第 11 篇的 <span class=\'en\'>curious</span>（满屋子追问的声音）、第 12 篇的 <span class=\'en\'>memorized</span>（有没有被背下来）、第 20 篇的 <span class=\'en\'>details</span>（回到细节核对）、第 29 篇的 <span class=\'en\'>be worth doing</span>（值得留住的故事）—— 共 7 处灰点，先自测再查篇目。',
      '<b>四个长难句</b>：第一句练「<span class=\'en\'>when 时间从句 + 并列 + in vain</span>」；第二句练「<span class=\'en\'>祈使句 + and + 主句 + because 原因从句</span>」，一句讲完做法、结果和理由；第三句里 <span class=\'en\'>who</span> 与省略的 <span class=\'en\'>that</span> 两个定语从句并列；第四句的 <span class=\'en\'>only then do they stay</span> 是部分倒装，阶段四新句型，务必仿写一句。',
      '<b>搭配与写作表达</b>：五处绿点 <span class=\'en\'>one by one</span>（一个接一个）、<span class=\'en\'>end with</span>（以……结束）、<span class=\'en\'>in the same way</span>（同样地）、<span class=\'en\'>a series of</span>（一系列）、<span class=\'en\'>stick in one’s mind</span>（记得牢）都跟「顺序与记忆」有关；写作用 <span class=\'en\'>What this means is that …</span> 把现象推成结论，用 <span class=\'en\'>For instance, …</span> 引出例子。',
      '<b>全文逻辑线与题型提醒</b>：现象（记得住故事、记不住年份）→ 原因一（顺序与因果）→ 原因二（情感与画面）→ 课堂例子 → 可操作的建议 → 局限（故事会失真）→ 立意（故事给事实一个形状）。第 4 题是论证关系题，答「例子证明了哪个观点」；第 5 题是写作目的题，答案就在最后一段的立意句里。'
    ],
    standard: {
      time: '约 38 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 16 个核心词遮住中文说出 ≥ 12 · 4 个长难句会拆结构 · 完成 100–120 词写作与 1 分钟口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 16 个核心词中的 12 个（recall、sequence、distort、context …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '10 个高频搭配掌握 8 个，能各造一句（one by one、a series of、stick in one’s mind …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '4 个长难句各说出主干与从句类型，并各仿写一句（when 从句、祈使句 + and、双定语从句、only then 倒装）',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；论证关系题与写作目的题要能说出原文依据',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 100–120 词，至少用上 What this means is that … 或 For instance, …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟按「观点 → 原因 → 例子」说清故事是否比清单更好记',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 7 处灰点旧词，说出其中 5 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 32,
    slug: '032-the-science-of-a-good-night-s-sleep',
    title: 'The Science of a Good Night’s Sleep',
    titleCn: '好睡眠的科学',
    stage: '阶段四 · 中级提高',
    stageRange: '第 31–40 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 425 词'
      },
      {
        k: '新词密度',
        v: '约 6.4%'
      },
      {
        k: '长难句',
        v: '4 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/032.jpg',
    coverCredit: 'Photo: Kampus Production / Pexels',
    body: [
      'We spend about a third of our lives asleep, which sounds like a waste until we look at what happens in those hours. Sleep is not a pause; it is work, and the body uses it to <span class="w-cet4" data-cn="恢复、使复原">restore</span> itself for the next day. A bad night is felt the next morning.',
      'Night sleep is not one long block. It moves in <span class="w-cet4" data-cn="周期、循环">cycles</span> of roughly ninety minutes, and every cycle passes through the same <span class="w-cet4" data-cn="阶段、时期">stages</span>: a light stage, a deep stage, and a busy stage full of dreams. <span class="w-phrase" data-cn="事实上">In fact</span>, the order <span class="w-synonym" data-cn="＝ nearly 的替换词">almost</span> never changes, and cutting a night short costs the last cycle first.',
      '<span class="w-sentence">During the deepest stage the sleeper is hard to wake, and the body does most of its repair work then.</span> Muscles <span class="w-rev">recover</span>, tissues are mended, and body <span class="w-cet4" data-cn="体温">temperature</span> falls a little. This is also when the day’s <span class="w-cet4" data-cn="节律、节奏">rhythm</span> is set: <span class="w-cet4" data-cn="固定的、一贯的">consistent</span> nights teach the body to expect sleep at the same hour.',
      'Sleep serves the mind as much as the body. Through the night the <span class="w-cet4" data-cn="大脑">brain</span> sorts the day’s material, keeping what may be useful and dropping the rest. <span class="w-rev">Evidence</span> from lab studies points to one conclusion: students who <span class="w-rev">recall</span> a poor night find new facts harder to learn the next day.',
      'Bright <span class="w-rev">screens</span>, late <span class="w-cet4" data-cn="咖啡因">caffeine</span> and a warm room can all <span class="w-cet4" data-cn="打乱、干扰">disrupt</span> this order, leaving the sleeper <span class="w-phrase" data-cn="翻来覆去">tossing and turning</span> before the deep stage is reached. <span class="w-sentence">The body can return to sleep after a short break, but the deep hours of the night’s second half are the ones that are lost.</span> For many people it becomes a <span class="w-cet4" data-cn="焦躁不安的、睡不沉的">restless</span> night.',
      '<span class="w-writing" data-cn="关键在于……">The key is to</span> <span class="w-phrase" data-cn="放松下来">wind down</span> at about the same hour every night. Lower the lights, <span class="w-rev">write down</span> what is left to do, and <span class="w-phrase" data-cn="入睡">fall asleep</span> before the mind <span class="w-synonym" data-cn="＝ becomes active 的替换词">grows busy</span> again. An <span class="w-cet4" data-cn="理想中的">ideal</span> evening ends the same way each night, so the body starts the cycle on time.',
      'The next morning shows the score: low <span class="w-rev">mood</span>, thin <span class="w-rev">energy</span>, and a <span class="w-cet4" data-cn="困倦的、昏昏欲睡的">drowsy</span> head that loses attention by midmorning. <span class="w-sentence">Eight hours in bed are not eight hours of sleep, because quantity alone cannot measure the deep stages.</span> So <span class="w-cet4" data-cn="数量、量">quantity</span> is only half the question; an early <span class="w-cet4" data-cn="小睡、打盹">nap</span> keeps the mind <span class="w-cet4" data-cn="警觉的、敏锐的">alert</span> longer than <span class="w-phrase" data-cn="几个">a couple of</span> extra hours in bed.',
      '<span class="w-writing" data-cn="这就是为什么……">This is why</span> the <span class="w-rev">quality</span> of a night matters more than its length: steady timing lets the body wake <span class="w-cet4" data-cn="恢复精力的、清爽的">refreshed</span>, alert and ready for a long day. <span class="w-sentence">Sleep is less a gift than a skill, and like any skill it grows when the same small actions are repeated night after night.</span>'
    ],
    translation: [
      '我们一生大约有三分之一的时间在睡觉，听起来挺浪费的，直到看清这几个小时里身体究竟在干什么。睡眠不是一天当中的停顿，它是工作：身体靠它为第二天恢复过来。一夜没睡好，第二天一早就会尝到苦头。',
      '夜里的睡眠不是一整块，而是一种反复出现的模式。它以大约九十分钟为一个周期向前推进，每个周期都要经过同样的阶段：浅睡、深睡，还有一个满是梦的热闹阶段。事实上，这个顺序几乎从不改变；把夜晚砍短，先赔进去的总是最后一个周期。',
      '在最深的阶段，人很难被叫醒，身体大部分的修复工作就在那安静的半小时里完成。肌肉恢复，组织被修补，体温也稍稍下降。这也是一天的节律被设定的时候：作息一贯的夜晚，会让身体学会在同一时刻等着入睡。',
      '睡眠对头脑的作用不亚于对身体。整夜里，大脑把当天的材料分门别类，留下可能有用的，丢掉其余的。实验室的研究指向同一个结论：一夜没睡好的学生，第二天学新东西会更吃力。',
      '明亮的屏幕、太晚摄入的咖啡因和一间暖和的房间，都能打乱这个顺序，让人翻来覆去，还没摸到深睡阶段就过去了。短暂中断之后身体还能再睡回去，可后半夜那几个小时的深睡，丢了就是丢了。对许多人来说，这就成了一个不安的夜晚。',
      '关键在于睡前先放松下来，每天差不多在同一时间。把灯光调暗，把还没做完的事写下来，赶在脑子重新忙起来之前睡着。一个理想的夜晚，结束的方式夜夜相同，好让身体准时启动下一个周期。',
      '第二天一早就能看出分数：情绪低落、精力单薄，昏昏沉沉的脑袋撑不到中午就丢了注意力。躺在床上八小时并不等于睡了八小时，因为光凭数量根本量不出深睡有多深。所以数量只是问题的一半；一段早些的小睡，让脑子保持清醒的时间，比在床上多躺几个小时还长。',
      '这就是为什么一夜的质量比它的长度更要紧：稳定的节奏能让身体自己醒来，精神饱满、头脑清醒，足以应付漫长的一天。与其说睡眠是天赋，不如说它是一门手艺；而任何手艺，都会在同样的小动作夜复一夜的重复中长出来。'
    ],
    vocabulary: [
      {
        w: 'restore',
        ph: '/rɪˈstɔː/',
        pos: 'vt.',
        cn: '恢复、使复原',
        col: 'restore the body — 使身体恢复；restore balance — 恢复平衡',
        ex: 'Sleep restores the body for the next day.'
      },
      {
        w: 'cycle',
        ph: '/ˈsaɪkl/',
        pos: 'n./v.',
        cn: '周期、循环',
        col: 'a sleep cycle — 一个睡眠周期；cycle through — 循环经历一遍',
        ex: 'Each sleep cycle lasts about ninety minutes.'
      },
      {
        w: 'stage',
        ph: '/steɪdʒ/',
        pos: 'n.',
        cn: '阶段、时期',
        col: 'a deep stage — 深睡阶段；at this stage — 在这个阶段',
        ex: 'The body passes through several stages each cycle.'
      },
      {
        w: 'temperature',
        ph: '/ˈtemprətʃə/',
        pos: 'n.',
        cn: '温度、体温',
        col: 'body temperature — 体温；a high temperature — 高烧',
        ex: 'Body temperature falls a little during the night.'
      },
      {
        w: 'rhythm',
        ph: '/ˈrɪðəm/',
        pos: 'n.',
        cn: '节奏、节律',
        col: 'body rhythm — 身体的节律；keep a steady rhythm — 保持稳定节奏',
        ex: 'A steady rhythm helps you fall asleep.'
      },
      {
        w: 'consistent',
        ph: '/kənˈsɪstənt/',
        pos: 'adj.',
        cn: '固定的、一贯的',
        col: 'consistent nights — 一贯的作息夜晚；consistent with — 与……一致',
        ex: 'Consistent bedtimes train the body to expect sleep.'
      },
      {
        w: 'brain',
        ph: '/breɪn/',
        pos: 'n.',
        cn: '大脑',
        col: 'use the brain — 用脑；the brain at work — 正在工作的大脑',
        ex: 'The brain sorts the day during sleep.'
      },
      {
        w: 'disrupt',
        ph: '/dɪsˈrʌpt/',
        pos: 'vt.',
        cn: '打乱、干扰',
        col: 'disrupt the order — 打乱顺序；disrupt a plan — 扰乱一个计划',
        ex: 'Late coffee can disrupt your sleep.'
      },
      {
        w: 'caffeine',
        ph: '/ˈkæfiːn/',
        pos: 'n.',
        cn: '咖啡因',
        col: 'cut down on caffeine — 减少咖啡因；too much caffeine — 过多的咖啡因',
        ex: 'Avoid caffeine in the evening.'
      },
      {
        w: 'restless',
        ph: '/ˈrestləs/',
        pos: 'adj.',
        cn: '焦躁不安的、睡不沉的',
        col: 'a restless night — 不安的一夜；feel restless — 坐立不安',
        ex: 'He spent a restless night turning in bed.'
      },
      {
        w: 'ideal',
        ph: '/aɪˈdiːəl/',
        pos: 'adj.',
        cn: '理想中的、最合适的',
        col: 'an ideal time — 理想的时间；ideal for — 对……最理想',
        ex: 'The ideal hour is the one you can keep.'
      },
      {
        w: 'drowsy',
        ph: '/ˈdraʊzi/',
        pos: 'adj.',
        cn: '困倦的、昏昏欲睡的',
        col: 'feel drowsy — 觉得困；a drowsy afternoon — 让人犯困的下午',
        ex: 'A drowsy head cannot hold attention.'
      },
      {
        w: 'quantity',
        ph: '/ˈkwɒntəti/',
        pos: 'n.',
        cn: '数量、量',
        col: 'in quantity — 在数量上；quantity of sleep — 睡眠的量',
        ex: 'Quantity is only half the question.'
      },
      {
        w: 'nap',
        ph: '/næp/',
        pos: 'n./v.',
        cn: '小睡、打盹',
        col: 'take a nap — 小睡一会儿；a short nap — 短暂的小睡',
        ex: 'A short nap keeps the mind alert.'
      },
      {
        w: 'alert',
        ph: '/əˈlɜːt/',
        pos: 'adj.',
        cn: '警觉的、敏锐的',
        col: 'stay alert — 保持警觉；alert attention — 清醒的注意力',
        ex: 'She stayed alert through the whole lecture.'
      },
      {
        w: 'refresh',
        ph: '/rɪˈfreʃ/',
        pos: 'vt.',
        cn: '使恢复精力',
        col: 'feel refreshed — 感到精神恢复；refresh one’s memory — 唤起记忆',
        ex: 'You wake refreshed after a good night.'
      }
    ],
    phrases: [
      {
        en: 'fall asleep',
        cn: '入睡',
        ex: 'It took me a long time to fall asleep last night.'
      },
      {
        en: 'doze off',
        cn: '打瞌睡、打盹',
        ex: 'Many people doze off for a while after lunch.'
      },
      {
        en: 'wind down',
        cn: '放松下来、平静下来',
        ex: 'Read a little and wind down before bed.'
      },
      {
        en: 'toss and turn',
        cn: '翻来覆去',
        ex: 'He tossed and turned all night long.'
      },
      {
        en: 'lie down',
        cn: '躺下',
        ex: 'I lie down for twenty minutes when I am tired.'
      },
      {
        en: 'as soon as',
        cn: '一……就……',
        ex: 'Turn off the light as soon as you feel sleepy.'
      },
      {
        en: 'a couple of',
        cn: '几个、两三个',
        ex: 'A couple of hours of sleep is not enough.'
      },
      {
        en: 'rather than',
        cn: '而不是',
        ex: 'Timing matters rather than the price of the bed.'
      },
      {
        en: 'in fact',
        cn: '事实上',
        ex: 'In fact, the order of the stages almost never changes.'
      },
      {
        en: 'more often than not',
        cn: '通常、往往',
        ex: 'More often than not, a warm room wakes people up.'
      }
    ],
    writings: [
      {
        expr: 'The key is to ...',
        cn: '关键在于……',
        meaning: '在列出若干做法之后，用它把最重要的一条挑出来，避免要点平铺、没有主次。',
        context: '建议段的开头或结尾：谈方法、谈习惯的说明文里，用来收束前面几条做法。',
        alts: [
          {
            t: 'What matters most is ...',
            n: '更强调重要性'
          },
          {
            t: 'The main thing is to ...',
            n: '稍口语'
          },
          {
            t: 'Above all, ...',
            n: '放在句首要倒装感更弱'
          }
        ],
        register: '中性偏书面，说明与议论文通用。',
        example: 'Lights down, phone away. The key is to wind down at the same hour every night.'
      },
      {
        expr: 'This is why ...',
        cn: '这就是为什么……',
        meaning: '把前文的证据收成一个结论，明确告诉读者「所以才会这样」，因果链条看得见。',
        context: '结论段或例证之后：前文讲完原因、研究或例子，用它引出落点。',
        alts: [
          {
            t: 'That is why ...',
            n: '几乎可互换，稍书面'
          },
          {
            t: 'For this reason, ...',
            n: '更正式'
          },
          {
            t: 'So ...',
            n: '最口语'
          }
        ],
        register: '中性，写作与口语都能用。',
        example: 'The brain sorts the night’s work. This is why a poor night makes study harder.'
      }
    ],
    sentences: [
      {
        text: 'During the deepest stage the sleeper is hard to wake, and the body does most of its repair work then.',
        points: [
          '<b>主干</b>：the sleeper is hard to wake 与 the body does most of its repair work 由 and 并列，句首 During … 是时间状语。',
          '<b>be hard to wake</b>：「很难被叫醒」，hard 在这里是「困难的」，等同于 difficult；类似的有 be hard to beat / be hard to say。',
          '<b>then 的指代</b>：指前面的 during the deepest stage，用一个词替代整个状语，句子更紧凑。',
          '<b>为什么值得学</b>：「在哪个阶段 + 谁怎么样 + 另一个并列结果」是科普说明的标准句型，描述生理过程时可直接套用。'
        ]
      },
      {
        text: 'The body can return to sleep after a short break, but the deep hours of the night’s second half are the ones that are lost.',
        points: [
          '<b>主干</b>：but 连接的并列句，前半句讲「还能再睡着」，后半句讲「失去的却是深睡」，转折就是重点。',
          '<b>the ones that are lost</b>：the ones 复指前面的 the deep hours，后接 that 引导的定语从句，且从句用被动语态强调「被丢掉」。',
          '<b>of the night’s second half</b>：双重所有格嵌套（the night’s + second half），作后置定语层层限定。',
          '<b>为什么值得学</b>：一句里同时给出「让步 + 转折 + 指代」，用来解释「为什么半夜醒来特别亏」非常有说服力。'
        ]
      },
      {
        text: 'Eight hours in bed are not eight hours of sleep, because quantity alone cannot measure the deep stages.',
        points: [
          '<b>主干</b>：主系表结构 Eight hours … are not eight hours …，前后两个短语相同、含义不同，形成对比。',
          '<b>because 原因从句</b>：跟在整句之后解释理由；从句主语是动名词短语 measuring 的变体（quantity 作主语中心词）。',
          '<b>alone 的位置</b>：作副词修饰名词 quantity，必须后置（quantity alone），写成 alone quantity 就错了。',
          '<b>为什么值得学</b>：「A 不是 B，因为……」是纠正误解的万能句式，写观点段时可以先立靶再解释。'
        ]
      },
      {
        text: 'Sleep is less a gift than a skill, and like any skill it grows when the same small actions are repeated night after night.',
        points: [
          '<b>主干</b>：less … than … 的比较结构 + and 并列的第二个分句，整体是「不是天赋，而是手艺」的对比立论。',
          '<b>less a gift than a skill</b>：否定前项、肯定后项的比较，比 not a … but a … 更含蓄；注意两个名词前都保留冠词。',
          '<b>like any skill</b>：介词短语作插入性的比较状语，把「睡眠」和「手艺」并置，读者自然接受后面的结论。',
          '<b>when 时间从句</b>：从句用被动 are repeated，突出「动作被重复」这个条件；night after night 是叠词状语，节奏感强。',
          '<b>为什么值得学</b>：全文立意句，把结论从「睡多久」转到「怎么睡」，结尾段或主题句都能直接仿写。'
        ]
      }
    ],
    questions: [
      {
        en: 'How long does one sleep cycle last, and what does it include?',
        cn: '一个睡眠周期有多长？它包含什么？',
        ans: 'About ninety minutes, and it passes through a light stage, a deep stage and a busy stage full of dreams.',
        ansCn: '大约九十分钟，经过浅睡、深睡，还有一个满是梦的热闹阶段。'
      },
      {
        en: 'What does the body do during the deepest stage of sleep?',
        cn: '在睡眠最深的阶段，身体在做什么？',
        ans: 'The sleeper is hard to wake, and the body does most of its repair work: muscles recover, tissues are mended and temperature falls.',
        ansCn: '人很难被叫醒，身体完成大部分修复工作：肌肉恢复、组织被修补、体温下降。'
      },
      {
        en: 'Why might a student find new facts harder to learn after a poor night?',
        cn: '为什么一夜没睡好的学生第二天学新东西更吃力？',
        ans: 'Because the brain sorts the day’s material during the night, and a short night cuts that sorting work short.',
        ansCn: '因为大脑是在夜里整理当天材料的，夜晚被砍短，这项整理工作就做不完。'
      },
      {
        en: 'What do the screens, the late caffeine and the warm room in paragraph 5 serve to show?',
        cn: '第五段里的屏幕、太晚的咖啡因和暖房间是为了说明什么？',
        ans: 'They show what disrupts the order of the sleep cycles and keeps the sleeper from reaching the deep stage.',
        ansCn: '它们说明哪些东西会打乱睡眠周期的顺序，让人够不到深睡阶段。'
      },
      {
        en: 'What is the writer’s purpose in the last paragraph?',
        cn: '作者在最后一段的写作目的是什么？',
        ans: 'To argue that the rhythm and quality of a night matter more than its length, and that sleep improves through small actions repeated every night.',
        ansCn: '论证一晚的节律与质量比长度更要紧，并指出睡眠是靠每晚重复的小动作变好的。'
      }
    ],
    writingTask: {
      en: 'Write 100–120 words about what you usually do before bed and how it affects the next day.',
      hints: [
        'I usually ... before bed.',
        'The key is to ...',
        'This is why ...',
        'In short, ...'
      ],
      hintCn: '用 6–8 句话写：先交代你睡前固定在做什么，再说它怎么影响第二天，用 The key is to 给出建议，最后用 This is why 收结论。',
      req: '至少使用 2 个本篇学过的词或搭配（cycle / consistent / caffeine / wind down / fall asleep / a couple of）。'
    },
    speakingTask: {
      en: 'Speak for 1 minute: Is the amount of sleep more important than the way you sleep? Give your opinion, one reason and one example.',
      points: [
        'Your opinion',
        'One reason',
        'One example from your own routine'
      ],
      pointCn: '先明确表态「量」和「睡法」哪个更要紧，再给一个理由，最后举一个自己作息里的例子，三段缺一不可。',
      skeleton: 'In my view, the way we sleep matters more. The reason is that ... For example, last term I ...'
    },
    focus: [
      '<b>新授核心词 16 个</b>：<span class=\'en\'>restore, cycle, stage, temperature, rhythm, consistent, brain, disrupt, caffeine, restless, ideal, drowsy, quantity, nap, alert, refresh</span> —— <span class=\'en\'>restore / refresh</span> 都是「恢复」但分工不同（<span class=\'en\'>restore the body</span> 使身体复原、<span class=\'en\'>feel refreshed</span> 觉得精神恢复）；<span class=\'en\'>cycle</span> 的相关词是 <span class=\'en\'>recycle</span>（回收），别混；<span class=\'en\'>quantity</span> 与学过的 <span class=\'en\'>quality</span>（质量）只差两个字母，常一起考。',
      '<b>本篇复现的旧词</b>：第 4 篇的 <span class=\'en\'>quality</span>（一夜的质量）、第 8 篇的 <span class=\'en\'>energy</span> 与 <span class=\'en\'>mood</span>（第二天的精力和情绪）、第 17 篇的 <span class=\'en\'>screens</span>（明亮的屏幕）、第 21 篇的 <span class=\'en\'>recover</span>（肌肉恢复）、第 2 篇的短语 <span class=\'en\'>write down</span>（把没做完的事写下来）、以及第 31 篇刚学的 <span class=\'en\'>evidence</span> 与 <span class=\'en\'>recall</span> —— 共 8 处灰点，其中两个是上一篇的新词，正好检验有没有记住。',
      '<b>四个长难句</b>：第一句练「<span class=\'en\'>During 状语 + 并列 + then 指代</span>」；第二句练「<span class=\'en\'>but 转折 + the ones that 被动定语从句</span>」；第三句是「<span class=\'en\'>A is not B, because …</span>」的纠错句式；第四句的 <span class=\'en\'>less a gift than a skill</span> 是比较结构，句末的 <span class=\'en\'>when</span> 从句用被动收尾，是全文立意句。',
      '<b>搭配与写作表达</b>：五处绿点 <span class=\'en\'>in fact</span>（事实上）、<span class=\'en\'>toss and turn</span>（翻来覆去）、<span class=\'en\'>wind down</span>（放松下来）、<span class=\'en\'>fall asleep</span>（入睡）、<span class=\'en\'>a couple of</span>（几个）都能直接用在描述作息的句子里；写作用 <span class=\'en\'>The key is to …</span> 收拢要点，用 <span class=\'en\'>This is why …</span> 把前文证据收成结论。',
      '<b>全文逻辑线与题型提醒</b>：睡眠是工作 → 周期与阶段 → 深睡修复身体 → 整理白天的材料 → 什么会打断它 → 睡前怎么办 → 第二天的表现 → 立意（质量与节律 > 长度）。第 4 题是论证关系题，答「这些例子共同说明了什么」；第 5 题是写作目的题，答案就在最后一句的比较结构里。'
    ],
    standard: {
      time: '约 40 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 16 个核心词遮住中文说出 ≥ 12 · 4 个长难句会拆结构 · 完成 100–120 词写作与 1 分钟口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 16 个核心词中的 12 个（cycle、temperature、drowsy、caffeine …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '10 个高频搭配掌握 8 个，能各造一句（wind down、fall asleep、toss and turn、a couple of …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '4 个长难句各说出主干与从句类型，并各仿写一句（并列转折、被动定语从句、because 原因、less … than …）',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；论证关系题要能说出三个例子共同说明了什么',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 100–120 词，至少用上 The key is to … 或 This is why …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟按「观点 → 原因 → 例子」说清睡眠的量和睡法哪个更要紧',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 8 处灰点旧词，说出其中 6 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 33,
    slug: '033-how-praise-changes-children',
    title: 'How Praise Changes Children',
    titleCn: '表扬如何改变孩子',
    stage: '阶段四 · 中级提高',
    stageRange: '第 31–40 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 440 词'
      },
      {
        k: '新词密度',
        v: '约 6.1%'
      },
      {
        k: '长难句',
        v: '4 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/033.jpg',
    coverCredit: 'Photo: Mikhail Nilov / Pexels',
    body: [
      'Every classroom has its own way of saying well done. One says ‘You are so <span class="w-synonym" data-cn="＝ clever 的替换词">bright</span>’, another says ‘You really worked hard on this’. Both are kind and meant to <span class="w-rev">encourage</span>. Years later they may turn out very different.',
      'To find out why, researchers ran a simple <span class="w-cet4" data-cn="实验">experiment</span>. Ten-year-olds finished a set of easy problems, and every child did well. Then one group was <span class="w-cet4" data-cn="赞扬、表扬">praised</span> for what they were: ‘You are so smart.’ The other was praised for <span class="w-rev">effort</span>: ‘You worked hard on these.’ Nothing else changed.',
      'Then each child chose between a harder and an easy set of problems. <span class="w-sentence">The result was clear: most of those praised for ability picked the easy set, while most of those praised for effort asked for the harder one.</span> <span class="w-phrase" data-cn="换句话说">In other words</span>, one sentence had already begun to <span class="w-cet4" data-cn="塑造">shape</span> what children wanted.',
      'Children <span class="w-cet4" data-cn="解读、理解">interpret</span> praise as a message about what adults value. <span class="w-sentence">If being clever is what earns approval, then a hard problem becomes a risk, because one mistake may show that the praise was wrong.</span> A child praised for a fixed <span class="w-cet4" data-cn="特质">trait</span> learns to protect that <span class="w-cet4" data-cn="思维方式、心态">mindset</span> rather than test it; some even <span class="w-cet4" data-cn="夸耀">boast</span> about <span class="w-rev">results</span>.',
      '<span class="w-writing" data-cn="问题在于……">The problem with</span> praising ability is that a low score looks like a judgment: children read it as proof that they are not smart, and their <span class="w-rev">confidence</span> falls away. Those praised for effort see the same score as useful <span class="w-cet4" data-cn="反馈">feedback</span>: the method was wrong, not the person. So they <span class="w-cet4" data-cn="应对、应付">cope</span> with it, <span class="w-cet4" data-cn="挣扎着前进">struggle</span> on, and treat a <span class="w-cet4" data-cn="挫折">setback</span> as a reason to <span class="w-cet4" data-cn="坚持不懈">persist</span>.',
      'The logic behind this praise is simple: <span class="w-cet4" data-cn="能力">ability</span> is not a matter of <span class="w-rev">talent</span>, but a muscle that grows with training. <span class="w-sentence">When adults praise the process and the patience behind it, children learn where good work really comes from.</span> <span class="w-writing" data-cn="起决定作用的是……">What makes the difference</span> is the habit behind the score; the <span class="w-cet4" data-cn="结果">outcome</span> is a child who takes a hard task as a chance to improve, not a test to <span class="w-rev">fail</span>.',
      'Children notice when a comment is <span class="w-cet4" data-cn="准确的">accurate</span> and when it is only noise, so empty praise loses force quickly. A better <span class="w-cet4" data-cn="方法、做法">approach</span> is to be specific: name the strategy, <span class="w-phrase" data-cn="指出">point out</span> what improved, ask how to <span class="w-phrase" data-cn="应对、处理">deal with</span> the next one, and <span class="w-phrase" data-cn="树立榜样">set an example</span> with your own mistakes. What <span class="w-cet4" data-cn="激励、激发">motivates</span> children is the sense that their work has been seen.',
      'Praise is a quiet forecast: children grow toward what adults <span class="w-rev">expect</span> of them. <span class="w-sentence">The next time a child brings home a difficult piece of work, the useful question is not ‘Are you smart?’ but ‘What did you try next?’</span> The words we choose today <span class="w-synonym" data-cn="＝ decide 的替换词">determine</span> which problems a child will dare to try next year.'
    ],
    translation: [
      '每个教室都有自己说「做得好」的方式。有人说「你真聪明」，有人说「你这次真的很用心」。两句话都出于好意，都是想鼓励孩子。可几年之后，两个孩子可能变得很不一样。',
      '为了弄清原因，研究者做了一个简单的实验。一群十岁的孩子做了一套容易的题目，人人都做得不错。随后，一组孩子因为「他们是谁」受到表扬：「你真聪明。」另一组因为努力被夸：「这几道题你做得很用心。」除此之外，什么都没变。',
      '接着，每个孩子在一套更难的题目和一套容易的题目之间做选择。结果很清楚：被夸聪明的孩子大多挑了容易的，被夸努力的孩子大多要了更难的那套。换句话说，一句话已经开始塑造孩子们想要什么了。',
      '孩子会把表扬解读成一个信号，看懂大人真正看重什么。如果聪明才是赢得认可的东西，那么难题就成了风险，因为一次做错，就可能证明那句夸奖是错的。因固定特质受表扬的孩子，学会的是守住这种心态，而不是去检验它；有些人甚至开始吹嘘成绩。',
      '夸「聪明」的问题在于，低分看起来像是对这个人的评判：孩子把它当成证据，认定自己到底还是不聪明，信心也随之流失。被夸努力的孩子把同样的分数看成有用的反馈：错的是方法，不是人。于是他们应对它，挣扎着继续，把挫折当成坚持下去的理由。',
      '这种夸奖背后的道理很简单：能力不是靠天赋发给少数人的，而是像肌肉一样练出来的。当大人夸的是过程，是过程背后的耐心，孩子就明白了好成果究竟从哪里来。起决定作用的是分数背后的习惯；这样的孩子会把难任务当成变好的机会，而不是一场会考砸的测验。',
      '一句评语是准确的，还是只是噪音，孩子看得出来，所以空话很快就没了力量。更好的做法是具体：说出孩子用的策略，指出哪里进步了，问问下一步该怎么应对，再拿自己犯过的错给孩子树立榜样。真正激励孩子的，是他们的努力被人看见了。',
      '表扬看起来是件小事，却像一个安静的预言：孩子会朝着大人期望的样子成长。下一次孩子带回一份很难的作业，有用的问题不是「你聪明吗？」，而是「你这次试了什么？」。我们今天选用的词，决定了明年孩子敢去挑战哪些难题。'
    ],
    vocabulary: [
      {
        w: 'praise',
        ph: '/preɪz/',
        pos: 'n./v.',
        cn: '赞扬、表扬',
        col: 'praise the effort — 表扬努力；win praise from sb. — 得到某人的称赞',
        ex: 'Praise the process instead of the person.'
      },
      {
        w: 'mindset',
        ph: '/ˈmaɪndset/',
        pos: 'n.',
        cn: '思维方式、心态',
        col: 'a fixed mindset — 固定型思维；a growth mindset — 成长型思维',
        ex: 'A growth mindset helps children face hard tasks.'
      },
      {
        w: 'trait',
        ph: '/treɪt/',
        pos: 'n.',
        cn: '特质、特性',
        col: 'a personal trait — 个人特质；a shared trait — 共同的特征',
        ex: 'Patience is a trait that grows with practice.'
      },
      {
        w: 'shape',
        ph: '/ʃeɪp/',
        pos: 'v.',
        cn: '塑造',
        col: 'shape a habit — 塑造一个习惯；shape one’s future — 塑造未来',
        ex: 'The words adults use shape how children see themselves.'
      },
      {
        w: 'interpret',
        ph: '/ɪnˈtɜːprɪt/',
        pos: 'v.',
        cn: '解读、理解',
        col: 'interpret a score — 解读一个分数；interpret … as … — 把……理解为……',
        ex: 'Children interpret praise as a message about what adults value.'
      },
      {
        w: 'setback',
        ph: '/ˈsetbæk/',
        pos: 'n.',
        cn: '挫折、倒退',
        col: 'a temporary setback — 暂时的挫折；meet with a setback — 遇到挫折',
        ex: 'A setback is not the end of the work.'
      },
      {
        w: 'persist',
        ph: '/pəˈsɪst/',
        pos: 'vi.',
        cn: '坚持不懈',
        col: 'persist in doing sth. — 坚持做某事；persist with a plan — 坚持一个计划',
        ex: 'Students who persist usually finish the task.'
      },
      {
        w: 'motivate',
        ph: '/ˈməʊtɪveɪt/',
        pos: 'vt.',
        cn: '激励、激发',
        col: 'motivate sb. to do sth. — 激励某人做某事；motivate a team — 激励一个团队',
        ex: 'Good feedback motivates children to try again.'
      },
      {
        w: 'feedback',
        ph: '/ˈfiːdbæk/',
        pos: 'n.',
        cn: '反馈',
        col: 'useful feedback — 有用的反馈；give feedback — 给予反馈',
        ex: 'Feedback should tell a child what to try next.'
      },
      {
        w: 'cope',
        ph: '/kəʊp/',
        pos: 'vi.',
        cn: '应对、应付',
        col: 'cope with difficulty — 应对困难；cope with stress — 应对压力',
        ex: 'She learned to cope with hard problems step by step.'
      },
      {
        w: 'struggle',
        ph: '/ˈstrʌɡl/',
        pos: 'v./n.',
        cn: '挣扎、艰难应付',
        col: 'struggle with a task — 为一个任务费劲；struggle on — 挣扎着继续',
        ex: 'It is fine to struggle with a new method.'
      },
      {
        w: 'ability',
        ph: '/əˈbɪləti/',
        pos: 'n.',
        cn: '能力',
        col: 'the ability to do sth. — 做某事的能力；language ability — 语言能力',
        ex: 'Ability grows with practice.'
      },
      {
        w: 'outcome',
        ph: '/ˈaʊtkʌm/',
        pos: 'n.',
        cn: '结果',
        col: 'a good outcome — 好的结果；the outcome of a study — 一项研究的结果',
        ex: 'The outcome of the test surprised the whole class.'
      },
      {
        w: 'boast',
        ph: '/bəʊst/',
        pos: 'v.',
        cn: '夸耀、吹嘘',
        col: 'boast about sth. — 吹嘘某事；boast of success — 夸耀成功',
        ex: 'He boasted about the score instead of the work.'
      },
      {
        w: 'accurate',
        ph: '/ˈækjərət/',
        pos: 'adj.',
        cn: '准确的',
        col: 'accurate information — 准确的信息；an accurate answer — 准确的答案',
        ex: 'Children notice quickly whether a comment is accurate.'
      },
      {
        w: 'experiment',
        ph: '/ɪkˈsperɪmənt/',
        pos: 'n.',
        cn: '实验',
        col: 'run an experiment — 做实验；an experiment on praise — 关于表扬的实验',
        ex: 'The experiment compared two kinds of praise.'
      },
      {
        w: 'approach',
        ph: '/əˈprəʊtʃ/',
        pos: 'n./v.',
        cn: '方法、做法；着手处理',
        col: 'a practical approach — 实用的方法；approach a problem — 着手处理一个问题',
        ex: 'A better approach is to name the strategy.'
      }
    ],
    phrases: [
      {
        en: 'in other words',
        cn: '换句话说',
        ex: 'In other words, the praise itself changed the choice.'
      },
      {
        en: 'live up to',
        cn: '达到、不辜负（期望）',
        ex: 'The child tries to live up to the praise.'
      },
      {
        en: 'deal with',
        cn: '应对、处理',
        ex: 'Tell me how you will deal with the next one.'
      },
      {
        en: 'point out',
        cn: '指出',
        ex: 'The teacher pointed out what had improved.'
      },
      {
        en: 'set an example',
        cn: '树立榜样',
        ex: 'Adults set an example by talking about their own mistakes.'
      },
      {
        en: 'keep … from doing sth.',
        cn: '阻止……做某事',
        ex: 'Fear of failure may keep a child from trying again.'
      },
      {
        en: 'as a result',
        cn: '因此',
        ex: 'He missed the step, and as a result the answer was wrong.'
      },
      {
        en: 'on the other hand',
        cn: '另一方面',
        ex: 'Praise helps, but on the other hand it can also mislead.'
      },
      {
        en: 'a number of',
        cn: '若干、一些',
        ex: 'A number of schools now train teachers in this skill.'
      },
      {
        en: 'carry on',
        cn: '继续做下去',
        ex: 'She took a breath and carried on with the task.'
      }
    ],
    writings: [
      {
        expr: 'The problem with ... is that ...',
        cn: '问题在于……',
        meaning: '先点名要批评的做法，再说明它的毛病在哪里，比直接说「这不好」更有说服力。',
        context: '议论段中部：分析某个常见做法（如只夸聪明）的弊端时，用它把批评落到具体机制上。',
        alts: [
          {
            t: 'The trouble with ... is that ...',
            n: '语气稍强'
          },
          {
            t: 'What is wrong with ... is that ...',
            n: '更强调错在哪'
          },
          {
            t: '... has one problem: ...',
            n: '换成名词结构，句式更短'
          }
        ],
        register: '中性，议论文与评论都能用。',
        example: 'The problem with praising ability is that a mistake starts to feel like a judgment.'
      },
      {
        expr: 'What makes the difference is ...',
        cn: '起决定作用的是……',
        meaning: '在几个因素并列之后，把真正起作用的那一个挑出来，给出明确的落点。',
        context: '结论或对比段：比较两种做法之后，指出差别究竟出在哪里。',
        alts: [
          {
            t: 'What really matters is ...',
            n: '更口语一点'
          },
          {
            t: 'The deciding factor is ...',
            n: '更书面'
          },
          {
            t: 'It all comes down to ...',
            n: '收束全文时常用'
          }
        ],
        register: '中性偏议论，说明与议论通用。',
        example: 'The score is the same. What makes the difference is the habit behind it.'
      }
    ],
    sentences: [
      {
        text: 'The result was clear: most of those praised for ability picked the easy set, while most of those praised for effort asked for the harder one.',
        points: [
          '<b>主干</b>：主系表结构 The result was clear，冒号后整句展开「清楚」在哪里，是典型的「先结论后数据」写法。',
          '<b>while 对比</b>：while 在这里不是「当……时」，而是「而」，把两组孩子的选择并排放，对比本身就是信息。',
          '<b>those praised for …</b>：those 后省略了 who were，过去分词短语作定语，比定语从句更紧凑；ability 与 effort 两个名词构成全文的核心对照。',
          '<b>为什么值得学</b>：「结果很清楚：一组……，而另一组……」是描述实验发现的标准句型，写图表作文或实验报告都能套。'
        ]
      },
      {
        text: 'If being clever is what earns approval, then a hard problem becomes a risk, because one mistake may show that the praise was wrong.',
        points: [
          '<b>主干</b>：If 条件句 + then 结果句 + because 原因句，三层逻辑一句话说完：条件 → 结果 → 原因。',
          '<b>being clever</b>：动名词短语作主语，把「聪明」当成一件可被评价的事，比 Cleverness is … 更贴近孩子的视角。',
          '<b>what earns approval</b>：what 引导表语从句，等于 the thing that earns approval，读起来更自然。',
          '<b>may show that …</b>：may 表可能性而非断言，说明文里用 may 保持分寸感；that 引宾语从句。',
          '<b>为什么值得学</b>：「如果 A 是被奖励的东西，那么 B 就成了风险」是解释心理机制的万能句式，谈动机、谈考试都能仿写。'
        ]
      },
      {
        text: 'When adults praise the process and the patience behind it, children learn where good work really comes from.',
        points: [
          '<b>主干</b>：When 时间从句 + 主句 children learn where …，主句的宾语是一个 where 宾语从句。',
          '<b>两个并列宾语</b>：the process 与 the patience behind it，一个抽象一个具体；behind it 里的 it 指 the process，指代关系要读出来。',
          '<b>where 从句</b>：where good work really comes from 作 learn 的宾语，即「好成果从哪里来」，比直接陈述更有启发感。',
          '<b>为什么值得学</b>：「当大人夸的是 A 和 B，孩子就明白了……」是给建议的有力句型，写教育话题时可直接仿写。'
        ]
      },
      {
        text: 'The next time a child brings home a difficult piece of work, the useful question is not ‘Are you smart?’ but ‘What did you try next?’',
        points: [
          '<b>主干</b>：the next time 引导时间状语从句，主句是「the useful question is not … but …」的选择结构。',
          '<b>the next time</b>：名词短语直接引出时间从句，等于 when … for the next time，比 the next time when 更地道。',
          '<b>not … but …</b>：否定一个选项、给出另一个，落点在后面的问句上；两句引语都是对孩子的口语，节奏短促。',
          '<b>两个引语</b>：一句问身份（你聪明吗），一句问过程（你这次试了什么），全文的对比在结尾浓缩成一次提问。',
          '<b>为什么值得学</b>：结尾段的「下一次……有用的问题不是……而是……」可直接搬到自己的作文结尾，收束有力又不喊口号。'
        ]
      }
    ],
    questions: [
      {
        en: 'What were the two groups of children told after they finished the easy problems?',
        cn: '孩子们做完容易的题目后，两组分别听到了什么？',
        ans: 'One group was praised for what they were, with the words ‘You are so smart’, and the other was praised for their effort, with the words ‘You worked hard on these’.',
        ansCn: '一组因为「他们是谁」被夸「你真聪明」，另一组因为努力被夸「这几道题你做得很用心」。'
      },
      {
        en: 'What happened when the children could choose between a harder set of problems and an easy one?',
        cn: '当孩子可以在难题和容易题之间做选择时，发生了什么？',
        ans: 'Most of those praised for ability picked the easy set, while most of those praised for effort asked for the harder one.',
        ansCn: '被夸聪明的孩子大多选了容易的，被夸努力的孩子大多要了更难的那套。'
      },
      {
        en: 'Why does praising a child for cleverness make a hard problem feel like a risk?',
        cn: '为什么夸孩子聪明，会让难题变成一种风险？',
        ans: 'Because the child hears the praise as approval for being clever, and one mistake may show that the praise was wrong, so the child learns to protect that mindset rather than test it.',
        ansCn: '因为孩子把夸奖当成对「聪明」的认可，一次做错就可能证明夸奖是错的，于是孩子学会守住这种心态，而不是去检验它。'
      },
      {
        en: 'Why does the writer describe what the two groups did after a poor score?',
        cn: '作者为什么描写两组孩子拿到低分之后的不同反应？',
        ans: 'To show that the two kinds of praise teach children to read the same failure differently: one sees proof of limits, the other sees useful feedback.',
        ansCn: '为了说明两种夸奖让孩子对同一次失败作出不同解读：一种当成能力有限的证据，另一种当成有用的反馈。'
      },
      {
        en: 'What is the writer’s purpose in the last paragraph?',
        cn: '作者写最后一段的目的是什么？',
        ans: 'To urge adults to choose words that praise the process, because the praise children hear today shapes the problems they will dare to try later.',
        ansCn: '劝大人选择夸过程的措辞，因为孩子今天听到的夸奖，会塑造他们将来敢去挑战的难题。'
      }
    ],
    writingTask: {
      en: 'Write 100–120 words about a time when praise changed the way you worked, and say what kind of praise helped most.',
      hints: [
        'Last term, ...',
        'The problem with ... is that ...',
        'What makes the difference is ...',
        'In short, ...'
      ],
      hintCn: '用 6–8 句话写：先讲一次被夸奖的经历，再说它怎么改变了你的做法，用 The problem with … is that … 指出某种夸法的毛病，最后用 What makes the difference is … 收出结论。',
      req: '至少使用 2 个本篇学过的词或搭配（praise / mindset / persist / setback / deal with / point out）。'
    },
    speakingTask: {
      en: 'Speak for 1 minute: Which kind of praise works better on children, praising cleverness or praising effort? Give your opinion, one reason and one example.',
      points: [
        'Your opinion',
        'One reason',
        'One example from your own experience'
      ],
      pointCn: '先明确表态夸聪明和夸努力哪个更有效，再给一个理由，最后举一个自己或身边人的例子，三段缺一不可。',
      skeleton: 'In my view, praising effort works better. The reason is that ... For example, when I was young, ...'
    },
    focus: [
      '<b>新授核心词 17 个</b>：<span class=\'en\'>praise, mindset, trait, shape, interpret, setback, persist, motivate, feedback, cope, struggle, ability, outcome, boast, accurate, experiment, approach</span> —— <span class=\'en\'>praise</span> 既是名词也是动词（<span class=\'en\'>praise the effort</span> 夸努力）；<span class=\'en\'>interpret … as …</span> 是固定搭配，别漏掉后面的 <span class=\'en\'>as</span>；<span class=\'en\'>persist in doing sth.</span> 与 <span class=\'en\'>cope with</span> 都是「不及物动词 + 介词」的搭配，介词不能丢；<span class=\'en\'>setback</span> 是一个词、<span class=\'en\'>set back</span> 才是「推迟」。',
      '<b>本篇复现的旧词</b>：第 3 篇的 <span class=\'en\'>encourage</span>（两句夸奖都是想鼓励孩子）、第 10 篇的 <span class=\'en\'>effort</span> 与 <span class=\'en\'>talent</span>（夸努力还是夸天赋）、第 1 篇的 <span class=\'en\'>results</span>（吹嘘成绩）、第 30 篇的 <span class=\'en\'>confidence</span>（信心悄悄流失）、第 20 篇的 <span class=\'en\'>fail</span>（一场会考砸的测验）、第 5 篇的 <span class=\'en\'>expect</span>（大人期望他们成为什么人）—— 共 7 处灰点，其中两个来自讲努力与天赋的第 10 篇，正好串成一条线。',
      '<b>四个长难句</b>：第一句练「冒号展开 + <span class=\'en\'>while</span> 两组对比」，注意 <span class=\'en\'>those praised for …</span> 是省略的定语；第二句是「<span class=\'en\'>If A is …, then B becomes …, because …</span>」的三层逻辑句；第三句练「<span class=\'en\'>When</span> 时间从句 + <span class=\'en\'>learn</span> + <span class=\'en\'>where</span> 宾语从句」；第四句是「<span class=\'en\'>the next time</span> 时间从句 + <span class=\'en\'>not … but …</span>」，用两个孩子的问话收尾，是全文立意句。',
      '<b>搭配与写作表达</b>：四处绿点 <span class=\'en\'>in other words</span>（换句话说）、<span class=\'en\'>point out</span>（指出）、<span class=\'en\'>deal with</span>（应对）、<span class=\'en\'>set an example</span>（树立榜样）都能直接用在教育话题里；搭配表里的 <span class=\'en\'>live up to</span>（不辜负）、<span class=\'en\'>keep … from doing sth.</span>（阻止……做某事）也常和表扬话题一起考；写作用 <span class=\'en\'>The problem with … is that …</span> 指出毛病，用 <span class=\'en\'>What makes the difference is …</span> 挑出真正起作用的因素。',
      '<b>全文逻辑线与题型提醒</b>：两种夸法都出于好意 → 实验：夸聪明组选简单题、夸努力组选难题 → 孩子把夸奖解读成大人看重什么 → 失败后两组的差别 → 道理：能力像肌肉 → 怎么夸才具体、准确 → 立意（夸奖是预言）。第 4 题是论证关系题，问「作者为什么写低分后的反应」，答「为了证明两种夸法让孩子解读失败的方式不同」；第 5 题是写作目的题，答案落在最后一段的建议与末句。'
    ],
    standard: {
      time: '约 40 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 17 个核心词遮住中文说出 ≥ 13 · 4 个长难句会拆结构 · 完成 100–120 词写作与 1 分钟口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 17 个核心词中的 13 个（praise、mindset、setback、persist …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '10 个高频搭配掌握 8 个，能各造一句（in other words、deal with、point out、set an example …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '4 个长难句各说出主干与从句类型，并各仿写一句（while 对比、条件因果、where 宾语从句、not … but …）',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；论证关系题要能说出低分反应一段是为了证明什么',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 100–120 词，至少用上 The problem with … is that … 或 What makes the difference is …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟按「观点 → 原因 → 例子」说清夸聪明与夸努力哪个更有效',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 7 处灰点旧词，说出其中 5 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 34,
    slug: '034-the-quiet-power-of-body-language',
    title: 'The Quiet Power of Body Language',
    titleCn: '肢体语言的安静力量',
    stage: '阶段四 · 中级提高',
    stageRange: '第 31–40 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 450 词'
      },
      {
        k: '新词密度',
        v: '约 5.1%'
      },
      {
        k: '长难句',
        v: '4 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/034.jpg',
    coverCredit: 'Photo: Gustavo Fring / Pexels',
    body: [
      'Before a job interview, we check the mirror: shirt, shoes, hair. But <span class="w-rev">notice</span> that the interviewer reads something else first. Long before a word is spoken, your <span class="w-cet4" data-cn="姿态、站坐姿势">posture</span> and a small <span class="w-cet4" data-cn="手势">gesture</span> have already <span class="w-cet4" data-cn="传达、传递">conveyed</span> an <span class="w-cet4" data-cn="印象">impression</span> that is slow to change.',
      '<span class="w-phrase" data-cn="眼神交流">Eye contact</span> is the clearest example. Too little loses <span class="w-rev">trust</span>; too much fills the room with <span class="w-cet4" data-cn="紧张（气氛）">tension</span>. <span class="w-sentence">Most listeners feel the difference between a glance that invites a question and one that ends it, though hardly any of them can say why.</span> Good speakers hold the <span class="w-rev">attention</span> for seconds, then <span class="w-phrase" data-cn="把目光移开">look away</span>.',
      'Distance carries half the message. A <span class="w-rev">familiar</span> friend may hold your arm; a new <span class="w-rev">stranger</span> at the same distance makes you <span class="w-rev">nervous</span>. <span class="w-sentence">What counts as polite closeness in one culture may feel like an attack in another, which is why travellers are advised to watch before they copy.</span> <span class="w-cet4" data-cn="情境、背景">Context</span> decides how much personal space is left.',
      '<span class="w-cet4" data-cn="研究">Research</span> <span class="w-synonym" data-cn="＝ mostly 的替换词">largely</span> depends on <span class="w-cet4" data-cn="参与者、受试者">participants</span> who look easy to <span class="w-cet4" data-cn="解读、理解">interpret</span>: actors, job candidates, lab students. <span class="w-sentence">Because a filmed face can be paused and scored frame by frame, it shows us something that a moving, arguing, interrupting person rarely allows.</span> Yet in ordinary life a <span class="w-cet4" data-cn="面部的">facial</span> <span class="w-cet4" data-cn="表情；表达">expression</span> lasts under a second and carries no label.',
      '<span class="w-cet4" data-cn="误导人的">Misleading</span> readings look right <span class="w-phrase" data-cn="乍一看">at first glance</span>. <span class="w-phrase" data-cn="草率下结论">Jump to conclusions</span> about folded arms and you may <span class="w-rev">assume</span> coldness where there is only a cold room. No single movement carries a fixed meaning; trust one sign and you get people wrong. A <span class="w-cet4" data-cn="线索、提示">cue</span> counts only when several signals agree.',
      'Take a candidate who looks down while answering. The habit may <span class="w-rev">influence</span> the decision before any note is written, though it may just mean a hard question read twice. A second look <span class="w-synonym" data-cn="＝ a bit 的替换词">slightly</span> softens the first, and that is often enough to make us <span class="w-cet4" data-cn="判断、评价">judge</span> again.',
      '<span class="w-cet4" data-cn="互动、交流">Interaction</span> gets easier when body and words agree. <span class="w-phrase" data-cn="坐直、坐姿端正">Sit up straight</span>, <span class="w-phrase" data-cn="把意思传达清楚">get the message across</span> with a level voice, and <span class="w-rev">make sure</span> your hands never <span class="w-cet4" data-cn="展示、表露">display</span> a story you never told. The aim is not to copy a trained speaker but to remove the contradictions that make listeners doubt us.',
      '<span class="w-writing" data-cn="事实上">In fact</span>, the common error is confident reading: people who trust a first impression rarely check it. <span class="w-sentence">If one glance settles the whole picture, we stop asking, and the picture stays as wrong as it was at the start.</span> An <span class="w-rev">anxious</span> mind reads quickly rather than well; a <span class="w-cet4" data-cn="微妙的、不易察觉的">subtle</span> second look is worth the pause.',
      '<span class="w-writing" data-cn="总的来说">On the whole</span>, the body is a quiet partner in every conversation. It never tells the whole story, yet it sets the tone before the first sentence. The wiser course is slower: watch several signals, keep the situation in mind, and stay open to being wrong.'
    ],
    translation: [
      '面试之前，我们多数人会照照镜子：衬衫、鞋子、头发。但请注意，面试官最先读的其实是另一样东西。在一句话说出口之前，你的姿态和一个小动作就已经传达出一种印象，而印象是很难改变的。',
      '眼神交流是最清楚的例子。目光太少，说话的人会失去信任；目光太多，屋子里又会充满紧张的气氛。多数听者都能感觉出「邀请对方提问的一瞥」和「结束谈话的一瞥」有什么差别，却几乎没人说得清为什么。好的说话人只把注意力在对方身上停留几秒，然后移开目光。',
      '距离承载了一半的信息。熟悉的朋友可以挽住你的手臂，可同样的距离上，一个陌生的陌生人会让你紧张。一种文化里算礼貌的亲近，在另一种文化里可能感觉像冒犯，这就是为什么有人建议旅行者先观察、再模仿。还能留出多少个人空间，由情境来决定。',
      '关于肢体语言的研究，很大程度上依赖那些看起来很好解读的受试者：演员、求职者、实验室里的学生。因为录像里的一张脸可以暂停下来、一帧一帧地打分，它展示的是一个正在走动、正在争论、正在打断别人的人很少交出来的东西。可在日常生活中，一个面部表情持续不到一秒，也不会带着标签出现。',
      '误导性的解读乍一看总是显得很有道理。只凭交叉的双臂就下结论，你可能会把一间冷房间误读成对方的冷漠。任何单一动作都没有固定含义；只信一个信号，你就会把人看错。一个线索只有在几个信号一致时才算数。',
      '以一位低头作答的求职者为例。这个习惯可能在任何记录写下之前就影响了最终决定，尽管它也许只是把一道难题读了两遍。第二眼会稍稍缓和第一眼的印象，而这往往就足够让我们重新判断一次。',
      '身体和语言对得上，互动就顺了。坐直，用平稳的声音把意思传达清楚，并确保你的双手永远不会展示一个你从没讲过的故事。目标不是模仿训练有素的演讲者，而是去掉那些让听者起疑的矛盾。',
      '事实上，常见的错误是读得太笃定：相信第一印象的人很少再去核对。如果一眼就能定下整幅画面，我们就不再提问，而画面也就停在一开始那个错误的样子上。焦虑的头脑读得快却读不好，所以停一停、多看那微妙的一眼是值得的。',
      '总的来说，身体是每一场对话里安静的伙伴。它从不讲出完整的故事，却在第一句话开始之前定下基调。更明智的做法是放慢一点：看几个信号，顾及当时的情境，并且愿意承认自己可能错了。'
    ],
    vocabulary: [
      {
        w: 'posture',
        ph: '/ˈpɒstʃə/',
        pos: 'n.',
        cn: '姿态、站坐姿势',
        col: 'sit up straight and keep a good posture — 坐直并保持良好姿势；a relaxed posture — 放松的姿态',
        ex: 'A straight posture makes a speaker look more confident.'
      },
      {
        w: 'gesture',
        ph: '/ˈdʒestʃə/',
        pos: 'n./v.',
        cn: '手势；做手势',
        col: 'a small gesture — 一个小动作；hand gestures — 手势',
        ex: 'She made a friendly gesture at the door.'
      },
      {
        w: 'convey',
        ph: '/kənˈveɪ/',
        pos: 'vt.',
        cn: '传达、传递',
        col: 'convey a message — 传达信息；convey an impression — 留下印象',
        ex: 'Her smile conveys more than her words do.'
      },
      {
        w: 'impression',
        ph: '/ɪmˈpreʃn/',
        pos: 'n.',
        cn: '印象',
        col: 'make an impression — 留下印象；first impression — 第一印象',
        ex: 'The first impression often lasts longest.'
      },
      {
        w: 'subtle',
        ph: '/ˈsʌtl/',
        pos: 'adj.',
        cn: '微妙的、不易察觉的',
        col: 'a subtle difference — 细微的差别；subtle changes — 不易察觉的变化',
        ex: 'A subtle change in tone changed the whole mood.'
      },
      {
        w: 'tension',
        ph: '/ˈtenʃn/',
        pos: 'n.',
        cn: '紧张（气氛）',
        col: 'ease the tension — 缓解紧张气氛；growing tension — 日益加剧的紧张',
        ex: 'There was tension in the room before the test began.'
      },
      {
        w: 'context',
        ph: '/ˈkɒntekst/',
        pos: 'n.',
        cn: '情境、背景',
        col: 'read the context — 先看情境；in context — 放在具体情境中看',
        ex: 'The gesture means nothing without the context.'
      },
      {
        w: 'research',
        ph: '/rɪˈsɜːtʃ/',
        pos: 'n./v.',
        cn: '研究',
        col: 'research on … — 关于……的研究；do research — 做研究',
        ex: 'Research on body language is still growing.'
      },
      {
        w: 'participant',
        ph: '/pɑːˈtɪsɪpənt/',
        pos: 'n.',
        cn: '参与者、受试者',
        col: 'research participants — 研究受试者；a willing participant — 自愿参加的人',
        ex: 'Twenty participants joined the study.'
      },
      {
        w: 'interpret',
        ph: '/ɪnˈtɜːprɪt/',
        pos: 'vt./vi.',
        cn: '解读、理解',
        col: 'interpret a signal — 解读一个信号；hard to interpret — 难以解读',
        ex: 'It is easy to interpret the gesture wrongly.'
      },
      {
        w: 'facial',
        ph: '/ˈfeɪʃl/',
        pos: 'adj.',
        cn: '面部的',
        col: 'facial expression — 面部表情；facial features — 面部特征',
        ex: 'A facial expression can last less than a second.'
      },
      {
        w: 'expression',
        ph: '/ɪkˈspreʃn/',
        pos: 'n.',
        cn: '表情；表达',
        col: 'a puzzled expression — 困惑的表情；beyond expression — 无法形容',
        ex: 'His expression showed no surprise at all.'
      },
      {
        w: 'misleading',
        ph: '/ˌmɪsˈliːdɪŋ/',
        pos: 'adj.',
        cn: '误导人的',
        col: 'a misleading answer — 误导人的答案；misleading information — 误导性信息',
        ex: 'The first answer was misleading.'
      },
      {
        w: 'cue',
        ph: '/kjuː/',
        pos: 'n.',
        cn: '线索、提示',
        col: 'take a cue from … — 从……得到提示；a visual cue — 视觉提示',
        ex: 'She took the cue and stopped talking.'
      },
      {
        w: 'judge',
        ph: '/dʒʌdʒ/',
        pos: 'v.',
        cn: '判断、评价',
        col: 'judge by appearance — 以貌取人；judge again — 重新判断',
        ex: 'Do not judge a person by one answer.'
      },
      {
        w: 'interaction',
        ph: '/ˌɪntərˈækʃn/',
        pos: 'n.',
        cn: '互动、交流',
        col: 'face-to-face interaction — 面对面的交流；social interaction — 社交互动',
        ex: 'The app replaced real interaction with likes.'
      },
      {
        w: 'display',
        ph: '/dɪˈspleɪ/',
        pos: 'v./n.',
        cn: '展示、表露',
        col: 'display confidence — 展现自信；on display — 在展出',
        ex: 'His hands displayed more feeling than his voice.'
      }
    ],
    phrases: [
      {
        en: 'eye contact',
        cn: '眼神交流',
        ex: 'Good eye contact shows that you are listening.'
      },
      {
        en: 'look away',
        cn: '把目光移开',
        ex: 'She looked away when the question got hard.'
      },
      {
        en: 'at first glance',
        cn: '乍一看、第一眼',
        ex: 'At first glance the answer seems simple.'
      },
      {
        en: 'jump to conclusions',
        cn: '草率下结论',
        ex: 'Do not jump to conclusions from one small sign.'
      },
      {
        en: 'get the message across',
        cn: '把意思传达清楚',
        ex: 'He got the message across without a long speech.'
      },
      {
        en: 'sit up straight',
        cn: '坐直、坐姿端正',
        ex: 'Sit up straight when you answer the question.'
      },
      {
        en: 'personal space',
        cn: '个人空间',
        ex: 'Standing too close invades personal space.'
      },
      {
        en: 'read sb.’s mind',
        cn: '猜透某人的心思',
        ex: 'Nobody can read your mind in a meeting.'
      },
      {
        en: 'in most cases',
        cn: '在大多数情况下',
        ex: 'In most cases the first reading is wrong.'
      },
      {
        en: 'make a difference',
        cn: '有影响、起作用',
        ex: 'One honest sentence can make a difference.'
      }
    ],
    writings: [
      {
        expr: 'In fact, ...',
        cn: '事实上……',
        meaning: '纠正前文可能造成的误解，把话说得更准。',
        context: '放在观点句或常见看法之后，用真实情况把它推翻或补充。',
        alts: [
          {
            t: 'Actually, ...',
            n: '口语更常用'
          },
          {
            t: 'As a matter of fact, ...',
            n: '更正式'
          },
          {
            t: 'In reality, ...',
            n: '强调现实与想象的差距'
          }
        ],
        register: '中性，写作与口语通用。',
        example: 'It looks polite to stare. In fact, most people find it uncomfortable.'
      },
      {
        expr: 'On the whole, ...',
        cn: '总的来说……',
        meaning: '在讲完正反两面之后给出总体判断，语气留有余地。',
        context: '结尾段收束全文，或者在列举完利弊后做总评。',
        alts: [
          {
            t: 'All in all, ...',
            n: '略口语'
          },
          {
            t: 'Overall, ...',
            n: '更简洁，书面常用'
          },
          {
            t: 'Taking everything into account, ...',
            n: '更书面、更长'
          }
        ],
        register: '中性偏书面。',
        example: 'Some signals mislead us. On the whole, body language still helps.'
      }
    ],
    sentences: [
      {
        text: 'Most listeners feel the difference between a glance that invites a question and one that ends it, though hardly any of them can say why.',
        points: [
          '<b>主干</b>：Most listeners feel the difference …，句尾 though 引导让步状语从句，先承认事实再补一句转折。',
          '<b>两个定语从句</b>：a glance that invites a question 与 one that ends it 平行，第二个分句用 one 代替 glance、it 代替 question，避免重复。',
          '<b>hardly 是否定副词</b>：hardly any = 几乎没有，语气比 not any 更委婉；它已经含否定，句子里不再加 not。',
          '<b>为什么值得学</b>：「能感觉到 A 与 B 的区别，却说不出为什么」是说明文里很实用的句式，用来描述直觉判断。',
          '<b>常见变体</b>：可改成 Most people can tell A from B, though they cannot explain it；one 也可以换成 that one。'
        ]
      },
      {
        text: 'What counts as polite closeness in one culture may feel like an attack in another, which is why travellers are advised to watch before they copy.',
        points: [
          '<b>主干</b>：What counts as polite closeness … may feel like an attack …，主语是 What 引导的名词性从句，谓语用 may feel。',
          '<b>非限制性定语从句 which is why …</b>：which 指代前面整句话，后面接表语从句，表示「这就是……的原因」。',
          '<b>被动 be advised to do</b>：travellers are advised to watch 比 people advise travellers 更客观，科技与社科说明文常用。',
          '<b>情态动词 may</b>：表示可能性，不把话说死，正好配合本文「谨慎解读」的立意。',
          '<b>为什么值得学</b>：一句里叠了名词性从句、对比结构和非限制性定语从句，示范了如何把跨文化差异讲得克制又有分量。'
        ]
      },
      {
        text: 'Because a filmed face can be paused and scored frame by frame, it shows us something that a moving, arguing, interrupting person rarely allows.',
        points: [
          '<b>主干</b>：it shows us something …；句首 Because 引导原因状语从句，说明实验方法为什么方便。',
          '<b>两个被动</b>：can be paused 与 scored 共用情态动词，强调「脸被研究者处理」，主语是被观察的对象。',
          '<b>并列的 -ing 修饰</b>：a moving, arguing, interrupting person 用三个现在分词并列修饰 person，节奏快，画面感强。',
          '<b>定语从句</b>：something that … rarely allows，that 在从句中作宾语，可以省略，但保留更清楚。',
          '<b>为什么值得学</b>：这句解释了「实验室结论为什么可能失真」，是论证关系题的常见落点，也可仿写成「因为方法 A，所以只看得到 B」。'
        ]
      },
      {
        text: 'If one glance settles the whole picture, we stop asking, and the picture stays as wrong as it was at the start.',
        points: [
          '<b>主干</b>：If …, we stop asking, and the picture stays …，条件从句 + 两个并列分句，逻辑是「假设 → 行为 → 后果」。',
          '<b>stop doing sth.</b>：stop 后接动名词表示「停止正在做的事」，与 stop to do（停下来去做另一件事）意思不同，最易混淆。',
          '<b>as wrong as it was</b>：as … as 比较结构，中间插了副词修饰，比较对象是「现在」与「一开始」。',
          '<b>the picture 的重复</b>：同一个词出现两次，是有意的回指，让「印象一旦定下就不再更新」的结论更醒目。',
          '<b>为什么值得学</b>：这是典型的「提出危害」句式，写作里谈负面影响时可直接套用。'
        ]
      }
    ],
    questions: [
      {
        en: 'According to paragraph 1, what does the interviewer read before any word is spoken?',
        cn: '根据第一段，在一句话还没说出口之前，面试官先读到的是什么？',
        ans: 'The candidate’s posture and gesture, which have already conveyed an impression.',
        ansCn: '是求职者的姿态和手势，它们已经传达出了一种印象。'
      },
      {
        en: 'What do good speakers do with their eyes, according to paragraph 2?',
        cn: '根据第二段，好的说话人是怎么运用目光的？',
        ans: 'They hold the listener’s attention for a few seconds and then look away.',
        ansCn: '他们把注意力在听者身上停留几秒，然后移开目光。'
      },
      {
        en: 'What can be inferred about the candidate who looks down while answering?',
        cn: '关于那位低头作答的求职者，可以推出什么？',
        ans: 'The habit may influence the decision even though it may only mean she read a hard question twice.',
        ansCn: '这个习惯可能影响最终决定，尽管它也许只是把一道难题读了两遍。'
      },
      {
        en: 'Why does the writer mention actors, job candidates and students in a lab?',
        cn: '作者为什么提到演员、求职者和实验室里的学生？',
        ans: 'To show that such research depends on easy-to-interpret subjects, so its findings may not fit real, moving, arguing people.',
        ansCn: '为了说明这类研究依赖容易解读的对象，所以它的结论未必适用于真实生活中走动、争论的人。'
      },
      {
        en: 'What is the writer’s attitude towards reading body language?',
        cn: '作者对「解读肢体语言」持什么态度？',
        ans: 'He sees it as useful but unreliable when based on a single sign, and urges a slower, checked reading.',
        ansCn: '他认为它有用，但只靠一个信号并不可靠，因此主张放慢一点、再核对一次。'
      }
    ],
    writingTask: {
      en: 'Write 100–120 words about a moment when someone’s body language changed your mind about them, and what you learned from it.',
      hints: [
        'At first I thought ... because ...',
        'In fact, ...',
        'Looking back, the sign I read was ...',
        'On the whole, ...'
      ],
      hintCn: '用 6–8 句话写一次「对方的肢体语言改变了你的判断」的经历：先写第一眼的印象，再写事实如何推翻它，最后写你学到的判断方法。印象、原因、教训三要素要齐全。',
      req: '至少使用 1 个本篇学过的词或搭配（posture / impression / jump to conclusions / eye contact / in fact）。'
    },
    speakingTask: {
      en: 'Speak for one minute about how you would like other people to read your body language: give your opinion, one reason and one example.',
      points: [
        'Your opinion',
        'One reason',
        'One small example'
      ],
      pointCn: '先明确说出你希望留给别人的肢体印象，再给一个理由，最后举一个自己的小例子，三部分都要有。',
      skeleton: 'In my opinion, I want people to read me as ... That is because ... For example, last week in class I ...'
    },
    focus: [
      '<b>新授核心词 17 个</b>：<span class=\'en\'>posture, gesture, convey, impression, subtle, tension, context, research, participant, interpret, facial, expression, misleading, cue, judge, interaction, display</span> —— 这批词多为抽象名词与形容词，重点记 <span class=\'en\'>convey an impression</span>（留下印象）、<span class=\'en\'>read the context</span>（先看情境）、<span class=\'en\'>a facial expression</span>（面部表情）；<span class=\'en\'>judge</span> 的名词是 <span class=\'en\'>judgment</span>，<span class=\'en\'>participant</span> 与 <span class=\'en\'>participation</span> 同族，别只记其中一个。',
      '<b>本篇复现的旧词</b>：第 9 篇的 <span class=\'en\'>notice</span>（最先读到的其实是另一样东西）、<span class=\'en\'>stranger</span>（同样距离上的陌生人）、第 3 篇的 <span class=\'en\'>trust</span>（目光太少会失去信任）、第 1 篇的 <span class=\'en\'>attention</span>（停留几秒的注意力）、第 16 篇的 <span class=\'en\'>familiar</span>（熟悉的朋友）、第 2 篇的 <span class=\'en\'>nervous</span>（让人紧张）、第 13 篇的 <span class=\'en\'>assume</span>（凭双臂下判断）、第 23 篇的 <span class=\'en\'>influence</span>（影响决定）、第 28 篇的 <span class=\'en\'>anxious</span>（焦虑的头脑读得快却读不好）与短语 <span class=\'en\'>make sure</span>（确保双手没有出卖你）—— 共 10 处灰点，每个词只标一次。',
      '<b>四个长难句</b>：第一句是 though 让步 + 两个平行 that 定语从句 + hardly 否定；第二句是 What 主语从句 + which is why 的非限制性定语从句 + 被动；第三句是 Because 原因从句 + 双被动 + 三个 -ing 并列修饰；第四句是 If 条件句 + stop doing + as … as 比较。四句分别承担「描述直觉」「解释文化差异」「质疑实验」「警示危害」四种功能，值得各仿写一句。',
      '<b>高频搭配 6 个</b>：<span class=\'en\'>eye contact</span>（眼神交流）、<span class=\'en\'>look away</span>（把目光移开）、<span class=\'en\'>at first glance</span>（乍一看）、<span class=\'en\'>jump to conclusions</span>（草率下结论）、<span class=\'en\'>get the message across</span>（把意思传达清楚）、<span class=\'en\'>sit up straight</span>（坐直）—— 注意 <span class=\'en\'>jump to conclusions</span> 的 conclusions 用复数，<span class=\'en\'>get the message across</span> 属于「动词 + 宾语 + 副词」结构，介词最后落脚。',
      '<b>全文逻辑线与题型提醒</b>：面试的镜子（引入）→ 眼神与距离（正例）→ 研究方法的局限（转折）→ 误读的代价（反面）→ 求职者的低头（个案）→ 怎么用（建议）→ 警示（让步）→ 收束。第 4 题是论证关系题，问「例子为哪个观点服务」，答案要看例子前后的观点句；第 5 题是态度题，找 however、still 这类限定语，本文态度是「有用但不可只信一个信号」。'
    ],
    standard: {
      time: '约 40 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 17 个核心词遮住中文说出 ≥ 12 · 4 个长难句会拆结构 · 完成 100–120 词写作与 1 分钟口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 17 个核心词中的 12 个（posture、convey、misleading、context …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '10 个高频搭配掌握 7 个，能各造一句（eye contact、jump to conclusions、get the message across …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 4 个长难句各自的主干与从句类型，并各仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；论证关系题与态度题要在原文找到依据',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 100–120 词，至少用上 In fact, … 或 On the whole, …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟按「观点→原因→例子」说清你希望别人怎么读你的肢体语言',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 10 处灰点旧词，说出其中 6 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 35,
    slug: '035-where-does-our-garbage-go',
    title: 'Where Does Our Garbage Go?',
    titleCn: '我们的垃圾去哪儿了',
    stage: '阶段四 · 中级提高',
    stageRange: '第 31–40 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 455 词'
      },
      {
        k: '新词密度',
        v: '约 5.3%'
      },
      {
        k: '长难句',
        v: '4 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/035.jpg',
    coverCredit: 'Photo: Jan van der Wolf / Pexels',
    body: [
      'Every morning we <span class="w-phrase" data-cn="把垃圾拿出去">take out the rubbish</span> and stop thinking about it. The <span class="w-rev">waste</span> does not vanish at the curb; it only changes <span class="w-cet4" data-cn="运输路线">route</span>. A truck, a <span class="w-cet4" data-cn="处理设施">facility</span> and a chain of decisions carry it out of sight, and the bill is paid <span class="w-rev">in the long run</span>.',
      'The first stop is a facility at the edge of town, where trucks <span class="w-cet4" data-cn="收集">collect</span> and weigh the load. <span class="w-sentence">What the city wants to know is simple: how much arrived, and how much of it can still be used.</span> The <span class="w-rev">amount</span> decides what follows: a sorted stream or one mixed pile.',
      'At the sorting line, the load is <span class="w-phrase" data-cn="把……分类成……">sorted into</span> paper, metal and <span class="w-rev">plastic</span>. <span class="w-sentence">A bag that mixes everything can send a whole batch to the landfill, which is why one careless choice at home matters.</span> Glass is <span class="w-cet4" data-cn="熔化、融化">melted</span> into new bottles, paper into new boxes, and metal turned into the same sheets over and over.',
      '<span class="w-rev">Recycled</span> material is only as clean as the bin it came from: one bottle with juice left inside can <span class="w-cet4" data-cn="污染">contaminate</span> a whole load of paper, which then <span class="w-phrase" data-cn="最终进入……">ends up in</span> the <span class="w-cet4" data-cn="垃圾填埋场">landfill</span>. Once the oil spreads through the batch, the paper is no longer paper. The <span class="w-cet4" data-cn="附近的">nearby</span> plant can <span class="w-cet4" data-cn="分类、归类">classify</span> only what is still clean.',
      'The rest goes to a landfill, where each day’s rubbish is pushed into <span class="w-cet4" data-cn="层">layers</span> and <span class="w-cet4" data-cn="掩埋、埋藏">buried</span> under dry soil. <span class="w-sentence">The top may look like a park; nobody walking above would guess what continues below the grass.</span> Deep underground it starts to <span class="w-cet4" data-cn="分解">decompose</span>, and the liquid it lets out can <span class="w-cet4" data-cn="渗漏、泄漏">leak</span> into the <span class="w-cet4" data-cn="地下水">groundwater</span> that a nearby town drinks; the <span class="w-cet4" data-cn="有毒的">toxic</span> work below continues <span class="w-phrase" data-cn="随着时间推移">over time</span>.',
      'Some cities burn instead. An <span class="w-cet4" data-cn="焚烧处理">incineration</span> plant can <span class="w-rev">turn rubbish into</span> electricity and heat, and what falls out of the fire is only <span class="w-cet4" data-cn="灰、灰烬">ash</span>. <span class="w-cet4" data-cn="排放（物）">Emissions</span> of toxic gases depend on filters that no city can check every hour.',
      '<span class="w-writing" data-cn="这就是为什么……">That is exactly why</span> the home bin matters more than a plant: bags not <span class="w-rev">separated</span> at the source arrive as one heavy mix. <span class="w-sentence">On average, a city that starts sorting late spends years paying for the habit it never built.</span> The <span class="w-synonym" data-cn="＝ very large 的替换词">vast</span> majority of that mix must <span class="w-synonym" data-cn="＝ in the end 的替换词">eventually</span> be burned or buried, whatever the poster on the wall says.',
      'At home the rules are short. <span class="w-rev">Reduce</span> the packaging you buy, <span class="w-rev">throw away</span> less, and <span class="w-phrase" data-cn="在……中起作用">play a part in</span> collection day instead of missing it. A bottle left on the grass is <span class="w-cet4" data-cn="乱丢的垃圾">litter</span>, and a city whose bins <span class="w-phrase" data-cn="耗尽、用完">run out of</span> room will soon have full streets again.',
      '<span class="w-writing" data-cn="不仅……而且……（部分倒装）">Not only does it</span> save room in the landfill, but it also saves the energy spent digging and moving new material. There is no away: rubbish is only somewhere else, waiting for a decision we have not made yet.'
    ],
    translation: [
      '每天早上，我们把垃圾拿出去，就不再去想它了。垃圾并不会在路边消失，它只是换了一条路线。一辆车、一座处理设施，还有一连串决定，把它带出我们的视线，而账单要在很久以后才付。',
      '第一站是城边的一座处理设施，卡车在那里卸下并称重。这座城市想知道的事情很简单：来了多少，其中还有多少能再用。接下来怎么走，取决于这个数：是一条条分好的流向，还是混成一堆。',
      '在分拣线上，这批垃圾被分成纸、金属和塑料。一袋什么都混在一起的东西，可能把整批货送进填埋场，这就是为什么家里一个不经意的选择也很重要。玻璃被熔化成新瓶子，纸被重新做成纸箱，金属则一次次变成同样的板材。',
      '回收来的材料有多干净，取决于它出自哪个桶：一瓶剩在里面的果汁，能污染整整一批纸，于是这批纸也进了填埋场。油一旦渗进整批货，纸就不再是纸了。附近的工厂只能处理那些还算干净的部分。',
      '剩下的进了填埋场，每天的垃圾被压成一层又一层，埋在干土底下。地表看上去也许像公园；走在上面的人，谁也猜不到草皮底下还在发生什么。在深深的地下，垃圾开始腐烂，渗出的液体可能漏进附近城镇饮用的地下水，而地下的有毒工作仍在随着时间推移继续。',
      '有些城市选择焚烧。一座焚烧厂可以把垃圾变成电和热，火烧完剩下的只有灰。有毒气体的排放量，取决于那些没有任何城市能每小时检查一遍的过滤装置。',
      '这正是家里的那个桶比城边的工厂更要紧的原因：没有在源头分开的袋子，运到时就是沉甸甸的一坨。平均来说，一座很晚才开始分类的城市，要为它从未养成的习惯付上好几年的代价。这坨东西的绝大多数，最终都得烧掉或埋掉，无论墙上贴的海报怎么说。',
      '在家里的规矩很短：少买过度包装的东西，少扔一点，并且赶上收运日而不是错过它。被丢在草地上的瓶子就是乱丢的垃圾，而一个垃圾桶装不下的城市，很快街道又会被堆满。',
      '它不仅为填埋场省出空间，也省下了挖掘和运输新材料所花的能源。根本没有「扔掉」这回事：垃圾只是去了别的地方，等着一个我们还没做出的决定。'
    ],
    vocabulary: [
      {
        w: 'route',
        ph: '/ruːt/',
        pos: 'n.',
        cn: '路线、运输路线',
        col: 'a fixed route — 固定路线；change route — 改变路线',
        ex: 'The truck changes route when the road is closed.'
      },
      {
        w: 'facility',
        ph: '/fəˈsɪləti/',
        pos: 'n.',
        cn: '设施、处理中心',
        col: 'a recycling facility — 回收处理设施；at the facility — 在处理厂',
        ex: 'The facility sits at the edge of town.'
      },
      {
        w: 'collect',
        ph: '/kəˈlekt/',
        pos: 'v.',
        cn: '收集',
        col: 'collect the rubbish — 收集垃圾；collect data — 收集数据',
        ex: 'Trucks collect the bins every Monday.'
      },
      {
        w: 'classify',
        ph: '/ˈklæsɪfaɪ/',
        pos: 'vt.',
        cn: '分类、归类',
        col: 'classify waste by type — 按类型给垃圾分类；classify as — 归为……',
        ex: 'The plant classifies waste by type first.'
      },
      {
        w: 'landfill',
        ph: '/ˈlændfɪl/',
        pos: 'n.',
        cn: '垃圾填埋场',
        col: 'end up in a landfill — 最终进了填埋场；a landfill site — 填埋场址',
        ex: 'A third of the rubbish ends up in a landfill.'
      },
      {
        w: 'incineration',
        ph: '/ɪnˌsɪnəˈreɪʃn/',
        pos: 'n.',
        cn: '焚烧处理',
        col: 'an incineration plant — 焚烧厂；waste incineration — 垃圾焚烧',
        ex: 'The city uses incineration when it cannot bury the waste.'
      },
      {
        w: 'contaminate',
        ph: '/kənˈtæmɪneɪt/',
        pos: 'vt.',
        cn: '污染',
        col: 'contaminate the water — 污染水源；contaminated food — 被污染的食物',
        ex: 'One dirty bottle can contaminate the whole load.'
      },
      {
        w: 'emission',
        ph: '/ɪˈmɪʃn/',
        pos: 'n.',
        cn: '排放（物）',
        col: 'reduce emissions — 减少排放；gas emissions — 气体排放',
        ex: 'Emissions depend on how clean the filters are.'
      },
      {
        w: 'toxic',
        ph: '/ˈtɒksɪk/',
        pos: 'adj.',
        cn: '有毒的',
        col: 'toxic gas — 有毒气体；toxic waste — 有毒废弃物',
        ex: 'Toxic waste must be handled with care.'
      },
      {
        w: 'bury',
        ph: '/ˈberi/',
        pos: 'vt.',
        cn: '掩埋、埋藏',
        col: 'bury the rubbish — 掩埋垃圾；be buried under — 被埋在……下面',
        ex: 'Each day’s rubbish is buried under soil.'
      },
      {
        w: 'layer',
        ph: '/ˈleɪə/',
        pos: 'n.',
        cn: '层',
        col: 'layer after layer — 一层又一层；a thick layer of — 厚厚一层',
        ex: 'The waste is packed in layer after layer.'
      },
      {
        w: 'decompose',
        ph: '/ˌdiːkəmˈpəʊz/',
        pos: 'vi.',
        cn: '腐烂、分解',
        col: 'decompose slowly — 缓慢分解；decompose into — 分解成',
        ex: 'Food waste takes months to decompose.'
      },
      {
        w: 'leak',
        ph: '/liːk/',
        pos: 'v./n.',
        cn: '泄漏、渗出',
        col: 'leak into — 渗漏进……；a leak in the pipe — 管道的漏点',
        ex: 'The liquid can leak into the groundwater.'
      },
      {
        w: 'groundwater',
        ph: '/ˈɡʌndaʊndɜːt/',
        pos: 'n.',
        cn: '地下水',
        col: 'groundwater pollution — 地下水污染；drink the groundwater — 饮用地下水',
        ex: 'A leak can spoil the groundwater for years.'
      },
      {
        w: 'litter',
        ph: '/ˈlɪtə/',
        pos: 'n./v.',
        cn: '乱丢的垃圾；乱扔',
        col: 'drop litter — 乱丢垃圾；a piece of litter — 一件废弃物',
        ex: 'A bottle on the grass is litter.'
      },
      {
        w: 'nearby',
        ph: '/ˌnɪəˈbaɪ/',
        pos: 'adj./adv.',
        cn: '附近的',
        col: 'a nearby town — 附近的城镇；live nearby — 住在附近',
        ex: 'The nearest school is nearby.'
      },
      {
        w: 'melt',
        ph: '/melt/',
        pos: 'v.',
        cn: '熔化、融化',
        col: 'melt down — 熔化；melt into — 融化成',
        ex: 'Glass can be melted into new bottles.'
      },
      {
        w: 'ash',
        ph: '/æʃ/',
        pos: 'n.',
        cn: '灰、灰烬',
        col: 'a pile of ash — 一堆灰烬；what is left is only ash — 只剩下灰',
        ex: 'What is left after the fire is only ash.'
      }
    ],
    phrases: [
      {
        en: 'take out the rubbish',
        cn: '把垃圾拿出去',
        ex: 'He takes out the rubbish before school.'
      },
      {
        en: 'sort … into …',
        cn: '把……分类成……',
        ex: 'We sort the rubbish into three bags.'
      },
      {
        en: 'end up in',
        cn: '最终进入……（常指不好的去处）',
        ex: 'The broken glass ends up in the landfill.'
      },
      {
        en: 'play a part in',
        cn: '在……中起作用、参与',
        ex: 'Every household plays a part in the plan.'
      },
      {
        en: 'deal with',
        cn: '处理、应对',
        ex: 'The city must deal with the mixed load.'
      },
      {
        en: 'over time',
        cn: '随着时间推移',
        ex: 'The problem grows worse over time.'
      },
      {
        en: 'throw … away',
        cn: '把……扔掉',
        ex: 'Do not throw the bottle away; it can be reused.'
      },
      {
        en: 'in the long run',
        cn: '从长远来看',
        ex: 'The cost shows up in the long run.'
      },
      {
        en: 'run out of',
        cn: '耗尽、用完',
        ex: 'The bins run out of room on hot days.'
      },
      {
        en: 'turn … into …',
        cn: '把……变成……',
        ex: 'The plant turns rubbish into electricity.'
      }
    ],
    writings: [
      {
        expr: 'That is exactly why ...',
        cn: '这正是……的原因',
        meaning: '紧接前文的证据，把结论点破，语气比 because 更有力。',
        context: '放在一个事实或例子之后，用来推出作者想强调的结论，常见于段尾。',
        alts: [
          {
            t: 'That is why ...',
            n: '更简洁'
          },
          {
            t: 'This is precisely the reason why ...',
            n: '更书面'
          },
          {
            t: 'For this reason, ...',
            n: '正式，放句首'
          }
        ],
        register: '中性偏书面，说明与议论都合适。',
        example: 'One bag can spoil a whole batch. That is exactly why sorting starts at home.'
      },
      {
        expr: 'Not only does it ..., but it also ...',
        cn: '它不仅……，而且……',
        meaning: '用部分倒装加强语气，把两层好处一起摆出来，后半句往往更进一层。',
        context: '结尾段总结好处时用；注意 not only 放在句首时，助动词 does 提到主语前面。',
        alts: [
          {
            t: 'It not only ..., but also ...',
            n: '不倒装，更平实'
          },
          {
            t: 'Besides ..., it also ...',
            n: '口语化'
          },
          {
            t: 'Apart from ..., it ...',
            n: '书面，先让一步'
          }
        ],
        register: '偏书面，写作提分句式。',
        example: 'Not only does recycling save landfill space, but it also saves energy.'
      }
    ],
    sentences: [
      {
        text: 'What the city wants to know is simple: how much arrived, and how much of it can still be used.',
        points: [
          '<b>主干</b>：What the city wants to know 是主语从句，谓语是 is，表语 simple 后用冒号引出具体内容。',
          '<b>两个 how much 并列</b>：第一个问数量，第二个问「其中还能用的那部分」，后一个省略了 of it 之外的成分，靠上下文补全。',
          '<b>冒号的用法</b>：冒号后可以接句子，起到「也就是说」的作用，说明文里常用它来解释抽象的 simple。',
          '<b>为什么值得学</b>：「问题其实很简单：一是……二是……」这个句式可以直接搬到写作里做段落小结。',
          '<b>常见变体</b>：可改成 What matters is …: how much …, and how much …；也可把 simple 换成 clear。'
        ]
      },
      {
        text: 'A bag that mixes everything can send a whole batch to the landfill, which is why one careless choice at home matters.',
        points: [
          '<b>主干</b>：A bag … can send a whole batch to the landfill，主语后跟 that 定语从句，句尾 which is why 引出推论。',
          '<b>定语从句的位置</b>：that mixes everything 紧跟 A bag，是限制性从句，去掉后句子就说不清是哪种袋子。',
          '<b>which is why …</b>：which 指前面整件事，后接表语从句，把「一袋混装」与「家里的选择很重要」连成因果。',
          '<b>情态动词 can</b>：这里表示「有可能」，不是能力；说明风险而非必然，措辞更准确。',
          '<b>为什么值得学</b>：先给具体现象、再用 which is why 收结论，是论证关系题最典型的「例证 → 观点」结构。'
        ]
      },
      {
        text: 'The top may look like a park; nobody walking above would guess what continues below the grass.',
        points: [
          '<b>主干</b>：分号连接两个独立分句 —— 前句说「顶上看着像公园」，后句说「没人猜得到下面还在发生什么」。',
          '<b>分号的用法</b>：两个分句各有完整的主谓、意思又紧密相连，用分号比句号更连贯，比逗号更清楚。',
          '<b>现在分词短语作定语</b>：nobody walking above 即「走在上面的人」，walking above 后置修饰 nobody，相当于 nobody who walks above。',
          '<b>what 宾语从句</b>：guess what continues below 里 what 同时在从句中作主语，翻译时常常拆成「下面还在发生什么」。',
          '<b>为什么值得学</b>：「表面如此、地下不然」是说明文最常见的反差句式，写隐患类或对比类作文时可以直接套用。'
        ]
      },
      {
        text: 'On average, a city that starts sorting late spends years paying for the habit it never built.',
        points: [
          '<b>主干</b>：a city … spends years paying for the habit；句首 On average 是插入语，交代数据口径。',
          '<b>两个定语从句</b>：that starts sorting late 修饰 city，(that) it never built 修饰 habit，后者省略了关系词。',
          '<b>spend + 时间 + doing</b>：spends years paying 是「花费多年做某事」的固定结构，后接动名词。',
          '<b>为什么值得学</b>：把「晚起步的代价」压缩成一句话，用时间做代价的量度，语气客观又有说服力。',
          '<b>常见变体</b>：可改成 a city that sorts late pays for years；pay for 也可以换成 bear the cost of。'
        ]
      }
    ],
    questions: [
      {
        en: 'Where does the rubbish go first after it leaves the home?',
        cn: '垃圾离开家门之后，第一站是哪里？',
        ans: 'It goes to a facility at the edge of town, where trucks collect and weigh the load.',
        ansCn: '先运到城边的一座处理设施，卡车在那里收集并称重。'
      },
      {
        en: 'What can one bottle with juice left inside do to a load of paper?',
        cn: '一瓶剩着果汁的饮料，对一批废纸能造成什么影响？',
        ans: 'It can contaminate the whole load, so the paper ends up in the landfill instead of being recycled.',
        ansCn: '它能污染整批纸，于是这批纸进了填埋场，而不能再被回收。'
      },
      {
        en: 'What can be inferred about the land on top of a landfill?',
        cn: '关于填埋场上方的土地，可以推出什么？',
        ans: 'It may look like a park on the surface while toxic liquid is still leaking below over time.',
        ansCn: '地表看上去也许像公园，但地下仍有有毒液体随着时间不断渗漏。'
      },
      {
        en: 'Why does the writer give the example of a bag that mixes everything?',
        cn: '作者为什么举「一袋什么都混在一起」这个例子？',
        ans: 'To show that a single mixed bag can ruin a whole batch, so the choice made at home decides what can be recycled.',
        ansCn: '为了说明一袋混装就能毁掉整批货，因此家里做出的那个选择决定了哪些东西还能被回收。'
      },
      {
        en: 'What is the writer’s main purpose in this passage?',
        cn: '作者写这篇文章的主要目的是什么？',
        ans: 'To show where rubbish really goes and what it costs, and to urge readers to reduce waste and sort it at home.',
        ansCn: '写清垃圾真正的去向和代价，并促使读者少产生垃圾、在家里做好分类。'
      }
    ],
    writingTask: {
      en: 'Write 100–120 words about what happens to the rubbish in your home after it leaves the bin, and one change you would make.',
      hints: [
        'Every week, my family ...',
        'Most of it ends up ...',
        'That is exactly why I would ...',
        'Not only does it ..., but it also ...'
      ],
      hintCn: '用 6–8 句话写自家垃圾出了垃圾桶之后的去向，再提出一个你愿意做出的改变：先写现状，再写后果，最后写改变与它带来的两层好处。现状、后果、改变三要素要齐全。',
      req: '至少使用 1 个本篇学过的词或搭配（landfill / classify / in the long run / deal with / that is exactly why）。'
    },
    speakingTask: {
      en: 'Speak for one minute about how your family handles rubbish: give your opinion on sorting, one reason and one example.',
      points: [
        'Your opinion on sorting',
        'One reason',
        'One example from home'
      ],
      pointCn: '先说清你家在垃圾分类上的立场，再给一个理由，最后举一个家里的真实例子，三部分都要有。',
      skeleton: 'In my opinion, sorting rubbish at home is ... That is because ... For example, last week my family ...'
    },
    focus: [
      '<b>新授核心词 18 个</b>：<span class=\'en\'>route, facility, collect, classify, landfill, incineration, contaminate, emission, toxic, bury, layer, decompose, leak, groundwater, litter, nearby, melt, ash</span> —— 这批词集中在环境话题，重点记 <span class=\'en\'>end up in a landfill</span>（最终进填埋场）、<span class=\'en\'>contaminate the water</span>（污染水源）、<span class=\'en\'>layer after layer</span>（一层又一层）；<span class=\'en\'>incineration</span> 由 <span class=\'en\'>incinerate</span> 变来，<span class=\'en\'>groundwater</span> 是 ground + water 的合成词，一起记更省力。',
      '<b>本篇复现的旧词</b>：第 6 篇的 <span class=\'en\'>waste</span>（垃圾不会消失）、第 18 篇的 <span class=\'en\'>amount</span>（数量决定后续）、第 26 篇的 <span class=\'en\'>plastic</span>（塑料最难分）、第 22 篇的 <span class=\'en\'>recycled</span>（回收料有多干净）、第 28 篇的 <span class=\'en\'>separated</span>（源头未分开）、第 8 篇的 <span class=\'en\'>reduce</span>（少买包装）与短语 <span class=\'en\'>in the long run</span>（长远才付账）、<span class=\'en\'>turn … into …</span>（把垃圾变成电）、<span class=\'en\'>throw away</span>（少扔一点）—— 共 9 处灰点，每个词只标一次。',
      '<b>四个长难句</b>：第一句是 What 主语从句 + 冒号引出两个 how much 并列；第二句是 that 限制性定语从句 + which is why 的非限制性定语从句；第三句是分号并列两个分句，里面套了现在分词短语作定语与 what 宾语从句；第四句是插入语 On average + 双定语从句 + spend … doing。四句分别承担「交代指标」「例证推出结论」「表里反差」「说明代价」四种功能，值得各仿写一句。',
      '<b>高频搭配 6 个</b>：<span class=\'en\'>take out the rubbish</span>（把垃圾拿出去）、<span class=\'en\'>sort … into …</span>（把……分类成……）、<span class=\'en\'>end up in</span>（最终进入……）、<span class=\'en\'>play a part in</span>（在……中起作用）、<span class=\'en\'>run out of</span>（耗尽、用完）、<span class=\'en\'>over time</span>（随着时间推移）—— 注意 <span class=\'en\'>end up in</span> 后接地点，<span class=\'en\'>play a part in</span> 的 in 是介词，后面接名词或动名词，<span class=\'en\'>run out of</span> 的主语则是「把东西用光的人或地方」。',
      '<b>全文逻辑线与题型提醒</b>：垃圾桶（引入）→ 处理厂与数量（流程）→ 分拣（关键）→ 污染的代价（转折）→ 填埋（去向一）→ 焚烧（去向二）→ 源头分类（归因）→ 家里能做什么（建议）→ 收束。第 4 题是论证关系题，问「例子服务于哪个观点」，答案在例子前后的观点句里；第 5 题是写作目的题，找结尾段的号召句与全文反复出现的因果词。'
    ],
    standard: {
      time: '约 41 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 18 个核心词遮住中文说出 ≥ 13 · 4 个长难句会拆结构 · 完成 100–120 词写作与 1 分钟口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 18 个核心词中的 13 个（landfill、contaminate、emission、decompose …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '10 个高频搭配掌握 7 个，能各造一句（sort … into …、end up in、run out of …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 4 个长难句各自的主干与从句类型，并各仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；推断题与目的题要在原文找到依据',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 100–120 词，至少用上 That is exactly why … 或 Not only does it …, but it also …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟按「观点→原因→例子」说清你家怎么处理垃圾与你的看法',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 9 处灰点旧词，说出其中 6 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 36,
    slug: '036-the-rise-of-the-15-minute-city',
    title: 'The Rise of the 15-Minute City',
    titleCn: '15 分钟城市的兴起',
    stage: '阶段四 · 中级提高',
    stageRange: '第 31–40 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 465 词'
      },
      {
        k: '新词密度',
        v: '约 5.2%'
      },
      {
        k: '长难句',
        v: '4 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/036.jpg',
    coverCredit: 'Photo: Wahyu Prabowo / Pexels',
    body: [
      'Old plans cut the city into three pieces: homes, offices, and <span class="w-rev">distance</span> in between; the 15-minute city <span class="w-cet4" data-cn="提出（方案、设想）">proposes</span> a different shape. The idea is simple: daily needs — a bakery, a clinic, a park — should be reachable <span class="w-phrase" data-cn="步行">on foot</span> or by bike within a quarter of an hour of home.',
      'Where does the number come from? Fifteen minutes is a <span class="w-cet4" data-cn="门槛、临界点">threshold</span> rather than a rule: it matches the length of walk most people accept without complaint. <span class="w-phrase" data-cn="……的核心">At the heart of</span> the model lies a claim about <span class="w-rev">habit</span>: distance shapes what we do daily, far more than intention does.',
      'When a supermarket sits ten minutes away, people <span class="w-cet4" data-cn="散步、溜达">stroll</span> <span class="w-phrase" data-cn="而不是">instead of</span> driving; the trip doubles as exercise. <span class="w-sentence">Doctors have long asked patients to schedule workouts, but a city that makes walking the easiest option does the same work without asking anyone.</span> <span class="w-cet4" data-cn="越来越多地">Increasingly</span>, planners treat health as a product of street design.',
      'A second gain is <span class="w-cet4" data-cn="使用、获取的机会">access</span> itself. When shops and <span class="w-rev">services</span> sit inside the <span class="w-cet4" data-cn="城区、街区">district</span>, money stays <span class="w-rev">local</span> rather than leaking to <span class="w-synonym" data-cn="＝ faraway 的替换词">distant</span> chains, and owners gain regular customers. New uses <span class="w-cet4" data-cn="出现、兴起">emerge</span> on quiet streets — a garage becomes a bakery — so residents find what they need <span class="w-phrase" data-cn="以及、还">as well as</span> neighbors they never met.',
      'The <span class="w-rev">environment</span> gains too: shorter trips let a city <span class="w-rev">replace</span> parking bays with trees, and higher <span class="w-cet4" data-cn="密度">density</span> means fewer cars per <span class="w-cet4" data-cn="街区">block</span>; the city can even <span class="w-cet4" data-cn="扭转、逆转">reverse</span> a car-first trend. <span class="w-sentence">Where cars once passed quickly, children now play, and the change costs little more than paint, planters and a decision.</span>',
      '<span class="w-writing" data-cn="这并不是说……">This is not to say that</span> the plan is <span class="w-cet4" data-cn="可行的">feasible</span> everywhere. The <span class="w-synonym" data-cn="＝ strongest 的替换词">sharpest</span> <span class="w-rev">concern</span> is fairness: when a run-down block turns fashionable, rents rise, and the barbers who gave it character can no longer <span class="w-rev">afford</span> the rent. Critics warn that a quarter-hour utopia can become a gated club.',
      'Real cities <span class="w-cet4" data-cn="依靠、依赖">rely</span> on rules, not slogans. A <span class="w-cet4" data-cn="功能区、分区">zone</span> that keeps shops out of the ground floor will never <span class="w-phrase" data-cn="变成">turn into</span> a village, and the staff who run the clinic still <span class="w-cet4" data-cn="通勤">commute</span> in from far away. The <span class="w-rev">challenge</span> is plain: every promise must be paid for, staffed and spread step by step.',
      'Early evidence is mixed but honest. Where a <span class="w-cet4" data-cn="紧凑的">compact</span> core already exists, the idea can <span class="w-phrase" data-cn="扎根、落地">take root</span> quickly. <span class="w-sentence">Cities that have tried the model report fewer short car trips, though none has completed the quarter-hour radius.</span> Supporters point out that early results have <span class="w-cet4" data-cn="鼓舞、激发">inspired</span> similar pledges, and what they can <span class="w-cet4" data-cn="预测">predict</span> is demand.',
      '<span class="w-writing" data-cn="换句话说、简单来说">Put simply,</span> the 15-minute city is less a blueprint than a question: how much of your city do you actually use? The <span class="w-cet4" data-cn="必不可少的">essential</span> test is not speed but access: what an ordinary resident can reach without a car. <span class="w-sentence">A resident who can reach a doctor, a park and a school without a car lives in a different city.</span>'
    ],
    translation: [
      '旧规划把城市切成三块：住宅、办公，中间隔着距离；15 分钟城市提出了另一种形状。道理很简单：日常所需——一家面包店、一间诊所、一座公园——应当步行或骑车，从家出发一刻钟之内就能到达。',
      '这个数字从哪来？十五分钟是一道门槛，而不是一条规矩：它正好符合大多数人愿意走、也不会抱怨的距离。这套模式的核心是一个关于习惯的判断：决定我们每天做什么的，与其说是意愿，不如说是距离。',
      '超市在十分钟路程外，人们就会散步过去而不是开车；这趟路本身就相当于锻炼。医生长期以来只是叮嘱病人安排锻炼，而一座让步行成为最省事选项的城市，不用开口就把同样的事做完了。越来越多的城市设计者把健康看成街道设计的结果。',
      '第二个好处是通达本身。当商店和公共服务落在城区之内，钱就留在本地，不再流向远处的连锁店，店主也有了回头客。安静的街上会冒出新的用途——车库变成面包房——于是居民不但找得到所需的东西，还认识了原本陌生的邻居。',
      '环境同样受益：出行变短，城市可以用树取代停车位，更高的密度意味着每个街区更少的车；这座城市甚至可以扭转「车优先」的老趋势。过去车流疾驰的地方，如今有孩子在玩耍，而这次改变的成本不过是油漆、花箱和一个决定。',
      '这并不是说这套方案在哪儿都行得通。最大的担忧是公平：一片破败的街区一旦变得时髦，租金就会上涨，而当年赋予这个地方性格的理发师们，再也付不起房租。批评者警告说，一刻钟的乌托邦可能变成一座封闭式的俱乐部。',
      '城市靠的是规则，不是口号。禁止底层开店的功能区，永远不会变成一个村庄；而坐诊的医护人员，仍然要从很远的地方通勤过来。挑战很明白：每一个承诺都要有钱、有人，并且一个城区一个城区、一步一步地铺开。',
      '早期的证据好坏参半，但还算诚实。在本来就紧凑的核心区，这个想法能迅速扎根。试过该模式的城市报告短途驾车出行减少，不过还没有哪座城市走完一刻钟的半径。支持者指出，早期成果已经激发了类似的承诺，而他们能够预测的是需求。',
      '简单来说，15 分钟城市与其说是一张蓝图，不如说是一个问题：你真正用到的城市有多少？关键的检验不是速度而是通达：一个普通居民不开车能到达什么。一个不坐汽车就能走到医生、公园和学校的居民，生活在另一座城市。'
    ],
    vocabulary: [
      {
        w: 'propose',
        ph: '/prəˈpəʊz/',
        pos: 'v.',
        cn: '提出、提议',
        col: 'propose a target — 提出目标；propose a plan — 提出方案',
        ex: 'The city proposed a new target.'
      },
      {
        w: 'threshold',
        ph: '/ˈθreʃhəʊld/',
        pos: 'n.',
        cn: '门槛、临界点',
        col: 'cross the threshold — 跨过门槛；a practical threshold — 现实的门槛',
        ex: 'Fifteen minutes is a threshold most people accept.'
      },
      {
        w: 'stroll',
        ph: '/strəʊl/',
        pos: 'v./n.',
        cn: '散步、溜达',
        col: 'stroll to the shops — 溜达着去商店；go for a stroll — 去散散步',
        ex: 'People stroll to the market after dinner.'
      },
      {
        w: 'increasingly',
        ph: '/ɪnˈkriːsɪŋli/',
        pos: 'adv.',
        cn: '越来越多地',
        col: 'increasingly common — 越来越常见；increasingly important — 越来越重要',
        ex: 'The idea is increasingly common in big cities.'
      },
      {
        w: 'access',
        ph: '/ˈækses/',
        pos: 'n.',
        cn: '使用（机会）、通达',
        col: 'access to services — 获得服务的机会；easy access — 便利的通达条件',
        ex: 'Fair access matters more than distance.'
      },
      {
        w: 'district',
        ph: '/ˈdɪstrɪkt/',
        pos: 'n.',
        cn: '区、城区',
        col: 'each district — 每个城区；the shopping district — 商业区',
        ex: 'Each district has its own clinic.'
      },
      {
        w: 'emerge',
        ph: '/ɪˈmɜːdʒ/',
        pos: 'vi.',
        cn: '出现、兴起',
        col: 'new uses emerge — 出现新用途；emerge as — 作为……出现',
        ex: 'New shops emerge on quiet streets.'
      },
      {
        w: 'density',
        ph: '/ˈdensəti/',
        pos: 'n.',
        cn: '密度',
        col: 'population density — 人口密度；higher density — 更高的密度',
        ex: 'High density makes short trips possible.'
      },
      {
        w: 'block',
        ph: '/blɒk/',
        pos: 'n.',
        cn: '街区',
        col: 'one block away — 隔一个街区；a run-down block — 破败的街区',
        ex: 'The café is one block from the school.'
      },
      {
        w: 'reverse',
        ph: '/rɪˈvɜːs/',
        pos: 'v./n.',
        cn: '扭转、逆转',
        col: 'reverse a trend — 扭转趋势；reverse the roles — 角色对调',
        ex: 'The city reversed a car-first trend.'
      },
      {
        w: 'feasible',
        ph: '/ˈfiːzəbl/',
        pos: 'adj.',
        cn: '可行的',
        col: 'feasible plan — 可行的计划；economically feasible — 经济上可行',
        ex: 'The plan is feasible only where density exists.'
      },
      {
        w: 'rely',
        ph: '/rɪˈlaɪ/',
        pos: 'vi.',
        cn: '依靠、依赖',
        col: 'rely on rules — 依靠规则；rely heavily on — 严重依赖',
        ex: 'Cities rely on rules, not slogans.'
      },
      {
        w: 'zone',
        ph: '/zəʊn/',
        pos: 'n.',
        cn: '区、功能区',
        col: 'a mixed-use zone — 混合功能区；zone rules — 分区规则',
        ex: 'The zone allows shops on the ground floor.'
      },
      {
        w: 'commute',
        ph: '/kəˈmjuːt/',
        pos: 'vi./n.',
        cn: '通勤',
        col: 'commute from far away — 从远处通勤；daily commute — 每天的通勤',
        ex: 'The nurses commute across the city.'
      },
      {
        w: 'compact',
        ph: '/kəmˈpækt/',
        pos: 'adj.',
        cn: '紧凑的、密集的',
        col: 'a compact neighborhood — 紧凑的街区；compact design — 紧凑的设计',
        ex: 'A compact city needs fewer long trips.'
      },
      {
        w: 'inspire',
        ph: '/ɪnˈspaɪə/',
        pos: 'vt.',
        cn: '鼓舞、激发',
        col: 'inspire similar pledges — 激发类似的承诺；inspire confidence — 激发信心',
        ex: 'Early results inspired three more cities.'
      },
      {
        w: 'predict',
        ph: '/prɪˈdɪkt/',
        pos: 'vt./vi.',
        cn: '预测',
        col: 'predict demand — 预测需求；hard to predict — 难以预测',
        ex: 'Nobody can predict how many will come.'
      },
      {
        w: 'essential',
        ph: '/ɪˈsenʃl/',
        pos: 'adj.',
        cn: '必不可少的、基本的',
        col: 'essential services — 基本公共服务；absolutely essential — 绝对必要',
        ex: 'Access to a clinic is essential.'
      }
    ],
    phrases: [
      {
        en: 'on foot',
        cn: '步行',
        ex: 'The clinic is ten minutes on foot.'
      },
      {
        en: 'at the heart of',
        cn: '……的核心',
        ex: 'At the heart of the plan is a simple claim.'
      },
      {
        en: 'take root',
        cn: '扎根、落地',
        ex: 'The idea took root in a few districts.'
      },
      {
        en: 'point out',
        cn: '指出',
        ex: 'Supporters point out that the results are early.'
      },
      {
        en: 'turn into',
        cn: '变成',
        ex: 'A quiet street can turn into a market.'
      },
      {
        en: 'instead of',
        cn: '而不是',
        ex: 'People walk instead of driving.'
      },
      {
        en: 'as well as',
        cn: '以及、还',
        ex: 'The plan brings shops as well as parks.'
      },
      {
        en: 'a quarter of an hour',
        cn: '一刻钟',
        ex: 'Everything sits a quarter of an hour from home.'
      },
      {
        en: 'far from',
        cn: '远非、完全不是',
        ex: 'The result is far from perfect.'
      },
      {
        en: 'step by step',
        cn: '循序渐进地',
        ex: 'The city changed the zone step by step.'
      }
    ],
    writings: [
      {
        expr: 'This is not to say that ...',
        cn: '这并不是说……',
        meaning: '先承认一个说法，再把它限制在合理范围内，避免读者走向极端。',
        context: '放在让步或反驳段的开头，紧跟前文讲过的优点或缺点。',
        alts: [
          {
            t: 'That does not mean ...',
            n: '更简洁，口语书面通用'
          },
          {
            t: 'It does not follow that ...',
            n: '偏书面，强调推不出结论'
          },
          {
            t: '…, though it is fair to say ...',
            n: '语气更缓，先让一步'
          }
        ],
        register: '中性偏书面。',
        example: 'The plan saves time. This is not to say that it works in every city.'
      },
      {
        expr: 'Put simply, ...',
        cn: '换句话说、简单来说',
        meaning: '把前面复杂的论述压缩成一句大白话，帮读者抓住重点。',
        context: '用于段落或全文结尾，把抽象讨论落到一句记得住的话上。',
        alts: [
          {
            t: 'In short, ...',
            n: '更常用于总结全段'
          },
          {
            t: 'Simply put, ...',
            n: '语序更地道'
          },
          {
            t: 'To put it another way, ...',
            n: '更长、更正式'
          }
        ],
        register: '中性，口语与书面通用。',
        example: 'Put simply, the plan is about time, not about speed.'
      }
    ],
    sentences: [
      {
        text: 'Doctors have long asked patients to schedule workouts, but a city that makes walking the easiest option does the same work without asking anyone.',
        points: [
          '<b>主干</b>：but 连接两个并列分句，前半是 Doctors have asked patients to schedule workouts，后半是 a city … does the same work。',
          '<b>定语从句</b>：a city that makes walking the easiest option 中 that 在从句里作主语，修饰 city。',
          '<b>两个结构并列</b>：ask sb. to do 用不定式，make + 宾语 + 宾补（makes walking the easiest option）用「动名词 + 补足语」，最容易照抄。',
          '<b>the same work</b>：the same … 表示「同样的事」，work 在此是不可数名词「功夫、工作量」。',
          '<b>为什么值得学</b>：一句把「医生劝」和「城市替你做到」对比出来，是「环境比意志力更管用」这类议论文的标准句式。'
        ]
      },
      {
        text: 'Where cars once passed quickly, children now play, and the change costs little more than paint, planters and a decision.',
        points: [
          '<b>主干</b>：Where cars once passed quickly 是地点状语从句前置，主句是 children now play，后接 and 引出的第二个分句。',
          '<b>once 与 now 的对照</b>：同一个地点用两个时间副词切换，先写过去、再写现在，画面自然翻转。',
          '<b>cost little more than …</b>：表示「花费不过是……」，little 是否定意味的量词，比 not much 更书面。',
          '<b>三个名词并列</b>：paint, planters and a decision 由具体到抽象，最后一项 a decision 暗示缺的其实只是决心。',
          '<b>为什么值得学</b>：这是「低成本改造」论证的收尾句，写作里谈可行性和成本时可以直接套用。'
        ]
      },
      {
        text: 'Cities that have tried the model report fewer short car trips, though none has completed the quarter-hour radius.',
        points: [
          '<b>主干</b>：Cities report fewer … trips；句尾 though 引导让步从句，先给证据、再收一句限定。',
          '<b>现在完成时</b>：that have tried the model 用现在完成时，强调「试过并且仍有影响」，与主句的一般现在时搭配。',
          '<b>fewer 与 less</b>：trips 是可数名词复数，必须用 fewer；不可数名词才用 less。',
          '<b>none has completed</b>：none 作主语时谓语用单数或复数均可，正式书面语里多用 has。',
          '<b>为什么值得学</b>：让步结构让证据显得克制可信，是数据类作文里最实用的语气控制手段。'
        ]
      },
      {
        text: 'A resident who can reach a doctor, a park and a school without a car lives in a different city.',
        points: [
          '<b>主干</b>：A resident … lives in a different city；who can reach … 是限制性定语从句，修饰 resident。',
          '<b>平行结构</b>：a doctor, a park and a school 三项并列，由小到大列出日常生活半径。',
          '<b>介词短语收尾</b>：without a car 放在句末，先说「能到什么」，再补「用什么方式」，节奏更有力。',
          '<b>为什么值得学</b>：同一张地图、两种城市的对比，是结尾升华的高级写法，可仿写成 A student who … lives in a different school from …。',
          '<b>常见变体</b>：who can reach 可换成 who has access to；without a car 也可换成 if he never drives。'
        ]
      }
    ],
    questions: [
      {
        en: 'According to paragraph 1, what does the 15-minute idea claim about daily needs?',
        cn: '根据第一段，15 分钟城市的构想对日常所需提出了什么主张？',
        ans: 'They should be reachable on foot or by bike within a quarter of an hour of home.',
        ansCn: '日常所需应当从家出发，步行或骑车一刻钟之内就能到达。'
      },
      {
        en: 'What happens when shops and services sit inside the district, according to paragraph 4?',
        cn: '根据第四段，当商店和服务落在城区之内时会发生什么？',
        ans: 'Money stays local instead of leaking to distant chains, owners gain regular customers, and new uses emerge on quiet streets.',
        ansCn: '钱留在本地而不再流向远处的连锁店，店主有了回头客，安静的街上也冒出新的用途。'
      },
      {
        en: 'What can be inferred about the staff who run the new clinics?',
        cn: '关于那些坐诊新诊所的医护人员，可以推出什么？',
        ans: 'They still commute in from far away, so the model reduces some car trips but does not remove long journeys for workers.',
        ansCn: '他们仍然要从很远的地方通勤，所以这个模式减少了部分驾车出行，却没能消除上班族的长途奔波。'
      },
      {
        en: 'Why does the writer mention that children now play where cars once passed?',
        cn: '作者为什么提到「过去车流疾驰的地方如今有孩子在玩耍」？',
        ans: 'To show how cheaply a street built for cars can be turned into a place for people, supporting the paragraph’s claim that a city can trade parking for public space at little cost.',
        ansCn: '为了说明一条为车而修的街可以多么便宜地变成供人停留的地方，从而支撑本段「城市能用很小的代价拿停车位换公共空间」的观点。'
      },
      {
        en: 'What is the writer’s attitude towards the 15-minute city?',
        cn: '作者对「15 分钟城市」持什么态度？',
        ans: 'Supportive but cautious: he presents real gains in access, health and local life, while warning about fairness and practical limits, and treats the idea as a question rather than a finished blueprint.',
        ansCn: '支持但谨慎：作者肯定它在通达、健康和本地生活上的实际好处，同时提醒公平性与现实限制，把它当作一个问题而不是完工的蓝图。'
      }
    ],
    writingTask: {
      en: 'Write 100–120 words about whether your neighborhood could become a 15-minute area: what you can already reach on foot, what is missing, and what should change first.',
      hints: [
        'In my neighborhood, ... is ... minutes on foot.',
        'This is not to say that ...',
        'What is missing is ...',
        'Put simply, ...'
      ],
      hintCn: '用 6–8 句话评估你所在的社区能不能成为「15 分钟社区」：先写步行可达的东西，再写缺什么，最后写最该先改变的一件事。可达、缺口、改变三要素要齐全。',
      req: '至少使用 1 个本篇学过的词或搭配（access / district / on foot / turn into / put simply）。'
    },
    speakingTask: {
      en: 'Speak for one minute about whether your neighborhood is already a 15-minute area: give your opinion, one reason and one example.',
      points: [
        'Your opinion',
        'One reason',
        'One example from your neighborhood'
      ],
      pointCn: '先明确说你的社区算不算「15 分钟社区」，再给一个理由，最后举一个自己生活里的例子，三部分都要有。',
      skeleton: 'In my opinion, my neighborhood is / is not a 15-minute area. That is because ... For example, last week I ...'
    },
    focus: [
      '<b>新授核心词 18 个</b>：<span class=\'en\'>propose, threshold, stroll, increasingly, access, district, emerge, density, block, reverse, feasible, rely, zone, commute, compact, inspire, predict, essential</span> —— 这批词多与城市规划有关，重点记 <span class=\'en\'>access to services</span>（获得服务的机会）、<span class=\'en\'>rely on rules</span>（依靠规则）、<span class=\'en\'>reverse a trend</span>（扭转趋势）；<span class=\'en\'>propose</span> 的名词是 <span class=\'en\'>proposal</span>，<span class=\'en\'>feasible</span> 与 <span class=\'en\'>possible</span> 都表示「可行」，但 feasible 更强调条件允许，别混用。',
      '<b>本篇复现的旧词</b>：第 21 篇的 <span class=\'en\'>distance</span>（旧规划把城市切成三块、中间隔着距离）、第 26 篇的 <span class=\'en\'>habit</span>（距离塑造习惯）、第 25 篇的 <span class=\'en\'>local</span>（钱留在本地）与 <span class=\'en\'>services</span>（商店和服务就在城区里）、第 22 篇的 <span class=\'en\'>environment</span>（环境同样受益）、第 23 篇的 <span class=\'en\'>replace</span>（用树取代停车位）、第 26 篇的 <span class=\'en\'>concern</span>（最大的担忧是公平）、第 1 篇的 <span class=\'en\'>afford</span>（理发师付不起房租）、第 30 篇的 <span class=\'en\'>challenge</span>（挑战很明白）—— 共 9 处灰点，每个词只标一次。',
      '<b>四个长难句</b>：第一句是 but 连接的转折复合句，里面套了 a city that … 的定语从句与 ask sb. to do、make + 宾补 两个结构；第二句是 Where 地点状语从句前置，主句短促，后接 cost little more than … 的比较说法；第三句是 though 让步从句，先给证据再收一句限定，注意 fewer 修饰可数名词 trips；第四句是 who 定语从句 + 三项平行 + 介词短语收尾。四句分别承担「健康即设计」「低成本改造」「证据有限」「通达即差别」四种功能，值得各仿写一句。',
      '<b>高频搭配 6 个</b>：<span class=\'en\'>on foot</span>（步行）、<span class=\'en\'>at the heart of</span>（……的核心）、<span class=\'en\'>instead of</span>（而不是）、<span class=\'en\'>as well as</span>（以及、还）、<span class=\'en\'>turn into</span>（变成）、<span class=\'en\'>take root</span>（扎根）—— 注意 <span class=\'en\'>on foot</span> 用 on、<span class=\'en\'>by bike</span> 用 by，介词不同；<span class=\'en\'>instead of</span> 后接动名词；<span class=\'en\'>as well as</span> 连接的成分要平行。',
      '<b>全文逻辑线与题型提醒</b>：旧城市图景（引入）→ 十五分钟从哪来（依据）→ 健康（好处一）→ 本地经济（好处二）→ 环境（好处三）→ 公平的担忧（转折）→ 规则与通勤（现实条件）→ 证据（检验）→ 收束成一个问题。第 4 题是论证关系题，问「例子为哪个观点服务」，答案要看例子前后的观点句；第 5 题是态度题，找 though、can become 这类限定语，本文态度是「支持但谨慎」。'
    ],
    standard: {
      time: '约 42 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 18 个核心词遮住中文说出 ≥ 13 · 4 个长难句会拆结构 · 完成 100–120 词写作与 1 分钟口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 18 个核心词中的 13 个（threshold、district、feasible …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '10 个高频搭配掌握 7 个，能各造一句（on foot、at the heart of、take root …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 4 个长难句各自的主干与从句类型，并各仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；论证关系题与态度题要在原文找到依据',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 100–120 词，至少用上 This is not to say that … 或 Put simply, …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟按「观点→原因→例子」说清你的社区算不算 15 分钟社区',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 9 处灰点旧词，说出其中 6 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 37,
    slug: '037-a-short-history-of-the-umbrella',
    title: 'A Short History of the Umbrella',
    titleCn: '雨伞小史',
    stage: '阶段四 · 中级提高',
    stageRange: '第 31–40 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 475 词'
      },
      {
        k: '新词密度',
        v: '约 5.7%'
      },
      {
        k: '长难句',
        v: '4 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/037.jpg',
    coverCredit: 'Photo: Abhishek Yadav / Pexels',
    body: [
      'Some objects we notice; others we simply use. The <span class="w-rev">ordinary</span> umbrella belongs to the second group: a folding frame, a <span class="w-cet4" data-cn="材料">material</span> covering, a curved handle and little else. Because it asks so little of us, we rarely wonder what it has been through. Its history shows how a small object keeps changing, and how it changes us.',
      'The umbrella began as a sunshade. In ancient courts, servants held wide canopies over kings and priests to <span class="w-cet4" data-cn="保护、使免受">protect</span> them from the heat. The canopy soon became <span class="w-phrase" data-cn="……的象征">a symbol of</span> <span class="w-cet4" data-cn="地位、身份">status</span>, and it marked the person beneath it as someone above the crowd. Most people, of course, had neither servants nor <span class="w-cet4" data-cn="阴凉、遮蔽处">shade</span>.',
      'Using umbrellas against rain came later. In the seventeenth century a few travellers walked through wet streets under oiled frames, and the sight <span class="w-synonym" data-cn="＝ surprised 的替换词">puzzled</span> everyone who saw it. <span class="w-sentence">Although the umbrella had served travellers in the East for centuries, it reached northern Europe as a curiosity rather than a tool.</span> The idea was slow to <span class="w-phrase" data-cn="流行起来、被接受">catch on</span>: it was <span class="w-cet4" data-cn="（被）对待">treated</span> as a <span class="w-cet4" data-cn="花哨的、讲究的">fancy</span> toy.',
      '<span class="w-writing" data-cn="随着时间的推移">As time went on</span>, shops sold umbrellas beside hats and gloves, and men who once laughed at them bought one without a second thought. <span class="w-sentence">What had been a lady’s ornament became, within two generations, the habit of anyone who wished to reach the office with dry shoulders.</span> As streets filled, more of them <span class="w-cet4" data-cn="采用、采纳">adopted</span> the umbrella as a practical habit rather than a fashion.',
      'No one sat down to <span class="w-cet4" data-cn="发明">invent</span> the umbrella; it <span class="w-rev">gradually</span> drifted into use. <span class="w-sentence">Silk gave way to oiled paper and then to waxed cotton, each material a small compromise between weight, price and how many rainy seasons the cover would survive.</span> Paper covers were <span class="w-cet4" data-cn="笨拙的、不好用的">clumsy</span> in a strong wind, and every seam had to be <span class="w-cet4" data-cn="防水的">waterproof</span>ed by hand.',
      'The turning point was a frame that could <span class="w-cet4" data-cn="折叠、合拢">fold</span> into a short stick, which made the umbrella more <span class="w-rev">convenient</span> to <span class="w-cet4" data-cn="携带">carry</span>. Steel ribs bent thousands of times without breaking, so <span class="w-cet4" data-cn="工厂">factories</span> could <span class="w-cet4" data-cn="生产">produce</span> umbrellas <span class="w-phrase" data-cn="大量地、大批地">in large numbers</span> during the age of <span class="w-cet4" data-cn="大规模的、大批的">mass</span> production, and the price fell until almost anyone could <span class="w-rev">afford</span> a spare. Once a <span class="w-cet4" data-cn="奢侈品、奢华">luxury</span>, it now stood in every hallway.',
      '<span class="w-sentence">Not until the frame folded small enough to slip into a bag did the umbrella become an object that people carried every day.</span> Today an umbrella is <span class="w-rev">cheap</span> enough to be thrown away after one bad storm, and people take one along <span class="w-phrase" data-cn="不管晴雨">rain or shine</span>. Cities now try to <span class="w-rev">reduce</span> that waste, but the <span class="w-rev">environment</span> still pays for every umbrella that lasts one season.',
      '<span class="w-writing" data-cn="从这个意义上说">In this sense</span>, the umbrella is a small lesson: objects do not only serve us, we also remake them, and they quietly <span class="w-synonym" data-cn="＝ changed 的替换词">reshape</span> our days. To this day we <span class="w-phrase" data-cn="随身携带、走到带到">carry around</span> a folding cover against a sky we cannot control, and we call it <span class="w-rev">useful</span> because it asks so little of us.'
    ],
    translation: [
      '有些东西我们会留意，另一些我们只是用它。普通的雨伞属于后者：一副可折叠的骨架、一层包覆的材料、一个弯弯的手柄，此外几乎再没有别的。因为它向我们索取得极少，我们很少去想它经历过什么。它的历史让我们看到，一个小物件如何不断被改变，又如何反过来改变我们。',
      '雨伞最初是一把遮阳伞。在古代宫廷里，仆人把宽大的华盖举在国王和祭司头顶，替他们挡住热气。华盖很快成了地位的象征，把伞下的人标记成高人一等的人。而大多数人，当然既没有仆人，也没有阴凉。',
      '把伞用来挡雨是后来的事。十七世纪，少数旅行者撑着涂过油的伞骨走过湿漉漉的街道，见到这一幕的人都觉得不可思议。尽管伞在东方早已为旅行者遮风挡雨数百年，它抵达北欧时却只是新奇玩意，而不是工具。这个想法迟迟才流行开来：它被当成一件花哨的玩具，正经人谁也不需要。',
      '随着时间推移，商店把雨伞摆在帽子和手套旁边出售，那些曾经笑话它的人，如今不假思索就买了一把。曾经属于女士的饰物，只经过两代人，就成了每一个想干着肩膀走进办公室的人的习惯。随着出行增多、街道拥挤，更多人把雨伞当成实用的习惯，而不是时髦之物。',
      '从来没有人坐下来专门发明雨伞；它是一点点进入人们生活的。丝绸让位给油纸，油纸又让位给蜡棉，每一种材料都是在重量、价格与伞面能熬过几个雨季之间做出的小取舍。纸伞面在大风里笨拙不听使唤，每一条接缝都得靠手工做防水处理。',
      '关键的转折是一副能折成短棍的骨架，这让雨伞携带起来方便多了。钢骨被弯折上千次也不会断裂，于是在大规模生产的时代，工厂得以大批量造伞，价格一路下跌，几乎人人都买得起一把备用。曾经的奢侈品，如今立在每家门厅的角落。',
      '直到伞架能折小到塞进包里，雨伞才成为人们天天带在身上的东西。今天一把伞便宜到一场大风就能扔掉，人们不管晴雨都会带上一把。城市现在想减少这种浪费，但那些只撑了一个雨季的伞，代价仍然由环境来付。',
      '从这个意义上说，雨伞是一堂小小的课：物品并不只是为人服务，我们也在重塑它们，而它们又在不知不觉间重塑我们的日子。直到今天，我们随身带着一副可折叠的遮蔽物，去应付一片我们无法掌控的天空；我们说它有用，恰恰因为它向我们索取得极少。'
    ],
    vocabulary: [
      {
        w: 'shade',
        ph: '/ʃeɪd/',
        pos: 'n.',
        cn: '阴凉、遮蔽处',
        col: 'in the shade — 在阴凉处；find shade — 找到阴凉',
        ex: 'Most people had neither servants nor shade.'
      },
      {
        w: 'symbol',
        ph: '/ˈsɪmbəl/',
        pos: 'n.',
        cn: '象征、标志',
        col: 'a symbol of status — 地位的象征；become a symbol — 成为象征',
        ex: 'The canopy soon became a symbol of status.'
      },
      {
        w: 'status',
        ph: '/ˈsteɪtəs/',
        pos: 'n.',
        cn: '地位、身份、状况',
        col: 'status symbol — 身份象征；social status — 社会地位',
        ex: 'For centuries the umbrella marked the status of its owner.'
      },
      {
        w: 'protect',
        ph: '/prəˈtekt/',
        pos: 'vt.',
        cn: '保护、使免受',
        col: 'protect A from B — 保护 A 免受 B；protect the skin — 保护皮肤',
        ex: 'A wide canopy protects the king from the heat.'
      },
      {
        w: 'fold',
        ph: '/fəʊld/',
        pos: 'v.',
        cn: '折叠、合拢',
        col: 'fold the frame — 折叠伞架；fold up — 折起来',
        ex: 'The frame folds into a short stick.'
      },
      {
        w: 'material',
        ph: '/məˈtɪəriəl/',
        pos: 'n.',
        cn: '材料',
        col: 'a light material — 轻便的材料；raw material — 原材料',
        ex: 'Silk was the first material used for covers.'
      },
      {
        w: 'waterproof',
        ph: '/ˈwɔːtəpruːf/',
        pos: 'adj.',
        cn: '防水的',
        col: 'waterproof cloth — 防水布；make sth. waterproof — 使某物防水',
        ex: 'Every seam had to be waterproofed by hand.'
      },
      {
        w: 'carry',
        ph: '/ˈkæri/',
        pos: 'vt.',
        cn: '携带、运送',
        col: 'carry around — 随身携带；carry an umbrella — 带伞',
        ex: 'People carry one rain or shine.'
      },
      {
        w: 'fancy',
        ph: '/ˈfænsi/',
        pos: 'adj.',
        cn: '花哨的、讲究的',
        col: 'a fancy toy — 花哨的玩意儿；fancy clothes — 讲究的衣服',
        ex: 'People treated it as a fancy toy.'
      },
      {
        w: 'luxury',
        ph: '/ˈlʌɡʃəri/',
        pos: 'n.',
        cn: '奢华、奢侈品',
        col: 'a luxury item — 奢侈品；no longer a luxury — 不再是奢侈品',
        ex: 'For centuries an umbrella was a luxury.'
      },
      {
        w: 'adopt',
        ph: '/əˈdɒpt/',
        pos: 'vt.',
        cn: '采用、采纳',
        col: 'adopt a habit — 养成习惯；adopt an idea — 采纳想法',
        ex: 'More people adopted the umbrella as a habit.'
      },
      {
        w: 'factory',
        ph: '/ˈfæktəri/',
        pos: 'n.',
        cn: '工厂',
        col: 'a factory worker — 工厂工人；in the factory — 在工厂里',
        ex: 'Factories could produce umbrellas in large numbers.'
      },
      {
        w: 'mass',
        ph: '/mæs/',
        pos: 'n./adj.',
        cn: '大量；大规模的',
        col: 'mass production — 大规模生产；a mass of — 大量的',
        ex: 'Mass production pushed the price down.'
      },
      {
        w: 'produce',
        ph: '/prəˈdjuːs/',
        pos: 'vt.',
        cn: '生产、出产',
        col: 'produce goods — 生产商品；produce in large numbers — 大批量生产',
        ex: 'Factories produce umbrellas in large numbers.'
      },
      {
        w: 'invent',
        ph: '/ɪnˈvent/',
        pos: 'vt.',
        cn: '发明',
        col: 'invent a machine — 发明机器；be invented in — 在……被发明',
        ex: 'No one ever sat down to invent the umbrella.'
      },
      {
        w: 'treat',
        ph: '/triːt/',
        pos: 'vt.',
        cn: '对待；招待',
        col: 'treat A as B — 把 A 当作 B；treat sb. well — 对某人好',
        ex: 'People treated it as a fancy toy.'
      },
      {
        w: 'clumsy',
        ph: '/ˈklʌmzi/',
        pos: 'adj.',
        cn: '笨拙的、不好用的',
        col: 'a clumsy movement — 笨拙的动作；clumsy in wind — 大风里不听使唤',
        ex: 'Paper covers were clumsy in a strong wind.'
      }
    ],
    phrases: [
      {
        en: 'a symbol of',
        cn: '……的象征',
        ex: 'The canopy was a symbol of status in the court.'
      },
      {
        en: 'catch on',
        cn: '流行起来、被接受',
        ex: 'The idea was slow to catch on in Europe.'
      },
      {
        en: 'in large numbers',
        cn: '大量地、大批地',
        ex: 'Factories produced umbrellas in large numbers.'
      },
      {
        en: 'rain or shine',
        cn: '不管晴雨',
        ex: 'People take one umbrella along rain or shine.'
      },
      {
        en: 'carry around',
        cn: '随身携带、走到带到',
        ex: 'We carry around a folding cover against the rain.'
      },
      {
        en: 'give way to',
        cn: '让位于、被……取代',
        ex: 'Silk gave way to oiled paper and then to cotton.'
      },
      {
        en: 'to this day',
        cn: '直到今天',
        ex: 'To this day we keep an umbrella by the door.'
      },
      {
        en: 'rather than',
        cn: '而不是',
        ex: 'It reached Europe as a curiosity rather than a tool.'
      },
      {
        en: 'without a second thought',
        cn: '不假思索地',
        ex: 'He bought one without a second thought.'
      },
      {
        en: 'by hand',
        cn: '用手工、靠手',
        ex: 'Every seam had to be sealed by hand.'
      }
    ],
    writings: [
      {
        expr: 'As time went on, ...',
        cn: '随着时间的推移……',
        meaning: '按时间顺序推进叙述或说明，表示某个变化是逐渐发生的。',
        context: '历史类、过程类说明文的段首，用来交代「后来怎样了」，比 later 更有推进感。',
        alts: [
          {
            t: 'Over time, ...',
            n: '更简洁'
          },
          {
            t: 'With time passing, ...',
            n: '更书面'
          },
          {
            t: 'In the years that followed, ...',
            n: '强调「随后那些年」'
          }
        ],
        register: '中性，书面口语都自然。',
        example: 'As time went on, shops began to sell umbrellas beside hats and gloves.'
      },
      {
        expr: 'In this sense, ...',
        cn: '从这个意义上说……',
        meaning: '对前文做一次收束式的概括，把具体现象提升到一般结论。',
        context: '结尾段开头，先总结事实，再用它带出立意句。',
        alts: [
          {
            t: 'In that respect, ...',
            n: '就这一点而言'
          },
          {
            t: 'Seen this way, ...',
            n: '换这样看'
          },
          {
            t: 'So in a way, ...',
            n: '口语化'
          }
        ],
        register: '中性偏书面，适合说明与议论收尾。',
        example: 'In this sense, the umbrella shows how objects quietly shape our days.'
      }
    ],
    sentences: [
      {
        text: 'Although the umbrella had served travellers in the East for centuries, it reached northern Europe as a curiosity rather than a tool.',
        points: [
          '<b>主干</b>：it reached northern Europe as a curiosity rather than a tool；句首 Although 引导让步状语从句。',
          '<b>让步 + 对比</b>：Although …（尽管……）先承认东方早已使用，后半句用 rather than（而不是）把「新奇玩意」与「工具」对立起来，转折关系一目了然。',
          '<b>时态配合</b>：从句用过去完成时 had served，表示「到达之前已经服务了很久」；主句用一般过去时 reached，两个时态标出先后顺序。',
          '<b>为什么值得学</b>：写「外来事物进入本地」的说明句常用这个模型：让步从句交代背景，主句给结论，末尾用 rather than 点明反差。'
        ]
      },
      {
        text: 'What had been a lady’s ornament became, within two generations, the habit of anyone who wished to reach the office with dry shoulders.',
        points: [
          '<b>主干</b>：What had been a lady’s ornament（主语从句）+ became（谓语）+ the habit（表语）。',
          '<b>What 引导主语从句</b>：What 相当于 the thing that，「曾经是女士饰物的东西」整体作主语，谓语用单数 became。',
          '<b>插入语 within two generations</b>：两个逗号之间的部分是插入的时间状语，位置可以挪到句首，句子照样成立。',
          '<b>who wished to …</b>：定语从句修饰 anyone，to reach … 是 wish 的宾语，末尾的 with dry shoulders 说明目的。',
          '<b>为什么值得学</b>：一句话写出「身份变化 + 时间跨度 + 使用人群」三层信息，写社会风俗变迁时可以直接仿写。'
        ]
      },
      {
        text: 'Silk gave way to oiled paper and then to waxed cotton, each material a small compromise between weight, price and how many rainy seasons the cover would survive.',
        points: [
          '<b>主干</b>：Silk gave way to oiled paper and then to waxed cotton；后面是补充说明的同位语。',
          '<b>give way to</b>：让位于、被……取代，描述材料更替比用 replace 更有画面感。',
          '<b>同位语结构</b>：each material a small compromise … 是「名词 + 名词短语」的同位语，省略了 being，写作里可用来给前文补一句评价。',
          '<b>how many 引导的从句</b>：between A, B and how many … survive，最后一个并列成分是名词性从句，说明取舍的第三项标准。',
          '<b>为什么值得学</b>：说明「技术演进」时，先列变化，再用同位语点出取舍，结构紧凑且信息量大。'
        ]
      },
      {
        text: 'Not until the frame folded small enough to slip into a bag did the umbrella become an object that people carried every day.',
        points: [
          '<b>主干</b>：the umbrella became an object that people carried every day；否定词 Not until 提到句首引起部分倒装。',
          '<b>部分倒装</b>：Not until … 放句首时，主句用「助动词 + 主语 + 动词原形」，即 did the umbrella become，这是强调句式的初步形式。',
          '<b>small enough to slip into</b>：enough 修饰形容词要后置，「小到可以塞进包里」，to slip into 是结果状语。',
          '<b>that 定语从句</b>：修饰 an object，从句里 carried 的宾语就是 that，译作「人们天天带在身上的东西」。',
          '<b>为什么值得学</b>：想突出「直到某个条件出现，事情才发生」，把 Not until 提到句首倒装，比平铺直叙有力得多。'
        ]
      }
    ],
    questions: [
      {
        en: 'Why did the canopy become a symbol of status in ancient courts?',
        cn: '古代宫廷里，华盖为什么成了地位的象征？',
        ans: 'Because servants held it over kings and priests to protect them from the heat, while most people could neither afford one nor get any shade.',
        ansCn: '因为仆人把它举在国王和祭司头顶替他们挡热气，而大多数人既买不起，也得不到阴凉。'
      },
      {
        en: 'What made it possible for factories to produce umbrellas in large numbers?',
        cn: '是什么让工厂能够大批量生产雨伞？',
        ans: 'A frame that could fold into a short stick, with steel ribs that could be bent thousands of times without breaking.',
        ansCn: '一副能折成短棍的伞架，以及能弯折上千次而不断的钢骨。'
      },
      {
        en: 'What can be inferred about umbrellas today from paragraph 7?',
        cn: '从第七段可以推断出关于今天雨伞的什么结论？',
        ans: 'Their low price hides a real cost: they are thrown away after one storm, and the environment pays for that waste.',
        ansCn: '便宜的价格掩盖了真实的代价：伞撑过一场风暴就被扔掉，而这份浪费最终由环境买单。'
      },
      {
        en: 'How does paragraph 5 support the idea that the umbrella has been changed?',
        cn: '第五段是如何支撑「雨伞被不断改变」这一观点的？',
        ans: 'It lists the cover changing from silk to oiled paper to waxed cotton, and each material is a compromise, showing that new materials remade the object.',
        ansCn: '它列举伞面从丝绸到油纸再到蜡棉的变化，并指出每种材料都是一次取舍，说明是新材料在重塑这件物品。'
      },
      {
        en: 'What is the writer’s purpose in the last paragraph?',
        cn: '作者在最后一段的写作目的是什么？',
        ans: 'To show that ordinary objects both serve people and quietly reshape the way they live.',
        ansCn: '说明日常物品既为人所用，也在不知不觉中改变人们的生活方式。'
      }
    ],
    writingTask: {
      en: 'Write 100–120 words about an everyday object that has changed over time, and how it changed the way people live.',
      hints: [
        'The ... was once ...',
        'As time went on, ...',
        'Each change was a compromise between ... and ...',
        'In this sense, ...'
      ],
      hintCn: '用 6–8 句话写一件日常物件的变迁：先写它最初的样子，再按时间写它被改变了什么，说明每次改变背后的取舍，最后用「从这个意义上说」收出立意。',
      req: '至少使用 2 个本篇学过的词或搭配（fold / produce / treat / adopt / in large numbers / rain or shine）。'
    },
    speakingTask: {
      en: 'Do you think a cheap umbrella that lasts only one season is a good buy? Speak for one minute: give your opinion, one reason and one example.',
      points: [
        'Your opinion',
        'One reason',
        'One example from daily life'
      ],
      pointCn: '先明确表态「值不值」，再给一个理由，最后举一个自己或身边人的小例子，三部分都要说到。',
      skeleton: 'In my opinion, it is not a good buy. That is because ... For example, last rainy season I ...'
    },
    focus: [
      '<b>新授核心词 17 个</b>：<span class=\'en\'>shade, symbol, status, protect, fold, material, waterproof, carry, fancy, luxury, adopt, factory, mass, produce, invent, treat, clumsy</span> —— 记住 <span class=\'en\'>protect A from B</span>（保护 A 免受 B）、<span class=\'en\'>treat A as B</span>（把 A 当作 B）、<span class=\'en\'>mass production</span>（大规模生产）；<span class=\'en\'>mass</span> 作定语时后面直接跟名词，<span class=\'en\'>factory</span> 的复数是 <span class=\'en\'>factories</span>，<span class=\'en\'>waterproof</span> 作动词时拼作 waterproofed。',
      '<b>本篇复现的旧词</b>：第 26 篇的 <span class=\'en\'>ordinary</span>（不起眼的）、第 21 篇的 <span class=\'en\'>gradually</span>（一点点进入生活）、第 2 篇的 <span class=\'en\'>convenient</span>（方便携带）、第 1 篇的 <span class=\'en\'>afford</span>（买得起）、第 4 篇的 <span class=\'en\'>cheap / useful</span>（便宜、有用）、第 8 篇的 <span class=\'en\'>reduce</span>（减少浪费）、第 22 篇的 <span class=\'en\'>environment</span>（环境）—— 共 8 处灰点，都是换了历史语境再认一次。',
      '<b>四个长难句</b>：第一句练 <span class=\'en\'>Although 让步从句 + rather than 对比</span>；第二句练 <span class=\'en\'>What 主语从句 + 插入语 + who 定语从句</span>；第三句练 <span class=\'en\'>give way to + 同位语</span>；第四句练 <span class=\'en\'>Not until 提前的部分倒装</span>（did the umbrella become）。四句分别承担「转折」「变化」「演进」「强调」四种功能，各仿写一句。',
      '<b>搭配与写作表达</b>：<span class=\'en\'>a symbol of</span>（……的象征）、<span class=\'en\'>catch on</span>（流行起来）、<span class=\'en\'>in large numbers</span>（大批量）、<span class=\'en\'>rain or shine</span>（不管晴雨）、<span class=\'en\'>carry around</span>（随身携带）是本篇五处绿色标注；写作里 <span class=\'en\'>As time went on, …</span> 推进时间线，<span class=\'en\'>In this sense, …</span> 收出结论。',
      '<b>全文逻辑线与题型提醒</b>：日常之物（引入）→ 遮阳与地位（起源）→ 挡雨被当成玩具（转折）→ 男女皆用（普及）→ 材料更替（被改变）→ 折叠与量产（被改变）→ 便宜与浪费（问题）→ 物品与人互相塑造（立意）。推断题答案落在第七段的「便宜到能扔」与「环境买单」；论证关系题看第五段用材料更替举证；写作目的题看末段的立意句。'
    ],
    standard: {
      time: '约 40 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 17 个核心词遮住中文说出 ≥ 13 · 4 个长难句会拆结构 · 完成 100–120 词写作与 1 分钟口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 17 个核心词中的 13 个（material、protect、status、mass、luxury …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '10 个高频搭配掌握 8 个，能各造一句（a symbol of、catch on、rain or shine …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 4 个长难句各自的主干与从句类型，并各仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；推断题与论证关系题要在原文找到依据',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 100–120 词，至少用上 As time went on, … 或 In this sense, …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟说清「一季就扔的伞值不值」的立场，给出一个理由和一个例子',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 8 处灰点旧词，说出其中 6 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 38,
    slug: '038-why-some-habits-never-stick',
    title: 'Why Some Habits Never Stick',
    titleCn: '为什么有些习惯坚持不下来',
    stage: '阶段四 · 中级提高',
    stageRange: '第 31–40 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 475 词'
      },
      {
        k: '新词密度',
        v: '约 5.7%'
      },
      {
        k: '长难句',
        v: '4 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/038.jpg',
    coverCredit: 'Photo: Jan Walter Luigi / Pexels',
    body: [
      'Each new year brings the same promise: from tomorrow I will run, read at night and stop buying snacks. <span class="w-rev">Habits</span> are begun with such confidence that quitting looks like a personal weakness. The truth is simpler: a habit that never sticks is usually <span class="w-rev">designed</span> badly, not wanted badly.',
      'The first mistake is to <span class="w-cet4" data-cn="依赖、依靠">rely</span> on <span class="w-cet4" data-cn="意志力">willpower</span>. Choosing again has a cost: each choice draws from a small pool of <span class="w-cet4" data-cn="动力、积极性">motivation</span>, which sleep, food and quiet refill. When the weather turns cold and the bed feels warm, the pool is half empty before the day has begun. <span class="w-writing" data-cn="难怪……">No wonder</span> February feels harder than January.',
      'Habits grow out of the room they live in. A phone on the desk is a <span class="w-cet4" data-cn="提示、信号">cue</span> that <span class="w-cet4" data-cn="触发、引发">trigger</span>s a reach; a biscuit jar does the same. <span class="w-sentence">If you leave the phone beside your pillow, you will reach for it before your eyes are properly open.</span> The rule: make the good action easy to see and the bad one hard to reach.',
      'The second strategy is stacking: put the new action after one you already do <span class="w-synonym" data-cn="＝ automatically 的替换词">without thinking</span>. After the coffee, open the book; after you sit, write one sentence. <span class="w-sentence">Because the old action comes first and cannot be forgotten, the new one no longer depends on memory or mood.</span> It joins an existing <span class="w-rev">routine</span> <span class="w-rev">instead</span> of competing with it, and need not start <span class="w-phrase" data-cn="从零开始">from scratch</span>.',
      'The third rule is the minimum version. Make the first step <span class="w-cet4" data-cn="极小的、微小的">tiny</span> and <span class="w-cet4" data-cn="现实可行的">realistic</span>: two minutes of stretching, one page, one dish. <span class="w-sentence">What looks like a small win is in fact the only version that survives a bad week, because intensity fades while consistency compounds.</span> A <span class="w-cet4" data-cn="能长期坚持的、可持续的">sustainable</span> habit beats a perfect one that lasts four days; the <span class="w-rev">challenge</span> is always week four.',
      'Missing one day is normal; the danger is the story built on it. Tell yourself you have failed, and you will <span class="w-rev">give up</span>. <span class="w-cet4" data-cn="批评、自我苛责">Criticism</span> makes restarting expensive: one missed morning becomes a <span class="w-synonym" data-cn="＝ final judgment 的替换词">verdict</span>, and the <span class="w-cet4" data-cn="挣扎、较劲">struggle</span> starts from nothing. Do not <span class="w-phrase" data-cn="自我苛责、狠狠责怪自己">beat yourself up</span> or <span class="w-cet4" data-cn="放弃、抛弃">abandon</span> the plan; notice what got in the way and <span class="w-phrase" data-cn="回到正轨">get back on track</span> tomorrow.',
      'How long until it feels <span class="w-cet4" data-cn="自动的、不假思索的">automatic</span>? Longer than any promise of three weeks. Repetition moves an action into the background, until you <span class="w-phrase" data-cn="坚持下去">keep at it</span> without effort. <span class="w-sentence">Once the action runs on its own, the question is no longer how much you want it but who you believe you are.</span> <span class="w-cet4" data-cn="练习、实践">Practice</span>, not mood, builds the <span class="w-cet4" data-cn="身份、认同">identity</span>; the <span class="w-rev">reward</span> is that it costs nothing.',
      'So better design is more <span class="w-rev">effective</span> than resolve: we <span class="w-cet4" data-cn="倾向于、往往会">tend</span> to do whatever the room makes easy. Small rules <span class="w-phrase" data-cn="逐步建立起来">build up</span> into a way of living, and the habit finally runs <span class="w-phrase" data-cn="自动进行、不假思索地">on autopilot</span>. <span class="w-writing" data-cn="要紧的是……">What matters is</span> not the size of the promise but the size of the first step, because a habit that survives a bad week beats a perfect plan.'
    ],
    translation: [
      '新的一年总会带来同一句承诺：从明天起，我跑步、晚上读书，再也不买零食。人们开始习惯时信心十足，好像放弃就说明自己软弱。事情其实更简单：一个坚持不下来的习惯，多半是设计得不好，而不是想要得不够。',
      '第一个错误，是指望意志力。每一次重新选择都要花钱：每个选择都从一小池动力里舀水，而池子靠睡眠、食物和安静来蓄满。天气转冷、被窝变暖的时候，一天还没开始，池子已经空了一半。难怪二月总比一月难熬。',
      '习惯长在它所处的房间里。桌上的手机是一个提示，一碰就会伸手；柜台上的饼干罐也一样。如果你把手机放在枕头边，还没完全睁开眼你就会去拿它。规矩是：让好动作容易被看见，让坏动作难以够到。',
      '第二个策略是叠加：把新动作放在你本来就会做的动作之后。咖啡倒好就翻开书；坐下就写一句话。因为旧动作先来，而且不会被忘掉，新动作就不再依赖记忆或心情。它加入已有的日常流程，而不是跟它抢地盘，也不必从零开始。',
      '第三条规矩是「最小版本」。把第一步做得极小、切合实际：两分钟拉伸、一页书、一只碗。看起来不起眼的小小胜利，其实是唯一能撑过糟糕一周的版本，因为劲头会消退，而坚持会累积。能一直坚持的习惯，胜过只撑四天的完美计划；难关总在第四周。',
      '漏掉一天很正常；危险的是围绕它编出来的故事。告诉自己「我失败了」，你就会放弃。自我苛责让重新开始变得昂贵：一个错过的早晨会变成判决，较劲又从零开始。别狠狠责怪自己，也别丢掉计划；看看是什么挡了路，第二天回到正轨。',
      '多久才能变得自动？比任何「三周见效」的承诺都久。重复会把一个动作推到背景里，直到你不费劲也能坚持下去。一旦动作自己会跑，问题就不再是「你多想要它」，而是「你认为自己是谁」。撑起这种身份的是练习，不是心情；回报是它一点都不费钱。',
      '所以，更好的设计比决心更管用：我们都会去做房间让我们容易做的事。小小的规矩一点点垒成一种生活方式，习惯最终自动运转。要紧的不是承诺有多大，而是第一步有多大，因为撑过糟糕一周的习惯，胜过一个完美计划。'
    ],
    vocabulary: [
      {
        w: 'willpower',
        ph: '/ˈwɪlpaʊə/',
        pos: 'n.',
        cn: '意志力',
        col: 'use willpower — 依靠意志力；a lack of willpower — 缺乏意志力',
        ex: 'Relying on willpower alone rarely works.'
      },
      {
        w: 'motivation',
        ph: '/ˌməʊtɪˈveɪʃn/',
        pos: 'n.',
        cn: '动力、积极性',
        col: 'lose motivation — 失去动力；a pool of motivation — 一份动力储备',
        ex: 'Motivation in February is never what it was in January.'
      },
      {
        w: 'rely',
        ph: '/rɪˈlaɪ/',
        pos: 'vi.',
        cn: '依赖、依靠',
        col: 'rely on sb./sth. — 依赖某人或某事；rely too much — 过度依赖',
        ex: 'Do not rely on willpower every morning.'
      },
      {
        w: 'cue',
        ph: '/kjuː/',
        pos: 'n.',
        cn: '提示、信号',
        col: 'a cue for — ……的提示；take the cue — 领会暗示',
        ex: 'A phone on the desk is a cue that triggers a reach.'
      },
      {
        w: 'trigger',
        ph: '/ˈtrɪɡə/',
        pos: 'v./n.',
        cn: '触发、引发',
        col: 'trigger a reaction — 引发反应；be triggered by — 由……触发',
        ex: 'The jar triggers a reach for a biscuit.'
      },
      {
        w: 'tiny',
        ph: '/ˈtaɪni/',
        pos: 'adj.',
        cn: '极小的、微小的',
        col: 'a tiny step — 极小的一步；tiny amounts — 极小的量',
        ex: 'Make the first step tiny enough that you cannot say no.'
      },
      {
        w: 'realistic',
        ph: '/ˌriːəˈlɪstɪk/',
        pos: 'adj.',
        cn: '现实可行的',
        col: 'a realistic goal — 现实的目标；be realistic about — 对……要现实',
        ex: 'Two minutes of stretching is a realistic start.'
      },
      {
        w: 'consistency',
        ph: '/kənˈsɪstənsi/',
        pos: 'n.',
        cn: '一贯性、坚持',
        col: 'build consistency — 建立一贯性；lack consistency — 缺乏持续',
        ex: 'Consistency compounds over months.'
      },
      {
        w: 'intensity',
        ph: '/ˈɪntənsəti/',
        pos: 'n.',
        cn: '强度、劲头',
        col: 'the intensity of — ……的强度；with intensity — 劲头十足地',
        ex: 'Intensity fades after the first week.'
      },
      {
        w: 'sustainable',
        ph: '/səˈsteɪnəbl/',
        pos: 'adj.',
        cn: '能长期坚持的、可持续的',
        col: 'a sustainable habit — 能长期坚持的习惯；sustainable effort — 可持续的投入',
        ex: 'A habit that is sustainable for a month beats a perfect plan.'
      },
      {
        w: 'criticism',
        ph: '/ˈkrɪtɪsɪzəm/',
        pos: 'n.',
        cn: '批评、自我苛责',
        col: 'self-criticism — 自我苛责；face criticism — 面对批评',
        ex: 'Criticism makes restarting expensive.'
      },
      {
        w: 'struggle',
        ph: '/ˈstrʌɡl/',
        pos: 'n./v.',
        cn: '挣扎、较劲',
        col: 'a struggle with — 与……的较劲；struggle to do sth. — 吃力地做某事',
        ex: 'The struggle starts again from nothing.'
      },
      {
        w: 'abandon',
        ph: '/əˈbændən/',
        pos: 'vt.',
        cn: '放弃、抛弃',
        col: 'abandon a plan — 放弃计划；abandon the idea — 打消念头',
        ex: 'Do not abandon the plan after one missed day.'
      },
      {
        w: 'identity',
        ph: '/aɪˈdentəti/',
        pos: 'n.',
        cn: '身份、认同',
        col: 'a sense of identity — 身份感；build an identity — 建立一种身份认同',
        ex: 'Practice is what builds the identity.'
      },
      {
        w: 'practice',
        ph: '/ˈpræktɪs/',
        pos: 'n./v.',
        cn: '练习、实践',
        col: 'daily practice — 每天的练习；put into practice — 投入实践',
        ex: 'Practice, not mood, keeps the habit going.'
      },
      {
        w: 'automatic',
        ph: '/ˌɔːtəˈmætɪk/',
        pos: 'adj.',
        cn: '自动的、不假思索的',
        col: 'automatic action — 自动发生的动作；become automatic — 变得不假思索',
        ex: 'After months, the action feels automatic.'
      },
      {
        w: 'tend',
        ph: '/tend/',
        pos: 'vi.',
        cn: '倾向于、往往会',
        col: 'tend to do sth. — 往往会做某事；toward — 趋向于',
        ex: 'We tend to do whatever the room makes easy.'
      }
    ],
    phrases: [
      {
        en: 'from scratch',
        cn: '从零开始',
        ex: 'You do not have to start from scratch.'
      },
      {
        en: 'beat yourself up',
        cn: '自我苛责、狠狠责怪自己',
        ex: 'Do not beat yourself up for one missed day.'
      },
      {
        en: 'get back on track',
        cn: '回到正轨',
        ex: 'Adjust the plan and get back on track the next morning.'
      },
      {
        en: 'build up',
        cn: '逐步建立起来',
        ex: 'Small rules build up into a way of living.'
      },
      {
        en: 'on autopilot',
        cn: '自动进行、不假思索地',
        ex: 'After a month the habit runs on autopilot.'
      },
      {
        en: 'keep at it',
        cn: '坚持下去',
        ex: 'Keep at it even when the week is bad.'
      },
      {
        en: 'a small win',
        cn: '一次小小的胜利',
        ex: 'Two minutes of stretching is a small win.'
      },
      {
        en: 'once and for all',
        cn: '彻底地、一劳永逸地',
        ex: 'She wanted to settle the question once and for all.'
      },
      {
        en: 'make sense',
        cn: '有道理、讲得通',
        ex: 'It makes sense to start smaller than you want.'
      },
      {
        en: 'day in, day out',
        cn: '日复一日',
        ex: 'Day in, day out, the same cue triggers the same reach.'
      }
    ],
    writings: [
      {
        expr: 'No wonder ...',
        cn: '难怪……',
        meaning: '承接前文给出的原因，说明某个结果毫不奇怪，语气自然且带一点共情。',
        context: '说明原因之后引出结果的那一句，用来替读者把因果关系点破。',
        alts: [
          {
            t: 'It is no surprise that ...',
            n: '更书面'
          },
          {
            t: 'Small wonder that ...',
            n: '同义，稍文雅'
          },
          {
            t: 'That explains why ...',
            n: '强调「这就解释了」'
          }
        ],
        register: '中性，口语书面都常用。',
        example: 'Motivation drops in February. No wonder so many habits stop there.'
      },
      {
        expr: 'What matters is ...',
        cn: '要紧的是……',
        meaning: '在若干并列因素中挑出真正重要的一项，用来收束段落、点明立意。',
        context: '结尾段或观点段，先摆出容易混淆的两件事，再用它指出重点。',
        alts: [
          {
            t: 'The point is ...',
            n: '更直接'
          },
          {
            t: 'What counts is ...',
            n: '同义替换'
          },
          {
            t: 'The thing to remember is ...',
            n: '更口语'
          }
        ],
        register: '中性偏书面，议论文常用。',
        example: 'What matters is not the size of the promise but the size of the first step.'
      }
    ],
    sentences: [
      {
        text: 'If you leave the phone beside your pillow, you will reach for it before your eyes are properly open.',
        points: [
          '<b>主干</b>：you will reach for it；句首 If 引导条件状语从句，句中 before 再接一个时间状语从句。',
          '<b>两层从句夹一个主句</b>：条件（if）给出情景，主句给出结果，before your eyes are properly open 把时间推到「还没睁眼」的一瞬——动作发生在意识清醒之前。',
          '<b>reach for</b>：伸手去拿，比 take 更强调下意识的动作，正好呼应本段「提示触发动作」的主题。',
          '<b>为什么值得学</b>：说明「环境如何支配行为」时，用「条件 + 结果 + 时间」三层，就能把一个无意间的动作写得很有说服力。'
        ]
      },
      {
        text: 'Because the old action comes first and cannot be forgotten, the new one no longer depends on memory or mood.',
        points: [
          '<b>主干</b>：the new one no longer depends on memory or mood；Because 引导的原因状语从句在句首。',
          '<b>原因从句里有并列谓语</b>：comes first and cannot be forgotten 两个动作共用一个 Because，简洁地说明「旧动作可靠」。',
          '<b>no longer</b>：不再……，把「过去依赖、现在不依赖」的变化一次说清，比 not 更有时间感。',
          '<b>the new one / the old one</b>：one 代替上文出现过的 action，避免重复，是英语里极常用的替换。',
          '<b>为什么值得学</b>：解释「为什么某个办法有效」时，「因为 A 可靠，所以 B 不再依赖 C」是标准句式，可直接套用。'
        ]
      },
      {
        text: 'What looks like a small win is in fact the only version that survives a bad week, because intensity fades while consistency compounds.',
        points: [
          '<b>主干</b>：What looks like a small win（主语从句）+ is + the only version（表语）。',
          '<b>What 主语从句</b>：What 相当于 the thing that，「看起来像小小胜利的东西」整体作主语，谓语用单数 is。',
          '<b>that 定语从句</b>：修饰 the only version，从句里 survives 是谓语，「唯一能扛过糟糕一周的版本」。',
          '<b>because + while 对比</b>：because 给原因，while 表对比，一句里同时给出「为什么」和「两者相反」：劲头会消退，坚持会累积。',
          '<b>为什么值得学</b>：把抽象道理说得有节奏，靠的是「主语从句 + 定语从句 + 原因 + 对比」的组合，写作里可以直接仿这个骨架。'
        ]
      },
      {
        text: 'Once the action runs on its own, the question is no longer how much you want it but who you believe you are.',
        points: [
          '<b>主干</b>：the question is no longer A but B；句首 Once 引导时间状语从句。',
          '<b>no longer … but …</b>：不再是……而是……，把问题从「愿望大小」移到「身份认同」，是本篇立意的关键转折。',
          '<b>两个名词性从句作表语</b>：how much you want it 与 who you believe you are 并列，后一个里还套着省略 that 的宾语从句 believe (that) you are。',
          '<b>runs on its own</b>：自己就能运转，on its own = 独自、自动地，常用来描述已经成习惯的动作。',
          '<b>为什么值得学</b>：谈「习惯变成身份」的句子可以照这个模型：Once …, the question is no longer … but …。'
        ]
      }
    ],
    questions: [
      {
        en: 'According to paragraph 2, what refills the small pool of motivation?',
        cn: '根据第二段，是什么让那一小池动力重新蓄满？',
        ans: 'Sleep, food and quiet.',
        ansCn: '睡眠、食物和安静。'
      },
      {
        en: 'What does the writer mean by the minimum version in paragraph 5?',
        cn: '作者在第五段说的「最小版本」是什么意思？',
        ans: 'A first step that is tiny and realistic enough that you cannot say no, such as two minutes of stretching, one page, or one washed dish.',
        ansCn: '第一步要小到极小、现实到你没法说不，比如两分钟拉伸、读一页书或洗一只碗。'
      },
      {
        en: 'What can be inferred about self-criticism from paragraph 6?',
        cn: '从第六段可以推断出自我苛责会带来什么？',
        ans: 'It makes restarting harder, so it pushes people to give up instead of helping them continue.',
        ansCn: '它让重新开始更难，结果是把人推去放弃，而不是帮他们继续。'
      },
      {
        en: 'How does the example of coffee and a book in paragraph 4 support the writer’s advice?',
        cn: '第四段里咖啡和书的例子如何支撑作者的建议？',
        ans: 'It shows how to put a new action after an old habit, so the new action runs on the old habit’s cue instead of depending on memory or mood.',
        ansCn: '它示范了怎样把新动作接在旧习惯之后，让新动作靠旧习惯的提示来触发，而不必依赖记忆或心情。'
      },
      {
        en: 'What is the writer’s attitude towards willpower in this passage?',
        cn: '作者对「意志力」的态度是什么？',
        ans: 'He thinks relying on willpower is a mistake, because better design and small steps are more effective than resolve.',
        ansCn: '他认为指望意志力是个错误，因为更好的设计和更小的步骤比决心更有效。'
      }
    ],
    writingTask: {
      en: 'Write 100–120 words about a habit you tried to build, why it lasted or did not last, and what you would change.',
      hints: [
        'I tried to ... every day, but ...',
        'The problem was that I relied on ...',
        'What mattered was not ... but ...',
        'Next time I would make the first step ...'
      ],
      hintCn: '用 6–8 句话写一次养成习惯的经历：先写你试过什么，再解释为什么坚持不下来或坚持下来了，最后写如果重来你会怎么改。观点、理由、例子三要素要齐全。',
      req: '至少使用 2 个本篇学过的词或搭配（tiny / realistic / consistency / on autopilot / get back on track / What matters is …）。'
    },
    speakingTask: {
      en: 'Do you think designing the environment matters more than willpower for keeping a habit? Speak for one minute: give your opinion, one reason and one example.',
      points: [
        'Your opinion',
        'One reason',
        'One example from your own life'
      ],
      pointCn: '先明确表态环境设计和意志力哪个更重要，再给一个理由，最后举一个自己生活里的小例子，三部分都要说到。',
      skeleton: 'In my opinion, environment matters more. That is because ... For example, last month I ...'
    },
    focus: [
      '<b>新授核心词 17 个</b>：<span class=\'en\'>willpower, motivation, rely, cue, trigger, tiny, realistic, consistency, intensity, sustainable, criticism, struggle, abandon, identity, practice, automatic, tend</span> —— 记住 <span class=\'en\'>rely on</span>（依赖，介词用 on）、<span class=\'en\'>tend to do sth.</span>（往往会做某事）、<span class=\'en\'>abandon a plan</span>（放弃计划）；<span class=\'en\'>cue</span> 与 <span class=\'en\'>trigger</span> 是一对：一个是「提示」，一个是「触发」，一静一动；<span class=\'en\'>consistency</span> 的形容词是 consistent，<span class=\'en\'>practice</span> 作名词不可数时不要加 s。',
      '<b>本篇复现的旧词</b>：第 26 篇的 <span class=\'en\'>habit</span>（习惯，正文作复数 habits）、第 17 篇的 <span class=\'en\'>routine</span>（日常流程）、第 24 篇的 <span class=\'en\'>effective</span>（有效的）、第 27 篇的 <span class=\'en\'>reward / instead / design</span>（回报、代替、设计，正文作 designed）、第 30 篇的 <span class=\'en\'>challenge</span>（难关），以及旧短语 <span class=\'en\'>give up</span>（放弃）—— 共 8 处灰点，都在讲习惯的新语境里再认一次。',
      '<b>四个长难句</b>：第一句练 <span class=\'en\'>if 条件从句 + before 时间从句 + whatever 让步从句</span>；第二句练 <span class=\'en\'>Because 原因从句 + no longer … but …</span>；第三句练 <span class=\'en\'>What 主语从句 + that 定语从句 + because/while</span>；第四句练 <span class=\'en\'>Once 时间从句 + 两个名词性从句作表语</span>。四句分别承担「情景」「解释」「论证」「点题」，各仿写一句。',
      '<b>搭配与写作表达</b>：<span class=\'en\'>from scratch</span>（从零开始）、<span class=\'en\'>beat yourself up</span>（自我苛责）、<span class=\'en\'>get back on track</span>（回到正轨）、<span class=\'en\'>build up</span>（逐步建立）、<span class=\'en\'>on autopilot</span>（自动运转）是本篇五处绿色标注，<span class=\'en\'>keep at it</span>（坚持）在第七段；写作里 <span class=\'en\'>No wonder …</span> 点破因果，<span class=\'en\'>What matters is …</span> 收出立意。',
      '<b>全文逻辑线与题型提醒</b>：立题（习惯不成功是设计问题）→ 意志力不可靠 → 环境提示 → 习惯叠加 → 最小版本 → 漏一天怎么办 → 时间与身份 → 结语（设计胜过决心）。细节题答案在第二、五段；推断题看第六段「苛责让重启变贵」的直接推论；论证关系题看第四段例子与「叠加」建议的对应；态度题抓第一句与末段对意志力的评价。'
    ],
    standard: {
      time: '约 40 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 17 个核心词遮住中文说出 ≥ 13 · 4 个长难句会拆结构 · 完成 100–120 词写作与 1 分钟口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 17 个核心词中的 13 个（rely、cue、trigger、consistency、sustainable …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '10 个高频搭配掌握 8 个，能各造一句（from scratch、get back on track、on autopilot …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 4 个长难句各自的主干与从句类型，并各仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；推断题与论证关系题要在原文找到依据',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 100–120 词，至少用上 No wonder … 或 What matters is …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟说清「环境设计和意志力哪个更重要」，给出一个理由和一个自己的例子',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 8 处灰点旧词，说出其中 6 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 39,
    slug: '039-homework-more-is-not-always-better',
    title: 'Homework: More Is Not Always Better',
    titleCn: '作业多不等于学得好',
    stage: '阶段四 · 中级提高',
    stageRange: '第 31–40 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 500 词'
      },
      {
        k: '新词密度',
        v: '约 5.6%'
      },
      {
        k: '长难句',
        v: '4 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/039.jpg',
    coverCredit: 'Photo: Tima Miroshnichenko / Pexels',
    body: [
      'Every evening, a child sits with a stack of worksheets, and the parent thinks, ‘My school is serious.’ Heavy homework feels like hard work, and hard work feels like learning. <span class="w-sentence">Behind that feeling sits a belief: the more children practise after school, the more they learn.</span> Research is less polite: extra pages bring little extra understanding.',
      'The <span class="w-rev">amount</span> of homework <span class="w-cet4" data-cn="各不相同、有差别">varies</span> widely: some schools <span class="w-cet4" data-cn="布置、分配">assign</span> hours of work every night, while younger pupils elsewhere get almost nothing. <span class="w-sentence">Yet the systems that set the heaviest loads are not clearly the best performers, and the lightest loads do not lead to failure.</span> The <span class="w-rev">quality</span> of the work matters far more than its <span class="w-cet4" data-cn="数量">quantity</span>.',
      'For younger children, the link between homework hours and achievement is weak: a few short tasks do as much good as a long evening. For teenagers, <span class="w-synonym" data-cn="＝ not too much 的替换词">moderate</span> amounts help them <span class="w-cet4" data-cn="记住、保持">retain</span> what they learn. Beyond that point the <span class="w-cet4" data-cn="课业负担">workload</span> <span class="w-cet4" data-cn="使不堪重负、压垮">overwhelms</span>: sleep is cut, and a tired student <span class="w-synonym" data-cn="＝ only 的替换词">merely</span> counts the hours left. <span class="w-writing" data-cn="诚然……但是……">It is true that</span> more time on task can raise marks, but the gain is small.',
      'The question is not how much but what kind. Good homework is short and focused: it <span class="w-cet4" data-cn="巩固、强化">reinforces</span> one idea from class and gives <span class="w-cet4" data-cn="反馈">feedback</span>. <span class="w-sentence">Practice works when it is spaced over days rather than packed into one night, and when mistakes are returned with comments instead of a bare mark.</span> <span class="w-rev">Review</span> is worth more than new exercises, and the mind needs quiet hours to <span class="w-cet4" data-cn="吸收、消化">absorb</span> it.',
      'Bad work has its signs. Tasks that ask a child to copy or fill blanks are <span class="w-cet4" data-cn="无意义的、白费工夫的">pointless</span>; they <span class="w-phrase" data-cn="占用（时间）">take up</span> time. Work that <span class="w-phrase" data-cn="越积越多">piles up</span> at week’s end becomes a race that teaches speed, not understanding. When parents teach the lesson themselves, the <span class="w-rev">task</span> has moved home, and children in quieter houses <span class="w-phrase" data-cn="落后">fall behind</span>.',
      'Better homework is <span class="w-cet4" data-cn="足够的、合乎需要的">adequate</span> rather than large: ten thoughtful minutes beat an hour of copying. It <span class="w-cet4" data-cn="按个人情况定制、使适合">tailors</span> work to the child: a student who has mastered a skill moves on. It protects <span class="w-cet4" data-cn="热情、积极性">enthusiasm</span>: work that is always too hard teaches a child to stop caring. Good <span class="w-rev">methods</span> do more in less time, and children become <span class="w-cet4" data-cn="独立的">independent</span> learners.',
      'What can parents do? Less than they think. A quiet corner and the promise that questions are welcome will <span class="w-rev">encourage</span> a child more than endless checking. The real <span class="w-rev">pressure</span> comes from comparison: the fear that a child who plays is behind. <span class="w-phrase" data-cn="从长远来看">In the long run</span>, the first <span class="w-cet4" data-cn="优先考虑的事">priority</span> is not more exercises but enough sleep and a <span class="w-rev">balance</span> between work and play.',
      'Schools are learning too: many are cutting busy work and marking with comments instead of scores. <span class="w-writing" data-cn="这并不是说……">This is not to say that</span> homework should disappear; practice still matters, and students who <span class="w-cet4" data-cn="投入、积极参与">engage</span> with a subject at home remember it better. <span class="w-cet4" data-cn="最终">Eventually</span>, the aim is not to fill the evening but to make the day’s learning stay, and children <span class="w-cet4" data-cn="完成、做到">accomplish</span> more by doing less. <span class="w-sentence">When homework is short, purposeful and followed by good comments, the evening is saved and the learning stays.</span>'
    ],
    translation: [
      '每天晚上，孩子都坐在一摞练习卷前，家长心想：‘我家孩子的学校很严格。’繁重的作业让人觉得是在用功，而用功就让人觉得是在学习。这种感觉背后藏着一个信念：孩子放学后练得越多，学到的就越多。研究可没这么客气：多做几页并不会带来多少额外的理解。',
      '世界各地的作业量差别很大：有些学校每晚布置几个小时的作业，而另一些地方的低年级学生几乎没有作业。然而，作业最重的教育体系并没有明显地教出最好的学生，作业最少的地方也没有因此垮掉。作业的质量远比数量重要。',
      '对年幼的孩子来说，作业时长和成绩之间的联系很弱：几道简短的练习，效果和一个漫长的晚上一样好。对青少年来说，适量的作业能帮助他们记住所学。可一旦越过那个限度，课业负担就把人压垮：睡眠被挤掉，疲惫的学生只是在数着还剩几个小时。诚然，在任务上多花时间能提高分数，但这点收获很小。',
      '问题不在于做多少，而在于做什么样的作业。好的作业短小而专注：它巩固课堂上的一个概念，也给出反馈。练习只有分散在几天里才有用，而不是挤在一个晚上；发回来的应该是带着批语的订正，而不是一个光秃秃的分数。复习比做新题更值得，而头脑也需要安静的时间来消化它。',
      '不好的作业有自己的特征。让孩子抄写、不动脑筋地填空，都是白费工夫；它们只是占掉时间。一周末尾堆积起来的作业变成一场赛跑，教会的是速度，不是理解。当家长自己把课讲一遍时，这项任务就已经搬回了家，而家里更安静的孩子反倒落后了。',
      '更好的作业够用就好，而不是越多越好：用心的十分钟胜过抄写一小时。它按孩子的情况安排练习：已经掌握某项技能的学生可以继续往前。它保护学习的热情，因为总是太难的作业会教会一个孩子不再在乎。好方法用更少的时间做更多的事，孩子也会成为独立的学习者。',
      '家长能做什么？比他们想的要少。一个安静的角落，还有一句‘有问题尽管问’的承诺，比没完没了的检查更能鼓励孩子。家庭真正的压力来自比较：害怕玩耍的孩子落了后。从长远来看，首先要保证的不是更多的练习，而是充足的睡眠，以及学习和玩耍之间的平衡。',
      '学校也在学习：许多学校正在砍掉无谓的作业，并且用批语而不是分数来评价。这并不是说作业应该消失；练习仍然重要，肯在课后投入一个科目的学生，最终记得更牢。不过，作业的目的不是把晚上填满，而是让白天学到的东西留下来；照这样做的孩子做得更少，收获却更多。当作业短小、目的明确，又跟着好的批语时，晚上保住了，学到的东西也留下了。'
    ],
    vocabulary: [
      {
        w: 'workload',
        ph: '/ˈwɜːkləʊd/',
        pos: 'n.',
        cn: '课业负担、工作量',
        col: 'a heavy workload — 沉重的课业负担；cut the workload — 减少作业量',
        ex: 'A heavy workload can cut into a child’s sleep.'
      },
      {
        w: 'assign',
        ph: '/əˈsaɪn/',
        pos: 'vt.',
        cn: '布置、分配',
        col: 'assign homework — 布置作业；assign a task to sb. — 把任务分给某人',
        ex: 'Some schools assign hours of work every night.'
      },
      {
        w: 'vary',
        ph: '/ˈveəri/',
        pos: 'vi.',
        cn: '各不相同、有差别',
        col: 'vary widely — 差别很大；vary from … to … — 从……到……不等',
        ex: 'The amount of homework varies widely around the world.'
      },
      {
        w: 'overwhelm',
        ph: '/ˌəʊvəˈwelm/',
        pos: 'vt.',
        cn: '使不堪重负、压垮',
        col: 'overwhelm students — 让学生不堪重负；be overwhelmed by — 被……压得喘不过气',
        ex: 'Too much homework overwhelms tired students.'
      },
      {
        w: 'reinforce',
        ph: '/ˌriːɪnˈfɔːs/',
        pos: 'vt.',
        cn: '巩固、强化',
        col: 'reinforce an idea — 巩固一个概念；reinforce learning — 巩固所学',
        ex: 'Good homework reinforces one idea taught in class.'
      },
      {
        w: 'retain',
        ph: '/rɪˈteɪn/',
        pos: 'vt.',
        cn: '记住、保持',
        col: 'retain information — 记住信息；retain an interest — 保持兴趣',
        ex: 'Regular work helps students retain what they learn.'
      },
      {
        w: 'feedback',
        ph: '/ˈfiːdbæk/',
        pos: 'n.',
        cn: '反馈',
        col: 'give feedback — 给出反馈；useful feedback — 有用的反馈',
        ex: 'Teachers should return work with clear feedback.'
      },
      {
        w: 'engage',
        ph: '/ɪnˈɡeɪdʒ/',
        pos: 'vt./vi.',
        cn: '投入、积极参与',
        col: 'engage with a subject — 投入一门学科；engage students — 吸引学生参与',
        ex: 'Students who engage with a subject at home remember it better.'
      },
      {
        w: 'absorb',
        ph: '/əbˈzɔːb/',
        pos: 'vt.',
        cn: '吸收、消化',
        col: 'absorb new ideas — 吸收新思想；absorb information — 消化信息',
        ex: 'The mind needs quiet hours to absorb new material.'
      },
      {
        w: 'pointless',
        ph: '/ˈpɔɪntləs/',
        pos: 'adj.',
        cn: '无意义的、白费工夫的',
        col: 'pointless work — 无意义的作业；it is pointless to do sth. — 做某事是白费工夫',
        ex: 'Copying a page without thinking is pointless.'
      },
      {
        w: 'accomplish',
        ph: '/əˈkʌmplɪʃ/',
        pos: 'vt.',
        cn: '完成、做到',
        col: 'accomplish a goal — 达成目标；accomplish more — 收获更多',
        ex: 'Short and clear tasks help children accomplish more.'
      },
      {
        w: 'adequate',
        ph: '/ˈædɪkwət/',
        pos: 'adj.',
        cn: '足够的、合乎需要的',
        col: 'adequate sleep — 足够的睡眠；be adequate for — 对……足够',
        ex: 'Ten thoughtful minutes can be adequate practice.'
      },
      {
        w: 'eventually',
        ph: '/ɪˈventʃuəli/',
        pos: 'adv.',
        cn: '最终',
        col: 'eventually do sth. — 最终做某事；not … eventually — 并不会最终……',
        ex: 'Eventually, the aim of homework is to make learning stay.'
      },
      {
        w: 'tailor',
        ph: '/ˈteɪlə/',
        pos: 'vt.',
        cn: '按个人情况定制、使适合',
        col: 'tailor sth. to sb. — 按某人的情况调整；tailored practice — 有针对性的练习',
        ex: 'Homework should be tailored to the child.'
      },
      {
        w: 'priority',
        ph: '/praɪˈɒrəti/',
        pos: 'n.',
        cn: '优先考虑的事',
        col: 'the first priority — 首要任务；make sth. a priority — 把某事放在首位',
        ex: 'Enough sleep is the first priority at home.'
      },
      {
        w: 'enthusiasm',
        ph: '/ɪnˈθjuːziæzəm/',
        pos: 'n.',
        cn: '热情、积极性',
        col: 'lose enthusiasm — 失去热情；enthusiasm for learning — 学习的热情',
        ex: 'Endless hard work slowly kills enthusiasm for learning.'
      },
      {
        w: 'quantity',
        ph: '/ˈkwɒntəti/',
        pos: 'n.',
        cn: '数量',
        col: 'a large quantity of — 大量的；quantity and quality — 数量与质量',
        ex: 'Quantity alone says very little about learning.'
      },
      {
        w: 'independent',
        ph: '/ˌɪndɪˈpendənt/',
        pos: 'adj.',
        cn: '独立的',
        col: 'independent learner — 独立的学习者；work independently — 独立完成',
        ex: 'Good homework helps children become independent.'
      }
    ],
    phrases: [
      {
        en: 'take up',
        cn: '占用（时间）',
        ex: 'Busy work takes up time without changing the mind.'
      },
      {
        en: 'pile up',
        cn: '越积越多',
        ex: 'Work that piles up at the end of the week becomes a race.'
      },
      {
        en: 'fall behind',
        cn: '落后',
        ex: 'Children in quieter houses fall behind when parents do the teaching.'
      },
      {
        en: 'in the long run',
        cn: '从长远来看',
        ex: 'In the long run, sleep matters more than one more exercise.'
      },
      {
        en: 'be supposed to do sth.',
        cn: '应该做某事',
        ex: 'Homework is supposed to support learning, not to replace a family’s evening.'
      },
      {
        en: 'keep up with',
        cn: '跟上',
        ex: 'Short tasks help slow learners keep up with the class.'
      },
      {
        en: 'hand in',
        cn: '交（作业）',
        ex: 'Students hand in their work on Friday morning.'
      },
      {
        en: 'go over',
        cn: '复习、检查',
        ex: 'It is useful to go over the answers in the next lesson.'
      },
      {
        en: 'point out',
        cn: '指出',
        ex: 'Teachers point out mistakes instead of giving a bare mark.'
      },
      {
        en: 'put off',
        cn: '拖延',
        ex: 'A long task is easy to put off until Sunday night.'
      }
    ],
    writings: [
      {
        expr: 'It is true that …, but …',
        cn: '诚然……但是……',
        meaning: '先承认对方观点有道理的部分，再转折指出它的局限，让论证显得平衡而不偏激。',
        context: '议论文里提出主张之前，先让一步，再把重心转到自己真正要讲的结论上。',
        alts: [
          {
            t: 'Admittedly, …, yet …',
            n: '更书面'
          },
          {
            t: 'While it is true that …, …',
            n: '把让步放在句首'
          },
          {
            t: 'Granted, …, but …',
            n: '更口语，语气更直接'
          }
        ],
        register: '中性偏书面，议论文与讨论类作文常用。',
        example: 'It is true that more time on task can raise marks, but the gain is small.'
      },
      {
        expr: 'This is not to say that …',
        cn: '这并不是说……',
        meaning: '防止读者把自己的观点推到极端，说明自己并没有否认另一面，是很有分寸的限定句。',
        context: '提出批评或改革建议之后，紧跟着补一句限定，避免观点显得过头。',
        alts: [
          {
            t: 'That is not to say that …',
            n: '同义，同样常用'
          },
          {
            t: 'This does not mean that …',
            n: '更平实'
          },
          {
            t: 'I am not arguing that …',
            n: '第一人称版本'
          }
        ],
        register: '中性偏书面，议论文常用。',
        example: 'This is not to say that homework should disappear; practice still matters.'
      }
    ],
    sentences: [
      {
        text: 'Behind that feeling sits a belief: the more children practise after school, the more they learn.',
        points: [
          '<b>主干</b>：A belief sits behind that feeling；把地点状语 Behind that feeling 提到句首，动词 sits 放在主语前面，构成完全倒装。',
          '<b>冒号后的解释</b>：the more …, the more … 是「越……越……」的比较结构，把 belief 的内容直接摆出来，比用 which 引导的定语从句更干脆。',
          '<b>为什么要倒装</b>：英语常把新信息放在句末。倒装让 belief 成为句尾焦点，正好引出下文要反驳的那个信念。',
          '<b>为什么值得学</b>：写「某种心态背后是一种观念」时，「地点状语 + sits + 主语 + 冒号」是很漂亮的开篇句式，可以直接仿写。'
        ]
      },
      {
        text: 'Yet the systems that set the heaviest loads are not clearly the best performers, and the lightest loads do not lead to failure.',
        points: [
          '<b>主干</b>：两个并列分句由 and 连接：the systems … are not clearly the best performers 与 the lightest loads do not lead to failure。',
          '<b>that 定语从句</b>：that set the heaviest loads 修饰 the systems，从句里 set 是谓语，「布置最重作业量的那些体系」。',
          '<b>对称对比</b>：the heaviest loads 与 the lightest loads 前后呼应，not … best 与 do not lead to failure 也是同一方向的否定，合起来的效果是「作业量与成绩没有必然联系」。',
          '<b>Yet</b>：放在句首表示「然而」，承上启下，指出前一句提到的地区差异并不能推出「作业越多越好」。',
          '<b>为什么值得学</b>：用「A 并不最好，B 也并不最差」这种对称结构否定一条普遍看法，比直接说 no connection 有力得多。'
        ]
      },
      {
        text: 'Practice works when it is spaced over days rather than packed into one night, and when mistakes are returned with comments instead of a bare mark.',
        points: [
          '<b>主干</b>：Practice works；后面两个 when 引导的从句并列，共同说明「怎样的练习才有效」。',
          '<b>两组「A 而非 B」</b>：spaced over days rather than packed into one night（分散而非塞在一晚）、comments instead of a bare mark（批语而非分数），结构对齐，节奏清楚。',
          '<b>被动语态</b>：it is spaced / mistakes are returned 都用被动，强调动作本身而不是谁来做，说明文里很常见。',
          '<b>注意</b>：rather than 后面接与前面平行的形式，这里都是过去分词；instead of 后面接名词，两处不可互换。',
          '<b>为什么值得学</b>：解释「什么方法有效」时，「works when … and when …」加两组对比，是最实用的论证句型之一。'
        ]
      },
      {
        text: 'When homework is short, purposeful and followed by good comments, the evening is saved and the learning stays.',
        points: [
          '<b>主干</b>：the evening is saved and the learning stays；句首 When 引导条件状语从句。',
          '<b>三个并列表语</b>：short, purposeful and followed by good comments 共用一个系动词 is，前两个是形容词，第三个是过去分词短语，三项并列而不显杂乱。',
          '<b>一被动一主动</b>：is saved（被保住）与 stays（留下来）呼应，把「晚上」和「学习」写成两个同样重要的受益者。',
          '<b>为什么值得学</b>：结尾句要短、要对称。用「When 条件 + 两个并列结果」收束全文，是很好的结论模板。'
        ]
      }
    ],
    questions: [
      {
        en: 'According to paragraph 2, what do we see when test results and homework quantity are compared?',
        cn: '根据第二段，把考试成绩和作业数量放在一起比较时会看到什么？',
        ans: 'The connection between them is surprisingly thin, because the systems with the heaviest loads are not clearly the best performers and the lightest loads do not lead to failure.',
        ansCn: '两者之间的联系薄得惊人，因为作业最重的体系并没有明显地教出最好的学生，作业最少的地方也没有因此垮掉。'
      },
      {
        en: 'What happens to students when the workload goes beyond a moderate amount, according to paragraph 3?',
        cn: '根据第三段，课业负担超过适量的限度后，学生会怎样？',
        ans: 'Their sleep is cut and a tired student merely counts the hours left.',
        ansCn: '他们的睡眠被挤掉，疲惫的学生只是在数着还剩几个小时。'
      },
      {
        en: 'What can be inferred from paragraph 5 about work that piles up at the end of the week?',
        cn: '从第五段可以推断，一周末尾堆积起来的作业会带来什么？',
        ans: 'It becomes a race, so it teaches speed rather than understanding and does not really help students learn.',
        ansCn: '它变成一场赛跑，教会的是速度而不是理解，实际上帮不了学生学习。'
      },
      {
        en: 'How does the writer use the homework amounts in different places to support the main argument?',
        cn: '作者如何用各地不同的作业量来支撑全文的主要观点？',
        ans: 'He shows that heavier homework does not clearly bring better results, so the quantity of homework cannot explain how much children learn.',
        ansCn: '他说明作业更多并不明显带来更好的成绩，所以作业的多少解释不了孩子学到了多少。'
      },
      {
        en: 'What is the writer’s purpose in the last paragraph?',
        cn: '作者写最后一段的目的是什么？',
        ans: 'To show that homework works well when it is short, purposeful and followed by good comments, so children can learn more by doing less.',
        ansCn: '说明作业只要短小、目的明确、又有好的批语，就能起到作用，孩子少做也能学得更多。'
      }
    ],
    writingTask: {
      en: 'Write 100–120 words about the homework you are given: how much it is, whether it helps you learn, and what you would change.',
      hints: [
        'Every week I am given ... to do, and it usually takes me ...',
        'It is true that ..., but ...',
        'In my view, homework is supposed to ...',
        'This is not to say that ...; I would simply ...'
      ],
      hintCn: '用 6–8 句话写自己真实的作业情况：先说作业量和用时，再评价它是否有帮助并给出理由，最后说如果由你来定，你会怎么改。观点、理由、例子三要素齐全，至少用上一个让步句。',
      req: '至少使用 2 个本篇学过的词或搭配（workload / quantity / reinforce / feedback / pointless / take up / in the long run / It is true that …, but …）。'
    },
    speakingTask: {
      en: 'Should schools give students less homework? Speak for one minute: state your opinion, give one reason and one example.',
      points: [
        'Your opinion: less homework or not',
        'One reason from the passage',
        'One example from your own school life'
      ],
      pointCn: '先明确表态学校该不该减少作业，再给一个理由（比如作业质量比数量重要、睡眠更优先），最后举一个自己学校生活里的例子，三部分都要说到。',
      skeleton: 'In my opinion, schools should give less homework. The reason is that ... For example, last term my teacher ...'
    },
    focus: [
      '<b>新授核心词 18 个</b>：<span class=\'en\'>workload, assign, vary, overwhelm, reinforce, retain, feedback, engage, absorb, pointless, accomplish, adequate, eventually, tailor, priority, enthusiasm, quantity, independent</span> —— 注意 <span class=\'en\'>vary</span> 的名词是 variety、形容词是 various；<span class=\'en\'>quantity</span> 与 quality（质量）成对记；<span class=\'en\'>tailor … to …</span>（按……定制）是固定搭配；<span class=\'en\'>enthusiasm</span>、<span class=\'en\'>feedback</span> 都是不可数名词；<span class=\'en\'>pointless</span> 由 point（意义）加否定后缀 -less 而来。',
      '<b>本篇复现的旧词</b>：第 3 篇的 <span class=\'en\'>encourage</span>（鼓励）、第 4 篇的 <span class=\'en\'>quality</span>（质量）、第 6 篇的 <span class=\'en\'>balance</span>（平衡）、第 10 篇的 <span class=\'en\'>review</span>（复习）、第 15 篇的 <span class=\'en\'>task</span>（任务）、第 18 篇的 <span class=\'en\'>amount / method</span>（数量、方法）、第 23 篇的 <span class=\'en\'>pressure</span>（压力）—— 共 8 处灰点，都在「作业」这个新语境里再认一次。',
      '<b>四个长难句</b>：第一句练 <span class=\'en\'>地点状语前置的完全倒装 + the more …, the more …</span>；第二句练 <span class=\'en\'>that 定语从句 + 两组对称对比</span>；第三句练 <span class=\'en\'>when 并列从句 + rather than / instead of</span>；第四句练 <span class=\'en\'>when 条件句 + 三项并列表语</span>。四句分别负责「立靶子」「摆事实」「给标准」「作收束」，各仿写一句。',
      '<b>搭配与写作表达</b>：<span class=\'en\'>take up</span>（占用）、<span class=\'en\'>pile up</span>（堆积）、<span class=\'en\'>fall behind</span>（落后）、<span class=\'en\'>in the long run</span>（从长远看）是本篇的绿色标注，<span class=\'en\'>be supposed to do sth.</span>（应该做某事）在短语表里；写作上 <span class=\'en\'>It is true that …, but …</span> 先让步再转折，<span class=\'en\'>This is not to say that …</span> 给观点留有余地，两个都是议论文的分寸感。',
      '<b>全文逻辑线与题型提醒</b>：立题（作业多不等于学得好）→ 各地作业量差异 → 研究结论（过量无益、适量有用）→ 什么样的作业有用 → 什么样的作业没用 → 更好的作业怎么设计 → 家长的角色 → 结语（少而精胜过多而滥）。细节题答案在第二、三段；推断题看第五段「赛跑教速度不教理解」的直接推论；论证关系题看第二段「各地差异」与主论点的支撑关系；写作目的题抓末段「短小、目的明确、有批语」的总结句。'
    ],
    standard: {
      time: '约 40 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 18 个核心词遮住中文说出 ≥ 14 · 4 个长难句会拆结构 · 完成 100–120 词写作与 1 分钟口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 18 个核心词中的 14 个（workload、reinforce、feedback、pointless、tailor …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '10 个高频搭配掌握 8 个，能各造一句（take up、pile up、fall behind、in the long run …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 4 个长难句各自的主干与从句类型，并各仿写一句',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；推断题与论证关系题要在原文找到依据',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 100–120 词，至少用上 It is true that …, but … 或 This is not to say that …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟说清「学校该不该减少作业」，给出一个理由和一个自己的例子',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 8 处灰点旧词，说出其中 6 个的意思，并查到它首次出现的篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 40,
    slug: '040-learning-from-mistakes-at-work',
    title: 'Learning from Mistakes at Work',
    titleCn: '从工作错误中学习',
    stage: '阶段四 · 中级提高',
    stageRange: '第 31–40 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 505 词'
      },
      {
        k: '新词密度',
        v: '约 5.3%'
      },
      {
        k: '长难句',
        v: '4 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/040.jpg',
    coverCredit: 'Photo: Yan Krukau / Pexels',
    body: [
      'Most of us treat a work mistake as something to <span class="w-cet4" data-cn="隐藏、隐瞒">hide</span>: we fix it quietly, hope nobody <span class="w-rev">notices</span>, and move on. Aviation and medicine built the opposite <span class="w-cet4" data-cn="文化、风气">culture</span>: when something goes wrong, people write it down and change the way they work. <span class="w-sentence">Learning from mistakes at work — a habit some industries build into their daily work — is a skill that can be practiced.</span>',
      'In a cockpit, a <span class="w-cet4" data-cn="飞行员">pilot</span> need not be perfect; the system is. After every flight, crews file reports on what went wrong, even when nothing happened. One <span class="w-cet4" data-cn="事件、事故征候">incident</span> that looks <span class="w-cet4" data-cn="轻微的、次要的">minor</span> in one airport may <span class="w-cet4" data-cn="触发、引发">trigger</span> a <span class="w-cet4" data-cn="程序、步骤">procedure</span> change across the airline. Reports are <span class="w-synonym" data-cn="＝ without names 的替换词">anonymous</span>, so the aim is information, not punishment: <span class="w-rev">blame</span> sits with the <span class="w-rev">process</span>, not the person.',
      'Hospitals do the same: when something <span class="w-phrase" data-cn="出问题、出故障">goes wrong</span>, a wrong dose or a missed <span class="w-cet4" data-cn="症状">symptom</span> sends a team to <span class="w-cet4" data-cn="调查、查明">investigate</span>. <span class="w-sentence">What makes this useful is the rule behind it — the review looks at the setup, not the person — because blame ends the conversation a fix needs.</span> Sometimes the answer is a <span class="w-cet4" data-cn="清单、核对表">checklist</span>: two nurses say the patient’s name and the drug aloud. One honest review <span class="w-rev">prevents</span> the same mistake reaching hundreds of patients.',
      'Why does this work? A mistake handled once stays a memory; handled twice, it becomes a process worth investigating. Memory is <span class="w-synonym" data-cn="＝ not to be trusted 的替换词">unreliable</span>: the same <span class="w-rev">error</span> is triggered again when we are tired or under <span class="w-rev">pressure</span>, and a written procedure never gets tired. When the fix lives in a step or a rule, the lesson survives the person who learned it.',
      'A personal <span class="w-cet4" data-cn="复盘、事后小结">debrief</span> asks four questions: what happened, what did I expect, where is the <span class="w-cet4" data-cn="差距、落差">gap</span>, what will I change? <span class="w-sentence">Keep a record of the answers while the details are fresh — memory will rebuild the story in your favor, which is what a review must avoid.</span> Then <span class="w-cet4" data-cn="承认、认可">acknowledge</span> the mistake plainly, without excuses or self-blame: <span class="w-cet4" data-cn="恐惧、害怕">fear</span> makes people hide errors.',
      'Most people skip the ten-minute debrief and turn a lesson into a habit instead. If you sent the wrong attachment twice, the answer is not “be more careful” but a checklist you <span class="w-phrase" data-cn="过一遍、逐项检查">run through</span>. If a reminder came too late, move it earlier <span class="w-phrase" data-cn="而不是、代替">instead of</span> promising to remember. After two weeks the <span class="w-rev">routine</span> replaces your memory; the <span class="w-cet4" data-cn="结果、结局">outcome</span> no longer depends on your mood.',
      'None of this removes your duty to <span class="w-phrase" data-cn="对……承担责任">take responsibility for</span> it. A <span class="w-cet4" data-cn="重大的、主要的">major</span> incident must be admitted to a customer within the hour; even a minor one deserves an apology. <span class="w-sentence">Only after the apology and the repair does anyone ask the useful question: how do we make sure this happens once?</span> Teams that <span class="w-phrase" data-cn="有话直说、敢于发声">speak up</span> lose little and gain a lasting procedure.',
      '<span class="w-writing" data-cn="事后看来……">In hindsight,</span> the teams we admire are not the ones that never <span class="w-rev">fail</span>; they fix the system and build a culture that remembers. Ask the four questions, write the answer down, <span class="w-cet4" data-cn="修改、修订">revise</span> one step, and let it carry the lesson. <span class="w-writing" data-cn="目标不是……而是……">The goal is not</span> a life without mistakes but a working life where each mistake teaches once and never twice.'
    ],
    translation: [
      '我们大多数人把工作里的错误当成要藏起来的东西：悄悄补救，希望没人注意到，然后就翻篇。航空和医疗行业却建起了相反的风气：一出问题，人们就把它写下来，并改变做事的方式。从工作错误中学习是一门手艺——有些行业已经把它嵌进日常工作中——而手艺是可以练的。',
      '在驾驶舱里，飞行员不必完美，要完美的是系统。每次航班结束后，机组都会提交报告，写清楚哪里出了问题，哪怕什么事也没发生。一个在某个机场看似轻微的事件，可能触发整个航空公司流程的改变。报告是匿名的，所以目的是信息而不是惩罚：责任落在流程上，而不是人身上。',
      '医院也是这么做的：一出问题——剂量错了、症状漏看了——就会有一个团队去调查。真正让它起作用的，是背后的那条规矩——复盘看的是设置，不是人——因为一旦追究个人，修复所需要的对话就断了。答案有时会变成一张核对清单：两名护士大声说出病人的名字和药名。一次诚实的复盘，能让同一个错误不再落到几百个病人身上。',
      '为什么会这样？一个只处理过一次的错误，只是一段记忆；处理过两次，它就变成一套值得查的流程。记忆靠不住：同一个错误会在我们疲惫或有压力的时候再次出现，而写下来的程序不会累。当修复落在一步、一条规则上时，教训就能活过学会它的人。',
      '一次个人复盘要问四个问题：发生了什么？我原本预期什么？差距在哪里？我要改什么？趁细节还新鲜，把答案记下来——记忆会把故事重写成对你有利的版本，而这正是一次复盘最该避免的。然后坦率地承认错误，不找借口，也不攻击自己：是恐惧让人把错误藏起来。',
      '大多数人会跳过那十分钟的复盘，转而把教训变成本能。如果你把附件发错过两次，答案不是「以后小心点」，而是一张你要过一遍的核对清单。如果提醒来得太晚，就把提醒往前挪，而不是答应自己要记住。两周之后，流程会替你记住，结果也不再取决于你的心情。',
      '这一切都不免除你自己的责任：出了事就得承担。重大事件必须在一小时内向客户承认；即便问题很小，也值得一句道歉。只有在道歉和补救之后，才会有人问那个有用的问题：怎么保证它只发生一次？敢于开口的团队损失很小，却能留下一套长久的流程。',
      '事后看来，我们佩服的团队不是从不失败的那一种；他们会修好系统，并建起能记住教训的风气。问那四个问题，把答案写下来，修改一步，让这一步替你记住教训。目标不是没有错误的人生，而是一种工作方式：每个错误只教一次，第二次永远不再来。'
    ],
    vocabulary: [
      {
        w: 'hide',
        ph: '/haɪd/',
        pos: 'v.',
        cn: '隐藏、隐瞒',
        col: 'hide a mistake — 隐藏错误；hide behind … — 躲在……后面',
        ex: 'Most of us hide a mistake instead of reporting it.'
      },
      {
        w: 'culture',
        ph: '/ˈkʌltʃə(r)/',
        pos: 'n.',
        cn: '文化、风气',
        col: 'a blame culture — 爱追究个人的风气；company culture — 公司文化',
        ex: 'The company built a culture where small errors are reported.'
      },
      {
        w: 'pilot',
        ph: '/ˈpaɪlət/',
        pos: 'n.',
        cn: '飞行员',
        col: 'an airline pilot — 客机飞行员；the pilot’s seat — 驾驶座',
        ex: 'A pilot is expected to follow the procedure, not to be perfect.'
      },
      {
        w: 'incident',
        ph: '/ˈɪnsɪdənt/',
        pos: 'n.',
        cn: '事件、事故征候',
        col: 'a minor incident — 一起小事件；report an incident — 上报一起事件',
        ex: 'One minor incident changed the procedure across the airline.'
      },
      {
        w: 'minor',
        ph: '/ˈmaɪnə(r)/',
        pos: 'adj.',
        cn: '轻微的、次要的',
        col: 'a minor mistake — 小错误；minor damage — 轻微损伤',
        ex: 'At first the mistake looked minor, so nobody reported it.'
      },
      {
        w: 'trigger',
        ph: '/ˈtrɪɡə(r)/',
        pos: 'v./n.',
        cn: '触发、引发',
        col: 'trigger a change — 引发一次改变；trigger a memory — 勾起一段回忆',
        ex: 'A small error can trigger a change in the whole process.'
      },
      {
        w: 'procedure',
        ph: '/prəˈsiːdʒə(r)/',
        pos: 'n.',
        cn: '程序、步骤',
        col: 'follow the procedure — 按程序走；a written procedure — 成文的流程',
        ex: 'The team wrote the fix into a short procedure.'
      },
      {
        w: 'symptom',
        ph: '/ˈsɪmptəm/',
        pos: 'n.',
        cn: '症状',
        col: 'show symptoms — 出现症状；the first symptom — 最早的症状',
        ex: 'A missed symptom can be dangerous in a hospital.'
      },
      {
        w: 'investigate',
        ph: '/ɪnˈvestɪɡeɪt/',
        pos: 'v.',
        cn: '调查、查明',
        col: 'investigate the case — 调查这起事件；investigate the cause — 查明原因',
        ex: 'A wrong dose sends a team to investigate.'
      },
      {
        w: 'checklist',
        ph: '/ˈtʃeklɪst/',
        pos: 'n.',
        cn: '清单、核对表',
        col: 'a safety checklist — 安全检查清单；go through the checklist — 过一遍清单',
        ex: 'The lesson became a checklist used before every flight.'
      },
      {
        w: 'debrief',
        ph: '/ˈdiːbriːf/',
        pos: 'n./v.',
        cn: '复盘、事后小结',
        col: 'run a debrief — 做一次复盘；debrief the team — 给团队做总结',
        ex: 'We run a ten-minute debrief after every project.'
      },
      {
        w: 'gap',
        ph: '/ɡæp/',
        pos: 'n.',
        cn: '差距、落差',
        col: 'close the gap — 弥合差距；a gap between A and B — 甲乙之间的落差',
        ex: 'The gap between the plan and the result was clear.'
      },
      {
        w: 'acknowledge',
        ph: '/əkˈnɒlɪdʒ/',
        pos: 'vt.',
        cn: '承认、认可',
        col: 'acknowledge a mistake — 承认错误；acknowledge the problem — 认可问题存在',
        ex: 'She acknowledged the mistake and explained the fix.'
      },
      {
        w: 'fear',
        ph: '/fɪə(r)/',
        pos: 'n./v.',
        cn: '恐惧、害怕',
        col: 'fear of failure — 害怕失败；for fear of … — 因担心……',
        ex: 'Fear of blame makes people hide errors.'
      },
      {
        w: 'major',
        ph: '/ˈmeɪdʒə(r)/',
        pos: 'adj.',
        cn: '重大的、主要的',
        col: 'a major incident — 重大事件；a major concern — 主要顾虑',
        ex: 'A major incident must be reported within the hour.'
      },
      {
        w: 'outcome',
        ph: '/ˈaʊtkʌm/',
        pos: 'n.',
        cn: '结果、结局',
        col: 'the outcome of … — ……的结果；a positive outcome — 积极的结果',
        ex: 'The outcome no longer depends on one person’s mood.'
      },
      {
        w: 'revise',
        ph: '/rɪˈvaɪz/',
        pos: 'vt.',
        cn: '修改、修订',
        col: 'revise a plan — 修改计划；revise the procedure — 修订流程',
        ex: 'Revise one step instead of blaming yourself.'
      }
    ],
    phrases: [
      {
        en: 'go wrong',
        cn: '出问题、出故障（复现第 15 篇）',
        ex: 'The plan went wrong before the meeting started.'
      },
      {
        en: 'turn … into …',
        cn: '把……变成……（复现第 19 篇）',
        ex: 'Turn one lesson into a habit you can keep.'
      },
      {
        en: 'instead of',
        cn: '而不是、代替（复现第 10 篇）',
        ex: 'Move the reminder earlier instead of promising to remember.'
      },
      {
        en: 'run through',
        cn: '过一遍、逐项检查（新）',
        ex: 'Run through the checklist before you press send.'
      },
      {
        en: 'speak up',
        cn: '敢于把话说出来（新）',
        ex: 'In a good team, people speak up when something looks wrong.'
      },
      {
        en: 'take responsibility for',
        cn: '对……承担责任（复现第 12 篇）',
        ex: 'Take responsibility for what happened, then fix it.'
      },
      {
        en: 'keep a record of',
        cn: '把……记录下来（复现第 10 篇）',
        ex: 'Keep a record of the answers while the details are fresh.'
      },
      {
        en: 'write down',
        cn: '把……写下来（复现第 2 篇）',
        ex: 'Write the answer down before you forget it.'
      },
      {
        en: 'move on',
        cn: '继续往前、不再纠缠（新）',
        ex: 'Fix the problem quietly and move on.'
      },
      {
        en: 'no longer',
        cn: '不再（复现第 1 篇）',
        ex: 'The outcome no longer depends on your mood.'
      },
      {
        en: 'make sure',
        cn: '确保、保证（复现第 28 篇）',
        ex: 'Make sure this happens only once.'
      }
    ],
    writings: [
      {
        expr: 'In hindsight, ...',
        cn: '事后看来……',
        meaning: '用回望视角给结论开路：先承认当时看不清，再给出现在才明白的一句话，比直接下判断更有说服力。',
        context: '全文结尾段的第一句，后面写回头看才看清的一件事。',
        alts: [
          {
            t: 'Looking back, ...',
            n: '更口语'
          },
          {
            t: 'In retrospect, ...',
            n: '更书面'
          },
          {
            t: 'Now I can see that ...',
            n: '强调现在才明白'
          }
        ],
        register: '中性偏书面，记叙与议论都能用。',
        example: 'In hindsight, the teams we admire are not the ones that never fail.'
      },
      {
        expr: 'The goal is not ...',
        cn: '目标不是……而是……',
        meaning: '用 not A but B 把「常见误解」和「真正要的东西」摆在一起收尾，一句话纠正读者的期待。',
        context: '结尾段最后一句，前面已经写清事实与做法。',
        alts: [
          {
            t: 'The point is not ... but ...',
            n: '重点不是……而是……'
          },
          {
            t: 'What matters is not ... but ...',
            n: '更抽象、更书面'
          },
          {
            t: 'We are not trying to ... ; we are trying to ...',
            n: '展开成两句'
          }
        ],
        register: '中性偏书面，语气坚定。',
        example: 'The goal is not a life without mistakes but a working life where each mistake teaches once.'
      }
    ],
    sentences: [
      {
        text: 'Learning from mistakes at work — a habit some industries build into their daily work — is a skill that can be practiced.',
        points: [
          '<b>主干</b>：Learning from mistakes at work is a skill that can be practiced. 中间两个破折号之间的 <b>插入语</b> a habit some industries build into their daily work 去掉后句子照样成立——这是判断插入语最简单的办法。',
          '<b>插入语内部</b>是一个<b>省略关系代词的定语从句</b> (that) some industries build into their daily work，修饰 habit；build A into B 表示「把甲嵌进乙里」。',
          '<b>主句</b>里 a skill that can be practiced 又带一个 that 定语从句，和插入语里的定语从句一前一后，形成「双定语从句 + 插入语」的结构。',
          '<b>为什么值得学</b>：先读主干、后读插入语，是四级长阅读的通用拆句法；写作里用破折号补一层说明，比另起一句更紧凑。',
          '<b>常见变体</b>：Reading widely — a habit some people build into their mornings — changes how you write.'
        ]
      },
      {
        text: 'What makes this useful is the rule behind it — the review looks at the setup, not the person — because blame ends the conversation a fix needs.',
        points: [
          '<b>主干</b>：What makes this useful is the rule behind it —— 主语是 <b>what</b> 引导的名词性从句，表语是 the rule，两个成分一前一后夹住系动词。',
          '<b>插入语</b>：破折号之间的 the review looks at the setup, not the person 是对 the rule 内容的补充说明，去掉不影响主句。',
          '<b>多从句嵌套</b>：because 引导<b>原因状语从句</b>，其中 the conversation a fix needs 是<b>省略关系代词的定语从句</b>（the conversation that a fix needs）——一句话共四层：主语从句 + 插入语 + 原因从句 + 定语从句。',
          '<b>为什么值得学</b>：这是「复盘类」文章的核心论证句，把「规矩是什么、为什么重要」一次说完；读时先抓 What … is …，再回头补细节。',
          '<b>写作迁移</b>：What makes this plan work is the rule behind it — nobody works alone — because the task needs two people.'
        ]
      },
      {
        text: 'Keep a record of the answers while the details are fresh — memory will rebuild the story in your favor, which is what a review must avoid.',
        points: [
          '<b>主干</b>：前半句是<b>祈使句</b> Keep a record of the answers，while the details are fresh 是时间状语从句；<b>keep a record of</b> 中的 of 不能丢。',
          '<b>破折号后</b>补充说明为什么现在就得记：memory will rebuild the story in your favor, which is what a review must avoid；<b>which</b> 的先行词是前面整件事（记忆会把自己写成好人）。',
          '<b>what a review must avoid</b> 是 what 引导的<b>表语从句</b>，what 同时作 avoid 的宾语，相当于 the thing that a review must avoid。',
          '<b>为什么值得学</b>：先给动作（记下来），再解释理由，是给建议最好用的顺序，适合写方法类段落。',
          '<b>注意点</b>：fresh 在这里指「记忆还没凉」；换成 new 就变成「答案是新的」，不合逻辑。'
        ]
      },
      {
        text: 'Only after the apology and the repair does anyone ask the useful question: how do we make sure this happens once?',
        points: [
          '<b>主干</b>：正常语序是 Anyone asks the useful question only after the apology and the repair；<b>only + 状语</b>（这里是时间状语）提到句首，主句就要<b>部分倒装</b>：助动词 does 提到主语 anyone 之前。',
          '<b>倒装范围</b>：只有主句倒装，because / after 引导的从句不倒装；另外 <b>only + 主语</b> 不倒装（Only the manager knows …），这是最容易错的分界。',
          '<b>同位说明</b>：冒号后的 how do we make sure this happens once? 是对 the useful question 的具体展开，属于<b>同位性质的直接提问</b>，冒号后面可以直接用疑问句。',
          '<b>为什么值得学</b>：倒装自带强调语气，正好用来引出全文最想让读者问的那个问题——放在结论前最有力。',
          '<b>常见变体</b>：Only by writing it down can we see the gap.'
        ]
      }
    ],
    questions: [
      {
        en: 'What do crews do after every flight, even when nothing harmful happened?',
        cn: '每次航班结束后，即使没有造成任何危害，机组人员要做什么？',
        ans: 'They file reports on what went wrong.',
        ansCn: '他们会提交报告，写清楚哪里出了问题。'
      },
      {
        en: 'What four questions does a personal debrief ask?',
        cn: '一次个人复盘要问的四个问题是什么？',
        ans: 'What happened? What did I expect? Where is the gap? What will I change?',
        ansCn: '发生了什么？我原本预期什么？差距在哪里？我要改什么？'
      },
      {
        en: 'What can we infer about people who only promise to be more careful next time?',
        cn: '从文中可以推出，只承诺「下次更小心」的人会怎样？',
        ans: 'They are likely to make the same mistake again when they are tired or rushed, because memory and good intentions do not last.',
        ansCn: '他们很可能在疲惫或匆忙时再犯同样的错，因为记忆和好念头靠不住。'
      },
      {
        en: 'Why does the writer mention the two nurses saying the patient’s name and the drug out loud?',
        cn: '作者为什么提到两名护士大声说出病人姓名和药名这件事？',
        ans: 'To show that the answer to a review can become a small checklist step that protects people later.',
        ansCn: '为了说明复盘得到的答案可以变成一条小小的核对步骤，在后面保护很多人。'
      },
      {
        en: 'What is the writer’s attitude towards mistakes at work?',
        cn: '作者对工作中的错误持什么态度？',
        ans: 'Mistakes should not be hidden or blamed on one person; they should be written down and turned into a step or a rule.',
        ansCn: '错误不该被藏起来、也不该怪到某个人头上，而应该写下来，变成一步流程或一条规则。'
      }
    ],
    writingTask: {
      en: 'Write 100–120 words about a mistake you made and the rule or routine you built afterwards.',
      hints: [
        'At work (or in study), I once ...',
        'What actually happened was ...',
        'The gap was between ... and ...',
        'From then on, I ...'
      ],
      hintCn: '用 6–8 句话写一次你犯过的错误：先说发生了什么，再说你和预期之间的差距，然后写你事后加了哪一步规则或习惯，最后一句用 In hindsight, … 收尾。',
      req: '至少使用 3 个本篇学过的词或搭配（debrief / gap / acknowledge / take responsibility for / run through / the goal is not …）。'
    },
    speakingTask: {
      en: 'Speak for one minute: give your opinion on how a team should treat mistakes, one reason, and one example from your own experience.',
      points: [
        'Your view: hide the mistake or share it?',
        'One reason for that view',
        'One example with a time, a place or a number',
        'One sentence to close'
      ],
      pointCn: '一分钟里讲完「观点 → 原因 → 例子 → 收尾」四步；例子要有具体的时间、地点或数字，不要只说「大家都会犯错」。',
      skeleton: 'In my opinion, a team should ... The main reason is that ... For example, once ... , and then we ... To sum up, ...'
    },
    focus: [
      '<b>新授核心词 17 个</b>：<span class=\'en\'>hide, culture, pilot, incident, minor, trigger, procedure, symptom, investigate, checklist, debrief, gap, acknowledge, fear, major, outcome, revise</span> —— <b>debrief</b> 名动同形（do a debrief / debrief the team），复盘场景的高频词；<b>procedure</b> 强调「一步步的规定」，本篇复现的 <span class=\'en\'>process</span> 强调「过程」，不要混；<b>incident</b> 比 accident 轻，多指「事件、事故征候」；<b>acknowledge</b> 后接名词或 doing，不接 to do；<b>major / minor</b> 是一对反义形容词，可同时记；<b>revise</b> 是「修订（计划、流程）」，与复现词 <span class=\'en\'>review</span> 不同。',
      '<b>本篇复现的旧词（本篇是节点篇，共 8 处灰点，覆盖阶段一至三重点旧词）</b>：第 9 篇的 <span class=\'en\'>notice → notices</span>、第 24 篇的 <span class=\'en\'>error</span>、第 13 篇的 <span class=\'en\'>blame</span>、第 29 篇的 <span class=\'en\'>process</span>、第 20 篇的 <span class=\'en\'>prevent → prevents</span> 与 <span class=\'en\'>fail</span>、第 23 篇的 <span class=\'en\'>pressure</span>、第 17 篇的 <span class=\'en\'>routine</span>；短语复现另有第 15 篇的 <span class=\'en\'>go wrong</span>、第 19 篇的 <span class=\'en\'>turn … into …</span>、第 10 篇的 <span class=\'en\'>instead of / keep a record of</span>、第 12 篇的 <span class=\'en\'>take responsibility for</span>、第 2 篇的 <span class=\'en\'>write down</span>、第 1 篇的 <span class=\'en\'>no longer</span>、第 28 篇的 <span class=\'en\'>make sure</span>。',
      '<b>四类长难句在本篇收口</b>：插入语（<span class=\'en\'>Learning from mistakes at work — a habit … — is a skill</span>）、多从句嵌套（<span class=\'en\'>What makes this useful is the rule behind it — … — because blame ends the conversation a fix needs</span>）、同位性质的直接提问（<span class=\'en\'>the useful question: how do we …</span>）、部分倒装（<span class=\'en\'>Only after … does anyone ask …</span>）—— 阶段四要求的四种结构各出现一次，都在长难句解析里拆开了。',
      '<b>复盘四问与骨架搭配</b>：<span class=\'en\'>what happened → what did I expect → where is the gap → what will I change</span>；动作链配 <span class=\'en\'>take responsibility for</span>（先担责）→ <span class=\'en\'>keep a record of</span>（写下来）→ <span class=\'en\'>run through</span>（过一遍新步骤）→ <span class=\'en\'>speak up</span>（让团队敢说）。注意「担责」和「追责」的区别：本文只追究流程，不追究人。',
      '<b>全文逻辑线与题型提醒</b>：藏错的常态 → 航空的做法 → 医疗的做法 → 为什么写下来才有效 → 个人四问 → 把教训变成习惯 → 担责与道歉 → 收束（每个错误只教一次）。细节题抓「谁在什么时候做什么」；推断题抓「只靠小心会怎样」；论证关系题抓「例子证明哪一条观点」（两护士的例子证明「复盘的答案会变成核对步骤」）；态度题看作者把错误放在「该隐藏」还是「该变成流程」这一边。',
      '<b>⭐ 本阶段复盘 · 词汇抽查</b>：请盖住释义，认一认这 10 个阶段一至三的旧词 —— <span class=\'en\'>afford, attention, suggest, improve, opinion, encourage, compare, decide, effort, hesitate</span>。任何两个想不起来的，写进阶段五的复习清单，会安排在第 41–45 篇里再次复现；顺带检查本篇 8 处灰点是否都能说出出处。',
      '<b>⭐ 本阶段复盘 · 本阶段核心维度回顾与下阶段难度确认</b>：阶段四（第 31–40 篇）练过的核心维度是 —— 篇幅 400→510 词、词表 15–20 条、新词密度 5–7%、长难句 3–5 句（多从句嵌套 / 插入语 / 同位语 / 强调与倒装初步）、写作 100–120 词、阅读题固定「细节 2 + 推断 1 + 论证关系 1 + 态度或写作目的 1」。下阶段（第 41–50 篇 · 阶段五 · 综合提高）的难度确认：篇幅 510→650 词、词表 16–24 条、新词密度 5.5–7.5%、长难句 4–6 句、写作 120–150 词三段式，阅读题在现有四类之外新增<b>隐含意义 / 作者立场 / 篇章结构 / 批判性问题</b>。<b>如果你读完这一篇觉得「刚好」或「偏简单」，就按计划推进；如果偏难，第 41 篇只下调新词密度，其余维度照旧。</b>请给一个 1–5 的难度自评：1＝偏难，3＝刚好，5＝偏简单。'
    ],
    standard: {
      time: '约 40 分钟',
      bar: '阶段四收官复盘：阅读题 5 题对 ≥ 4 · 17 个核心词遮住中文说出 ≥ 13 · 拆开 4 处长难句 · 完成 100–120 词写作与 1 分钟结构化口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 17 个核心词中的 13 个（debrief、procedure、acknowledge、outcome、revise …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '11 个高频搭配掌握 8 个，能各造一句（take responsibility for、run through、speak up、keep a record of …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 4 处长难句各自的结构（插入语 / 多从句嵌套 / 同位说明 / 部分倒装），并仿写其中 2 处',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；第 4 题要说出两护士的例子证明的是哪一条观点',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 100–120 词，至少用上 In hindsight, … 或 The goal is not …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1 分钟讲完「观点 → 原因 → 例子 → 收尾」，例子要有具体的时间、地点或数字',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 8 处灰点旧词，说出其中 6 个的意思；再给阶段四的收获打一个 1–5 分',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 41,
    slug: '041-the-language-of-numbers',
    title: 'The Language of Numbers',
    titleCn: '数字的语言',
    stage: '阶段五 · 综合提高',
    stageRange: '第 41–50 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 520 词'
      },
      {
        k: '新词密度',
        v: '约 5.6%'
      },
      {
        k: '长难句',
        v: '5 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/041.jpg',
    coverCredit: 'Photo: RDNE Stock project / Pexels',
    body: [
      'Numbers look like the most honest thing on a page: they read the same in every language. Yet one <span class="w-cet4" data-cn="数字、数值">figure</span> can support two opposite stories. <span class="w-sentence">A number is never wrong on its own; it is the question around it that decides what we see.</span>',
      'Start with the <span class="w-rev">average</span>. A company of ten people pays nine workers 3,000 a month and the owner 30,000: on average the ten earn 5,700 each, and almost everyone earns less. <span class="w-sentence">The one number for the whole group hides the distance between the top and the bottom without lying.</span> The <span class="w-cet4" data-cn="中位数">median</span> <span class="w-cet4" data-cn="收入">income</span>, the middle value, is 3,000 and describes the <span class="w-rev">typical</span> worker better. One <span class="w-synonym" data-cn="＝ very large 的替换词">enormous</span> value drags the average up: the number is <span class="w-cet4" data-cn="精确的">precise</span>, the picture is not.',
      'Percentages can be <span class="w-rev">misleading</span> in the same way, because a <span class="w-cet4" data-cn="百分比">percentage</span> without its base is only half a sentence. If a shop sells two coats one week and three the next, sales are up 50 per cent: a headline hiding one extra coat, <span class="w-rev">likely</span> to travel further than the correction. <span class="w-sentence">Ask how large the number was at the start, because doubling something very small still leaves something very small.</span>',
      'Charts can <span class="w-cet4" data-cn="夸大、夸张">exaggerate</span> even when the numbers are correct. If a bar chart starts at zero, the rise is <span class="w-synonym" data-cn="＝ almost not 的替换词">barely</span> visible; <span class="w-cet4" data-cn="调整">adjust</span> the axis to start below the smallest value, and the same rise looks like a jump. <span class="w-sentence">Nothing on the chart has changed; only the starting point moved, and the shape of the line does the arguing.</span> The <span class="w-cet4" data-cn="刻度、比例">scale</span> of the axis <span class="w-rev">distorts</span> the story: read the <span class="w-cet4" data-cn="范围、幅度">range</span> first.',
      'Every <span class="w-cet4" data-cn="调查">survey</span> rests on a <span class="w-cet4" data-cn="样本">sample</span>, and someone chose that sample: this is where <span class="w-cet4" data-cn="偏差、偏倚">bias</span> enters. A hundred students in a library cannot <span class="w-cet4" data-cn="代表">represent</span> a whole city, and a leading question pushes people towards ‘yes’. Honest researchers <span class="w-phrase" data-cn="指出">point out</span> how the sample was picked; <span class="w-synonym" data-cn="＝ a lot of 的替换词">plenty of</span> others do not. Then comes the <span class="w-cet4" data-cn="选择性的、挑挑拣拣的">selective</span> report: of a number of results, only the one that rose is announced.',
      '<span class="w-writing" data-cn="说句公道话……">To be fair,</span> numbers are still the best tool we have. A story can be forgotten; a carefully <span class="w-rev">measured</span> <span class="w-cet4" data-cn="统计数字">statistic</span> <span class="w-phrase" data-cn="至少">at least</span> shows where a <span class="w-rev">trend</span> began and where it is going, and it is the strongest <span class="w-rev">evidence</span> we have. <span class="w-phrase" data-cn="表面上看">On the surface</span>, the <span class="w-cet4" data-cn="大多数">majority</span> of charts are not lies; they show only the part of the truth that supports their <span class="w-cet4" data-cn="主张、论断">claim</span>.',
      '<span class="w-writing" data-cn="在我看来……">In my view,</span> three habits are enough. First, ask what a number <span class="w-phrase" data-cn="以……为依据">is based on</span>: the base of a percentage, the size of a sample. Second, <span class="w-rev">compare</span> the figure with last year and keep an eye on the median. Third, <span class="w-phrase" data-cn="把……记在心里">keep the context in mind</span>: a number <span class="w-phrase" data-cn="脱离语境、被断章取义">taken out of context</span> means something else. <span class="w-sentence">Do not ask only what the number says; ask what it leaves out and who chose to leave it out.</span>',
      'Numbers do not lie, but they rarely speak on their own. In other words, two honest people can look at the same table and <span class="w-cet4" data-cn="得出结论">conclude</span> differently. <span class="w-phrase" data-cn="乍一看">At first glance</span> the answer is <span class="w-rev">obvious</span>; the second glance is worth more. That, <span class="w-writing" data-cn="在我看来">in my view</span>, is what this language asks: read slowly, and let every number explain itself.'
    ],
    translation: [
      '数字看上去是纸面上最诚实的东西：无论哪种语言，读起来都一样。然而同一个数字可以支撑两个相反的故事。数字本身从不出错；决定我们看到什么的，是围绕它的问题。',
      '先从平均数说起。一家十个人的公司，给九名工人每月三千，给老板三万：平均下来每人挣五千七，可几乎人人都没挣到这个数。那个用来概括整群人的数字，把最高和最低之间的差距藏了起来，而且并没有说谎。中位数收入，也就是排在中间的那个数，是三千，它更能说明普通工人的处境。一个极大的数值把平均数拉了上去：数字很精确，画面却不是那么回事。',
      '百分比也会以同样安静的方式误导人，因为没有基数的百分比只是半句话。如果一家店这周卖出两件大衣、下周卖出三件，销售额就上涨了百分之五十：一个标题藏起了仅仅多卖出的那一件大衣，却比后来的更正更可能广为流传。要问这个数字起初有多大，因为把一个很小的数翻倍，得到的仍然很小。',
      '即使每个数字都对，图表也可以把事情夸大。如果柱状图从零开始，涨幅几乎看不出来；把坐标轴的起点调到最小值之下，同样的涨幅看上去就像一次猛涨。图表上的东西一点没变，只是起点挪了位置，而线条的形状替人把话说完了。坐标轴的刻度歪曲了故事：先看取值范围。',
      '每个调查都建立在一个样本之上，而样本是人选出来的：偏差就是在这里进来的。图书馆里的一百个学生代表不了一整座城市，而一个诱导性的问题会把人推向「是」。诚实的研究者会指出样本是怎么挑出来的；更多人则不会。接着是选择性汇报：一大堆结果里，只有上涨的那一个被公布。',
      '说句公道话，数字仍然是我们手里最好的工具。一个故事会被忘记；一个认真测量过的统计数字至少能显示趋势从哪里开始、走向哪里，它是我们最有力的证据。从表面上看，大多数图表都不是谎言；它们只是展示了真相中支持其主张的那一部分。',
      '在我看来，三个习惯就够了。第一，问一个数字依据什么而来：百分比的基数、样本的大小。第二，把这个数字和去年的做比较，并留意中位数。第三，把语境记在心里：脱离语境的数字会变成另一个意思。不要只问数字说了什么；要问它省略了什么，又是谁选择把它省略掉的。',
      '数字不会说谎，但它们很少独自开口。换句话说，两个诚实的人看同一张表，可能得出不同的结论。乍一看答案显而易见；再看一眼才更值钱。在我看来，这正是这门语言对我们的要求：读得慢一点，让每一个数字自己解释自己。'
    ],
    vocabulary: [
      {
        w: 'figure',
        ph: '/ˈfɪɡə(r)/',
        pos: 'n.',
        cn: '数字、数值',
        col: 'a sales figure — 一个销售数字；the latest figures — 最新数据',
        ex: 'One figure can support two opposite stories.'
      },
      {
        w: 'median',
        ph: '/ˈmediən/',
        pos: 'n./adj.',
        cn: '中位数（的）',
        col: 'the median income — 中位数收入；the median value — 中位数',
        ex: 'The median describes the typical worker better than the average.'
      },
      {
        w: 'income',
        ph: '/ˈɪnkʌm/',
        pos: 'n.',
        cn: '收入',
        col: 'monthly income — 月收入；income from a job — 工作收入',
        ex: 'The median income here is 3,000 a month.'
      },
      {
        w: 'precise',
        ph: '/prɪˈsaɪs/',
        pos: 'adj.',
        cn: '精确的',
        col: 'a precise figure — 精确的数字；to be precise — 确切地说',
        ex: 'The number is precise, but the picture is not.'
      },
      {
        w: 'percentage',
        ph: '/pəˈsentɪdʒ/',
        pos: 'n.',
        cn: '百分比',
        col: 'a large percentage of … — ……中的很大比例；express the result as a percentage — 用百分比表示结果',
        ex: 'A percentage without its base is only half a sentence.'
      },
      {
        w: 'exaggerate',
        ph: '/ɪɡˈzædʒəreɪt/',
        pos: 'v.',
        cn: '夸大、夸张',
        col: 'exaggerate the problem — 夸大问题；exaggerate the rise — 夸大涨势',
        ex: 'Charts can exaggerate even when the numbers are correct.'
      },
      {
        w: 'adjust',
        ph: '/əˈdʒʌst/',
        pos: 'v.',
        cn: '调整',
        col: 'adjust the scale — 调整刻度；adjust to … — 适应……',
        ex: 'Adjust the axis and the same rise looks like a jump.'
      },
      {
        w: 'scale',
        ph: '/skeɪl/',
        pos: 'n.',
        cn: '刻度、比例',
        col: 'the scale of the axis — 坐标轴的刻度；on a large scale — 大规模地',
        ex: 'The scale of the axis distorts the story.'
      },
      {
        w: 'range',
        ph: '/reɪndʒ/',
        pos: 'n.',
        cn: '范围、幅度',
        col: 'a wide range of … — 各种各样的……；the range of the axis — 坐标轴的取值范围',
        ex: 'Read the range first, then read the line.'
      },
      {
        w: 'survey',
        ph: '/ˈsɜːveɪ/',
        pos: 'n./v.',
        cn: '调查',
        col: 'carry out a survey — 开展一次调查；survey 200 people — 调查两百人',
        ex: 'Every survey rests on a sample.'
      },
      {
        w: 'sample',
        ph: '/ˈsɑːmpl/',
        pos: 'n./v.',
        cn: '样本；抽样',
        col: 'a sample of 100 people — 一百人的样本；sample the water — 抽取水样',
        ex: 'Someone chose that sample, so bias enters.'
      },
      {
        w: 'bias',
        ph: '/ˈbaɪəs/',
        pos: 'n.',
        cn: '偏差、偏倚',
        col: 'a small bias — 一点偏差；show bias towards … — 对……有偏向',
        ex: 'Every sample carries a little bias.'
      },
      {
        w: 'represent',
        ph: '/ˌreprɪˈzent/',
        pos: 'vt.',
        cn: '代表、表示',
        col: 'represent the whole group — 代表整个群体；represent the data — 表示这些数据',
        ex: 'A hundred students cannot represent a whole city.'
      },
      {
        w: 'selective',
        ph: '/sɪˈlektɪv/',
        pos: 'adj.',
        cn: '选择性的、挑挑拣拣的',
        col: 'selective reporting — 选择性汇报；be selective about … — 对……挑挑拣拣',
        ex: 'Then comes the selective report.'
      },
      {
        w: 'statistic',
        ph: '/stəˈtɪstɪk/',
        pos: 'n.',
        cn: '统计数字',
        col: 'an official statistic — 官方统计数字；statistics show … — 统计数据显示……',
        ex: 'A carefully measured statistic shows where a trend began.'
      },
      {
        w: 'majority',
        ph: '/məˈdʒɒrəti/',
        pos: 'n.',
        cn: '大多数',
        col: 'the majority of … — ……的大多数；a large majority — 绝大多数',
        ex: 'The majority of charts are not lies.'
      },
      {
        w: 'claim',
        ph: '/kleɪm/',
        pos: 'n./v.',
        cn: '主张、声称',
        col: 'make a claim — 提出一个主张；claim that … — 声称……',
        ex: 'Charts often show only the part that supports their claim.'
      },
      {
        w: 'conclude',
        ph: '/kənˈkluːd/',
        pos: 'v.',
        cn: '得出结论',
        col: 'conclude from … — 从……得出结论；conclude that … — 断定……',
        ex: 'Two honest people can conclude differently from the same table.'
      }
    ],
    phrases: [
      {
        en: 'on average',
        cn: '平均而言（新）',
        ex: 'On average, the ten people earn 5,700 each.'
      },
      {
        en: 'be taken out of context',
        cn: '脱离语境、被断章取义（新）',
        ex: 'A number taken out of context means something else.'
      },
      {
        en: 'at first glance',
        cn: '乍一看（复现第 32 篇）',
        ex: 'At first glance the answer is obvious.'
      },
      {
        en: 'point out',
        cn: '指出（复现第 33 篇）',
        ex: 'Honest researchers point out how the sample was picked.'
      },
      {
        en: 'keep … in mind',
        cn: '把……记在心里（复现第 27 篇）',
        ex: 'Keep the context in mind when you read a number.'
      },
      {
        en: 'be based on',
        cn: '以……为依据（复现第 28 篇）',
        ex: 'Ask what a number is based on.'
      },
      {
        en: 'on the surface',
        cn: '表面上看（复现第 34 篇）',
        ex: 'On the surface, the chart is not a lie.'
      },
      {
        en: 'at least',
        cn: '至少（复现第 24 篇）',
        ex: 'A statistic at least shows where a trend began.'
      },
      {
        en: 'a number of',
        cn: '若干、一些（复现第 34 篇）',
        ex: 'Of a number of results, only the one that rose is announced.'
      },
      {
        en: 'in other words',
        cn: '换句话说（复现第 33 篇）',
        ex: 'In other words, numbers rarely speak on their own.'
      },
      {
        en: 'keep an eye on',
        cn: '留意、盯着（复现第 22 篇）',
        ex: 'Keep an eye on the median when people talk about income.'
      }
    ],
    writings: [
      {
        expr: 'In my view, ...',
        cn: '在我看来……',
        meaning: '在给出结论前先亮明立场，提醒读者后面是「我的判断」而不是公认事实，议论类文章最常用的开路句式。',
        context: '第七段第一句，后面直接给出作者的三条建议；结尾段还可以在句中再用一次收束。',
        alts: [
          {
            t: 'From my point of view, ...',
            n: '更强调「站在我的角度」'
          },
          {
            t: 'I would argue that ...',
            n: '更书面、带论证口气'
          },
          {
            t: 'The way I see it, ...',
            n: '更口语'
          }
        ],
        register: '中性，议论、说明都适用。',
        example: 'In my view, three habits are enough.'
      },
      {
        expr: 'To be fair, ...',
        cn: '说句公道话……',
        meaning: '让步句式：先承认对方或反面的合理之处，再引出自己的主张，让论证显得公允而不偏激。',
        context: '第六段第一句，前面讲了各种误导手法，这里先承认数字本身仍然有用。',
        alts: [
          {
            t: 'Admittedly, ...',
            n: '更书面的让步'
          },
          {
            t: 'To some extent, ...',
            n: '让步更温和'
          },
          {
            t: 'It is true that ..., but ...',
            n: '展开成让步 + 转折两句'
          }
        ],
        register: '中性偏书面，常与 but, yet, still 呼应。',
        example: 'To be fair, numbers are still the best tool we have.'
      }
    ],
    sentences: [
      {
        text: 'A number is never wrong on its own; it is the question around it that decides what we see.',
        points: [
          '<b>主干</b>：前后两个分句用分号连接 —— 前句 A number is never wrong on its own，后句 it is the question around it that decides what we see，一否定一强调。',
          '<b>强调句</b>：it is … that … 强调主语 the question around it；把强调框架去掉后句子依然成立：the question around it decides what we see。判断强调句最简单的办法就是「去掉 it is / that 试试」。',
          '<b>decide 的宾语</b>是 what we see 这个 <b>what 引导的宾语从句</b>，what 同时作 see 的宾语。',
          '<b>为什么值得学</b>：这句话是全文的论点 —— 数字不会错，错的是提问的方式；写作里用强调句点出论点，比平铺直叙更有力量。',
          '<b>常见变体</b>：It is the way you ask that changes the answer.'
        ]
      },
      {
        text: 'The one number for the whole group hides the distance between the top and the bottom without lying.',
        points: [
          '<b>主干</b>：The one number … hides the distance …，主语中心词是 number，for the whole group 是介词短语作后置定语，one 在这里是「唯一的、单单一个」。',
          '<b>介词搭配</b>：the distance between A and B 表示「甲乙之间的差距」；between 后接两个并列的对比项 the top and the bottom。',
          '<b>without lying</b> 是 <b>without + 动名词</b>结构，表示「在不撒谎的情况下」；英语里这种「做某事而不做另一件事」的表达非常地道。',
          '<b>为什么值得学</b>：这句话把「平均数的问题」说得极准 —— 它没有造假，只是没说全；论证里区分「说谎」和「说不全」是很高级的一层。',
          '<b>写作迁移</b>：The map hides the distance between the city and the village without lying.'
        ]
      },
      {
        text: 'Ask how large the number was at the start, because doubling something very small still leaves something very small.',
        points: [
          '<b>主干</b>：前半句是<b>祈使句</b> Ask …，宾语是 how large the number was 这个 <b>how 引导的宾语从句</b>（要用陈述语序：how large the number was，不是 how large was the number）。',
          '<b>because</b> 引导<b>原因状语从句</b>，主语是动名词短语 <b>doubling something very small</b>，谓语是 still leaves，宾语 something very small —— 形容词修饰不定代词要<b>后置</b>。',
          '<b>at the start</b> 表示「在起点、在一开始」，问「基数有多大」是看百分比的第一步。',
          '<b>为什么值得学</b>：先给动作（去问基数），再解释理由，是劝说类段落最好用的顺序；同时这句话示范了「小基数翻倍仍然很小」这个常识性论证。',
          '<b>注意点</b>：leave 在这里是「留下、剩下」，不是「离开」。'
        ]
      },
      {
        text: 'Nothing on the chart has changed; only the starting point moved, and the shape of the line does the arguing.',
        points: [
          '<b>主干</b>：三个分句并列 —— Nothing on the chart has changed / only the starting point moved / the shape of the line does the arguing，用分号和 and 连接。',
          '<b>省略与倒装感</b>：only + 名词开头的分句读起来像强调，相当于「唯一动过的只有起点」；only 修饰主语时<b>不倒装</b>，这点和 only + 状语不同。',
          '<b>拟人</b>：does the arguing（替人把架吵了）把线条写成会说话的人，比 says something 更生动；do the + 动名词 是地道搭配（do the talking / do the cleaning）。',
          '<b>为什么值得学</b>：这句话点破「图表误导」的本质 —— 数据没改，改的是呈现方式；适合用在「现象没变、说法变了」的论证里。',
          '<b>常见变体</b>：Nothing in the data changed; only the title did the work.'
        ]
      },
      {
        text: 'Do not ask only what the number says; ask what it leaves out and who chose to leave it out.',
        points: [
          '<b>主干</b>：两个<b>祈使句</b>并列（Do not ask … ; ask …），一正一反，节奏对仗，适合放在段落或文章结尾。',
          '<b>宾语从句</b>：what the number says 与 what it leaves out 都是 <b>what 引导的宾语从句</b>；第二个祈使句还有一个并列的 <b>who 引导的宾语从句</b> who chose to leave it out。',
          '<b>choose to do sth.</b> 表示「选择做某事」，leave … out 表示「把……漏掉、不写进去」，两个搭配都值得背。',
          '<b>为什么值得学</b>：读数据的两问 —— 它说了什么、它没说什么、谁决定不说 —— 是全文的方法论收口，也是批判性阅读的通用问句。',
          '<b>写作迁移</b>：Do not ask only what the book says; ask what it leaves out and who decided to leave it out.'
        ]
      }
    ],
    questions: [
      {
        en: 'What can we infer about the nine workers in the company example?',
        cn: '从文中公司的例子可以推出，那九名工人的处境是怎样的？',
        ans: 'They each earn less than the average income of the ten people in the company.',
        ansCn: '他们每个人的收入都低于公司十个人的平均收入。'
      },
      {
        en: 'What can we infer about a chart whose axis starts just below the smallest value?',
        cn: '从文中可以推出，坐标轴起点设在最小值之下的图表会产生什么效果？',
        ans: 'It makes a small rise look like a big jump, although no number on the chart has been changed.',
        ansCn: '它会让小小的上涨看起来像一次猛涨，尽管图表上的数字一个都没改。'
      },
      {
        en: 'What is the writer’s view: should we trust numbers less after reading this?',
        cn: '作者的观点是什么：读完之后我们是否应该少信数字？',
        ans: 'No. The writer thinks we should not trust numbers less, but read them with more care and ask what they are based on and what they leave out.',
        ansCn: '不该。作者认为不是要少信数字，而是要更仔细地读：问它依据什么、又省略了什么。'
      },
      {
        en: 'How is the passage developed?',
        cn: '这篇文章是怎样展开的？',
        ans: 'It shows first how averages, percentages and charts can mislead, then how surveys can be misused, then admits that numbers are still our best tool, and finally gives three habits for reading them.',
        ansCn: '文章先讲平均数、百分比和图表如何误导，再讲调查如何被滥用，接着承认数字仍然是最好的工具，最后给出读数字的三个习惯。'
      },
      {
        en: 'Why does the writer mention a shop that sold two coats one week and three the next?',
        cn: '作者为什么提到一家一周卖出两件大衣、下周卖出三件的店？',
        ans: 'To show that a percentage can sound large while the real change is very small, because the base of the percentage is missing.',
        ansCn: '为了说明百分比听上去很大，实际变化却很小，因为百分比的基数不见了。'
      }
    ],
    writingTask: {
      en: 'Write 120–150 words about a number you saw in an advertisement or a news story, and explain how you would check it.',
      hints: [
        'Last week I saw a figure that said ...',
        'On the surface, the number seems to ...',
        'What the number does not show is ...',
        'Before I believe a figure like this, I ...'
      ],
      hintCn: '分三段写：先复述你看到的那个数字和它的说法，再指出它没有说明的基数、样本或坐标轴，最后写你会用哪两三步去核对它；结尾可用 In my view, … 收束。',
      req: '至少使用 3 个本篇学过的词或搭配（percentage / median / sample / on average / keep … in mind / at first glance）。'
    },
    speakingTask: {
      en: 'Answer in 1.5–2 minutes. Give your view, one reason and one example, then answer one counterargument.',
      points: [
        'Your view: should ordinary people learn to read data?',
        'One reason and one example with a real number',
        'One counterargument — ‘numbers are for experts’ — and your answer to it',
        'One sentence to close'
      ],
      pointCn: '一点五分钟到两分钟里讲完「观点 → 原因 → 例子 → 反驳 → 收尾」；例子里要有一个具体数字，反驳要先复述对方的理由，再给出你的回应。',
      skeleton: 'In my view, ordinary people should ... The reason is that ... For example, one chart showed ... , and it turned out that ... Some people may say that numbers are for experts; however, ... To sum up, ...'
    },
    focus: [
      '<b>新授核心词 18 个</b>：<span class=\'en\'>figure, median, income, precise, percentage, exaggerate, adjust, scale, range, survey, sample, bias, represent, selective, statistic, majority, claim, conclude</span> —— <b>median</b> 是「中位数」，和 <span class=\'en\'>average</span>（平均数）成对记，谈收入、价格时先想中位数；<b>income</b> 多作不可数名词，说「一份收入」用 an income 也可以；<b>percentage</b> 一定要带着基数（base）才有意义；<b>adjust / scale / range</b> 三个词在图表场景里固定搭配：adjust the scale、the range of the axis；<b>sample / survey / bias</b> 是调查三件套；<b>claim</b> 作名词是「主张」，作动词是「声称」；<b>conclude</b> 后接 that 从句或 from 短语。',
      '<b>本篇复现的旧词</b>：第 29 篇的 <span class=\'en\'>average</span>（本文的主角之一）、第 11 篇的 <span class=\'en\'>typical</span>、第 34 篇的 <span class=\'en\'>misleading</span>、第 6 篇的 <span class=\'en\'>likely</span>、第 31 篇的 <span class=\'en\'>distort</span> 与 <span class=\'en\'>evidence</span>、第 30 篇的 <span class=\'en\'>measure → measured</span> 与 <span class=\'en\'>obvious</span>、第 22 篇的 <span class=\'en\'>trend</span>、第 4 篇的 <span class=\'en\'>compare</span>；短语复现另有第 32 篇的 <span class=\'en\'>at first glance</span>、第 33 篇的 <span class=\'en\'>point out / in other words</span>、第 27 篇的 <span class=\'en\'>keep … in mind</span>、第 28 篇的 <span class=\'en\'>be based on</span>、第 34 篇的 <span class=\'en\'>on the surface / a number of</span>、第 24 篇的 <span class=\'en\'>at least</span>、第 22 篇的 <span class=\'en\'>keep an eye on</span>。',
      '<b>五处长难句覆盖五种结构</b>：强调句（<span class=\'en\'>it is the question around it that decides …</span>）、名词短语主干 + without 动名词（<span class=\'en\'>… hides the distance … without lying</span>）、祈使句 + 原因从句 + 动名词主语（<span class=\'en\'>Ask how large … , because doubling … leaves …</span>）、分号并列 + 拟人（<span class=\'en\'>the shape of the line does the arguing</span>）、平行宾语从句（<span class=\'en\'>ask what it leaves out and who chose to leave it out</span>）—— 每句都在长难句解析里拆开了，挑两句仿写。',
      '<b>议论文三件套：观点 + 证据 + 让步</b>：观点用 <span class=\'en\'>In my view, …</span>，证据用具体数字（九个工人三千、老板三万、两件大衣变三件），让步用 <span class=\'en\'>To be fair, …</span> 先承认对方合理之处再回到主张。读数据的三步问句：<span class=\'en\'>what is it based on → what does it leave out → who chose to leave it out</span>。',
      '<b>全文逻辑线与题型提醒</b>：数字看似诚实 → 平均数藏差距 → 百分比缺基数 → 图表动刻度 → 调查的样本与措辞 → 让步（数字仍是最好的工具）→ 三个阅读习惯 → 收束（让数字自己解释自己）。推断题抓「例子背后的结论」（九个工人 vs 平均收入、坐标轴起点 vs 涨幅）；作者观点题注意作者<b>并不反对数字</b>，反对的是不问基数就相信；结构题按「三类误导 → 一种工具的让步 → 三条建议」数段落；「作者为什么提到某例」的题，答案一律落在「小变化被说成大变化」这一层。'
    ],
    standard: {
      time: '约 50 分钟',
      bar: '阶段五开篇：阅读题 5 题对 ≥ 4 · 18 个核心词遮住中文说出 ≥ 14 · 拆开 5 处长难句 · 完成 120–150 词写作与 1.5–2 分钟带反驳口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 18 个核心词中的 14 个（median、percentage、sample、claim、conclude …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '11 个高频搭配掌握 8 个，能各造一句（point out、keep … in mind、on the surface、at first glance …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 5 处长难句各自的结构（强调句 / without 动名词 / 祈使句加原因从句 / 省略与拟人 / 平行宾语从句），并仿写其中 2 处',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；第 5 题要说出卖大衣的例子证明的是哪一层意思',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 120–150 词，至少用上 In my view, … 或 To be fair, …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1.5–2 分钟讲完「观点 → 原因 → 例子 → 反驳 → 收尾」，例子里要有一个具体数字',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 10 处灰点旧词，说出其中 8 个的意思与来源篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 42,
    slug: '042-how-cities-keep-cool',
    title: 'How Cities Keep Cool',
    titleCn: '城市如何降温',
    stage: '阶段五 · 综合提高',
    stageRange: '第 41–50 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 535 词'
      },
      {
        k: '新词密度',
        v: '约 5.6%'
      },
      {
        k: '长难句',
        v: '4 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/042.jpg',
    coverCredit: 'Photo: TonyNojmanSK / Pexels',
    body: [
      'On a <span class="w-synonym" data-cn="＝ extremely hot 的替换词">scorching</span> afternoon in midsummer, a thermometer in a city centre reads several degrees higher than one outside town. This is the <span class="w-cet4" data-cn="城市的、都市的">urban</span> heat island: the built-up world stays warm long after dark, and the streets <span class="w-phrase" data-cn="降温、变凉">cool down</span> far more slowly than the fields around it.',
      'Cities <span class="w-cet4" data-cn="困住、滞留（热量）">trap</span> heat for simple reasons. <span class="w-cet4" data-cn="混凝土">Concrete</span>, brick and dark roofs <span class="w-rev">absorb</span> sunlight all day, while tall buildings <span class="w-rev">block</span> the wind. Traffic <span class="w-phrase" data-cn="释放出、散发">gives off</span> heat, and vehicle <span class="w-cet4" data-cn="废气、尾气">exhaust</span> adds more. <span class="w-cet4" data-cn="湿度">Humidity</span> makes a still evening worse. <span class="w-sentence">When the sun beats down for hours, the heat that dark roofs and roads have stored all day is released into the evening, when the wind has died down.</span>',
      'A mature tree gives <span class="w-rev">shade</span> to the <span class="w-cet4" data-cn="路面、人行道">pavement</span> and <span class="w-cet4" data-cn="释放、放出">releases</span> water vapour; under a full canopy the <span class="w-rev">temperature</span> is several degrees lower than over concrete. <span class="w-sentence">A street lined with mature trees can be several degrees cooler in the afternoon than a street of the same width that has no trees at all.</span> A large park works the same way, its air <span class="w-synonym" data-cn="＝ noticeably 的替换词">markedly</span> cooler than the streets around it, and <span class="w-cet4" data-cn="植被（总称）">vegetation</span> helps a city lose heat faster.',
      'Materials matter too: a dark roof can heat its <span class="w-cet4" data-cn="表面">surface</span> to sixty degrees, a <span class="w-cet4" data-cn="浅色的、淡色的">pale</span> one far cooler. Light surfaces <span class="w-cet4" data-cn="反射（光与热）">reflect</span> sunlight before it turns into heat, and porous material lets rain sink in, not run to the <span class="w-cet4" data-cn="排水管、下水道">drain</span>. <span class="w-sentence">What makes a green roof worth its cost is not only cooler top floors, but also the rain it holds back and the heat it takes off the roof.</span> Soil and plants <span class="w-cet4" data-cn="使缓和、使不那么极端">moderate</span> the temperature and need little to <span class="w-rev">maintain</span>.',
      '<span class="w-writing" data-cn="的确，……（让步）">It is true that</span> young trees will not cool a street this summer: a canopy takes a <span class="w-cet4" data-cn="十年">decade</span> to grow. Green space also <span class="w-phrase" data-cn="占据（空间、面积）">takes up</span> land that a crowded district cannot spare. Yet this is an argument for starting early: a <span class="w-rev">local</span> council can <span class="w-cet4" data-cn="扩大、扩展">expand</span> its tree cover, <span class="w-cet4" data-cn="资助、提供资金">fund</span> the work, and <span class="w-cet4" data-cn="安装、设置">install</span> fixes that work in one summer.',
      '<span class="w-writing" data-cn="的确，……（让步）">It is true that</span> pale roads can throw reflected heat towards the people walking on them. <span class="w-sentence">The problem is not that any single measure is perfect, but that a city which depends on only one will fail on the hottest days, when every degree of cooling matters.</span> Researchers <span class="w-phrase" data-cn="指出">point out</span> that the hottest districts are <span class="w-rev">likely</span> to be the ones with the fewest trees, and <span class="w-rev">increasingly</span> where families can least <span class="w-rev">afford</span> cooling. As a result, cooling is a fairness issue too.',
      'Air conditioning follows the same pattern: it cools one room and pushes hot air into the street, which gets hotter in turn. The electricity it <span class="w-cet4" data-cn="消耗、耗费">consumes</span> is often produced far away. That is why strong plans <span class="w-phrase" data-cn="应对、处理">deal with</span> heat at its source and keep it under control: more trees, lighter roofs, and buildings the wind can pass through.',
      '<span class="w-writing" data-cn="真正重要的是……">What really matters is</span> that cooling a city is not one big machine but a number of small decisions, repeated street by street: a lighter roof, a row of trees, a park. None of them works <span class="w-phrase" data-cn="单靠它自己、独自">by itself</span>, yet each is <span class="w-rev">practical</span> somewhere, and over time they add up and <span class="w-rev">reduce</span> the <span class="w-rev">impact</span> of the hottest days. In the long run, the coolest city is the one designed this year.'
    ],
    translation: [
      '盛夏一个酷热的午后，市中心的温度计读数能比城外的高出好几度。这就是城市热岛效应：入夜很久之后，建起来的世界依然温热，街上的降温速度也比周围的田野慢得多。',
      '城市把热量留住，原因并不复杂。混凝土、砖块和深色屋顶整天吸收阳光，而高楼挡住了风。汽车在散热，车辆尾气又添了一层。湿度让无风的夜晚更难受。当太阳连续烤上几个小时，深色屋顶和路面白天积蓄的热量会一直释放到傍晚——那时风已经停了。',
      '成年的大树给路面遮阴，又释放出水汽；完整树冠下的温度比混凝土表面低好几度。一条绿树成荫的街道，下午可以比同样宽度却没有一棵树的街道凉爽好几度。大公园起着同样的作用：它上空的空气明显比周围的街道更凉，而植被能帮一座城市更快散热。',
      '材料同样重要：深色屋顶能把表面烤到六十度，而浅色屋顶则凉快得多。浅色表面在阳光变成热量之前就把它反射回去，多孔材料还能让雨水渗入，而不是直接流进下水道。绿色屋顶做得更进一步：除了顶层更凉爽，它还能留住雨水，把屋顶本身的热量也带走。土壤和植物让温度变得不那么极端，而且几乎不需要维护。',
      '的确，小树今年夏天不会让一条街凉下来：完整的树冠需要十年才能长成。绿地也要占用地块，拥挤的街区总觉得腾不出来。但这恰恰是趁早动手的理由：地方上可以扩大树木覆盖、出资推进这项工作，并装上那些一个夏天就能见效的办法。',
      '的确，浅色路面会把反射的热量抛向走在上面的人。问题不在于哪一种措施完美，而在于只依赖其中一种的城市，会在最热的那几天失手，那几天里每一度降温都至关重要。研究者指出，最热的街区往往正是树最少的街区，而这些地方越来越是那些连降温都最花不起钱的地方。因此，降温也是公平问题。',
      '空调走的是同一条路：它冷却一个房间，却把热气推进街道，接着这条街就更热了。它消耗的电力常常在远处生产。正因如此，有力度的方案会从源头处理热量、把它控制住：更多的树、更浅的屋顶，以及让风能穿过的建筑布局。',
      '真正重要的是：给城市降温不是一台大机器，而是一连串小小的决定，在一条街又一条街上重复：更浅的屋顶、一排树、一座公园。它们没有一样能单靠自己奏效，却每一样都能在某个地方派上用场；随着时间推移，这些选择会叠加起来，共同削弱最热的那几天。从长远看，最凉爽的城市正是今年正在被设计的那座。'
    ],
    vocabulary: [
      {
        w: 'urban',
        ph: '/ˈɜːbən/',
        pos: 'adj.',
        cn: '城市的、都市的',
        col: 'urban areas — 城市地区；urban life — 城市生活',
        ex: 'Urban areas often feel hotter than the countryside around them.'
      },
      {
        w: 'trap',
        ph: '/træp/',
        pos: 'v./n.',
        cn: '困住、使滞留',
        col: 'trap heat — 使热量滞留；fall into a trap — 掉进陷阱',
        ex: 'Tall buildings and dark roofs trap the heat of the day.'
      },
      {
        w: 'concrete',
        ph: '/ˈkɒŋkriːt/',
        pos: 'n./adj.',
        cn: '混凝土；确实的',
        col: 'a concrete floor — 混凝土地面；concrete evidence — 确凿的证据',
        ex: 'Concrete stores heat and gives it back slowly after sunset.'
      },
      {
        w: 'exhaust',
        ph: '/ɪɡˈzɔːst/',
        pos: 'n./v.',
        cn: '废气、尾气；耗尽',
        col: 'vehicle exhaust — 车辆尾气；exhaust fumes — 排出的废气',
        ex: 'Traffic exhaust adds heat as well as pollution.'
      },
      {
        w: 'humidity',
        ph: '/hjuːˈmɪdəti/',
        pos: 'n.',
        cn: '湿度',
        col: 'high humidity — 高湿度；humidity in the air — 空气中的湿度',
        ex: 'High humidity makes a hot evening feel even heavier.'
      },
      {
        w: 'surface',
        ph: '/ˈsɜːfɪs/',
        pos: 'n.',
        cn: '表面',
        col: 'roof surface — 屋顶表面；the surface temperature — 表面温度',
        ex: 'The surface of a dark roof can heat to sixty degrees on a sunny day.'
      },
      {
        w: 'release',
        ph: '/rɪˈliːs/',
        pos: 'v./n.',
        cn: '释放、放出',
        col: 'release heat — 散出热量；release water vapour — 释放水汽',
        ex: 'At night the walls and roads release the heat they stored.'
      },
      {
        w: 'reflect',
        ph: '/rɪˈflekt/',
        pos: 'v.',
        cn: '反射（光与热）',
        col: 'reflect sunlight — 反射阳光；reflect heat away — 把热量反射开',
        ex: 'A pale wall reflects sunlight before it turns into heat.'
      },
      {
        w: 'pavement',
        ph: '/ˈpeɪvmənt/',
        pos: 'n.',
        cn: '路面、人行道',
        col: 'hot pavement — 发烫的路面；walk on the pavement — 走人行道',
        ex: 'Trees keep the pavement cool in the afternoon.'
      },
      {
        w: 'moderate',
        ph: '/ˈmɒdəreɪt/',
        pos: 'v./adj.',
        cn: '使缓和、使不那么极端；温和的',
        col: 'moderate the temperature — 使温度不那么极端；a moderate climate — 温和的气候',
        ex: 'A layer of soil and plants moderates the temperature of a roof.'
      },
      {
        w: 'pale',
        ph: '/peɪl/',
        pos: 'adj.',
        cn: '浅色的；苍白的',
        col: 'pale colours — 浅色；pale blue — 浅蓝色',
        ex: 'A pale roof stays far cooler than a dark one.'
      },
      {
        w: 'decade',
        ph: '/ˈdekeɪd/',
        pos: 'n.',
        cn: '十年',
        col: 'for a decade — 长达十年；over the past decade — 过去十年间',
        ex: 'A full tree canopy takes a decade to grow.'
      },
      {
        w: 'expand',
        ph: '/ɪkˈspænd/',
        pos: 'v.',
        cn: '扩大、扩展',
        col: 'expand tree cover — 扩大树木覆盖；expand a programme — 扩大一项计划',
        ex: 'The city plans to expand its tree cover this year.'
      },
      {
        w: 'fund',
        ph: '/fʌnd/',
        pos: 'v./n.',
        cn: '资助、提供资金；基金',
        col: 'fund a project — 资助一个项目；raise funds — 筹集资金',
        ex: 'Local councils fund the planting of street trees.'
      },
      {
        w: 'install',
        ph: '/ɪnˈstɔːl/',
        pos: 'vt.',
        cn: '安装、设置',
        col: 'install equipment — 安装设备；install shade sails — 架起遮阳篷',
        ex: 'Some fixes can be installed within a single summer.'
      },
      {
        w: 'consume',
        ph: '/kənˈsjuːm/',
        pos: 'vt.',
        cn: '消耗、耗费',
        col: 'consume electricity — 消耗电力；consume energy — 消耗能量',
        ex: 'Air conditioners consume a great deal of electricity in July.'
      },
      {
        w: 'vegetation',
        ph: '/ˌvedʒəˈteɪʃn/',
        pos: 'n.',
        cn: '植被（总称）',
        col: 'plenty of vegetation — 充足的植被；vegetation cover — 植被覆盖',
        ex: 'A city with plenty of vegetation cools down faster after sunset.'
      },
      {
        w: 'drain',
        ph: '/dreɪn/',
        pos: 'n./v.',
        cn: '排水管、下水道；排干',
        col: 'run to the drain — 流进下水道；drain away — 排走、流光',
        ex: 'Rain runs to the drain instead of staying in the soil.'
      }
    ],
    phrases: [
      {
        en: 'cool down',
        cn: '降温、凉下来（新）',
        ex: 'The streets cool down slowly after a hot day.'
      },
      {
        en: 'give off',
        cn: '释放出、散发（新）',
        ex: 'Machines and cars give off heat all day long.'
      },
      {
        en: 'take up',
        cn: '占据（空间、面积）（复现第 28 篇）',
        ex: 'Green space takes up land in a crowded district.'
      },
      {
        en: 'point out',
        cn: '指出（复现第 36 篇）',
        ex: 'Researchers point out that tree cover is lowest where the heat is worst.'
      },
      {
        en: 'deal with',
        cn: '应对、处理（复现第 35 篇）',
        ex: 'A good plan deals with heat at its source.'
      },
      {
        en: 'by itself',
        cn: '单靠它自己、独自（复现第 27 篇）',
        ex: 'No single measure works by itself.'
      },
      {
        en: 'as a result',
        cn: '结果、因此（复现第 26 篇）',
        ex: 'The district has few trees, and as a result its streets stay hot at night.'
      },
      {
        en: 'keep … under control',
        cn: '使……得到控制（复现第 27 篇）',
        ex: 'Trees and light roofs keep the heat under control.'
      },
      {
        en: 'a number of',
        cn: '若干、一些（复现第 26 篇）',
        ex: 'A number of cities now plant trees before the problem gets worse.'
      },
      {
        en: 'over time',
        cn: '随着时间推移（复现第 35 篇）',
        ex: 'Small cooling choices add up over time.'
      },
      {
        en: 'in turn',
        cn: '反过来、继而（新）',
        ex: 'Hot streets push up the use of air conditioning, which in turn heats the street again.'
      },
      {
        en: 'in the long run',
        cn: '从长远看（复现第 39 篇）',
        ex: 'In the long run, planting today is cheaper than cooling tomorrow.'
      }
    ],
    writings: [
      {
        expr: 'It is true that ...',
        cn: '的确，……（让步）',
        meaning: '先承认对方说得有道理的一点，再补上自己的立场，是议论里最稳的让步句式：让步不是认输，而是把反方最强的一条摆出来，后面的反驳才有力。',
        context: '正文第五、六段的段首各让一步，后面分别接「Yet …」和「The problem is not …」的反驳。',
        alts: [
          {
            t: 'Admittedly, ...',
            n: '更书面'
          },
          {
            t: 'It cannot be denied that ...',
            n: '语气更强的让步'
          },
          {
            t: 'While this is true, ...',
            n: '让步与反驳合在一句'
          }
        ],
        register: '中性偏书面，议论文的标准让步句式。',
        example: 'It is true that young trees will not cool a street this summer.'
      },
      {
        expr: 'What really matters is ...',
        cn: '真正重要的是……',
        meaning: '收束全文时把读者的注意力从细节拉回到核心判断，避免结尾喊口号；后面接一个名词性从句或并列结构，用来概括全文立场。',
        context: '正文最后一段的第一句，前面已经摆完证据与让步，这里给出作者的结论。',
        alts: [
          {
            t: 'What counts is ...',
            n: '更简短'
          },
          {
            t: 'The point is not ... but ...',
            n: '用「不是……而是……」收尾'
          },
          {
            t: 'Ultimately, ...',
            n: '换成副词开路'
          }
        ],
        register: '中性偏书面，语气沉稳，适合结论段。',
        example: 'What really matters is that cooling a city is not one big machine but a number of small decisions.'
      }
    ],
    sentences: [
      {
        text: 'When the sun beats down for hours, the heat that dark roofs and roads have stored all day is released into the evening, when the wind has died down.',
        points: [
          '<b>主干</b>：the heat is released into the evening —— 主语 the heat 后面带一个 <b>that 定语从句</b> that dark roofs and roads have stored all day，把「哪种热」说清楚，主句其实很短。',
          '<b>句首</b>是 <b>when 引导的时间状语从句</b> When the sun beats down for hours；beat down 常用来形容阳光「直烤下来」，比 shines 更有压迫感。',
          '<b>句尾的 when 从句</b>不是单纯的时间，而是<b>补充说明傍晚的处境</b>：风已经停了 —— 相当于一个用逗号隔开的解释性从句。',
          '<b>被动语态</b> is released 强调「热被放出来」，说明文里描写物理过程时常用被动，主语是承受者。',
          '<b>为什么值得学</b>：一句话里有「时间从句 + 定语从句 + 被动 + 二次 when 从句」四层结构，先抓 the heat is released，其余按层补，是拆长句的通用办法。'
        ]
      },
      {
        text: 'A street lined with mature trees can be several degrees cooler in the afternoon than a street of the same width that has no trees at all.',
        points: [
          '<b>主干</b>：A street can be several degrees cooler than a street —— 一个比较结构：A 比 B 低几度，several degrees 是<b>程度状语</b>，放在比较级 cooler 前。',
          '<b>lined with mature trees</b> 是<b>过去分词短语作后置定语</b>，修饰 A street，相当于省略了 which is lined with …；line with 表示「沿……排成一排」。',
          '<b>比较对象要对得上</b>：than a street of the same width（同样宽度的一条街）—— 把比较的前提写清楚，结论才可信，这是数据类写作的常识。',
          '<b>句尾 that 定语从句</b>修饰比较对象：that has no trees at all；at all 加强否定，读作「连一棵树都没有」。',
          '<b>常见变体</b>：A room facing north can be several degrees cooler in summer than a room of the same size facing the street.'
        ]
      },
      {
        text: 'What makes a green roof worth its cost is not only cooler top floors, but also the rain it holds back and the heat it takes off the roof.',
        points: [
          '<b>主干</b>：What makes a green roof worth its cost is … —— 主语是 <b>what 引导的名词性从句</b>，表语由 not only A but also B 并列三项：cooler top floors、the rain、the heat。',
          '<b>句型</b> make + 宾语 + 宾补（worth its cost）：make a green roof worth its cost「让绿色屋顶值回成本」；worth 后接名词或动名词。',
          '<b>两个省略关系代词的定语从句</b>：the rain (that) it holds back 与 the heat (that) it takes off the roof；hold back「拦住（雨水）」，take off「减去、带走」。',
          '<b>为什么值得学</b>：not only … but also … 一口气给出三项收益，是论证「一个东西值不值」最好用的句型；三项里第二、三项都是名词短语，节奏比三个句子更紧凑。',
          '<b>注意点</b>：it 引导的两个定语从句共用先行词前的动词短语结构，读的时候先抓 hold back 与 take off 两个动词，再补宾语。'
        ]
      },
      {
        text: 'The problem is not that any single measure is perfect, but that a city which depends on only one will fail on the hottest days, when every degree of cooling matters.',
        points: [
          '<b>主干</b>：The problem is not … but … —— 用 not A but B 纠正读者的期待：问题不在于「措施不完美」，而在于「只靠一种措施」。',
          '<b>not that … but that …</b> 后接两个 <b>that 表语从句</b>，that 不作成分、只起连接作用，去掉后句子仍通顺，这是判断 that 从句性质的常用办法。',
          '<b>第二个表语从句里</b>又有两层：which depends on only one 是 <b>which 定语从句</b>修饰 a city；句尾 when every degree of cooling matters 是修饰 the hottest days 的<b>非限制性定语从句</b>。',
          '<b>为什么值得学</b>：这是让步段的反驳句 —— 先承认对方的质疑成立，再指出真正的风险在哪里，是「观点 + 证据 + 让步」型议论文的核心句式。',
          '<b>常见变体</b>：The problem is not that the plan is expensive, but that it starts too late.'
        ]
      }
    ],
    questions: [
      {
        en: 'What can we infer about a district with wide dark roads, tall buildings and very few trees?',
        cn: '从「宽阔的深色路面、高楼、几乎没有树」的街区可以推出什么？',
        ans: 'Its streets will stay warm long after dark, and its residents will need more cooling and pay more for it.',
        ansCn: '这样的街道入夜很久依然温热，居民需要更多降温，也要为此多花钱。'
      },
      {
        en: 'What can we infer about a city that waits until its streets are unbearable before it plants trees?',
        cn: '从「等到街道热得受不了才开始种树」的城市可以推出什么？',
        ans: 'It will spend its hottest years without the cooling it could have had, because a full canopy takes a decade to grow.',
        ansCn: '它会在最热的那些年里失去本可以拥有的清凉，因为完整的树冠要十年才能长成。'
      },
      {
        en: 'What is the writer’s view on the best way to cool a city?',
        cn: '作者对「城市怎样降温最好」持什么看法？',
        ans: 'No single measure is enough; a city should combine trees and parks, lighter roofs and road materials, and better building layout, and it should start early.',
        ansCn: '任何单一措施都不够；城市应把树木与公园、更浅色的屋顶与路面材料、更好的建筑布局结合起来，并且趁早动手。'
      },
      {
        en: 'How does the passage develop its argument?',
        cn: '本文是如何展开论证的？',
        ans: 'It first explains why cities heat up, then tests greening, roof and road materials and air conditioning one by one with their limits, and ends by arguing for a combined, early start.',
        ansCn: '先解释城市为什么变热，再逐项检验绿化、屋顶与路面材料、空调并指出各自的局限，最后主张组合施策、趁早开始。'
      },
      {
        en: 'Why does the writer mention an air conditioner pushing hot air into the street?',
        cn: '作者为什么提到空调把热气吹到街上这件事？',
        ans: 'To show that cooling a single room can make the street hotter, so heat has to be dealt with at the level of the whole city.',
        ansCn: '为了说明只给单个房间降温会让街道更热，所以降温必须在整个城市的层面上解决。'
      }
    ],
    writingTask: {
      en: 'Write 120–150 words about how your neighbourhood or your city could keep cool in summer.',
      hints: [
        'In my view, the biggest problem in my area is ...',
        'It is true that ..., but ...',
        'What really matters is ...'
      ],
      hintCn: '写成三段：第一段点出你所在街区夏天最热的问题；第二段用「It is true that …」让步一次，再给出两条具体做法（种树、浅色屋顶、透水路面、遮阳设施任选）；第三段用「What really matters is …」收尾，说明这件事为什么值得现在就做。',
      req: '至少使用 3 个本篇学过的词或搭配（urban / reflect / pavement / moderate / cool down / take up / point out / It is true that …）。'
    },
    speakingTask: {
      en: 'Answer in 1.5–2 minutes. Give your view, one reason and one example, then answer one counterargument.',
      points: [
        'Your view: what should your city do first to keep cool?',
        'One reason, with a number or a comparison in it',
        'One example from a street, a campus or a city you know',
        'One counterargument (too expensive, too slow) and your reply'
      ],
      pointCn: '1.5–2 分钟讲完「观点 → 一个理由 → 一个例子 → 一个反驳」；理由里要有一个数字或对比，反驳要先复述对方的质疑（比如「种树太慢」），再用本文的证据回一句。',
      skeleton: 'In my view, ... should come first. The main reason is that ... For example, ... Some people may argue that ... However, ... That is why ...'
    },
    focus: [
      '<b>新授核心词 18 个</b>：<span class=\'en\'>urban, trap, concrete, exhaust, humidity, surface, release, reflect, pavement, moderate, pale, decade, expand, fund, install, consume, vegetation, drain</span> —— 这批词按「成因 → 材料 → 行动」三组记：<b>成因组</b>（trap 热量、concrete 与 surface 蓄热、exhaust 与 humidity 加重体感）；<b>材料组</b>（pale 与 reflect 是一对因果——色浅才反光，pavement 与 drain 讲路面与水）；<b>行动组</b>（expand 绿化、fund 出钱、install 快招、moderate 温度、consume 要省）。注意 <b>release</b> 名动两用，「释放热量」说 release heat；<b>vegetation</b> 是「植被」总称，不可数；<b>decade</b> 与数字搭配：a decade（十年）、two decades（几十年）。',
      '<b>本篇复现的旧词</b>：第 31 篇的 <span class=\'en\'>absorb</span>（深色表面吸热）、第 36 篇的 <span class=\'en\'>block</span>（楼挡住风）与 <span class=\'en\'>increasingly</span>、第 37 篇的 <span class=\'en\'>shade</span>、第 32 篇的 <span class=\'en\'>temperature</span>、第 26 篇的 <span class=\'en\'>maintain</span> 与 <span class=\'en\'>practical</span>、第 6 篇的 <span class=\'en\'>likely</span>、第 1 篇的 <span class=\'en\'>afford</span>、第 8 篇的 <span class=\'en\'>reduce</span>、第 30 篇的 <span class=\'en\'>impact</span>、第 25 篇的 <span class=\'en\'>local</span>；短语复现另有第 28 篇的 <span class=\'en\'>take up</span>、第 36 篇的 <span class=\'en\'>point out</span>、第 35 篇的 <span class=\'en\'>deal with / over time</span>、第 27 篇的 <span class=\'en\'>by itself / keep … under control</span>、第 26 篇的 <span class=\'en\'>as a result / a number of</span>、第 39 篇的 <span class=\'en\'>in the long run</span>。正文共 12 处灰点，读到灰点先想出处，再想意思。',
      '<b>让步与反驳的对称句式</b>：<span class=\'en\'>It is true that …</span> 在第五、六段各出现一次，一次让「树长得慢」，一次让「浅色路面会反热」，后面分别接 <span class=\'en\'>Yet …</span> 与 <span class=\'en\'>The problem is not that … but that …</span> 反击——这是阶段五议论文「观点 + 证据 + 让步」的骨架，写作时可以照搬这个节奏：让步一句、反驳一句、证据两句。',
      '<b>全文逻辑线</b>：热岛是什么（入夜仍不降温）→ 为什么热（吸热、挡风、机器散热、水被排走）→ 绿化怎么降温（遮阴 + 蒸腾 + 公园）→ 材料怎么降温（浅色、反光、透水、绿色屋顶）→ 两条让步（树长得慢、浅色路面反热）→ 空调为什么不是出路（屋里冷、街上热）→ 结论（组合施策、趁早开始）。',
      '<b>题型提醒</b>：推断题抓「只种树会怎样」「等热得受不了再种会怎样」这类条件句，答案落在作者没直说的后果上；作者观点题看最后一段的 <span class=\'en\'>What really matters is …</span>；篇章结构题按「现象 → 原因 → 三类办法 → 各自局限 → 组合结论」数段落；「作者为什么提到 X」题只答「为了证明哪一条观点」，不要复述例子本身。'
    ],
    standard: {
      time: '约 50 分钟',
      bar: '阶段五议论文首篇：5 题对 ≥ 4 · 18 个核心词遮住中文说出 ≥ 14 · 拆开 4 处长难句 · 完成 120–150 词写作与 1.5–2 分钟含反驳的口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 18 个核心词中的 14 个（urban、reflect、pavement、moderate、vegetation …），并说清 release 与 reflect 的搭配对象',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '12 个高频搭配掌握 9 个，能各造一句（cool down、give off、take up、point out、in the long run …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 4 处长难句各自的结构（时间从句 + 定语从句 / 比较结构 + 分词定语 / 主语从句 + not only … but also … / not … but … 反驳句），并仿写其中 2 处',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；第 4 题要说出全文「现象 → 原因 → 三类办法 → 局限 → 组合结论」的展开顺序',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 120–150 词，至少用上 It is true that … 或 What really matters is …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1.5–2 分钟讲完「观点 → 理由 → 例子 → 反驳」，理由里带一个数字或对比，反驳要先复述对方质疑',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 12 处灰点旧词，说出其中 9 个的意思与出处篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 43,
    slug: '043-the-person-behind-the-menu',
    title: 'The Person Behind the Menu',
    titleCn: '菜单背后的人',
    stage: '阶段五 · 综合提高',
    stageRange: '第 41–50 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 550 词'
      },
      {
        k: '新词密度',
        v: '约 5.7%'
      },
      {
        k: '长难句',
        v: '5 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/043.jpg',
    coverCredit: 'Photo: Mahoney Fotos / Pexels',
    body: [
      'Open a menu: you see a <span class="w-rev">dish</span> and a price. What you do not see is the person behind it: a <span class="w-rev">cook</span> with a family story, and the long road that story travelled. Most <span class="w-rev">ordinary</span> home dishes look <span class="w-cet4" data-cn="简朴的、不起眼的">humble</span> — a stew that has <span class="w-cet4" data-cn="用文火慢炖、煨">simmered</span> all afternoon, a bowl of noodles, a plate of small pies. <span class="w-sentence">Yet behind almost every dish people cook at home stands a history of migration.</span>',
      'A family that moves cannot pack a whole life into one bag. They carry seeds, tools and habits as well as one technique: how to turn a <span class="w-rev">cheap</span> cut tender and how to season with what the market offers. For the first <span class="w-cet4" data-cn="移民、外来定居者">immigrants</span>, a plain <span class="w-cet4" data-cn="主食、主打之物">staple</span> — bread, rice, a thick soup — was dinner and comfort. <span class="w-sentence">The dish that crossed the sea with them was written in no book, yet it survived every move.</span> Every <span class="w-cet4" data-cn="迁徙、移居">migration</span> leaves its mark.',
      'In a new city the dish <span class="w-cet4" data-cn="调整以适应">adapts</span>. On the surface little remains of the original: rice gives way to a <span class="w-rev">local</span> grain, a spice is replaced by a cheaper <span class="w-cet4" data-cn="替代品；替代">substitute</span> <span class="w-phrase" data-cn="而不是、代替">instead of</span> the one from home, and the <span class="w-cet4" data-cn="味道、风味">flavour</span> <span class="w-synonym" data-cn="＝ changes slowly 的替换词">drifts</span> with the stove and the market. <span class="w-writing" data-cn="一个现成的例子就是……">A case in point</span> is the everyday stew in a city kitchen: it is <span class="w-phrase" data-cn="以……为基础">based on</span> the old one, but no two families end up cooking it the same way. This is how a home dish takes root.',
      'Some people say a dish changed this way is no longer <span class="w-cet4" data-cn="地道的、正宗的">authentic</span>: the only <span class="w-synonym" data-cn="＝ genuine 的替换词">real</span> version, they argue, is the one cooked where it began. <span class="w-writing" data-cn="说句公道话……">To be fair,</span> a <span class="w-rev">recipe</span> can be simplified until its <span class="w-cet4" data-cn="起源、源头">origin</span> is lost, and with it part of a family’s <span class="w-cet4" data-cn="传统、文化遗产">heritage</span>. <span class="w-sentence">What looks like a fixed recipe is in fact a record of small changes that each generation made without noticing.</span> In other words, food has never stood still.',
      'Behind the menu stands someone who learned by watching. A cook may spend years keeping one dish alive, adjusting the <span class="w-cet4" data-cn="技法、手法">technique</span> to deal with a new kitchen and new <span class="w-rev">ingredients</span>. The result is a <span class="w-cet4" data-cn="融合、混合">blend</span> of two <span class="w-rev">cultures</span>: a method from one shore, a vegetable from another. <span class="w-sentence">Dishes that move with people do not survive by being copied exactly; they survive because they are allowed to change.</span> Good cooks <span class="w-rev">adopt</span> whatever helps — a new pan, a new shortcut — and so the dish <span class="w-cet4" data-cn="演变、进化">evolves</span>.',
      'So what is a home recipe worth? <span class="w-sentence">Not much as a set of instructions, but a great deal as a record of a family’s journey across borders and years.</span> That is why it pays to <span class="w-cet4" data-cn="保存、保留下来">preserve</span> one while the old cooks are around. <span class="w-writing" data-cn="一个现成的例子就是……">A case in point</span> is the way a family <span class="w-phrase" data-cn="把……一代代传下去">passes down</span> its <span class="w-rev">memory</span>: someone watches and <span class="w-phrase" data-cn="把……写下来">writes down</span> the steps, and years later the next generation can <span class="w-rev">discover</span> where it began by <span class="w-cet4" data-cn="追溯、追踪">tracing</span> one dish.',
      'Not every dish hides a long story; some meals are simply fast and cheap. But <span class="w-cet4" data-cn="怀旧之情">nostalgia</span> has its place, and going back to a perfect past is not the aim: each new cook comes up with one <span class="w-cet4" data-cn="新花样、别出心裁的改动">twist</span>, and the dish keeps moving <span class="w-phrase" data-cn="随着时间推移">over time</span>. If you want to know where a family came from, ask what they cook on a cold evening. <span class="w-phrase" data-cn="……的核心、关键处在……">At the heart of</span> every menu is a person, and that person is still writing.'
    ],
    translation: [
      '打开一份菜单：你看到的是一道菜和一个价格。你没看到的，是菜背后的那个人：一个厨师，一段家事，和那段家事走过的漫漫长路。大多数再普通不过的家常菜看上去都很不起眼——一锅炖了一下午的炖菜、一碗面、一盘小饼。然而，几乎每一道家常菜的背后，都站着一部迁徙史。',
      '一个不得不搬家的家庭，没法把整段生活塞进一只行李袋。他们随身带走的，是种子、工具和习惯，还有一样技法：怎么把一块便宜的肉炖得软烂，怎么用市场上买得到的东西调味。对最早一批移民来说，一样朴素的主食——面包、米饭、一碗浓汤——既是晚饭，也是安慰。那道跟着他们漂洋过海的菜，没有写进任何书里，却活过了每一次搬迁。每一次迁徙，都会在菜上留下痕迹。',
      '到了新城市，这道菜就开始调整。表面上，原来的影子几乎一点不剩：米换成了当地的谷物，香料被更便宜的替代品取代，而不是家乡的那一种，味道也随着炉灶和市场一点点漂移。一个现成的例子，就是城市厨房里的那道家常炖菜：它脱胎于从前的做法，可没有两家人最后做出来的是同一个味道。家常菜就是这样扎下根来的。',
      '有人说，被改成这样的菜就不再地道了：他们主张，唯一真正的版本，只存在于它最初诞生的地方。说句公道话，一份食谱确实可能被简化到看不出源头，随之失去的还有这个家庭的一部分传承。所谓「固定不变的食谱」，其实是一份记录，记下每一代人不曾留意却做过的小小改动。换句话说，食物从来没有真正停下过脚步。',
      '菜单背后，往往站着一个靠看学会做菜的人。一个厨师可能花上好几年，只为把一道菜守住，把技法一点点调整到能应付新的厨房和新的食材。结果便是两种文化的融合：一边来的做法，另一边来的蔬菜。跟着人走的菜，照原样复制是活不下来的；它们能活下来，是因为它们被允许改变。好的厨师会吸收一切有用的东西——一口新锅、一条新捷径——菜也就随之演变。',
      '那么，一份家常食谱到底值多少？作为一串步骤，它不值什么；作为一个家庭跨越国境与岁月的记录，它价值连城。所以，趁老一辈还在，把它保存下来是划算的。一个现成的例子，是家庭把记忆传下去的方式：有人看着做，把步骤写下来，多年以后，下一代就能借着一道菜追溯，弄清这个家从哪里来。',
      '当然，不是每道菜背后都有很长的故事；有些饭菜就是又快又便宜。但怀旧自有它的位置，回到某个完美从前也不是目的：每一代掌勺的人都会添一点新花样，菜就随着时间一路往前走。如果你想知道一个家庭从哪里来，别去问纸面的材料，问问他们天冷时做的是什么菜。每份菜单的核心都是一个人，而这个人，还在往下写。'
    ],
    vocabulary: [
      {
        w: 'migration',
        ph: '/maɪˈɡreɪʃn/',
        pos: 'n.',
        cn: '迁徙、移居',
        col: 'a history of migration — 一段迁徙史；migration patterns — 迁徙的路线与规律',
        ex: 'Every migration leaves a mark on the food people carry.'
      },
      {
        w: 'immigrant',
        ph: '/ˈɪmɪɡrənt/',
        pos: 'n.',
        cn: '移民、外来定居者',
        col: 'the first immigrants — 最早一批移民；an immigrant family — 移民家庭',
        ex: 'The first immigrants in the city cooked the food they had grown up with.'
      },
      {
        w: 'adapt',
        ph: '/əˈdæpt/',
        pos: 'v.',
        cn: '调整以适应',
        col: 'adapt to a new place — 适应新地方；adapt a recipe — 调整一份食谱',
        ex: 'A home dish adapts when the cook moves to a new city.'
      },
      {
        w: 'authentic',
        ph: '/ɔːˈθentɪk/',
        pos: 'adj.',
        cn: '地道的、正宗的',
        col: 'authentic food — 正宗的食物；the authentic version — 地道的原版',
        ex: 'Some people say a changed dish is no longer authentic.'
      },
      {
        w: 'heritage',
        ph: '/ˈherɪtɪdʒ/',
        pos: 'n.',
        cn: '传统、文化遗产',
        col: 'family heritage — 家庭传统；cultural heritage — 文化遗产',
        ex: 'A simplified recipe can take a family’s heritage with it.'
      },
      {
        w: 'technique',
        ph: '/tekˈniːk/',
        pos: 'n.',
        cn: '技法、手法',
        col: 'a cooking technique — 一道烹饪技法；learn a technique — 学会一门手法',
        ex: 'People carry one technique with them: how to make a cheap cut tender.'
      },
      {
        w: 'origin',
        ph: '/ˈɒrɪdʒɪn/',
        pos: 'n.',
        cn: '起源、源头',
        col: 'the origin of a dish — 一道菜的起源；lose its origin — 看不出源头',
        ex: 'The origin of the dish is hard to see after a hundred years of small changes.'
      },
      {
        w: 'blend',
        ph: '/blend/',
        pos: 'n./v.',
        cn: '融合、混合',
        col: 'a blend of two cultures — 两种文化的融合；blend two styles — 把两种风格融在一起',
        ex: 'The dish is a quiet blend of a method from one shore and a vegetable from another.'
      },
      {
        w: 'preserve',
        ph: '/prɪˈzɜːv/',
        pos: 'vt.',
        cn: '保存、保留下来',
        col: 'preserve a tradition — 保留一项传统；preserve food — 保存食物',
        ex: 'It pays to preserve the recipe while the old cooks are still around.'
      },
      {
        w: 'humble',
        ph: '/ˈhʌmbl/',
        pos: 'adj.',
        cn: '简朴的、不起眼的',
        col: 'a humble dish — 一道不起眼的菜；humble beginnings — 简陋的起点',
        ex: 'The most humble dishes often carry the longest stories.'
      },
      {
        w: 'staple',
        ph: '/ˈsteɪpl/',
        pos: 'n.',
        cn: '主食、主打之物',
        col: 'a staple food — 一种主食；a household staple — 家家必备的东西',
        ex: 'For the first immigrants, bread or rice was both staple and comfort.'
      },
      {
        w: 'substitute',
        ph: '/ˈsʌbstɪtjuːt/',
        pos: 'n./v.',
        cn: '替代品；替代',
        col: 'a cheap substitute — 廉价替代品；substitute A for B — 用甲替代乙',
        ex: 'In the new city the cook used a cheaper substitute for the old spice.'
      },
      {
        w: 'evolve',
        ph: '/ɪˈvɒlv/',
        pos: 'vi.',
        cn: '演变、进化',
        col: 'evolve over time — 随时间演变；a dish evolves — 一道菜会演变',
        ex: 'A dish that moves with people evolves instead of standing still.'
      },
      {
        w: 'trace',
        ph: '/treɪs/',
        pos: 'vt./n.',
        cn: '追溯、追踪',
        col: 'trace a story back to … — 把一段故事追溯到……；trace the origin — 追溯源头',
        ex: 'Years later you can trace where the family began by cooking one dish.'
      },
      {
        w: 'simmer',
        ph: '/ˈsɪmə(r)/',
        pos: 'v.',
        cn: '用文火慢炖、煨',
        col: 'simmer for hours — 炖上几个小时；let it simmer — 让它慢慢煨着',
        ex: 'The stew has simmered all afternoon, and the whole house smells of it.'
      },
      {
        w: 'flavour',
        ph: '/ˈfleɪvə(r)/',
        pos: 'n.',
        cn: '味道、风味',
        col: 'the flavour of home — 家乡的味道；a strong flavour — 浓郁的味道',
        ex: 'The flavour drifts as the stove, the water and the market change.'
      },
      {
        w: 'nostalgia',
        ph: '/nɒˈstældʒə/',
        pos: 'n.',
        cn: '怀旧之情、念旧',
        col: 'a wave of nostalgia — 一阵怀旧之情；nostalgia for … — 对……的怀念',
        ex: 'Nostalgia has its place, but it cannot freeze a dish in the past.'
      },
      {
        w: 'twist',
        ph: '/twɪst/',
        pos: 'n./v.',
        cn: '新花样、别出心裁的改动',
        col: 'a new twist on … — 在……上的新花样；add a twist — 加一点新意',
        ex: 'Each new cook adds one twist, and the dish keeps moving forward.'
      }
    ],
    phrases: [
      {
        en: 'instead of',
        cn: '而不是、代替（复现第 10 篇）',
        ex: 'The cook used a cheap substitute instead of the spice from home.'
      },
      {
        en: 'be based on',
        cn: '以……为基础（复现第 29 篇）',
        ex: 'The new dish is based on the one the grandmother used to make.'
      },
      {
        en: 'pass down',
        cn: '把……一代代传下去（复现第 14 篇）',
        ex: 'A family passes down its memory along with the recipe.'
      },
      {
        en: 'write down',
        cn: '把……写下来（复现第 2 篇）',
        ex: 'Someone watches the old cook and writes down the steps.'
      },
      {
        en: 'over time',
        cn: '随着时间推移（复现第 35 篇）',
        ex: 'Over time the flavour of a home dish drifts.'
      },
      {
        en: 'at the heart of',
        cn: '……的核心、关键处在……（复现第 36 篇）',
        ex: 'At the heart of every menu is a person with a story.'
      },
      {
        en: 'end up doing sth.',
        cn: '最后（做某事）、到头来（复现第 22 篇）',
        ex: 'Two families can end up cooking the same dish in very different ways.'
      },
      {
        en: 'on the surface',
        cn: '表面上、从外表看（复现第 23 篇）',
        ex: 'On the surface little is left of the original dish.'
      },
      {
        en: 'as well as',
        cn: '以及、除了……还（复现第 36 篇）',
        ex: 'They carry seeds and tools as well as one cooking technique.'
      },
      {
        en: 'in other words',
        cn: '换句话说（复现第 33 篇）',
        ex: 'In other words, food has never stood still.'
      },
      {
        en: 'take root',
        cn: '扎下根来（复现第 36 篇）',
        ex: 'A home dish takes root in the place where the family finally settles.'
      },
      {
        en: 'come up with',
        cn: '想出、拿出（办法、主意）（复现第 17 篇）',
        ex: 'Each new cook comes up with one twist of their own.'
      },
      {
        en: 'deal with',
        cn: '应对、处理（复现第 33 篇）',
        ex: 'The cook adjusted the technique to deal with a new kitchen.'
      }
    ],
    writings: [
      {
        expr: 'A case in point',
        cn: '一个现成的例子就是……',
        meaning: '先抛观点，再用 A case in point is … 引出一个具体例子，比直接写 For example 更有论证感，读者一眼看到「观点—例证」的对应关系。',
        context: '第三段和第六段各用一次：前一次举家常炖菜，后一次举家庭传食谱的做法。',
        alts: [
          {
            t: 'For example, …',
            n: '最通用，语气中性'
          },
          {
            t: 'Take … as an example.',
            n: '把例子提到句首时用'
          },
          {
            t: 'This is clear in the case of …',
            n: '更书面，语气更郑重'
          }
        ],
        register: '中性偏书面，议论与说明文都好用。',
        example: 'A case in point is the everyday stew in a city kitchen.'
      },
      {
        expr: 'To be fair, ...',
        cn: '说句公道话……',
        meaning: '让步的信号词：先承认对方说得有理的部分，再转折回自己的立场，让论证显得公允而不软弱。',
        context: '第四段中间，先引出「有人嫌它不正宗」的质疑，再用它承认这份担心有道理，随后给出回应。',
        alts: [
          {
            t: 'Admittedly, …',
            n: '更书面，让步语气更强'
          },
          {
            t: 'To be honest, …',
            n: '更口语，常用于日常表达'
          },
          {
            t: 'It is true that …, but …',
            n: '拆成两半，转折更明显'
          }
        ],
        register: '中性，口语书面都自然。',
        example: 'To be fair, a recipe can be simplified until its origin is lost.'
      }
    ],
    sentences: [
      {
        text: 'Yet behind almost every dish people cook at home stands a history of migration.',
        points: [
          '<b>主干</b>：a history of migration stands behind almost every dish。句首的介词短语 behind almost every dish 整体前置，句子随之<b>完全倒装</b>：谓语 stands 提到主语 a history of migration 之前。',
          '<b>为什么倒装</b>：英语习惯把「已知信息」放句前、「新信息」放句末。这里读者刚想到「家常菜」，所以把菜放在前面，把真正要说的「迁徙史」压到句尾，落点更重。',
          '<b>定语从句省略</b>：people cook at home 是修饰 dish 的定语从句，省略了关系代词 that（the dish that people cook at home）；读长句时先把它括起来，主干立刻清楚。',
          '<b>注意点</b>：倒装后谓语动词的单复数仍看主语——a history 是单数，所以用 stands，不看紧挨着的 dish。',
          '<b>常见变体</b>：Behind every simple dish lies a long journey.（把 stands 换成 lies，同样是倒装。）'
        ]
      },
      {
        text: 'The dish that crossed the sea with them was written in no book, yet it survived every move.',
        points: [
          '<b>主干</b>：The dish was written in no book, yet it survived every move。两个并列分句由 <b>yet</b> 连接，表示「虽然如此，却……」的转折，比 but 更书面。',
          '<b>定语从句</b>：that crossed the sea with them 修饰 The dish，先行词是物，关系代词用 that 也可以用 which；从句谓语 crossed 是过去式，说明这是过去的迁徙。',
          '<b>否定表达</b>：was written in no book ＝ was not written in any book，用 no 的否定比 not … any 语气更强，也更地道。',
          '<b>为什么值得学</b>：一句话里同时有「限定信息（跟他们漂洋过海）」和「转折（没写进书却活了下来）」，正是「观点 + 让步」类文章最常用的句式。',
          '<b>写作迁移</b>：The habit that came with them was never written down, yet it survived three generations.'
        ]
      },
      {
        text: 'What looks like a fixed recipe is in fact a record of small changes that each generation made without noticing.',
        points: [
          '<b>主干</b>：What looks like a fixed recipe is a record of small changes。<b>What 引导主语从句</b>，what 同时作从句的主语，整个从句当单数主语用。',
          '<b>插入成分</b>：in fact 是插入语，起「说实话、其实」的强调作用，去掉后句子结构不受影响。',
          '<b>两层修饰</b>：that each generation made 是修饰 changes 的定语从句；without noticing 是「介词 + 动名词」结构，说明这些改动是<b>不知不觉</b>发生的。',
          '<b>为什么值得学</b>：把「表面」和「实质」放在一句话里对照（看起来是固定食谱，其实是变化记录），是反驳类论证最有力的句型。',
          '<b>常见变体</b>：What looks like luck is in fact years of quiet practice.'
        ]
      },
      {
        text: 'Dishes that move with people do not survive by being copied exactly; they survive because they are allowed to change.',
        points: [
          '<b>主干</b>：两个并列分句用<b>分号</b>连接：分号前是「照原样复制活不下来」，分号后是「允许变化才能活下来」，前后对照，中间不用连词。',
          '<b>介词 + 动名词</b>：by being copied exactly 中 by 表示「通过某种方式」，being copied 是被动的动名词；被动嵌在介词后面，是长句里常见的一层。',
          '<b>原因状语从句</b>：because they are allowed to change 用<b>被动语态</b>（are allowed to）表示「被允许」，比 people allow them to change 更突出菜本身。',
          '<b>为什么值得学</b>：分号 + 前后对照，是议论文里「让步—回应」之后做小结的好办法，比用 but 更有节奏。',
          '<b>注意点</b>：exactly 修饰 copied，说明「一丝不差地照抄」；删掉它句子照样成立，但说服力会弱一些。'
        ]
      },
      {
        text: 'Not much as a set of instructions, but a great deal as a record of a family’s journey across borders and years.',
        points: [
          '<b>省略句</b>：完整形式是 It is not worth much as a set of instructions, but it is worth a great deal as a record …，承前省略了 it is / it is worth，只留两个介词短语做对照，读起来短促有力。',
          '<b>对照结构</b>：not much … but a great deal … 是一对反义数量词，用 as a set of instructions 和 as a record of … 两个角度把「值多少」拆开回答。',
          '<b>介词串</b>：a record of a family’s journey across borders and years 里 of、across 一层层往后挂，读的时候按意群停顿：a record / of a family’s journey / across borders and years。',
          '<b>为什么值得学</b>：自问自答（So what is it worth? — Not much …, but …）是说明文里最有节奏的一问一答，读者几乎不会走神。',
          '<b>注意点</b>：a great deal 作副词性用语，表示「很大程度上、很多」，不能写成 a great deal of（那是「大量的」，后接名词）。'
        ]
      }
    ],
    questions: [
      {
        en: 'What can we infer about the “real version” of a dish that some people talk about?',
        cn: '从文中可以推出，一些人口中某道菜「真正的版本」是怎样的？',
        ans: 'It is hard to point to one, because the dish has kept changing at every stop and food has never stood still.',
        ansCn: '很难指得出一个，因为这道菜在每一站都在变，食物从来没有真正停在原处。'
      },
      {
        en: 'What can we infer about cooks who are quick to adopt whatever helps?',
        cn: '从文中可以推出，那些乐于吸收一切有用东西的厨师是怎样的？',
        ans: 'They change small things in the kitchen or in the way the food is sold, so that the dish can go on living in a new place.',
        ansCn: '他们会在厨房里、也会在卖法上做小改动，好让这道菜在新地方继续活下去。'
      },
      {
        en: 'What is the writer’s view on a dish that changes as it moves with people?',
        cn: '作者对「跟着人走、不断改变」的菜持什么看法？',
        ans: 'Change is normal and is what keeps the dish alive; the point is to keep its thread, not to freeze it in the past.',
        ansCn: '改变很正常，而且正是改变让菜活了下来；要紧的是留住它的那根线，而不是把它冻在过去。'
      },
      {
        en: 'How does the writer develop the article?',
        cn: '作者是怎样展开这篇文章的？',
        ans: 'From the menu in front of the reader to the history behind it: what people carried, how the dish changed, an objection about authenticity, the cook behind the dish, and a closing call to look again at ordinary food.',
        ansCn: '从读者面前的菜单写到菜单背后的历史：人们带走了什么、菜怎么变、对「不正宗」的质疑、菜背后的厨师，最后请大家重新看看家常饭。'
      },
      {
        en: 'Why does the writer mention the everyday stew in a city kitchen?',
        cn: '作者为什么提到如今城市厨房里做的那道家常炖菜？',
        ans: 'To give a case in point of how a dish stays based on the old one while no two families end up cooking it the same way.',
        ansCn: '为了给出一个现成的例子，说明一道菜如何脱胎于旧做法，却没有两家人最后做出同一个味道。'
      }
    ],
    writingTask: {
      en: 'Write 120–150 words about one dish from your family or your hometown and the story behind it.',
      hints: [
        'The dish I want to talk about is …',
        'It came to my family when …',
        'A case in point is the way we …',
        'To be fair, … , but the dish keeps moving.'
      ],
      hintCn: '分三段写：第一段点出是哪道菜、家里谁在做；第二段讲它跟着家人走过哪些地方、换过哪些食材；第三段用一次让步（To be fair, …）承认它已经不完全是原来的样子，再收一句自己的看法。',
      req: '至少使用 3 个本篇学过的词或搭配（humble / adapt / substitute / heritage / trace / a case in point / to be fair / pass down）。'
    },
    speakingTask: {
      en: 'Answer in 1.5–2 minutes. Give your view, one reason and one example, then answer one counterargument.',
      points: [
        'Your view: should a family dish stay exactly the same, or change?',
        'One reason for that view',
        'One example with a person, a place or a number',
        'One counterargument and your short answer to it'
      ],
      pointCn: '一点五到两分钟里讲完「观点 → 原因 → 例子 → 反方观点 → 回应」五步；例子要有人物、地点或数字，回应反方时先复述对方的理由（Some people may say …），再说自己为什么不接受。',
      skeleton: 'In my view, a family dish should … The main reason is that … For example, my … once … , and the dish has changed … Some people may say that … I understand this, but …'
    },
    focus: [
      '<b>新授核心词 18 个</b>：<span class=\'en\'>migration, immigrant, adapt, authentic, heritage, technique, origin, blend, preserve, humble, staple, substitute, evolve, trace, simmer, flavour, nostalgia, twist</span> —— <b>migration / immigrant</b> 是同一家族的名词（迁徙 / 移民的人），一起记；<b>adapt</b> 可以是不及物（adapt to a new place）也可以是及物（adapt a recipe），两种用法都常用；<b>substitute A for B</b> 是「用甲代替乙」，别按中文语序写反；<b>trace</b> 常与 back to 连用（trace the story back to …）；<b>flavour</b> 是英式拼法，美式写作 flavor；<b>twist</b> 常用搭配是 a new twist on …；<b>humble</b> 说菜是「不起眼、家常」，说人是「谦虚」，本篇只用前一个意思。',
      '<b>本篇复现的旧词</b>：第 7 篇的 <span class=\'en\'>cook / ingredient → ingredients</span>、第 4 篇的 <span class=\'en\'>cheap</span>、第 15 篇的 <span class=\'en\'>dish / recipe</span>、第 25 篇的 <span class=\'en\'>local</span>、第 26 篇的 <span class=\'en\'>ordinary</span>、第 11 篇的 <span class=\'en\'>discover</span>、第 14 篇的 <span class=\'en\'>memory</span>、第 37 篇的 <span class=\'en\'>adopt</span>、第 40 篇的 <span class=\'en\'>culture → cultures</span>，正文共 11 处灰点；短语复现另有第 10 篇的 <span class=\'en\'>instead of</span>、第 29 篇的 <span class=\'en\'>be based on</span>、第 14 篇的 <span class=\'en\'>pass down</span>、第 2 篇的 <span class=\'en\'>write down</span>、第 35 篇的 <span class=\'en\'>over time</span>、第 36 篇的 <span class=\'en\'>at the heart of / take root / as well as</span>、第 33 篇的 <span class=\'en\'>in other words / deal with</span>、第 23 篇的 <span class=\'en\'>on the surface</span>、第 22 篇的 <span class=\'en\'>end up doing sth.</span>、第 17 篇的 <span class=\'en\'>come up with</span>。',
      '<b>五处长难句各练一种结构</b>：介词短语前置的完全倒装（<span class=\'en\'>Yet behind almost every dish … stands a history of migration</span>）、that 定语从句 + yet 转折（<span class=\'en\'>The dish that crossed the sea … yet it survived every move</span>）、what 主语从句 + 定语从句（<span class=\'en\'>What looks like a fixed recipe is … a record of small changes</span>）、分号并列 + 被动（<span class=\'en\'>do not survive by being copied exactly; they survive because …</span>）、承前省略句（<span class=\'en\'>Not much as …, but a great deal as …</span>）—— 读长句先抓主干，再补修饰。',
      '<b>论证骨架：观点 + 证据 + 让步</b>：观点（家常菜里有迁徙史）→ 证据一（人们带走的是种子、技法和习惯）→ 证据二（菜在新城市里怎么变）→ 让步（有人嫌它不正宗）→ 回应（食物从来没有停在原处）→ 证据三（守着菜的人）→ 收束。写作时先亮观点、再给例子、最后让一步再回应，比一路说到底更有说服力；「作者为什么提到某物」的题，答案永远是「为了证明哪一句观点」，本文的家常炖菜证明的是「没有两家人做出同一个味道」。',
      '<b>全文逻辑线与词形搭配提示</b>：菜单前的你 → 一家人带走什么 → 菜在新城市怎么变 → 「不正宗」的质疑与回应 → 菜单背后的人 → 为什么要留下食谱 → 收束（每份菜单的核心还是人）。搭配上多留心 <span class=\'en\'>adapt to</span>（适应）与 <span class=\'en\'>adapt … for</span>（为……改写）的区别、<span class=\'en\'>a blend of</span> 后接复数名词、<span class=\'en\'>take root</span> 用主动形式说菜「扎下根」，以及 <span class=\'en\'>a case in point</span> 后直接接 is … 的句式。'
    ],
    standard: {
      time: '约 50 分钟',
      bar: '阶段五第 43 篇：阅读题 5 题对 ≥ 4 · 18 个核心词遮住中文说出 ≥ 14 · 拆开 5 处长难句 · 完成 120–150 词写作与 1.5–2 分钟含反驳的口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 18 个核心词中的 14 个（migration、heritage、substitute、trace、nostalgia …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '13 个高频搭配掌握 9 个，能各造一句（pass down、instead of、over time、at the heart of …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 5 处长难句各自的结构（完全倒装 / 定语从句加转折 / what 主语从句 / 分号并列 / 承前省略），并仿写其中 2 处',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；篇章结构题要能复述全文的推进顺序',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 120–150 词，至少用上 A case in point 或 To be fair, …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1.5–2 分钟讲完「观点 → 原因 → 例子 → 反方观点 → 回应」，例子要有人物、地点或数字',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 11 处灰点旧词，说出其中 8 个的意思与出处篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 44,
    slug: '044-attention-in-the-age-of-distraction',
    title: 'Attention in the Age of Distraction',
    titleCn: '分心时代的注意力',
    stage: '阶段五 · 综合提高',
    stageRange: '第 41–50 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 560 词'
      },
      {
        k: '新词密度',
        v: '约 5.7%'
      },
      {
        k: '长难句',
        v: '5 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/044.jpg',
    coverCredit: 'Photo: Andrea Piacquadio / Pexels',
    body: [
      'Most people who complain about their <span class="w-rev">focus</span> describe a modern room: a phone within reach, one more message from an app, a mind that <span class="w-cet4" data-cn="走神、游移">wanders</span> every few minutes. <span class="w-sentence">My view is that attention is not a gift given to a lucky few but a resource that can be trained, which is why an age of distraction makes training it more necessary, not less.</span>',
      'The cost of a broken hour is easy to miss: one message can <span class="w-cet4" data-cn="打碎、使碎片化">fragment</span> an afternoon. <span class="w-sentence">When the mind has to find the thread again, the work does not restart at full speed, and the minutes lost this way never appear in any record.</span> Office studies show the same pattern: <span class="w-rev">distracted</span> minds report lower <span class="w-rev">mental</span> <span class="w-cet4" data-cn="清晰、条理清楚">clarity</span> at day’s end, and some <span class="w-cet4" data-cn="下降、衰退">decline</span> is <span class="w-synonym" data-cn="＝ hard to avoid 的替换词">inevitable</span>. <span class="w-writing" data-cn="这意味着……">What this means is that</span> a broken day costs more than it looks.',
      'If attention is a resource, it has two sides: the <span class="w-cet4" data-cn="容量、承载力">capacity</span> we hold at once, and how well we use it. <span class="w-sentence">Because both sides can be trained, an hour of practice does more than an hour of worry — a mind that stays with one task wastes less of its capacity and returns faster after it breaks.</span> The training is <span class="w-cet4" data-cn="刻意的、有意为之的">deliberate</span>, not heroic: read a long text without looking up, and <span class="w-phrase" data-cn="把注意力放在……上">pay attention to</span> how often the <span class="w-cet4" data-cn="诱惑">temptation</span> to switch arrives.',
      'Deep work is simply this <span class="w-rev">habit</span> pushed further. Choose one task, <span class="w-phrase" data-cn="留出（时间）">set aside</span> ninety minutes, and put the phone in another room before you start. <span class="w-cet4" data-cn="锚定、固定住">Anchor</span> the hour with an <span class="w-cet4" data-cn="意图、打算">intention</span> you write down: what will be finished when the time ends. This is <span class="w-cet4" data-cn="自律、自我约束">discipline</span> as kindness, not punishment; single-tasking feels slow at first and then like relief.',
      '<span class="w-writing" data-cn="诚然……">Admittedly,</span> none of this works on willpower alone: under <span class="w-rev">pressure</span> it breaks first, and ten hours of pure focus is unrealistic. This is where the other half comes in: <span class="w-rev">balance</span>. A serious morning holds three hours of deep work, not ten. The aim is not to <span class="w-cet4" data-cn="抵抗、抵制">resist</span> every distraction by force but to make the good choice easy, so you <span class="w-phrase" data-cn="向……让步、屈服于">give in to</span> the <span class="w-rev">urge</span> less often.',
      'Rest is not the enemy of focus; it is half the work. <span class="w-sentence">When the mind has been pulled one way for hours, what restores it is not another screen but a change of pace — a walk, a stretch, five minutes of nothing.</span> <span class="w-cet4" data-cn="疲劳、疲乏">Fatigue</span> turns a small message into a two-hour scroll; <span class="w-cet4" data-cn="浅层的、不深入的">shallow</span> rest never refills what a hard task <span class="w-cet4" data-cn="消耗、耗尽">drains</span>. The lift from scrolling is <span class="w-synonym" data-cn="＝ not lasting long 的替换词">short-lived</span>; the break that works asks you to <span class="w-phrase" data-cn="暂时离开……">step away from</span> the screen and <span class="w-cet4" data-cn="恢复精力、重新充电">recharge</span>.',
      'In the morning, protect the two hardest hours; when <span class="w-rev">energy</span> falls in the afternoon, <span class="w-cet4" data-cn="分配">allocate</span> the easy work. Keep the phone out of sight <span class="w-phrase" data-cn="而不是">instead of</span> testing your self-control; let the <span class="w-rev">routine</span> decide. At night, write one line about what pulled you away: a written record is <span class="w-synonym" data-cn="＝ very important 的替换词">crucial</span>, showing your <span class="w-cet4" data-cn="倾向、习性">tendency</span> more honestly than memory. <span class="w-writing" data-cn="这意味着……">What this means is that</span> the record remembers for you. A <span class="w-cet4" data-cn="留心的、专注当下的">mindful</span> pause between tasks can reset the hour.',
      'None of this promises a quiet mind by Monday. <span class="w-sentence">What it promises is slower growth in the right direction: the honest measure is not one perfect day but a month of better ones.</span> Each hour you protect <span class="w-cet4" data-cn="加强、强化">strengthens</span> the skill. <span class="w-phrase" data-cn="从长远来看">In the long run</span>, attention is the resource our age keeps asking for and keeps training away; the way back is small and deliberate.'
    ],
    translation: [
      '大多数抱怨自己注意力不集中的人，其实是在描述一间现代的房间：手机伸手可及，某个应用又发来一条消息，心神每隔几分钟就飘走。我的看法是：注意力不是少数幸运儿的天赋，而是一种可以训练的资源；正因为身处在分心的时代，训练它才比过去更加必要。',
      '一个被打碎的小时，代价很容易被忽略：一条消息就能打碎一个下午。当心神不得不重新找回原来的思路，工作不会立刻恢复全速，而这样丢掉的分钟数从来不会出现在任何记录里。对办公室工作的研究呈现出同样的模式：被反复打断的人，一天结束时自述思路更不清晰，出现一些下滑几乎不可避免。这意味着，破碎的一天付出的代价比看起来更大。',
      '如果注意力是一种资源，它就有两个侧面：一次能握住的容量，以及我们使用它的效率。既然两个侧面都能训练，一小时的练习就比一小时的焦虑更有用——能守住一件事的心神，浪费的容量更少，中断后回到任务也更快。这种训练是刻意的，而不是逞英雄：读一篇长文中途不抬头，并留意「想切换」的冲动多久来一次。',
      '深度工作不过是把这个习惯再往前推一步。选定一件事，留出九十分钟，开始之前把手机放到另一个房间。用一句写下来的意图给这一小时抛下锚点：时间结束时要完成什么。这是把自律当作善意，而不是惩罚；单任务一开始显得慢，之后却像一种解脱。',
      '诚然，这一切只靠意志力是撑不住的：压力一上来它最先垮掉，而十小时的纯粹专注并不现实。这就轮到另一半出场了：平衡。一个认真的上午能装下三小时深度工作，装不下十小时。目标不是靠蛮力抵抗每一种诱惑，而是让好的选择变得容易起来，这样向冲动让步的次数就会变少。',
      '休息不是专注的敌人，而是工作的一半。当心神朝同一个方向被拉扯了几个小时，能修复它的不是又一块屏幕，而是节奏的改变——走一走、伸个懒腰、发五分钟呆。疲劳是把一条小消息变成两小时刷屏的原因，而浅层休息永远补不上一件难事消耗掉的那部分。刷屏带来的提神是短命的；真正有效的休息，要你暂时离开屏幕，重新充满电。',
      '上午，守住最难的两个小时；下午精力下滑时，把轻松的活儿分配进去。与其整天考验自己的自制力，不如让手机离开视线，让习惯替你做决定。晚上写一行：是什么把你拉走了。一份写下来的记录至关重要，它比记忆更诚实地呈现你的倾向。这意味着记录替你记住。在两个任务之间留一次有意识的停顿，往往就足以把这一小时重新归零。',
      '这一切并不承诺周一就能拥有安静的心神。它承诺的是朝正确方向更慢地生长：诚实的度量不是完美的一天，而是一个月里更好一些的日子。你守住的每一个小时，都会让这门技能更结实。从长远看，注意力正是这个时代不断索取、又不断训练我们失去的资源；而回去的路很小，也很刻意。'
    ],
    vocabulary: [
      {
        w: 'capacity',
        ph: '/kəˈpæsəti/',
        pos: 'n.',
        cn: '容量、承载力',
        col: 'capacity for … — ……的容量；the capacity to do sth. — 做某事的能力',
        ex: 'Attention is a capacity that grows with practice.'
      },
      {
        w: 'deliberate',
        ph: '/dɪˈlɪbərət/',
        pos: 'adj.',
        cn: '刻意的、有意为之的',
        col: 'a deliberate choice — 刻意的选择；deliberate practice — 刻意练习',
        ex: 'Focus improves through deliberate practice, not through luck.'
      },
      {
        w: 'wander',
        ph: '/ˈwɒndə(r)/',
        pos: 'vi.',
        cn: '走神、游移',
        col: 'the mind wanders — 心神游移；wander off — 走开、偏离主题',
        ex: 'The mind wanders every few minutes when a phone is within reach.'
      },
      {
        w: 'decline',
        ph: '/dɪˈklaɪn/',
        pos: 'n./v.',
        cn: '下降、衰退',
        col: 'a slow decline — 缓慢下滑；decline sharply — 急剧下降',
        ex: 'Some decline in quality is inevitable in a day broken into pieces.'
      },
      {
        w: 'fragment',
        ph: '/ˈfræɡment/',
        pos: 'v.',
        cn: '打碎、使碎片化',
        col: 'fragment an hour — 把一小时打碎；fragmented time — 碎片化的时间',
        ex: 'One message can fragment a whole afternoon.'
      },
      {
        w: 'resist',
        ph: '/rɪˈzɪst/',
        pos: 'v.',
        cn: '抵抗、抵制',
        col: 'resist temptation — 抵制诱惑；resist the urge to do sth. — 忍住做某事的冲动',
        ex: 'You cannot resist every distraction by force.'
      },
      {
        w: 'discipline',
        ph: '/ˈdɪsəplɪn/',
        pos: 'n.',
        cn: '自律、约束',
        col: 'self-discipline — 自律；discipline as kindness — 把约束当作善意',
        ex: 'Deep work is discipline as kindness rather than punishment.'
      },
      {
        w: 'drain',
        ph: '/dreɪn/',
        pos: 'v.',
        cn: '消耗、耗尽',
        col: 'drain one’s energy — 消耗精力；drain away — 一点点流失',
        ex: 'Every extra task drains the same pool of attention.'
      },
      {
        w: 'fatigue',
        ph: '/fəˈtiːɡ/',
        pos: 'n.',
        cn: '疲劳、疲乏',
        col: 'mental fatigue — 精神疲劳；fight fatigue — 对抗疲劳',
        ex: 'Fatigue turns a small message into a two-hour scroll.'
      },
      {
        w: 'recharge',
        ph: '/ˌriːˈtʃɑːdʒ/',
        pos: 'v.',
        cn: '恢复精力、重新充电',
        col: 'recharge the afternoon — 让下半天恢复状态；recharge one’s batteries — 养精蓄锐',
        ex: 'A real break recharges the afternoon better than scrolling does.'
      },
      {
        w: 'shallow',
        ph: '/ˈʃæləʊ/',
        pos: 'adj.',
        cn: '浅层的、不深入的',
        col: 'shallow rest — 浅层休息；shallow work — 浅层工作',
        ex: 'Shallow rest never refills what a hard task drains.'
      },
      {
        w: 'anchor',
        ph: '/ˈæŋkə(r)/',
        pos: 'v.',
        cn: '锚定、固定住',
        col: 'anchor the hour — 给这一小时定下锚点；anchor … to … — 把……固定在……上',
        ex: 'Anchor the hour with an intention you write down.'
      },
      {
        w: 'clarity',
        ph: '/ˈklærəti/',
        pos: 'n.',
        cn: '清晰、条理清楚',
        col: 'mental clarity — 思路清晰；with clarity — 清楚地',
        ex: 'Distracted minds report lower mental clarity at day’s end.'
      },
      {
        w: 'strengthen',
        ph: '/ˈstreŋθn/',
        pos: 'v.',
        cn: '加强、强化',
        col: 'strengthen a skill — 强化技能；strengthen the habit — 巩固习惯',
        ex: 'Each hour you protect strengthens the skill.'
      },
      {
        w: 'mindful',
        ph: '/ˈmaɪndfl/',
        pos: 'adj.',
        cn: '留心的、专注当下的',
        col: 'a mindful pause — 有意识的停顿；be mindful of … — 留意……',
        ex: 'A mindful pause between two tasks can reset the hour.'
      },
      {
        w: 'allocate',
        ph: '/ˈæləkeɪt/',
        pos: 'v.',
        cn: '分配',
        col: 'allocate time to … — 把时间分配给……；allocate the work — 分配工作',
        ex: 'When energy falls, allocate the easy work.'
      },
      {
        w: 'temptation',
        ph: '/ˌtempˈteɪʃn/',
        pos: 'n.',
        cn: '诱惑',
        col: 'give in to temptation — 向诱惑让步；the temptation to do sth. — 做某事的诱惑',
        ex: 'Watch how often the temptation to switch arrives.'
      },
      {
        w: 'intention',
        ph: '/ɪnˈtenʃn/',
        pos: 'n.',
        cn: '意图、打算',
        col: 'with the intention of … — 抱着……的意图；good intentions — 好的初衷',
        ex: 'Write down one intention before the hour begins.'
      },
      {
        w: 'tendency',
        ph: '/ˈtendənsi/',
        pos: 'n.',
        cn: '倾向、习性',
        col: 'a tendency to do sth. — 做某事的倾向；show a tendency — 显示出一种倾向',
        ex: 'A written record shows your tendency better than memory.'
      }
    ],
    phrases: [
      {
        en: 'pay attention to',
        cn: '把注意力放在……上（复现第 1 篇）',
        ex: 'Pay attention to how often the urge to switch arrives.'
      },
      {
        en: 'set aside',
        cn: '留出（时间、钱）（复现第 29 篇）',
        ex: 'Set aside ninety minutes and put the phone in another room.'
      },
      {
        en: 'instead of',
        cn: '而不是、代替（复现第 10 篇）',
        ex: 'Keep the phone out of sight instead of testing your self-control all day.'
      },
      {
        en: 'give in to',
        cn: '向……让步、屈服于（复现第 27 篇）',
        ex: 'Make the good choice easy, so you give in to the urge less often.'
      },
      {
        en: 'step away from …',
        cn: '暂时离开……（新）',
        ex: 'The break that works asks you to step away from the screen.'
      },
      {
        en: 'in the long run',
        cn: '从长远来看（复现第 21 篇）',
        ex: 'In the long run, small hours of focus add up.'
      },
      {
        en: 'get used to doing sth.',
        cn: '习惯于做某事（复现第 17 篇）',
        ex: 'Your mind gets used to staying with one task.'
      },
      {
        en: 'cut down on',
        cn: '减少（复现第 29 篇）',
        ex: 'Cut down on the number of apps that can reach you.'
      },
      {
        en: 'run out of',
        cn: '用完、耗尽（复现第 7 篇）',
        ex: 'By four o’clock the mind runs out of room for anything new.'
      },
      {
        en: 'be worth doing sth.',
        cn: '值得做某事（复现第 26 篇）',
        ex: 'A quiet hour is worth protecting.'
      },
      {
        en: 'keep … under control',
        cn: '把……控制住（复现第 27 篇）',
        ex: 'Keep the phone under control before it starts keeping you.'
      },
      {
        en: 'take up',
        cn: '占据（时间、空间）（复现第 18 篇）',
        ex: 'Messages can take up the whole morning if you let them.'
      },
      {
        en: 'keep a record of',
        cn: '把……记录下来（复现第 10 篇）',
        ex: 'Keep a record of what pulled you away from the task.'
      }
    ],
    writings: [
      {
        expr: 'Admittedly, ...',
        cn: '诚然……',
        meaning: '先承认对方或读者的疑虑有道理，再引出自己的补充；让步段这样开头，读起来像讲道理，不像认输。',
        context: '让步段的第一句，后面写「承认什么」，再用一句转折把话题交回主线。',
        alts: [
          {
            t: 'It is true that ...',
            n: '更平实'
          },
          {
            t: 'To be fair, ...',
            n: '更口语，带「说句公道话」的意味'
          },
          {
            t: 'Granted, ...',
            n: '更简短、更书面'
          }
        ],
        register: '偏书面，议论文与评论常用。',
        example: 'Admittedly, none of this works on willpower alone.'
      },
      {
        expr: 'What this means is that ...',
        cn: '这意味着……',
        meaning: '把前面的证据或例子翻译成一句结论，读者不用自己猜你想说什么。',
        context: '证据之后、结论之前，一句话把上文收拢。',
        alts: [
          {
            t: 'In other words, ...',
            n: '换句话说'
          },
          {
            t: 'The implication is that ...',
            n: '更书面'
          },
          {
            t: 'So the lesson is that ...',
            n: '强调「教训」'
          }
        ],
        register: '中性，说明文与议论文通用。',
        example: 'What this means is that the record remembers for you.'
      }
    ],
    sentences: [
      {
        text: 'My view is that attention is not a gift given to a lucky few but a resource that can be trained, which is why an age of distraction makes training it more necessary, not less.',
        points: [
          '<b>主干</b>：My view is that …，that 引导<b>表语从句</b>，把作者立场放在句首，是议论文亮观点最常用的开头结构。',
          '<b>表语从句内部</b>是 not A but B 的对举：not a gift given to a lucky few but a resource that can be trained；<b>given</b> 是过去分词短语作后置定语，修饰 gift。',
          '<b>which</b> 引导非限制性定语从句，指代前面一整件事（注意力可以训练）；从句里又嵌一个 why 引导的表语从句 … which is why …，表示「这就是……的原因」。',
          '<b>注意点</b>：句末的 not less 是补充说明，意思是「反而更必要」，不是「更不必要」，读的时候要和 makes training it more necessary 连起来。',
          '<b>常见变体</b>：My view is that sleep is not a luxury but a tool that can be trained.'
        ]
      },
      {
        text: 'When the mind has to find the thread again, the work does not restart at full speed, and the minutes lost this way never appear in any record.',
        points: [
          '<b>主干</b>：句子由 <b>and</b> 连接两个并列分句：the work does not restart at full speed 与 the minutes never appear in any record；When 引导<b>时间状语从句</b>统领前半句。',
          '<b>lost this way</b> 是过去分词短语作后置定语，修饰 the minutes，相当于 the minutes that are lost this way。',
          '<b>find the thread again</b> 用的是「找回线头」的比喻，指思路断了以后重新接上，比说「再想一遍」形象。',
          '<b>为什么值得学</b>：先写「不会立刻恢复全速」，再写「记录里看不见」，两步递进把「隐性成本」讲清楚，适合写分析类段落。',
          '<b>注意点</b>：at full speed 里 at 不换成 in；this way 指代前半句的做法，不必改写成 in this way，免得句子变长。'
        ]
      },
      {
        text: 'Because both sides can be trained, an hour of practice does more than an hour of worry — a mind that stays with one task wastes less of its capacity and returns faster after it breaks.',
        points: [
          '<b>主干</b>：Because 引导<b>原因状语从句</b>，主句是比较结构 an hour of practice does more than an hour of worry，用「一小时练习 > 一小时焦虑」把抽象道理变成算术。',
          '<b>破折号后</b>是解释说明：a mind that stays with one task …，其中 that stays with one task 是定语从句，修饰 a mind。',
          '<b>并列谓语</b>：wastes less of its capacity and returns faster，两个动词共用主语 a mind，由 and 连接，句式对称好记。',
          '<b>after it breaks</b> 是时间状语从句，it 指前面的 mind；break 在此指「注意力断掉」，不是「坏掉」。',
          '<b>为什么值得学</b>：「比较 + 破折号解释」是议论文说明机制的高效句式，写作时可把 worry 换成别的名词再练一遍。'
        ]
      },
      {
        text: 'When the mind has been pulled one way for hours, what restores it is not another screen but a change of pace — a walk, a stretch, five minutes of nothing.',
        points: [
          '<b>主干</b>：what restores it is not another screen but a change of pace；<b>what</b> 引导主语从句，表语又是 not A but B 结构，与第一句同款但位置不同。',
          '<b>When 从句</b>用现在完成时的被动 has been pulled，强调「被拉扯了几个小时」这一持续结果，比 is pulled 更有时间感。',
          '<b>破折号后</b>是同位性质的<b>列举</b>：a walk, a stretch, five minutes of nothing，用三个名词短语把 a change of pace 具体化。',
          '<b>为什么值得学</b>：抽象名词（change of pace）后跟具体例子，是让读者立刻明白的标准写法，写作的举例段可直接照搬。',
          '<b>注意点</b>：what 不能换成 that；another screen 里的 another 表示「又一块」，暗示刷屏只是「假休息」。'
        ]
      },
      {
        text: 'What it promises is slower growth in the right direction: the honest measure is not one perfect day but a month of better ones.',
        points: [
          '<b>主干</b>：What it promises 是<b>主语从句</b>，表语是 slower growth；冒号后补充说明这份承诺如何衡量。',
          '<b>冒号后</b>again 用 not A but B：not one perfect day but a month of better ones，ones 指代 days，避免重复名词。',
          '<b>in the right direction</b> 是介词短语作定语，修饰 growth；growth 不可数，前面不加 a。',
          '<b>为什么值得学</b>：结尾句把「衡量标准」从一天拉长到一个月，收得克制又具体，正好示范「结尾不喊口号」。',
          '<b>常见变体</b>：What it promises is slow progress, and the honest measure is a month of better weeks.'
        ]
      }
    ],
    questions: [
      {
        en: 'What can we infer about people who keep their phone on the desk while working?',
        cn: '从文中可以推出，工作时把手机放在桌上的人会怎样？',
        ans: 'Their day is likely to be broken into pieces, and some loss of work quality is almost inevitable.',
        ansCn: '他们的一天很可能被打碎成碎片，工作质量出现一些下滑几乎不可避免。'
      },
      {
        en: 'What can we infer about the minutes lost to interruptions?',
        cn: '从文中可以推出，被打断而损失的时间有什么特点？',
        ans: 'They never appear in any record, so people easily miss the real cost of a broken hour.',
        ansCn: '这些时间从来不会出现在任何记录里，所以人们很容易忽略一个破碎小时的真实代价。'
      },
      {
        en: 'What is the writer’s view of attention?',
        cn: '作者对注意力的看法是什么？',
        ans: 'Attention is not a fixed gift but a resource that can be trained, and training it is more necessary in an age of distraction.',
        ansCn: '注意力不是天生固定的天赋，而是一种可以训练的资源；在分心的时代，训练它反而更加必要。'
      },
      {
        en: 'What does the fifth paragraph do in the argument?',
        cn: '第五段在整篇论证中起什么作用？',
        ans: 'It makes a concession — admitting that willpower and ten hours of pure focus are unrealistic — and then brings in the other half, balance.',
        ansCn: '它作了一步让步——承认只靠意志力、以及十小时纯粹专注都不现实——然后引出另一半：平衡。'
      },
      {
        en: 'Why does the writer mention writing one line at night about what pulled you away?',
        cn: '作者为什么提到晚上写一行记录「是什么把你拉走了」？',
        ans: 'To show that a written record reveals your real tendency more honestly than memory, so the record can remember for you.',
        ansCn: '为了说明写下来的记录比记忆更能呈现你的真实倾向，从而让记录替你记住。'
      }
    ],
    writingTask: {
      en: 'Write 120–150 words about how you would train your attention over a month: what you will change, when you will practise, and how you will rest.',
      hints: [
        'My view is that attention is ...',
        'In the morning, I ... ; in the afternoon, I ...',
        'Admittedly, ... , which is why ...',
        'In the long run, ...'
      ],
      hintCn: '写三段：第一段亮观点（注意力是可训练的资源），第二段给一周的具体安排（深度工作时段、手机放在哪里、几点离开屏幕），第三段用 Admittedly, … 让步后收束，最后一句用 In the long run, …。',
      req: '至少使用 3 个本篇学过的词或搭配（deliberate / capacity / recharge / set aside / give in to / in the long run）。'
    },
    speakingTask: {
      en: 'Answer in 1.5–2 minutes. Give your view, one reason and one example, then answer one counterargument.',
      points: [
        'Your view: is attention trainable, or is it fixed?',
        'One reason and one example with a number or a time',
        'One counterargument someone might raise',
        'Your answer to that counterargument'
      ],
      pointCn: '1.5–2 分钟里讲完「观点 → 理由 + 例子 → 反驳 → 回应」四步；反驳要具体（例如「有人觉得靠意志力就够了」），回应时用上本篇的 balance 或 deliberate。',
      skeleton: 'In my view, attention is ... The main reason is that ... For example, last week I ... Of course, some people would argue that ... That is partly true, but ...'
    },
    focus: [
      '<b>新授核心词 19 个</b>：<span class=\'en\'>capacity, deliberate, wander, decline, fragment, resist, discipline, drain, fatigue, recharge, shallow, anchor, clarity, strengthen, mindful, allocate, temptation, intention, tendency</span> —— <b>decline</b> 名动同形（a slow decline / decline sharply）；<b>capacity</b> 常接 for 或 to do；<b>drain</b> 多作及物动词，用 drain one’s energy 记；<b>recharge</b> 前缀 re- 表「重新」，和「充电、蓄电」一起记；<b>tendency</b> 后接 to do 或 to doing，别写成 tendance；<b>deliberate</b> 重音在第二个音节，是「刻意的」不是「故意使坏」。',
      '<b>本篇复现的旧词</b>：第 6 篇的 <span class=\'en\'>focus</span>、<span class=\'en\'>balance</span> 与 <span class=\'en\'>distract → distracted</span>、第 8 篇的 <span class=\'en\'>energy</span>、第 17 篇的 <span class=\'en\'>routine</span>、第 23 篇的 <span class=\'en\'>pressure</span>、第 24 篇的 <span class=\'en\'>mental</span>、第 26 篇的 <span class=\'en\'>habit</span>、第 27 篇的 <span class=\'en\'>urge</span>，共 9 处灰点；短语复现另有第 1 篇的 <span class=\'en\'>pay attention to</span>、第 10 篇的 <span class=\'en\'>instead of</span> 与 <span class=\'en\'>keep a record of</span>、第 29 篇的 <span class=\'en\'>set aside</span>、第 27 篇的 <span class=\'en\'>give in to</span>、第 21 篇的 <span class=\'en\'>in the long run</span>。',
      '<b>句型</b>：让步—推进的三步走 <span class=\'en\'>Admittedly, … → This is where … comes in → The aim is not to … but to …</span>；证据之后用 <span class=\'en\'>What this means is that …</span> 收拢结论；全文反复出现 <b>not A but B</b>（not a gift … but a resource … / not another screen but a change of pace …），是议论文辨析概念最顺手的骨架。',
      '<b>搭配与用法</b>：<span class=\'en\'>set aside + 时间</span>（留出时间）；<span class=\'en\'>give in to + 名词</span>（向……让步，to 是介词）；<span class=\'en\'>step away from</span>（暂时离开）；<span class=\'en\'>instead of + 名词或动名词</span>（而不是）；<span class=\'en\'>in the long run</span> 放句首时后面加逗号。',
      '<b>全文逻辑线与题型提醒</b>：现象（注意力被切碎）→ 隐性代价（切换成本）→ 观点（注意力是可训练的资源）→ 方法（深度工作）→ 让步（只靠意志力不行，需要平衡）→ 主动休息 → 一周方案 → 收束（不喊口号）。推断题抓「手机放在桌上会怎样」「损失的时间为什么不被察觉」；作者观点题看第一段的 <span class=\'en\'>My view</span>；结构题看第五段的让步功能；「作者为什么提到 X」要答出例子支撑的是哪一句观点。'
    ],
    standard: {
      time: '约 50 分钟',
      bar: '阅读题 5 题对 ≥ 4 · 19 个核心词遮住中文说出 ≥ 15 · 拆开 5 处长难句 · 完成 120–150 词写作与 1.5–2 分钟含反驳的口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 19 个核心词中的 15 个（capacity、deliberate、anchor、recharge、tendency …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '13 个高频搭配掌握 10 个，能各造一句（set aside、give in to、step away from、in the long run …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 5 处长难句各自的结构（表语从句 / 后置定语 / 比较结构 / 主语从句 / not A but B），并仿写其中 2 处',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；第 4 题要说出第五段在论证中的让步作用',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 120–150 词，至少用上 Admittedly, … 与 What this means is that …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1.5–2 分钟讲完「观点 → 理由 + 例子 → 反驳 → 回应」，反驳要具体',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 9 处灰点旧词，说出其中 7 个的出处篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 45,
    slug: '045-what-i-learned-from-a-month-without-music',
    title: 'What I Learned from a Month Without Music',
    titleCn: '一个月不听音乐的收获',
    stage: '阶段五 · 综合提高',
    stageRange: '第 41–50 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 580 词'
      },
      {
        k: '新词密度',
        v: '约 5.5%'
      },
      {
        k: '长难句',
        v: '5 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/045.jpg',
    coverCredit: 'Photo: Akheel Ahamed / Pexels',
    body: [
      'I fill almost every quiet minute with music: walking to class, cooking, even falling asleep. Last month I decided to run a small experiment: for thirty days I would <span class="w-phrase" data-cn="没有……也过得去">go without</span> music completely. I expected <span class="w-cet4" data-cn="无聊、厌倦">boredom</span>, long <span class="w-synonym" data-cn="＝ dull and depressing 的替换词">grey</span> evenings, and a worse <span class="w-rev">mood</span>. I told my friends one thing: I wanted to know whether the <span class="w-rev">habit</span> was mine or owned by the music.',
      'The first week was the hardest. On the morning walk I <span class="w-phrase" data-cn="伸手去拿">reached for</span> my earphones <span class="w-phrase" data-cn="出于习惯">out of habit</span> several times a day, with a small <span class="w-cet4" data-cn="强烈的渴望、瘾头">craving</span> each time. <span class="w-sentence">It was not the music I missed, but the quiet company of a voice that never asked me anything.</span> When the craving began to <span class="w-cet4" data-cn="逐渐消退、变淡">fade</span>, I saw what the music had been: an <span class="w-cet4" data-cn="逃避（念头或现实）">escape</span> from my thoughts.',
      'By the second week, <span class="w-rev">silence</span> stopped feeling empty. <span class="w-writing" data-cn="我没想到的是……">What I did not expect was</span> how much I could hear: the tap in the kitchen, rain on the window. <span class="w-sentence">The more I listened to the quiet, the more I noticed how much of my day was not mine at all.</span> I began to <span class="w-cet4" data-cn="观察、留意">observe</span> my <span class="w-cet4" data-cn="周围环境">surroundings</span> <span class="w-phrase" data-cn="而不是、代替">instead of</span> covering them with <span class="w-cet4" data-cn="背景的、衬底的">background</span> noise at full <span class="w-cet4" data-cn="音量">volume</span>, and to <span class="w-cet4" data-cn="反思、深入思考">reflect</span> on my days.',
      'The change showed up in my work first. <span class="w-sentence">Without music in the background, an hour of reading felt slower, yet I could remember far more of what I had read.</span> I <span class="w-phrase" data-cn="把……记录下来">kept a record of</span> my sessions: with music I stopped every few minutes; in silence I finished one task at a time. My <span class="w-rev">focus</span> lasted longer, my mind did not <span class="w-cet4" data-cn="走神、飘走">drift</span> away, and the <span class="w-cet4" data-cn="清晰、清明">clarity</span> of my thoughts surprised me.',
      '<span class="w-writing" data-cn="这并不是说……（让步）">That is not to say that</span> music is the enemy. On hard days, when the <span class="w-rev">pressure</span> of exams rises, one song can lift a <span class="w-synonym" data-cn="＝ boring 的替换词">dull</span> day. The <span class="w-cet4" data-cn="不利之处、缺点">downside</span> is not the music; it is my reason for turning it on: not joy, but to <span class="w-rev">avoid</span> my thoughts. <span class="w-sentence">I told myself I was listening to music, but I was hiding inside it, because silence asked questions I did not want to answer.</span>',
      'My decision to <span class="w-cet4" data-cn="停止、戒掉">quit</span> music for thirty days did not make me stronger. <span class="w-rev">Willpower</span> is a poor plan: you fight the same <span class="w-rev">impulse</span> twenty times a day. <span class="w-sentence">What worked was changing the setup: no earphones in the bag, no speakers in the bedroom, and a rule that the first walk stays silent.</span> It was a <span class="w-cet4" data-cn="刻意的、有意的">deliberate</span> move with one <span class="w-cet4" data-cn="意图、打算">intention</span>: to see my days clearly. <span class="w-writing" data-cn="我没想到的是……">What I did not expect was</span> how quickly the impulse faded: after a week it <span class="w-cet4" data-cn="几乎不、勉强">barely</span> appeared, and silence was a <span class="w-cet4" data-cn="轻松、解脱感">relief</span>.',
      'A month later I turned the music back on, though not the old way. At first I had to <span class="w-cet4" data-cn="调整、适应">adjust</span> my timetable; silence felt strange while studying. Now I play it <span class="w-phrase" data-cn="特意、有意地">on purpose</span>: to lift a heavy day before a run, or to <span class="w-phrase" data-cn="打发时间">pass the time</span> while cleaning. The rest of the day stays silent; that small <span class="w-rev">routine</span> is easy to keep. I enjoy music more now: I chose it instead of swallowing it all day.',
      'The month taught me something I did not go looking for. Silence is not empty; it is where thinking happens. In the <span class="w-cet4" data-cn="没有、不存在">absence</span> of sound, my own voice became <span class="w-synonym" data-cn="＝ able to be heard 的替换词">audible</span> again, and I could tell what I wanted from what I reached for. That was the <span class="w-rev">outcome</span> I cared about. I still love music and still play it, but the silence is mine to use, and the most <span class="w-rev">valuable</span> days were the quiet ones.'
    ],
    translation: [
      '我几乎把每一个安静的片刻都填上音乐：上课路上、做饭时，甚至入睡时。上个月我决定做一个小小的实验：整整三十天，完全不听音乐。我预料会无聊，会有一整个灰蒙蒙的晚上，心情也会更差。我只跟朋友说了一句话：我想弄清楚这个习惯到底是我自己的，还是属于音乐。',
      '第一周是最难熬的。早晨走路时，我会出于习惯好几次伸手去拿耳机，每次都带着一阵小小的渴望。我怀念的不是音乐，而是那个从不向我提问的声音所带来的安静陪伴。当那阵渴望开始消退，我才看清音乐到底是什么：一次对我自己念头的逃避。',
      '到了第二周，安静不再显得空荡。我没想到的是，我能听见这么多：厨房里的水龙头、窗上的雨。我越是听这份安静，就越发现自己的日子有多少根本不由自己做主。我开始观察周围的一切，而不是用满格音量的背景噪音把它们盖住，也开始反思自己是怎么过日子的。',
      '变化最先出现在我的学习上。没有背景音乐时，读一小时的书感觉更慢，可读完之后，我能记住的内容多得多。我把每一次学习都记录下来：有音乐时，我每隔几分钟就停下来；安静时，我能把一件事一次做完。专注的时间更长了，思绪也不会飘走，而自己思路的清晰程度也让我吃了一惊。',
      '这并不是说音乐是敌人。难熬的日子里，考试的压力一上来，一首歌就能点亮沉闷的一天。不利之处不在音乐本身，而在我打开它的理由：不是为了快乐，而是为了逃避自己的念头。我告诉自己我在听音乐，其实我是躲在音乐里面，因为安静会问出我不想回答的问题。',
      '我决定戒掉音乐三十天，这并没有让我变得更强大。意志力是个糟糕的方案：你一天要和同一种冲动交手二十次。真正管用的是改变设置：包里不放耳机，卧室不放音箱，再加一条规矩——每天的第一段路保持安静。这是一个刻意的举动，只有一个意图：看清自己的日子。我没想到的是，那股冲动消退得那么快：一周之后它几乎不再出现，安静本身就是一种轻松。',
      '一个月之后，我把音乐打开了，但已不是从前的样子。起初我得调整时间表：在安静里学习让人不太习惯。现在我听音乐是特意的：在跑步前点亮沉重的一天，或者在打扫时打发时间。剩下的时间保持安静；这个小小的例行安排很容易坚持。我现在更享受音乐了：是我选择了它，而不是整天把它硬吞下去。',
      '这个月教会了我一件我并未刻意去寻找的事。安静不是空的；思考恰恰发生在那里。在没有声响的日子里，我自己的声音重新变得听得见，我也能分清自己真正想要的，和只是随手去抓的。那才是我在意的结果。我依然热爱音乐，也依然会听；但安静现在归我使用，而最珍贵的日子，正是那些安静的日子。'
    ],
    vocabulary: [
      {
        w: 'boredom',
        ph: '/ˈbɔːdəm/',
        pos: 'n.',
        cn: '无聊、厌倦',
        col: 'boredom with … — 对……的厌倦；fight boredom — 对抗无聊',
        ex: 'I expected boredom, but the first week was busier than I thought.'
      },
      {
        w: 'craving',
        ph: '/ˈkreɪvɪŋ/',
        pos: 'n.',
        cn: '强烈的渴望、瘾头',
        col: 'a craving for … — 对……的强烈渴望；fight a craving — 克制渴望',
        ex: 'Each time I walked past the shop I felt a craving for something sweet.'
      },
      {
        w: 'fade',
        ph: '/feɪd/',
        pos: 'v.',
        cn: '逐渐消退、变淡',
        col: 'fade away — 逐渐消失；fade slowly — 慢慢消退',
        ex: 'After a few days the craving began to fade.'
      },
      {
        w: 'escape',
        ph: '/ɪˈskeɪp/',
        pos: 'v./n.',
        cn: '逃避（念头或现实）',
        col: 'an escape from … — 从……中的逃避；escape from reality — 逃避现实',
        ex: 'Music became an escape from my own thoughts.'
      },
      {
        w: 'observe',
        ph: '/əbˈzɜːv/',
        pos: 'vt.',
        cn: '观察、留意',
        col: 'observe the surroundings — 观察周围环境；observe carefully — 仔细观察',
        ex: 'Without earphones I began to observe the street on my way to class.'
      },
      {
        w: 'surroundings',
        ph: '/səˈraʊndɪŋz/',
        pos: 'n.',
        cn: '周围环境',
        col: 'notice one’s surroundings — 留意周围环境；quiet surroundings — 安静的环境',
        ex: 'In silence you notice your surroundings far more quickly.'
      },
      {
        w: 'background',
        ph: '/ˈbækɡraʊnd/',
        pos: 'n./adj.',
        cn: '背景（的）、衬底（的）',
        col: 'background noise — 背景噪音；in the background — 在背景中',
        ex: 'Background music can hide the sound of your own thinking.'
      },
      {
        w: 'volume',
        ph: '/ˈvɒljuːm/',
        pos: 'n.',
        cn: '音量',
        col: 'turn the volume down — 把音量调低；at full volume — 以最大音量',
        ex: 'He plays music at full volume while he cooks.'
      },
      {
        w: 'reflect',
        ph: '/rɪˈflekt/',
        pos: 'v.',
        cn: '反思、深入思考',
        col: 'reflect on one’s life — 反思自己的生活；take time to reflect — 花时间反思',
        ex: 'A quiet walk gives me time to reflect on the week.'
      },
      {
        w: 'clarity',
        ph: '/ˈklærəti/',
        pos: 'n.',
        cn: '清晰、清明',
        col: 'with clarity — 清楚地；clarity of thought — 思路的清晰',
        ex: 'The silence brought a clarity that surprised me.'
      },
      {
        w: 'drift',
        ph: '/drɪft/',
        pos: 'v./n.',
        cn: '走神、飘走',
        col: 'drift away — 思绪飘走；drift off — 走神、睡着',
        ex: 'In a loud room my mind drifts away every few minutes.'
      },
      {
        w: 'downside',
        ph: '/ˈdaʊnsaɪd/',
        pos: 'n.',
        cn: '不利之处、缺点',
        col: 'the downside is … — 不利之处在于……；a downside of … — ……的缺点',
        ex: 'The downside of silence is that it can feel uncomfortable at first.'
      },
      {
        w: 'quit',
        ph: '/kwɪt/',
        pos: 'v.',
        cn: '停止、戒掉',
        col: 'quit doing sth. — 停止做某事；quit for a month — 戒掉一个月',
        ex: 'I decided to quit music for thirty days.'
      },
      {
        w: 'deliberate',
        ph: '/dɪˈlɪbərət/',
        pos: 'adj.',
        cn: '刻意的、有意的',
        col: 'a deliberate choice — 刻意的选择；deliberate practice — 有意识的练习',
        ex: 'Silence now is a deliberate choice, not an accident.'
      },
      {
        w: 'intention',
        ph: '/ɪnˈtenʃn/',
        pos: 'n.',
        cn: '意图、打算',
        col: 'with one intention — 抱着一个意图；have no intention of … — 无意做……',
        ex: 'I started the month with one intention: to see my own habits clearly.'
      },
      {
        w: 'barely',
        ph: '/ˈbeəli/',
        pos: 'adv.',
        cn: '几乎不、勉强',
        col: 'barely appear — 几乎不出现；barely enough — 勉强够',
        ex: 'After a week the urge to reach for my earphones barely appeared.'
      },
      {
        w: 'relief',
        ph: '/rɪˈliːf/',
        pos: 'n.',
        cn: '轻松、解脱感',
        col: 'to my relief — 让我松了口气；feel relief — 感到解脱',
        ex: 'The silence felt like relief rather than punishment.'
      },
      {
        w: 'adjust',
        ph: '/əˈdʒʌst/',
        pos: 'v.',
        cn: '调整、适应',
        col: 'adjust the timetable — 调整时间表；adjust to … — 适应……',
        ex: 'It took me a week to adjust to studying in silence.'
      },
      {
        w: 'absence',
        ph: '/ˈæbsəns/',
        pos: 'n.',
        cn: '没有、不存在',
        col: 'in the absence of … — 在没有……的情况下；absence of noise — 没有噪音',
        ex: 'In the absence of background sound, small details come back.'
      }
    ],
    phrases: [
      {
        en: 'go without (sth.)',
        cn: '没有……也过得去、戒掉（新）',
        ex: 'For thirty days I went without music completely.'
      },
      {
        en: 'reach for',
        cn: '伸手去拿（新）',
        ex: 'He reaches for his earphones before he even opens the door.'
      },
      {
        en: 'out of habit',
        cn: '出于习惯（新）',
        ex: 'I checked my phone out of habit, not because anyone had written.'
      },
      {
        en: 'instead of',
        cn: '而不是、代替（复现第 10 篇）',
        ex: 'I listen to the street instead of covering it with noise.'
      },
      {
        en: 'keep a record of',
        cn: '把……记录下来（复现第 10 篇）',
        ex: 'Keep a record of each study session for one week and compare them.'
      },
      {
        en: 'on purpose',
        cn: '特意、有意地（新）',
        ex: 'Now I play music on purpose, for a reason I can name.'
      },
      {
        en: 'pass the time',
        cn: '打发时间（新）',
        ex: 'Music helps me pass the time while I clean the room.'
      },
      {
        en: 'take in',
        cn: '感受、吸收（新）',
        ex: 'A slow walk helps you take in the quiet around you.'
      },
      {
        en: 'push through',
        cn: '顶过去、挺过去（新）',
        ex: 'The first three days are the hardest; push through them.'
      },
      {
        en: 'for the time being',
        cn: '暂时、眼下（新）',
        ex: 'For the time being, I keep the rule about no music before bed.'
      },
      {
        en: 'used to do sth.',
        cn: '过去常常做某事（复现第 1 篇）',
        ex: 'I used to fall asleep with a song still playing in my head.'
      },
      {
        en: 'in the long run',
        cn: '从长远来看（复现第 21 篇）',
        ex: 'In the long run, choosing silence is easier than fighting noise.'
      },
      {
        en: 'stick to',
        cn: '坚持、信守（复现第 8 篇）',
        ex: 'The rules are simple, so they are easy to stick to.'
      }
    ],
    writings: [
      {
        expr: 'What I did not expect was ...',
        cn: '我没想到的是……',
        meaning: '先承认预期，再翻出真正发生的事，是「实验类」记叙文最自然的转折句；它同时完成了「观点 + 证据」的过渡。',
        context: '用在观察段或结论段的开头，后面接一个 how / that 从句写真正发生的变化。',
        alts: [
          {
            t: 'What surprised me was ...',
            n: '更口语'
          },
          {
            t: 'I had not expected ...',
            n: '书面、简洁'
          },
          {
            t: 'Little did I know that ...',
            n: '强调事后才知道'
          }
        ],
        register: '中性，记叙与议论都好用。',
        example: 'What I did not expect was how quickly the craving faded.'
      },
      {
        expr: 'That is not to say that ...',
        cn: '这并不是说……（让步）',
        meaning: '先把可能的误解挡回去，再给出自己的真实立场，让观点不至于绝对化；这是「观点 + 让步」最省力的连接。',
        context: '用在观点句之后，先让一步（音乐不是敌人），再转折回来写真正的问题。',
        alts: [
          {
            t: 'This does not mean that ...',
            n: '更平实'
          },
          {
            t: 'I am not saying that ...',
            n: '更口语'
          },
          {
            t: 'Admittedly, ...',
            n: '直接承认对方有理'
          }
        ],
        register: '中性偏书面，适合议论文。',
        example: 'That is not to say that music is the enemy; it is my reason for turning it on.'
      }
    ],
    sentences: [
      {
        text: 'It was not the music I missed, but the quiet company of a voice that never asked me anything.',
        points: [
          '<b>主干</b>：It was not A but B 的<b>对比强调结构</b>：被否定的是 the music I missed，真正想说的在 but 之后 —— the quiet company of a voice。朗读时重音落在 but 后面。',
          '<b>定语从句</b>：that never asked me anything 修饰 a voice，先行词是物，关系代词用 that 即可；注意 <b>quiet company</b> 里 company 指「陪伴」，不可数，前面不能加 a。',
          '<b>省略的定语从句</b>：the music I missed 省略了关系代词 that（the music that I missed），口语和书面都很常见。',
          '<b>为什么值得学</b>：写「我怀念的其实不是甲，而是乙」这一类翻转句，not A but B 比 however 更有力量，适合放在段首或段尾立观点。',
          '<b>常见变体</b>：It was not the prize I wanted, but the hours I spent with my team.'
        ]
      },
      {
        text: 'The more I listened to the quiet, the more I noticed how much of my day was not mine at all.',
        points: [
          '<b>主干</b>：<b>the more …, the more …</b> 的比较结构：前半句是<b>比较状语从句</b>，后半句是主句，两边都用「the + 比较级」，且比较级前的 the 不能省。',
          '<b>宾语从句</b>：how much of my day was not mine at all 整个作 noticed 的宾语；how much 同时修饰 of my day，表示「多大一部分」。',
          '<b>固定搭配</b>：<b>not … at all</b> 是「一点也不」，语气比单用 not 强；mine 在这里相当于 my day / my time，避免重复。',
          '<b>为什么值得学</b>：写「越……越……」的观察，这个结构自带递进感，比 I began to realize … 更有节奏，常用于实验类或调查类文章的转折处。',
          '<b>常见变体</b>：The more I read, the more I see how little I know.'
        ]
      },
      {
        text: 'Without music in the background, an hour of reading felt slower, yet I could remember far more of what I had read.',
        points: [
          '<b>主干</b>：an hour of reading felt slower；<b>feel + 形容词</b> 是系表结构，felt slower 写「读起来更慢」的感受，不是动作。',
          '<b>句首状语</b>：Without music in the background 是介词短语作<b>条件性背景状语</b>，交代对比前提；去掉后主句仍成立。',
          '<b>转折连词</b>：yet 连接两个并列分句，语气比 but 更书面，常用于「看似不利、其实有利」的让步对比。',
          '<b>时态</b>：what I had read 用<b>过去完成时</b>，表示「读完之后回头看已读过的内容」，动作先于 could remember。',
          '<b>为什么值得学</b>：一句话里同时有比较、转折和宾语从句，是「证据段」最好用的句型：先写感受，再用 yet 给出反直觉的结果。'
        ]
      },
      {
        text: 'I told myself I was listening to music, but I was hiding inside it, because silence asked questions I did not want to answer.',
        points: [
          '<b>主干</b>：I told myself (that) I was listening to music but I was hiding inside it；<b>tell oneself (that) …</b> 表示「说服自己、自我安慰」，比 say to myself 更强调自欺。',
          '<b>时态选择</b>：两处<b>进行时</b>（was listening / was hiding）写的是那一个月里持续的状态，而不是某一次动作，这是进行时最典型的用法之一。',
          '<b>原因从句</b>：because silence asked questions I did not want to answer，其中 questions 后是<b>省略关系代词的定语从句</b>（questions that I did not want to answer）。',
          '<b>为什么值得学</b>：先摆出自己的旧想法（I told myself），再用 but 拆穿它，最后用 because 给出真正的原因 —— 三层一口气说完，是自省类文章的核心句式。',
          '<b>注意点</b>：inside it 的 it 指 music，不要理解成 silence。'
        ]
      },
      {
        text: 'What worked was changing the setup: no earphones in the bag, no speakers in the bedroom, and a rule that the first walk stays silent.',
        points: [
          '<b>主干</b>：<b>What worked</b> 是 what 引导的<b>主语从句</b>，表语是动名词短语 changing the setup；What worked = 有效的东西，比 The useful thing that worked 更简洁。',
          '<b>冒号后的同位说明</b>：三个并列的名词短语（no earphones … / no speakers … / a rule …）把「setup」具体展开，写方法类段落时可以照抄这个结构。',
          '<b>同位语从句</b>：that the first walk stays silent 说明 rule 的内容，that 不作成分、只起连接作用，不能换成 which。',
          '<b>句式要点</b>：「改环境」比「靠意志」更好写 —— 这句话先给结论（What worked），再给三个可操作的细节，读者能直接照做。',
          '<b>常见变体</b>：What worked was changing the order: reading first, messages later, and a fixed time for questions.'
        ]
      }
    ],
    questions: [
      {
        en: 'Why did the writer keep reaching for his earphones during the first week?',
        cn: '第一周里，作者为什么总是一次次伸手去拿耳机？',
        ans: 'Because reaching for music had become automatic, and he used it to avoid being alone with his own thoughts rather than simply for pleasure.',
        ansCn: '因为伸手拿耳机已经成了下意识动作，他用音乐来逃避和自己的念头独处，而不只是因为喜欢听歌。'
      },
      {
        en: 'What does the writer suggest about relying on willpower alone to change a habit?',
        cn: '关于只靠意志力来改变一个习惯，作者有什么看法？',
        ans: 'It is a poor plan, because the same impulse returns many times a day; changing the setup works far better.',
        ansCn: '那是个糟糕的方案，因为同一种冲动一天会回来很多次；改变环境设置才真正管用。'
      },
      {
        en: 'What is the writer’s view of music after the month without it?',
        cn: '一个月不听音乐之后，作者对音乐持什么看法？',
        ans: 'Music is not the enemy and can lift a hard day; the real problem was using it to hide from his own thoughts, so he now plays it on purpose and keeps some silence.',
        ansCn: '音乐不是敌人，还能点亮难熬的一天；真正的问题是拿它来逃避自己的念头，所以他现在有意地听音乐，同时保留安静。'
      },
      {
        en: 'How is the article organized?',
        cn: '这篇文章是怎样组织的？',
        ans: 'It opens with the decision and the difficult first week, moves through what he heard and the evidence from his study sessions, gives a concession about music, and closes with the rules he kept and what the month taught him.',
        ansCn: '开头写做决定和难熬的第一周，中间写他听见的东西与学习记录里的证据，然后对音乐做让步，最后写他保留的规则和这一个月的收获。'
      },
      {
        en: 'Why does the writer mention keeping a record of his study sessions?',
        cn: '作者为什么提到自己把每一次学习都记录下来？',
        ans: 'To give concrete evidence that silence improved his work: with music he stopped every few minutes, while in silence he finished one task at a time.',
        ansCn: '为了拿出具体证据，说明安静确实让学习变好：有音乐时他每隔几分钟就停，安静时却能把一件事一次做完。'
      }
    ],
    writingTask: {
      en: 'Write 120–150 words about a comfort you gave up for a period of time: what you expected, what actually changed, and what you decided to keep.',
      hints: [
        'For … days I decided to go without …',
        'What I did not expect was …',
        'The downside is not …; it is …',
        'That is not to say that …; on hard days …'
      ],
      hintCn: '用三段写一次「戒掉」小实验：第一段交代时间线和预期，第二段写观察和证据（最好给出一个具体数字的对比），第三段先让步再收束立意。120–150 词里至少出现一个具体天数或数字。',
      req: '至少使用 3 个本篇学过的词或搭配（quit / craving / deliberate / downside / keep a record of / What I did not expect was … / That is not to say that …）。'
    },
    speakingTask: {
      en: 'Answer in 1.5–2 minutes. Give your view, one reason and one example, then answer one counterargument.',
      points: [
        'Your view: is giving up a comfort for a month worth it?',
        'One reason for that view, with one piece of evidence',
        'One example with a time, a place or a number',
        'One counterargument and your answer to it'
      ],
      pointCn: '1.5–2 分钟里讲完「观点 → 理由 → 例子 → 反驳」四步；例子要带具体的时间、数字或场景，反驳要先复述对方的理由再回应，不能只说「有人不同意」。',
      skeleton: 'In my view, giving up one comfort for a month is worth it. The reason is that … For example, when I … for … days, I … Some people may say that … , but I would answer that … To sum up, ...'
    },
    focus: [
      '<b>新授核心词 19 个</b>：<span class=\'en\'>boredom, craving, fade, escape, observe, surroundings, background, volume, reflect, clarity, drift, downside, quit, deliberate, intention, barely, relief, adjust, absence</span> —— <b>quit</b> 后接动名词表示「戒掉某事」（quit doing sth.）；<b>surroundings</b> 常用复数，指「周围的一切」；<b>volume</b> 表「音量」时说 turn the volume up / down；<b>absence</b> 最常用的搭配是 in the absence of …；<b>deliberate</b> 重音在第二个音节，副词为 deliberately；<b>escape</b> 可作动词也可作名词（an escape from …）；<b>downside</b> 是口语高频词，常以 the downside is … 开头；<b>boredom</b> 不可数，别和 boring 混用。',
      '<b>本篇复现的旧词（共 11 处灰点）</b>：第 16 篇的 <span class=\'en\'>silence</span>、第 8 篇的 <span class=\'en\'>mood</span>、第 26 篇的 <span class=\'en\'>habit</span>、第 6 篇的 <span class=\'en\'>focus</span>、第 27 篇的 <span class=\'en\'>impulse</span>、第 17 篇的 <span class=\'en\'>routine</span>、第 38 篇的 <span class=\'en\'>willpower</span>、第 23 篇的 <span class=\'en\'>pressure</span>、第 21 篇的 <span class=\'en\'>avoid</span>、第 40 篇的 <span class=\'en\'>outcome</span>、第 14 篇的 <span class=\'en\'>valuable</span>；短语复现另有第 10 篇的 <span class=\'en\'>instead of / keep a record of</span>，以及 <span class=\'en\'>used to do sth. / stick to / in the long run</span> 这些早期学过的搭配。',
      '<b>五处长难句覆盖阶段五要求的结构</b>：对比强调 <span class=\'en\'>It was not A but B</span> 加定语从句（第一处）、<span class=\'en\'>the more …, the more …</span> 加宾语从句（第二处）、句首介词短语加 <span class=\'en\'>yet</span> 转折加过去完成时（第三处）、自我对话 <span class=\'en\'>told myself … but … because …</span> 三层叠加（第四处）、<span class=\'en\'>What worked was …</span> 主语从句加冒号同位说明加同位语从句（第五处）——五句都拆在长难句解析里，仿写时优先练第一处和第五处。',
      '<b>观点 + 证据 + 让步的三层写法</b>：观点句用 <span class=\'en\'>The downside is not …; it is …</span>；证据用 <span class=\'en\'>keep a record of</span> 得到的数字对比（有音乐每隔几分钟就停 / 安静里能把一件事一次做完）；让步用 <span class=\'en\'>That is not to say that …</span> 先退一步；转折惊喜用 <span class=\'en\'>What I did not expect was …</span>。这四句可以整段搬进写作任务。',
      '<b>全文逻辑线与题型提醒</b>：做决定 → 第一周的反复（伸手拿耳机）→ 听见周围 → 学习里的证据 → 让步（音乐不是敌人）→ 方法（改设置优于拼意志力）→ 回归并立新规矩 → 收束（安静是可以使用的东西）。推断题抓「行为背后的真正原因」；作者观点题重点看让步段前后的转折句；篇章结构题按「实验 → 观察 → 证据 → 让步 → 结论」数段落功能；「作者为什么提到 X」的题，回到例子前面找它支撑的那句观点。'
    ],
    standard: {
      time: '约 50 分钟',
      bar: '阶段五中段：阅读题 5 题对 ≥ 4 · 19 个核心词遮住中文说出 ≥ 14 · 拆开 5 处长难句 · 完成 120–150 词写作与 1.5–2 分钟含反驳的口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 19 个核心词中的 14 个（observe、deliberate、downside、absence、craving …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '13 个高频搭配掌握 10 个，能各造一句（reach for、go without、out of habit、keep a record of …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 5 处长难句各自的结构（对比强调 / the more 比较句 / yet 转折句 / 三层复合句 / 主语从句加同位说明），并仿写其中 2 处',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；第 5 题要说出作者提到学习记录是为了证明哪一层意思',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 120–150 词，至少用上 What I did not expect was … 或 That is not to say that …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1.5–2 分钟讲完「观点 → 理由 → 例子 → 反驳」，反驳要先复述对方理由再回应',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 11 处灰点旧词，说出其中 9 个的意思和出处篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 46,
    slug: '046-the-true-cost-of-cheap',
    title: 'The True Cost of Cheap',
    titleCn: '便宜的真实成本',
    stage: '阶段五 · 综合提高',
    stageRange: '第 41–50 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 595 词'
      },
      {
        k: '新词密度',
        v: '约 5.6%'
      },
      {
        k: '长难句',
        v: '4 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/046.jpg',
    coverCredit: 'Photo: Gioele Gatto / Pexels',
    body: [
      'A <span class="w-rev">cheap</span> thing feels like a win: low <span class="w-rev">price</span>, easy choice. Yet the tag is not the whole bill. Whoever made it must be paid, the waste must go somewhere, and <span class="w-phrase" data-cn="迟早、总有一天">sooner or later</span> the thing must be replaced. <span class="w-sentence">The real question is not how much you pay at the counter today, but who pays the rest of the bill, and when.</span> Cheap is not the problem; the <span class="w-rev">hidden</span> bill is.',
      '<span class="w-writing" data-cn="说句公道话……">To be fair,</span> the rest of the bill is easy to miss: it is paid far away, years later. A <span class="w-cet4" data-cn="供应商">supplier</span> who must sell very cheaply has few places to cut: <span class="w-phrase" data-cn="偷工减料">cut corners</span> on materials, pay a lower <span class="w-cet4" data-cn="工资">wage</span>, or pass the cost of <span class="w-cet4" data-cn="污染">pollution</span> on to the town where the goods are <span class="w-cet4" data-cn="制造">manufactured</span>. A <span class="w-synonym" data-cn="＝ buy 的正式替换词">purchase</span> that looks like a bargain is often someone else’s bill.',
      '<span class="w-writing" data-cn="人们很容易以为……">It is easy to assume that</span> the cheapest product is the cheapest to own. It rarely is, and you can <span class="w-cet4" data-cn="计算、核算">calculate</span> why: <span class="w-phrase" data-cn="每次使用成本">cost per use</span>, the price divided by the number of times you use it. A coat that costs half as much but <span class="w-phrase" data-cn="穿坏、用坏">wears out</span> in one season is not cheap; you end up buying it twice. A <span class="w-cet4" data-cn="耐用的">durable</span> kettle with a five-year <span class="w-cet4" data-cn="保修、保修期">warranty</span> lasts; one that breaks down in a year does not. A short <span class="w-cet4" data-cn="使用寿命">lifespan</span> turns a low price into a deposit.',
      '<span class="w-sentence">The bill does not stop at money, because an item that fails early charges you again in time and patience.</span> You buy again and throw it away. Cheap objects are rarely worth repairing, so they are <span class="w-cet4" data-cn="丢弃、抛弃">discarded</span> long before they are used up. These small charges <span class="w-phrase" data-cn="积少成多、累积起来">add up</span>, and they land as <span class="w-cet4" data-cn="麻烦、烦扰">hassle</span>: the irritation of owning something never meant to last. <span class="w-synonym" data-cn="＝ in the end 的书面替换词">Ultimately</span>, the hours you lose are the part nobody writes down.',
      '<span class="w-writing" data-cn="说句公道话……">To be fair,</span> the cheap version is often the sensible one. For something used a handful of times, a long life is worth nothing, and paying twice is <span class="w-rev">waste</span>, not virtue. <span class="w-cet4" data-cn="偶尔的、偶尔用的">Occasional</span> items are where the low price wins. Nor is it fair to blame people who buy cheap: when the family <span class="w-rev">budget</span> is tight, money today is real and next year’s saving is a promise, and many cannot <span class="w-rev">afford</span> to pay more now. Buying cheap is a <span class="w-cet4" data-cn="折中、妥协">compromise</span>, not a moral failure.',
      'Seen this way, buying well is a <span class="w-cet4" data-cn="权衡、取舍">trade-off</span> you make item by item. For daily items, <span class="w-rev">quality</span> pays: a little <span class="w-cet4" data-cn="保养、维护">maintenance</span>, one <span class="w-rev">repair</span> instead of a new purchase, and <span class="w-phrase" data-cn="从长远来看">in the long run</span> the better-made item is <span class="w-cet4" data-cn="划算的、经济的">economical</span> even when its <span class="w-cet4" data-cn="前期的、预先的">upfront</span> price hurts. For twice-a-year items, cheap is <span class="w-synonym" data-cn="＝ only 的书面替换词">merely</span> sensible. <span class="w-sentence">What changes the calculation is time: the longer an item stays useful, the less often the low price can win.</span>',
      'A <span class="w-rev">consumer</span> culture that treats objects as <span class="w-rev">disposable</span> pushes the bill towards workers, towns and bins. A <span class="w-rev">brand</span> name is no guarantee; what matters is the bill, not the label. <span class="w-cet4" data-cn="总体的、总体上">Overall</span>, a good deal is often a delayed invoice, and buying the same thing three times is hard to <span class="w-cet4" data-cn="证明……合理">justify</span>. The convenience of the cheap shelf rarely <span class="w-cet4" data-cn="比……更重要、大于">outweighs</span> the cost somebody else carries.',
      'Before the next bargain feels clever, ask two questions: how often will I use it, and who pays for what I cannot see? <span class="w-sentence">Only when you see the whole bill does a low price tell you anything at all.</span> If the answers hold up, buy it; if not, paying a little more is often <span class="w-phrase" data-cn="花得值的钱">money well spent</span>. Think twice, and the price becomes a decision instead of a surprise. Cheap is not the enemy; the cost you never agreed to is.'
    ],
    translation: [
      '便宜的东西总让人觉得赚到了：价格低，选择轻松。但标签不是全部账单。做东西的人总得有人付钱，垃圾总得有地方去，而东西本身迟早要换新。真正的问题不是你今天在收银台付了多少，而是剩下的账单由谁来付、什么时候付。便宜不是问题；没人拿给你看的那张账单才是。',
      '说句公道话，剩下的那部分账单很容易被忽略：它付在很远的地方，而且是很多年之后。一个必须把价格压得很低的供应商，能下手的地方只有几处：在材料上偷工减料，压低工资，或者把污染的成本转嫁到商品产地的那座小镇头上。一笔看起来捡了便宜的买卖，往往是别人头上的一张账单。',
      '人们很容易以为，最便宜的产品就是用起来最便宜的那个。事实很少如此，一算就明白：每次使用成本，也就是价格除以你使用它的次数。一件价钱只有一半、却一个季度就穿坏的外套根本不便宜；你会买上两次。一把带五年保修的耐用的水壶能用很久；一个一年就坏掉的就不行。寿命一短，低价就成了你垫付的押金。',
      '这张账单不止是钱，因为一件早早坏掉的东西，还会再次向你收取时间和耐心的费用。你只好再买一次，把坏的扔掉。便宜的东西很少值得修，于是它们远远没被用完就被丢弃。这些小花费积少成多，最后化成麻烦：拥有一件从没打算用久的东西，那种反复的恼火。到头来，你损失的时间才是没人写下来的那一部分。',
      '说句公道话，便宜的那个版本常常才是明智之选。对一件只用几次的东西，长寿毫无意义，付两次钱是浪费，不是美德。偶尔用一次的东西，恰恰是低价货赢的地方。责怪买便宜货的人也不公平：家庭预算紧张时，今天的钱是实实在在的，明年的节省只是一句承诺，很多人眼下拿不出更多的钱。买便宜货是一种折中，而不是道德上的失败。',
      '这样看来，会买东西是你逐件做出的权衡。对每天用的东西，质量是划算的：一点保养，一次维修而不是重新买一个，从长远看，做工更好的那件更经济，哪怕它的前期价格让人肉疼。对一年只用两次的东西，便宜就只是合理。真正改变这笔计算的是时间：一件东西保持可用的时间越长，低价就越难占上风。',
      '一个把物品当成一次性用品的消费文化，只是把账单推向工人、小城和垃圾桶。品牌名字同样不是保证；要紧的是账单，而不是标签。总体来看，所谓捡到的便宜常常只是一张延迟寄来的发票，同一件东西买三次，很难说得过去。便宜货架带来的便利，很少大得过别人要承担的那部分代价。',
      '下一次觉得某个便宜捡得聪明之前，先问两个问题：我会用它几次？我看不见的那部分由谁来付？只有当你看见整张账单，低价才真正说明问题。如果答案经得起推敲，就买下它；如果经不起，多花一点钱往往才是花得值的钱。多想一想，价格就成了一个决定，而不是一次意外。便宜不是敌人；你从未答应承担的那部分代价才是。'
    ],
    vocabulary: [
      {
        w: 'supplier',
        ph: '/səˈplaɪə(r)/',
        pos: 'n.',
        cn: '供应商',
        col: 'a reliable supplier — 可靠的供应商；supplier and buyer — 供应商与买家',
        ex: 'A supplier who sells too cheaply has to cut somewhere.'
      },
      {
        w: 'wage',
        ph: '/weɪdʒ/',
        pos: 'n.',
        cn: '工资',
        col: 'a low wage — 低工资；wage levels — 工资水平',
        ex: 'Part of a very low price is often a lower wage.'
      },
      {
        w: 'pollution',
        ph: '/pəˈluːʃn/',
        pos: 'n.',
        cn: '污染',
        col: 'air pollution — 空气污染；cause pollution — 造成污染',
        ex: 'The cost of pollution is easy to pass on to a nearby town.'
      },
      {
        w: 'manufacture',
        ph: '/ˌmænjuˈfæktʃə(r)/',
        pos: 'vt.',
        cn: '制造、生产',
        col: 'manufacture goods — 制造商品；manufactured abroad — 在国外制造',
        ex: 'The town where the goods are manufactured also pays part of the bill.'
      },
      {
        w: 'calculate',
        ph: '/ˈkælkjuleɪt/',
        pos: 'v.',
        cn: '计算、核算',
        col: 'calculate the cost — 核算成本；hard to calculate — 难以算清',
        ex: 'You can calculate the real cost of a coat in one minute.'
      },
      {
        w: 'durable',
        ph: '/ˈdjʊərəbl/',
        pos: 'adj.',
        cn: '耐用的',
        col: 'durable material — 耐用材料；prove durable — 证明耐用',
        ex: 'A durable kettle costs more and lasts far longer.'
      },
      {
        w: 'warranty',
        ph: '/ˈwɒrənti/',
        pos: 'n.',
        cn: '保修、保修期',
        col: 'a five-year warranty — 五年保修；under warranty — 在保修期内',
        ex: 'Check the warranty before you pay for a cheap machine.'
      },
      {
        w: 'lifespan',
        ph: '/ˈlaɪfspæn/',
        pos: 'n.',
        cn: '使用寿命',
        col: 'a short lifespan — 寿命短；the lifespan of a product — 一件产品的寿命',
        ex: 'A short lifespan turns a low price into a deposit.'
      },
      {
        w: 'discard',
        ph: '/dɪsˈkɑːd/',
        pos: 'vt.',
        cn: '丢弃、抛弃',
        col: 'discard an old item — 丢掉旧物；be discarded early — 很早就被扔掉',
        ex: 'Cheap objects are discarded long before they are used up.'
      },
      {
        w: 'hassle',
        ph: '/ˈhæsl/',
        pos: 'n.',
        cn: '麻烦、烦扰',
        col: 'a real hassle — 真麻烦；save yourself the hassle — 免去这份麻烦',
        ex: 'The worst part of a broken cheap product is the hassle.'
      },
      {
        w: 'occasional',
        ph: '/əˈkeɪʒənl/',
        pos: 'adj.',
        cn: '偶尔的、偶尔用的',
        col: 'occasional use — 偶尔使用；an occasional guest — 偶尔来的客人',
        ex: 'Occasional items are where the cheap version wins.'
      },
      {
        w: 'compromise',
        ph: '/ˈkɒmprəmaɪz/',
        pos: 'n./v.',
        cn: '折中、妥协',
        col: 'reach a compromise — 达成折中；compromise on quality — 在质量上将就',
        ex: 'Buying cheap can be a compromise, not a failure.'
      },
      {
        w: 'justify',
        ph: '/ˈdʒʌstɪfaɪ/',
        pos: 'vt.',
        cn: '证明……合理、为……辩护',
        col: 'justify a purchase — 为一次购买辩解；hard to justify — 很难说得过去',
        ex: 'It is hard to justify buying the same thing three times.'
      },
      {
        w: 'outweigh',
        ph: '/ˌaʊtˈweɪ/',
        pos: 'vt.',
        cn: '比……更重要、大于',
        col: 'benefits outweigh costs — 收益大于成本；outweigh the risk — 大过风险',
        ex: 'The convenience rarely outweighs the cost somebody else carries.'
      },
      {
        w: 'upfront',
        ph: '/ˌʌpˈfrʌnt/',
        pos: 'adj.',
        cn: '预先的、前期的',
        col: 'upfront cost — 前期花费；an upfront payment — 预付款',
        ex: 'An upfront price hurts today; a long lifespan pays you back.'
      },
      {
        w: 'trade-off',
        ph: '/ˈtreɪdɒf/',
        pos: 'n.',
        cn: '权衡、取舍',
        col: 'a trade-off between A and B — 甲与乙之间的取舍；make a trade-off — 做一次权衡',
        ex: 'Every purchase is a trade-off between price and lifespan.'
      },
      {
        w: 'maintenance',
        ph: '/ˈmeɪntənəns/',
        pos: 'n.',
        cn: '保养、维护',
        col: 'regular maintenance — 定期保养；maintenance costs — 维护费用',
        ex: 'A little maintenance keeps a good item useful for years.'
      },
      {
        w: 'economical',
        ph: '/ˌiːkəˈnɒmɪkl/',
        pos: 'adj.',
        cn: '划算的、经济的',
        col: 'an economical choice — 划算的选择；economical to run — 用起来省',
        ex: 'The better-made item is often the economical one.'
      },
      {
        w: 'overall',
        ph: '/ˌəʊvərˈɔːl/',
        pos: 'adj./adv.',
        cn: '总体的、总体上',
        col: 'overall cost — 总成本；the overall picture — 总体情况',
        ex: 'Overall, a good deal is often a delayed invoice.'
      }
    ],
    phrases: [
      {
        en: 'cost per use',
        cn: '每次使用成本（新）',
        ex: 'Cost per use is the price divided by the number of times you use it.'
      },
      {
        en: 'cut corners',
        cn: '偷工减料、走捷径（新）',
        ex: 'A supplier with a very low price has to cut corners somewhere.'
      },
      {
        en: 'wear out',
        cn: '穿坏、用坏（新）',
        ex: 'A coat that wears out after one season is not a real bargain.'
      },
      {
        en: 'break down',
        cn: '出故障、坏掉（新）',
        ex: 'The cheap kettle broke down in its second winter.'
      },
      {
        en: 'pass … on to …',
        cn: '把（成本、责任）转嫁给……（新）',
        ex: 'The factory passes the cost of pollution on to the town.'
      },
      {
        en: 'money well spent',
        cn: '花得值的钱（新）',
        ex: 'A durable bag is money well spent if you carry it every day.'
      },
      {
        en: 'add up',
        cn: '积少成多、加起来（复现第 27 篇）',
        ex: 'Small charges add up faster than most people expect.'
      },
      {
        en: 'in the long run',
        cn: '从长远来看（复现第 21 篇）',
        ex: 'In the long run, the better-made item is the cheaper one.'
      },
      {
        en: 'think twice',
        cn: '多想一想再决定（复现第 13 篇）',
        ex: 'Think twice before you hand over the money.'
      },
      {
        en: 'throw … away',
        cn: '把……扔掉（复现第 4 篇）',
        ex: 'Cheap objects are thrown away before they are used up.'
      },
      {
        en: 'end up doing sth.',
        cn: '到头来（做了）……（复现第 6 篇）',
        ex: 'Buy the cheap coat and you end up buying it twice.'
      },
      {
        en: 'be worth doing sth.',
        cn: '值得做……（复现第 22 篇）',
        ex: 'A cheap object is rarely worth repairing.'
      },
      {
        en: 'sooner or later',
        cn: '迟早、总有一天（复现第 17 篇）',
        ex: 'Sooner or later the thing itself must be replaced.'
      },
      {
        en: 'pay for sth.',
        cn: '为……付钱、为……付出代价（复现第 27 篇）',
        ex: 'Ask who pays for the part of the bill you cannot see.'
      }
    ],
    writings: [
      {
        expr: 'To be fair, …',
        cn: '说句公道话……',
        meaning: '让步开路：先承认另一方有道理，再补上自己的转折，后面的判断更容易被接受；写议论文的让步段几乎必备。',
        context: '第 2 段开头（承认账单看不见）与第 5 段开头（承认便宜货常常是对的）。',
        alts: [
          {
            t: 'Admittedly, …',
            n: '更书面'
          },
          {
            t: 'In fairness, …',
            n: '更口语一点'
          },
          {
            t: 'It is true that …, but …',
            n: '展开成两句'
          }
        ],
        register: '中性，语气诚恳，不卑不亢。',
        example: 'To be fair, the cheap version is often the sensible one.'
      },
      {
        expr: 'It is easy to assume that …',
        cn: '人们很容易以为……',
        meaning: '先说出多数人的默认想法，下一句再指出它站不住，比开门见山反驳更顺，读者不会觉得被教训。',
        context: '第 3 段开头，引出「最便宜的产品用起来最便宜」这个误解。',
        alts: [
          {
            t: 'Many people assume that …',
            n: '直接点出人群'
          },
          {
            t: 'It is tempting to think that …',
            n: '强调「诱人但不成立」'
          },
          {
            t: 'The common belief is that …',
            n: '更书面'
          }
        ],
        register: '中性偏书面，议论与说明都能用。',
        example: 'It is easy to assume that the cheapest product is the cheapest one to own.'
      }
    ],
    sentences: [
      {
        text: 'The real question is not how much you pay at the counter today, but who pays the rest of the bill, and when.',
        points: [
          '<b>主干</b>：The real question is not A but B —— 表语用 <b>not … but …</b> 并列两个成分：A 是 how much 引导的名词性从句，B 是 who 引导的名词性从句，前后结构对称。',
          '<b>and when</b> 挂在 who 从句之后，把「谁付」和「何时付」两个追问一次问完；口语里也常说 Who pays, and when?，写作里用并列追问收束更有力度。',
          '<b>注意点</b>：not … but … 连接的两个成分必须同形，这里都是疑问词引导的从句，不能一边用从句、一边用名词短语。',
          '<b>为什么值得学</b>：议论文开头最好用的「换一个问题」句式：先承认读者真正关心的（今天付多少），再换上更根本的问题（谁在什么时候付），全文论点由此立住。',
          '<b>常见变体</b>：The question is not whether we can afford it, but who pays for it in the end.'
        ]
      },
      {
        text: 'The bill does not stop at money, because an item that fails early charges you again in time and patience.',
        points: [
          '<b>主干</b>：The bill does not stop at money —— stop at 表示「止步于」，not stop at … 意思是「不止于」。',
          '<b>原因从句</b>：because an item that fails early charges you again …，其中 that fails early 是<b>定语从句</b>修饰 an item；charges you 是<b>拟人</b>写法，把商品写成会开账单的人。',
          '<b>介词搭配</b>：charge somebody <b>in</b> time and patience —— 用「时间与耐心」当作货币来收费，是英语里常见的换算写法。',
          '<b>为什么值得学</b>：把「金钱之外的成本」说得具体又不夸张；写成本类、影响类作文可直接套用 X does not stop at …, because … charges you again in …。',
          '<b>常见变体</b>：The cost does not stop at the ticket price, because the journey charges you again in hours.'
        ]
      },
      {
        text: 'What changes the calculation is time: the longer an item stays useful, the less often the low price can win.',
        points: [
          '<b>主干</b>：What changes the calculation is time —— <b>what 引导的主语从句</b>（相当于 the thing that changes the calculation），表语是 time；冒号后解释「为什么是时间」。',
          '<b>the + 比较级 …, the + 比较级 …</b>：越……越……；两个分句都是「the + 比较级」放句首、主谓保持正常语序（the longer an item stays useful），不要写成 does an item stay。',
          '<b>词义</b>：win 在这里指「在比较中胜出」，stay useful 表示「保持有用」，比 last 更强调功能没有退化。',
          '<b>为什么值得学</b>：把「长期成本」的算法压成一句格言式结论，放在段尾或结尾前最有分量。',
          '<b>常见变体</b>：The more you use it, the more the quality pays.'
        ]
      },
      {
        text: 'Only when you see the whole bill does a low price tell you anything at all.',
        points: [
          '<b>主干</b>：A low price tells you anything at all only when you see the whole bill；<b>only + 状语从句</b>提到句首，主句<b>部分倒装</b>：助动词 does 提到主语 a low price 之前。',
          '<b>倒装范围</b>：只有主句倒装，when 引导的从句仍用正常语序；若 only 后直接跟主语（Only the price is low …），则不倒装，这是最常见的分界。',
          '<b>词尾强调</b>：at all 用在肯定句里加强「任何一点」的语气，常和 only 呼应。',
          '<b>为什么值得学</b>：倒装句自带结论感，放在结尾段开头，把全文判断一次立住，比平铺直叙有力。',
          '<b>常见变体</b>：Only after you use it ten times does the price mean anything.'
        ]
      }
    ],
    questions: [
      {
        en: 'What can we infer about a coat that costs half as much but wears out after one season?',
        cn: '从文中可以推出，一件价钱只有一半、却穿一个季度就坏的外套是怎样的？',
        ans: 'It is not really cheaper at all, because the buyer ends up buying the same thing twice.',
        ansCn: '它其实一点也不便宜，因为买家到头来要把同一件东西买两次。'
      },
      {
        en: 'What can we infer about people who buy cheap things week after week?',
        cn: '从文中可以推出，每周都买便宜货的人是怎样的处境？',
        ans: 'Their choice is a real compromise between paying now and paying later, not a moral failure, because money today is real and next year’s saving is only a promise.',
        ansCn: '他们的选择是在「现在付」和「以后付」之间的真实折中，而不是道德上的失败，因为今天的钱是实实在在的，明年的节省只是一句承诺。'
      },
      {
        en: 'What is the writer’s view of cheap goods?',
        cn: '作者对便宜商品持什么看法？',
        ans: 'Cheap goods are not the enemy; the real problem is the hidden bill, so buyers should look at the whole cost before they pay.',
        ansCn: '便宜货不是敌人；真正的问题是那张看不见的账单，所以买之前要把全部成本看清楚。'
      },
      {
        en: 'How does the essay develop its argument?',
        cn: '这篇文章是怎样展开论证的？',
        ans: 'It moves from the hidden bill behind a low price, to the buyer’s own cost per use and the costs in time, then concedes when the cheap version is sensible, and closes with two questions to ask before paying.',
        ansCn: '它先写低价背后那张看不见的账单，再写买家自己的每次使用成本和时间上的代价，接着让步说明便宜版本何时才是对的，最后以买前要问的两个问题收尾。'
      },
      {
        en: 'Why does the writer mention a durable kettle with a five-year warranty?',
        cn: '作者为什么提到一把带五年保修的耐用水壶？',
        ans: 'To show that an item with a longer lifespan can cost less per use than a cheap one that breaks down early.',
        ansCn: '为了说明寿命更长的东西，每次使用成本反而低于早早坏掉的便宜货。'
      }
    ],
    writingTask: {
      en: 'Write 120–150 words about a cheap purchase that turned out expensive, or a good item that paid for itself over time.',
      hints: [
        'It is easy to assume that ...',
        'What it really cost me was ...',
        'To be fair, ... , but ...',
        'If I calculate the cost per use, ...'
      ],
      hintCn: '用 6–8 句话写一次购物经历：先写你当时以为省了多少钱，再写后来实际付出的金钱、时间或麻烦，然后用「To be fair, …」让步一句，最后写你现在判断「值不值」的标准。',
      req: '至少使用 3 个本篇学过的词或搭配（cost per use / durable / lifespan / warranty / hassle / in the long run / To be fair, … / It is easy to assume that …）。'
    },
    speakingTask: {
      en: 'Answer in 1.5–2 minutes. Give your view, one reason and one example, then answer one counterargument.',
      points: [
        'Your view: when is a cheap product a good buy?',
        'One reason built on cost per use or lifespan',
        'One example from your own experience',
        'One counterargument and your reply to it'
      ],
      pointCn: '一点五分钟到两分钟内讲完「观点 → 理由 → 例子 → 反驳」四步；回应反方时先复述对方的理由（比如「有人会说便宜货让手头紧的人也用得上」），再给出你的回答，不要直接跳过对方。',
      skeleton: 'In my view, a cheap product is a good buy when ... The reason is that ... For example, I once ... . Some people would say that ... , but I would answer that ... .'
    },
    focus: [
      '<b>新授核心词 19 个</b>：<span class=\'en\'>supplier, wage, pollution, manufacture, calculate, durable, warranty, lifespan, discard, hassle, occasional, compromise, justify, outweigh, upfront, trade-off, maintenance, economical, overall</span> —— <b>durable / lifespan / warranty</b> 三个词绑在一起记，都是「一件东西能用多久」这条线；<b>manufacture</b> 是动词「制造」，正文里用被动 are manufactured；<b>justify</b> 后接名词或 doing（justify buying …）；<b>outweigh</b> 常用「好处 outweigh 坏处」的语序；<b>economical</b> 是「划算的」，别和「经济（大范围）」那个形容词混；<b>trade-off</b> 写作里常配 between A and B。',
      '<b>本篇复现的旧词（11 处灰点）</b>：第 4 篇的 <span class=\'en\'>cheap / price / brand</span>、第 1 篇的 <span class=\'en\'>afford / quality</span>、第 6 篇的 <span class=\'en\'>waste</span>、第 19 篇的 <span class=\'en\'>repair</span>、第 22 篇的 <span class=\'en\'>consumer</span>、第 26 篇的 <span class=\'en\'>disposable</span>、第 29 篇的 <span class=\'en\'>budget</span>、第 40 篇的 <span class=\'en\'>hidden</span>（第 40 篇教的是 hide，这里是过去分词）；短语复现另有第 27 篇的 <span class=\'en\'>add up / pay for sth.</span>、第 21 篇的 <span class=\'en\'>in the long run</span>、第 13 篇的 <span class=\'en\'>think twice</span>、第 4 篇的 <span class=\'en\'>throw … away</span>、第 6 篇的 <span class=\'en\'>end up doing sth.</span>、第 22 篇的 <span class=\'en\'>be worth doing sth.</span>、第 17 篇的 <span class=\'en\'>sooner or later</span>。',
      '<b>议论文骨架：观点 → 证据 → 让步 → 反驳</b>：开头用 <span class=\'en\'>The real question is not … but …</span> 换一个更根本的问题立论；第 2 段证据一（谁替你付账）由 <span class=\'en\'>To be fair, …</span> 让步引入；第 3 段证据二用 <span class=\'en\'>It is easy to assume that …</span> 先说出流行误解再拆掉；第 5 段整段让步（便宜货常常是对的、预算紧是现实、买便宜是折中不是错），语气要诚恳；最后两段把判断拉回读者的两次发问。让步段写三到四句就够，不要让步到把论点让没了。',
      '<b>两笔账的算法</b>：第一笔是「谁在付」——<span class=\'en\'>cut corners / wage / pollution / pass … on to …</span> 这条链说明低价由别人垫付；第二笔是「每次使用成本」——<span class=\'en\'>cost per use</span>（每次使用成本）＝ 价格除以你使用它的次数，配 <span class=\'en\'>durable / lifespan / warranty / wear out / break down</span> 记忆。判据一句话：<span class=\'en\'>in the long run</span> 哪个数字更小。四类长难句结构在本篇各出现一次：not … but … 并列从句、because + 定语从句 + 拟人、what 主语从句 + the + 比较级、only 倒装。',
      '<b>全文逻辑线与题型提醒</b>：低价像赚到 → 没人给你看的账单 → 供应商那头谁垫付 → 每次使用成本 → 时间与麻烦也是成本 → 让步：偶尔用、预算紧怎么办 → 逐件权衡的做法 → 结尾两问（用几次、谁付）。推断题抓「便宜外套」和「每周买便宜货」两处的言外之意；作者观点题看结尾那句「便宜不是敌人」；篇章结构题按「隐藏账单 → 自己的账 → 让步 → 两问」四步数；「作者为什么提到水壶」＝ 证明寿命长的东西每次使用成本更低。'
    ],
    standard: {
      time: '约 50 分钟',
      bar: '议论文全要素一篇打通：5 题阅读对 ≥ 4 · 19 个核心词遮住中文说出 ≥ 15 · 拆开 4 处长难句 · 完成 120–150 词写作与 1.5–2 分钟含反驳的口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 19 个核心词中的 15 个（durable、lifespan、warranty、trade-off …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '14 个高频搭配掌握 10 个，能各造一句（cost per use、cut corners、in the long run、money well spent …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 4 处长难句各自的结构（not … but … 并列从句、原因 + 定语从句、what 主语从句 + the + 比较级、only 倒装），并仿写其中 2 处',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；第 5 题要说出水壶的例子证明的是哪一条观点',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 120–150 词，至少用上 To be fair, … 或 It is easy to assume that …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1.5–2 分钟讲完「观点 → 理由 → 例子 → 反驳」，反驳要先复述对方的理由再回应',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点出正文里 11 处灰点旧词，说出其中 8 个的意思与出处篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 47,
    slug: '047-when-machines-write',
    title: 'When Machines Write',
    titleCn: '当机器开始写作',
    stage: '阶段五 · 综合提高',
    stageRange: '第 41–50 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 615 词'
      },
      {
        k: '新词密度',
        v: '约 5.5%'
      },
      {
        k: '长难句',
        v: '5 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/047.jpg',
    coverCredit: 'Photo: Ludmi Ledesma / Pexels',
    body: [
      'A teacher read an essay and could not tell who wrote it: a student or a machine. <span class="w-sentence">What unsettled her was not the quality of the piece but a question she had taken for granted: who is speaking here?</span> Tools that <span class="w-cet4" data-cn="生成、产生">generate</span> <span class="w-cet4" data-cn="流利的、通顺的">fluent</span> text sit in classrooms now, so the question is no longer “can a machine write?” but “what is writing worth?”',
      'Give a good tool a <span class="w-cet4" data-cn="提示词、指令">prompt</span> and it returns a <span class="w-cet4" data-cn="草稿；起草">draft</span> before your coffee cools: an opening, a structure, a tidy <span class="w-rev">summary</span>. For the <span class="w-cet4" data-cn="枯燥乏味的">tedious</span> part of the job — the notice, the minutes, the same message — this is a real gain. <span class="w-phrase" data-cn="在某种程度上">To some extent</span> the machine takes the boring thirty percent; nobody writes them <span class="w-phrase" data-cn="为了……起见">for the sake of</span> the craft.',
      '<span class="w-sentence">Fluency is not understanding: a tool that has read millions of pages can write a smooth next sentence without knowing whether it is true.</span> Asked for a study, it may <span class="w-cet4" data-cn="编造">fabricate</span> a name, a date and a number, while it <span class="w-cet4" data-cn="模仿">mimic</span>s the shape of <span class="w-rev">evidence</span> without any. Readers <span class="w-rev">assume</span> smooth means <span class="w-rev">accurate</span>; a wrong answer in a <span class="w-synonym" data-cn="＝ seem reasonable 的替换词">plausible</span> and <span class="w-cet4" data-cn="有说服力的">persuasive</span> style is worse than a clumsy one. Every claim must be <span class="w-cet4" data-cn="核实、查证">verified</span>: at first glance few can <span class="w-phrase" data-cn="分辨、区分">tell the two apart</span>.',
      'Good writing has something at stake; a machine has no childhood, no loss, no deadline. Its pages can be <span class="w-synonym" data-cn="＝ not deep 的替换词">shallow</span>: it arranges ideas without owning any. <span class="w-writing" data-cn="诚然、不错……">Granted,</span> a text with <span class="w-cet4" data-cn="实质、有内容">substance</span> — a real street, a real loss — comes from a life, not a database; a tool can only <span class="w-rev">distort</span> it into something <span class="w-cet4" data-cn="空洞的">hollow</span>. A <span class="w-rev">genuine</span> voice is hard to fake.',
      '<span class="w-sentence">A learner who always asks for the final sentence finishes the task and misses the training, because the struggle to phrase an idea is where memory is built.</span> For language learners, though, the tool is <span class="w-cet4" data-cn="有能力的">capable</span> of being a patient partner: it answers at midnight and gives <span class="w-rev">feedback</span> in seconds. The <span class="w-cet4" data-cn="局限">limitation</span> is simple — it offers three <span class="w-synonym" data-cn="＝ easy to believe 的替换词">convincing</span> ways to say it but cannot figure out what you mean; there is always a version to <span class="w-phrase" data-cn="退而依靠、退一步用">fall back on</span>.',
      'At work the pattern repeats. The <span class="w-rev">effort</span> once spent on routine reports now goes to checking: a fast wrong page is worse than a slow right one. The people who gain most treat it as the <span class="w-cet4" data-cn="捷径">shortcut</span> it is — they keep the <span class="w-cet4" data-cn="批判性的、审慎的">critical</span> part for themselves and never send a report that is supposed to be out at five without reading it first. They are kept for judgment rather than typing; speed <span class="w-phrase" data-cn="以……为代价">at the expense of</span> care is a poor trade.',
      '<span class="w-writing" data-cn="诚然、不错……">Granted,</span> a lazy student can hand in machine text and end up learning nothing. The answer is to ask what it cannot fake: the choice of example, the <span class="w-cet4" data-cn="细微差别">nuance</span> of a local <span class="w-rev">context</span>, why you care. <span class="w-sentence">If the same tool writes for everyone, style becomes cheap and attention moves to the questions behind the words.</span> The <span class="w-cet4" data-cn="原创的">original</span> part of the work moves back to ideas; <span class="w-cet4" data-cn="精致的、打磨完美的">polished</span> sentences become cheap. Honest writers give <span class="w-cet4" data-cn="署名、认可">credit</span> for help and <span class="w-rev">revise</span> until the voice is theirs.',
      '<span class="w-writing" data-cn="问题在于……">The trouble is that</span> machine text makes bad writing look finished and gives a <span class="w-rev">misleading</span> calm: no one checks. Some say the tools will make writers lazy and kill style. That fear makes sense, but tools have always changed the craft. In the end it <span class="w-phrase" data-cn="归根结底是、归结为">boils down to</span> trust: who checked these words, and who will point out the wrong number? <span class="w-sentence">Only when the reader knows where the words come from does the text deserve trust.</span>',
      'Writing tools are neither magic nor a monster: the fastest apprentices the <span class="w-cet4" data-cn="手艺；精心创作">craft</span> has had. The point is not whether machines can write, but whether you have something worth saying.'
    ],
    translation: [
      '一位老师读了一篇文章，却分不清是谁写的：学生，还是机器。让她不安的不是文章的质量，而是一个她一直想当然的问题：这些话是谁说的？能生成通顺文字的工具如今已坐进教室，于是问题不再是「机器会写作吗」，而是「写作还值什么」。',
      '给一个好工具一句提示，你的咖啡还没凉，它就交出一份草稿：一个开头、一套结构、一篇利落的摘要。对工作中枯燥的那一部分——通知、会议纪要、同一封消息——这确实是实实在在的好处。在某种程度上，机器接管了最无聊的那三成；没有人是为了手艺才写这些消息的。',
      '流利不等于理解：一个读过几百万页内容的工具，能写出一个通顺的下一句，却不知道这一句是真是假。让它找一项研究，它可能编出一个人名、一个日期和一个数字，同时模仿着证据的样子，其实什么证据也没有。读者会以为通顺就等于准确；一个裹着看似可信、甚至很有说服力外衣的错误答案，比一个笨拙的错误更危险。所以每个说法都必须核实：乍一看，很少有人能把两者分辨开。',
      '好的写作必须有真正在乎的东西；机器没有童年、没有失去，也没有截稿时间。它的文字可能是浅的：它只是把观点摆好，却并不拥有其中任何一个。诚然，一篇有实质内容的文章——一条真实的街、一次真实的失去——来自生活，而不是来自数据库；工具只能把它摆弄一番，或者把它扭曲成空洞的东西。真实的语气很难伪造。',
      '一个总是让别人给出最终句子的学习者，会完成任务，却错过训练，因为把想法变成措辞的挣扎，正是记忆形成的地方。不过对语言学习者来说，工具也能成为一个耐心的伙伴：它半夜也回答，反馈几秒钟就到。它的局限也很简单——它能给出三种同样有说服力的说法，却弄不明白你的意思；当你词穷时，总还有一个版本可以退回去用。',
      '工作里也出现同样的情形。从前花在例行报告上的精力，现在转向检查：一页又快又错的纸，比一页又慢又对的更糟。获益最多的人，把工具当成它真正擅长的那条捷径——需要判断力的部分留给自己，五点就该发出去的报告，不读一遍绝不发出。他们被留下，靠的是判断力而不是打字速度；用细心去换速度，对谁都不是一笔好买卖。',
      '诚然，懒学生可以把机器写的文字直接交上去，最后一无所获。答案是去要它伪造不了的部分：例子怎么选、本地情境里细微的差别、你为什么在乎。如果同一个工具为所有人写作，精致的文风就变得廉价，注意力会转到文字背后的问题上。实际上，工作中原创的部分回到了观点，而漂亮的句子变得廉价。诚实的写作者会说明帮助来自哪里，并不断修改，直到语气是自己的。',
      '问题在于，机器生成的文字让糟糕的写作看起来像已经完成，并带来一种虚假的平静：没有人去检查。有人说这些工具会让人变懒，彻底杀死文风。这种担心听起来有道理，但工具一直在改变手艺。说到底，问题归结为信任：谁检查过这些文字？又有谁愿意指出那个错的数字？只有当读者知道这些话从哪里来，这篇文章才配得到信任。',
      '写作工具既不是魔法，也不是怪兽；它们是这门手艺有过的最快的学徒。重点不在于机器会不会写作，而在于你是否有值得说的东西。'
    ],
    vocabulary: [
      {
        w: 'generate',
        ph: '/ˈdʒenəreɪt/',
        pos: 'v.',
        cn: '生成、产生',
        col: 'generate a draft — 生成一份草稿；generate ideas — 产生想法',
        ex: 'A good tool can generate a first draft in seconds.'
      },
      {
        w: 'draft',
        ph: '/drɑːft/',
        pos: 'n./v.',
        cn: '草稿；起草',
        col: 'a first draft — 初稿；draft a letter — 起草一封信',
        ex: 'She kept the first draft and rewrote it twice.'
      },
      {
        w: 'prompt',
        ph: '/prɒmpt/',
        pos: 'n./v.',
        cn: '提示词、指令；促使',
        col: 'a clear prompt — 一句清楚的提示；prompt sb. to do sth. — 促使某人做某事',
        ex: 'A vague prompt usually gives you a vague answer.'
      },
      {
        w: 'fluent',
        ph: '/ˈfluːənt/',
        pos: 'adj.',
        cn: '流利的、通顺的',
        col: 'fluent English — 流利的英语；a fluent style — 通顺的文风',
        ex: 'His English is fluent, but his ideas are not always clear.'
      },
      {
        w: 'tedious',
        ph: '/ˈtiːdiəs/',
        pos: 'adj.',
        cn: '枯燥乏味的',
        col: 'tedious work — 枯燥的工作；a tedious task — 乏味的任务',
        ex: 'Filling in the same form is tedious, which is why we let machines help.'
      },
      {
        w: 'fabricate',
        ph: '/ˈfæbrɪkeɪt/',
        pos: 'vt.',
        cn: '编造、捏造',
        col: 'fabricate a story — 编造故事；fabricate a number — 捏造数字',
        ex: 'A tool may fabricate a name without meaning to lie.'
      },
      {
        w: 'mimic',
        ph: '/ˈmɪmɪk/',
        pos: 'vt.',
        cn: '模仿',
        col: 'mimic a style — 模仿一种文风；mimic human speech — 模仿人说话',
        ex: 'The tool mimics the shape of a real report.'
      },
      {
        w: 'verify',
        ph: '/ˈverɪfaɪ/',
        pos: 'vt.',
        cn: '核实、查证',
        col: 'verify the facts — 核实事实；verify a claim — 查证一个说法',
        ex: 'Verify every number before you send the report.'
      },
      {
        w: 'persuasive',
        ph: '/pəˈsweɪsɪv/',
        pos: 'adj.',
        cn: '有说服力的',
        col: 'a persuasive argument — 有说服力的论证；sound persuasive — 听起来有说服力',
        ex: 'A wrong answer can sound strangely persuasive.'
      },
      {
        w: 'substance',
        ph: '/ˈsʌbstəns/',
        pos: 'n.',
        cn: '实质、有内容',
        col: 'a speech of substance — 有内容的讲话；have substance — 言之有物',
        ex: 'An essay needs substance, not just good sentences.'
      },
      {
        w: 'hollow',
        ph: '/ˈhɒləʊ/',
        pos: 'adj.',
        cn: '空洞的',
        col: 'a hollow promise — 空洞的承诺；sound hollow — 听起来空洞',
        ex: 'The ending felt hollow because nothing was at stake.'
      },
      {
        w: 'capable',
        ph: '/ˈkeɪpəbl/',
        pos: 'adj.',
        cn: '有能力的',
        col: 'capable of doing sth. — 有能力做某事；a capable writer — 有能力的写作者',
        ex: 'Used well, the tool is capable of being a patient partner.'
      },
      {
        w: 'limitation',
        ph: '/ˌlɪmɪˈteɪʃn/',
        pos: 'n.',
        cn: '局限、限制',
        col: 'know one’s limitations — 了解自身局限；a clear limitation — 明显的局限',
        ex: 'The main limitation is that it cannot know what you mean.'
      },
      {
        w: 'shortcut',
        ph: '/ˈʃɔːtkʌt/',
        pos: 'n.',
        cn: '捷径',
        col: 'take a shortcut — 走捷径；a shortcut to success — 成功的捷径',
        ex: 'The tool is a useful shortcut for routine messages.'
      },
      {
        w: 'critical',
        ph: '/ˈkrɪtɪkl/',
        pos: 'adj.',
        cn: '批判性的、审慎的',
        col: 'critical thinking — 批判性思维；a critical reader — 审慎的读者',
        ex: 'Be a critical reader of anything a machine writes.'
      },
      {
        w: 'nuance',
        ph: '/ˈnjuːɑːns/',
        pos: 'n.',
        cn: '细微差别',
        col: 'catch the nuance — 抓住细微差别；a subtle nuance — 一处微妙的差别',
        ex: 'A machine rarely catches the nuance of a local situation.'
      },
      {
        w: 'original',
        ph: '/əˈrɪdʒənl/',
        pos: 'adj.',
        cn: '原创的、独创的',
        col: 'original work — 原创作品；an original idea — 独到的见解',
        ex: 'The original part of the work is the question you ask.'
      },
      {
        w: 'polished',
        ph: '/ˈpɒlɪʃt/',
        pos: 'adj.',
        cn: '精致的、打磨完美的',
        col: 'a polished style — 精致的文风；a polished performance — 精致的表演',
        ex: 'The text is polished, but the idea is thin.'
      },
      {
        w: 'credit',
        ph: '/ˈkredɪt/',
        pos: 'n.',
        cn: '署名、认可',
        col: 'give credit to — 说明（帮助）来自谁；take the credit — 受到肯定',
        ex: 'Always give credit when a tool helped with the draft.'
      },
      {
        w: 'craft',
        ph: '/krɑːft/',
        pos: 'n./v.',
        cn: '手艺；精心创作',
        col: 'the craft of writing — 写作的手艺；craft a sentence — 精心写好一个句子',
        ex: 'Writing is a craft before it is a career.'
      }
    ],
    phrases: [
      {
        en: 'to some extent',
        cn: '在某种程度上（新）',
        ex: 'To some extent, the tool has taken over the boring part of writing.'
      },
      {
        en: 'for the sake of',
        cn: '为了……起见（新）',
        ex: 'Nobody writes a hundred routine messages for the sake of the craft.'
      },
      {
        en: 'tell … apart',
        cn: '分辨、区分（新）',
        ex: 'Few readers can tell the two reports apart.'
      },
      {
        en: 'fall back on',
        cn: '退而依靠、退一步用（新）',
        ex: 'Keep one clear sentence to fall back on when your own words run out.'
      },
      {
        en: 'at the expense of',
        cn: '以……为代价（新）',
        ex: 'Speed at the expense of care is a poor trade.'
      },
      {
        en: 'boil down to',
        cn: '归根结底是、归结为（新）',
        ex: 'In the end, the question boils down to trust.'
      },
      {
        en: 'rather than',
        cn: '而不是（复现第 32 篇）',
        ex: 'They are kept for judgment rather than for typing.'
      },
      {
        en: 'make sense',
        cn: '说得通、有道理（复现第 38 篇）',
        ex: 'That fear makes sense at first, but it does not hold up.'
      },
      {
        en: 'point out',
        cn: '指出（复现第 33 篇）',
        ex: 'Who is ready to point out the one number that is wrong?'
      },
      {
        en: 'figure out',
        cn: '弄明白、想清楚（复现第 31 篇）',
        ex: 'The tool cannot figure out what you mean.'
      },
      {
        en: 'at first glance',
        cn: '乍一看（复现第 31 篇）',
        ex: 'At first glance those numbers look real.'
      },
      {
        en: 'no longer',
        cn: '不再（复现第 1 篇）',
        ex: 'The question is no longer whether a machine can write.'
      },
      {
        en: 'be supposed to do sth.',
        cn: '应该做某事（复现第 39 篇）',
        ex: 'The report is supposed to be ready at five.'
      },
      {
        en: 'end up doing sth.',
        cn: '最终落得做某事（复现第 22 篇）',
        ex: 'A lazy student can hand in machine text and end up learning nothing.'
      }
    ],
    writings: [
      {
        expr: 'Granted, ...',
        cn: '诚然、不错……',
        meaning: '先让一步承认对方或读者的顾虑有道理，再给出自己的主张；让步在前，反驳才站得住。',
        context: '两处让步段的开头：一处承认「有实质的文章来自生活」，一处承认「懒学生会钻空子」，后面都接作者的正面主张。',
        alts: [
          {
            t: 'Admittedly, ...',
            n: '更书面'
          },
          {
            t: 'It is true that ...',
            n: '语气更缓'
          },
          {
            t: 'To be fair, ...',
            n: '更口语'
          }
        ],
        register: '中性偏书面，议论文让步段必备。',
        example: 'Granted, a lazy student can hand in machine text and end up learning nothing.'
      },
      {
        expr: 'The trouble is that ...',
        cn: '问题在于……',
        meaning: '用一句话点出某件事的弊端所在，比 the problem is that 更口语、更有现场感，适合引出全文最担心的一点。',
        context: '倒数第二段开头，前面已经讲完工具的好处，这里转折指出读者会因此放松警惕。',
        alts: [
          {
            t: 'The problem is that ...',
            n: '最常用'
          },
          {
            t: 'What worries me is that ...',
            n: '强调个人立场'
          },
          {
            t: 'One risk is that ...',
            n: '更冷静、书面'
          }
        ],
        register: '中性，议论与日常讨论都能用。',
        example: 'The trouble is that machine text makes bad writing look finished.'
      }
    ],
    sentences: [
      {
        text: 'What unsettled her was not the quality of the piece but a question she had taken for granted: who is speaking here?',
        points: [
          '<b>主干</b>：What unsettled her was not the quality of the piece but a question —— 主语是 <b>what</b> 引导的名词性从句，表语用 <b>not A but B</b> 并列：让她不安的不是……而是一个问题。',
          '<b>定语从句</b>：a question 后面的 she had taken for granted 省略了关系代词 that；<b>take … for granted</b> 表示「想当然、视为理所当然」，take 的宾语就是被省略的关系代词。',
          '<b>冒号后</b>的 who is speaking here? 是对 a question 的<b>同位说明</b>，直接用疑问句形式，像作者替读者自问。',
          '<b>为什么值得学</b>：先抛一个反常场景（老师看不出谁写的），再用一句话立起全文要问的问题，是议论文开头最稳的写法。',
          '<b>常见变体</b>：What surprises us is not the price but the question we never asked.'
        ]
      },
      {
        text: 'Fluency is not understanding: a tool that has read millions of pages can write a smooth next sentence without knowing whether it is true.',
        points: [
          '<b>主干</b>：Fluency is not understanding —— 主语和表语都是<b>抽象名词</b>，一句话完成「流利 ≠ 理解」的判断，读起来像格言。',
          '<b>冒号后</b>解释理由：主语 a tool 带 <b>that 定语从句</b> that has read millions of pages，谓语是 can write，<b>without + doing</b> 表示「在不做某事的情况下」。',
          '<b>宾语从句</b>：whether it is true 作 knowing 的宾语；whether 与 if 在动词后常可换用，但 whether 还能直接接 or not，语气更正式。',
          '<b>为什么值得学</b>：抽象名词下定义 + 冒号展开，是观点句的高级写法，比用 I think that … 更有分量。',
          '<b>注意点</b>：fluency 在这里刻意与 understanding 对立——说得顺不等于想得清，这正是全文的核心区分。'
        ]
      },
      {
        text: 'A learner who always asks for the final sentence finishes the task and misses the training, because the struggle to phrase an idea is where memory is built.',
        points: [
          '<b>主干</b>：A learner … finishes the task and misses the training —— 主语 a learner 后接 <b>who 定语从句</b>，谓语是 finishes … and misses … 两个并列动作。',
          '<b>原因从句</b>：because 引导，其中主语是 the struggle to phrase an idea，表语是 <b>where 引导的表语从句</b> where memory is built，动词用被动。',
          '<b>phrase 在此作动词</b>，表示「找到措辞、用语言表达」，比 say 更强调「把想法说成话」的那番挣扎。',
          '<b>为什么值得学</b>：把「完成任务」和「得到训练」拆成两个动词形成对照，是讨论学习类话题的常用对立：完成 ≠ 学会。',
          '<b>写作迁移</b>：A student who always copies the answer finishes the test and misses the point.'
        ]
      },
      {
        text: 'Only when the reader knows where the words come from does the text deserve trust.',
        points: [
          '<b>主干</b>：正常语序是 The text deserves trust only when the reader knows where the words come from；<b>only + 状语从句</b>提到句首，主句要<b>部分倒装</b>：助动词 does 提到主语 the text 之前。',
          '<b>倒装范围</b>：只有主句倒装，when 引导的从句内部不倒装；另外 <b>only + 主语</b> 不倒装（Only the writer knows …），这是最容易错的分界。',
          '<b>宾语从句</b>：where the words come from 作 knows 的宾语，介词 from 留在句尾，疑问词 where 同时作 from 的宾语。',
          '<b>为什么值得学</b>：倒装自带强调语气，放在结论前把「信任」这个落点顶到最前面，一句话收住整段论证。',
          '<b>常见变体</b>：Only after the check does the number deserve to be printed.'
        ]
      },
      {
        text: 'If the same tool writes for everyone, style becomes cheap and attention moves to the questions behind the words.',
        points: [
          '<b>主干</b>：条件句 If the same tool writes for everyone + 主句 style becomes cheap and attention moves to …，两个结果用 and 并列，讲清「供给变了，价值就转移」的因果。',
          '<b>the same … for everyone</b> 强调「人人都一样」，是讨论同质化的常用起点；写成 everyone uses the same tool 就平淡得多。',
          '<b>move to</b> 表示「转移到」，attention moves to … 是科技类议论文的高频搭配，也可以换成 focus shifts to …。',
          '<b>为什么值得学</b>：条件句 + 并列结果，一句话讲完「当风格人人都有，价值就回到观点」的推理链，适合放在让步段之后做转折。',
          '<b>注意点</b>：cheap 在这里指「廉价、不值钱」，不是「便宜划算」，含贬义。'
        ]
      }
    ],
    questions: [
      {
        en: 'What will probably happen to a learner who always asks for the final sentence?',
        cn: '一个总是让别人给出最终句子的学习者，最后会怎样？',
        ans: 'They will finish the task but miss the training, because the struggle to phrase an idea is where memory is built.',
        ansCn: '他们会完成任务，却错过训练，因为把想法变成措辞的挣扎正是记忆形成的地方。'
      },
      {
        en: 'Why is a wrong answer in a plausible and persuasive style worse than a clumsy one?',
        cn: '为什么看似可信、有说服力的错误答案，比笨拙的错误更糟？',
        ans: 'Because readers assume that smooth writing is accurate, so they stop checking it.',
        ansCn: '因为读者会以为通顺就等于准确，于是不再去核查它。'
      },
      {
        en: 'What is the writer’s overall view of writing tools?',
        cn: '作者对写作工具的总体看法是什么？',
        ans: 'They are genuinely useful for drafts and routine work, but they cannot understand, verify or own an idea, so people must keep the checking, the judgment and the responsibility.',
        ansCn: '它们对初稿和例行写作确实有用，但它们无法理解、核实或拥有一个观点，所以检查、判断和责任必须留在人这一边。'
      },
      {
        en: 'How does the writer organize the text?',
        cn: '作者是怎样组织全文的？',
        ans: 'It opens with a scene and a question, then shows what the tools do well, sets out two limits, gives a concession about learners, turns to work and originality, and closes with a balanced judgement.',
        ansCn: '开头用一个场景引出问题，接着写工具的长处，再写清两条边界，然后为学习者作让步，转到工作与原创，最后给出平衡的判断。'
      },
      {
        en: 'Why does the writer mention the teacher who could not tell whether the essay was written by a student or a machine?',
        cn: '作者为什么提到那位分不清文章是学生写的还是机器写的老师？',
        ans: 'To show that machine writing is already good enough to blur the line, so the real question is no longer whether a machine can write but what writing is worth.',
        ansCn: '为了说明机器写的文章已经好到让人分不清，真正的问题不再是机器会不会写，而是写作还值什么。'
      }
    ],
    writingTask: {
      en: 'Write 120–150 words about how a student should use a writing tool without losing his or her own voice.',
      hints: [
        'A writing tool can … , but it cannot …',
        'Granted, … , and the trouble is that …',
        'I would let the tool … and keep … for myself',
        'The point is not … but …'
      ],
      hintCn: '三段式：第一段写工具最擅长的两件事，第二段写一条边界（用 Granted, … 起头让步，再用 The trouble is that … 转折），第三段写你自己会怎么用、守住什么。结尾用「重点不在于……而在于……」收束。',
      req: '至少使用 4 个本篇学过的词或搭配（generate / draft / verify / hollow / polished / to some extent / fall back on / boil down to / Granted, … / The trouble is that …）。'
    },
    speakingTask: {
      en: 'Answer in 1.5–2 minutes. Give your view, one reason and one example, then answer one counterargument.',
      points: [
        'Your view: are writing tools a help or a shortcut for students?',
        'One reason and one example with a number, a time or a real situation',
        'One counterargument: what would someone against you say?',
        'Your answer to that counterargument, then a one-sentence close'
      ],
      pointCn: '一点五到两分钟里讲完「观点 → 理由 → 例子 → 反驳 → 回应 → 收尾」；反驳要具体说出对方会怎么讲（例如「工具让学习者变懒」），回应时可以用本篇的让步表达 Granted, … 开头。',
      skeleton: 'In my view, writing tools are … The main reason is that … For example, last term … . Some people would argue that … . Granted, … , but … . To sum up, …'
    },
    focus: [
      '<b>新授核心词 20 个</b>：<span class=\'en\'>generate, draft, prompt, fluent, tedious, fabricate, mimic, verify, persuasive, substance, hollow, capable, limitation, shortcut, critical, nuance, original, polished, credit, craft</span> —— 这批词按「能力 → 边界 → 价值」串起来记：<b>generate / draft / prompt</b> 是工具的输入与产出（generate a draft 不说 make a draft）；<b>persuasive / polished</b> 描述「看起来好」，<b>hollow</b> 与同义辨析词 <span class=\'en\'>shallow</span> 描述「其实空」，正好成对；<b>verify</b> 后接事实或说法，<b>fabricate</b> 常与 number、name 搭配，语气比 make up 重；<b>nuance</b> 与 <b>substance</b> 都不可数，说「言之有物」用 have substance；<b>credit</b> 记 give credit for / to 的固定搭配；<b>craft</b> 名动同形（the craft of writing / craft a sentence）。',
      '<b>本篇复现的旧词（11 处灰点）</b>：第 30 篇的 <span class=\'en\'>summary</span>、第 31 篇的 <span class=\'en\'>evidence / accurate / distort / context</span>、第 34 篇的 <span class=\'en\'>misleading</span>、第 13 篇的 <span class=\'en\'>assume</span>、第 22 篇的 <span class=\'en\'>genuine</span>、第 33 篇的 <span class=\'en\'>feedback</span>、第 10 篇的 <span class=\'en\'>effort</span>、第 40 篇的 <span class=\'en\'>revise</span>；短语复现另有第 32 篇的 <span class=\'en\'>rather than</span>、第 38 篇的 <span class=\'en\'>make sense</span>、第 33 篇的 <span class=\'en\'>point out</span>、第 31 篇的 <span class=\'en\'>figure out / at first glance</span>、第 22 篇的 <span class=\'en\'>end up doing sth.</span>、第 39 篇的 <span class=\'en\'>be supposed to do sth.</span>、第 1 篇的 <span class=\'en\'>no longer</span>。',
      '<b>议论文骨架：观点 + 证据 + 让步</b>：本篇五个长难句正好是这一骨架的五根梁 —— 立题的 what 主语从句（<span class=\'en\'>What unsettled her was not … but …</span>）、下定义后冒号展开（<span class=\'en\'>Fluency is not understanding: …</span>）、原因从句里套 where 表语从句（<span class=\'en\'>… because the struggle … is where memory is built</span>）、only 置前的部分倒装（<span class=\'en\'>Only when … does the text deserve trust</span>）、条件句 + 并列结果（<span class=\'en\'>If the same tool writes for everyone, …</span>）。写议论文时照这五种句型各找一个位置，段落就不平了。',
      '<b>让步与反驳的两件套</b>：<span class=\'en\'>Granted, …</span> 先让一步（承认对方有理），<span class=\'en\'>The trouble is that …</span> 再点出弊端；配上短语 <span class=\'en\'>to some extent</span>（部分承认）、<span class=\'en\'>at the expense of</span>（指出代价）、<span class=\'en\'>boil down to</span>（收束到根本）、<span class=\'en\'>fall back on</span>（留一条退路）、<span class=\'en\'>tell … apart</span>（分清两者），一篇带让步的议论文的连接件就齐了。注意让步只让一步，后面必须立刻给自己的主张，不要让步完就收尾。',
      '<b>全文逻辑线与题型提醒</b>：分不清谁写的场景 → 提问（写作还值什么）→ 工具的长处（初稿与例行写作）→ 边界一（流利不等于理解，会编造）→ 边界二（没有经历与立场）→ 让步（对学习者确有帮助，但挣扎不能外包）→ 工作（判断力比速度值钱）→ 原创（风格贬值，价值回到观点与署名）→ 反驳与回应 → 收束（重点不在于机器会不会写）。推断题抓「为什么会这样」的因果链；作者观点题把「有用但不能替代人」两面都答上；结构题按上面的逻辑线画四到五步；「作者为什么提到 X」的题一律答「为了证明哪一条观点」，例如那位老师是为了证明「机器已写得让人分不清」。'
    ],
    standard: {
      time: '约 50 分钟',
      bar: '阶段五议论文进阶：阅读题 5 题对 ≥ 4 · 20 个核心词遮住中文说出 ≥ 15 · 拆开 5 处长难句 · 完成 120–150 词写作与 1.5–2 分钟含反驳的口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 20 个核心词中的 15 个（generate、fabricate、verify、hollow、limitation、nuance …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '14 个高频搭配掌握 10 个，能各造一句（to some extent、for the sake of、tell … apart、boil down to …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 5 处长难句各自的结构（what 主语从句 / 冒号下定义 / where 表语从句 / only 倒装 / 条件句 + 并列结果），并仿写其中 2 处',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；第 4 题的结构图要画出「场景 → 长处 → 两条边界 → 让步 → 原创 → 结论」',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 10 节写 120–150 词，至少用上 Granted, … 与 The trouble is that … 各一次',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1.5–2 分钟讲完「观点 → 理由 → 例子 → 反驳 → 回应」，反驳要说出对方的具体说法',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 11 处灰点旧词，说出其中 8 个的意思与出处篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 48,
    slug: '048-the-four-day-week-experiment',
    title: 'The Four-Day Week Experiment',
    titleCn: '四天工作制实验',
    stage: '阶段五 · 综合提高',
    stageRange: '第 41–50 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 625 词'
      },
      {
        k: '新词密度',
        v: '约 5.6%'
      },
      {
        k: '长难句',
        v: '5 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/048.jpg',
    coverCredit: 'Photo: J.S. McDuff / Pexels',
    body: [
      'Few workplace ideas travel as fast as the four-day week. In <span class="w-cet4" data-cn="试点、试验">trials</span> in several countries, some firms cut one working day on the same pay, and the results made headlines: <span class="w-cet4" data-cn="产出、产量">output</span> <span class="w-phrase" data-cn="经受住检验、撑得住">held up</span>, and in a few teams it even rose. <span class="w-sentence">The four-day week is not a gift of free time but a test of how the work is organised.</span> The idea is attractive, but attraction is not <span class="w-rev">evidence</span>.',
      'Trials that worked share one habit: the week was redesigned first. Teams <span class="w-phrase" data-cn="削减、减少">cut back on</span> meetings and agreed on what needed doing. <span class="w-sentence">What the numbers show is that when meetings shrink and interruptions stop, the same work fits into fewer hours, which is why output per hour rises.</span> One design team <span class="w-cet4" data-cn="压缩、精简">compressed</span> five days into four, and <span class="w-cet4" data-cn="生产率">productivity</span> per hour rose with no loss in quality. The old <span class="w-rev">routine</span> of weekly meetings gave way to a short written update; <span class="w-rev">performance</span> reviews stayed strong.',
      'Two conditions decide the result. First, output must be <span class="w-rev">measured</span> in results, not in hours: one team counts finished pages, another counts solved cases. Second, managers must judge by what people finish, not by the <span class="w-cet4" data-cn="到岗、在场">presence</span> of a body at a desk. <span class="w-sentence">Where pay and promotion are still tied to visible hours, a shorter week simply squeezes five days into four, and everyone goes home more tired.</span> The change suits a small team with a <span class="w-cet4" data-cn="灵活的">flexible</span> <span class="w-rev">schedule</span> better than a large one.',
      'Knowledge work suits the change: one quiet morning is worth more than a noisy afternoon. <span class="w-sentence">Four days of careful work can be worth the equivalent of five scattered ones, provided that the fifth day is used to rest rather than to catch up.</span> But not every job can join in: a ward, a shop, a bus route need <span class="w-cet4" data-cn="值守、全天有人">coverage</span> daily. For a small firm the missing day means paying more people; few have that <span class="w-cet4" data-cn="人手、承受能力">capacity</span>.',
      'Critics have real <span class="w-cet4" data-cn="反对理由、异议">objections</span>: the <span class="w-cet4" data-cn="最初的">initial</span> gains may <span class="w-cet4" data-cn="逐渐消退">fade</span>, and some people simply <span class="w-synonym" data-cn="＝ pack tightly 的替换词">cram</span> five days of work into four longer ones under the same <span class="w-rev">pressure</span>. <span class="w-writing" data-cn="话虽如此……">That said,</span> the problem is the design, not the idea. <span class="w-phrase" data-cn="在一定程度上">Up to a point</span>, the free day is a reward: <span class="w-phrase" data-cn="作为交换">in exchange for</span> it, teams accept tighter days, and the <span class="w-rev">balance</span> between effort and rest must be kept. The <span class="w-cet4" data-cn="不利之处、弊端">downside</span> is clear: busy weeks still arrive.',
      'Why is the change still rare? A <span class="w-cet4" data-cn="客户">client</span> who wants an answer on Friday will not accept a closed office, and the real <span class="w-cet4" data-cn="障碍">obstacle</span> is coordination: firms must <span class="w-cet4" data-cn="协商、商谈">negotiate</span> with customers and <span class="w-cet4" data-cn="协调、配合">coordinate</span> with suppliers. <span class="w-sentence">Even when the change is perfectly possible on paper, one lost client is often enough to end the experiment.</span> The <span class="w-rev">trend</span> is real but slow: what looks <span class="w-rev">feasible</span> can fail at the door. Smaller firms fear that service will <span class="w-synonym" data-cn="＝ get worse 的替换词">slip</span> and that old habits <span class="w-phrase" data-cn="妨碍、挡了……的路">get in the way of</span> the change.',
      'A wiser path is to run a trial, record the results, and change the design, not the slogan. To <span class="w-cet4" data-cn="维持、保持住">sustain</span> the change, the week must be <span class="w-synonym" data-cn="＝ redesigned 的替换词">reworked</span> first: fewer meetings, clearer goals, quieter days. <span class="w-cet4" data-cn="士气、干劲">Morale</span> rises first, and the numbers follow; firms that <span class="w-rev">adopt</span> the change unprepared see the opposite result. <span class="w-phrase" data-cn="总体上、大体而言">By and large</span>, teams that keep the fourth day changed how they work first. <span class="w-writing" data-cn="重要的不是……而是……">What matters is not</span> how fast the idea spreads but whether the conditions are in place.',
      'Four days will not fix a broken job, and no experiment <span class="w-cet4" data-cn="保证、担保">guarantees</span> a good one. But the trials leave one question: what do we pay for when we pay for time? Where work is measured and the week redesigned, less time has meant the same work and fuller lives. Whatever the <span class="w-rev">outcome</span>, the five-day week is a <span class="w-cet4" data-cn="惯例、常态">norm</span>, not a law of nature. <span class="w-writing" data-cn="重要的不是……而是……">What matters is not</span> the day off itself but a week that keeps its promise.'
    ],
    translation: [
      '很少有职场话题像四天工作制这样传得这么快。在几个国家的试点里，一些公司减少一个工作日、工资照发，结果登上了头条：产出没有下滑，个别团队甚至还有上升。四天工作制不是白送的闲暇，而是对工作如何组织的一次检验。这个想法很吸引人，但吸引人并不是证据。',
      '真正做成的试点有一个共同习惯：先重新设计一周的安排。团队削减会议，也商定了哪些事情真的非做不可。数字说明的是：当会议缩水、打扰停止，同样的工作装得进更少的小时，这就是每小时产出上升的原因。一个设计团队把五天压进四天，每小时的生产率反而提高，质量也没有下降。每周长会的老习惯让位给一封简短的书面汇报，绩效评估依旧亮眼。',
      '结果取决于两个条件。第一，产出必须按成果而不是按小时来衡量：一个团队数得清写完的稿子，另一个数得清解决的工单。第二，管理者要看人做完了什么，而不是看有没有人坐在办公桌前。当加薪和晋升仍然与看得见的工时挂钩时，所谓缩短一周不过是把五天挤进四天，每个人回家时只会更累。这种改变在排班灵活的小团队里，比在大组织里更合适。',
      '知识型工作最适合这种改变：一个安静的上午胜过一个吵闹的下午。四天用心的工作，抵得上五天散漫的工作，前提是第五天用来休息，而不是用来补落下的活。但并非每种工作都能加入：病房、商店、公交线路每天都得有人值守。对小公司来说，少一天就意味着多雇人，而很少有公司具备这份承受力。',
      '批评者有实实在在的理由：最初的甜头可能很快消退；有些人只是把五天的活硬塞进更长的四天里，压力一点没少。话虽如此，问题出在设计上，而不是想法上。在一定程度上，多出来的那天是一种奖励：作为交换，团队接受更紧的每一天，而努力与休息之间的平衡必须守住。弊端也很清楚：忙季照样会来。',
      '那为什么这种改变仍然少见？一个周五就要回音的客户，不会接受办公室关门；真正的障碍是协调：公司必须与客户协商，与供应商配合。即便这个改变在纸面上完全可行，丢掉一个客户往往就足以让实验收场。所以潮流是真的，但很慢：看起来可行的事，到了门口就可能行不通。小公司还担心服务会打折扣，也担心旧习惯挡了路。',
      '更聪明的做法是先做一次试点，记录结果，改设计，而不是改口号。要让改变撑得住，整周都得先重排：会更少，目标更清楚，日子更安静。士气先涨，数字随后跟上；毫无准备就改的公司，往往先撞上相反的结果。大体而言，能保住第四天的团队，都是先改了工作方式的团队。重要的不是想法传得多快，而是条件是否到位。',
      '四天救不了一份糟糕的工作，任何实验也保证不了工作会变好。但这些试点留下一个问题：我们付钱买时间时，买的是什么？凡是工作被衡量、一周被重新设计过的地方，更少的时间都换来了同样的产出和更完整的生活。无论结果如何，五天工作制是一种惯例，而不是自然法则。重要的不是那一天休息本身，而是一周是否兑现它的承诺。'
    ],
    vocabulary: [
      {
        w: 'trial',
        ph: '/ˈtraɪəl/',
        pos: 'n./v.',
        cn: '试点、试验',
        col: 'run a trial — 开展一次试点；a trial period — 试用期',
        ex: 'Several countries ran trials of the four-day week.'
      },
      {
        w: 'output',
        ph: '/ˈaʊtpʊt/',
        pos: 'n.',
        cn: '产出、产量',
        col: 'output per hour — 每小时产出；hold output up — 保住产出',
        ex: 'Output held up after the week was shortened.'
      },
      {
        w: 'compress',
        ph: '/kəmˈpres/',
        pos: 'v.',
        cn: '压缩、精简',
        col: 'compress … into … — 把……压进……；compress a schedule — 压缩日程',
        ex: 'The team compressed five days of work into four.'
      },
      {
        w: 'productivity',
        ph: '/ˌprɒdʌkˈtɪvəti/',
        pos: 'n.',
        cn: '生产率',
        col: 'raise productivity — 提高生产率；productivity per hour — 每小时生产率',
        ex: 'Productivity per hour rose after the meetings were cut.'
      },
      {
        w: 'presence',
        ph: '/ˈprezns/',
        pos: 'n.',
        cn: '到岗、在场',
        col: 'physical presence — 人在现场；presence at the desk — 坐在桌前',
        ex: 'Some managers still judge people by their presence at a desk.'
      },
      {
        w: 'flexible',
        ph: '/ˈfleksəbl/',
        pos: 'adj.',
        cn: '灵活的',
        col: 'a flexible schedule — 灵活的排班；flexible hours — 弹性工时',
        ex: 'A small team with a flexible schedule can change more easily.'
      },
      {
        w: 'equivalent',
        ph: '/ɪˈkwɪvələnt/',
        pos: 'n./adj.',
        cn: '等同物、等量的',
        col: 'the equivalent of — 与……等量的东西；be equivalent to — 等同于',
        ex: 'Four careful days can be the equivalent of five scattered ones.'
      },
      {
        w: 'coverage',
        ph: '/ˈkʌvərɪdʒ/',
        pos: 'n.',
        cn: '值守、全天有人',
        col: 'daily coverage — 每天有人值守；need coverage all week — 整周都需要有人',
        ex: 'A hospital ward needs coverage every day of the week.'
      },
      {
        w: 'capacity',
        ph: '/kəˈpæsəti/',
        pos: 'n.',
        cn: '人手、承受能力',
        col: 'the capacity to do sth. — 做某事的能力；beyond capacity — 超出承受范围',
        ex: 'A small firm may lack the capacity to hire extra staff.'
      },
      {
        w: 'objection',
        ph: '/əbˈdʒekʃn/',
        pos: 'n.',
        cn: '反对理由、异议',
        col: 'raise an objection — 提出异议；have objections to … — 对……有异议',
        ex: 'Critics have real objections to the four-day week.'
      },
      {
        w: 'initial',
        ph: '/ɪˈnɪʃl/',
        pos: 'adj.',
        cn: '最初的、开始的',
        col: 'the initial gains — 最初的收益；initial results — 初期结果',
        ex: 'The initial gains may fade after the first year.'
      },
      {
        w: 'fade',
        ph: '/feɪd/',
        pos: 'v.',
        cn: '逐渐消退',
        col: 'fade away — 逐渐消失；the excitement fades — 兴奋劲过去',
        ex: 'Enthusiasm fades if the change is not designed well.'
      },
      {
        w: 'downside',
        ph: '/ˈdaʊnsaɪd/',
        pos: 'n.',
        cn: '不利之处、弊端',
        col: 'the downside is that … — 不利之处在于……；a real downside — 真正的弊端',
        ex: 'The downside is that busy weeks still arrive.'
      },
      {
        w: 'norm',
        ph: '/nɔːm/',
        pos: 'n.',
        cn: '惯例、常态',
        col: 'a social norm — 社会惯例；break the norm — 打破惯例',
        ex: 'The five-day week is a norm, not a law of nature.'
      },
      {
        w: 'client',
        ph: '/ˈklaɪənt/',
        pos: 'n.',
        cn: '客户、委托人',
        col: 'a client meeting — 客户会议；keep a client — 留住客户',
        ex: 'A client who wants an answer on Friday will not wait.'
      },
      {
        w: 'obstacle',
        ph: '/ˈɒbstəkl/',
        pos: 'n.',
        cn: '障碍',
        col: 'an obstacle to … — 对……的障碍；remove obstacles — 扫除障碍',
        ex: 'The real obstacle is coordination, not the idea itself.'
      },
      {
        w: 'negotiate',
        ph: '/nɪˈɡəʊʃieɪt/',
        pos: 'v.',
        cn: '协商、商谈',
        col: 'negotiate with sb. — 与某人协商；negotiate a change — 谈妥一项改变',
        ex: 'Firms must negotiate with customers before shortening the week.'
      },
      {
        w: 'coordinate',
        ph: '/kəʊˈɔːdɪneɪt/',
        pos: 'v.',
        cn: '协调、配合',
        col: 'coordinate with … — 与……配合；coordinate the work — 协调工作',
        ex: 'Suppliers who work five days are hard to coordinate with.'
      },
      {
        w: 'sustain',
        ph: '/səˈsteɪn/',
        pos: 'v.',
        cn: '维持、保持住',
        col: 'sustain the change — 维持住这项改变；sustain growth — 保持增长',
        ex: 'To sustain the change, the whole week must be reworked.'
      },
      {
        w: 'morale',
        ph: '/məˈrɑːl/',
        pos: 'n.',
        cn: '士气、干劲',
        col: 'raise morale — 提振士气；morale rises — 士气上升',
        ex: 'Morale often rises before the numbers do.'
      },
      {
        w: 'guarantee',
        ph: '/ˌɡærənˈtiː/',
        pos: 'v./n.',
        cn: '保证、担保',
        col: 'guarantee the result — 保证结果；there is no guarantee — 没有保证',
        ex: 'No experiment guarantees a better job.'
      }
    ],
    phrases: [
      {
        en: 'hold up',
        cn: '经受住检验、撑得住',
        ex: 'The output held up after the week was shortened.'
      },
      {
        en: 'cut back on',
        cn: '削减、减少',
        ex: 'Teams cut back on meetings before they cut a day.'
      },
      {
        en: 'up to a point',
        cn: '在一定程度上',
        ex: 'Up to a point, the free day is a reward.'
      },
      {
        en: 'in exchange for',
        cn: '作为交换',
        ex: 'In exchange for the free day, teams accept tighter days.'
      },
      {
        en: 'by and large',
        cn: '总体上、大体而言',
        ex: 'By and large, the best results came from small teams.'
      },
      {
        en: 'get in the way of',
        cn: '妨碍、挡了……的路',
        ex: 'Old habits get in the way of the change.'
      },
      {
        en: 'as things stand',
        cn: '就目前情况而言',
        ex: 'As things stand, most firms still work five days.'
      },
      {
        en: 'in the first place',
        cn: '一开始、当初',
        ex: 'Few people ask why the week is this shape in the first place.'
      },
      {
        en: 'take on',
        cn: '承担（工作、责任）',
        ex: 'A team should not take on more work than it can finish.'
      },
      {
        en: 'be tied to',
        cn: '与……挂钩、绑定',
        ex: 'Pay and promotion are still tied to visible hours.'
      },
      {
        en: 'in terms of',
        cn: '就……而言',
        ex: 'The change looks small in terms of hours but large in terms of habits.'
      },
      {
        en: 'keep one’s promise',
        cn: '兑现承诺',
        ex: 'A good working week is one that keeps its promise.'
      },
      {
        en: 'at short notice',
        cn: '临时通知、说动就动',
        ex: 'A shop cannot simply close at short notice.'
      },
      {
        en: 'work out',
        cn: '想出、弄明白；进展',
        ex: 'Each team has to work out its own version of the week.'
      }
    ],
    writings: [
      {
        expr: 'What matters is not ... but ...',
        cn: '重要的不是……而是……',
        meaning: '用 not A but B 把「大家盯着的表面指标」和「真正决定结果的东西」并排摆出来，一句话把论点从现象拉到本质，是议论文收束最稳的句式。',
        context: '本篇用在正文倒数第二段与结尾段各一次：第一次拉出全文的判断标准，最后一次收拢立意。',
        alts: [
          {
            t: 'The point is not ... but ...',
            n: '更口语'
          },
          {
            t: 'What counts is not ... but ...',
            n: '强调什么才算数'
          },
          {
            t: 'It is not ... that matters but ...',
            n: '改成强调句'
          }
        ],
        register: '中性偏书面，语气坚定，适合结论段。',
        example: 'What matters is not how fast the idea spreads but whether the conditions are in place.'
      },
      {
        expr: 'That said, ...',
        cn: '话虽如此……',
        meaning: '先承认对方的事实或让步点，再补上自己的限定，避免论证显得一边倒；比 but 更适合在议论文里做礼貌的转折。',
        context: '用在让步段的中段：前一句承认批评者的理由，这一句开始给出限定与回应。',
        alts: [
          {
            t: 'Even so, ...',
            n: '语气更短促'
          },
          {
            t: 'That is not to say that ...',
            n: '直接否定过度推论'
          },
          {
            t: 'Nevertheless, ...',
            n: '更书面、更强'
          }
        ],
        register: '中性，口语与书面都能用。',
        example: 'That said, none of this proves the idea wrong; it only proves that hours are not an honest measure of value.'
      }
    ],
    sentences: [
      {
        text: 'The four-day week is not a gift of free time but a test of how the work is organised.',
        points: [
          '<b>主干</b>：<span class=\'en\'>The four-day week is not A but B.</span> —— <b>not A but B</b>（不是甲，而是乙）把「常见误解」和「作者的看法」摆在同一句话里，是议论文亮出观点最常用的骨架。',
          '<b>介词宾语</b>：<span class=\'en\'>a test of how the work is organised</span> 里，of 后面跟的是 <b>how 引导的宾语从句</b>，不是单个名词；整块意思是「对工作如何组织的一次检验」。',
          '<b>为什么值得学</b>：这是全文的中心句，后面每一段都在回答「这个检验什么时候能通过」；写作里把中心句放在首段末尾，读者最难漏掉。',
          '<b>常见变体</b>：<span class=\'en\'>A short week is not a gift but a test of how we work.</span>'
        ]
      },
      {
        text: 'What the numbers show is that when meetings shrink and interruptions stop, the same work fits into fewer hours, which is why output per hour rises.',
        points: [
          '<b>主干</b>：<span class=\'en\'>What the numbers show is that …</span> —— 主语是 <b>what 引导的名词性从句</b>，表语是 that 引导的从句，整句骨架其实是「数字显示的是这一点」。',
          '<b>表语从句内部</b>又套了 <b>when 时间状语从句</b>（when meetings shrink and interruptions stop）和 <b>which 非限制性定语从句</b>（which is why output per hour rises），一句话三层结构。',
          '<b>注意点</b>：<span class=\'en\'>fit into fewer hours</span> 表示「装进更少的小时」，比 <span class=\'en\'>need less time</span> 更形象；<span class=\'en\'>which is why …</span> 用来引出结果，等于「这就是……的原因」。',
          '<b>写作迁移</b>：<span class=\'en\'>What the survey shows is that when costs fall, demand rises, which is why the policy works.</span>'
        ]
      },
      {
        text: 'Where pay and promotion are still tied to visible hours, a shorter week simply squeezes five days into four, and everyone goes home more tired.',
        points: [
          '<b>主干</b>：<span class=\'en\'>a shorter week simply squeezes five days into four</span> 是主句；句首 <b>Where</b> 引导<b>地点兼条件的状语从句</b>，读作「在……的地方、在……的情况下」。',
          '<b>squeeze A into B</b> 表示「把甲挤进乙」，和本篇新词 <b>compress</b> 意思相近，但 squeeze 更强调「硬塞、塞不下」。',
          '<b>并列结果</b>：主句两个动作用 and 连接（squeezes … and everyone goes home …），后半句是前一个动作的后果，不是另一个条件。',
          '<b>为什么值得学</b>：Where 引导的从句可以替代 if，语气更书面，适合放在段首亮条件；<span class=\'en\'>be tied to visible hours</span> 也是「与看得见的工时挂钩」的地道说法。'
        ]
      },
      {
        text: 'Four days of careful work can be worth the equivalent of five scattered ones, provided that the fifth day is used to rest rather than to catch up.',
        points: [
          '<b>主干</b>：<span class=\'en\'>Four days of careful work can be worth five scattered ones</span>；<span class=\'en\'>ones</span> 指代前面的 <span class=\'en\'>days</span>，避免重复。',
          '<b>provided that</b> 引导<b>条件状语从句</b>，比 if 更正式，表示「前提是」；从句里 <span class=\'en\'>is used to rest rather than to catch up</span> 用 <b>rather than</b> 对比两种用法，前后都接不定式，保持平行。',
          '<b>值得积累</b>：<span class=\'en\'>be worth + 名词</span> 表示「抵得上……」；<span class=\'en\'>the equivalent of …</span> 是「与……等量的东西」；<span class=\'en\'>catch up</span> 在这里是「补上落下的工作」。',
          '<b>常见变体</b>：<span class=\'en\'>Two focused hours can be worth a whole distracted afternoon, provided that nothing interrupts.</span>'
        ]
      },
      {
        text: 'Even when the change is perfectly possible on paper, one lost client is often enough to end the experiment.',
        points: [
          '<b>主干</b>：<span class=\'en\'>one lost client is often enough to end the experiment</span>；<span class=\'en\'>be enough to do sth.</span> 表示「足以做某事」。',
          '<b>Even when</b> 引导<b>让步状语从句</b>：先退一步承认「纸面上完全可行」，主句再给出现实阻力——议论文让步段的标准句式。',
          '<b>对照</b>：<span class=\'en\'>on paper</span> 表示「在纸面上、理论上」，与第 6 段结尾的 <span class=\'en\'>at the door</span>（到了门口、真刀真枪时）形成呼应。',
          '<b>为什么值得学</b>：这句话解释「为什么推广难」——不是方案不好，而是协调成本太高；论证时把原因落在机制上，比落在人身上更有说服力。'
        ]
      }
    ],
    questions: [
      {
        en: 'What can we infer about a team that simply moves five days of work into four longer days?',
        cn: '从文中可以推出，把五天的活直接塞进更长的四天的团队会怎样？',
        ans: 'People go home more tired and the shorter week fails to keep its promise.',
        ansCn: '员工回家时更累，缩短一周也就兑现不了它的承诺。'
      },
      {
        en: 'Why do small firms often find the change harder to carry out than large ones?',
        cn: '为什么小公司往往比大公司更难推行这种改变？',
        ans: 'Because the missing day means paying more people for cover, and they may lack the capacity to carry the extra cost.',
        ansCn: '因为少一天意味着要多雇人值守，而他们未必扛得起这笔额外开支。'
      },
      {
        en: 'What is the writer’s view of the four-day week?',
        cn: '作者对四天工作制持什么看法？',
        ans: 'It is a test of how work is organised rather than a gift of free time, and it works only when output is measured and the week is redesigned first.',
        ansCn: '它不是白送的闲暇，而是对工作如何组织的一次检验；只有当产出被衡量、整周先被重新设计时，它才成立。'
      },
      {
        en: 'How does the writer organise the passage?',
        cn: '作者是怎样组织全文的？',
        ans: 'The passage reports what the trials found, then lists the conditions for success and the limits, then explains why the change spreads slowly, and closes with a balanced conclusion.',
        ansCn: '文章先写试点的结果，再写成立的条件与局限，然后解释推广为什么慢，最后以平衡的结论收尾。'
      },
      {
        en: 'Why does the writer mention a client who wants an answer on Friday?',
        cn: '作者为什么提到「周五就要回音的客户」这件事？',
        ans: 'To show that the real obstacle is coordination with people outside the firm, not the idea itself.',
        ansCn: '为了说明真正的障碍是与公司外部的人协调，而不是这个想法本身。'
      }
    ],
    writingTask: {
      en: 'Write 120–150 words about whether your school or workplace should try a four-day week.',
      hints: [
        'Some people believe that ... , while others argue that ...',
        'In the first place, ...',
        'That said, ...',
        'What matters is not ... but ...'
      ],
      hintCn: '分三段写：第一段亮出你的立场并点出争议；第二段给一到两个理由加一个具体例子（可以用自己的学校或公司）；第三段先让步承认一个反对理由，再用「重要的不是……而是……」收尾。',
      req: '至少使用 3 个本篇学过的词或搭配（output / obstacle / negotiate / hold up / in exchange for / What matters is not … but …）。'
    },
    speakingTask: {
      en: 'Answer in 1.5–2 minutes. Give your view, one reason and one example, then answer one counterargument.',
      points: [
        'Your view: should the four-day week be tried where you are?',
        'One reason, with one condition it depends on',
        'One example with a time, a place or a number',
        'One counterargument and your reply to it'
      ],
      pointCn: '一点五到两分钟里讲完「观点 → 理由 → 例子 → 反驳与回应」四步；反驳要具体（比如值守岗位、成本、协调），回应时可以用「话虽如此……」再给出限定。',
      skeleton: 'In my view, ... should (not) try a four-day week. The main reason is that ... , provided that ... For example, last year ... . Some people may object that ... . That said, ... . What matters is not ... but ...'
    },
    focus: [
      '<b>新授核心词 21 个</b>：<span class=\'en\'>trial, output, compress, productivity, presence, flexible, equivalent, coverage, capacity, objection, initial, fade, downside, norm, client, obstacle, negotiate, coordinate, sustain, morale, guarantee</span> —— <b>compress</b> 与 <b>compress … into …</b> 连着记，表示「把五天压进四天」；<b>productivity</b> 是名词，来自第 24 篇的 <span class=\'en\'>productive</span>，注意词尾变化；<b>objection / obstacle</b> 一个指「反对的理由」，一个指「挡路的障碍」，不要互换；<b>negotiate with sb.</b> 与 <b>coordinate with sb.</b> 介词都是 with；<b>guarantee</b> 名动同形，否定时常写 <span class=\'en\'>no experiment guarantees …</span>；<b>norm</b> 指「约定俗成的惯例」，比 rule 更强调大家都默认。',
      '<b>本篇复现的旧词（11 处灰点）</b>：第 31 篇的 <span class=\'en\'>evidence</span>、第 17 篇的 <span class=\'en\'>routine</span>、第 24 篇的 <span class=\'en\'>performance</span>、第 30 篇的 <span class=\'en\'>measure → measured</span>、第 6 篇的 <span class=\'en\'>schedule</span> 与 <span class=\'en\'>balance</span>、第 23 篇的 <span class=\'en\'>pressure</span>、第 22 篇的 <span class=\'en\'>trend</span>、第 36 篇的 <span class=\'en\'>feasible</span>、第 37 篇的 <span class=\'en\'>adopt</span>、第 40 篇的 <span class=\'en\'>outcome</span>；短语另有第 30 篇的 <span class=\'en\'>keep a record of</span>、第 28 篇的 <span class=\'en\'>make sure</span> 一族的说法（<span class=\'en\'>keep one’s promise</span>）等织在正文里。',
      '<b>五类长难句</b>：<span class=\'en\'>not A but B</span> 亮观点（第一段中心句）、<span class=\'en\'>What … is that …</span> 主语从句套 when 与 which 从句（第二段证据句）、<span class=\'en\'>Where …</span> 条件状语从句（第三段条件句）、<span class=\'en\'>provided that + rather than</span> 条件与对比（第四段）、<span class=\'en\'>Even when …</span> 让步（第六段）—— 每句都在 07 节拆开，仿写两句就算过关。',
      '<b>让步与收束的骨架</b>：<span class=\'en\'>That said, …</span>（话虽如此，给限定）→ <span class=\'en\'>Up to a point, …</span>（在一定程度上承认）→ <span class=\'en\'>in exchange for</span>（作为交换的代价）→ <span class=\'en\'>What matters is not … but …</span>（收束立意）。搭配上记住 <span class=\'en\'>cut back on meetings</span>（削会）、<span class=\'en\'>hold up</span>（撑得住）、<span class=\'en\'>get in the way of</span>（挡路）、<span class=\'en\'>by and large</span>（总体而言），口语里都能直接搬。',
      '<b>全文逻辑线与题型提醒</b>：话题与现象 → 试点怎么做成的（证据）→ 成立的两个条件 → 哪些工作做不了（让步）→ 批评者的理由与回应 → 为什么推广慢（协调成本）→ 该怎么做 → 平衡收束。推断题抓「直接照搬五天会怎样」「小公司为什么难」；作者观点题看中心句与结尾句；篇章结构题按「证据 → 条件 → 局限 → 原因 → 结论」数段落；「作者为什么提到 X」题永远答「为了证明哪一条机制」，本篇那个周五要回音的客户证明的是协调成本。'
    ],
    standard: {
      time: '约 50 分钟',
      bar: '阶段五第 48 篇：阅读题 5 题对 ≥ 4 · 21 个核心词遮住中文说出 ≥ 16 · 拆开 5 处长难句 · 完成 120–150 词写作与 1.5–2 分钟含反驳的口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 21 个核心词中的 16 个（output、productivity、coverage、negotiate、obstacle …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '14 个高频搭配掌握 10 个，能各造一句（cut back on、in exchange for、hold up、by and large …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 5 处长难句各自的结构（not A but B / what 主语从句 / where 条件句 / provided that 条件句 / even when 让步句），并仿写其中 2 处',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；第 4 题要说出全文「证据 → 条件 → 局限 → 原因 → 结论」的顺序',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 07 节写 120–150 词，至少用上 What matters is not … but … 或 That said, …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1.5–2 分钟讲完「观点 → 理由 → 例子 → 反驳与回应」，反驳要具体到岗位、成本或协调',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 11 处灰点旧词，说出其中 9 个的意思与出处篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 49,
    slug: '049-why-companies-care-about-reputation',
    title: 'Why Companies Care About Reputation',
    titleCn: '企业为何在意声誉',
    stage: '阶段五 · 综合提高',
    stageRange: '第 41–50 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 645 词'
      },
      {
        k: '新词密度',
        v: '约 5.6%'
      },
      {
        k: '长难句',
        v: '5 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/049.jpg',
    coverCredit: 'Photo: Savvas Stavrinos / Pexels',
    body: [
      '<span class="w-sentence">A company can buy attention with an advertisement, but a reputation is earned in thousands of small decisions that no camera ever records.</span> For most firms, <span class="w-cet4" data-cn="声誉、口碑">reputation</span> is not decoration; it is part of the cost of doing business. It shapes three things in particular: who applies for a job, what customers will pay, and how a crisis is handled on day one.',
      'Start with hiring. Those who <span class="w-cet4" data-cn="招聘、招募">recruit</span> know that <span class="w-cet4" data-cn="应聘者、申请者">applicants</span> read the company before it reads them. <span class="w-sentence">When two offers look the same on paper, an applicant will choose the firm whose former employees speak well of it, and that kind of praise is advertising the firm never pays for.</span> A firm with a bad name must <span class="w-phrase" data-cn="把……考虑在内">take salary and job title into account</span>, yet the best people still leave. <span class="w-cet4" data-cn="忠诚的、忠实的">Loyal</span> staff are the cheapest form of recruitment: they bring their friends.',
      'Reputation also shows up in the <span class="w-rev">price</span> a company charges. People pay more for a name they <span class="w-rev">trust</span>, and ask for fewer <span class="w-rev">discounts</span>. A <span class="w-cet4" data-cn="溢价、加价">premium</span> is not a trick; it sums up past decisions about <span class="w-rev">quality</span>, service and honesty. <span class="w-synonym" data-cn="＝ customers 的同义替换">Shoppers</span> accept the higher price when the promise is clear, and the <span class="w-cet4" data-cn="利润">profit</span> lets the company <span class="w-cet4" data-cn="投入（资金、精力）">invest</span> in better materials instead of cutting prices again. A <span class="w-rev">brand</span> with years behind it can charge more than a newcomer with the same product.',
      '<span class="w-writing" data-cn="说句公道话……">To be fair,</span> reputation is not everything. A good name cannot rescue a bad product, and a <span class="w-cet4" data-cn="宣传活动">campaign</span> of <span class="w-cet4" data-cn="夸大、夸张">exaggerated</span> claims only <span class="w-cet4" data-cn="误导">misleads</span> buyers and makes them angrier. Nor can a company control every <span class="w-cet4" data-cn="传闻、流言">rumor</span>: some stories are simply wrong. What it does control is how it <span class="w-rev">responds</span> next, and that is what people remember.',
      'One <span class="w-cet4" data-cn="丑闻">scandal</span> shows the cost. A <span class="w-rev">customer</span> of a food chain found something wrong in a meal and wrote about it online. The company <span class="w-cet4" data-cn="不理会、驳回">dismissed</span> the <span class="w-rev">complaint</span> with a cold message; within a day the post <span class="w-phrase" data-cn="迅速传开、一夜爆红">went viral</span>, and one bad meal became a question about the chain. <span class="w-sentence">What started as one angry post became a national story when the company answered the first complaint with excuses, and by the time it offered an apology, three million people had already seen the wrong reply.</span> Sales fell, and the chain needed two years to <span class="w-phrase" data-cn="重新赢回">win back</span> the <span class="w-cet4" data-cn="可信度、信誉">credibility</span> lost to one careless reply.',
      'Mistakes are rarely fatal. Most crises follow the same shape: a small event, a slow answer, then <span class="w-phrase" data-cn="口碑、口口相传">word of mouth</span> doing the damage. <span class="w-sentence">It is not the mistake itself that destroys a name, but the hours a company wastes before it speaks.</span> <span class="w-sentence">Only when the company admitted the fault, paid the money back and published the fix did the story begin to lose its energy.</span> <span class="w-phrase" data-cn="主动承担责任">Take the blame</span> before you look for reasons, <span class="w-phrase" data-cn="向……道歉">say sorry to</span> those affected, and offer a <span class="w-cet4" data-cn="退款">refund</span> or a repair. A <span class="w-cet4" data-cn="透明的、公开的">transparent</span> answer on day one costs less than an advertisement; every <span class="w-rev">delay</span> has a <span class="w-cet4" data-cn="后果">consequence</span>.',
      'What is a reputation made of? Not slogans but checked behaviour. A company’s <span class="w-synonym" data-cn="＝ reputation 的同义替换">public image</span> is what its staff and its customers say when it is not in the room, and those words <span class="w-rev">influence</span> the next applicant and the next buyer. What surprises many managers is that one survey of former employees speaks louder than a year of advertising, and trust, once lost, takes years to <span class="w-cet4" data-cn="重新获得">regain</span>. <span class="w-writing" data-cn="说句公道话……">To be fair,</span> most companies are not villains; they are slow, and in a <span class="w-cet4" data-cn="竞争激烈的">competitive</span> market slow looks like dishonesty.',
      '<span class="w-writing" data-cn="这正是……的原因">This is why</span> reputation deserves a line in the budget, not just a page on the website. It protects <span class="w-cet4" data-cn="营收、营业收入">revenue</span> when something goes wrong, and it cannot be bought quickly or faked for long. Companies that understand this invest in it daily: in honest words, fair prices, and answers that come before the rumor spreads. In the end, reputation is the story a company’s own people tell; the firm only decides what story it hands them.'
    ],
    translation: [
      '广告可以为一家公司买到关注，但声誉是在成千上万个没有镜头记录的小决定里慢慢挣来的。对大多数公司来说，声誉不是装饰，而是做生意的成本之一。它尤其影响三件事：谁来应聘，顾客愿意付多少钱，以及危机爆发的第一天怎么应对。',
      '先说招聘。负责招聘的人清楚，求职者了解这家公司，远在公司了解他们之前。当两份工作在纸面上看起来一样时，应聘者会选择那家被前员工说好话的公司，而这种好话是公司不用花钱的广告。反过来，名声不好的公司必须把薪水、职位都算进条件，可最优秀的人还是走了。忠诚的员工是最便宜的招聘渠道：他们会把朋友带进来。',
      '声誉还会出现在公司敢开的价格上。人们愿意为一个自己信任的名字多付钱，也更少要求打折。溢价不是花招，它是过去一个个关于质量、服务与诚信的决定的总和。承诺讲得清楚时，顾客就接受更高的价格，而由此得来的利润让公司可以投入更好的材料，而不是一轮又一轮地降价。一个有年头的品牌，可以比卖同样产品的新来者要价更高。',
      '说句公道话，声誉不是万能的。好名声救不了糟糕的产品，一场满是夸大宣传的活动只会误导买家，让他们事后更生气。公司也控制不了每一条传闻：有些故事本来就是错的。它能控制的是下一步怎么回应，而人们记住的正是这一步。',
      '一桩丑闻就能把代价说清楚。一家连锁餐饮的顾客在餐食里发现了问题，把事情写到了网上。公司用一条冷冰冰的消息驳回了这条投诉；一天之内帖子就传开了，一顿饭的问题变成了对整个连锁的质疑。当公司用借口回应第一条评论时，一条愤怒的帖子就成了全国新闻，等到它终于道歉，三百万人已经看过那条错误的回复。销量下滑，这家连锁花了两年时间，才重新赢回被一条草率回复毁掉的信誉。',
      '错误很少是致命的。大多数危机都是同一个形状：一件小事，一次迟缓的回应，然后由口碑造成真正的伤害。毁掉一个名字的不是错误本身，而是公司在开口之前浪费掉的那些时间。只有当公司承认过失、把钱退回去、公布补救办法，故事才开始失去力量。先承担责任，再去寻找理由；向受影响的人道歉，并提供退款或维修。头一天就给出透明的回应，比任何广告都便宜；每一次拖延都有后果。',
      '声誉到底由什么构成？不是口号，而是可以被核实的行为。一家公司的公众形象，就是它的员工和顾客在它不在场时说的话，而这些话会影响下一个应聘者和下一个买家。让很多管理者意外的是，一次针对离职员工的调查，比一年的广告更有分量；而信任一旦失去，往往要很多年才能重新获得。说句公道话，大多数公司并不是坏人；它们只是慢，而在一个竞争激烈的市场里，慢看起来就像不诚实。',
      '这正是声誉值得在预算里占一行、而不只是在网站上占一页的原因。它在出事的时候保护营收，而且买不来、也装不了太久。懂得这一点的公司每天都在为它投入：诚实的话，公道的价格，以及赶在传闻传开之前就给出的回应。说到底，声誉是公司自己的人讲出来的故事；公司只能决定递给他们的，是一个什么样的故事。'
    ],
    vocabulary: [
      {
        w: 'reputation',
        ph: '/ˌrepjuˈteɪʃn/',
        pos: 'n.',
        cn: '声誉、口碑',
        col: 'a good reputation — 好名声；build a reputation — 树立声誉',
        ex: 'A good reputation takes years to build and one day to lose.'
      },
      {
        w: 'recruit',
        ph: '/rɪˈkruːt/',
        pos: 'v.',
        cn: '招聘、招募',
        col: 'recruit new staff — 招聘新员工；recruit from a university — 从大学招人',
        ex: 'The company recruits new graduates every spring.'
      },
      {
        w: 'applicant',
        ph: '/ˈæplɪkənt/',
        pos: 'n.',
        cn: '应聘者、申请者',
        col: 'a job applicant — 求职的应聘者；an applicant for the post — 该职位的申请者',
        ex: 'Each applicant reads the company’s reviews before applying.'
      },
      {
        w: 'loyal',
        ph: '/ˈlɔɪəl/',
        pos: 'adj.',
        cn: '忠诚的、忠实的',
        col: 'loyal customers — 忠实顾客；stay loyal to … — 对……保持忠诚',
        ex: 'Loyal staff are the cheapest form of recruitment.'
      },
      {
        w: 'premium',
        ph: '/ˈpriːmiəm/',
        pos: 'n./adj.',
        cn: '溢价、加价',
        col: 'charge a premium — 收更高的价钱；a premium brand — 高端品牌',
        ex: 'People will pay a premium for a name they trust.'
      },
      {
        w: 'profit',
        ph: '/ˈprɒfɪt/',
        pos: 'n.',
        cn: '利润',
        col: 'make a profit — 获得利润；profit from … — 从……中获利',
        ex: 'The profit lets the company invest in better materials.'
      },
      {
        w: 'campaign',
        ph: '/kæmˈpeɪn/',
        pos: 'n.',
        cn: '宣传活动、运动',
        col: 'an advertising campaign — 广告宣传活动；launch a campaign — 推出宣传活动',
        ex: 'A campaign of exaggerated claims only makes buyers angrier later.'
      },
      {
        w: 'scandal',
        ph: '/ˈskændl/',
        pos: 'n.',
        cn: '丑闻',
        col: 'cause a scandal — 引发丑闻；a public scandal — 公开的丑闻',
        ex: 'One scandal showed the real cost of a careless reply.'
      },
      {
        w: 'rumor',
        ph: '/ˈruːmə(r)/',
        pos: 'n.',
        cn: '传闻、流言',
        col: 'spread a rumor — 散布传闻；a rumor about … — 关于……的传闻',
        ex: 'No company can control every rumor.'
      },
      {
        w: 'mislead',
        ph: '/ˌmɪsˈliːd/',
        pos: 'v.',
        cn: '误导',
        col: 'mislead the public — 误导公众；mislead sb. into doing sth. — 误导某人去做某事',
        ex: 'Adverts that mislead people only make them angry later.'
      },
      {
        w: 'credibility',
        ph: '/ˌkredəˈbɪləti/',
        pos: 'n.',
        cn: '可信度、信誉',
        col: 'lose credibility — 失去可信度；gain credibility — 建立可信度',
        ex: 'It took the chain two years to win back its credibility.'
      },
      {
        w: 'exaggerate',
        ph: '/ɪɡˈzædʒəreɪt/',
        pos: 'v.',
        cn: '夸大、夸张',
        col: 'exaggerate the facts — 夸大事实；exaggerate the effect — 夸大效果',
        ex: 'Do not exaggerate what your product can do.'
      },
      {
        w: 'transparent',
        ph: '/trænsˈpærənt/',
        pos: 'adj.',
        cn: '透明的、公开的',
        col: 'a transparent process — 透明的过程；be transparent about … — 对……开诚布公',
        ex: 'Be transparent about what went wrong and what you will do next.'
      },
      {
        w: 'consequence',
        ph: '/ˈkɒnsɪkwəns/',
        pos: 'n.',
        cn: '后果',
        col: 'face the consequences — 承担后果；as a consequence — 因此',
        ex: 'Every delay has a consequence that the company pays for.'
      },
      {
        w: 'regain',
        ph: '/rɪˈɡeɪn/',
        pos: 'vt.',
        cn: '重新获得',
        col: 'regain trust — 重新赢得信任；regain control — 重新控制',
        ex: 'Trust, once lost, takes years to regain.'
      },
      {
        w: 'invest',
        ph: '/ɪnˈvest/',
        pos: 'v.',
        cn: '投入（资金、精力）',
        col: 'invest in … — 在……上投入；invest time and money — 投入时间和金钱',
        ex: 'Wise companies invest in their reputation every day.'
      },
      {
        w: 'competitive',
        ph: '/kəmˈpetɪtɪv/',
        pos: 'adj.',
        cn: '竞争激烈的',
        col: 'a competitive market — 竞争激烈的市场；a competitive price — 有竞争力的价格',
        ex: 'In a competitive market, slow looks like dishonesty.'
      },
      {
        w: 'revenue',
        ph: '/ˈrevənjuː/',
        pos: 'n.',
        cn: '营收、营业收入',
        col: 'earn revenue — 获得收入；revenue from … — 来自……的收入',
        ex: 'A bad story can cost more revenue than a weak quarter.'
      },
      {
        w: 'refund',
        ph: '/ˈriːfʌnd/',
        pos: 'n./v.',
        cn: '退款',
        col: 'ask for a refund — 要求退款；refund the money — 退还钱款',
        ex: 'Offer a refund or a repair when something goes wrong.'
      },
      {
        w: 'dismiss',
        ph: '/dɪsˈmɪs/',
        pos: 'vt.',
        cn: '不理会、驳回',
        col: 'dismiss a complaint — 驳回投诉；dismiss an idea — 否掉一个想法',
        ex: 'The company dismissed the complaint with a cold message.'
      },
      {
        w: 'apology',
        ph: '/əˈpɒlədʒi/',
        pos: 'n.',
        cn: '道歉',
        col: 'make an apology — 道歉；a public apology — 公开道歉',
        ex: 'An apology is cheaper than a long argument.'
      },
      {
        w: 'survey',
        ph: '/ˈsɜːveɪ/',
        pos: 'n./v.',
        cn: '调查',
        col: 'carry out a survey — 做一项调查；survey results — 调查结果',
        ex: 'One survey of former employees said more than a year of advertising.'
      }
    ],
    phrases: [
      {
        en: 'go viral',
        cn: '迅速传开、一夜爆红（新）',
        ex: 'The post went viral within a day.'
      },
      {
        en: 'win back',
        cn: '重新赢回（新）',
        ex: 'It takes years to win back what one reply can cost.'
      },
      {
        en: 'take the blame',
        cn: '主动承担责任（新）',
        ex: 'Take the blame before you look for reasons.'
      },
      {
        en: 'word of mouth',
        cn: '口碑、口口相传（新）',
        ex: 'Word of mouth does the real damage after a crisis.'
      },
      {
        en: 'take … into account',
        cn: '把……考虑在内（新）',
        ex: 'Take salary and job title into account before you decide.'
      },
      {
        en: 'say sorry to',
        cn: '向……道歉（复现第 13 篇）',
        ex: 'Say sorry to the people affected before you explain.'
      },
      {
        en: 'instead of',
        cn: '而不是、代替（复现第 10 篇）',
        ex: 'Invest in better materials instead of cutting prices again.'
      },
      {
        en: 'go wrong',
        cn: '出问题、出岔子（复现第 15 篇）',
        ex: 'Revenue is what protects a company when something goes wrong.'
      },
      {
        en: 'in the end',
        cn: '到头来、最终（复现第 10 篇）',
        ex: 'In the end, reputation is the story people tell about you.'
      },
      {
        en: 'look for',
        cn: '寻找、找寻（复现第 27 篇）',
        ex: 'Do not look for reasons before you take the blame.'
      },
      {
        en: 'ask for',
        cn: '要求、请求（复现第 9 篇）',
        ex: 'Customers ask for fewer discounts when they trust the name.'
      },
      {
        en: 'on paper',
        cn: '纸面上、名义上（复现第 6 篇）',
        ex: 'Two offers can look the same on paper.'
      },
      {
        en: 'in particular',
        cn: '尤其、特别（新）',
        ex: 'It shapes three things in particular.'
      },
      {
        en: 'on day one',
        cn: '第一天、头一天（新）',
        ex: 'A transparent answer on day one costs less than an advertisement.'
      }
    ],
    writings: [
      {
        expr: 'To be fair, ...',
        cn: '说句公道话……',
        meaning: '先替对方说一句公道话，再回到自己的立场：承认限制反而让后面的论点更可信，是议论里「让步」的标准开场。',
        context: '用在转折处或结尾处，后面接一句对方也有道理的地方，再用 but / and yet 收回主线。',
        alts: [
          {
            t: 'In fairness, ...',
            n: '更书面'
          },
          {
            t: 'Admittedly, ...',
            n: '承认对方有理时用'
          },
          {
            t: 'To be honest, ...',
            n: '更口语'
          }
        ],
        register: '中性，议论与日常讨论都能用。',
        example: 'To be fair, reputation is not everything; a good name cannot rescue a bad product.'
      },
      {
        expr: 'This is why ...',
        cn: '这正是……的原因',
        meaning: '把前面积累的事实一次性收拢，指向结论：前面讲「发生了什么」，这里讲「所以才要……」，收尾最有力量。',
        context: '放在结论段的第一句，前面的事实要足够多，读者读到这里自然点头。',
        alts: [
          {
            t: 'That is why ...',
            n: '同样常用，语气稍轻'
          },
          {
            t: 'This explains why ...',
            n: '更书面'
          },
          {
            t: 'For this reason, ...',
            n: '接在原因之后'
          }
        ],
        register: '中性偏书面，适合结论段。',
        example: 'This is why reputation deserves a line in the budget, not just a page on the website.'
      }
    ],
    sentences: [
      {
        text: 'A company can buy attention with an advertisement, but a reputation is earned in thousands of small decisions that no camera ever records.',
        points: [
          '<b>主干</b>：A company can buy attention …, but a reputation is earned …，两个分句由 but 连接，形成「买得到」与「挣得来」的对比，这是全文的中心句。',
          '<b>被动语态</b>：a reputation is earned in thousands of small decisions，用被动把重心放在「声誉是被挣来的」这一结果上，主语只是承受者。',
          '<b>定语从句</b>：that no camera ever records 修饰 small decisions，说明这些决定没人看见——正因为没人看见，声誉才难以伪造。',
          '<b>为什么值得学</b>：一句话立住「广告＝attention、声誉＝earned」的对比，后面每一段都在展开它，是观点类作文最好用的开篇方式。',
          '<b>常见变体</b>：You can buy time with money, but respect is earned in years of small acts.'
        ]
      },
      {
        text: 'When two offers look the same on paper, an applicant will choose the firm whose former employees speak well of it, and that kind of praise is advertising the firm never pays for.',
        points: [
          '<b>主干</b>：an applicant will choose the firm … and that kind of praise is advertising …，由 and 连接两个并列分句，前句讲选择，后句讲原因。',
          '<b>时间状语从句</b>：When two offers look the same on paper；<b>on paper</b> 表示「纸面上、名义上」，暗示真正的差别在纸面之外。',
          '<b>定语从句</b>：whose former employees speak well of it，whose 指 the firm；<b>speak well of sb.</b> 是「说某人好话」，注意介词 of。',
          '<b>后置定语</b>：advertising the firm never pays for 是省略了 that 的定语从句，pay for 的宾语就是 advertising。',
          '<b>为什么值得学</b>：一句里装下「条件 → 选择 → 评价」三层逻辑，是写招聘、择校、消费选择类段落的现成模板。'
        ]
      },
      {
        text: 'What started as one angry post became a national story when the company answered the first complaint with excuses, and by the time it offered an apology, three million people had already seen the wrong reply.',
        points: [
          '<b>主干</b>：What started as one angry post became a national story，主语是 <b>what</b> 引导的名词性从句，start as … become … 构成「起初是……后来变成……」的变化链。',
          '<b>时间从句叠加</b>：when the company answered … 与 by the time it offered an apology 一前一后；<b>by the time + 过去式从句，主句用过去完成时</b>（had already seen），表示「等到……时已经……」。',
          '<b>数字的说服力</b>：three million people 给出量级，比「很多人」有力得多；议论文举证时尽量带数字。',
          '<b>为什么值得学</b>：这是「小事变大事」的标准叙事句型，可以整体搬到任何危机、舆情、谣言类段落里。',
          '<b>常见变体</b>：What began as a joke became a problem when the company refused to answer.'
        ]
      },
      {
        text: 'It is not the mistake itself that destroys a name, but the hours a company wastes before it speaks.',
        points: [
          '<b>主干</b>：这是<b>强调句型 It is … that …</b> 的否定形式 It is not A but B，强调「毁掉名声的不是错误本身，而是时间」。',
          '<b>强调句的判断法</b>：去掉 It is 与 that，句子成分仍然完整（Not the mistake itself destroys a name, but the hours …），这正是强调句与主语从句的分界。',
          '<b>省略关系代词</b>：the hours (that) a company wastes before it speaks 中 that 被省略，waste 的宾语就是 the hours。',
          '<b>为什么值得学</b>：承认问题存在、但把重点挪到别处，正是「观点＋让步」议论文的骨架句式。',
          '<b>写作迁移</b>：It is not the price that matters, but the promise behind it.'
        ]
      },
      {
        text: 'Only when the company admitted the fault, paid the money back and published the fix did the story begin to lose its energy.',
        points: [
          '<b>主干</b>：正常语序是 The story began to lose its energy only when the company admitted …；<b>Only + 状语从句</b>置于句首，主句<b>部分倒装</b>：did 提到主语 the story 之前。',
          '<b>倒装范围</b>：只有主句倒装，when 引导的从句仍用正常语序；<b>only + 主语</b>不倒装（Only the manager knows …），这是最容易错的分界。',
          '<b>三个并列动作</b>：admitted the fault, paid the money back and published the fix ——危机处理的三步：承认、赔偿、公布补救，一个都不能少。',
          '<b>为什么值得学</b>：Only when … did … 是给出「唯一条件」最有力的句式，四级写作里可直接套用。',
          '<b>常见变体</b>：Only after the report was published did people see the gap.'
        ]
      }
    ],
    questions: [
      {
        en: 'What can we infer about a company that has to cut prices all year round?',
        cn: '从文中可以推出，一家一年到头都在降价的公司是怎样的？',
        ans: 'Its name is not yet trusted, so buyers are not willing to pay a premium for it.',
        ansCn: '它的名字还没有赢得信任，所以买家不愿意为它多付钱。'
      },
      {
        en: 'What can we infer about why the food chain needed two years to win its credibility back?',
        cn: '从文中可以推出，这家连锁餐饮为什么需要两年才重新赢回信誉？',
        ans: 'Because trust is built slowly but lost quickly: one careless reply, seen by millions, destroyed what years of small decisions had built.',
        ansCn: '因为信任积累得慢、丢得快：三百万人看到的那条草率回复，毁掉了多年小决定积累起来的东西。'
      },
      {
        en: 'What is the writer’s view of reputation?',
        cn: '作者对声誉持什么看法？',
        ans: 'It is a real part of doing business, shaping hiring, pricing and crisis handling, but it cannot rescue a bad product or dishonest claims.',
        ansCn: '它是做生意实打实的一部分，影响招聘、定价和危机应对；但它救不了糟糕的产品，也救不了不诚实的宣传。'
      },
      {
        en: 'How is the text developed?',
        cn: '这篇文章是怎样展开的？',
        ans: 'It states the view that reputation matters, gives two areas of evidence (hiring and pricing), makes a concession, then uses a case to show the cost of a PR mistake, and closes with how reputation is built and kept.',
        ansCn: '先亮出「声誉很重要」的观点，再用招聘和定价两方面举证，接着做让步，然后用一个案例说明公关失误的代价，最后讲声誉如何建立和保住。'
      },
      {
        en: 'Why does the writer mention the food chain that answered a complaint with a cold message?',
        cn: '作者为什么提到那家用一条冷冰冰的消息回复投诉的连锁餐饮？',
        ans: 'To show that one careless reply can cost a company far more than the original mistake.',
        ansCn: '为了说明一条草率的回复给公司造成的损失，远远超过最初的那次失误。'
      }
    ],
    writingTask: {
      en: 'Write 120–150 words about a shop, a company or a brand whose reputation you trust (or stopped trusting): what it did, how its name changed, and what it should do next.',
      hints: [
        'In my view, reputation matters because ...',
        'A clear example is ...',
        'To be fair, ...',
        'This is why ...'
      ],
      hintCn: '写三段：第一段亮出观点，说明声誉对企业和顾客分别意味着什么；第二段给一个具体例子（一家店或一个品牌做对或做错的那件事，要有时间或数字）；第三段先用 To be fair, … 做让步，再用 This is why … 收尾。',
      req: '至少使用 3 个本篇学过的词或搭配（reputation / credibility / premium / go viral / win back / take the blame）。'
    },
    speakingTask: {
      en: 'Answer in 1.5–2 minutes. Give your view, one reason and one example, then answer one counterargument.',
      points: [
        'Your view: how much does reputation matter when you choose a product or a job?',
        'One reason, with a number or a concrete detail',
        'One example from your own experience',
        'One counterargument, and your answer to it'
      ],
      pointCn: '1.5–2 分钟里走完「观点 → 理由 → 例子 → 反驳与回应」四步；反驳要先准确复述对方的理由（例如「便宜才是硬道理」），再给出你的回答。',
      skeleton: 'In my opinion, reputation matters because ... For example, once ... , and it ... . Some people may argue that ... , but I would answer that ... . To sum up, ...'
    },
    focus: [
      '<b>新授核心词 22 个</b>：<span class=\'en\'>reputation, recruit, applicant, loyal, premium, profit, campaign, scandal, rumor, mislead, credibility, exaggerate, transparent, consequence, regain, invest, competitive, revenue, refund, dismiss, apology, survey</span> —— <b>reputation / credibility</b> 是一组「名声」词：前者是「大家怎么说你」，后者是「别人信不信你」；<b>premium</b> 记搭配 charge / pay a premium，比记释义有用；<b>refund</b> 名动同形（ask for a refund / refund the money）；<b>dismiss</b> 是「不理会、驳回」，宾语常是 complaint、idea；<b>invest in</b> 后接对象（invest in better materials / invest in a reputation），介词固定用 in；<b>exaggerate</b> 的名词是 exaggeration，注意重音位置；<b>apology</b> 是名词（make an apology），与第 12 篇的动词 apologize 同族不同形。',
      '<b>本篇复现的旧词（共 10 处灰点）</b>：第 3 篇的 <span class=\'en\'>trust</span>、第 4 篇的 <span class=\'en\'>price / quality / brand</span>、第 12 篇的 <span class=\'en\'>customer / complaint / discount</span>、第 23 篇的 <span class=\'en\'>delay / influence</span>、第 28 篇的 <span class=\'en\'>respond → responds</span>；短语复现另有第 13 篇的 <span class=\'en\'>say sorry to</span>、第 15 篇的 <span class=\'en\'>go wrong</span>、第 10 篇的 <span class=\'en\'>instead of / in the end</span>、第 6 篇的 <span class=\'en\'>on paper</span>、第 9 篇的 <span class=\'en\'>ask for</span>、第 27 篇的 <span class=\'en\'>look for</span>。这些词正好串起「定价—顾客—投诉—回应」的商业线。',
      '<b>议论文的骨架：观点 → 证据 → 让步 → 案例 → 收束</b>：第一段立观点（声誉是做生意的成本），第二、三段给证据（招聘、定价），第四段用 <span class=\'en\'>To be fair, …</span> 让步（声誉救不了坏产品），第五、六段用一个虚构连锁餐饮的公关失误做案例，第七段讲声誉由什么构成，末段用 <span class=\'en\'>This is why …</span> 收拢结论。写同类作文时照这条线排段落，就不会散。',
      '<b>五处长难句各有结构</b>：对比＋定语从句（<span class=\'en\'>A company can buy attention … , but a reputation is earned … that no camera ever records</span>）、时间从句＋双定语从句（<span class=\'en\'>When two offers look the same on paper, an applicant will choose the firm whose former employees …</span>）、what 主语从句＋时间链＋过去完成时（<span class=\'en\'>What started as one angry post became … had already seen …</span>）、强调句的否定式（<span class=\'en\'>It is not the mistake itself that destroys a name, but the hours …</span>）、部分倒装（<span class=\'en\'>Only when … did the story begin …</span>）。先抓主干，再补修饰，是拆长句的通用顺序。',
      '<b>全文逻辑线与题型提醒</b>：声誉是什么 → 它在招聘上省钱 → 它在定价上加钱 → 让步：它救不了坏产品 → 案例：一条冷回复的代价 → 危机该怎么回应 → 声誉由可核实的行为构成 → 收束：给声誉留一行预算。推断题抓「由原文唯一推出」（例如一直降价＝名字还没被信任）；作者观点题把「重要」和「不是万能」两句合起来答；结构题按「观点 → 证据 → 让步 → 案例 → 收束」五步数段落；「作者为什么提到 X」的题，答案永远是「为了证明哪条观点」——本篇的餐饮案例证明的是「一条草率回复的代价超过原始失误」。'
    ],
    standard: {
      time: '约 55 分钟',
      bar: '阶段五议论文：阅读题 5 题对 ≥ 4 · 22 个核心词遮住中文说出 ≥ 17 · 14 个搭配掌握 ≥ 10 · 拆开 5 处长难句 · 完成 120–150 词写作与 1.5–2 分钟含反驳的口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 22 个核心词中的 17 个（reputation、premium、credibility、transparent、consequence …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '14 个高频搭配掌握 10 个，能各造一句（go viral、win back、take the blame、take … into account …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 5 处长难句各自的结构（对比与定语从句、时间从句叠加、what 主语从句、强调句否定式、部分倒装），并仿写其中 2 处',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；推断题要能说出原文依据，结构题要按五步数段落',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 10 节写 120–150 词三段式议论文，至少用上 To be fair, … 或 This is why …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1.5–2 分钟讲完「观点 → 理由 → 例子 → 反驳与回应」，反驳要先复述对方理由再回答',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 10 处灰点旧词，说出其中 8 个的意思与出处篇目',
          lvl: '加分'
        }
      ]
    }
  },
{
    id: 50,
    slug: '050-second-hand-goes-mainstream',
    title: 'Second-Hand Goes Mainstream',
    titleCn: '二手成为主流',
    stage: '阶段五 · 综合提高',
    stageRange: '第 41–50 篇',
    meta: [
      {
        k: '篇幅',
        v: '约 660 词'
      },
      {
        k: '新词密度',
        v: '约 5.6%'
      },
      {
        k: '长难句',
        v: '5 处'
      },
      {
        k: '阅读题',
        v: '5 题'
      }
    ],
    cover: 'assets/covers/050.jpg',
    coverCredit: 'Photo: Leo Arslan / Pexels',
    body: [
      'Buying used things used to be a last resort: people sold old things when they needed money and bought used ones to save money. Today the trade has gone <span class="w-cet4" data-cn="主流的、大众化的">mainstream</span>: a second-hand app is as ordinary as a shoe shop, and what unlocked the change was not price but <span class="w-rev">trust</span>. <span class="w-sentence">The market stayed small for decades not because nobody wanted cheap things, but because nobody could promise that a cheap thing still worked.</span>',
      'Why did the trade stay so small? In a shop, a bad product goes back to the shop; between two strangers, the loss lands on the buyer, stuck with a broken item. <span class="w-sentence">What a buyer cannot see is exactly what a seller would rather not mention, and the loss from that gap always landed on the person with less information.</span> Critics say the internet makes cheating easier: a seller takes the money and vanishes. That <span class="w-rev">doubt</span> is reasonable: the <span class="w-cet4" data-cn="障碍、阻碍">barrier</span> is not the <span class="w-rev">bargain</span> but the risk.',
      'Online marketplaces answered with four rules. First, they <span class="w-cet4" data-cn="核实、查证">verify</span> a seller’s identity and arrange an <span class="w-cet4" data-cn="检查、验货">inspection</span> of expensive items. Second, every deal is rated: <span class="w-synonym" data-cn="＝ trust 的名词升级词">credibility</span> becomes a number that follows a seller. Third, payment is held until the <span class="w-cet4" data-cn="包裹">parcel</span> arrives as described. Fourth, the buyer keeps a right to a <span class="w-cet4" data-cn="退款">refund</span> and a one-year <span class="w-cet4" data-cn="保修">warranty</span>. <span class="w-sentence">None of these rules is romantic, and each one costs the platform money, but together they turn a stranger’s promise into something a buyer can rely on.</span>',
      '<span class="w-writing" data-cn="诚然……">Granted,</span> no system is perfect. <span class="w-synonym" data-cn="＝ not genuine 的替换词">Counterfeit</span> goods and hidden <span class="w-cet4" data-cn="瑕疵、缺陷">flaw</span>s still slip through, and a photo can hide a great deal. What has changed is the cost of cheating: a seller who tricks one buyer loses every buyer after that, while an <span class="w-rev">honest</span> seller’s record stays public and <span class="w-cet4" data-cn="透明的、公开的">transparent</span>. Fraud has not disappeared; it has become a poor business, and a <span class="w-rev">genuine</span> item with a clear history sells faster.',
      'This is where the business logic starts: a marketplace sells trust, and it <span class="w-phrase" data-cn="盈利">makes a profit</span> through a <span class="w-cet4" data-cn="佣金、手续费">commission</span> on every <span class="w-rev">purchase</span>. That is why the <span class="w-cet4" data-cn="循环的">circular</span> economy has a business model, not a slogan: keeping a product in use creates <span class="w-cet4" data-cn="收入、收益">revenue</span>. A phone sold twice earns a fee twice. A <span class="w-cet4" data-cn="零售商">retailer</span> that lets customers <span class="w-phrase" data-cn="以旧换新、折价换购">trade in</span> an old phone extends the <span class="w-cet4" data-cn="使用寿命">lifespan</span> of the one sold before. The <span class="w-cet4" data-cn="转售、二手买卖">resale</span> of one jacket <span class="w-cet4" data-cn="促进、推动">boost</span>s the earnings of everyone in the chain and gives them an <span class="w-cet4" data-cn="激励、动因">incentive</span> to keep things moving.',
      '<span class="w-writing" data-cn="诚然……">Granted,</span> the green side of this story is easy to <span class="w-cet4" data-cn="夸大、言过其实">overstate</span>. <span class="w-sentence">The greenest product is the one that has already been made, which is why keeping a jacket in use for one more season saves the water, the cloth and the energy hidden inside it.</span> Yet cheap <span class="w-rev">prices</span> have a downside: when a jacket costs almost nothing, people buy items they end up never using, and those <span class="w-synonym" data-cn="＝ throw away 的书面替换词">discarded</span> items go to a <span class="w-rev">landfill</span>. Second-hand is green only when the item is worn, repaired or passed on, not when it is one more <span class="w-rev">impulse</span> buy.',
      'Buying used once carried a <span class="w-cet4" data-cn="污名、羞耻感">stigma</span>; today it is a sign of good sense, especially for children’s clothes, books and tools that <span class="w-phrase" data-cn="用坏、磨损失效">wear out</span> quickly. <span class="w-sentence">What turned a bargain into a daily habit was not advertising but a generation of buyers who learned to check before they paid.</span> Shoppers now look an item over, ask for real photos, <span class="w-cet4" data-cn="评估、评定">assess</span> the <span class="w-rev">quality</span> and <span class="w-phrase" data-cn="三思、多想一步">think twice</span> before they pay. The market is safer because checking has become normal.',
      '<span class="w-writing" data-cn="说到底……">What this comes down to is</span> that a <span class="w-rev">sustainable</span> habit lasts only when it is also a good deal. Second-hand went mainstream because honest sellers could prove it, because platforms earned money by keeping the trade clean, and because using a product twice costs the planet less than making it. The next time you clear out a drawer, put the good pieces up for sale, do not <span class="w-phrase" data-cn="把……扔掉">throw the contents away</span>: <span class="w-phrase" data-cn="让……重获新生">give them a second life</span>, and <span class="w-rev">donate</span> the rest. That is how a bargain becomes a good habit.'
    ],
    translation: [
      '买二手曾经是最后的退路：人们缺钱时卖掉旧东西，想省钱时买别人用过的。如今这门生意成了主流：二手应用就像街边的鞋店一样平常，而真正撬动这场变化的，不是价格，是信任。这个市场冷清了几十年，不是因为没人想要便宜东西，而是因为没人能保证便宜的东西还能用。',
      '这门生意为什么一直做不大？在商店里，坏掉的商品可以退回商店；在两个陌生人之间，损失落在买家头上，坏掉的东西只能自己留着。买家看不见的，恰恰是卖家不愿说的，而这份信息差带来的损失，总是落在知道得更少的一方。批评者还会说，网络让欺骗更容易：卖家拿了钱就可以消失。这种疑虑是合理的：障碍不是便宜，而是风险。',
      '线上交易平台用四条规则来回答。第一，核实卖家的身份，贵重物品还会安排验货。第二，每一笔交易都有评分，可信度成了一个跟着卖家走的数字。第三，货款先押在平台手里，等包裹按描述送达后才付出去。第四，买家保留退款的权利，还有一年保修。这些规则都不浪漫，每一条都要平台花钱，但合在一起，它们把一个陌生人的承诺变成了买家可以依赖的东西。',
      '诚然，没有一套系统是完美的。假货和暗伤还是会混进来，一张照片能藏下很多问题。改变的是欺骗的成本：骗过一个买家的卖家，会失去之后的所有买家，而一个诚实卖家的记录始终公开、透明。欺诈并没有消失，它只是变成了一门做不长久的生意；而来路清楚的正品，卖得更快。',
      '商业逻辑正是从这里开始：交易平台卖的是信任，靠每一笔交易的佣金盈利。这正是循环经济如今有了商业模式、而不只是口号的原因：让一件商品继续被使用，带来的是收入。一部手机卖两次，就赚两次手续费。零售商让顾客用旧手机折价换购，既延长了上一件商品的寿命，又能在替换品上再赚一次。一件外套的转售，让链条上每个人都多赚一点，也让大家有了把东西继续流转下去的理由。',
      '诚然，这个故事里环保的一面很容易被夸大。最环保的产品，是那件早已被造出来的产品；所以一件外套多穿一个季度，省下的是藏在它里面的水、布料和能源。然而便宜的价格也有自己的问题：当一件外套几乎不要钱时，人们会买下自己根本用不上的东西，而被丢掉的那一批，还是去了垃圾填埋场。二手只有在物品真的被穿、被修、被传下去时才是绿色的；当它只是又一次冲动购物时，就不是了。',
      '买二手曾经带着污名；今天它是明智的象征，尤其是孩子的衣服、书和很快用坏的工具。把便宜货变成日常习惯的，不是广告，而是一代学会了先检查再付款的买家。如今买家会把东西看一遍，索要实物照片，评估成色，并且在付款前多想一步。这个市场更安全，因为「先检查」变成了正常的事。',
      '说到底，一种可持续的习惯，只有在坚持它同时也是划算的时候才能留下来。二手成为主流，是因为诚实的卖家能证明这一点，是因为平台靠保持交易干净来赚钱，也是因为一件产品被用两次，比再造一次更省这颗星球的资源。下一次你清理抽屉，把品相好的放上去卖，别把里面的东西扔掉：让它们重获一次新生，剩下的捐出去。一次便宜的买卖，就是这样变成一个好习惯的。'
    ],
    vocabulary: [
      {
        w: 'mainstream',
        ph: '/ˈmeɪnstriːm/',
        pos: 'n./adj.',
        cn: '主流；主流的、大众化的',
        col: 'go mainstream — 成为主流；mainstream shoppers — 主流消费者',
        ex: 'Second-hand shopping has gone mainstream in less than a decade.'
      },
      {
        w: 'verify',
        ph: '/ˈverɪfaɪ/',
        pos: 'v.',
        cn: '核实、查证',
        col: 'verify an identity — 核实身份；verify a claim — 查证一种说法',
        ex: 'The platform verifies a seller before the first item goes on sale.'
      },
      {
        w: 'inspection',
        ph: '/ɪnˈspekʃn/',
        pos: 'n.',
        cn: '检查、验货',
        col: 'a careful inspection — 一次仔细的检查；pass an inspection — 通过检验',
        ex: 'A trained eye can find the flaw in a two-minute inspection.'
      },
      {
        w: 'credibility',
        ph: '/ˌkredəˈbɪləti/',
        pos: 'n.',
        cn: '可信度',
        col: 'build credibility — 建立可信度；lose credibility — 失去可信度',
        ex: 'On a marketplace, credibility is a number that follows you for years.'
      },
      {
        w: 'warranty',
        ph: '/ˈwɒrənti/',
        pos: 'n.',
        cn: '保修、保修单',
        col: 'a one-year warranty — 一年保修；under warranty — 在保修期内',
        ex: 'The phone came with a three-month warranty from the seller.'
      },
      {
        w: 'refund',
        ph: '/ˈriːfʌnd/',
        pos: 'n./v.',
        cn: '退款；退还（款项）',
        col: 'ask for a refund — 要求退款；refund the buyer — 给买家退款',
        ex: 'If the item is not as described, the buyer can ask for a refund.'
      },
      {
        w: 'parcel',
        ph: '/ˈpɑːsl/',
        pos: 'n.',
        cn: '包裹',
        col: 'send a parcel — 寄出包裹；a parcel arrives — 包裹送达',
        ex: 'The money is released only after the parcel arrives.'
      },
      {
        w: 'flaw',
        ph: '/flɔː/',
        pos: 'n.',
        cn: '瑕疵、缺陷',
        col: 'a hidden flaw — 暗伤、隐藏的瑕疵；a design flaw — 设计缺陷',
        ex: 'A photo can hide a flaw that the buyer only finds at home.'
      },
      {
        w: 'transparent',
        ph: '/trænsˈpærənt/',
        pos: 'adj.',
        cn: '透明的、公开的',
        col: 'transparent pricing — 透明的定价；be transparent about … — 对……公开透明',
        ex: 'A seller’s record is public, transparent and slow to grow.'
      },
      {
        w: 'barrier',
        ph: '/ˈbæriə(r)/',
        pos: 'n.',
        cn: '障碍、阻碍',
        col: 'a barrier to trade — 交易的障碍；remove a barrier — 移除障碍',
        ex: 'The real barrier is not the price but the risk behind it.'
      },
      {
        w: 'commission',
        ph: '/kəˈmɪʃn/',
        pos: 'n.',
        cn: '佣金、手续费',
        col: 'take a commission — 抽取佣金；a commission on every sale — 每笔交易的佣金',
        ex: 'The marketplace makes a profit through a small commission.'
      },
      {
        w: 'revenue',
        ph: '/ˈrevənjuː/',
        pos: 'n.',
        cn: '收入、收益',
        col: 'a revenue stream — 一条收入来源；earn revenue from … — 从……获得收入',
        ex: 'Keeping a product in use creates revenue, not charity.'
      },
      {
        w: 'circular',
        ph: '/ˈsɜːkjələ(r)/',
        pos: 'adj.',
        cn: '循环的',
        col: 'the circular economy — 循环经济；a circular process — 循环过程',
        ex: 'The circular economy works only when somebody earns money from it.'
      },
      {
        w: 'retailer',
        ph: '/ˈriːteɪlə(r)/',
        pos: 'n.',
        cn: '零售商',
        col: 'a large retailer — 大型零售商；an online retailer — 网络零售商',
        ex: 'Some large retailers now take old goods in part payment.'
      },
      {
        w: 'lifespan',
        ph: '/ˈlæfspæn/',
        pos: 'n.',
        cn: '使用寿命',
        col: 'extend the lifespan — 延长使用寿命；the lifespan of a phone — 一部手机的寿命',
        ex: 'A simple repair can double the lifespan of a laptop.'
      },
      {
        w: 'incentive',
        ph: '/ɪnˈsentɪv/',
        pos: 'n.',
        cn: '激励、动因',
        col: 'an incentive to do sth. — 做某事的激励；a financial incentive — 金钱上的激励',
        ex: 'People are given an incentive to keep things moving.'
      },
      {
        w: 'resale',
        ph: '/ˌriːˈseɪl/',
        pos: 'n.',
        cn: '转售、二手买卖',
        col: 'the resale market — 二手转售市场；resale value — 转售价值',
        ex: 'The resale of one jacket pays everyone in the chain.'
      },
      {
        w: 'boost',
        ph: '/buːst/',
        pos: 'v./n.',
        cn: '促进、推动；提升',
        col: 'boost sales — 拉动销售；give … a boost — 给……带来推动',
        ex: 'A clear return policy can boost a seller’s rating.'
      },
      {
        w: 'overstate',
        ph: '/ˌəʊvəˈsteɪt/',
        pos: 'v.',
        cn: '夸大、言过其实',
        col: 'overstate the case — 夸大其词；easy to overstate — 很容易被夸大',
        ex: 'The green side of the story is easy to overstate.'
      },
      {
        w: 'stigma',
        ph: '/ˈstɪɡmə/',
        pos: 'n.',
        cn: '污名、羞耻感',
        col: 'the stigma of … — ……的污名；carry a stigma — 带着污名',
        ex: 'Buying used once carried a stigma; now it does not.'
      },
      {
        w: 'assess',
        ph: '/əˈses/',
        pos: 'v.',
        cn: '评估、评定',
        col: 'assess the condition — 评估成色；assess the damage — 评估损失',
        ex: 'Assess the condition before you pay.'
      },
      {
        w: 'counterfeit',
        ph: '/ˈkaʊntəfɪt/',
        pos: 'n./adj.',
        cn: '假货；仿冒的',
        col: 'counterfeit goods — 假冒商品；a counterfeit watch — 仿冒的手表',
        ex: 'Counterfeit goods still slip through every system.'
      },
      {
        w: 'discard',
        ph: '/dɪsˈkɑːd/',
        pos: 'v.',
        cn: '丢弃、丢掉',
        col: 'discard an item — 丢掉一件物品；be discarded after one season — 用一季后被丢弃',
        ex: 'Items that are never used are discarded after one season.'
      }
    ],
    phrases: [
      {
        en: 'trade … in (for …)',
        cn: '以旧换新、折价换购（新）',
        ex: 'The retailer lets customers trade an old phone in for a new one.'
      },
      {
        en: 'give … a second life',
        cn: '让……重获新生、再用一轮（新）',
        ex: 'A repair gives an old chair a second life.'
      },
      {
        en: 'wear out',
        cn: '用坏、磨损失效（新）',
        ex: 'Children’s shoes wear out before they are outgrown.'
      },
      {
        en: 'look … over',
        cn: '仔细查看、检查一遍（新）',
        ex: 'Look the item over before you agree on a price.'
      },
      {
        en: 'make a profit',
        cn: '盈利、赚到钱（新）',
        ex: 'The platform makes a profit through a small commission.'
      },
      {
        en: 'be stuck with',
        cn: '被迫留着（不想要的东西）（新）',
        ex: 'Without a right to refund, the buyer is stuck with a broken item.'
      },
      {
        en: 'a sign of',
        cn: '……的标志、表现（新）',
        ex: 'Buying used is now a sign of good sense.'
      },
      {
        en: 'as good as new',
        cn: '像新的一样（新）',
        ex: 'After a clean and a small repair, the phone was as good as new.'
      },
      {
        en: 'throw … away',
        cn: '把……扔掉（复现第 4 篇）',
        ex: 'Do not throw the contents away: sell or donate them.'
      },
      {
        en: 'think twice',
        cn: '三思、多想一步（复现第 13 篇）',
        ex: 'Think twice before you pay a stranger in advance.'
      },
      {
        en: 'save money',
        cn: '省钱（复现第 4 篇）',
        ex: 'Buying used saves money, but only if you use the thing.'
      },
      {
        en: 'for sale',
        cn: '待售、出售（复现第 22 篇）',
        ex: 'Put the good pieces up for sale this weekend.'
      },
      {
        en: 'be worth doing sth.',
        cn: '值得做某事（复现第 22 篇）',
        ex: 'Clearing out a drawer twice a year is worth doing.'
      },
      {
        en: 'end up doing sth.',
        cn: '最终（做了）某事（复现第 22 篇）',
        ex: 'People buy cheap things they end up never using.'
      }
    ],
    writings: [
      {
        expr: 'Granted, ...',
        cn: '诚然……（让步）',
        meaning: '先承认对方或反面的合理之处，再转折到自己的主张，让论证显得公允而不软弱；适合放在论点之后、转折之前。',
        context: '第四段与第六段的段首，后面各接一层让步：系统不完美、环保收益会被夸大。',
        alts: [
          {
            t: 'Admittedly, ...',
            n: '更书面'
          },
          {
            t: 'It is true that ...',
            n: '更平实，第 42 篇用过'
          },
          {
            t: 'While this is true, ...',
            n: '把让步压进从句'
          }
        ],
        register: '中性偏书面，议论文让步的常用开场。',
        example: 'Granted, no system is perfect, and hidden flaws still slip through.'
      },
      {
        expr: 'What this comes down to is ...',
        cn: '说到底，……',
        meaning: '把前面的证据、让步、例子一次性收成一句话结论，用主语从句把长论证压短，适合放在结尾段第一句。',
        context: '结尾段的第一句，后面接全文最想留下的那个判断。',
        alts: [
          {
            t: 'In the end, ...',
            n: '更口语'
          },
          {
            t: 'The point is that ...',
            n: '更直接'
          },
          {
            t: 'What it boils down to is ...',
            n: '更口语、更生动'
          }
        ],
        register: '中性偏书面，收束语气。',
        example: 'What this comes down to is that a habit lasts only when it is also a good deal.'
      }
    ],
    sentences: [
      {
        text: 'The market stayed small for decades not because nobody wanted cheap things, but because nobody could promise that a cheap thing still worked.',
        points: [
          '<b>主干</b>：The market stayed small for decades；后面 <b>not because …, but because …</b> 是一对并列的原因状语从句，一否定一肯定，专用来纠正读者的默认猜测。',
          '<b>结构价值</b>：先否定「便宜所以没人买」这个直觉答案，再给出真正原因，这是议论文开头立论最省力的办法；not 与 but 必须成对出现，缺一个句子就散了。',
          '<b>词汇点</b>：stay ＋ 形容词（stayed small）表示「一直保持某种状态」；promise 后接 that 宾语从句，cheap thing still worked 是从句内容。',
          '<b>为什么值得学</b>：写作的「原因解释」段落可以直接仿写这个骨架：The problem remained not because …, but because …。',
          '<b>常见变体</b>：He failed not because he was lazy, but because nobody checked the plan.'
        ]
      },
      {
        text: 'What a buyer cannot see is exactly what a seller would rather not mention, and the loss from that gap always landed on the person with less information.',
        points: [
          '<b>主干</b>：What a buyer cannot see is what a seller would rather not mention —— 主语和表语都是 <b>what</b> 引导的名词性从句，两个从句「看不见的＝不愿说的」首尾相扣，本身就是论证。',
          '<b>并列句</b>：and 之后是第二个独立分句，the loss from that gap 是主语，landed on the person with less information 是谓语部分；with less information 是介词短语作定语。',
          '<b>时态</b>：前半句用现在时讲普遍规律，后半句用过去时 landed 讲过去市场做不大的原因，一个句子里两种时态，各管各的时间范围。',
          '<b>为什么值得学</b>：把「信息不对称」这种抽象概念写成两个 what 从句的对仗，是议论文化抽象为形象的好例子。',
          '<b>写作迁移</b>：What the report cannot show is exactly what readers want to know.'
        ]
      },
      {
        text: 'None of these rules is romantic, and each one costs the platform money, but together they turn a stranger’s promise into something a buyer can rely on.',
        points: [
          '<b>主干</b>：三个并列分句由 and 与 but 串起：前两分句先让步（不浪漫、要花钱），第三分句给出结论，形成「先抑后扬」的节奏。',
          '<b>语法点</b>：<b>none of ＋ 复数名词</b> 后的谓语用单数 is（正式写法）；each one 的 one 指代前面的 rule，避免重复名词。',
          '<b>搭配</b>：turn A into B（把甲变成乙）复现了旧短语；rely on 后接名词，something a buyer can rely on 是「代词＋省略 that 的定语从句」。',
          '<b>为什么值得学</b>：写「几条措施合起来才有用」时，与其列清单，不如用这种三段并列收口，读者更容易记住结论。',
          '<b>注意点</b>：stranger’s 的所有格撇号别写成 strangers；promise 在这里是可数名词。'
        ]
      },
      {
        text: 'The greenest product is the one that has already been made, which is why keeping a jacket in use for one more season saves the water, the cloth and the energy hidden inside it.',
        points: [
          '<b>主干</b>：The greenest product is the one …，表语 the one 后接 <b>that 定语从句</b>（that has already been made），完成时的被动强调「早就造出来了」。',
          '<b>非限定定语从句</b>：which is why … 的 which 指代前面整句话，why 引导<b>表语从句</b>；这种「…, which is why …」是解释因果最顺手的写法。',
          '<b>动名词主语</b>：keeping a jacket in use for one more season 是 why 从句里的主语，动名词短语作主语，谓语用单数 saves。',
          '<b>排比收尾</b>：the water, the cloth and the energy 三项并列，最后用 hidden inside it 收住，读起来有节奏感。',
          '<b>为什么值得学</b>：这是全文的环保论点句，一句话同时训练定语从句、表语从句、动名词主语三种结构。'
        ]
      },
      {
        text: 'What turned a bargain into a daily habit was not advertising but a generation of buyers who learned to check before they paid.',
        points: [
          '<b>主干</b>：<b>What</b> 引导主语从句（What turned a bargain into a daily habit）＋ was ＋ not A but B 并列表语，主干其实是「让习惯成型的是买家，不是广告」。',
          '<b>结构组合</b>：主语从句里又嵌了 turn A into B；表语 a generation of buyers 后再接 <b>who 定语从句</b>，一句话三层，是阶段五最常见的「嵌套句」。',
          '<b>时态呼应</b>：主句用过去时 turned / was 讲历史变化，定语从句用 learned to check before they paid 讲这批买家的做法，时间线一致。',
          '<b>为什么值得学</b>：把「观念变化」归因到人而不是广告，是议论文里反驳消费主义套路的常用论点；句式可整体搬到别的主题。',
          '<b>常见变体</b>：What made the market grow was not price but a habit of checking.'
        ]
      }
    ],
    questions: [
      {
        en: 'What can we infer about a seller who tricks one buyer on a marketplace where every deal is rated?',
        cn: '在一个每笔交易都有评分的平台上，我们可以推出骗过一个买家的卖家会怎样？',
        ans: 'The seller loses every buyer after that, because the bad record follows them for years.',
        ansCn: '这个卖家会失去之后的所有买家，因为那条坏记录会跟随他很多年。'
      },
      {
        en: 'Why does the writer say that cheap second-hand prices can destroy the environmental benefit?',
        cn: '作者为什么说便宜的二手价格会毁掉环保收益？',
        ans: 'Because when a jacket costs almost nothing, people buy items they end up never using, and those discarded items go straight to a landfill.',
        ansCn: '因为当一件外套几乎不要钱时，人们会买下自己根本用不上的东西，而被丢掉的那一批最后还是进了垃圾填埋场。'
      },
      {
        en: 'What is the writer’s view on what really made the second-hand market grow?',
        cn: '作者认为二手市场真正做大靠的是什么？',
        ans: 'That solving the trust problem — not a love of old things and not price alone — is what made the market grow.',
        ansCn: '是解决了信任问题，而不是人们突然爱上旧东西，也不只是价格便宜，才让这个市场做大。'
      },
      {
        en: 'How is the text organised?',
        cn: '这篇文章的篇章结构是怎样的？',
        ans: 'It starts from the old trust problem, then shows how platforms solved it, then turns to the business and environmental logic with two concessions, and ends with what makes the change last.',
        ansCn: '先写过去信任缺失的问题，再写平台如何补上信任，接着讲商业与环保两层逻辑并各作一次让步，最后收束在「什么能让这场变化持续」。'
      },
      {
        en: 'Why does the writer mention a phone that is sold twice?',
        cn: '作者为什么提到一部被卖两次的手机？',
        ans: 'To show that keeping a product in use creates revenue, so the circular economy has a real business model rather than a slogan.',
        ansCn: '为了说明让一件商品继续被使用能带来收入，所以循环经济是真有商业模式，而不只是口号。'
      }
    ],
    writingTask: {
      en: 'Write 120–150 words about whether buying second-hand is mainly a matter of trust, price or the environment: give your view, one piece of evidence, one concession and a conclusion.',
      hints: [
        'Second-hand trading has gone mainstream because ...',
        'Granted, ... still slip through, but ...',
        'What this comes down to is that ...'
      ],
      hintCn: '三段式：第一段亮出观点（信任／价格／环境三选一）并给理由；第二段用一个具体机制或例子当证据，再用 Granted, … 让步承认另一面也有道理；第三段用 What this comes down to is … 收束立意。120–150 词里至少出现一个具体数字或场景。',
      req: '至少使用 3 个本篇学过的词或搭配（verify / warranty / commission / lifespan / trade … in / make a profit / think twice …）。'
    },
    speakingTask: {
      en: 'Answer in 1.5–2 minutes. Give your view, one reason and one example, then answer one counterargument.',
      points: [
        'Your view: what made second-hand go mainstream — trust, price or the environment?',
        'One reason for that view, with one piece of evidence',
        'One example with a time, a place or a number',
        'One counterargument and your answer to it'
      ],
      pointCn: '1.5–2 分钟里讲完「观点 → 理由 → 例子 → 反驳」四步；例子要带具体的时间、数字或场景，反驳要先复述对方的理由再回应，不能只说「有人不同意」。',
      skeleton: 'In my view, second-hand went mainstream mainly because ... The reason is that ... For example, when I ... , the platform ... Some people may say that ... , but I would answer that ... To sum up, ...'
    },
    focus: [
      '<b>新授核心词 23 个</b>：<span class=\'en\'>mainstream, verify, inspection, credibility, warranty, refund, parcel, flaw, transparent, barrier, commission, revenue, circular, retailer, lifespan, incentive, resale, boost, overstate, stigma, assess, counterfeit, discard</span> —— 记法：买前买后的「信任链」按顺序记 <span class=\'en\'>verify → inspection → credibility → warranty → refund</span>，五个词就是一次完整交易；<b>commission</b> 是「每单抽成」，<b>revenue</b> 是「总收入」，不要互换；<b>lifespan</b> 指物品的「使用寿命」，可对照第 16 篇的 <span class=\'en\'>lifetime</span>；<b>counterfeit</b>（假货）与 <b>discard</b>（丢弃）在正文里用同义替换教（＝ not genuine、＝ throw away），写作时可当升级词。',
      '<b>本篇复现的旧词（本篇是全课程收官节点篇，共 12 处灰点）</b>：第 3 篇的 <span class=\'en\'>trust / honest</span>、第 4 篇的 <span class=\'en\'>price</span>、第 7 篇的 <span class=\'en\'>quality</span>、第 22 篇的 <span class=\'en\'>doubt / bargain / genuine / purchase / donate</span>、第 27 篇的 <span class=\'en\'>impulse</span>、第 35 篇的 <span class=\'en\'>landfill</span>、第 38 篇的 <span class=\'en\'>sustainable</span>；短语复现另有第 4 篇的 <span class=\'en\'>save money / throw … away</span>、第 13 篇的 <span class=\'en\'>think twice</span>、第 22 篇的 <span class=\'en\'>for sale / be worth doing sth. / end up doing sth.</span>。',
      '<b>五处长难句，一种结构一句</b>：<span class=\'en\'>not because … but because …</span>（并列原因对比）、<span class=\'en\'>What a buyer cannot see is …</span>（双 what 从句作主语与表语）、<span class=\'en\'>None of these rules is … , and … , but together …</span>（三重并列先抑后扬）、<span class=\'en\'>the one that has already been made, which is why …</span>（定语从句接非限定定语从句）、<span class=\'en\'>What turned a bargain into a daily habit was not … but …</span>（主语从句＋定语从句嵌套）—— 阶段五要求的多层结构在这五句里各收一例，都拆在长难句解析里了。',
      '<b>动作链搭配，按「买前—交易—用后」记</b>：买前 <span class=\'en\'>look … over / assess the quality / think twice</span> → 交易中 <span class=\'en\'>trade … in / make a profit</span> → 用后 <span class=\'en\'>wear out / give … a second life / throw … away</span>。写作里按时间链排搭配，段落自然成形；注意 <span class=\'en\'>refund</span>（退款）与 <span class=\'en\'>warranty</span>（保修）是两回事，别混用。',
      '<b>全文逻辑线与题型提醒</b>：二手为何曾是小生意（信息差与信任）→ 平台四条规则如何补信任 → 让步：假货与暗伤仍在，但骗人的成本变了 → 循环经济的商业逻辑（佣金、转售、折价换购）→ 让步：便宜会引来冲动购物 → 买家习惯与污名消失 → 收束（可持续的习惯必须同时划算）。推断题抓「评分让欺骗变得怎样」「便宜为什么反而不环保」；作者观点题抓首段与末段的呼应；结构题按这条逻辑线作答；「作者为什么提到卖两次的手机」＝证明循环经济有钱可赚、不是口号。',
      '<b>⭐ 本阶段复盘 · 词汇抽查</b>：盖住释义，认一认这 10 个旧词 —— <span class=\'en\'>afford</span>（第 1 篇）、<span class=\'en\'>opinion</span>（第 2 篇）、<span class=\'en\'>encourage</span>（第 3 篇）、<span class=\'en\'>compare</span>（第 4 篇）、<span class=\'en\'>hesitate</span>（第 11 篇）、<span class=\'en\'>assume</span>（第 13 篇）、<span class=\'en\'>consumer</span>（第 22 篇）、<span class=\'en\'>strategy</span>（第 24 篇）、<span class=\'en\'>measure</span>（第 30 篇）、<span class=\'en\'>consistent</span>（第 32 篇）。任何两个想不起来的，写进毕业复习清单；顺带检查本篇 12 处灰点是否都能说出出处篇目。',
      '<b>⭐ 本阶段复盘 · 毕业自评</b>：第 50 篇兼作综合毕业测试，请在做完本篇后按四个维度自评：一、能否不查词典、不看释义在 12 分钟内通读 600 词以上的议论（本篇正文约 660 词）；二、推断题与「作者为什么提到 X」题的正确率是否稳定在八成以上（本篇这两类共 3 题）；三、120–150 词三段式写作能否在 20 分钟内完成，且让步句与结论句各有一句；四、1.5–2 分钟带反驳的口语能否不停顿讲完「观点 → 理由 → 例子 → 反驳」。四条里有两条没达标，就把对应篇目（消费类第 22、27 篇，环境类第 26、35 篇，习惯类第 38 篇）重做一遍；都达标了，就照这五十篇的路子自己往下读 —— 课程在这里收尾，学习不收尾。'
    ],
    standard: {
      time: '约 55 分钟',
      bar: '阶段五收官 · 综合毕业测试：阅读题 5 题对 ≥ 4 · 23 个核心词遮住中文说出 ≥ 18 · 拆开 5 处长难句 · 完成 120–150 词写作与 1.5–2 分钟含反驳的口语',
      items: [
        {
          k: '词汇',
          v: '遮住中文能说出 23 个核心词中的 18 个（verify、warranty、commission、lifespan、credibility …）',
          lvl: '必达'
        },
        {
          k: '搭配',
          v: '14 个高频搭配掌握 11 个，能各造一句（trade … in、make a profit、wear out、give … a second life …）',
          lvl: '建议'
        },
        {
          k: '长难句',
          v: '说出 5 处长难句各自的结构（not because … but because … / 双 what 从句 / 三重并列 / 非限定定语从句 / 主语从句加定语从句），并仿写其中 2 处',
          lvl: '必达'
        },
        {
          k: '阅读题',
          v: '5 题至少对 4 题；第 5 题要说出「卖两次的手机」证明的是哪一层意思',
          lvl: '必达'
        },
        {
          k: '写作',
          v: '按 10 节写 120–150 词，至少用上 Granted, … 或 What this comes down to is …',
          lvl: '必达'
        },
        {
          k: '口语',
          v: '1.5–2 分钟讲完「观点 → 理由 → 例子 → 反驳」，反驳要先复述对方理由再回应',
          lvl: '建议'
        },
        {
          k: '复现',
          v: '点划正文里 12 处灰点旧词，说出其中 9 个的意思和出处篇目，再对照 focus 第 7 条做毕业自评',
          lvl: '加分'
        }
      ]
    }
  }
];
