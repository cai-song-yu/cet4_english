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
  }
];
