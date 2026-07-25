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
    img: "https://images.unsplash.com/photo-1631563019676-dade0dbdb8e4?w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1622253694238-3b22139576c1?w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1578496781985-452d4a934d50?w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1631563019676-dade0dbdb8e4?w=600&q=80",
    tags: ["Small Procedure", "Pre-Sterile", "Ready to Use"],
    desc: "ProceSuRe is Dispoline's range of pre-sterile small procedure kits designed for minor surgical and clinical procedures. Ready-to-use, validated sterile barrier packaging.",
    specs: { "Sterilization": "ETO Validated", "Packaging": "EN ISO 11607-2 Sealed", "Type": "Single-Use" }
  }
];

const CATEGORIES = ["All", "Surgery Kits", "Surgeon Gowns", "Drapes", "Sterile Barrier Systems", "OT Attire", "Patient Care", "ProceSuRe Kits"];
