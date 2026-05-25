const placeholder = {
  hci: "assets/pub-placeholder-home.svg",
  vr: "assets/pub-placeholder-vr.svg",
  affect: "assets/pub-placeholder-emotion.svg",
  heritage: "assets/pub-placeholder-heritage.svg"
};

const publications = [
  {
    year: "2026",
    venue: "ICHEC'25",
    tag: "HCI",
    image: "assets/publications/p01.png",
    title: "Body Management Information Practices on a Female-dominant Platform",
    authors: "Na Li, Chuhao Wu, Hongyang Zhou, Huiran Yi, Xuefei Wang, Jie Cai*, Xinyi Fu, and John M. Carroll",
    meta: "Proceedings of the 2025 International Conference on Human-Engaged Computing.",
    doi: "https://doi.org/10.1145/3786995.3787006"
  },
  {
    year: "2026",
    venue: "瑁呴グ",
    tag: "鏅鸿兘瀹跺眳",
    image: "assets/publications/p02.jpg",
    title: "璐ㄦ€х爺绌跺湪鏅鸿兘瀹跺眳鐢ㄦ埛鐮旂┒涓殑浠峰€间笌搴旂敤",
    authors: "浣曠埥, 鏉滀匠鐞? 浠樺績浠?",
    meta: "瑁呴グ, 2026(03):30-37.",
    doi: "https://doi.org/10.16272/j.cnki.cn11-1392/j.2026.03.023"
  },
  {
    year: "2026",
    venue: "CHI'26",
    tag: "VR",
    image: "assets/publications/p03.png",
    title: "VR Calm Plus: Coupling a Squeezable Tangible Interaction with Immersive VR for Stress Regulation",
    authors: "He Zhang, Xinyang Li, Xingyu Zhou, and Xinyi Fu*",
    meta: "Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems.",
    doi: "https://doi.org/10.1145/3772318.3790548"
  },
  {
    year: "2026",
    venue: "CHI'26",
    tag: "Privacy",
    image: "assets/publications/p04.jpg",
    title: "VisGuardian: A Lightweight Group-based Visual Privacy Control Technique For Smart Glasses in Home Environments",
    authors: "Shuning Zhang, Qucheng Zang, Yongquan 'Owen Hu, Jiachen Du, Xueyang Wang, Yan Kong, Xinyi Fu, Suranga Nanayakkara, Xin Yi*, and Hewu Li",
    meta: "Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems.",
    doi: "https://doi.org/10.1145/3772318.3790288"
  },
  {
    year: "2026",
    venue: "CHI'26",
    tag: "VR",
    image: "assets/publications/p05.png",
    title: "Roomify: Spatially-Grounded Style Transformation for Immersive Virtual Environments",
    authors: "Xueyang Wang, Qinxuan Cen, Weitao Bi, Yunxiang Ma, Xin Yi*, Robert Xiao, Xinyi Fu, and Hewu Li",
    meta: "Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems.",
    doi: "https://doi.org/10.1145/3772318.3791803"
  },
  {
    year: "2026",
    venue: "CHI EA'26",
    tag: "Context",
    image: "assets/publications/p06.png",
    title: "Kairotask: Probing the Bridge Between Vague Intents and Spatiotemporal Contexts",
    authors: "Jiachen Du, Yuanhao Zhang, Hengyu Jin, Xinkai Zou, Junwei Zhu, and Xinyi Fu*",
    meta: "Proceedings of the Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems.",
    doi: "https://doi.org/10.1145/3772363.3798333"
  },
  {
    year: "2026",
    venue: "CHI EA'26",
    tag: "Smart Home",
    image: "assets/publications/p07.png",
    title: "Designing with Tensions: Reframing Smart Home Ecosystem UX through In-the-Wild Evidence",
    authors: "Shuang He, Yueyan Liu, Zixuan Wang, Xiao Xue, Xu Zhang, Lei Shi, and Xinyi Fu*",
    meta: "Proceedings of the Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems.",
    doi: "https://doi.org/10.1145/3772363.3798779"
  },
  {
    year: "2026",
    venue: "IEEE TCSS",
    tag: "VR",
    image: "assets/publications/p08.png",
    title: "LandScope: Embodied Interaction and Situational Experience of Chinese Landscape Painting in VR-Based System",
    authors: "Yihui Cai, Yuewen Zhang, Shuzi Yin, Nan Luo, Yinghe Xiao, Xinyi Fu*, and Haipeng Mi*",
    meta: "IEEE Transactions on Computational Social Systems.",
    doi: "https://doi.org/10.1109/TCSS.2026.3672422"
  },
  {
    year: "2026",
    venue: "HRI'26",
    tag: "HRI",
    image: "assets/publications/p09.png",
    title: "POIROT: Investigating Direct Tangible vs. Digitally Mediated Interaction and Attitude Moderation in Multi-party Murder Mystery Games",
    authors: "Wen Chen, Rongxi Chen, Shankai Chen, Huiyang Gong, Minghui Guo, Yingri Xu, Xintong Wu, and Xinyi Fu*",
    meta: "Proceedings of the 21st ACM/IEEE International Conference on Human-Robot Interaction.",
    doi: "https://doi.org/10.1145/3757279.3788663"
  },
  {
    year: "2026",
    venue: "IUI'26",
    tag: "AIoT",
    image: "assets/publications/p10.png",
    title: "AIoT Smart Home Automation Architecture: Autonomous Decision-Making Powered by Multimodal Large Language Models (MLLMs)",
    authors: "He Zhang, Yuewen Zhang, Bochen Li, Wen Chen, Yueyan Liu, Qianyao Xu, and Xinyi Fu*",
    meta: "Companion Proceedings of the 31st International Conference on Intelligent User Interfaces.",
    doi: "https://doi.org/10.1145/3742414.3794710"
  },
  {
    year: "2025",
    venue: "MRAC'25",
    tag: "Affective Computing",
    image: "assets/publications/p11.jpg",
    title: "Zero-shot Emotion Annotation in Facial Images Using Large Multimodal Models",
    authors: "He Zhang and Xinyi Fu*",
    meta: "Proceedings of the 3rd International Workshop on Multimodal and Responsible Affective Computing.",
    doi: "https://doi.org/10.1145/3746270.3760233"
  },
  {
    year: "2025",
    venue: "IEEE TCSS",
    tag: "Digital Heritage",
    image: "assets/publications/p12.jpg",
    title: "Emerging Computing Technology for Digital Culture Heritage Preservation and Inheritance: A Literature Review",
    authors: "Xinyi Fu#, Meng Li#, Xiaomeng Li, Wen Chen, Lening Yu, Zixin Chen, Shuting Wen, Yilin Li, Jiachen Du, Yun Wang*, Yingqing Xu*, and Yunbing Chen*",
    meta: "IEEE Transactions on Computational Social Systems.",
    doi: "https://doi.org/10.1109/TCSS.2025.3589324"
  },
  {
    year: "2025",
    venue: "ASSETS'25",
    tag: "Accessibility",
    image: "assets/publications/p13.png",
    title: "Tactile Data Comics: Combining Step-by-step Presentation of Tactile Graphics with Verbal Narration for the Blind and Visually Impaired",
    authors: "Yang Jiao, Ruoting Sun, Rong Luo, Xiwen Yao, Xinran She, Kotaro Hara, Yuewen Zhang, and Xinyi Fu",
    meta: "Proceedings of the 27th International ACM SIGACCESS Conference on Computers and Accessibility.",
    doi: "https://doi.org/10.1145/3663547.3746338"
  },
  {
    year: "2025",
    venue: "ISMAR Adjunct",
    tag: "VR",
    image: "assets/publications/p14.jpg",
    title: "VR Calm+: Furry Stress Ball as a Haptic Modality for Relaxation in Virtual Reality",
    authors: "He Zhang, Xinyang Li, Xingyu Zhou and Xinyi Fu*",
    meta: "2025 IEEE International Symposium on Mixed and Augmented Reality Adjunct.",
    doi: "https://doi.org/10.1109/ISMAR-Adjunct68609.2025.00128"
  },
  {
    year: "2026",
    venue: "UbiComp'25",
    tag: "Older Adults",
    image: "assets/publications/p15.jpg",
    title: "Emotional Support Originating from Dialogue: Empowering Older Adults' Self-Tracking of Sleep-Related Daytime Factors",
    authors: "Jiachen Du, Xinkai Zou, Liwen He, Shuzi Yin, Bingjie Gao, Wenjing Deng, Xinyi Fu, and Haipeng Mi*",
    meta: "Companion of the 2025 ACM International Joint Conference on Pervasive and Ubiquitous Computing.",
    doi: "https://doi.org/10.1145/3714394.3754418"
  },
  {
    year: "2026",
    venue: "UbiComp'25",
    tag: "Productivity",
    image: "assets/publications/p16.jpg",
    title: "TaskWise: Enhancing Cognitive Performance in Task Management through Interactive Detail Enrichment",
    authors: "Jiachen Du, Bingjie Gao, Shuzi Yin, Xinkai Zou, Wenjing Deng, and Xinyi Fu*",
    meta: "Companion of the 2025 ACM International Joint Conference on Pervasive and Ubiquitous Computing.",
    doi: "https://doi.org/10.1145/3714394.3754433"
  },
  {
    year: "2025",
    venue: "CSCW Companion",
    tag: "Voice AI",
    image: "assets/publications/p17.jpg",
    title: "The Social Dynamics of Voice Cloning: Trust, Privacy, and Ethical Tensions When Sharing Your AI Voice Replica",
    authors: "Jiachen Du, Hanyu Huang, Xinkai Zou, Shuzi Yin, Bingjie Gao, and Xinyi Fu*",
    meta: "Companion Publication of the 2025 Conference on Computer-Supported Cooperative Work and Social Computing.",
    doi: "https://doi.org/10.1145/3715070.3749244"
  },
  {
    year: "2025",
    venue: "寤虹瓚鎶€鑹?",
    tag: "鏅鸿兘鍘ㄦ埧",
    image: "assets/publications/p18.jpg",
    title: "鏅鸿兘鍘ㄦ埧浜や簰璁捐鐮旂┒缁艰堪",
    authors: "浣曠埥, 寰愯繋搴? 浠樺績浠?",
    meta: "寤虹瓚鎶€鑹?涓嫳鏂?, 2025, 31(02):25-33.",
    doi: "https://doi.org/10.19953/j.at.2025.02.006"
  },
  {
    year: "2025",
    venue: "HCII",
    tag: "Older Adults",
    image: "assets/publications/p19.jpg",
    title: "Physiological and Behavioral Analysis Based Multimodal Evaluation of Older Adults鈥?Experience with Kitchen Appliances",
    authors: "Cheng Xue, Minghui Liu, Yuxiang Zhai, Jiachen Du, Xinyi Fu*",
    meta: "Human Aspects of IT for the Aged Population. HCII 2025.",
    doi: "https://doi.org/10.1007/978-3-031-92710-2_11"
  },
  {
    year: "2025",
    venue: "ICLR Workshop",
    tag: "Human-AI",
    image: "assets/publications/p20.jpg",
    title: "Augmenting Image Annotation: A Human鈥揕MM Collaborative Framework for Efficient Object Selection and Label Generation",
    authors: "He Zhang, Xinyi Fu*, and John Millar Carroll",
    meta: "ICLR 2025 Workshop on Bidirectional Human-AI Alignment.",
    doi: ""
  },
  {
    year: "2025",
    venue: "CHCHI'24",
    tag: "Older Adults",
    image: "assets/publications/p21.jpg",
    title: "Enhancing Older Adults' Lives with Conversational Agents: A Systematic Review of Contexts, Capabilities, and User-Centered Design Strategies",
    authors: "Jiachen Du, Tongtong Jin, Ruowen Niu, Yuxiang Zhai, and Xinyi Fu*",
    meta: "Proceedings of the Twelfth International Symposium of Chinese CHI.",
    doi: "https://doi.org/10.1145/3758871.3758891"
  },
  {
    year: "2025",
    venue: "CHI EA'25",
    tag: "Smart Ecosystem",
    image: "assets/publications/p22.jpg",
    title: "When My Car Whispers Secrets to My Home: Envisioning the Opportunities and Challenges of Human-Vehicle-Home Integrated Ecosystems through Probes",
    authors: "Xiao Xue, Shuang He, Keqi Chen, Ruoxin Qiao, Weitai Xu, Enyang Wang, Yaxuan Zhao, and Xinyi Fu*",
    meta: "Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems.",
    doi: "https://doi.org/10.1145/3706599.3720252"
  },
  {
    year: "2025",
    venue: "CHI EA'25",
    tag: "AI Cooking",
    image: "assets/publications/p23.jpg",
    title: "BakeEase: Redefining Baking Experiences with AI-Powered Multimodal Systems",
    authors: "Shuang He, Da Gao, Xingyu Zhou, Haoyu Dai, Shengyi Wang, Yingqing Xu, and Xinyi Fu*",
    meta: "Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems.",
    doi: "https://doi.org/10.1145/3706599.3720180"
  },
  {
    year: "2024",
    venue: "UbiComp'24",
    tag: "Pet AI",
    image: "assets/publications/p24.jpg",
    title: "DogChat: A Pet-centered Smart Collar Prototype based on Large Language Models and Wechat",
    authors: "Cheng Xue, Zonglin Zuo, Xinran Jiang, and Xinyi Fu*",
    meta: "Companion of the 2024 ACM International Joint Conference on Pervasive and Ubiquitous Computing.",
    doi: "https://doi.org/10.1145/3675094.3677606"
  },
  {
    year: "2024",
    venue: "IEEE ToG",
    tag: "VR",
    image: "assets/publications/p25.jpg",
    title: "Understanding Fear Responses and Coping Mechanisms in VR Horror Gaming",
    authors: "He Zhang, Xinyang Li, Xinyi Fu*, Christine Qiu, Jiyuan Zhang, and John M. Carroll",
    meta: "IEEE Transactions on Games 16, 4 (2024), 868-881.",
    doi: "https://doi.org/10.1109/TG.2024.3403768"
  },
  {
    year: "2024",
    venue: "鍖呰宸ョ▼",
    tag: "AI Design",
    image: "assets/publications/p26.jpg",
    title: "浜哄伐鏅鸿兘鍦ㄨ璁′骇涓氫腑鐨勫簲鐢ㄥ強鍙戝睍",
    authors: "寰愯繋搴? 鍛ㄦ瞾鎬? 閭撳, 寮犵厹, 浠樺績浠?",
    meta: "鍖呰宸ョ▼, 2024, 45(08):1-10.",
    doi: "https://doi.org/10.19554/j.cnki.1001-3563.2024.08.001"
  },
  {
    year: "2024",
    venue: "CHI'24",
    tag: "Smart Home",
    image: "assets/publications/p27.jpg",
    title: "Who Should Hold Control? Rethinking Empowerment in Home Automation among Cohabitants through the Lens of Co-Design",
    authors: "Xiao Xue, Xinyang Li, Boyang Jia, Jiachen Du, and Xinyi Fu*",
    meta: "Proceedings of the CHI Conference on Human Factors in Computing Systems.",
    doi: "https://doi.org/10.1145/3613904.3642866"
  },
  {
    year: "2024",
    venue: "CHI EA'24",
    tag: "Evaluation",
    image: "assets/publications/p28.jpg",
    title: "A Case Study Exploring the Applicability of Heuristic Evaluation in Smart Home Systems",
    authors: "Mengyu Chen, Shuang He, and Xinyi Fu*",
    meta: "Extended Abstracts of the 2024 CHI Conference on Human Factors in Computing Systems.",
    doi: "https://doi.org/10.1145/3613905.3637131"
  },
  {
    year: "2024",
    venue: "IEEE VR",
    tag: "VR Dataset",
    image: "assets/publications/p29.jpg",
    title: "VRMN-bD: A Multi-modal Natural Behavior Dataset of Immersive Human Fear Responses in VR Stand-up Interactive Games",
    authors: "He Zhang, Xinyang Li, Yuanxi Sun, Xinyi Fu*, Christine Qiu, and John M. Carroll",
    meta: "2024 IEEE Conference Virtual Reality and 3D User Interfaces.",
    doi: "https://doi.org/10.1109/VR58804.2024.00054"
  },
  {
    year: "2024",
    venue: "Frontiers",
    tag: "Health",
    image: placeholder.affect,
    title: "Editorial: Body-centric computing for health and wellbeing",
    authors: "Zhuying Li, Xipei Ren, Chengyu Liu, Ding Ding, and Xinyi Fu",
    meta: "Frontiers in Computer Science, Volume 6.",
    doi: "https://doi.org/10.3389/fcomp.2024.1393102"
  },
  {
    year: "2024",
    venue: "CHCHI'23",
    tag: "Metaverse",
    image: "assets/publications/p31.jpg",
    title: "Meta-Home: Smart Home Digital Twin Design from the Perspective of Smart metaverse",
    authors: "Cheng Xue, Yingting Gao, Ananda Robin, Jiachen Du, Qianyao Xu, and Xinyi Fu*",
    meta: "Proceedings of the Eleventh International Symposium of Chinese CHI.",
    doi: "https://doi.org/10.1145/3629606.3629635"
  },
  {
    year: "2024",
    venue: "CHCHI'23",
    tag: "VR",
    image: "assets/publications/p32.jpg",
    title: "Decoding Fear: Exploring User Experiences in Virtual Reality Horror Games",
    authors: "He Zhang, Xinyang Li, Christine Qiu, and Xinyi Fu*",
    meta: "Proceedings of the Eleventh International Symposium of Chinese CHI.",
    doi: "https://doi.org/10.1145/3629606.3629646"
  },
  {
    year: "2024",
    venue: "CHCHI'23",
    tag: "Smart Home",
    image: "assets/publications/p33.jpg",
    title: "Multi-channel Sensor Network Construction, Data Fusion and Challenges for Smart Home",
    authors: "He Zhang, Robin Ananda, Xinyi Fu*, Zhe Sun, Xiaoyu Wang, Keqi Chen, and John Carroll",
    meta: "Proceedings of the Eleventh International Symposium of Chinese CHI.",
    doi: "https://doi.org/10.1145/3629606.3629638"
  },
  {
    year: "2024",
    venue: "Springer AI",
    tag: "AI Space",
    image: placeholder.hci,
    title: "Space Brain: An AI Autonomous Spatial Decision System",
    authors: "Jiachen Du, Boyang Jia, and Xinyi Fu*",
    meta: "Artificial Intelligence, Springer Nature Singapore, 61-67.",
    doi: ""
  },
  {
    year: "2023",
    venue: "IJHCI",
    tag: "Cultural Heritage",
    image: "assets/publications/p35.jpg",
    title: "Restoring Dunhuang Murals: Crafting Cultural Heritage Preservation Knowledge into Immersive Virtual Reality Experience Design",
    authors: "Tongxin Sun, Tongtong Jin, Yuru Huang, Meng Li, Yun Wang, Zhe Jia & Xinyi Fu*",
    meta: "International Journal of Human-Computer Interaction, 40(8), 2019-2040.",
    doi: "https://doi.org/10.1080/10447318.2023.2232976"
  },
  {
    year: "2023",
    venue: "绉戞妧瀵兼姤",
    tag: "鏅鸿兘瀹跺眳",
    image: "assets/publications/p36.jpg",
    title: "闈㈠悜鏈潵鐨勬櫤鑳藉灞呭墠娌胯繘灞?",
    authors: "浠樺績浠? 寮犻工, 钖涚▼, 瀛欑蹇?",
    meta: "绉戞妧瀵兼姤, 2023, 41(8):36-52.",
    doi: "https://doi.org/10.3981/j.issn.1000-7857.2023.08.004"
  },
  {
    year: "2023",
    venue: "璁＄畻鏈鸿緟鍔╄璁′笌鍥惧舰瀛﹀鎶?",
    tag: "Affective Computing",
    image: "assets/publications/p37.jpg",
    title: "闅愮鍙嬪ソ鐨勬鎬佹暟鎹噰闆嗕笌鎯呯华璇嗗埆鏂规硶",
    authors: "鑲栬櫣, 鍞愬仴鍑? 涓橀洦娑? 浠樺績浠?",
    meta: "璁＄畻鏈鸿緟鍔╄璁′笌鍥惧舰瀛﹀鎶? 2023, 35(02):203-212.",
    doi: "https://doi.org/10.3724/SP.J.1089.2023.20042"
  },
  {
    year: "2023",
    venue: "绉戞妧瀵兼姤",
    tag: "Design Innovation",
    image: placeholder.hci,
    title: "瀛︾浜ゅ弶涓庤璁″垱鏂扮爺绌惰繘灞?",
    authors: "寰愯繋搴? 鐜嬮煫, 浠樺績浠? 绛?",
    meta: "绉戞妧瀵兼姤, 2023, 41(8):17-25.",
    doi: "https://doi.org/10.3981/j.issn.1000-7857.2023.08.002"
  },
  {
    year: "2024",
    venue: "Chinese CHI'22",
    tag: "Accessibility",
    image: "assets/publications/p39.jpg",
    title: "EmoSparkle: Tangible Prototype to Convey Visual Expressions for Visually Impaired Individuals in Real-time Conversations",
    authors: "Zhe Sun, Robin Ananda, and Xinyi Fu*",
    meta: "Proceedings of the Tenth International Symposium of Chinese CHI.",
    doi: "https://doi.org/10.1145/3565698.3565768"
  },
  {
    year: "2024",
    venue: "Chinese CHI'22",
    tag: "Affective System",
    image: "assets/publications/p40.jpg",
    title: "User-friendly interactive affective system to leverage aggressive driving behavior",
    authors: "Keqi Chen, Xinyi Fu*, and Chris Speed",
    meta: "Proceedings of the Tenth International Symposium of Chinese CHI.",
    doi: "https://doi.org/10.1145/3565698.3565769"
  },
  {
    year: "2022",
    venue: "Springer",
    tag: "Smart Environment",
    image: placeholder.hci,
    title: "Design Strategy of Multimodal Perception System for Smart Environment",
    authors: "Jie Liu, Dan Luo, Xinyi Fu, Qi Lu, and Karen Yixin Kang",
    meta: "Internet of Things for Smart Environments, Springer, 93-115.",
    doi: "https://doi.org/10.1007/978-3-031-09729-4_6"
  },
  {
    year: "2022",
    venue: "鍖呰宸ョ▼",
    tag: "鏅鸿兘瀹跺眳",
    image: "assets/publications/p42.jpg",
    title: "鏅鸿兘瀹跺眳缁煎悎瀹為獙骞冲彴璁捐鐮旂┒涓庡簲鐢ㄥ疄璺?",
    authors: "浠樺績浠? 寮犻工, 钖涚▼, 鏉庢娲? 瀛欏枂, 寰愯繋搴?",
    meta: "鍖呰宸ョ▼, 2022, 43(16):50-58+108.",
    doi: "https://doi.org/10.19554/j.cnki.1001-3563.2022.16.005"
  },
  {
    year: "2021",
    venue: "ACII",
    tag: "Affective Computing",
    image: "assets/publications/p43.jpg",
    title: "Gesture based fear recognition using non-performance dataset from VR horror games",
    authors: "Xinyi Fu, Cheng Xue, Qiuyi Yin, Yu Jiang, Ye Li, Yichen Cai and Weilin Sun",
    meta: "2021 9th International Conference on Affective Computing and Intelligent Interaction.",
    doi: ""
  },
  {
    year: "2021",
    venue: "MobileHCI'21",
    tag: "VR Shopping",
    image: "assets/publications/p44.jpg",
    title: "Mobile Screen-based User Interface Design Guideline for Panoramic VR in Shopping Scene",
    authors: "Xinyi Wang, Cheng Xue, Tongxin Sun, Jingyi Liu, and Xinyi Fu*",
    meta: "Proceedings of the 23rd International Conference on Mobile Human-Computer Interaction.",
    doi: "https://doi.org/10.1145/3447526.3472055"
  },
  {
    year: "2021",
    venue: "鏁︾厡鐮旂┒",
    tag: "Cultural Heritage",
    image: "assets/publications/p45.jpg",
    title: "鏁︾厡鑾珮绐熺儫鐔忓鐢荤殑鏁板瓧鍖栬壊褰╁鍘熺爺绌?",
    authors: "浠樺績浠? 鏉庡博, 瀛欏織鍐? 鏉滈箖, 鐜嬪嚖骞? 寰愯繋搴?",
    meta: "鏁︾厡鐮旂┒, 2021(01):137-147.",
    doi: ""
  },
  {
    year: "2020",
    venue: "璁＄畻鏈鸿緟鍔╄璁′笌鍥惧舰瀛﹀鎶?",
    tag: "Affective Computing",
    image: "assets/publications/p46.jpg",
    title: "鍩轰簬BGRU-FUS-NN绁炵粡缃戠粶鐨勫Э鎬佹儏鎰熻绠楁柟娉曠爺绌?",
    authors: "浠樺績浠? 钄″ぉ闃? 钖涚▼, 寮犲畤缈? 寰愯繋搴?",
    meta: "璁＄畻鏈鸿緟鍔╄璁′笌鍥惧舰瀛﹀鎶? 2020, 32(07):1070-1079.",
    doi: ""
  },
  {
    year: "2020",
    venue: "璁＄畻鏈鸿緟鍔╄璁′笌鍥惧舰瀛﹀鎶?",
    tag: "Affective Computing",
    image: "assets/publications/p47.jpg",
    title: "鍩轰簬濮挎€佺殑鎯呮劅璁＄畻缁艰堪",
    authors: "浠樺績浠? 钖涚▼, 鏉庡笇, 寮犵帴娉? 钄″ぉ闃?",
    meta: "璁＄畻鏈鸿緟鍔╄璁′笌鍥惧舰瀛﹀鎶? 2020, 32(07):1052-1061.",
    doi: ""
  },
  {
    year: "2020",
    venue: "瑁呴グ",
    tag: "Design",
    image: placeholder.hci,
    title: "淇℃伅鏃朵唬鑳屾櫙涓嬬殑鏂板叴澶т紬鍖栬璁?",
    authors: "閮濆己, 浠樺績浠?, 寰愯繋搴?",
    meta: "瑁呴グ, 2020(03):38-42.",
    doi: ""
  },
  {
    year: "2020",
    venue: "CHI'20",
    tag: "VR Heritage",
    image: "assets/publications/p49.jpg",
    title: "RestoreVR: Generating Embodied Knowledge and Situated Experience of Dunhuang Mural Conservation via Interactive Virtual Reality",
    authors: "Xinyi Fu, Yaxin Zhu, Zhijing Xiao, Yingqing Xu, and Xiaojuan Ma*",
    meta: "Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems.",
    doi: ""
  },
  {
    year: "2020",
    venue: "DSA",
    tag: "Collaboration",
    image: "assets/publications/p50.jpg",
    title: "coisTable: An Individual-and-Spatial-Aware Tabletop System for Co-located Collaboration",
    authors: "Zanzhen Huang, Yaxin Zhu, Xiaofei Mao, Tianxin Su, Xinyi Fu and Guangzheng Fei*",
    meta: "6th International Conference on Dependable Systems and Their Applications.",
    doi: ""
  },
  {
    year: "2019",
    venue: "瑁呴グ",
    tag: "Cultural Heritage",
    image: "assets/publications/p51.jpg",
    title: "鐮存崯澹佺敾鐨勬暟瀛楀寲澶嶅師鐮旂┒鈥斺€斾互鏁︾厡澹佺敾涓轰緥",
    authors: "浠樺績浠? 楹绘檽濞?, 瀛欏織鍐?",
    meta: "瑁呴グ, 2019(01):21-27.",
    doi: ""
  },
  {
    year: "2017",
    venue: "瑁呴グ",
    tag: "Visualization",
    image: placeholder.hci,
    title: "淇℃伅鍙鍖栫殑鍙戝睍涓庢€濊€?",
    authors: "浠樺績浠? 鍒樹笘闇? 寰愯繋搴?",
    meta: "瑁呴グ, 2017(04):16-19.",
    doi: ""
  },
  {
    year: "2017",
    venue: "ISPRS",
    tag: "Mural Restoration",
    image: "assets/publications/p53.jpg",
    title: "Line-drawing Enhanced Interactive Mural Restoration for Dunhuang Mogao Grottoes",
    authors: "Xinyi Fu, Yi Han, Zhijun Sun, Xiaojuan Ma and Yingqing Xu*",
    meta: "ISPRS Annals of the Photogrammetry, Remote Sensing and Spatial Information Sciences.",
    doi: ""
  },
  {
    year: "2017",
    venue: "J Raman Spectrosc",
    tag: "Heritage Science",
    image: "assets/publications/p54.jpg",
    title: "Analysis of the pigments for smoked mural by confocal micro-Raman spectroscopy",
    authors: "Yan Li, Fengping Wang, Xinyi Fu, Zhijun Sun and Yingqing Xu*",
    meta: "Journal of Raman Spectroscopy, 48:1479-1486.",
    doi: ""
  }
];

function renderPublications() {
  const root = document.getElementById("publication-list");
  if (!root) return;
  root.innerHTML = publications
    .map((paper) => {
      const title = paper.doi
        ? `<a class="paper-title-link" href="${paper.doi}">${paper.title}</a>`
        : paper.title;
      return `
        <article class="paper">
          <a class="paper-thumb" href="${paper.doi || "#"}" aria-label="${paper.title}">
            <img src="${paper.image}" alt="${paper.title}" loading="lazy" />
          </a>
          <div class="paper-meta">
            <h5>${title}</h5>
            <p class="authors">${paper.authors}</p>
            <p class="paper-desc">${paper.meta}</p>
            <p class="paper-links">
              <span class="venue">${paper.venue}</span>
              <span class="year-tag">${paper.year}</span>
              <span class="tag">${paper.tag}</span>
            </p>
          </div>
        </article>
      `;
    })
    .join("");
}

renderPublications();

