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
    coverCredit: 'Photo: 待补 / Pexels',
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
  }
];
