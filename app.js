const siteData = {
  nav: [
    { id: "home", label: "Home" },
    { id: "members", label: "Members" },
    { id: "news", label: "News" },
    { id: "activities", label: "Activities" },
    { id: "publications", label: "Publications" },
    { id: "links", label: "Links" },
  ],
  contact: {
    lab: "感知訊號處理實驗室",
    address: "新竹市東區大學路1001號 (工程四館711)",
    tel: "(03) 3366-3700 ext. 6603",
    email: "percept711@gmail.com",
  },
  intro: [
    "我們的團隊由一群熱愛科學、專業領域的專家組成，並擁有豐富的經驗和卓越的專業知識。",
    "我們的研究項目涵蓋了語音識別算法、語音合成技術、語音增強方法等多個方面。我們以解決實際問題為導向，並努力將我們的研究成果轉化為實際應用，以促進語音技術的發展和社會進步。",
    "在本網站上，您可以了解更多關於我們的研究項目、成果發表、團隊成員等詳細信息。我們也歡迎與您合作，如果您對我們的研究領域感興趣或有任何問題，請隨時與我們聯繫。",
  ],
  focus: [
    {
      title: "Speech & Speaker Understanding",
      description: "語音辨識(ASR)、語音情緒辨識(SER)、語音活動偵測、語者分離(speaker diarization)、語者辨識(SID/SV)。",
    },
    {
      title: "Speech Generation & Voice Conversion",
      description: "語音合成(TTS)、語音轉換(VC)、電子喉等語音生成與轉換技術。",
    },
    {
      title: "Speech Enhancement & Restoration",
      description: "語音強化、語音去噪、去混響、去回響(AEC)、人聲樂器分離(vocal/music separation)。",
    },
    {
      title: "Spatial Audio & Auditory Perception",
      description: "顱內空間定位(HRTF)、音訊升混(upmixing)、電子耳聽損補償、聽覺感知模型時頻譜調變。",
    },
    {
      title: "Music & Singing Voice Intelligence",
      description: "電吉他獨奏自動轉譜、音樂情緒辨識(MER)、音高追蹤、歌唱音色屬性分析。",
    },
    {
      title: "Audio Security & Representation Learning",
      description: "音訊深偽偵測(Spoofing Detection)、SSL 分析與音訊表徵學習。",
    },
  ],
  members: [
    {
      title: "指導教授",
      people: [
        {
          name: "冀泰石 教授",
          role: "Professor",
          initials: "冀",
          links: [
            {
              label: "Google Scholar",
              url: "https://scholar.google.com/citations?hl=zh-TW&user=34b1nrwAAAAJ&view_op=list_works&sortby=pubdate",
            },
            {
              label: "Professor profile",
              url: "https://iece.dee.nycu.edu.tw/teachers.php?pa=getItem&teacher_id=254&locale=tw",
            },
          ],
        },
      ],
      featured: true,
    },
    {
      title: "博班生 PHD",
      people: [
        { name: "謝佩瑾" },      
      ],
    },
    {
      title: "博班畢業生 PHD Alumni",
      people: [
        { name: "沈奕良",links: [
            {
              label: "Personal website",
              url: "https://sites.google.com/view/yihliang/%E9%A6%96%E9%A0%81",
            },
          ],
        },
        { name: "張家銘" },
      
      ],
    },
    {
      title: "碩班生 Masters",
      people: [
        
        { name: "陳昱昕" },
        { name: "黃建廷" },
        { name: "吳邦誠" },
        { name: "袁晞閔" },
        { name: "謝炘恩" },
        { name: "歐峻銘" },
        { name: "王靖雅" },
        { name: "張芷瑄" },
        { name: "陳柏旭" },
        { name: "楊士賢" },
        { name: "陳岳維" },
        { name: "董其曄" },
        { name: "陳映汝" },
      ],
    },
    {
      title: "碩班畢業生 Master Alumni",
      people: [
        { name: "黃肇元" },
        { name: "李翊瑄" },
        { name: "許耀雲" },
        { name: "陳姿羽" },
        { name: "陳明佐" },
        { name: "洪文成" },
        { name: "陳星瑋" },
        { name: "蕭博文" },
        { name: "郭子萱" },
        { name: "高平" },
        { name: "曾柏維" },
        { name: "黎柏均" },
        { name: "楊元宏" },
        { name: "蔡采諭" },
        { name: "張育滔" },
        { name: "游承祐" },
        { name: "彭江任" },
        { name: "詹昀儒" },
        { name: "張智翔" },
        { name: "賴亞青" },
        { name: "吳孟軒" },
        { name: "陳昕皜" },
        { name: "周宣呈" },
        { name: "簡詠倫" },
        { name: "林建宇" },
        { name: "李其芳" },
        { name: "陳信華",links: [
            {
              label: "Personal website",
              url: "https://ooasd56.wixsite.com/cecilia",
            },
          ],
        },
        { name: "林昕妍" },
        { name: "趙偉康" },
        { name: "張耕維" },
        { name: "趙蓉根" },
        { name: "潘彥舟" },
        { name: "吳文詠" },
        { name: "殷羣" },
        { name: "胡嘉安" },
        { name: "藍天祈" },
        { name: "卞允辰" },
        { name: "黃先鼎" },
        { name: "陳玉山" },
        { name: "譚婕" },
        { name: "陳少軒" },
      ],
    },
  ],
  
  news: [
    {
      title: "狂賀",
      date: "2026",
      description: "TEST : 冀泰石教授與謝佩璟學姊平安從ICASSP2026光榮歸國 >< ",
    },
    {
      title: "狂賀",
      date: "2025",
      description: "TT",
    },
    {
      title: "狂賀",
      date: "2024",
      description: "測試",
    },
  ],
  activities: [
    {
      year: "2025",
      title: "期初聚餐",
      image: "assets/2025期初聚餐.jpg",
    },
    {
      year: "2025",
      title: "畢業典禮",
      image: "assets/2025畢業典禮.jpg",
    },
    {
      year: "2025",
      title: "謝師宴",
      image: "assets/2025謝師宴.jpg",
    },
    {
      year: "2024",
      title: "教師節",
      image: "assets/2024教師節.jpg",
    },
    {
      year: "2024",
      title: "老師生日",
      image: "assets/2024老師生日.jpg",
    },
  ],
  publications: [
    {
        "year":  "2026",
        "items":  [
                      {
                          "title":  "Connecting Layer-Wise Representation of Wavlm with Spectro-Temporal Modulation on Speaker Verification",
                          "authors":  "SH Chen, PC Hsieh, YL Shen, TS Chi, YF Liao, CH Lin, JW Xu",
                          "venue":  "ICASSP 2026-2026 IEEE International Conference on Acoustics, Speech and …, 2026",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:f2IySw72cVMC"
                      },
                      {
                          "title":  "EEND-SAA: Enrollment-Less Main Speaker Voice Activity Detection Using Self-Attention Attractors",
                          "authors":  "WY Wu, PC Hsieh, TS Chi",
                          "venue":  "ICASSP 2026-2026 IEEE International Conference on Acoustics, Speech and …, 2026",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:pyW8ca7W8N0C"
                      }
                  ]
    },
    {
        "year":  "2025",
        "items":  [
                      {
                          "title":  "Ensemble Learning Based HRTF Personalization Using Anthropometric Features",
                          "authors":  "YIHL SHEN, TZUH KUO, TAIS CHI",
                          "venue":  "TechRxiv 2025 (0508), 2025",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:lSLTfruPkqcC"
                      },
                      {
                          "title":  "Spatial grouping as a method to improve personalized head-related transfer function prediction",
                          "authors":  "KW Chang, YL Shen, TS Chi",
                          "venue":  "JASA Express Letters 5 (3), 2025",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:a0OBvERweLwC"
                      },
                      {
                          "title":  "Spectro-temporal modulations incorporated two-stream robust speech emotion recognition",
                          "authors":  "YL Shen, PC Hsieh, TS Chi",
                          "venue":  "IEEE Transactions on Affective Computing 16 (3), 1693-1704, 2025",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:dfsIfKJdRG4C"
                      },
                      {
                          "title":  "Tonality-Based Accompaniment-Guided Automatic Singing Evaluation",
                          "authors":  "PC Hsieh, YL Shen, NS Tran, TS Chi",
                          "venue":  "Proceedings of the Annual Conference of the International Speech …, 2025",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:D03iK_w7-QYC"
                      }
                  ]
    },
    {
        "year":  "2024",
        "items":  [
                      {
                          "title":  "Band-Split Inter-SubNet: Band-Split with Subband Interaction for Monaural Speech Enhancement",
                          "authors":  "YC Pan, YL Shen, YF Liao, TS Chi",
                          "venue":  "2024 Asia Pacific Signal and Information Processing Association Annual …, 2024",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:cFHS6HbyZ2cC"
                      },
                      {
                          "title":  "Multi-Resolution Singing Voice Separation",
                          "authors":  "YL Shen, YC Lai, TS Chi",
                          "venue":  "2024 27th Conference of the Oriental COCOSDA International Committee for the …, 2024",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:4OULZ7Gr8RgC"
                      },
                      {
                          "title":  "SVSNet+: Enhancing Speaker Voice Similarity Assessment Models with Representations from Speech Foundation Models",
                          "authors":  "C Yin, TS Chi, Y Tsao, HM Wang",
                          "venue":  "arXiv preprint arXiv:2406.08445, 2024",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:fPk4N6BV_jEC"
                      },
                      {
                          "title":  "Single-lead ECG cross-session identification based on conditional domain adversarial network",
                          "authors":  "XH Chen, YL Shen, TS Chi",
                          "venue":  "IEEE Sensors Journal 24 (11), 17865-17875, 2024",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:zA6iFVUQeVQC"
                      }
                  ]
    },
    {
        "year":  "2023",
        "items":  [
                      {
                          "title":  "Clinical standardization for the detection of hemispheric dominance for steady-state auditory evoked fields in normal hearing",
                          "authors":  "MC Wang, TS Chi, AS Shiao, LPH Li, JC Hsieh",
                          "venue":  "Journal of the Chinese Medical Association 86 (11), 1015-1019, 2023",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:HoB7MX3m0LUC"
                      },
                      {
                          "title":  "Residual Echo Suppression using Spatial Feature for Stereo Acoustic Echo Cancellation",
                          "authors":  "HC Chou, YL Shen, MH Wu, BW Shih, TS Chi",
                          "venue":  "2023 Asia Pacific Signal and Information Processing Association Annual …, 2023",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:3s1wT3WcHBgC"
                      },
                      {
                          "title":  "A Dual-Channel Three-Stage Model for DoA and Speech Enhancement",
                          "authors":  "MH Wu, YL Shen, HC Chou, BW Shih, TS Chi",
                          "venue":  "2023 Asia Pacific Signal and Information Processing Association Annual …, 2023",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:ZHo1McVdvXMC"
                      },
                      {
                          "title":  "Harmonic-aware tri-path convolution recurrent network for singing voice separation",
                          "authors":  "YL Shen, YC Lai, TS Chi",
                          "venue":  "JASA Express Letters 3 (7), 2023",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:J_g5lzvAfSwC"
                      },
                      {
                          "title":  "Audio-visual Mandarin electrolaryngeal speech voice conversion",
                          "authors":  "YL Chien, HH Chen, MC Yen, SW Tsai, HM Wang, Y Tsao, TS Chi",
                          "venue":  "arXiv preprint arXiv:2306.06652, 2023",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:g5m5HwL7SMYC"
                      },
                      {
                          "title":  "Mandarin electrolaryngeal speech voice conversion using cross-domain features",
                          "authors":  "HH Chen, YL Chien, MC Yen, SW Tsai, Y Tsao, T Chi, HM Wang",
                          "venue":  "arXiv preprint arXiv:2306.06653, 2023",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:M05iB0D1s5AC"
                      },
                      {
                          "title":  "Tinnitus and treatment-resistant depression",
                          "authors":  "B Langguth, AS Shiao, JT Lai, TS Chi, F Weber, M Schecklmann, LPH Li",
                          "venue":  "Progress in Brain Research 281, 131-147, 2023",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:pqnbT2bcN3wC"
                      }
                  ]
    },
    {
        "year":  "2022",
        "items":  [
                      {
                          "title":  "Audio processing method, audio processing device, and associated non-transitory computer-readable medium",
                          "authors":  "TS Chi, YC Lai, YL Shen, YH Chu, CC Cheng",
                          "venue":  "US Patent 11,495,242, 2022",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:NaGl4SEjCO4C"
                      },
                      {
                          "title":  "A fast converge spectral modulation sensitive active noise control system",
                          "authors":  "KM Cheong, YL Shen, TS Chi",
                          "venue":  "2022 Asia-Pacific Signal and Information Processing Association Annual …, 2022",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:2P1L_qKh6hAC"
                      },
                      {
                          "title":  "Sound pulses spot home invaders",
                          "authors":  "A Thompson",
                          "venue":  "Scilight 2022 (20), 201105, 2022",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:SeFeTyx0c_EC"
                      },
                      {
                          "title":  "Sound pulses spot home invaders",
                          "authors":  "KM Cheong, YL Shen, TS Chi",
                          "venue":  "",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:yD5IFk8b50cC"
                      },
                      {
                          "title":  "Pros and cons in tinnitus brain: Enhancement of global connectivity for alpha and delta waves",
                          "authors":  "YH Li, TS Chi, AS Shiao, LPH Li, JC Hsieh",
                          "venue":  "Progress in Neuro-Psychopharmacology and Biological Psychiatry 115, 110497, 2022",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:70eg2SAEIzsC"
                      },
                      {
                          "title":  "Active acoustic scene monitoring through spectro-temporal modulation filtering for intruder detection",
                          "authors":  "KM Cheong, YL Shen, TS Chi",
                          "venue":  "The Journal of the Acoustical Society of America 151 (4), 2444-2452, 2022",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:O3NaXMp0MMsC"
                      },
                      {
                          "title":  "Perceptual Characteristics Based Multi-objective Model for Speech Enhancement.",
                          "authors":  "CJ Peng, YJ Chan, YL Shen, C Yu, Y Tsao, TS Chi",
                          "venue":  "INTERSPEECH, 211-215, 2022",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:vV6vV6tmYwMC"
                      }
                  ]
    },
    {
        "year":  "2021",
        "items":  [
                      {
                          "title":  "Extending music based on emotion and tonality via generative adversarial network",
                          "authors":  "BW Tseng, YL Shen, TS Chi",
                          "venue":  "ICASSP 2021-2021 IEEE International Conference on Acoustics, Speech and …, 2021",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:BqipwSGYUEgC"
                      },
                      {
                          "title":  "Attention-based multi-task learning for speech-enhancement and speaker-identification in multi-speaker dialogue scenario",
                          "authors":  "CJ Peng, YJ Chan, C Yu, SS Wang, Y Tsao, TS Chi",
                          "venue":  "2021 IEEE International Symposium on Circuits and Systems (ISCAS), 1-5, 2021",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:YFjsv_pBGBYC"
                      },
                      {
                          "title":  "MoEVC: A mixture of experts voice conversion system with sparse gating mechanism for online computation acceleration",
                          "authors":  "YT Chang, YH Yang, YH Peng, SS Wang, TS Chi, Y Tsao, HM Wang",
                          "venue":  "2021 12th International Symposium on Chinese Spoken Language Processing …, 2021",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:NMxIlDl6LWMC"
                      },
                      {
                          "title":  "Speech enhancement-assisted stargan voice conversion in noisy environments",
                          "authors":  "YJ Chan, CJ Peng, SS Wang, HM Wang, Y Tsao, TS Chi",
                          "venue":  "arXiv preprint arXiv:2110.09923, 2021",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:GnPB-g6toBAC"
                      }
                  ]
    },
    {
        "year":  "2020",
        "items":  [
                      {
                          "title":  "A 1.5 mW programmable acoustic signal processor for hearing assistive devices with speech intelligibility enhancement",
                          "authors":  "YJ Lin, YC Lee, HM Liu, H Chiueh, TS Chi, CH Yang",
                          "venue":  "IEEE Transactions on Circuits and Systems I: Regular Papers 67 (12), 4984-4993, 2020",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:hMod-77fHWUC"
                      },
                      {
                          "title":  "A multi-dilation and multi-resolution fully convolutional network for singing melody extraction",
                          "authors":  "P Gao, CY You, TS Chi",
                          "venue":  "ICASSP 2020-2020 IEEE International Conference on Acoustics, Speech and …, 2020",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:JV2RwH3_ST0C"
                      },
                      {
                          "title":  "A 2.17-mW acoustic DSP processor with CNN-FFT accelerators for intelligent hearing assistive devices",
                          "authors":  "YC Lee, TS Chi, CH Yang",
                          "venue":  "IEEE Journal of Solid-State Circuits 55 (8), 2247-2258, 2020",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:blknAaTinKkC"
                      }
                  ]
    },
    {
        "year":  "2019",
        "items":  [
                      {
                          "title":  "MoEVC: A Mixture-of-experts Voice Conversion System with Sparse Gating Mechanism for Accelerating Online Computation",
                          "authors":  "YT Chang, YH Yang, YH Peng, SS Wang, TS Chi, Y Tsao, HM Wang",
                          "venue":  "arXiv preprint arXiv:1912.11984, 2019",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:k_IJM867U9cC"
                      },
                      {
                          "title":  "A multi-scale fully convolutional network for singing melody extraction",
                          "authors":  "P Gao, CY You, TS Chi",
                          "venue":  "2019 Asia-Pacific Signal and Information Processing Association Annual …, 2019",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:maZDTaKrznsC"
                      },
                      {
                          "title":  "CNN based two-stage multi-resolution end-to-end model for singing melody extraction",
                          "authors":  "MT Chen, BJ Li, TS Chi",
                          "venue":  "ICASSP 2019-2019 IEEE International Conference on Acoustics, Speech and …, 2019",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:TFP_iSt0sucC"
                      },
                      {
                          "title":  "Autoencoding HRTFs for DNN based HRTF personalization using anthropometric features",
                          "authors":  "TY Chen, TH Kuo, TS Chi",
                          "venue":  "ICASSP 2019-2019 IEEE International Conference on Acoustics, Speech and …, 2019",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:bEWYMUwI8FkC"
                      },
                      {
                          "title":  "Reinforcement learning based speech enhancement for robust speech recognition",
                          "authors":  "YL Shen, CY Huang, SS Wang, Y Tsao, HM Wang, TS Chi",
                          "venue":  "ICASSP 2019-2019 IEEE International Conference on Acoustics, Speech and …, 2019",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:RHpTSmoSYBkC"
                      },
                      {
                          "title":  "A 2.17 mW acoustic DSP processor with CNN-FFT accelerators for intelligent hearing aided devices",
                          "authors":  "YC Lee, TS Chi, CH Yang",
                          "venue":  "2019 IEEE International Conference on Artificial Intelligence Circuits and …, 2019",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:M3NEmzRMIkIC"
                      },
                      {
                          "title":  "Design and In Vivo Verification of a CMOS Bone-Guided Cochlear Implant Microsystem",
                          "authors":  "XH Qian, YC Wu, TY Yang, CH Cheng, HC Chu, WH Cheng, TY Yen, ...",
                          "venue":  "IEEE Transactions on Biomedical Engineering 66 (11), 3156-3167, 2019",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:j3f4tGmQtD8C"
                      }
                  ]
    },
    {
        "year":  "2018",
        "items":  [
                      {
                          "title":  "Exploring redundancy of HRTFs for fast training DNN-based HRTF personalization",
                          "authors":  "TY Chen, PW Hsiao, TS Chi",
                          "venue":  "2018 Asia-Pacific Signal and Information Processing Association Annual …, 2018",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:iH-uZ7U-co4C"
                      },
                      {
                          "title":  "A hybrid neural network based on the duplex model of pitch perception for singing melody extraction",
                          "authors":  "H Chou, MT Chen, TS Chi",
                          "venue":  "2018 IEEE International Conference on Acoustics, Speech and Signal …, 2018",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:_Qo2XoVZTnwC"
                      },
                      {
                          "title":  "A generative auditory model embedded neural network for speech processing",
                          "authors":  "YW Lo, YL Shen, YF Liao, TS Chi",
                          "venue":  "2018 IEEE International Conference on Acoustics, Speech and Signal …, 2018",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:e5wmG9Sq2KIC"
                      },
                      {
                          "title":  "Singing voice correction using canonical time warping",
                          "authors":  "YJ Luo, MT Chen, TS Chi, L Su",
                          "venue":  "2018 IEEE International Conference on Acoustics, Speech and Signal …, 2018",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:hFOr9nPyWt4C"
                      }
                  ]
    },
    {
        "year":  "2017",
        "items":  [
                      {
                          "title":  "Plastic multi-resolution auditory model based neural network for speech enhancement",
                          "authors":  "CY Lai, YW Lo, YL Shen, TS Chi",
                          "venue":  "2017 Asia-Pacific Signal and Information Processing Association Annual …, 2017",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:TQgYirikUcIC"
                      },
                      {
                          "title":  "基於聽覺感知模型之類神經網路及其在語者識別上之應用 (Two-stage Attentional Auditory Model Inspired Neural Network and Its Application to Speaker Identification)[In Chinese]",
                          "authors":  "YW Lo, YF Liao, TS Chi",
                          "venue":  "Proceedings of the 29th Conference on Computational Linguistics and Speech …, 2017",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:HDshCWvjkbEC"
                      },
                      {
                          "title":  "基於雙工音高感知模型之神經網路旋律抽取演算法 (The duplex model of pitch perception inspired neural network for melody extraction)[In Chinese]",
                          "authors":  "H Chou, TS Chi",
                          "venue":  "Proceedings of the 29th Conference on Computational Linguistics and Speech …, 2017",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:mB3voiENLucC"
                      },
                      {
                          "title":  "A bone-guided cochlear implant CMOS microsystem preserving acoustic hearing",
                          "authors":  "XH Qian, YC Wu, TY Yang, CH Cheng, HC Chu, WH Cheng, TY Yen, ...",
                          "venue":  "2017 Symposium on VLSI Circuits, C46-C47, 2017",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:r0BpntZqJG4C"
                      },
                      {
                          "title":  "Dereverberation based on bin-wise temporal variations of complex spectrogram",
                          "authors":  "TH Chen, C Huang, TS Chi",
                          "venue":  "2017 IEEE International Conference on Acoustics, Speech and Signal …, 2017",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:qUcmZB5y_30C"
                      },
                      {
                          "title":  "Simulations of High-Frequency Vocoder on Mandarin Speech Recognition for Acoustic Hearing Preserved Cochlear Implant.",
                          "authors":  "TC Wu, TS Chi, CF Lee",
                          "venue":  "Interspeech, 196-200, 2017",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:-f6ydRqryjwC"
                      }
                  ]
    },
    {
        "year":  "2016",
        "items":  [
                      {
                          "title":  "Acoustic scene change detection by spectro-temporal filtering on spectrogram using chirps",
                          "authors":  "CH Lin, KM Cheong, MC Huang, MY Chen, CK Chang, TS Chi",
                          "venue":  "2016 Asia-Pacific Signal and Information Processing Association Annual …, 2016",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:L8Ckcad2t8MC"
                      },
                      {
                          "title":  "Interaural coherence induced ideal binary mask for binaural speech separation and dereverberation",
                          "authors":  "YT Chen, TH Chen, MC Huang, TS Chi",
                          "venue":  "2016 10th International Symposium on Chinese Spoken Language Processing …, 2016",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:IWHjjKOFINEC"
                      },
                      {
                          "title":  "Sparse Coding Based Music Genre Classification Using Spectro-Temporal Modulations.",
                          "authors":  "KC Hsu, CS Lin, TS Chi",
                          "venue":  "ISMIR, 744-750, 2016",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:9ZlFYXVOiuMC"
                      },
                      {
                          "title":  "Neural network based next-song recommendation",
                          "authors":  "KC Hsu, SY Chou, YH Yang, TS Chi",
                          "venue":  "arXiv preprint arXiv:1606.07722, 2016",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:3fE2CSJIrl8C"
                      },
                      {
                          "title":  "Discriminative Layered Nonnegative Matrix Factorization for Speech Separation.",
                          "authors":  "CC Hsu, TS Chi, JT Chien",
                          "venue":  "INTERSPEECH, 560-564, 2016",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:dhFuZR0502QC"
                      },
                      {
                          "title":  "A Spectral Modulation Sensitivity Weighted Pre-Emphasis Filter for Active Noise Control System.",
                          "authors":  "KM Cheong, YY Wang, TS Chi",
                          "venue":  "INTERSPEECH, 2572-2576, 2016",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:MXK_kJrjxJIC"
                      }
                  ]
    },
    {
        "year":  "2015",
        "items":  [
                      {
                          "title":  "Detection of Common Mistakes in Novice Violin Playing.",
                          "authors":  "YJ Luo, L Su, YH Yang, TS Chi",
                          "venue":  "ISMIR, 316-322, 2015",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:4TOpqqG69KYC"
                      },
                      {
                          "title":  "Robust voice activity detection algorithm based on feature of frequency modulation of harmonics and its DSP implementation",
                          "authors":  "CC Hsu, KM Cheong, TS Chi, Y Tsao",
                          "venue":  "IEICE TRANSACTIONS on Information and Systems 98 (10), 1808-1817, 2015",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:hC7cP41nSMkC"
                      },
                      {
                          "title":  "Layered nonnegative matrix factorization for speech separation.",
                          "authors":  "CC Hsu, JT Chien, TS Chi",
                          "venue":  "INTERSPEECH, 628-632, 2015",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:0EnyYjriUFMC"
                      },
                      {
                          "title":  "A two-stage singing voice separation algorithm using spectro-temporal modulation features.",
                          "authors":  "FZ Yen, MC Huang, TS Chi",
                          "venue":  "INTERSPEECH, 3321-3324, 2015",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:QIV2ME_5wuYC"
                      },
                      {
                          "title":  "A hearing model to estimate Mandarin speech intelligibility for the hearing impaired patients",
                          "authors":  "PC Tsai, ST Lin, WC Lee, CC Hsu, TS Chi, CF Lee",
                          "venue":  "2015 IEEE International Conference on Acoustics, Speech and Signal …, 2015",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:YOwf2qJgpHMC"
                      },
                      {
                          "title":  "Modulation Wiener filter for improving speech intelligibility",
                          "authors":  "CC Hsu, KM Cheong, JT Chien, TS Chi",
                          "venue":  "2015 IEEE International Conference on Acoustics, Speech and Signal …, 2015",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:LkGwnXOMwfcC"
                      }
                  ]
    },
    {
        "year":  "2014",
        "items":  [
                      {
                          "title":  "A non-uniformly distributed three-microphone array for speech enhancement in directional and diffuse noise field",
                          "authors":  "CC Hsu, KM Cheong, TS Chi",
                          "venue":  "The 9th International Symposium on Chinese Spoken Language Processing, 574-578, 2014",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:8k81kl-MbHgC"
                      },
                      {
                          "title":  "Singing voice separation using spectro-temporal modulation features",
                          "authors":  "FYYJ Luo, TS Chi",
                          "venue":  "ISMIR, 617-622, 2014",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:mVmsd5A6BfQC"
                      },
                      {
                          "title":  "Binary mask estimation based on frequency modulations",
                          "authors":  "CC Hsu, JT Chien, TS Chi",
                          "venue":  "Proc. Interspeech 2014, 993-997, 2014",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:UebtZRa9Y70C"
                      }
                  ]
    },
    {
        "year":  "2013",
        "items":  [
                      {
                          "title":  "Categorical rating of narrowband Mandarin speech quality",
                          "authors":  "KL Huang, TS Chi",
                          "venue":  "2013 Asia-Pacific Signal and Information Processing Association Annual …, 2013",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:qxL8FJ1GzNcC"
                      },
                      {
                          "title":  "Spatial-cue-based multi-band binaural noise reduction for hearing aids",
                          "authors":  "CY Yang, WS Chou, KC Chang, CW Liu, TS Chi, S Jou",
                          "venue":  "SiPS 2013 Proceedings, 278-283, 2013",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:eQOLeE2rZwMC"
                      },
                      {
                          "title":  "Voice activity detection based on frequency modulation of harmonics",
                          "authors":  "CC Hsu, TE Lin, JH Chen, TS Chi",
                          "venue":  "2013 IEEE International Conference on Acoustics, Speech and Signal …, 2013",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:qjMakFHDy7sC"
                      },
                      {
                          "title":  "A precedence effect based far-field DoA estimation algorithm",
                          "authors":  "WS Chou, TS Chi",
                          "venue":  "2013 IEEE International Symposium on Circuits and Systems (ISCAS), 2175-2178, 2013",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:kNdYIx-mwKoC"
                      },
                      {
                          "title":  "Spectral modulation sensitivity based perceptual acoustic echo cancellation.",
                          "authors":  "WL Chuang, KM Cheong, CC Hsu, TS Chi",
                          "venue":  "INTERSPEECH, 3269-3273, 2013",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:_kc_bZDykSQC"
                      },
                      {
                          "title":  "Spectro-temporal modulation based singing detection combined with pitch-based grouping for singing voice separation.",
                          "authors":  "TE Lin, CC Hsu, YC Chen, JH Chen, TS Chi",
                          "venue":  "INTERSPEECH, 2920-2923, 2013",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:Zph67rFs4hoC"
                      }
                  ]
    },
    {
        "year":  "2012",
        "items":  [
                      {
                          "title":  "TDOA information based VAD for robust speech recognition in directional and diffuse noise field",
                          "authors":  "KL Huang, TS Chi",
                          "venue":  "2012 8th International Symposium on Chinese Spoken Language Processing, 126-130, 2012",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:YsMSGLbcyi4C"
                      },
                      {
                          "title":  "A frequency bin-wise nonlinear masking algorithm in convolutive mixtures for speech segregation",
                          "authors":  "TS Chi, CW Huang, WS Chou",
                          "venue":  "The Journal of the Acoustical Society of America 131 (5), EL361-EL367, 2012",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:Se3iqnhoufwC"
                      },
                      {
                          "title":  "Spectro-temporal modulation energy based mask for robust speaker identification",
                          "authors":  "TS Chi, TH Lin, CC Hsu",
                          "venue":  "The Journal of the Acoustical Society of America 131 (5), EL368-EL374, 2012",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:Y0pCki6q_DkC"
                      },
                      {
                          "title":  "Spectro-temporal subband wiener filter for speech enhancement",
                          "authors":  "CC Hsu, TE Lin, JH Chen, TS Chi",
                          "venue":  "2012 IEEE International Conference on Acoustics, Speech and Signal …, 2012",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:2osOgNQ5qMEC"
                      },
                      {
                          "title":  "Robust emotion recognition by spectro-temporal modulation statistic features",
                          "authors":  "TS Chi, LY Yeh, CC Hsu",
                          "venue":  "Journal of Ambient Intelligence and Humanized Computing 3 (1), 47-60, 2012",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:zYLM7Y9cAGgC"
                      },
                      {
                          "title":  "基於聽覺感知使用頻率調變模板之和弦辨識",
                          "authors":  "TS Chi",
                          "venue":  "國立交通大學, 2012",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:u_35RYKgDlwC"
                      },
                      {
                          "title":  "基於聽覺感知使用頻率調變模板之和弦辨識",
                          "authors":  "蔡勖正",
                          "venue":  "交通大學聲音與音樂創意科技碩士學位學程學位論文, 1-63, 2012",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:R3hNpaxXUhUC"
                      }
                  ]
    },
    {
        "year":  "2011",
        "items":  [
                      {
                          "title":  "FFT-based spectro-temporal analysis and synthesis of sounds",
                          "authors":  "CC Hsu, TH Lin, TS Chi",
                          "venue":  "2011 IEEE International Conference on Acoustics, Speech and Signal …, 2011",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:roLk4NBRz8UC"
                      },
                      {
                          "title":  "A binaural algorithm for space and pitch detection",
                          "authors":  "WS Chou, KM Cheong, TS Chi",
                          "venue":  "2011 IEEE International Conference on Acoustics, Speech and Signal …, 2011",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:_FxGoFyzp5QC"
                      },
                      {
                          "title":  "Low power InfomaxICA with compensation strategy for binaural hearing-aid",
                          "authors":  "Y Fan-Chiang, CW Huang, TS Chi, SJ Jou",
                          "venue":  "2011 IEEE International Symposium of Circuits and Systems (ISCAS), 2083-2086, 2011",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:M3ejUd6NZC8C"
                      },
                      {
                          "title":  "Multiband analysis and synthesis of spectro-temporal modulations of Fourier spectrogram",
                          "authors":  "TS Chi, CC Hsu",
                          "venue":  "The Journal of the Acoustical Society of America 129 (5), EL190-EL196, 2011",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:IjCSPb-OGe4C"
                      }
                  ]
    },
    {
        "year":  "2010",
        "items":  [
                      {
                          "title":  "Spectro-temporal smoothed auditory spectra for robust speaker identification",
                          "authors":  "TH Lin, CC Hsu, TS Chi",
                          "venue":  "2010 7th International Symposium on Chinese Spoken Language Processing, 313-317, 2010",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:Wp0gIr-vW9MC"
                      },
                      {
                          "title":  "Spectro-temporal modulations for robust speech emotion recognition.",
                          "authors":  "LY Yeh, TS Chi",
                          "venue":  "INTERSPEECH, 789-792, 2010",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:ufrVoPGSRksC"
                      },
                      {
                          "title":  "MIREX 2016 Submission for Singing Voice Separation",
                          "authors":  "YC Huang, TS Chi",
                          "venue":  "",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:7PzlFSSx8tAC"
                      }
                  ]
    },
    {
        "year":  "2009",
        "items":  [
                      {
                          "title":  "Perception-based objective speech quality assessment",
                          "authors":  "TY Yen, JH Chen, TS Chi",
                          "venue":  "2009 IEEE International Conference on Acoustics, Speech and Signal …, 2009",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:WF5omc3nYNoC"
                      }
                  ]
    },
    {
        "year":  "2007",
        "items":  [
                      {
                          "title":  "Auditory cortical receptive fields: stable entities with plastic abilities",
                          "authors":  "M Elhilali, JB Fritz, TS Chi, SA Shamma",
                          "venue":  "Journal of Neuroscience 27 (39), 10372-10382, 2007",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:9yKSN-GCB0IC"
                      }
                  ]
    },
    {
        "year":  "2006",
        "items":  [
                      {
                          "title":  "Spectrum restoration from multiscale auditory phase singularities by generalized projections",
                          "authors":  "T Chi, SA Shamma",
                          "venue":  "IEEE transactions on audio, speech, and language processing 14 (4), 1179-1192, 2006",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:W7OEmFMy1HYC"
                      }
                  ]
    },
    {
        "year":  "2005",
        "items":  [
                      {
                          "title":  "Multiresolution spectrotemporal analysis of complex sounds",
                          "authors":  "T Chi, P Ru, SA Shamma",
                          "venue":  "The Journal of the Acoustical Society of America 118 (2), 887-906, 2005",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:u5HHmVD_uO8C"
                      },
                      {
                          "title":  "Neuromimetic sound representation for percept detection and manipulation",
                          "authors":  "DN Zotkin, T Chi, SA Shamma, R Duraiswami",
                          "venue":  "EURASIP Journal on Advances in Signal Processing 2005 (9), 486137, 2005",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:Tyk-4Ss8FVUC"
                      }
                  ]
    },
    {
        "year":  "2003",
        "items":  [
                      {
                          "title":  "A spectro-temporal modulation index (STMI) for assessment of speech intelligibility",
                          "authors":  "M Elhilali, T Chi, SA Shamma",
                          "venue":  "Speech communication 41 (2-3), 331-348, 2003",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:d1gkVwhDpl0C"
                      },
                      {
                          "title":  "Computational spectrotemporal auditory model with applications to acoustical information processing",
                          "authors":  "TS Chi",
                          "venue":  "University of Maryland, College Park, 2003",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:5nxA0vEk-isC"
                      },
                      {
                          "title":  "The synergy between speech production and perception",
                          "authors":  "P Ru, T Chi, S Shamma",
                          "venue":  "The Journal of the Acoustical Society of America 113 (1), 498-515, 2003",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:UeHWp8X0CEIC"
                      }
                  ]
    },
    {
        "year":  "2002",
        "items":  [
                      {
                          "title":  "à, î äääëcää",
                          "authors":  "M Elhilali, T Chi, SA Shamma",
                          "venue":  "",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:4DMP91E08xMC"
                      }
                  ]
    },
    {
        "year":  "1999",
        "items":  [
                      {
                          "title":  "Spectro-temporal modulation transfer functions and speech intelligibility",
                          "authors":  "T Chi, Y Gao, MC Guyton, P Ru, S Shamma",
                          "venue":  "The Journal of the Acoustical Society of America 106 (5), 2719-2732, 1999",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:u-x6o8ySG0sC"
                      }
                  ]
    },
    {
        "year":  "1997",
        "items":  [
                      {
                          "title":  "Application of auditory representations on speaker identification",
                          "authors":  "T Chi",
                          "venue":  "",
                          "link":  "https://scholar.google.com/citations?view_op=view_citation\u0026hl=zh-TW\u0026user=34b1nrwAAAAJ\u0026pagesize=100\u0026sortby=pubdate\u0026citation_for_view=34b1nrwAAAAJ:hqOjcs7Dif8C"
                      }
                  ]
    }
],
  links: [
    {
      title: "Singing voice separation",
      description: "Harmonic-aware tri-path convolution recurrent network for singing voice separation.",
      links: [
        {
          label: "Demo page",
          url: "https://victoriatw.github.io/HA-TPCRN_singing_voice_separation/demo.html",
        },
        {
          label: "Paper",
          url: "https://pubs.aip.org/asa/jel/article/3/7/074801/2900868/Harmonic-aware-tri-path-convolution-recurrent",
        },
      ],
    },

  ],
};

