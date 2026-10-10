export type FloatingItem = {
  id: number;
  type: "heart" | "particle";
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  sway: number;
};

export const birthdayContent = {
  opening: {
    eyebrow: "For My Love",
    heading: "This Is Our Story...",
    supportingText:
      "Not a story I imagined. A story that slowly happened, one conversation, one memory, and one feeling at a time. ❤️",
  },

  reveal: { name: "Muskaan" },

  reasons: [
    {
      title: "01 — You Never Judge Me",
      message:
        "With you, I can be myself. You listen, understand me, and make me feel safe enough to be honest.",
    },
    {
      title: "02 — The Way You Care",
      message:
        "You notice when something is wrong with me. You know when I need you, even when I don't say it.",
    },
    {
      title: "03 — You Believe In Me",
      message:
        "When I doubt myself, you remind me: Umair, you can do it. You are the best. You can do everything you want.",
    },
    {
      title: "04 — You Give Me Your 100%",
      message:
        "You have given me more care, help, respect, and support than I ever expected from anyone.",
    },
    {
      title: "05 — You Changed Me",
      message:
        "You taught me things about life, showed me realities I didn't understand, and helped me become a better version of myself.",
    },
  ],

  playfulWords: {
    heading: "The Words I Secretly Love Hearing From You 😭❤️",
    subheading:
      "You probably don't realize it, but even your little roasts and random words have become some of my favorite things.",
    cards: [
      {
        id: 1,
        phrase: "Thappar marungi 😭",
        message:
          "You say it like a warning, but somehow I still end up smiling because it's you saying it.",
        emoji: "😂",
      },
      {
        id: 2,
        phrase: "Kuch bh nahi hoa",
        message:
          "That little way you say it has somehow become one of those things I can hear in my head and instantly smile.",
        emoji: "🥹",
      },

      {
        id: 3,
        phrase: "Miss you yar 🥹❤️",
        message:
          "Whenever you say 'Miss you yar,' all I want is to hug you tightly and never let you go. 🥹❤️ I just wish I could hold you in my arms a little longer.",
        emoji: "😭",
      },


      {
        id: 4,
        phrase: "Abey o",
        message:
          "The way you say 'abey o' is so you. And yes, somehow I actually love hearing it.",
        emoji: "😂",
      },
      {
        id: 5,
        phrase: "Bohat Hansi nahi arhi?",
        message:
          "I never expected that one day I would love hearing this from you. It's just something about the way you say it that makes me smile.",
        emoji: "😂",
      },
      {
        id: 6,
        phrase: "Arey janeman ❤️",
        message:
          "Coming from you, even two simple words can completely change my mood.",
        emoji: "❤️",
      },
      {
        id: 7,
        phrase: "Janu 🥺",
        message:
          "I don't think you realize what happens to me when you call me this. I literally melt.",
        emoji: "🫠",
      },
      {
        id: 8,
        phrase: "Babe bolo na 🫠",
        message:
          "Oho, hearing this from you is honestly the best feeling ever.",
        emoji: "🫠",
      },
      {
        id: 9,
        phrase: "Hmmmmm hmmmmm",
        message:
          "I don't even know how to explain it. It's just one of those little sounds that became completely yours.",
        emoji: "😭",
      },
    ],
  },

  memories: [
    {
      id: 1,
      title: "The First Time We Met — 2023",
      caption:
        "When I joined school in 2023, I met you. Back then, we weren't close, and I had no idea how important you would become to me.",
      date: "2023",
      imageUrl: "/memories/memory-1-school.jpg",
      placeholderHue: "from-rose-950/60 via-rose-900/30 to-pink-950/40",
    },
    {
      id: 2,
      title: "We Met Again — December 2025",
      caption:
        "You came back in December 2025. We met again, but we still didn't really talk. Somehow, life was quietly bringing us closer.",
      date: "December 2025",
      imageUrl: "/memories/memory-2-december.jpg",
      placeholderHue: "from-amber-950/50 via-rose-900/30 to-rose-950/50",
    },
    {
      id: 3,
      title: "March 27, 2026 — The Picture",
      caption:
        "Annual result day. Bilal told me to take a mobile to you because you had an iPhone. I asked you for your phone, we took pictures together, and then you gave me your Instagram. I didn't know that little moment would change everything.",
      date: "March 27, 2026",
      imageUrl: "/memories/march-27-polaroid.jpg",
      placeholderHue: "from-pink-950/60 via-rose-900/25 to-rose-950/50",
    },
    {
      id: 4,
      title: "From Reels To Every Day",
      caption:
        "You sent me those pictures. Then we started talking through reels. One conversation became another, and slowly talking to you became part of my everyday life.",
      date: "Spring 2026",
      imageUrl: "/memories/memory-4-reels.jpg",
      placeholderHue: "from-rose-950/50 via-purple-950/20 to-rose-900/40",
    },
    {
      id: 5,
      title: "Your Fragrance, My Favorite Feeling ❤️",
      caption:
        "I love your fragrance so much. ❤️🥹 Whenever you walk past me, I can smell it, and for a moment, I just feel something special. It's a little thing, but the feeling stays with me.",
      date: "2026",
      imageUrl: "/memories/memory-5-fragrance.jpg",
      placeholderHue: "from-rose-950/50 via-purple-950/20 to-rose-900/40",
    },
    {
      id: 6,
      title: "A Feeling I'll Never Forget ❤️",
      caption:
        "The moment you accepted my gift, wore it, and made a Snapchat video to show me, OMG, that feeling was unreal. 🥹❤️ Seeing you wear something I gave you and hearing you share your feelings made me so happy. A little moment, but one I'll remember for the rest of my life.",
      date: "2026",
      imageUrl: "/memories/memory-6-gift.jpg",
      placeholderHue: "from-pink-950/60 via-rose-900/30 to-purple-950/40",
    },
  ],

  doYouRemember: {
    question: "Do you remember how our story really started? ❤️",
    buttons: [
      {
        id: "yes",
        label: "YES ❤️",
        response: {
          emoji: "🥺",
          heading: "That Little Moment...",
          message:
            "Maybe it looked like just a picture and an Instagram account at the time. But for me, it became the beginning of something I never expected to feel this deeply.",
        },
      },
      {
        id: "ofcourse",
        label: "Of course 😭",
        response: {
          emoji: "😭❤️",
          heading: "You Remember...",
          message:
            "I hope you remember it too. Because March 27, 2026 became one of those dates that I will always keep somewhere special in my heart.",
        },
      },
    ],
  },

  story: [
    {
      chapter: "The Beginning",
      date: "2023",
      title: "I Didn't Know What You Would Become To Me",
      lead: "When I met you in 2023,",
      body:
        "I never imagined that one day you would become such an important part of my life. We weren't close then. You left, and life moved on. I had no idea our story wasn't finished.",
      icon: "✦",
    },
    {
      chapter: "The Second Meeting",
      date: "December 2025",
      title: "You Came Back",
      lead: "Then December 2025 came...",
      body:
        "You came back, and we met again. Still, we didn't really talk. Looking back now, it feels strange to think that the person who would eventually become so important to me was right there, and I didn't know what was coming.",
      icon: "❤",
    },
    {
      chapter: "The Day Everything Changed",
      date: "March 27, 2026",
      title: "One Picture, One Instagram, One Beginning",
      lead: "I still remember that day.",
      body:
        "It was annual result day. Bilal told me to take a mobile to you because you had an iPhone. I went and asked if you could give me your phone. You did. We took pictures together. Then you gave me your Instagram, sent me the pictures, and somehow that simple moment opened the door to everything that came after.",
      icon: "✦",
    },
    {
      chapter: "Everyday Us",
      date: "Spring 2026",
      title: "Reels Became Conversations",
      lead: "Then we started talking...",
      body:
        "First it was reels. Then daily conversations. Slowly, talking to you became something I looked forward to every single day. It stopped feeling like just a conversation and started feeling like a part of my life.",
      icon: "❤",
    },
    {
      chapter: "Late Nights",
      date: "June 2026",
      title: "The Conversations Got Deeper",
      lead: "In June, the nights became different.",
      body:
        "We started talking late at night. Those conversations made me know you in a different way. I started understanding your heart, your thoughts, and the things you don't always show everyone.",
      icon: "✦",
    },
    {
      chapter: "Getting Closer",
      date: "July 2026",
      title: "I Started Seeing The Real You",
      lead: "July brought us closer.",
      body:
        "We started talking face-to-face more. I saw how you cared for me, helped me, respected me, and gave me your time. I realized that you weren't just someone I enjoyed talking to. You were someone who genuinely mattered to me.",
      icon: "❤",
    },
    {
      chapter: "You Believed In Me",
      date: "August 10, 2026",
      title: "When I Started My Internship",
      lead: "Then I started my internship.",
      body:
        "On August 10, I started my job. You cared about me, motivated me, and made me believe I could do it. You would tell me, 'Umair, you can do it. You are the best. You can do everything you want.' I don't think you realize how much those words mean to me.",
      icon: "✦",
    },
    {
      chapter: "The Moment I Realized",
      date: "August 2026",
      title: "When I Saw How Much We Were Attached",
      lead: "There is one moment I can never forget.",
      body:
        "I remember the day I told you that I might leave this school. You started crying in front of me. Seeing you cry because of the thought of me leaving made me realize something I already felt deep inside — we had become emotionally attached to each other. It wasn't just me who felt this connection. Somewhere along the way, we had become important to each other. That moment stayed with me because I could see how much our bond meant to you, and I realized how much you meant to me too.",
      icon: "❤",
    },
    {
      chapter: "When I Finally Told You",
      date: "August 2026",
      title: "I Had Already Fallen In Love",
      lead: "By August, I couldn't keep it inside anymore.",
      body:
        "I had already fallen in love with you before I expressed it. August was simply the month when I finally told you how I felt. And the more I know you, the deeper those feelings become.",
      icon: "❤",
    },
    {
      chapter: "What You Became To Me",
      date: "Today",
      title: "You Became Part Of My Heart",
      lead: "I don't love you only because you make me happy.",
      body:
        "I want to give you more happiness too. I want to see you smile, and I want to be one of the reasons behind that smile. I want to help you whenever you need me, be there for you when you're feeling low, and always try to be available when you need someone. I want to give you the same care and support that you have given me.",
      icon: "✦",
    },
  ],

  letter: {
    tagline: "From My Heart",
    salutation: "Dearest Chatpatti,",
    paragraphs: [
      "I don't want to give you dreamy words just because they sound beautiful. I want you to know that what I feel for you is real.",
      "I know you have been through things that have hurt you. I know you have difficult days, low moments, and sometimes your mood changes. But even after everything, you still give me so much care, respect, help, and love. You have given me more than I ever expected.",
      "You have genuinely changed me. You have taught me about the reality of the world. You have helped me when I needed you. You motivate me when I doubt myself. And when you tell me, 'Umair, you can do it,' something inside me believes it a little more.",
      "I know sometimes I irritate you. I know I'm not perfect. But I never want to intentionally hurt you. I want to understand you, support you, and be someone who makes you smile.",
      "When you're down, I want to be there. When you're happy, I want to celebrate with you. I want to give you the same 100% that you have given me.",
      "Sometimes I look at your pictures and smile and blush without even realizing it. When I'm with you, everything around me becomes a blur. I notice your expressions, your style, your posture, even your fragrance. I notice the little things because somehow, everything about you matters to me.",
      "May God bless you with happiness, peace, and everything beautiful in life. More than anything, I want you to be happy.",
      "I don't know exactly what the future will look like, but I know I want to keep trying. I want to give you my time, effort, respect, loyalty, care, and everything I can.",
      "I love you, dear. ❤️",
    ],
    closing: "With all my heart,",
    signature: "Umair ❤️",
  },

  thingsYouDontKnow: {
    heading: "Things You Might Not Know About Me...",
    subheading: "Tap each one to see what I keep in my heart.",
    cards: [
      {
        id: 1,
        title: "The Little Things",
        hint: "Tap to reveal ✨",
        message:
          "I literally look at your pictures and suddenly find myself smiling and blushing. You have that effect on me. ❤️",
        emoji: "💫",
      },
      {
        id: 2,
        title: "When You're Down",
        hint: "Tap to reveal ✨",
        message:
          "When you're feeling low, I don't feel normal either. Your mood somehow reaches me, because you have become that important to me.",
        emoji: "🤍",
      },
      {
        id: 3,
        title: "When You're Quiet",
        hint: "Tap to reveal ✨",
        message:
          "When you're silent, my heart starts beating faster. I start wondering if you're okay and wishing I could make you feel better.",
        emoji: "🌙",
      },
      {
        id: 4,
        title: "Your Motivation",
        hint: "Tap to reveal ✨",
        message:
          "One of the things I love most is hearing you tell me, 'Umair, you can do it.' Your belief in me makes me want to work harder.",
        emoji: "🌸",
      },
      {
        id: 5,
        title: "What I Really Want",
        hint: "Tap to reveal ✨",
        message:
          "I don't just want beautiful moments with you. I want to be there through the difficult ones too. I want to keep choosing you and keep trying.",
        emoji: "❤️",
      },
      {
        id: 6,
        title: "The Day I Knew",
        hint: "Tap to reveal ✨",
        message:
          "When I told you I might leave this school and you cried in front of me, I realized how deeply attached we had become. That moment meant more to me than I ever told you.",
        emoji: "🥺",
      },
    ],
  },

  toMyMiss: {
    eyebrow: "To My Miss ✦",
    heading: "How You Changed Me, Miss ❤️",
    subheading:
      "Before you came into my life, I didn't really know my own worth. You taught me, guided me, and made me who I am today.",
    cards: [
      {
        id: 1,
        tag: "01",
        title: "Growing Into A Better Me 🌱",
        quote: "You taught me how to recognize my own value",
        text: "Before you came into my life, I didn't really know how to understand my feelings, manage my emotions, or even see my own worth. But you slowly changed so much about me. ❤️ You taught me how to take care of myself, how to groom myself, how to carry myself, and how to recognize my own value. I can genuinely see myself growing and becoming a better version of me because of you.",
        emoji: "🌱",
        accentGlow: "from-rose-500/15 via-rose-500/5 to-transparent",
        badge: "Growth & Self-Worth",
      },
      {
        id: 2,
        tag: "02",
        title: "Learning From You 🥹",
        quote: "“Umair, wear it like this, do this, try this...”",
        text: "I love learning from you, even the smallest things. The way you tell me, “Umair, wear it like this, do this, try this,” means more to me than you know. 🥹 You're not just someone I love; you're someone I learn from, someone who inspires me, and someone who brings out a better side of me.",
        emoji: "✨",
        accentGlow: "from-amber-500/15 via-amber-500/5 to-transparent",
        badge: "My Inspiration",
      },
      {
        id: 3,
        tag: "03",
        title: "Comfort & Peace For Your Heart 🕊️",
        quote: "I can't change your past, but I want to bring peace into your life",
        text: "I know you've been through a lot and carry past traumas that may have hurt you deeply. ❤️ I can't change your past, but I want to bring happiness, comfort, and peace into your life. I want to see you smile, feel loved, and know that you deserve all the beautiful things life has to offer. I'll always try my best to make you happy and support you in every way I can.",
        emoji: "🤍",
        accentGlow: "from-pink-500/15 via-pink-500/5 to-transparent",
        badge: "Comfort & Healing",
      },
      {
        id: 4,
        tag: "04",
        title: "Your Expressions & Smile 🌸",
        quote: "Miss, I love your expressions and the way you talk",
        text: "Miss, I love your expressions, the way you talk, the way you share your feelings, and every little thing about you. 🥹❤️ I love seeing you express yourself freely and happily. I want you to always be this happy, to keep that beautiful smile on your face, and to feel safe enough to be yourself around me.",
        emoji: "💖",
        accentGlow: "from-rose-500/15 via-purple-500/5 to-transparent",
        badge: "Pure Happiness",
      },
      {
        id: 5,
        tag: "05",
        title: "You Never Have To Be Alone 🌙",
        quote: "“You never have to pretend to be okay with me.”",
        text: "And whenever you feel lonely, not well, please tell me. ❤️ You don't have to hide your feelings or go through everything alone. I'm always here to listen to you, understand you, and give you comfort whenever you need it. You never have to pretend to be okay with me. 🫶🏻",
        emoji: "🫂",
        accentGlow: "from-indigo-500/15 via-rose-500/5 to-transparent",
        badge: "Always Here",
      },
    ],
    closing: {
      message:
        "I'm so grateful for you, for everything you've taught me, and for the person I'm becoming with you in my life.",
      declaration: "Miss, I love you so, so much. ❤️🥹🫶🏻",
      signature: "With endless love & gratitude, Umair ❤️",
    },
  },

  ourFuture: {
    eyebrow: "Looking Ahead ✦",
    heading: "I Want To Be Your Person",
    subheading:
      "Not someone who only stays when everything is easy. Someone who keeps trying when life gets difficult.",
    cards: [
      {
        id: 1,
        title: "Your Happiness ❤️",
        description:
          "I want to see you genuinely happy. Your smile and laugh can change my entire day.",
        tag: "01",
      },
      {
        id: 2,
        title: "Being There 🌙",
        description:
          "When you're low, quiet, stressed, or simply having a difficult day, I want you to know I'm here.",
        tag: "02",
      },
      {
        id: 3,
        title: "Growing Together ✨",
        description:
          "You have helped me grow, and I want us to keep helping each other become better versions of ourselves.",
        tag: "03",
      },
      {
        id: 4,
        title: "Giving My 100% 🤍",
        description:
          "I want to give you effort, respect, patience, care, loyalty, and the same 100% you have given me.",
        tag: "04",
      },
      {
        id: 5,
        title: "Choosing Us ❤️",
        description:
          "No matter what life brings, I want to keep trying for us instead of walking away when things become difficult.",
        tag: "05",
      },
    ],
  },

  chooseYourGift: {
    heading: "Choose Your Birthday Gift 🎁",
    subheading:
      "Three little promises from me. Pick whichever one your heart wants first.",
    options: [
      {
        id: "A",
        label: "A ❤️",
        title: "Gift Box A: Always Be There",
        message:
          "A promise that when you need someone, I'll try my best to be there. On your happiest days, your lowest days, and all the ordinary days in between. 🤍",
        emoji: "🧸",
      },
      {
        id: "B",
        label: "B 💕",
        title: "Gift Box B: Make You Smile",
        message:
          "A promise that I'll keep trying to bring your smile back whenever life makes things heavy. Because your happiness genuinely matters to me. ✨",
        emoji: "🌸",
      },
      {
        id: "C",
        label: "C 😭",
        title: "Gift Box C: My 100%",
        message:
          "Not a promise of perfection. A promise of effort. My time, care, respect, support, loyalty, and everything I can honestly give you. ❤️",
        emoji: "👑",
      },
    ],
  },

  hiddenMessage: {
    heading: "There Is One More Thing I Want You To Know...",
    hint: "Tap the hearts in the right order to unlock it",
    successHeading: "You Found My Heart ❤️",
    clue: "L • O • V • E",
    hearts: [
      { id: "h1", letter: "L", label: "01", symbol: "💖" },
      { id: "h2", letter: "O", label: "02", symbol: "🌙" },
      { id: "h3", letter: "V", label: "03", symbol: "✨" },
      { id: "h4", letter: "E", label: "04", symbol: "❤️" },
    ],
    sequence: ["h1", "h2", "h3", "h4"],
    secretMessage: {
      eyebrow: "What My Heart Really Wanted To Say",
      title: "I Want To Keep Trying For Us",
      body:
        "You became someone I never expected to love this deeply. I don't want to give you perfect words. I want to give you real effort, real care, and a heart that genuinely wants to see you happy. When you're down, I want to be there. When you smile, I want to smile with you. I love you, and I want to keep choosing you.",
      signature: "Forever trying for us ❤️",
    },
  },

  finalSurprise: {
    introWait: "Wait...",
    introForgot: "I almost forgot to tell you the most important thing.",
    boxBadge: "For Someone Incomparable",
    buttonLabel: "Open The Final Gift 🎁",
    card: {
      eyebrow: "The Grand Finale",
      heading: "If I Could Give You One Thing... ❤️",
      message:
        "I would give you the feeling of knowing that you never have to question whether I care. I know I'm not perfect. I know I can irritate you sometimes. But my feelings for you are real. I want to see you happy, I want to support you, and I want to keep trying to become the person you deserve.",
      signature: "With all my heart, Umair ❤️",
    },
  },

  ending: {
    heading: "Happy Birthday, My Chatpatti. ❤️",
    message:
      "From meeting you in 2023, to finding our way back to each other in December 2025, to that picture on March 27, 2026, to reels, daily conversations, late nights, face-to-face talks, your support, your motivation, and finally telling you how I feel in August — somehow, all those little moments brought me here. I don't know exactly where life will take us, but I know that I am grateful I found you. May God bless you, protect your heart, and give you a life full of happiness. I love you, dear.",
    signoff: "Always trying for you,",
    senderName: "Umair ❤️",
  },

  burstHearts: [
    { tx: "-80px", ty: "-120px", delay: "0s", rotate: "-20deg" },
    { tx: "90px", ty: "-110px", delay: "0.05s", rotate: "15deg" },
    { tx: "-50px", ty: "-160px", delay: "0.1s", rotate: "-10deg" },
    { tx: "60px", ty: "-155px", delay: "0.08s", rotate: "25deg" },
    { tx: "-130px", ty: "-80px", delay: "0.12s", rotate: "-30deg" },
    { tx: "130px", ty: "-75px", delay: "0.06s", rotate: "30deg" },
    { tx: "0px", ty: "-180px", delay: "0.15s", rotate: "0deg" },
    { tx: "-100px", ty: "-140px", delay: "0.18s", rotate: "-15deg" },
  ],
} as const;
