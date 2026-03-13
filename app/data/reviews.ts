export interface Review {
  id: string;
  productId: string;
  author: {
    name: string;
    profileUrl: string;
    reviewerRank: number;
  };
  rating: number;
  title: string;
  body: string;
  date: string;
  verifiedPurchase: boolean;
  helpful: number;
  images?: string[];
  attributes: {
    size?: string;
    color?: string;
    style?: string;
  };
  vine: boolean;
}

export const reviews: Review[] = [
  // Reviews for Wireless Headphones (B08N5WRWNW)
  {
    id: "R1A2B3C4D5",
    productId: "B08N5WRWNW",
    author: {
      name: "John M. Peterson",
      profileUrl: "/profile/john-peterson",
      reviewerRank: 1247,
    },
    rating: 5,
    title:
      "Best headphones I've ever owned - noise cancellation is incredible!",
    body: "I've been using these headphones for about 3 months now and they have exceeded all my expectations. The active noise cancellation is phenomenal - I use them daily on my commute and can barely hear the train anymore. Sound quality is crisp and clear across all genres. The bass is punchy without being overpowering. Battery life easily lasts me a full work week. The comfort is also top-notch; I can wear them for 8+ hours without any discomfort. Build quality feels premium and the foldable design makes them easy to pack in my backpack. Highly recommend these to anyone looking for quality wireless headphones!",
    date: "2024-10-15",
    verifiedPurchase: true,
    helpful: 847,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300",
    ],
    attributes: {
      color: "Matte Black",
    },
    vine: false,
  },
  {
    id: "R2B3C4D5E6",
    productId: "B08N5WRWNW",
    author: {
      name: "Sarah K.",
      profileUrl: "/profile/sarah-k",
      reviewerRank: 5632,
    },
    rating: 4,
    title: "Great sound quality but takes time to get used to the controls",
    body: "Overall very satisfied with this purchase. The sound quality is excellent and the ANC works really well in blocking out background noise. My only complaint is that the touch controls took me a while to get used to - sometimes I accidentally pause my music when adjusting the fit. Also wish they came in more color options. But for the price, especially with the current discount, these are a steal. Would definitely recommend to friends and family.",
    date: "2024-10-10",
    verifiedPurchase: true,
    helpful: 234,
    attributes: {
      color: "Matte Black",
    },
    vine: false,
  },
  {
    id: "R3C4D5E6F7",
    productId: "B08N5WRWNW",
    author: {
      name: "Michael R. Thompson",
      profileUrl: "/profile/michael-thompson",
      reviewerRank: 892,
    },
    rating: 5,
    title: "Perfect for working from home!",
    body: "As someone who takes a lot of video calls for work, these headphones have been a game-changer. The microphone quality is clear and my colleagues say I sound much better than before. The noise cancellation helps me focus even with kids playing in the background. Battery life is impressive - I charge them once a week and use them daily for 4-5 hours. Comfort is excellent even during long meetings. The quick charge feature is also handy when I forget to charge them overnight.",
    date: "2024-10-08",
    verifiedPurchase: true,
    helpful: 156,
    attributes: {},
    vine: false,
  },
  {
    id: "R4D5E6F7G8",
    productId: "B08N5WRWNW",
    author: {
      name: "Emily Chen",
      profileUrl: "/profile/emily-chen",
      reviewerRank: 15234,
    },
    rating: 3,
    title: "Good headphones but not perfect",
    body: "These headphones sound great and the ANC is good, but I had some connectivity issues with my older laptop (works fine with my phone though). The ear cups are comfortable but they do get a bit warm after extended use. For the discounted price, they're worth it, but at full price I might have gone with a different brand. The carrying case is a nice touch.",
    date: "2024-10-05",
    verifiedPurchase: true,
    helpful: 89,
    attributes: {
      color: "Matte Black",
    },
    vine: false,
  },
  {
    id: "R5E6F7G8H9",
    productId: "B08N5WRWNW",
    author: {
      name: "David Williams",
      profileUrl: "/profile/david-williams",
      reviewerRank: 2456,
    },
    rating: 5,
    title: "Audiophile approved - exceptional value",
    body: "As an audio enthusiast, I was skeptical about these given the price point, but I'm pleasantly surprised. The frequency response is well-balanced with good detail in the mids and highs. The bass is present but not bloated. ANC implementation is solid, though not quite as good as the premium Bose or Sony models, but it's 95% there at half the price. Build quality is robust and the materials feel premium. The Bluetooth connection is stable with minimal latency. For anyone looking for high-quality headphones without breaking the bank, these are an excellent choice.",
    date: "2024-10-02",
    verifiedPurchase: true,
    helpful: 423,
    images: ["https://images.unsplash.com/photo-1545127398-14699f92334b?w=300"],
    attributes: {
      color: "Matte Black",
    },
    vine: true,
  },

  // Reviews for Water Bottle (B07YNK87DD)
  {
    id: "R6F7G8H9I0",
    productId: "B07YNK87DD",
    author: {
      name: "Jessica Martinez",
      profileUrl: "/profile/jessica-martinez",
      reviewerRank: 8976,
    },
    rating: 5,
    title: "Keeps drinks cold all day long!",
    body: "I bought this water bottle for hiking and camping trips and it has been absolutely perfect. Put ice water in it at 6am and it still has ice cubes at 6pm! The wide mouth makes it easy to add ice and clean thoroughly. No leaks whatsoever even when it's in my backpack upside down. The powder coating gives it a nice grip and doesn't sweat. Size fits perfectly in my car cup holder. Worth every penny!",
    date: "2024-10-18",
    verifiedPurchase: true,
    helpful: 567,
    attributes: {
      color: "Blue",
      size: "32oz",
    },
    vine: false,
  },
  {
    id: "R7G8H9I0J1",
    productId: "B07YNK87DD",
    author: {
      name: "Robert Johnson",
      profileUrl: "/profile/robert-johnson",
      reviewerRank: 3421,
    },
    rating: 5,
    title: "Best water bottle for the gym",
    body: "This is my third one of these - I liked the first so much I bought more for my family. The insulation is incredible. I fill it with ice water before my workout and it stays cold for hours afterward. The wide mouth is great for chugging water during intense workouts. Easy to clean, no weird plastic taste. The handle on the lid is sturdy and convenient for carrying. Highly recommend!",
    date: "2024-09-12",
    verifiedPurchase: true,
    helpful: 234,
    attributes: {
      color: "Black",
      size: "32oz",
    },
    vine: false,
  },
  {
    id: "R8H9I0J1K2",
    productId: "B07YNK87DD",
    author: {
      name: "Amanda Lee",
      profileUrl: "/profile/amanda-lee",
      reviewerRank: 12456,
    },
    rating: 4,
    title: "Great bottle, wish it came in more colors",
    body: "The bottle itself is fantastic - keeps drinks cold/hot as advertised, doesn't leak, easy to clean. My only wish is that it came in more fun colors. The black is sleek but I would have loved a purple or teal option. Also, the lid can be a bit difficult to screw on tightly sometimes. But overall, very happy with this purchase and would buy again.",
    date: "2024-09-09",
    verifiedPurchase: true,
    helpful: 98,
    attributes: {
      color: "Black",
      size: "32oz",
    },
    vine: false,
  },

  // Reviews for Gaming Keyboard (B09KMVTX4L)
  {
    id: "R9I0J1K2L3",
    productId: "B09KMVTX4L",
    author: {
      name: 'Tyler "GamerPro" Stevens',
      profileUrl: "/profile/tyler-stevens",
      reviewerRank: 456,
    },
    rating: 5,
    title: "Amazing keyboard for gaming and typing!",
    body: "This keyboard is absolutely fantastic! The blue switches have that satisfying click that I love, and they're perfect for both gaming and typing. The RGB lighting is vibrant and customizable - I spent an hour just playing with the different effects. The hot-swappable feature is a huge plus if you want to experiment with different switch types. Build quality is solid, the aluminum plate gives it a premium feel and weight. The TKL layout saves desk space while keeping all the important keys. After using this for a month, I can confidently say this is the best keyboard I've owned. The software for programming macros is intuitive and works great. 10/10 would recommend!",
    date: "2024-08-16",
    verifiedPurchase: true,
    helpful: 789,
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=300",
    ],
    attributes: {
      style: "87-Key TKL",
    },
    vine: false,
  },
  {
    id: "R0J1K2L3M4",
    productId: "B09KMVTX4L",
    author: {
      name: "Programming Pete",
      profileUrl: "/profile/programming-pete",
      reviewerRank: 2341,
    },
    rating: 4,
    title: "Great for coding, but loud!",
    body: "As a software developer, I type a lot and this keyboard is comfortable and responsive. However, the blue switches are LOUD. My coworkers in the office definitely notice when I'm typing. If you work in a quiet environment, you might want to consider brown or red switches instead. The build quality is excellent and the RGB looks professional when set to a solid color. The detachable cable is convenient for portability. Overall, very happy with the purchase despite the noise.",
    date: "2024-08-14",
    verifiedPurchase: true,
    helpful: 345,
    attributes: {
      style: "87-Key TKL",
    },
    vine: false,
  },

  // Reviews for Yoga Mat (B08HDXY123)
  {
    id: "R1K2L3M4N5",
    productId: "B08HDXY123",
    author: {
      name: "Yoga Instructor Lisa",
      profileUrl: "/profile/yoga-lisa",
      reviewerRank: 567,
    },
    rating: 5,
    title: "Perfect thickness and grip!",
    body: "As a yoga instructor, I've tried many mats and this one is excellent. The 1/2 inch thickness provides great cushioning for my knees during poses without being so thick that it affects balance. The grip on both sides is fantastic - no slipping even during sweaty hot yoga sessions. The material doesn't have that strong rubbery smell some mats have. It's easy to roll up and the carrying strap is very convenient. I've recommended this to several of my students and they all love it too. Great value for the price!",
    date: "2024-11-17",
    verifiedPurchase: true,
    helpful: 923,
    attributes: {
      color: "Purple",
      size: "1/2 inch",
    },
    vine: true,
  },
  {
    id: "R2L3M4N5O6",
    productId: "B08HDXY123",
    author: {
      name: "Karen B.",
      profileUrl: "/profile/karen-b",
      reviewerRank: 8934,
    },
    rating: 5,
    title: "Best mat for beginners!",
    body: "I just started doing yoga at home and this mat is perfect. The extra cushioning makes it comfortable on my hardwood floors. The non-slip surface gives me confidence in my poses. It's lightweight enough to move around the house easily but substantial enough to feel quality. Cleans easily with a damp cloth. Very pleased with this purchase!",
    date: "2024-11-11",
    verifiedPurchase: true,
    helpful: 456,
    attributes: {
      color: "Blue",
      size: "1/2 inch",
    },
    vine: false,
  },

  // Reviews for Smart Watch (B07PQRSTUW)
  {
    id: "R3M4N5O6P7",
    productId: "B07PQRSTUW",
    author: {
      name: "Fitness Enthusiast Mark",
      profileUrl: "/profile/fitness-mark",
      reviewerRank: 1876,
    },
    rating: 4,
    title: "Great fitness tracker for the price",
    body: "For under $50, this smart watch offers incredible value. The heart rate monitoring seems accurate when compared to my gym equipment. Sleep tracking gives interesting insights. The display is clear and easy to read in sunlight. Battery life is solid - I get about 5-6 days with moderate use. The app syncs well with my phone. Only complaint is that the band could be higher quality - it feels a bit cheap. But for the price, I can't complain too much. Perfect for someone wanting to try a smart watch without spending hundreds.",
    date: "2024-07-13",
    verifiedPurchase: true,
    helpful: 678,
    attributes: {
      color: "Black",
    },
    vine: false,
  },
  {
    id: "R4N5O6P7Q8",
    productId: "B07PQRSTUW",
    author: {
      name: "Tech Reviewer Tom",
      profileUrl: "/profile/tech-tom",
      reviewerRank: 234,
    },
    rating: 5,
    title: "Surprisingly feature-rich for the price!",
    body: "I was skeptical about such an affordable smart watch, but it has impressed me. The display is bright and responsive. Notifications work perfectly with my iPhone. The fitness tracking features are comprehensive - 14 sport modes cover everything I do. The IP68 rating means I don't have to worry about swimming or showering with it. Heart rate accuracy is good, not perfect but definitely good enough for casual fitness tracking. The music control is handy. Battery easily lasts a week. This competes well with watches costing 3-4x as much. Highly recommended!",
    date: "2024-07-07",
    verifiedPurchase: true,
    helpful: 834,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
    ],
    attributes: {
      color: "Black",
    },
    vine: true,
  },
];

