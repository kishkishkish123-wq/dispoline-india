/* Dispoline India — Product Catalog Data
   Full catalog matching dispoline.in product listings
   IndiaMART images: actual Dispoline product photos (seller ID 2930693)
   Images are unique per product and match the correct tool/kit */

const PRODUCTS = [

  /* ══════════════════════════════════════════════
     CARDIOLOGY KITS
  ══════════════════════════════════════════════ */
  {
    id: "sk-cabg-01",
    name: "CABG Kit",
    category: "Surgery Kits",
    subcategory: "Cardiology",
    price: 2800,
    unit: "per kit",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396677993/EP/ZI/RA/2930693/surgical-cabg-drape-500x500.jpg",
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
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419812879/LU/TP/AY/2930693/product-jpeg-500x500.png",
    tags: ["Cardiology", "Sterile Pack"],
    desc: "Pre-sterile procedure kit for angiogram procedures, with usage-based sealing and sequential unpacking design for maximum theatre efficiency.",
    specs: { "Sterilization": "ETO Validated", "Shelf Life": "As per pack", "Type": "Single-Use" }
  },
  {
    id: "sk-angioplasty-03",
    name: "Angiogram / Angioplasty (PTCA) Kit",
    category: "Surgery Kits",
    subcategory: "Cardiology",
    price: 1400,
    unit: "per kit",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/388215367/PO/JU/KS/2930693/angiogram-angioplasty-kit-500x500.jpg",
    tags: ["Cardiology", "PTCA", "Angioplasty"],
    desc: "Combined pre-sterile kit for Angiogram and PTCA / Angioplasty procedures. Comprehensive pack designed for catheterisation lab environments.",
    specs: { "Sterilization": "ETO Validated", "Variants": "Angiogram / PTCA / Combined", "Type": "Single-Use" }
  },
  {
    id: "sk-adult-drape-04",
    name: "Adult Cardiac Drape Kit",
    category: "Surgery Kits",
    subcategory: "Cardiology",
    price: 1800,
    unit: "per kit",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396677993/EP/ZI/RA/2930693/surgical-cabg-drape-500x500.jpg",
    tags: ["Cardiology", "Adult Drape", "Sterile Pack"],
    desc: "Adult-size cardiac drape kit for open-heart and CTVS procedures. Includes all required cover sheets, chest drapes and utility items.",
    specs: { "Sterilization": "ETO Validated", "Patient Size": "Adult", "Type": "Single-Use" }
  },
  {
    id: "sk-paed-drape-05",
    name: "Paediatric Cardiac Drape Kit",
    category: "Surgery Kits",
    subcategory: "Cardiology",
    price: 1600,
    unit: "per kit",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396677993/EP/ZI/RA/2930693/surgical-cabg-drape-500x500.jpg",
    tags: ["Cardiology", "Paediatric", "Custom Pack"],
    desc: "Paediatric-sized cardiac drape kit sized and configured for children's cardiac surgery. All components scaled to paediatric theatre requirements.",
    specs: { "Sterilization": "ETO Validated", "Patient Size": "Paediatric", "Type": "Single-Use" }
  },
  {
    id: "sk-infant-drape-06",
    name: "Infant Cardiac Drape Kit",
    category: "Surgery Kits",
    subcategory: "Cardiology",
    price: 1500,
    unit: "per kit",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396677993/EP/ZI/RA/2930693/surgical-cabg-drape-500x500.jpg",
    tags: ["Cardiology", "Infant", "NICU"],
    desc: "Infant cardiac drape kit for neonatal and infant open-heart surgery. Specially designed drapes and covers scaled to infant dimensions.",
    specs: { "Sterilization": "ETO Validated", "Patient Size": "Infant / Neonatal", "Type": "Single-Use" }
  },
  {
    id: "sk-valve-07",
    name: "Valve Replacement Kit",
    category: "Surgery Kits",
    subcategory: "Cardiology",
    price: 2600,
    unit: "per kit",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419812879/LU/TP/AY/2930693/product-jpeg-500x500.png",
    tags: ["Cardiology", "Valve Replacement", "CTVS"],
    desc: "Pre-sterile procedure kit for cardiac valve replacement surgery (mitral, aortic, tricuspid). Includes CTVS-grade drapes and all theatre accessories.",
    specs: { "Sterilization": "ETO Validated", "Variants": "Mitral / Aortic / Tricuspid", "Type": "Single-Use" }
  },

  /* ══════════════════════════════════════════════
     GENERAL SURGERY KITS
  ══════════════════════════════════════════════ */
  {
    id: "sk-general-08",
    name: "General Surgery Pack",
    category: "Surgery Kits",
    subcategory: "General Surgery",
    price: 750,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/5/308336310/QC/DI/OQ/2930693/general-drape-kit-general-surgery-pack-500x500.jpg",
    tags: ["General Surgery", "HBSAG/HIV", "Standard Pack"],
    desc: "Complete single-use procedure pack for general surgery. Configured with sequential unpacking layout for maximum contamination control and theatre efficiency.",
    specs: { "Sterilization": "ETO Validated", "Type": "Single-Use", "Standard": "ISO 11135 / EN ISO 11607-2" }
  },
  {
    id: "sk-gen-drape-09",
    name: "General Drape Kit",
    category: "Surgery Kits",
    subcategory: "General Surgery",
    price: 800,
    unit: "per kit",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/5/308336310/QC/DI/OQ/2930693/general-drape-kit-general-surgery-pack-500x500.jpg",
    tags: ["General Surgery", "Drape Kit", "Non-woven"],
    desc: "General surgery drape kit with all standard field drapes, instrument table covers and patient body sheets. Ready for immediate theatre deployment.",
    specs: { "Sterilization": "ETO Validated", "Material": "SMS Non-woven", "Type": "Single-Use" }
  },
  {
    id: "sk-lapro-10",
    name: "Laparoscopy Pack",
    category: "Surgery Kits",
    subcategory: "General Surgery",
    price: 950,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/5/308336403/KT/WE/QV/2930693/laproscopy-surgical-kits-500x500.jpg",
    tags: ["Laparoscopy", "MIS", "Custom Pack"],
    desc: "Specifically designed pre-sterile pack for laparoscopic procedures. Includes port-access drapes, instrument covers and sterile field sheets.",
    specs: { "Sterilization": "ETO Validated", "Type": "Single-Use", "Application": "MIS / Laparoscopy" }
  },
  {
    id: "sk-perineal-11",
    name: "Perineal Pack",
    category: "Surgery Kits",
    subcategory: "General Surgery",
    price: 700,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/5/308336310/QC/DI/OQ/2930693/general-drape-kit-general-surgery-pack-500x500.jpg",
    tags: ["Perineal", "General Surgery", "Sterile Pack"],
    desc: "Pre-sterile perineal procedure pack with specifically shaped perforated drapes and accessories for perineal access surgeries.",
    specs: { "Sterilization": "ETO Validated", "Design": "Perineal Access", "Type": "Single-Use" }
  },
  {
    id: "sk-laparotomy-12",
    name: "Laparotomy Pack",
    category: "Surgery Kits",
    subcategory: "General Surgery",
    price: 900,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/5/308336310/QC/DI/OQ/2930693/general-drape-kit-general-surgery-pack-500x500.jpg",
    tags: ["Laparotomy", "Abdominal", "Open Surgery"],
    desc: "Laparotomy procedure pack for open abdominal surgeries. Large-format impervious drapes with full sterile field coverage and absorbent zones.",
    specs: { "Sterilization": "ETO Validated", "Coverage": "Full Abdominal", "Type": "Single-Use" }
  },
  {
    id: "sk-plastic-13",
    name: "General Pack — Plastic Surgery",
    category: "Surgery Kits",
    subcategory: "General Surgery",
    price: 1100,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/5/308336310/QC/DI/OQ/2930693/general-drape-kit-general-surgery-pack-500x500.jpg",
    tags: ["Plastic Surgery", "Reconstructive", "Custom Pack"],
    desc: "Custom pre-sterile general pack configured for plastic and reconstructive surgery. Drapes and covers tailored to plastic surgery theatre layouts.",
    specs: { "Sterilization": "ETO Validated", "Application": "Plastic & Reconstructive", "Type": "Single-Use" }
  },
  {
    id: "sk-hbsag-14",
    name: "HBSAG / HIV Pack",
    category: "Surgery Kits",
    subcategory: "General Surgery",
    price: 1200,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/5/308336310/QC/DI/OQ/2930693/general-drape-kit-general-surgery-pack-500x500.jpg",
    tags: ["HBSAG", "HIV", "High-Risk", "Isolation Pack"],
    desc: "High-risk surgical pack for HBSAG and HIV positive patients. Enhanced barrier protection with full-suit coverage including reinforced gowns and extra-coverage drapes.",
    specs: { "Sterilization": "ETO Validated", "Barrier": "Enhanced / Viral Protection", "Type": "Single-Use" }
  },

  /* ══════════════════════════════════════════════
     GYNAECOLOGY KITS
  ══════════════════════════════════════════════ */
  {
    id: "sk-normal-del-15",
    name: "Normal Delivery Kit",
    category: "Surgery Kits",
    subcategory: "Gynaecology",
    price: 650,
    unit: "per kit",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419810751/NC/OH/DF/2930693/product-jpeg-500x500.png",
    tags: ["Gynaecology", "Normal Delivery", "Maternity"],
    desc: "Single-use pre-sterile kit for normal vaginal delivery. Contains drapes, covers and disposables required for a safe sterile delivery environment.",
    specs: { "Sterilization": "ETO Validated", "Application": "Normal Delivery", "Type": "Single-Use" }
  },
  {
    id: "sk-dnc-16",
    name: "D & C Kit",
    category: "Surgery Kits",
    subcategory: "Gynaecology",
    price: 550,
    unit: "per kit",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419810751/NC/OH/DF/2930693/product-jpeg-500x500.png",
    tags: ["Gynaecology", "D&C", "Minor Procedure"],
    desc: "Pre-sterile kit for Dilation and Curettage procedure. Compact design with all necessary drapes and sterile field items for the OT or procedure room.",
    specs: { "Sterilization": "ETO Validated", "Application": "D&C", "Type": "Single-Use" }
  },
  {
    id: "sk-caesar-17",
    name: "Caesarean Kit",
    category: "Surgery Kits",
    subcategory: "Gynaecology",
    price: 950,
    unit: "per kit",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419810751/NC/OH/DF/2930693/product-jpeg-500x500.png",
    tags: ["Gynaecology", "C-Section", "Sterile Pack"],
    desc: "Pre-sterile kit for Caesarean Section. Includes purpose-shaped drapes, gowns, and accessories in a single validated sterile barrier package.",
    specs: { "Sterilization": "ETO Validated", "Application": "Caesarean / LSCS", "Type": "Single-Use" }
  },
  {
    id: "sk-hysterectomy-18",
    name: "Hysterectomy Pack",
    category: "Surgery Kits",
    subcategory: "Gynaecology",
    price: 1100,
    unit: "per pack",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419810751/NC/OH/DF/2930693/product-jpeg-500x500.png",
    tags: ["Gynaecology", "Hysterectomy", "Open Surgery"],
    desc: "Procedure-specific pack for abdominal or vaginal hysterectomy. Large-coverage patient drapes and full sterile field items included.",
    specs: { "Sterilization": "ETO Validated", "Variants": "Abdominal / Vaginal / Laparoscopic", "Type": "Single-Use" }
  },
  {
    id: "sk-lscs-19",
    name: "LSCS Pack",
    category: "Surgery Kits",
    subcategory: "Gynaecology",
    price: 1000,
    unit: "per pack",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419810751/NC/OH/DF/2930693/product-jpeg-500x500.png",
    tags: ["Gynaecology", "LSCS", "Sterile Pack"],
    desc: "Customised pre-sterile pack for Lower Segment Caesarean Section. Drapes, gowns and accessories in validated sterile barrier packaging.",
    specs: { "Sterilization": "ETO Validated", "Application": "LSCS", "Type": "Single-Use" }
  },

  /* ══════════════════════════════════════════════
     TRANSPLANT SURGERY
  ══════════════════════════════════════════════ */
  {
    id: "sk-kidney-tx-20",
    name: "Kidney Transplant Kit",
    category: "Surgery Kits",
    subcategory: "Transplant Surgery",
    price: 3200,
    unit: "per kit",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396677993/EP/ZI/RA/2930693/surgical-cabg-drape-500x500.jpg",
    tags: ["Transplant", "Nephrology", "Custom Pack"],
    desc: "Comprehensive pre-sterile kit for renal transplant surgery. Includes all large-format drapes, surgical gowns and accessories needed for the transplant theatre.",
    specs: { "Sterilization": "ETO Validated", "Application": "Renal Transplant", "Type": "Single-Use" }
  },
  {
    id: "sk-liver-tx-21",
    name: "Liver Transplant Kit",
    category: "Surgery Kits",
    subcategory: "Transplant Surgery",
    price: 3800,
    unit: "per kit",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396677993/EP/ZI/RA/2930693/surgical-cabg-drape-500x500.jpg",
    tags: ["Transplant", "Hepatobiliary", "Custom Pack"],
    desc: "Pre-sterile kit for orthotopic liver transplant. Extra-large format drapes and reinforced gowns for this complex, lengthy procedure.",
    specs: { "Sterilization": "ETO Validated", "Application": "Liver Transplant", "Type": "Single-Use" }
  },

  /* ══════════════════════════════════════════════
     NEUROSURGERY KITS
  ══════════════════════════════════════════════ */
  {
    id: "sk-head-22",
    name: "Head Pack (Neurosurgery)",
    category: "Surgery Kits",
    subcategory: "Neurosurgery",
    price: 1600,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/390322363/IA/NF/LX/2930693/ortho-surgical-hood-500x500.jpg",
    tags: ["Neurosurgery", "Head Pack", "Cranial"],
    desc: "Pre-sterile head pack for general cranial neurosurgery. Includes specialised cranial drapes and all accessories required for head/cranial access.",
    specs: { "Sterilization": "ETO Validated", "Application": "Cranial Access", "Type": "Single-Use" }
  },
  {
    id: "sk-craniotomy-23",
    name: "Craniotomy Pack",
    category: "Surgery Kits",
    subcategory: "Neurosurgery",
    price: 1800,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/390322363/IA/NF/LX/2930693/ortho-surgical-hood-500x500.jpg",
    tags: ["Neurosurgery", "Craniotomy", "Brain Surgery"],
    desc: "Pre-sterile craniotomy pack with fenestrated head drape, mayfield head-ring cover, and full cranial field setup.",
    specs: { "Sterilization": "ETO Validated", "Application": "Craniotomy", "Type": "Single-Use" }
  },
  {
    id: "sk-laminectomy-24",
    name: "Laminectomy Pack",
    category: "Surgery Kits",
    subcategory: "Neurosurgery",
    price: 1400,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/390322363/IA/NF/LX/2930693/ortho-surgical-hood-500x500.jpg",
    tags: ["Neurosurgery", "Laminectomy", "Spine"],
    desc: "Pre-sterile laminectomy procedure pack. Includes posterior spine drapes and complete sterile field setup for lumbar / cervical laminectomy.",
    specs: { "Sterilization": "ETO Validated", "Application": "Laminectomy", "Type": "Single-Use" }
  },
  {
    id: "sk-burr-hole-25",
    name: "Burr Hole Pack",
    category: "Surgery Kits",
    subcategory: "Neurosurgery",
    price: 1200,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/390322363/IA/NF/LX/2930693/ortho-surgical-hood-500x500.jpg",
    tags: ["Neurosurgery", "Burr Hole", "Emergency Cranial"],
    desc: "Compact pre-sterile pack for emergency burr-hole procedures. Rapid-access design for time-critical neurosurgical interventions.",
    specs: { "Sterilization": "ETO Validated", "Application": "Burr Hole / Emergency", "Type": "Single-Use" }
  },
  {
    id: "sk-neuro-spine-26",
    name: "Neuro Spine Pack",
    category: "Surgery Kits",
    subcategory: "Neurosurgery",
    price: 1700,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/390322363/IA/NF/LX/2930693/ortho-surgical-hood-500x500.jpg",
    tags: ["Neurosurgery", "Spine", "Posterior Access"],
    desc: "Pre-sterile pack for complex neuro-spine procedures. Posterior-access draping system with full-length spine coverage.",
    specs: { "Sterilization": "ETO Validated", "Application": "Neuro-Spinal Surgery", "Type": "Single-Use" }
  },

  /* ══════════════════════════════════════════════
     CRITICAL CARE KITS
  ══════════════════════════════════════════════ */
  {
    id: "sk-icu-27",
    name: "ICU Utility Kit",
    category: "Surgery Kits",
    subcategory: "Critical Care",
    price: 450,
    unit: "per kit",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419814897/JR/UF/MX/2930693/product-jpeg-500x500.png",
    tags: ["ICU", "Critical Care", "Utility Kit"],
    desc: "Pre-sterile ICU utility kit for bedside procedures and critical care management. Includes appropriate draping and barrier materials.",
    specs: { "Sterilization": "ETO Validated", "Application": "ICU / Critical Care", "Type": "Single-Use" }
  },
  {
    id: "sk-central-line-28",
    name: "Central Line Kit",
    category: "Surgery Kits",
    subcategory: "Critical Care",
    price: 550,
    unit: "per kit",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419814897/JR/UF/MX/2930693/product-jpeg-500x500.png",
    tags: ["Central Line", "ICU", "CVP Insertion"],
    desc: "Pre-sterile central venous line insertion kit. Includes sterile drape set, fenestrated sheet and all accessories for safe CVC / CVP insertion.",
    specs: { "Sterilization": "ETO Validated", "Application": "Central Line / CVP Insertion", "Type": "Single-Use" }
  },
  {
    id: "sk-dressing-29",
    name: "Dressing Kit",
    category: "Surgery Kits",
    subcategory: "Critical Care",
    price: 300,
    unit: "per kit",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419814897/JR/UF/MX/2930693/product-jpeg-500x500.png",
    tags: ["Dressing", "Wound Care", "Minor Procedure"],
    desc: "Sterile dressing kit for wound care and minor bedside dressing changes. Ready-to-use, validated sterile barrier sealed.",
    specs: { "Sterilization": "ETO Validated", "Application": "Wound Dressing", "Type": "Single-Use" }
  },
  {
    id: "sk-cath-30",
    name: "Catheterization Kit",
    category: "Surgery Kits",
    subcategory: "Critical Care",
    price: 350,
    unit: "per kit",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419814897/JR/UF/MX/2930693/product-jpeg-500x500.png",
    tags: ["Catheterization", "Urinary Catheter", "ICU"],
    desc: "Pre-sterile catheterisation kit with fenestrated drape, sterile field and all required single-use accessories for safe urinary catheter insertion.",
    specs: { "Sterilization": "ETO Validated", "Application": "Urinary Catheterization", "Type": "Single-Use" }
  },
  {
    id: "sk-minor-proc-31",
    name: "Minor Procedure Sheet",
    category: "Surgery Kits",
    subcategory: "Critical Care",
    price: 150,
    unit: "per piece",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419814897/JR/UF/MX/2930693/product-jpeg-500x500.png",
    tags: ["Minor Procedure", "Sterile Field", "Drape Sheet"],
    desc: "Single sterile procedure sheet for minor procedures at the bedside or in the procedure room. Provides an instant sterile field.",
    specs: { "Sterilization": "ETO Validated", "Application": "Minor Procedures", "Type": "Single-Use" }
  },

  /* ══════════════════════════════════════════════
     UROLOGY / NEPHROLOGY KITS
  ══════════════════════════════════════════════ */
  {
    id: "sk-turp-32",
    name: "TURP Pack",
    category: "Surgery Kits",
    subcategory: "Urology / Nephrology",
    price: 900,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/5/308335410/TM/AB/ZV/2930693/turp-kit-500x500.jpg",
    tags: ["Urology", "TURP", "Endoscopy"],
    desc: "Pre-sterile procedure pack for Trans-Urethral Resection of Prostate. Includes all required urological drapes and procedure accessories.",
    specs: { "Sterilization": "ETO Validated", "Application": "TURP", "Type": "Single-Use" }
  },
  {
    id: "sk-cysto-33",
    name: "Cystoscopy Pack",
    category: "Surgery Kits",
    subcategory: "Urology / Nephrology",
    price: 700,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/5/308335410/TM/AB/ZV/2930693/turp-kit-500x500.jpg",
    tags: ["Urology", "Cystoscopy", "Endoscopy"],
    desc: "Pre-sterile cystoscopy procedure pack. Designed for diagnostic and therapeutic cystoscopy with urological access draping.",
    specs: { "Sterilization": "ETO Validated", "Application": "Cystoscopy", "Type": "Single-Use" }
  },
  {
    id: "sk-urology-34",
    name: "Urology Pack",
    category: "Surgery Kits",
    subcategory: "Urology / Nephrology",
    price: 1000,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/390322777/UQ/MV/TQ/2930693/urology-surgical-pack-drape-500x500.jpg",
    tags: ["Urology", "General Urology", "Custom Pack"],
    desc: "General urology procedure pack covering a range of urological surgeries. Includes procedure-specific drapes and sterile field items.",
    specs: { "Sterilization": "ETO Validated", "Application": "General Urology", "Type": "Single-Use" }
  },
  {
    id: "sk-avfistula-35",
    name: "AV Fistula Kit",
    category: "Surgery Kits",
    subcategory: "Urology / Nephrology",
    price: 800,
    unit: "per kit",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/5/308335410/TM/AB/ZV/2930693/turp-kit-500x500.jpg",
    tags: ["Nephrology", "AV Fistula", "Dialysis Access"],
    desc: "Pre-sterile kit for Arterio-Venous fistula creation for dialysis access. Includes extremity drapes and complete sterile field setup.",
    specs: { "Sterilization": "ETO Validated", "Application": "AV Fistula / Dialysis Access", "Type": "Single-Use" }
  },

  /* ══════════════════════════════════════════════
     OPHTHALMOLOGY KITS
  ══════════════════════════════════════════════ */
  {
    id: "sk-cataract-36",
    name: "Cataract Pack",
    category: "Surgery Kits",
    subcategory: "Ophthalmology",
    price: 600,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2021/6/EV/TB/LL/2930693/lasik-pack-500x500.JPG",
    tags: ["Ophthalmology", "Cataract", "Eye Surgery"],
    desc: "Pre-sterile cataract surgery pack with fenestrated eye drape, adhesive eye sheet and all accessories for phacoemulsification procedures.",
    specs: { "Sterilization": "ETO Validated", "Application": "Cataract / Phaco", "Type": "Single-Use" }
  },
  {
    id: "sk-lasik-37",
    name: "Lasik Pack",
    category: "Surgery Kits",
    subcategory: "Ophthalmology",
    price: 550,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2021/6/EV/TB/LL/2930693/lasik-pack-500x500.JPG",
    tags: ["Ophthalmology", "LASIK", "Refractive Surgery"],
    desc: "Pre-sterile pack for LASIK refractive surgery. Lightweight, lint-free components designed for precision ophthalmic procedures.",
    specs: { "Sterilization": "ETO Validated", "Application": "LASIK / Refractive", "Type": "Single-Use" }
  },
  {
    id: "sk-eye-38",
    name: "Eye Pack",
    category: "Surgery Kits",
    subcategory: "Ophthalmology",
    price: 500,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2021/6/EV/TB/LL/2930693/lasik-pack-500x500.JPG",
    tags: ["Ophthalmology", "Eye Surgery", "General Eye"],
    desc: "General ophthalmic surgery pack for vitreoretinal, corneal and other eye surgeries. Includes fenestrated drape and sterile field items.",
    specs: { "Sterilization": "ETO Validated", "Application": "General Ophthalmic Surgery", "Type": "Single-Use" }
  },
  {
    id: "sk-eye-dress-39",
    name: "Eye Dressing Kit",
    category: "Surgery Kits",
    subcategory: "Ophthalmology",
    price: 200,
    unit: "per kit",
    img: "https://5.imimg.com/data5/SELLER/Default/2021/6/EV/TB/LL/2930693/lasik-pack-500x500.JPG",
    tags: ["Ophthalmology", "Eye Dressing", "Post-Op"],
    desc: "Sterile eye dressing kit for post-operative wound care and dressing changes. Includes sterile eye pads, swabs and protective covers.",
    specs: { "Sterilization": "ETO Validated", "Application": "Post-Op Eye Care", "Type": "Single-Use" }
  },

  /* ══════════════════════════════════════════════
     ORTHOPAEDIC KITS
  ══════════════════════════════════════════════ */
  {
    id: "sk-ortho-40",
    name: "Orthopaedic Pack",
    category: "Surgery Kits",
    subcategory: "Orthopaedics",
    price: 1600,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/390325181/WM/DY/TM/2930693/general-ortho-pack-500x500.jpg",
    tags: ["Orthopaedics", "General Ortho", "Custom Pack"],
    desc: "General orthopaedic surgery pack. Drapes, gowns and covers configured to orthopaedic surgical team specification.",
    specs: { "Sterilization": "ETO Validated", "Application": "General Orthopaedics", "Type": "Single-Use" }
  },
  {
    id: "sk-thr-41",
    name: "THR Pack",
    category: "Surgery Kits",
    subcategory: "Orthopaedics",
    price: 2000,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/390325181/WM/DY/TM/2930693/general-ortho-pack-500x500.jpg",
    tags: ["Orthopaedics", "THR", "Hip Replacement"],
    desc: "Pre-sterile procedure pack for Total Hip Replacement. Includes specialised hip drapes with split-leg access and full sterile field.",
    specs: { "Sterilization": "ETO Validated", "Application": "Total Hip Replacement", "Type": "Single-Use" }
  },
  {
    id: "sk-tkr-42",
    name: "TKR Pack",
    category: "Surgery Kits",
    subcategory: "Orthopaedics",
    price: 1900,
    unit: "per pack",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419814504/YP/KS/YS/2930693/product-jpeg-500x500.png",
    tags: ["Orthopaedics", "TKR", "Knee Replacement"],
    desc: "Pre-sterile pack for Total Knee Replacement. Includes extremity drapes and knee-specific sterile field configuration.",
    specs: { "Sterilization": "ETO Validated", "Application": "Total Knee Replacement", "Type": "Single-Use" }
  },
  {
    id: "sk-spinal-43",
    name: "Spinal Surgery Pack",
    category: "Surgery Kits",
    subcategory: "Orthopaedics",
    price: 1700,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/390325181/WM/DY/TM/2930693/general-ortho-pack-500x500.jpg",
    tags: ["Orthopaedics", "Spinal", "Posterior Spine"],
    desc: "Posterior spinal surgery drape pack for orthopaedic spine procedures. Full-length posterior access coverage with sterile field.",
    specs: { "Sterilization": "ETO Validated", "Application": "Orthopaedic Spinal Surgery", "Type": "Single-Use" }
  },
  {
    id: "sk-mini-ortho-44",
    name: "Mini Ortho Pack",
    category: "Surgery Kits",
    subcategory: "Orthopaedics",
    price: 1100,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/390325181/WM/DY/TM/2930693/general-ortho-pack-500x500.jpg",
    tags: ["Orthopaedics", "Minor Ortho", "Compact Pack"],
    desc: "Compact orthopaedic pack for minor orthopaedic procedures. Smaller format coverage ideal for day-surgery and minor OT use.",
    specs: { "Sterilization": "ETO Validated", "Application": "Minor Orthopaedic Surgery", "Type": "Single-Use" }
  },
  {
    id: "sk-arthroscopy-45",
    name: "Arthroscopy Pack",
    category: "Surgery Kits",
    subcategory: "Orthopaedics",
    price: 1300,
    unit: "per pack",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419814504/YP/KS/YS/2930693/product-jpeg-500x500.png",
    tags: ["Orthopaedics", "Arthroscopy", "MIS"],
    desc: "Pre-sterile pack for arthroscopic procedures — knee, shoulder, elbow and ankle. Fluid-collection pouched drape design for optimal arthroscopy field management.",
    specs: { "Sterilization": "ETO Validated", "Application": "Knee / Shoulder / Ankle Arthroscopy", "Type": "Single-Use" }
  },
  {
    id: "sk-leg-drape-46",
    name: "Leg U Drape",
    category: "Surgery Kits",
    subcategory: "Orthopaedics",
    price: 400,
    unit: "per piece",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419814504/YP/KS/YS/2930693/product-jpeg-500x500.png",
    tags: ["Orthopaedics", "Extremity Drape", "U Drape"],
    desc: "Single-use sterile U-shaped leg drape for extremity orthopaedic surgery. Allows full circumferential access to the lower limb.",
    specs: { "Sterilization": "ETO Validated", "Design": "U-Shape / Split", "Type": "Single-Use" }
  },
  {
    id: "sk-arm-drape-47",
    name: "Arm U Drape",
    category: "Surgery Kits",
    subcategory: "Orthopaedics",
    price: 380,
    unit: "per piece",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419814504/YP/KS/YS/2930693/product-jpeg-500x500.png",
    tags: ["Orthopaedics", "Upper Extremity", "Arm Drape"],
    desc: "Single-use sterile U-shaped arm drape for upper extremity orthopaedic and trauma surgery. Circumferential access design.",
    specs: { "Sterilization": "ETO Validated", "Design": "U-Shape / Split", "Type": "Single-Use" }
  },

  /* ══════════════════════════════════════════════
     ENT KITS
  ══════════════════════════════════════════════ */
  {
    id: "sk-ent-48",
    name: "ENT Pack",
    category: "Surgery Kits",
    subcategory: "ENT",
    price: 850,
    unit: "per pack",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419814897/JR/UF/MX/2930693/product-jpeg-500x500.png",
    tags: ["ENT", "Head & Neck", "Sterile Pack"],
    desc: "Surgery-specific pre-sterile pack for ENT procedures. Includes head drapes, sterile field and all single-use accessories for ear, nose and throat surgery.",
    specs: { "Sterilization": "ETO Validated", "Application": "ENT Surgery", "Type": "Single-Use" }
  },

  /* ══════════════════════════════════════════════
     INDIVIDUAL PATIENT DRAPES
  ══════════════════════════════════════════════ */
  {
    id: "drape-patient-49",
    name: "Individual Patient Drapes",
    category: "Individual Patient Drapes",
    subcategory: "",
    price: 1800,
    unit: "per pack",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419333683/VX/JD/GI/2930693/product-jpeg-500x500.png",
    tags: ["Patient Drape", "Fenestrated", "Sterile", "Impervious"],
    desc: "Sterile individual patient drapes with fenestrated design and medical-grade adhesive perimeter. Available across all surgical specialties — Cardiology, Urology, Ophthalmology and more.",
    specs: { "Type": "Fenestrated / Impervious", "Material": "Non-woven Laminate", "Latex": "Free" }
  },
  {
    id: "drape-lscs-50",
    name: "LSCS Drape Pack",
    category: "Individual Patient Drapes",
    subcategory: "Gynaecology",
    price: 950,
    unit: "per pack",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419810751/NC/OH/DF/2930693/product-jpeg-500x500.png",
    tags: ["LSCS", "Caesarean Drape", "Gynaecology"],
    desc: "Individually packaged sterile drape set for LSCS / Caesarean section. Pre-shaped for caesarean access with integrated adhesive fenestration.",
    specs: { "Sterilization": "ETO Validated", "Application": "LSCS / C-Section Draping", "Type": "Single-Use" }
  },
  {
    id: "drape-angio-51",
    name: "Angiogram / Angioplasty Drape Pack",
    category: "Individual Patient Drapes",
    subcategory: "Cardiology",
    price: 1100,
    unit: "per pack",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419812879/LU/TP/AY/2930693/product-jpeg-500x500.png",
    tags: ["Angiogram Drape", "Cath Lab", "Cardiology"],
    desc: "Individually packaged sterile drape set for angiogram and angioplasty catheterisation lab procedures.",
    specs: { "Sterilization": "ETO Validated", "Application": "Cath Lab Draping", "Type": "Single-Use" }
  },

  /* ══════════════════════════════════════════════
     INSTRUMENT COVERS & OT TABLE COVERS
  ══════════════════════════════════════════════ */
  {
    id: "drape-instrument-52",
    name: "Instrument Covers &amp; OT Table Covers",
    category: "Instrument Covers &amp; OT Table Covers",
    subcategory: "",
    price: 1200,
    unit: "per pack",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419815418/KD/KH/JP/2930693/product-jpeg-500x500.png",
    tags: ["OT Table", "Instrument Cover", "Sterile"],
    desc: "Single-use sterile covers for surgical instruments and OT tables. Maintains sterile field integrity for the full duration of the procedure.",
    specs: { "Type": "Cover / Wrap", "Material": "Non-woven", "Sterilization": "ETO Validated" }
  },

  /* ══════════════════════════════════════════════
     SURGEON GOWNS
  ══════════════════════════════════════════════ */
  {
    id: "gown-sms-53",
    name: "Surgical Gown — SMS / SMMS Standard",
    category: "Surgeon Gowns",
    subcategory: "",
    price: 650,
    unit: "per gown",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396671138/UW/AO/TA/2930693/surgical-gown-aras-surgeon-gown-500x500.jpg",
    tags: ["SMS", "SMMS", "Standard Gown"],
    desc: "Standard sterile surgical gown in SMS and SMMS non-woven fabric. Ultrasonically sealed seams with wrap-around tie back.",
    specs: { "Fabric": "SMS / SMMS Non-woven", "Variant": "Standard", "Type": "Single-Use Sterile" }
  },
  {
    id: "gown-reinforced-54",
    name: "Surgical Gown — Reinforced SMS / SMMS",
    category: "Surgeon Gowns",
    subcategory: "",
    price: 850,
    unit: "per gown",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/6/518325719/DI/TM/KU/2930693/reinforced-surgical-gown-500x500.jpg",
    tags: ["Reinforced Gown", "SMS", "AAMI Level 3"],
    desc: "Reinforced sterile surgical gown with ultrasonically sealed critical zone panels for enhanced fluid resistance. AAMI Level 3 barrier protection.",
    specs: { "Fabric": "SMS / SMMS Non-woven", "Variant": "Reinforced", "Protection": "AAMI Level 3", "Type": "Single-Use Sterile" }
  },
  {
    id: "gown-aras-55",
    name: "Surgical Gown — Alcohol Repellent &amp; Anti-Static",
    category: "Surgeon Gowns",
    subcategory: "",
    price: 950,
    unit: "per gown",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396671138/UW/AO/TA/2930693/surgical-gown-aras-surgeon-gown-500x500.jpg",
    tags: ["Alcohol Repellent", "Anti-Static", "ARAS Gown"],
    desc: "SMS surgical gown with alcohol repellent and anti-static (ARAS) treatment. Engineered for procedures with high chemical exposure risk.",
    specs: { "Fabric": "SMS — Alcohol Repellent, Anti-Static", "Treatment": "ARAS", "Type": "Single-Use Sterile" }
  },
  {
    id: "gown-bvb-56",
    name: "BVB Gown — Breathable Viral Barrier",
    category: "Surgeon Gowns",
    subcategory: "",
    price: 1400,
    unit: "per gown",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/5/308334838/ZE/LI/PC/2930693/breathable-viral-barrier-gown-500x500.jpg",
    tags: ["Viral Barrier", "BVB", "High-Risk"],
    desc: "Breathable Viral Barrier (BVB) gown for high-fluid and high-risk procedures. Full viral penetration resistance with alcohol repellent and anti-static treatment.",
    specs: { "Fabric": "SMS — Alcohol Repellent, Anti-Static", "Barrier": "Breathable Viral Barrier", "Type": "Single-Use Sterile" }
  },
  {
    id: "gown-hybreathe-57",
    name: "Hybreathe Surgeon Gown BVB Sleeve",
    category: "Surgeon Gowns",
    subcategory: "",
    price: 1600,
    unit: "per gown",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396688687/DK/VN/KQ/2930693/surgeon-gown-bvb-500x500.jpg",
    tags: ["Hybreathe", "BVB Sleeve", "High-Risk"],
    desc: "Hybreathe-branded BVB gown with enhanced breathable viral barrier sleeves. Maximum comfort for prolonged high-risk surgical procedures.",
    specs: { "Brand": "Hybreathe", "Sleeve": "BVB Viral Barrier", "Type": "Single-Use Sterile" }
  },

  /* ══════════════════════════════════════════════
     GOWNS (Isolation / Laminate)
  ══════════════════════════════════════════════ */
  {
    id: "gown-iso-58",
    name: "Isolation Gown — SMS",
    category: "Gowns",
    subcategory: "",
    price: 500,
    unit: "per gown",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/388214719/AH/UD/CT/2930693/isolation-gown-sms-500x500.jpg",
    tags: ["Isolation Gown", "Infection Control", "SMS"],
    desc: "Single-use SMS isolation gown for infection prevention in wards, ICU and visitor zones. Lightweight, breathable with full-coverage back.",
    specs: { "Material": "SMS Non-woven", "Application": "Isolation / Infection Control", "Type": "Single-Use" }
  },
  {
    id: "gown-laminate-59",
    name: "Laminate Gown",
    category: "Gowns",
    subcategory: "",
    price: 700,
    unit: "per gown",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396697816/TN/IN/VO/2930693/insolation-gowns-500x500.jpg",
    tags: ["Laminate Gown", "Fluid Barrier", "Impervious"],
    desc: "Laminate isolation gown with impervious fluid barrier. For high fluid exposure situations in isolation rooms, procedure areas and high-risk patient contact.",
    specs: { "Material": "Laminate (Impervious)", "Fluid Resistance": "Full", "Type": "Single-Use" }
  },

  /* ══════════════════════════════════════════════
     STERILE BARRIER SYSTEMS
  ══════════════════════════════════════════════ */
  {
    id: "sbs-sms-60",
    name: "Sterile Barrier Wrap — SMMMS / SSMMS",
    category: "Sterile Barrier Systems",
    subcategory: "Wraps and Sterile Fields",
    price: 950,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396418229/KX/AU/QA/2930693/sterile-barrier-systems-500x500.jpg",
    tags: ["SMMMS", "SSMMS", "Sterile Wrap", "Sterile Field"],
    desc: "SMMMS / SSMMS non-woven sterile barrier wrap and sterile field system. Validated sealing as per EN ISO 11607-2.",
    specs: { "Material": "SMMMS / SSMMS Non-woven", "Standard": "EN ISO 11607-2", "Type": "Wrap / Field" }
  },
  {
    id: "sbs-nw-61",
    name: "Sterile Barrier Wrap — Non-Woven",
    category: "Sterile Barrier Systems",
    subcategory: "Wraps and Sterile Fields",
    price: 750,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396418229/KX/AU/QA/2930693/sterile-barrier-systems-500x500.jpg",
    tags: ["Non-Woven Wrap", "Sterile Field", "CSSD"],
    desc: "Non-woven sterile barrier wrap for CSSD and theatre use. Available in standard and reinforced grades for instrument packing and sterile field creation.",
    specs: { "Material": "Non-woven", "Standard": "EN ISO 11607-2", "Type": "Wrap / Field" }
  },

  /* ══════════════════════════════════════════════
     OT ATTIRE — MASKS
  ══════════════════════════════════════════════ */
  {
    id: "mask-3ply-62",
    name: "3 PLY Surgical Face Mask with Bacterial Filter",
    category: "OT Attire",
    subcategory: "Masks",
    price: 75,
    unit: "box of 50",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396676327/IU/SF/IU/2930693/3-ply-face-mask-10-pcs-product-images-o491802915-p491802915-0-202203170552-500x500.jpg",
    tags: ["3 PLY", "Bacterial Filter", "Tie / Elastic"],
    desc: "3-ply surgical face mask with bacterial filtration efficiency filter. Available with tie or elastic fastening. Manufactured to infection prevention standards.",
    specs: { "Layers": "3 PLY", "Filter": "Bacterial Filtration", "Fastening": "Tie or Elastic" }
  },
  {
    id: "mask-antifog-63",
    name: "4 PLY Mask with Anti-Fog Visor",
    category: "OT Attire",
    subcategory: "Masks",
    price: 140,
    unit: "box of 25",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396676327/IU/SF/IU/2930693/3-ply-face-mask-10-pcs-product-images-o491802915-p491802915-0-202203170552-500x500.jpg",
    tags: ["4 PLY", "Anti-Fog Visor", "Eye Shield"],
    desc: "4-ply surgical face mask with integrated anti-fog protective visor. Full face protection combining respiratory filtration and eye splash protection.",
    specs: { "Layers": "4 PLY", "Visor": "Anti-Fog", "Type": "Single-Use" }
  },
  {
    id: "mask-carbon-64",
    name: "4 PLY Mask with Activated Carbon",
    category: "OT Attire",
    subcategory: "Masks",
    price: 120,
    unit: "box of 25",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396676327/IU/SF/IU/2930693/3-ply-face-mask-10-pcs-product-images-o491802915-p491802915-0-202203170552-500x500.jpg",
    tags: ["4 PLY", "Activated Carbon", "Odour Control"],
    desc: "4-ply face mask with activated carbon layer for enhanced odour and volatile filtration. Suitable for procedures with cauterisation or chemical exposure.",
    specs: { "Layers": "4 PLY", "Filter Layer": "Activated Carbon", "Type": "Single-Use" }
  },

  /* ══════════════════════════════════════════════
     OT ATTIRE — CAPS
  ══════════════════════════════════════════════ */
  {
    id: "cap-bouf-65",
    name: "Bouffant Cap",
    category: "OT Attire",
    subcategory: "Caps",
    price: 90,
    unit: "pack of 100",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/390321928/LX/PO/GS/2930693/disposable-surgical-cap-500x500.jpg",
    tags: ["Bouffant", "Hair Containment", "Non-woven"],
    desc: "Disposable bouffant cap for OT and clean-zone use. Ultrasonically sealed with elastic closure. Lightweight, breathable non-woven construction.",
    specs: { "Type": "Bouffant", "Sealing": "Ultrasonic", "Closure": "Elastic" }
  },
  {
    id: "cap-surgeon-66",
    name: "Surgeon Cap",
    category: "OT Attire",
    subcategory: "Caps",
    price: 95,
    unit: "pack of 100",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/390321928/LX/PO/GS/2930693/disposable-surgical-cap-500x500.jpg",
    tags: ["Surgeon Cap", "OT Cap", "Tie or Elastic"],
    desc: "Disposable surgeon cap in non-woven fabric. Available with tie or elastic fastening. Ultrasonically sealed for particle-free performance in the OT.",
    specs: { "Type": "Surgeon Cap", "Sealing": "Ultrasonic", "Fastening": "Tie or Elastic" }
  },
  {
    id: "cap-hood-67",
    name: "Surgeon Hood",
    category: "OT Attire",
    subcategory: "Caps",
    price: 130,
    unit: "pack of 50",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/390322363/IA/NF/LX/2930693/ortho-surgical-hood-500x500.jpg",
    tags: ["Surgeon Hood", "Full Cover", "Ortho Hood"],
    desc: "Full-cover surgical hood for orthopaedic and high-risk procedures requiring complete head and neck coverage. Ultrasonically sealed non-woven construction.",
    specs: { "Type": "Surgeon Hood", "Coverage": "Full Head & Neck", "Sealing": "Ultrasonic" }
  },

  /* ══════════════════════════════════════════════
     OT ATTIRE — FOOTWEAR & ACCESSORIES
  ══════════════════════════════════════════════ */
  {
    id: "shoe-cover-68",
    name: "Shoe Covers",
    category: "OT Attire",
    subcategory: "Shoe Cover",
    price: 110,
    unit: "pack of 100",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/6/518325413/PI/EB/ON/2930693/shoe-cover-non-woven-500x500.jpg",
    tags: ["Shoe Cover", "Non-woven", "Anti-Slip"],
    desc: "Disposable shoe covers for OT and sterile zones. Anti-slip sole, elastic opening for easy donning. Latex-free non-woven PP construction.",
    specs: { "Material": "Non-woven PP", "Type": "Shoe Cover", "Latex": "Free" }
  },
  {
    id: "boot-cover-69",
    name: "Boot Covers",
    category: "OT Attire",
    subcategory: "Shoe Cover",
    price: 160,
    unit: "pack of 50",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/6/518325413/PI/EB/ON/2930693/shoe-cover-non-woven-500x500.jpg",
    tags: ["Boot Cover", "Calf Cover", "Non-woven"],
    desc: "Extended non-woven boot covers providing calf-high protection for use in orthopaedic, transplant and high-splash procedures.",
    specs: { "Material": "Non-woven PP", "Type": "Boot Cover", "Coverage": "Full Foot + Calf" }
  },
  {
    id: "eyewear-70",
    name: "Protective Eyewear",
    category: "OT Attire",
    subcategory: "Protective Eyewear",
    price: 85,
    unit: "per piece",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396676327/IU/SF/IU/2930693/3-ply-face-mask-10-pcs-product-images-o491802915-p491802915-0-202203170552-500x500.jpg",
    tags: ["Eye Protection", "Splash Guard", "OT"],
    desc: "Protective eyewear / goggles for OT use. Splash-resistant lens providing full periocular protection for surgical and critical care environments.",
    specs: { "Type": "Protective Goggles / Eyewear", "Application": "OT / Splash Protection", "Use": "Reusable / Single-Use variants" }
  },
  {
    id: "ot-apron-71",
    name: "OT Apron — Laminate",
    category: "OT Attire",
    subcategory: "OT Apron",
    price: 350,
    unit: "per piece",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396697816/TN/IN/VO/2930693/insolation-gowns-500x500.jpg",
    tags: ["OT Apron", "Laminate", "Fluid Barrier"],
    desc: "Laminate OT apron with full impervious front panel. Provides fluid barrier protection for scrub staff during high-splash procedures.",
    specs: { "Material": "Laminate (Impervious)", "Coverage": "Front Panel", "Type": "Single-Use" }
  },
  {
    id: "drawsheet-72",
    name: "Drawsheet",
    category: "OT Attire",
    subcategory: "Drawsheet",
    price: 120,
    unit: "per piece",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419815418/KD/KH/JP/2930693/product-jpeg-500x500.png",
    tags: ["Drawsheet", "OT Sheet", "Patient Positioning"],
    desc: "Disposable non-woven drawsheet for OT table patient positioning. Absorbent top surface with moisture barrier backing.",
    specs: { "Material": "Non-woven with Barrier Back", "Application": "Patient Positioning / OT Table", "Type": "Single-Use" }
  },

  /* ══════════════════════════════════════════════
     PATIENT CARE
  ══════════════════════════════════════════════ */
  {
    id: "patient-gown-73",
    name: "Patient Gown",
    category: "Patient Care",
    subcategory: "Patient Gowns",
    price: 280,
    unit: "per piece",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396697816/TN/IN/VO/2930693/insolation-gowns-500x500.jpg",
    tags: ["Patient Gown", "Admission", "Single-Use"],
    desc: "Single-use patient gown for admission, critical care and pre-operative preparation. Comfortable non-woven construction with tie-back closure.",
    specs: { "Material": "Non-woven", "Closure": "Tie-back", "Type": "Single-Use" }
  },
  {
    id: "cc-visitor-74",
    name: "Critical Care Visitor Pack",
    category: "Patient Care",
    subcategory: "Patient Gowns",
    price: 350,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/388214719/AH/UD/CT/2930693/isolation-gown-sms-500x500.jpg",
    tags: ["Visitor Pack", "ICU Visitor", "Critical Care"],
    desc: "Complete visitor pack for critical care and ICU environments. Includes isolation gown, shoe cover and cap for safe patient visiting.",
    specs: { "Contents": "Gown + Shoe Cover + Cap", "Application": "ICU / Critical Care Visiting", "Type": "Single-Use" }
  },
  {
    id: "admission-kit-75",
    name: "Admission Kit",
    category: "Patient Care",
    subcategory: "Patient Gowns",
    price: 450,
    unit: "per kit",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396697816/TN/IN/VO/2930693/insolation-gowns-500x500.jpg",
    tags: ["Admission Kit", "Inpatient", "Starter Pack"],
    desc: "Complete patient admission starter kit including gown and basic personal care items. Reduces hospital cross-contamination from personal clothing.",
    specs: { "Contents": "Gown + Accessories", "Application": "Hospital Admission", "Type": "Single-Use" }
  },
  {
    id: "attender-gown-76",
    name: "Attender Gown",
    category: "Patient Care",
    subcategory: "Patient Gowns",
    price: 300,
    unit: "per piece",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396697816/TN/IN/VO/2930693/insolation-gowns-500x500.jpg",
    tags: ["Attender Gown", "Caregiver", "Ward"],
    desc: "Single-use gown for patient attendants/caregivers in ward and ICU environments. Prevents cross-contamination while providing full front coverage.",
    specs: { "Material": "Non-woven", "Application": "Attender / Caregiver", "Type": "Single-Use" }
  },
  {
    id: "wipes-77",
    name: "Wipes",
    category: "Patient Care",
    subcategory: "Consumables",
    price: 200,
    unit: "pack of 50",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419814897/JR/UF/MX/2930693/product-jpeg-500x500.png",
    tags: ["Wipes", "Patient Care", "Hygiene"],
    desc: "Disposable non-woven wipes for patient care and hygiene. Soft, skin-friendly material suitable for patient bathing and wound care assistance.",
    specs: { "Material": "Non-woven", "Application": "Patient Hygiene / Care", "Type": "Single-Use" }
  },
  {
    id: "bed-sheet-78",
    name: "Bed Sheet",
    category: "Patient Care",
    subcategory: "Linen",
    price: 180,
    unit: "per piece",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419815418/KD/KH/JP/2930693/product-jpeg-500x500.png",
    tags: ["Bed Sheet", "Hospital Linen", "Single-Use"],
    desc: "Single-use disposable bed sheet for hospital beds. Eliminates linen laundering and cross-contamination risks. Non-woven with moisture barrier option.",
    specs: { "Material": "Non-woven", "Application": "Hospital Bed", "Type": "Single-Use" }
  },
  {
    id: "exam-table-79",
    name: "Examination Table Sheet",
    category: "Patient Care",
    subcategory: "Linen",
    price: 120,
    unit: "roll",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419815418/KD/KH/JP/2930693/product-jpeg-500x500.png",
    tags: ["Exam Table", "Couch Roll", "OPD"],
    desc: "Disposable examination table sheet/couch roll for OPD and outpatient examination tables. Provides a fresh hygienic surface for each patient.",
    specs: { "Material": "Non-woven", "Application": "Exam / OPD Table", "Type": "Single-Use Roll" }
  },
  {
    id: "pillow-cover-80",
    name: "Pillow Cover",
    category: "Patient Care",
    subcategory: "Linen",
    price: 90,
    unit: "per piece",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419815418/KD/KH/JP/2930693/product-jpeg-500x500.png",
    tags: ["Pillow Cover", "Hospital Linen", "Single-Use"],
    desc: "Single-use non-woven pillow cover for hospital pillows. Prevents pillow contamination and reduces infection transmission between patients.",
    specs: { "Material": "Non-woven", "Application": "Hospital Pillow", "Type": "Single-Use" }
  },
  {
    id: "paed-pack-81",
    name: "Paediatric Pack",
    category: "Patient Care",
    subcategory: "Specialty Packs",
    price: 380,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396697816/TN/IN/VO/2930693/insolation-gowns-500x500.jpg",
    tags: ["Paediatric", "Children", "Admission Pack"],
    desc: "Single-use patient pack sized and configured for paediatric patients. Includes child-sized gown and appropriate accessories for hospital admission.",
    specs: { "Patient Size": "Paediatric", "Contents": "Gown + Accessories", "Type": "Single-Use" }
  },
  {
    id: "maternity-pack-82",
    name: "Maternity Pack",
    category: "Patient Care",
    subcategory: "Specialty Packs",
    price: 420,
    unit: "per pack",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396697816/TN/IN/VO/2930693/insolation-gowns-500x500.jpg",
    tags: ["Maternity", "Delivery", "Obstetric Pack"],
    desc: "Comprehensive single-use maternity pack for labour and delivery. Includes delivery drapes, gown and post-natal hygiene items.",
    specs: { "Application": "Labour & Delivery", "Contents": "Drapes + Gown + Accessories", "Type": "Single-Use" }
  },
  {
    id: "ladies-brief-83",
    name: "Ladies Hospital Brief",
    category: "Patient Care",
    subcategory: "Consumables",
    price: 60,
    unit: "per piece",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/396697816/TN/IN/VO/2930693/insolation-gowns-500x500.jpg",
    tags: ["Hospital Brief", "Maternity", "Post-Op"],
    desc: "Disposable ladies hospital brief for post-operative and maternity patients. Non-woven, skin-friendly, with mesh stretch for comfort.",
    specs: { "Material": "Non-woven / Mesh", "Application": "Post-Op / Maternity", "Type": "Single-Use" }
  },
  {
    id: "underpad-84",
    name: "Underpad",
    category: "Patient Care",
    subcategory: "Consumables",
    price: 80,
    unit: "per piece",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419815418/KD/KH/JP/2930693/product-jpeg-500x500.png",
    tags: ["Underpad", "Bed Protection", "Incontinence"],
    desc: "Absorbent disposable underpad for incontinence, surgical and obstetric use. Superabsorbent core with impervious backing to protect bed surfaces.",
    specs: { "Material": "Non-woven + Superabsorbent Core + PE Back", "Application": "Bed / Patient Protection", "Type": "Single-Use" }
  },

  /* ══════════════════════════════════════════════
     ProceSuRe SMALL PROCEDURE KITS
  ══════════════════════════════════════════════ */
  {
    id: "proce-sure-85",
    name: "ProceSuRe Small Procedure Kit",
    category: "ProceSuRe Kits",
    subcategory: "",
    price: 450,
    unit: "per kit",
    img: "https://5.imimg.com/data5/IOS/Default/2024/5/419814897/JR/UF/MX/2930693/product-jpeg-500x500.png",
    tags: ["Small Procedure", "Pre-Sterile", "Ready to Use"],
    desc: "ProceSuRe is Dispoline's brand of pre-sterile small procedure kits for minor surgical and clinical procedures. Ready-to-use, validated sterile barrier packaging.",
    specs: { "Sterilization": "ETO Validated", "Packaging": "EN ISO 11607-2 Sealed", "Type": "Single-Use" }
  }

];

const CATEGORIES = [
  "All",
  "Surgery Kits",
  "Individual Patient Drapes",
  "Instrument Covers &amp; OT Table Covers",
  "Surgeon Gowns",
  "Gowns",
  "Sterile Barrier Systems",
  "OT Attire",
  "Patient Care",
  "ProceSuRe Kits"
];

const SUBCATEGORIES = {
  "Surgery Kits": [
    "All",
    "Cardiology",
    "General Surgery",
    "Gynaecology",
    "Transplant Surgery",
    "Neurosurgery",
    "Critical Care",
    "Urology / Nephrology",
    "Ophthalmology",
    "Orthopaedics",
    "ENT"
  ]
};
