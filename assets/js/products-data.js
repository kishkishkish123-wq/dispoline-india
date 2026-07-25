/* Dispoline India — Product Catalog Data
   Categories sourced from dispoline.in product listings */

const PRODUCTS = [
  /* ── SURGERY KITS ── */
  {
    id: "sk-cabg-01",
    name: "CABG Kit",
    category: "Surgery Kits",
    subcategory: "Cardiology",
    price: 2800,
    unit: "per kit",
    img: "https://images.unsplash.com/photo-1514416309827-bfb0cf433a2d?w=600&q=80",
    tags: ["Cardiology", "Custom Pack", "EO Sterile"],
    desc: "Customised surgery-specific pre-sterile procedure kit for Coronary Artery Bypass Grafting. Assembled in a controlled environment with all traceability protocols applied.",
    specs: { "Sterilization": "ETO Validated", "Shelf Life": "As per pack", "Type": "Single-Use" }
  },
  {
    id: "sk-angio-02",
    name: "Angiogram Kit",
    category: "Surgery Kits",
    subcategory: "Cardiology",
    price: 1200,
    unit: "per kit",
    img: "https://images.unsplash.com/photo-1727830968495-ea2798aaee35?w=600&q=80",
    tags: ["Cardiology", "Sterile Pack"],
    desc: "Pre-sterile procedure kit for angiogram procedures, with usage-based sealing and sequential unpacking design for maximum theatre efficiency.",
    specs: { "Sterilization": "ETO Validated", "Shelf Life": "As per pack", "Type": "Single-Use" }
  },
  {
    id: "sk-lscs-03",
    name: "LSCS / Caesarean Kit",
    category: "Surgery Kits",
    subcategory: "Gynaecology",
    price: 950,
    unit: "per kit",
    img: "https://images.unsplash.com/photo-1758204054779-72eb0cdfd732?w=600&q=80",
    tags: ["Gynaecology", "Sterile Pack"],
    desc: "Customised pre-sterile kit for Lower Segment Caesarean Section. Includes all required drapes, gowns and accessories in a single validated sterile barrier package.",
    specs: { "Sterilization": "ETO Validated", "Shelf Life": "As per pack", "Type": "Single-Use" }
  },
  {
    id: "sk-ortho-04",
    name: "Orthopaedic Surgery Pack",
    category: "Surgery Kits",
    subcategory: "Orthopaedics",
    price: 1600,
    unit: "per kit",
    img: "https://images.unsplash.com/photo-1770836037220-8848299e6b42?w=600&q=80",
    tags: ["Orthopaedics", "Custom Pack"],
    desc: "Procedure-specific kit covering THR, TKR, Spinal Surgery and Arthroscopy. Drapes, gowns and covers configured to surgical team specification.",
    specs: { "Sterilization": "ETO Validated", "Shelf Life": "As per pack", "Variants": "THR / TKR / Spinal / Arthroscopy" }
  },
  {
    id: "sk-ent-05",
    name: "ENT Pack",
    category: "Surgery Kits",
    subcategory: "ENT",
    price: 850,
    unit: "per kit",
    img: "https://images.unsplash.com/photo-1668453598237-27098d2575ac?w=600&q=80",
    tags: ["ENT", "Sterile Pack"],
    desc: "Surgery-specific pack for ENT procedures and ICU utility. Includes all required single-use components with validated sterile barrier sealing.",
    specs: { "Sterilization": "ETO Validated", "Type": "Single-Use", "Also Available": "ICU Utility Kit" }
  },
  {
    id: "sk-general-06",
    name: "General Surgery Pack",
    category: "Surgery Kits",
    subcategory: "General Surgery",
    price: 750,
    unit: "per pack",
    img: "https://images.unsplash.com/photo-1727830968636-3a1b507bd601?w=600&q=80",
    tags: ["General Surgery", "Laparoscopy", "HBSAG/HIV"],
    desc: "Complete single-use procedure pack for general surgery including Laparoscopy, Perineal and HBSAG/HIV packs. Sequential unpacking layout for maximum contamination control.",
    specs: { "Sterilization": "ETO Validated", "Variants": "General / Laproscopy / Perineal / HBSAG-HIV", "Type": "Single-Use" }
  },

  /* ── SURGEON GOWNS ── */
  {
    id: "gown-sms-07",
    name: "Surgical Gown — SMS / SMMS",
    category: "Surgeon Gowns",
    subcategory: "",
    price: 650,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/6/518325719/DI/TM/KU/2930693/reinforced-surgical-gown-500x500.jpg",
    tags: ["SMS Fabric", "SMMS", "Barrier Gown"],
    desc: "Sterile surgical gown in SMS and SMMS non-woven fabric. Available in standard and reinforced versions with ultrasonically sealed critical zones for enhanced fluid resistance.",
    specs: { "Fabric": "SMS / SMMS Non-woven", "Variants": "Standard / Reinforced", "Type": "Single-Use Sterile" }
  },
  {
    id: "gown-bvb-08",
    name: "Breathable Viral Barrier (BVB) Gown",
    category: "Surgeon Gowns",
    subcategory: "",
    price: 1400,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/5/308334838/ZE/LI/PC/2930693/breathable-viral-barrier-gown-500x500.jpg",
    tags: ["Viral Barrier", "BVB", "High-Risk"],
    desc: "Breathable Viral Barrier gown engineered for high-fluid and high-risk procedures. SMS with alcohol repellent and anti-static treatment, plus full viral penetration resistance.",
    specs: { "Fabric": "SMS — Alcohol Repellent, Anti-Static", "Barrier": "Breathable Viral Barrier", "Type": "Single-Use Sterile" }
  },

  /* ── DRAPES ── */
  {
    id: "drape-patient-09",
    name: "Individual Patient Drapes",
    category: "Drapes",
    subcategory: "",
    price: 1800,
    unit: "per pack",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419333683/VX/JD/GI/2930693/product-jpeg-500x500.png",
    tags: ["Patient Drape", "Fenestrated", "Sterile"],
    desc: "Sterile individual patient drapes with fenestrated design and medical-grade adhesive perimeter. Available across all surgical specialties — Cardiology, Urology, Ophthalmology and more.",
    specs: { "Type": "Fenestrated / Impervious", "Material": "Non-woven Laminate", "Latex": "Free" }
  },
  {
    id: "drape-instrument-10",
    name: "Instrument Covers &amp; OT Table Covers",
    category: "Drapes",
    subcategory: "",
    price: 1200,
    unit: "per pack",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419815418/KD/KH/JP/2930693/product-jpeg-500x500.png",
    tags: ["OT Table", "Instrument Cover", "Sterile"],
    desc: "Single-use sterile covers for surgical instruments and OT tables. Maintains sterile field integrity for the full duration of the procedure.",
    specs: { "Type": "Cover / Wrap", "Material": "Non-woven", "Sterilization": "ETO Validated" }
  },

  /* ── STERILE BARRIER SYSTEMS ── */
  {
    id: "sbs-sms-11",
    name: "Sterile Barrier Wrap — SMS",
    category: "Sterile Barrier Systems",
    subcategory: "Wraps and Sterile Fields",
    price: 950,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396418229/KX/AU/QA/2930693/sterile-barrier-systems-500x500.jpg",
    tags: ["SMS Wrap", "Sterile Field", "Non-woven"],
    desc: "SMS non-woven sterile barrier wrap and sterile field system. Also available in Crepe and Non-woven variants. Validated sealing as per EN ISO 11607-2.",
    specs: { "Material": "SMS / Crepe / Non-woven", "Standard": "EN ISO 11607-2", "Type": "Wrap / Field" }
  },

  /* ── OT ATTIRE ── */
  {
    id: "mask-3ply-12",
    name: "Surgical Face Mask — 1, 2 &amp; 3 PLY",
    category: "OT Attire",
    subcategory: "Masks",
    price: 75,
    unit: "box of 50",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396676327/IU/SF/IU/2930693/3-ply-face-mask-10-pcs-product-images-o491802915-p491802915-0-202203170552-500x500.jpg",
    tags: ["1 PLY", "2 PLY", "3 PLY", "Tie / Elastic"],
    desc: "Disposable surgical masks in 1-ply, 2-ply and 3-ply configurations. Available with tie or elastic fastening. Manufactured to infection prevention standards.",
    specs: { "Layers": "1 PLY / 2 PLY / 3 PLY", "Fastening": "Tie or Elastic", "Type": "Single-Use" }
  },
  {
    id: "cap-bouf-13",
    name: "Bouffant &amp; Surgeon Cap",
    category: "OT Attire",
    subcategory: "Caps",
    price: 90,
    unit: "pack of 100",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/390321928/LX/PO/GS/2930693/disposable-surgical-cap-500x500.jpg",
    tags: ["Bouffant", "Surgeon Cap", "Ultrasonic Sealed"],
    desc: "Full range of OT caps — Bouffant, Surgeon Cap and Surgeon Hood. Ultrasonically sealed with tie or elastic options. Lightweight, breathable non-woven construction.",
    specs: { "Types": "Bouffant / Surgeon Hood / Surgeon Cap", "Sealing": "Ultrasonic", "Fastening": "Tie or Elastic" }
  },
  {
    id: "shoe-cover-14",
    name: "Shoe Covers &amp; Boot Covers",
    category: "OT Attire",
    subcategory: "",
    price: 110,
    unit: "pack of 100",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/6/518325413/PI/EB/ON/2930693/shoe-cover-non-woven-500x500.jpg",
    tags: ["Shoe Cover", "Boot Cover", "Non-woven"],
    desc: "Disposable shoe and boot covers for OT and sterile zones. Anti-slip sole, elastic opening for easy donning. Latex-free non-woven construction.",
    specs: { "Material": "Non-woven PP", "Variants": "Shoe Cover / Boot Cover", "Latex": "Free" }
  },

  /* ── PATIENT CARE ── */
  {
    id: "patient-gown-15",
    name: "Patient Gown &amp; Attender Gown",
    category: "Patient Care",
    subcategory: "",
    price: 550,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396697816/TN/IN/VO/2930693/insolation-gowns-500x500.jpg",
    tags: ["Patient Gown", "Attender Gown", "Single-Use"],
    desc: "Single-use patient gowns and attender gowns for admission, critical care and procedure use. Also available as Critical Care Visitor Pack and Admission Kit.",
    specs: { "Variants": "Patient Gown / Attender Gown / Admission Kit / Visitor Pack", "Type": "Single-Use", "Material": "Non-woven" }
  },

  /* ── ProceSuRe KITS ── */
  {
    id: "proceure-kit-16",
    name: "ProceSuRe Small Procedure Kit",
    category: "ProceSuRe Kits",
    subcategory: "",
    price: 450,
    unit: "per kit",
    img: "https://images.unsplash.com/photo-1560269941-141b145a1b57?w=600&q=80",
    tags: ["Small Procedure", "Pre-Sterile", "Ready to Use"],
    desc: "ProceSuRe is Dispoline's range of pre-sterile small procedure kits designed for minor surgical and clinical procedures. Ready-to-use, validated sterile barrier packaging.",
    specs: { "Sterilization": "ETO Validated", "Packaging": "EN ISO 11607-2 Sealed", "Type": "Single-Use" }
  }
];

const CATEGORIES = ["All", "Surgery Kits", "Surgeon Gowns", "Drapes", "Sterile Barrier Systems", "OT Attire", "Patient Care", "ProceSuRe Kits"];