const pageMeta = {
  home: {
    title: "國立陽明交通大學 感知訊號處理實驗室",
    subtitle: "National Yang Ming Chiao Tung University Perceptral Signal Processing Lab",
  },
  members: {
    title: "實驗室成員 Members",
    subtitle: "研究團隊、博士班、碩士班與畢業成員。",
  },
  news: {
    title: "最新消息 News",
    subtitle: "實驗室近期公告與榮譽紀錄。",
  },
  activities: {
    title: "近期活動 Activities",
    subtitle: "實驗室聚會、典禮與團隊活動紀錄。",
  },
  publications: {
    title: "歷年著作 Publications",
    subtitle: "實驗室過去論文與會議發表。",
  },
  links: {
    title: "相關連接 Links",
    subtitle: "其他連結 : demo page, github 頁面",
  },
};

const app = document.querySelector("#app");
const nav = document.querySelector("#site-nav");
const searchInput = document.querySelector("#site-search");
const navToggle = document.querySelector(".nav-toggle");

let currentPage = getPageFromHash();

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function pageUrl(page) {
  return `#/${page}`;
}

function getPageFromHash() {
  const page = window.location.hash.replace(/^#\/?/, "") || "home";
  return siteData.nav.some((item) => item.id === page) ? page : "home";
}

function renderNav() {
  nav.innerHTML = siteData.nav
    .map(
      (item) => `
        <a class="nav-link ${item.id === currentPage ? "is-active" : ""}" href="${pageUrl(item.id)}">
          ${escapeHtml(item.label)}
        </a>
      `,
    )
    .join("");
}

function renderPageHero(page) {
  const meta = pageMeta[page];
  return `
    <section class="page-hero">
      <div>
        <p class="eyebrow">${escapeHtml(meta.title.split(" ").at(-1) || "")}</p>
        <h1>${escapeHtml(meta.title)}</h1>
        <p>${escapeHtml(meta.subtitle)}</p>
      </div>
    </section>
  `;
}

function renderHome() {
  return `
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">NYCU PSPLab</p>
        <h1>國立陽明交通大學<br>感知訊號處理實驗室</h1>
        <p>${escapeHtml(pageMeta.home.subtitle)}</p>
        <div class="hero-actions">
          <a class="button primary" href="#/members">Members</a>
          <a class="button secondary" href="#/publications">Publications</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-inner intro-grid">
        <div class="intro-copy">
          ${siteData.intro.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        </div>
        <ul class="focus-list">
          ${siteData.focus
            .map(
              (item) => `
                <li>
                  <strong>${escapeHtml(item.title)}</strong>
                  <span>${escapeHtml(item.description)}</span>
                </li>
              `,
            )
            .join("")}
        </ul>
      </div>
    </section>

    <section class="contact-band">
      <div class="section-inner">
        <div>
          <p class="eyebrow">Contact</p>
          <h2>${escapeHtml(siteData.contact.lab)}</h2>
          <p>歡迎對語音與感知訊號處理研究有興趣的夥伴與我們聯繫。</p>
        </div>
        <ul class="contact-list">
          <li><span>Address</span> ${escapeHtml(siteData.contact.address)}</li>
          <li><span>TEL</span> ${escapeHtml(siteData.contact.tel)}</li>
          <li><span>Email</span> ${escapeHtml(siteData.contact.email)}</li>
        </ul>
      </div>
    </section>
  `;
}

function renderMembers() {
  return `
    ${renderPageHero("members")}
    <section class="section">
      <div class="section-inner">
        ${siteData.members
          .map(
            (group) => `
              <section class="member-group">
                <h2 class="group-title">${escapeHtml(group.title)}</h2>
                <div class="card-grid">
                  ${group.people.map((person) => renderPerson(person, group.featured)).join("")}
                </div>
              </section>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderPerson(person, featured = false) {
  const links = person.links || (person.link ? [{ label: "Professor profile", url: person.link }] : []);
  const content = `
    ${featured ? `<div class="avatar" aria-hidden="true">${escapeHtml(person.initials || person.name.slice(0, 1))}</div>` : ""}
    <div>
      <h3>${escapeHtml(person.name)}</h3>
      ${person.role ? `<p>${escapeHtml(person.role)}</p>` : ""}
      ${
        links.length
          ? `
            <div class="person-links">
              ${links
                .map((link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener">${escapeHtml(link.label)}</a>`)
                .join("")}
            </div>
          `
          : ""
      }
    </div>
  `;
  return `<article class="person-card ${featured ? "featured" : ""}">${content}</article>`;
}

function renderNews() {
  return `
    ${renderPageHero("news")}
    <section class="section">
      <div class="section-inner">
        ${
          siteData.news.length
            ? `
              <div class="publication-list">
                ${siteData.news
                  .map(
                    (item) => `
                      <article class="publication-card">
                        <p>${escapeHtml(item.description)}</p>
                        <span class="venue">${escapeHtml(item.date)} · ${escapeHtml(item.title)}</span>
                      </article>
                    `,
                  )
                  .join("")}
              </div>
            `
            : renderEmpty("目前尚未有可匯入的最新消息", "此頁面已先保留版型，後續可直接新增公告內容。")
        }
      </div>
    </section>
  `;
}

function renderActivities() {
  return `
    ${renderPageHero("activities")}
    <section class="section">
      <div class="section-inner">
        ${
          siteData.activities.length
            ? `
              <div class="activity-grid">
                ${siteData.activities.map((activity) => renderActivityCard(activity)).join("")}
              </div>
            `
            : renderEmpty("近期活動內容待補", "此頁面已先保留版型，後續可加入演講、研討會、出遊或實驗室活動紀錄。")
        }
      </div>
    </section>
  `;
}

function renderActivityCard(activity) {
  const label = `${activity.year} ${activity.title}`;
  return `
    <article class="activity-card">
      <img src="${escapeHtml(activity.image)}" alt="${escapeHtml(label)}" loading="lazy">
      <div>
        <span>${escapeHtml(activity.year)}</span>
        <h2>${escapeHtml(activity.title)}</h2>
      </div>
    </article>
  `;
}

function renderPublications() {
  return `
    ${renderPageHero("publications")}
    <section class="section">
      <div class="section-inner">
        ${siteData.publications
          .map(
            (group) => `
              <section class="year-group">
                <h2 class="year-title">${escapeHtml(group.year)}</h2>
                <ol class="publication-list">
                  ${group.items
                    .map(
                      (item) => `
                        <li class="publication-card">
                          ${item.title ? `<h3>${escapeHtml(item.title)}</h3>` : ""}
                          ${item.authors ? `<p class="authors">${escapeHtml(item.authors)}</p>` : ""}
                          ${item.text ? `<p>${escapeHtml(item.text)}</p>` : ""}
                          ${item.venue ? `<span class="venue">${escapeHtml(item.venue)}</span>` : ""}
                          ${item.link ? `<a class="paper-link" href="${escapeHtml(item.link)}" target="_blank" rel="noopener">Google Scholar</a>` : ""}
                        </li>
                      `,
                    )
                    .join("")}
                </ol>
              </section>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderLinks() {
  return `
    ${renderPageHero("links")}
    <section class="section">
      <div class="section-inner">
        <div class="link-grid">
          ${siteData.links
            .map(
              (link) => {
                const links = link.links || [{ label: link.description || "Link", url: link.url }];
                return `
                  <article class="link-card">
                    <div>
                      <strong>${escapeHtml(link.title)}</strong>
                      ${link.description ? `<span>${escapeHtml(link.description)}</span>` : ""}
                    </div>
                    <div class="link-actions">
                      ${links
                        .map((item) => `<a href="${escapeHtml(item.url)}" target="_blank" rel="noopener">${escapeHtml(item.label)}</a>`)
                        .join("")}
                    </div>
                  </article>
                `;
              },
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderEmpty(title, description) {
  return `
    <div class="empty-state">
      <strong>${escapeHtml(title)}</strong>
      <p>${escapeHtml(description)}</p>
    </div>
  `;
}

function collectSearchItems() {
  const items = [];

  siteData.nav.forEach((page) => {
    const meta = pageMeta[page.id];
    items.push({
      page: page.id,
      type: "Page",
      title: meta.title,
      text: `${meta.title} ${meta.subtitle}`,
    });
  });

  siteData.focus.forEach((item) => {
    items.push({
      page: "home",
      type: "Research Topic",
      title: item.title,
      text: `${item.title} ${item.description}`,
    });
  });

  siteData.members.forEach((group) => {
    group.people.forEach((person) => {
      items.push({
        page: "members",
        type: group.title,
        title: person.name,
        text: `${group.title} ${person.name} ${person.role || ""}`,
      });
    });
  });

  siteData.news.forEach((item) => {
    items.push({
      page: "news",
      type: "News",
      title: item.title,
      text: `${item.title} ${item.description} ${item.date}`,
    });
  });

  siteData.activities.forEach((item) => {
    items.push({
      page: "activities",
      type: "Activity",
      title: `${item.year} ${item.title}`,
      text: `${item.year} ${item.title} ${item.image}`,
    });
  });

  siteData.publications.forEach((group) => {
    group.items.forEach((item) => {
      const title = item.title || item.text.split('"')[1] || item.text.slice(0, 72);
      const text = `${group.year} ${item.title || ""} ${item.authors || ""} ${item.venue || ""} ${item.text || ""}`;
      items.push({
        page: "publications",
        type: `Publication · ${group.year}`,
        title,
        text,
      });
    });
  });

  siteData.links.forEach((link) => {
    const links = link.links || [{ label: link.description || "Link", url: link.url }];
    items.push({
      page: "links",
      type: "Link",
      title: link.title,
      text: `${link.title} ${link.description || ""} ${links.map((item) => `${item.label} ${item.url}`).join(" ")}`,
    });
  });

  return items;
}

function renderSearch(query) {
  const normalized = query.trim().toLocaleLowerCase();
  const results = collectSearchItems().filter((item) => item.text.toLocaleLowerCase().includes(normalized));
  app.innerHTML = `
    <section class="page-hero">
      <div>
        <p class="eyebrow">Search</p>
        <h1>Search Results</h1>
        <p>${escapeHtml(`「${query}」共有 ${results.length} 筆結果`)}</p>
      </div>
    </section>
    <section class="section">
      <div class="section-inner search-layout">
        ${
          results.length
            ? results.map((item) => renderSearchResult(item, normalized)).join("")
            : renderEmpty("找不到符合的內容", "請嘗試輸入成員姓名、年份、研究主題或出版品關鍵字。")
        }
      </div>
    </section>
  `;
}

function renderSearchResult(item, query) {
  const index = item.text.toLocaleLowerCase().indexOf(query);
  const start = Math.max(0, index - 52);
  const snippet = item.text.slice(start, start + 170);
  return `
    <a class="search-result" href="${pageUrl(item.page)}">
      <small>${escapeHtml(item.type)}</small>
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(snippet)}${snippet.length >= 170 ? "..." : ""}</p>
    </a>
  `;
}

function render() {
  currentPage = getPageFromHash();
  renderNav();
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");

  const query = searchInput.value.trim();
  if (query) {
    renderSearch(query);
  } else {
    const renderers = {
      home: renderHome,
      members: renderMembers,
      news: renderNews,
      activities: renderActivities,
      publications: renderPublications,
      links: renderLinks,
    };
    app.innerHTML = renderers[currentPage]();
  }

}

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("hashchange", () => {
  searchInput.value = "";
  render();
});

searchInput.addEventListener("input", () => {
  render();
});

render();
