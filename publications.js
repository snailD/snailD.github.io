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
    image: placeholder.hci,
    title: "Body Management Information Practices on a Female-dominant Platform",
    authors: "Na Li, Chuhao Wu, Hongyang Zhou, Huiran Yi, Xuefei Wang, Jie Cai*, Xinyi Fu, and John M. Carroll",
    meta: "Proceedings of the 2025 International Conference on Human-Engaged Computing.",
    doi: "https://doi.org/10.1145/3786995.3787006"
  },
  {
    year: "2026",
    venue: "装饰",
    tag: "智能家居",
    image: placeholder.hci,
    title: "质性研究在智能家居用户研究中的价值与应用",
    authors: "何爽, 杜佳琛, 付心仪*",
    meta: "装饰, 2026(03):30-37.",
    doi: "https://doi.org/10.16272/j.cnki.cn11-1392/j.2026.03.023"
  },
  {
    year: "2026",
    venue: "CHI'26",
    tag: "VR",
    image: placeholder.vr,
    title: "VR Calm Plus: Coupling a Squeezable Tangible Interaction with Immersive VR for Stress Regulation",
    authors: "He Zhang, Xinyang Li, Xingyu Zhou, and Xinyi Fu*",
    meta: "Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems.",
    doi: "https://doi.org/10.1145/3772318.3790548"
  },
  {
    year: "2026",
    venue: "CHI'26",
    tag: "Privacy",
    image: placeholder.hci,
    title: "VisGuardian: A Lightweight Group-based Visual Privacy Control Technique For Smart Glasses in Home Environments",
    authors: "Shuning Zhang, Qucheng Zang, Yongquan 'Owen Hu, Jiachen Du, Xueyang Wang, Yan Kong, Xinyi Fu, Suranga Nanayakkara, Xin Yi*, and Hewu Li",
    meta: "Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems.",
    doi: "https://doi.org/10.1145/3772318.3790288"
  },
  {
    year: "2026",
    venue: "CHI'26",
    tag: "VR",
    image: placeholder.vr,
    title: "Roomify: Spatially-Grounded Style Transformation for Immersive Virtual Environments",
    authors: "Xueyang Wang, Qinxuan Cen, Weitao Bi, Yunxiang Ma, Xin Yi*, Robert Xiao, Xinyi Fu, and Hewu Li",
    meta: "Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems.",
    doi: "https://doi.org/10.1145/3772318.3791803"
  },
  {
    year: "2026",
    venue: "CHI EA'26",
    tag: "Context",
    image: placeholder.hci,
    title: "Kairotask: Probing the Bridge Between Vague Intents and Spatiotemporal Contexts",
    authors: "Jiachen Du, Yuanhao Zhang, Hengyu Jin, Xinkai Zou, Junwei Zhu, and Xinyi Fu*",
    meta: "Proceedings of the Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems.",
    doi: "https://doi.org/10.1145/3772363.3798333"
  },
  {
    year: "2026",
    venue: "CHI EA'26",
    tag: "Smart Home",
    image: placeholder.hci,
    title: "Designing with Tensions: Reframing Smart Home Ecosystem UX through In-the-Wild Evidence",
    authors: "Shuang He, Yueyan Liu, Zixuan Wang, Xiao Xue, Xu Zhang, Lei Shi, and Xinyi Fu*",
    meta: "Proceedings of the Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems.",
    doi: "https://doi.org/10.1145/3772363.3798779"
  },
  {
    year: "2026",
    venue: "IEEE TCSS",
    tag: "VR",
    image: placeholder.heritage,
    title: "LandScope: Embodied Interaction and Situational Experience of Chinese Landscape Painting in VR-Based System",
    authors: "Yihui Cai, Yuewen Zhang, Shuzi Yin, Nan Luo, Yinghe Xiao, Xinyi Fu*, and Haipeng Mi*",
    meta: "IEEE Transactions on Computational Social Systems.",
    doi: "https://doi.org/10.1109/TCSS.2026.3672422"
  },
  {
    year: "2026",
    venue: "HRI'26",
    tag: "HRI",
    image: placeholder.hci,
    title: "POIROT: Investigating Direct Tangible vs. Digitally Mediated Interaction and Attitude Moderation in Multi-party Murder Mystery Games",
    authors: "Wen Chen, Rongxi Chen, Shankai Chen, Huiyang Gong, Minghui Guo, Yingri Xu, Xintong Wu, and Xinyi Fu*",
    meta: "Proceedings of the 21st ACM/IEEE International Conference on Human-Robot Interaction.",
    doi: "https://doi.org/10.1145/3757279.3788663"
  },
  {
    year: "2026",
    venue: "IUI'26",
    tag: "AIoT",
    image: placeholder.hci,
    title: "AIoT Smart Home Automation Architecture: Autonomous Decision-Making Powered by Multimodal Large Language Models (MLLMs)",
    authors: "He Zhang, Yuewen Zhang, Bochen Li, Wen Chen, Yueyan Liu, Qianyao Xu, and Xinyi Fu*",
    meta: "Companion Proceedings of the 31st International Conference on Intelligent User Interfaces.",
    doi: "https://doi.org/10.1145/3742414.3794710"
  },
  {
    year: "2025",
    venue: "MRAC'25",
    tag: "Affective Computing",
    image: placeholder.affect,
    title: "Zero-shot Emotion Annotation in Facial Images Using Large Multimodal Models",
    authors: "He Zhang and Xinyi Fu*",
    meta: "Proceedings of the 3rd International Workshop on Multimodal and Responsible Affective Computing.",
    doi: "https://doi.org/10.1145/3746270.3760233"
  },
  {
    year: "2025",
    venue: "IEEE TCSS",
    tag: "Digital Heritage",
    image: placeholder.heritage,
    title: "Emerging Computing Technology for Digital Culture Heritage Preservation and Inheritance: A Literature Review",
    authors: "Xinyi Fu#, Meng Li#, Xiaomeng Li, Wen Chen, Lening Yu, Zixin Chen, Shuting Wen, Yilin Li, Jiachen Du, Yun Wang*, Yingqing Xu*, and Yunbing Chen*",
    meta: "IEEE Transactions on Computational Social Systems.",
    doi: "https://doi.org/10.1109/TCSS.2025.3589324"
  },
  {
    year: "2025",
    venue: "ASSETS'25",
    tag: "Accessibility",
    image: placeholder.hci,
    title: "Tactile Data Comics: Combining Step-by-step Presentation of Tactile Graphics with Verbal Narration for the Blind and Visually Impaired",
    authors: "Yang Jiao, Ruoting Sun, Rong Luo, Xiwen Yao, Xinran She, Kotaro Hara, Yuewen Zhang, and Xinyi Fu",
    meta: "Proceedings of the 27th International ACM SIGACCESS Conference on Computers and Accessibility.",
    doi: "https://doi.org/10.1145/3663547.3746338"
  },
  {
    year: "2025",
    venue: "ISMAR Adjunct",
    tag: "VR",
    image: placeholder.vr,
    title: "VR Calm+: Furry Stress Ball as a Haptic Modality for Relaxation in Virtual Reality",
    authors: "He Zhang, Xinyang Li, Xingyu Zhou and Xinyi Fu*",
    meta: "2025 IEEE International Symposium on Mixed and Augmented Reality Adjunct.",
    doi: "https://doi.org/10.1109/ISMAR-Adjunct68609.2025.00128"
  },
  {
    year: "2026",
    venue: "UbiComp'25",
    tag: "Older Adults",
    image: placeholder.hci,
    title: "Emotional Support Originating from Dialogue: Empowering Older Adults' Self-Tracking of Sleep-Related Daytime Factors",
    authors: "Jiachen Du, Xinkai Zou, Liwen He, Shuzi Yin, Bingjie Gao, Wenjing Deng, Xinyi Fu, and Haipeng Mi*",
    meta: "Companion of the 2025 ACM International Joint Conference on Pervasive and Ubiquitous Computing.",
    doi: "https://doi.org/10.1145/3714394.3754418"
  },
  {
    year: "2026",
    venue: "UbiComp'25",
    tag: "Productivity",
    image: placeholder.hci,
    title: "TaskWise: Enhancing Cognitive Performance in Task Management through Interactive Detail Enrichment",
    authors: "Jiachen Du, Bingjie Gao, Shuzi Yin, Xinkai Zou, Wenjing Deng, and Xinyi Fu*",
    meta: "Companion of the 2025 ACM International Joint Conference on Pervasive and Ubiquitous Computing.",
    doi: "https://doi.org/10.1145/3714394.3754433"
  },
  {
    year: "2025",
    venue: "CSCW Companion",
    tag: "Voice AI",
    image: placeholder.hci,
    title: "The Social Dynamics of Voice Cloning: Trust, Privacy, and Ethical Tensions When Sharing Your AI Voice Replica",
    authors: "Jiachen Du, Hanyu Huang, Xinkai Zou, Shuzi Yin, Bingjie Gao, and Xinyi Fu*",
    meta: "Companion Publication of the 2025 Conference on Computer-Supported Cooperative Work and Social Computing.",
    doi: "https://doi.org/10.1145/3715070.3749244"
  },
  {
    year: "2025",
    venue: "建筑技艺",
    tag: "智能厨房",
    image: placeholder.hci,
    title: "智能厨房交互设计研究综述",
    authors: "何爽, 徐迎庆, 付心仪*",
    meta: "建筑技艺(中英文), 2025, 31(02):25-33.",
    doi: "https://doi.org/10.19953/j.at.2025.02.006"
  },
  {
    year: "2025",
    venue: "HCII",
    tag: "Older Adults",
    image: "https://media.springernature.com/w153/springer-static/cover/book/978-3-031-92710-2.jpg",
    title: "Physiological and Behavioral Analysis Based Multimodal Evaluation of Older Adults’ Experience with Kitchen Appliances",
    authors: "Cheng Xue, Minghui Liu, Yuxiang Zhai, Jiachen Du, Xinyi Fu*",
    meta: "Human Aspects of IT for the Aged Population. HCII 2025.",
    doi: "https://doi.org/10.1007/978-3-031-92710-2_11"
  },
  {
    year: "2025",
    venue: "ICLR Workshop",
    tag: "Human-AI",
    image: placeholder.affect,
    title: "Augmenting Image Annotation: A Human–LMM Collaborative Framework for Efficient Object Selection and Label Generation",
    authors: "He Zhang, Xinyi Fu*, and John Millar Carroll",
    meta: "ICLR 2025 Workshop on Bidirectional Human-AI Alignment.",
    doi: ""
  },
  {
    year: "2025",
    venue: "CHCHI'24",
    tag: "Older Adults",
    image: placeholder.hci,
    title: "Enhancing Older Adults' Lives with Conversational Agents: A Systematic Review of Contexts, Capabilities, and User-Centered Design Strategies",
    authors: "Jiachen Du, Tongtong Jin, Ruowen Niu, Yuxiang Zhai, and Xinyi Fu*",
    meta: "Proceedings of the Twelfth International Symposium of Chinese CHI.",
    doi: "https://doi.org/10.1145/3758871.3758891"
  },
  {
    year: "2025",
    venue: "CHI EA'25",
    tag: "Smart Ecosystem",
    image: placeholder.hci,
    title: "When My Car Whispers Secrets to My Home: Envisioning the Opportunities and Challenges of Human-Vehicle-Home Integrated Ecosystems through Probes",
    authors: "Xiao Xue, Shuang He, Keqi Chen, Ruoxin Qiao, Weitai Xu, Enyang Wang, Yaxuan Zhao, and Xinyi Fu*",
    meta: "Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems.",
    doi: "https://doi.org/10.1145/3706599.3720252"
  },
  {
    year: "2025",
    venue: "CHI EA'25",
    tag: "AI Cooking",
    image: placeholder.hci,
    title: "BakeEase: Redefining Baking Experiences with AI-Powered Multimodal Systems",
    authors: "Shuang He, Da Gao, Xingyu Zhou, Haoyu Dai, Shengyi Wang, Yingqing Xu, and Xinyi Fu*",
    meta: "Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems.",
    doi: "https://doi.org/10.1145/3706599.3720180"
  },
  {
    year: "2024",
    venue: "UbiComp'24",
    tag: "Pet AI",
    image: placeholder.hci,
    title: "DogChat: A Pet-centered Smart Collar Prototype based on Large Language Models and Wechat",
    authors: "Cheng Xue, Zonglin Zuo, Xinran Jiang, and Xinyi Fu*",
    meta: "Companion of the 2024 ACM International Joint Conference on Pervasive and Ubiquitous Computing.",
    doi: "https://doi.org/10.1145/3675094.3677606"
  },
  {
    year: "2024",
    venue: "IEEE ToG",
    tag: "VR",
    image: placeholder.vr,
    title: "Understanding Fear Responses and Coping Mechanisms in VR Horror Gaming",
    authors: "He Zhang, Xinyang Li, Xinyi Fu*, Christine Qiu, Jiyuan Zhang, and John M. Carroll",
    meta: "IEEE Transactions on Games 16, 4 (2024), 868-881.",
    doi: "https://doi.org/10.1109/TG.2024.3403768"
  },
  {
    year: "2024",
    venue: "包装工程",
    tag: "AI Design",
    image: placeholder.hci,
    title: "人工智能在设计产业中的应用及发展",
    authors: "徐迎庆, 周沁怡, 邓婕, 张煜, 付心仪*",
    meta: "包装工程, 2024, 45(08):1-10.",
    doi: "https://doi.org/10.19554/j.cnki.1001-3563.2024.08.001"
  },
  {
    year: "2024",
    venue: "CHI'24",
    tag: "Smart Home",
    image: placeholder.hci,
    title: "Who Should Hold Control? Rethinking Empowerment in Home Automation among Cohabitants through the Lens of Co-Design",
    authors: "Xiao Xue, Xinyang Li, Boyang Jia, Jiachen Du, and Xinyi Fu*",
    meta: "Proceedings of the CHI Conference on Human Factors in Computing Systems.",
    doi: "https://doi.org/10.1145/3613904.3642866"
  },
  {
    year: "2024",
    venue: "CHI EA'24",
    tag: "Evaluation",
    image: placeholder.hci,
    title: "A Case Study Exploring the Applicability of Heuristic Evaluation in Smart Home Systems",
    authors: "Mengyu Chen, Shuang He, and Xinyi Fu*",
    meta: "Extended Abstracts of the 2024 CHI Conference on Human Factors in Computing Systems.",
    doi: "https://doi.org/10.1145/3613905.3637131"
  },
  {
    year: "2024",
    venue: "IEEE VR",
    tag: "VR Dataset",
    image: placeholder.vr,
    title: "VRMN-bD: A Multi-modal Natural Behavior Dataset of Immersive Human Fear Responses in VR Stand-up Interactive Games",
    authors: "He Zhang, Xinyang Li, Yuanxi Sun, Xinyi Fu*, Christine Qiu, and John M. Carroll",
    meta: "2024 IEEE Conference Virtual Reality and 3D User Interfaces.",
    doi: "https://doi.org/10.1109/VR58804.2024.00054"
  },
  {
    year: "2024",
    venue: "Frontiers",
    tag: "Health",
    image: "https://d2csxpduxe849s.cloudfront.net/media/E32629C6-9347-4F84-81FEAEF7BFA342B3/1CBB5345-4813-426F-A82841B378F2B360/72CF8827-2F40-4E40-944333124AEC7572/WebsiteWebP_XL-FCOMP_Main Visual_Purple_Website.webp",
    title: "Editorial: Body-centric computing for health and wellbeing",
    authors: "Zhuying Li, Xipei Ren, Chengyu Liu, Ding Ding, and Xinyi Fu",
    meta: "Frontiers in Computer Science, Volume 6.",
    doi: "https://doi.org/10.3389/fcomp.2024.1393102"
  },
  {
    year: "2024",
    venue: "CHCHI'23",
    tag: "Metaverse",
    image: placeholder.hci,
    title: "Meta-Home: Smart Home Digital Twin Design from the Perspective of Smart metaverse",
    authors: "Cheng Xue, Yingting Gao, Ananda Robin, Jiachen Du, Qianyao Xu, and Xinyi Fu*",
    meta: "Proceedings of the Eleventh International Symposium of Chinese CHI.",
    doi: "https://doi.org/10.1145/3629606.3629635"
  },
  {
    year: "2024",
    venue: "CHCHI'23",
    tag: "VR",
    image: placeholder.vr,
    title: "Decoding Fear: Exploring User Experiences in Virtual Reality Horror Games",
    authors: "He Zhang, Xinyang Li, Christine Qiu, and Xinyi Fu*",
    meta: "Proceedings of the Eleventh International Symposium of Chinese CHI.",
    doi: "https://doi.org/10.1145/3629606.3629646"
  },
  {
    year: "2024",
    venue: "CHCHI'23",
    tag: "Smart Home",
    image: placeholder.hci,
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
    image: placeholder.heritage,
    title: "Restoring Dunhuang Murals: Crafting Cultural Heritage Preservation Knowledge into Immersive Virtual Reality Experience Design",
    authors: "Tongxin Sun, Tongtong Jin, Yuru Huang, Meng Li, Yun Wang, Zhe Jia & Xinyi Fu*",
    meta: "International Journal of Human-Computer Interaction, 40(8), 2019-2040.",
    doi: "https://doi.org/10.1080/10447318.2023.2232976"
  },
  {
    year: "2023",
    venue: "科技导报",
    tag: "智能家居",
    image: placeholder.hci,
    title: "面向未来的智能家居前沿进展",
    authors: "付心仪, 张鹤, 薛程, 孙童心",
    meta: "科技导报, 2023, 41(8):36-52.",
    doi: "https://doi.org/10.3981/j.issn.1000-7857.2023.08.004"
  },
  {
    year: "2023",
    venue: "计算机辅助设计与图形学学报",
    tag: "Affective Computing",
    image: "https://www.sciengine.com/img/issue/5f320527ffde8a5aa7788a02",
    title: "隐私友好的步态数据采集与情绪识别方法",
    authors: "肖虹, 唐健凯, 丘雨涵, 付心仪*",
    meta: "计算机辅助设计与图形学学报, 2023, 35(02):203-212.",
    doi: "https://doi.org/10.3724/SP.J.1089.2023.20042"
  },
  {
    year: "2023",
    venue: "科技导报",
    tag: "Design Innovation",
    image: placeholder.hci,
    title: "学科交叉与设计创新研究进展",
    authors: "徐迎庆, 王韫, 付心仪, 等",
    meta: "科技导报, 2023, 41(8):17-25.",
    doi: "https://doi.org/10.3981/j.issn.1000-7857.2023.08.002"
  },
  {
    year: "2024",
    venue: "Chinese CHI'22",
    tag: "Accessibility",
    image: placeholder.hci,
    title: "EmoSparkle: Tangible Prototype to Convey Visual Expressions for Visually Impaired Individuals in Real-time Conversations",
    authors: "Zhe Sun, Robin Ananda, and Xinyi Fu*",
    meta: "Proceedings of the Tenth International Symposium of Chinese CHI.",
    doi: "https://doi.org/10.1145/3565698.3565768"
  },
  {
    year: "2024",
    venue: "Chinese CHI'22",
    tag: "Affective System",
    image: placeholder.affect,
    title: "User-friendly interactive affective system to leverage aggressive driving behavior",
    authors: "Keqi Chen, Xinyi Fu*, and Chris Speed",
    meta: "Proceedings of the Tenth International Symposium of Chinese CHI.",
    doi: "https://doi.org/10.1145/3565698.3565769"
  },
  {
    year: "2022",
    venue: "Springer",
    tag: "Smart Environment",
    image: "https://media.springernature.com/w153/springer-static/cover/book/978-3-031-09729-4.jpg",
    title: "Design Strategy of Multimodal Perception System for Smart Environment",
    authors: "Jie Liu, Dan Luo, Xinyi Fu, Qi Lu, and Karen Yixin Kang",
    meta: "Internet of Things for Smart Environments, Springer, 93-115.",
    doi: "https://doi.org/10.1007/978-3-031-09729-4_6"
  },
  {
    year: "2022",
    venue: "包装工程",
    tag: "智能家居",
    image: placeholder.hci,
    title: "智能家居综合实验平台设计研究与应用实践",
    authors: "付心仪, 张鹤, 薛程, 李欣洋, 孙喆, 徐迎庆*",
    meta: "包装工程, 2022, 43(16):50-58+108.",
    doi: "https://doi.org/10.19554/j.cnki.1001-3563.2022.16.005"
  },
  {
    year: "2021",
    venue: "ACII",
    tag: "Affective Computing",
    image: placeholder.affect,
    title: "Gesture based fear recognition using non-performance dataset from VR horror games",
    authors: "Xinyi Fu, Cheng Xue, Qiuyi Yin, Yu Jiang, Ye Li, Yichen Cai and Weilin Sun",
    meta: "2021 9th International Conference on Affective Computing and Intelligent Interaction.",
    doi: ""
  },
  {
    year: "2021",
    venue: "MobileHCI'21",
    tag: "VR Shopping",
    image: placeholder.vr,
    title: "Mobile Screen-based User Interface Design Guideline for Panoramic VR in Shopping Scene",
    authors: "Xinyi Wang, Cheng Xue, Tongxin Sun, Jingyi Liu, and Xinyi Fu*",
    meta: "Proceedings of the 23rd International Conference on Mobile Human-Computer Interaction.",
    doi: "https://doi.org/10.1145/3447526.3472055"
  },
  {
    year: "2021",
    venue: "敦煌研究",
    tag: "Cultural Heritage",
    image: placeholder.heritage,
    title: "敦煌莫高窟烟熏壁画的数字化色彩复原研究",
    authors: "付心仪, 李岩, 孙志军, 杜鹃, 王凤平, 徐迎庆*",
    meta: "敦煌研究, 2021(01):137-147.",
    doi: ""
  },
  {
    year: "2020",
    venue: "计算机辅助设计与图形学学报",
    tag: "Affective Computing",
    image: placeholder.affect,
    title: "基于BGRU-FUS-NN神经网络的姿态情感计算方法研究",
    authors: "付心仪, 蔡天阳, 薛程, 张宇翔, 徐迎庆*",
    meta: "计算机辅助设计与图形学学报, 2020, 32(07):1070-1079.",
    doi: ""
  },
  {
    year: "2020",
    venue: "计算机辅助设计与图形学学报",
    tag: "Affective Computing",
    image: placeholder.affect,
    title: "基于姿态的情感计算综述",
    authors: "付心仪, 薛程, 李希, 张玥泽, 蔡天阳",
    meta: "计算机辅助设计与图形学学报, 2020, 32(07):1052-1061.",
    doi: ""
  },
  {
    year: "2020",
    venue: "装饰",
    tag: "Design",
    image: placeholder.hci,
    title: "信息时代背景下的新兴大众化设计",
    authors: "郝强, 付心仪*, 徐迎庆",
    meta: "装饰, 2020(03):38-42.",
    doi: ""
  },
  {
    year: "2020",
    venue: "CHI'20",
    tag: "VR Heritage",
    image: placeholder.heritage,
    title: "RestoreVR: Generating Embodied Knowledge and Situated Experience of Dunhuang Mural Conservation via Interactive Virtual Reality",
    authors: "Xinyi Fu, Yaxin Zhu, Zhijing Xiao, Yingqing Xu, and Xiaojuan Ma*",
    meta: "Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems.",
    doi: ""
  },
  {
    year: "2020",
    venue: "DSA",
    tag: "Collaboration",
    image: placeholder.hci,
    title: "coisTable: An Individual-and-Spatial-Aware Tabletop System for Co-located Collaboration",
    authors: "Zanzhen Huang, Yaxin Zhu, Xiaofei Mao, Tianxin Su, Xinyi Fu and Guangzheng Fei*",
    meta: "6th International Conference on Dependable Systems and Their Applications.",
    doi: ""
  },
  {
    year: "2019",
    venue: "装饰",
    tag: "Cultural Heritage",
    image: placeholder.heritage,
    title: "破损壁画的数字化复原研究——以敦煌壁画为例",
    authors: "付心仪, 麻晓娟*, 孙志军",
    meta: "装饰, 2019(01):21-27.",
    doi: ""
  },
  {
    year: "2017",
    venue: "装饰",
    tag: "Visualization",
    image: placeholder.hci,
    title: "信息可视化的发展与思考",
    authors: "付心仪, 刘世霞, 徐迎庆*",
    meta: "装饰, 2017(04):16-19.",
    doi: ""
  },
  {
    year: "2017",
    venue: "ISPRS",
    tag: "Mural Restoration",
    image: placeholder.heritage,
    title: "Line-drawing Enhanced Interactive Mural Restoration for Dunhuang Mogao Grottoes",
    authors: "Xinyi Fu, Yi Han, Zhijun Sun, Xiaojuan Ma and Yingqing Xu*",
    meta: "ISPRS Annals of the Photogrammetry, Remote Sensing and Spatial Information Sciences.",
    doi: ""
  },
  {
    year: "2017",
    venue: "J Raman Spectrosc",
    tag: "Heritage Science",
    image: placeholder.heritage,
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
      const doi = paper.doi
        ? `<a class="metainfo bracket-link" href="${paper.doi}">[DOI]</a>`
        : "";
      return `
        <article class="paper">
          <a class="paper-thumb" href="${paper.doi || "#"}" aria-label="${paper.title}">
            <img src="${paper.image}" alt="${paper.title}" loading="lazy" />
          </a>
          <div class="paper-meta">
            <h5>${paper.title}</h5>
            <p class="authors">${paper.authors}</p>
            <p class="paper-desc">${paper.meta}</p>
            <p class="paper-links">
              <span class="venue">${paper.venue}</span>
              <span class="tag">${paper.tag}</span>
              ${doi}
            </p>
          </div>
        </article>
      `;
    })
    .join("");
}

renderPublications();
