const products = [
  {
    id: "kylith-75",
    name: "Kylith 75",
    fullName: "Kylith 75 ワイヤレス メカニカルキーボード",
    description:
      "高性能な75%レイアウトのワイヤレスメカニカルキーボード。長時間のバッテリー寿命と快適なタイピング体験を提供します。",
    category: "keyboard",
    layout: "75%",
    switches: ["linear", "pulse", "zero", "spark", "cloud"],
    connection: "2.4GHz Wireless / Bluetooth 5.1 / USB-C",
    battery: "5000mAh",
    price: 18800,
    image: "/75.webp",
    images: ["/75.webp", "/75-white.webp"],
    series: "basic" as const,
    colors: [
      {
        name: "黒",
        image: "/75.webp",
      },
      {
        name: "白",
        image: "/75-white.webp",
      },
    ],
    stock: 17,
  },
  {
    id: "kylith-75-compact",
    name: "Kylith 75 Compact",
    fullName: "Kylith 75 Compact ワイヤレス メカニカルキーボード",
    description:
      "コンパクトな75%レイアウトのワイヤレスメカニカルキーボード。薄型設計で持ち運びに便利です。",
    category: "keyboard",
    layout: "75%",
    switches: ["slim"],
    connection: "2.4GHz Wireless / Bluetooth 5.1 / USB-C",
    battery: "5000mAh",
    price: 18800,
    image: "/75-compact.webp",
    images: ["/75-compact.webp"],
    colors: [
      {
        name: "黒",
        image: "/75-compact.webp",
      },
    ],
    series: "compact" as const,
    stock: 0,
  },
  {
    id: "kylith-75-HE",
    name: "Kylith 75 HE",
    fullName: "Kylith 75 HE 磁気スイッチ ワイヤレス メカニカルキーボード",
    description:
      "革新的な磁気スイッチを採用した75%レイアウトのワイヤレスメカニカルキーボード。超高速レスポンスと耐久性を実現。",
    category: "keyboard",
    layout: "75%",
    switches: ["mag"],
    connection: "2.4GHz Wireless / Bluetooth 5.1 / USB-C",
    battery: "5000mAh",
    price: 18800,
    image: "/75-HE.webp",
    images: ["/75-HE.webp", "/75-HE-white.webp"],
    colors: [
      {
        name: "黒",
        image: "/75-HE.webp",
      },
      {
        name: "白",
        image: "/75-HE-white.webp",
      },
    ],
    series: "he" as const,
    stock: 0,
    status: ["new"],
  },
  {
    id: "kylith-96",
    name: "Kylith 96",
    fullName: "Kylith 96 ワイヤレス メカニカルキーボード",
    description:
      "96%レイアウトのワイヤレスメカニカルキーボード。数字キーパッド付きで効率的な作業をサポート。",
    category: "keyboard",
    layout: "96%",
    switches: ["linear", "pulse", "zero", "spark", "cloud"],
    connection: "2.4GHz Wireless / Bluetooth 5.1 / USB-C",
    battery: "5000mAh",
    price: 18800,
    image: "/96.webp",
    images: ["/96.webp", "/96-white.webp"],
    series: "basic" as const,
    colors: [
      {
        name: "黒",
        image: "/96.webp",
      },
      {
        name: "白",
        image: "/96-white.webp",
      },
    ],
    stock: 10,
  },
  {
    id: "kylith-96-compact",
    name: "Kylith 96 Compact",
    fullName: "Kylith 96 Compact ワイヤレス メカニカルキーボード",
    description:
      "コンパクトな96%レイアウトのワイヤレスメカニカルキーボード。薄型設計で数字キーパッド付き。",
    category: "keyboard",
    layout: "96%",
    switches: ["slim"],
    connection: "2.4GHz Wireless / Bluetooth 5.1 / USB-C",
    battery: "5000mAh",
    price: 18800,
    image: "/96-compact.webp",
    images: ["/96-compact.webp"],
    series: "compact" as const,
    colors: [
      {
        name: "黒",
        image: "/96-compact.webp",
      },
    ],
    stock: 10,
  },
  {
    id: "kylith-96-HE",
    name: "Kylith 96 HE",
    fullName: "Kylith 96 HE 磁気スイッチ ワイヤレス メカニカルキーボード",
    description:
      "磁気スイッチを採用した96%レイアウトのワイヤレスメカニカルキーボード。数字キーパッド付きで高精度な入力が可能。",
    category: "keyboard",
    layout: "96%",
    switches: ["mag"],
    connection: "2.4GHz Wireless / Bluetooth 5.1 / USB-C",
    battery: "5000mAh",
    price: 18800,
    image: "/96-HE.webp",
    images: ["/96-HE.webp", "/96-HE-white.webp"],
    colors: [
      {
        name: "黒",
        image: "/96-HE.webp",
      },
      {
        name: "白",
        image: "/96-HE-white.webp",
      },
    ],
    series: "he" as const,
    stock: 10,
    status: ["new"],
  },

  {
    id: "kylith-100",
    name: "Kylith 100",
    fullName: "Kylith 100 ワイヤレス メカニカルキーボード",
    description:
      "フルサイズのワイヤレスメカニカルキーボード。すべてのキーが配置された完全なレイアウト。",
    category: "keyboard",
    layout: "100%",
    switches: ["linear", "pulse", "zero", "spark", "cloud"],
    connection: "2.4GHz Wireless / Bluetooth 5.1 / USB-C",
    battery: "5000mAh",
    price: 18800,
    image: "/100.webp",
    images: ["/100.webp", "/100-white.webp"],
    series: "basic" as const,
    colors: [
      {
        name: "黒",
        image: "/100.webp",
      },
      {
        name: "白",
        image: "/100-white.webp",
      },
    ],
    stock: 10,
  },
  {
    id: "kylith-100-compact",
    name: "Kylith 100 Compact",
    fullName: "Kylith 100 Compact ワイヤレス メカニカルキーボード",
    description:
      "コンパクトなフルサイズのワイヤレスメカニカルキーボード。薄型設計で省スペース。",
    category: "keyboard",
    layout: "100%",
    switches: ["slim"],
    connection: "2.4GHz Wireless / Bluetooth 5.1 / USB-C",
    battery: "5000mAh",
    price: 18800,
    image: "/100-compact.webp",
    images: ["/100-compact.webp"],
    series: "compact" as const,
    colors: [
      {
        name: "黒",
        image: "/100-compact.webp",
      },
    ],
    stock: 0,
  },
  {
    id: "kylith-100-HE",
    name: "Kylith 100 HE",
    fullName: "Kylith 100 HE 磁気スイッチ ワイヤレス メカニカルキーボード",
    description:
      "磁気スイッチを採用したフルサイズのワイヤレスメカニカルキーボード。最高レベルのレスポンス性を実現。",
    category: "keyboard",
    layout: "100%",
    switches: ["mag"],
    connection: "2.4GHz Wireless / Bluetooth 5.1 / USB-C",
    battery: "5000mAh",
    price: 18800,
    image: "/100-HE.webp",
    images: ["/100-HE.webp", "/100-HE-white.webp"],
    colors: [
      {
        name: "黒",
        image: "/100-HE.webp",
      },
      {
        name: "白",
        image: "/100-HE-white.webp",
      },
    ],
    series: "he" as const,
    stock: 10,
    status: ["new"],
  },
];

export default products;
