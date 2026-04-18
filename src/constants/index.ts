export const CATEGORIES = ["Semua", "Jasa", "Motor", "Mobil", "Properti", "Kuliner", "Barang Bekas"];

export const PRODUCTS = [
  {
    id: 1,
    name: "Datsun Go 2015 - Mulus & Siap Pakai",
    price: "62.000.000 (Nego)",
    category: "Mobil",
    location: "Kab. Bekasi",
    condition: "Bekas",
    isVerified: true,
    description: "KM 50rb-an, Jok 2 baris, Pajak 07-2025, Bebas laka/banjir, Sudah pakai peredam, Surat komplit, jual cepat aja, minat k rumah sj nego langsung, cocok angkut, lokasi kab. bekasi.",
    image: "/rasyid-mobil1-1.jpeg",
    images: [
      "/rasyid-mobil1-1.jpeg",
      "/rasyid-mobil1-2.jpeg",
      "/rasyid-mobil1-3.jpeg",
      "/rasyid-mobil1-4.jpeg",
      "/rasyid-mobil1-5.jpeg",
      "/rasyid-mobil1-6.jpeg"
    ],
    whatsapp: "6281235514724"
  }, // Tadi di sini ada double }} yang bikin error
  {
    id: 2,
  name: "Sepeda Gunung GENIO & Sepeda Lipat ELEMENT - Kondisi Joss",
  price: "1.200.000",
  category: "Barang Bekas",
  location: "kec. Pebayuran",
  condition: "Bekas",
  isVerified: true,
  description: "Bismillah, jual sepeda kesayangan dengan dudukan baru\n- Frame ringan\n- Gear lancar\n- Rem pakem\nCek video untuk detail suaranya.",
  image: "/alif-sepeda-1-1.jpeg",
  images: ["/alif-sepeda-1-1.jpeg", "/alif-sepeda-1-2.jpeg"],
  videos: ["/alif-sepeda-1-v1.mp4", "/alif-sepeda-1-v2.mp4"], // Array video baru
  whatsapp: "6285256162879"
},
  {
    id: 3,
    name: "Dapur Mama Uwais",
    price: "Mulai 12rb",
    category: "Kuliner",
    location: "Pebayuran",
    condition: "Baru",
    isVerified: true,
    image: "/dapurmamauwais.png", 
    link: "https://dapurmamauwais.kakalif.my.id"
  },
  {
    id: 4,
    name: "Jasa Pembuatan Website & Tutor Matematika",
    price: "Cek Portfolio",
    category: "Jasa",
    location: "Remote / Bekasi",
    condition: "Profesional",
    isVerified: true,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=500&auto=format&fit=crop", 
    link: "https://kakalif.my.id"
  }
];