export interface QA {
  id: string;
  productId: string;
  question: string;
  asker: {
    name: string;
    date: string;
  };
  answers: Array<{
    id: string;
    text: string;
    answerer: {
      name: string;
      date: string;
    };
    helpful: number;
    sellerResponse: boolean;
  }>;
  helpful: number;
}

export const qas: QA[] = [
  {
    id: "Q1A2B3C4D5",
    productId: "B08N5WRWNW",
    question: "Can these headphones connect to two devices simultaneously?",
    asker: {
      name: "Alex M.",
      date: "2024-06-10",
    },
    answers: [
      {
        id: "A1B2C3D4E5",
        text: "Yes! I have mine connected to both my laptop and phone. You can switch between them seamlessly. Great for taking calls while working.",
        answerer: {
          name: "Jessica R.",
          date: "2024-06-11",
        },
        helpful: 45,
        sellerResponse: false,
      },
      {
        id: "A2C3D4E5F6",
        text: "Yes, these headphones support multipoint Bluetooth connection. You can connect to two devices at the same time. - TechPro Support Team",
        answerer: {
          name: "TechPro Official",
          date: "2024-06-11",
        },
        helpful: 123,
        sellerResponse: true,
      },
    ],
    helpful: 89,
  },
  {
    id: "Q2B3C4D5E6",
    productId: "B08N5WRWNW",
    question: "How long does it take to fully charge?",
    asker: {
      name: "Mike P.",
      date: "2024-06-08",
    },
    answers: [
      {
        id: "A3D4E5F6G7",
        text: "Takes about 2 hours for a full charge. There's also a quick charge feature - 10 minutes gives you about 2 hours of playback.",
        answerer: {
          name: "Chris T.",
          date: "2024-07-09",
        },
        helpful: 67,
        sellerResponse: false,
      },
    ],
    helpful: 34,
  },
  {
    id: "Q3C4D5E6F7",
    productId: "B08N5WRWNW",
    question: "Do these work well for phone calls?",
    asker: {
      name: "Sarah L.",
      date: "2024-07-05",
    },
    answers: [
      {
        id: "A4E5F6G7H8",
        text: "Yes! The microphone quality is really good. I use them for work calls daily and everyone says I sound clear.",
        answerer: {
          name: "David K.",
          date: "2024-06-06",
        },
        helpful: 56,
        sellerResponse: false,
      },
      {
        id: "A5F6G7H8I9",
        text: "Absolutely! I make a lot of calls and they work great. The noise cancellation also helps block background noise during calls.",
        answerer: {
          name: "Linda M.",
          date: "2024-08-07",
        },
        helpful: 23,
        sellerResponse: false,
      },
    ],
    helpful: 78,
  },
  {
    id: "Q4D5E6F7G8",
    productId: "B07YNK87DD",
    question: "Is this bottle dishwasher safe?",
    asker: {
      name: "Jennifer W.",
      date: "2024-07-12",
    },
    answers: [
      {
        id: "A6G7H8I9J0",
        text: "The bottle itself is dishwasher safe but I recommend hand washing the lid to preserve the seal. - HydroMax Customer Service",
        answerer: {
          name: "HydroMax Official",
          date: "2024-11-13",
        },
        helpful: 145,
        sellerResponse: true,
      },
    ],
    helpful: 92,
  },
  {
    id: "Q5E6F7G8H9",
    productId: "B09KMVTX4L",
    question: "Can I replace the switches with different types?",
    asker: {
      name: "Gaming_Dave",
      date: "2024-10-09",
    },
    answers: [
      {
        id: "A7H8I9J0K1",
        text: "Yes! That's the whole point of hot-swappable. You can pop out the blue switches and put in reds, browns, or any other compatible switches without soldering. Super easy!",
        answerer: {
          name: "MechanicalKeyboardFan",
          date: "2024-11-10",
        },
        helpful: 234,
        sellerResponse: false,
      },
    ],
    helpful: 156,
  },
  {
    id: "Q6F7G8H9I0",
    productId: "B08HDXY123",
    question: "Does this mat have a strong rubber smell?",
    asker: {
      name: "Emily S.",
      date: "2024-11-15",
    },
    answers: [
      {
        id: "A8I9J0K1L2",
        text: "Very minimal smell! I aired it out for a day and it was completely odorless. Much better than my old PVC mat.",
        answerer: {
          name: "YogaMom42",
          date: "2024-12-16",
        },
        helpful: 89,
        sellerResponse: false,
      },
    ],
    helpful: 67,
  },
  {
    id: "Q7G8H9I0J1",
    productId: "B07PQRSTUW",
    question: "Is this compatible with iPhone?",
    asker: {
      name: "Apple_User",
      date: "2024-09-14",
    },
    answers: [
      {
        id: "A9J0K1L2M3",
        text: "Yes, works perfectly with iPhone. I have an iPhone 13 and all features work including notifications, calls, and the health app sync.",
        answerer: {
          name: "iPhone_Owner",
          date: "2024-10-15",
        },
        helpful: 156,
        sellerResponse: false,
      },
      {
        id: "A0K1L2M3N4",
        text: "Compatible with iOS 9.0 and above. Download our app from the App Store for full functionality. - TechPro Support",
        answerer: {
          name: "TechPro Official",
          date: "2024-11-15",
        },
        helpful: 234,
        sellerResponse: true,
      },
    ],
    helpful: 178,
  },
];
