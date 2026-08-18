// Translation dictionaries for Cell'EX

export type Lang = 'id' | 'en'

type Translatable = string | ((...args: any[]) => string)
const translations: Record<Lang, Record<string, Translatable>> = {
  id: {
    // Navbar
    'nav.contact': 'Hubungi Kami',
    'nav.services': '/01 — Layanan',
    'nav.about': '/02 — Tentang',
    'nav.contact_menu': '/03 — Kontak',

    // Hero
    'hero.badge': 'System Online',
    'hero.title': "Cell'EX: Solusi\nLayanan Digital\n& Teknis Tanpa Batas.",
    'hero.subtitle': 'Dari pengembangan website hingga perbaikan hardware — semua dalam satu direktori. Pesan langsung, harga transparan, bergaransi.',
    'hero.cta.primary': 'Lihat Layanan',
    'hero.cta.secondary': 'Chat WhatsApp',
    'hero.stats.response': 'Response Time',
    'hero.stats.response_value': '< 5 menit',
    'hero.stats.garansi': 'Garansi',
    'hero.stats.garansi_value': '100%',

    // Services
    'services.header': 'Direktori Layanan',
    'services.title': 'Daftar Layanan & Harga',
    'services.desc': 'Pilih layanan yang dibutuhkan. Klik baris untuk melihat detail dan pesan via WhatsApp.',
    'services.digital': 'Layanan Digital',
    'services.technical': 'Layanan Teknis',
    'services.custom_cta': 'Butuh Layanan Custom?',
    'services.custom_wa': 'Halo Cell\'EX, saya butuh layanan custom',
    'services.column_no': 'No.',
    'services.column_name': 'Nama Layanan',
    'services.column_price': 'Harga',

    // About
    'about.header': 'Tentang Cell\'EX',
    'about.title': 'Mengapa Cell\'EX?',
    'about.desc': 'Kami percaya layanan teknis & digital harus mudah diakses, transparan, dan berkualitas — tanpa bikin pusing.',
    'about.work_title': 'Cara Kami Bekerja',
    'about.stats.project': 'Project Selesai',
    'about.stats.client': 'Klien Puas',
    'about.stats.response_avg': 'Respon Rata-rata',
    'about.stats.support': 'Support WhatsApp',
    'about.features.speed.title': 'Proses Cepat',
    'about.features.speed.desc': 'Dari konsultasi hingga selesai — alur kerja streamlined tanpa birokrasi bertele-tele.',
    'about.features.price.title': 'Harga Transparan',
    'about.features.price.desc': 'Tidak ada biaya tersembunyi. Harga yang tertera = harga yang Anda bayar. Estimasi di awal.',
    'about.features.garansi.title': 'Garansi Kerja',
    'about.features.garansi.desc': 'Semua layanan teknis bergaransi 3 bulan. Digital support 30 hari pasca-delivery.',
    'about.features.consult.title': 'Konsultasi Gratis',
    'about.features.consult.desc': 'Diskusi kebutuhan tanpa komitmen. Kami jelaskan opsi terbaik, bukan yang termahal.',

    // Contact
    'contact.header': 'Mulai Project',
    'contact.title': 'Siap Bekerja Sama?',
    'contact.desc': 'Ceritakan project Anda. Kami akan merespons dalam waktu kurang dari 5 menit via WhatsApp.',
    'contact.email_title': 'Email',
    'contact.email_desc': 'Untuk proposal formal & dokumen',
    'contact.wa_title': 'WhatsApp',
    'contact.wa_desc': 'Respon cepat < 5 menit (jam kerja)',
    'contact.loc_title': 'Lokasi',
    'contact.loc_value': 'Jakarta, Indonesia',
    'contact.loc_desc': 'Remote-first, onboard area Jakarta',
    'contact.wa_init': "Halo Cell'EX, saya ingin konsultasi layanan",
    'contact.form.type_label': 'Jenis Project',
    'contact.form.type_ph': 'Pilih jenis project...',
    'contact.form.budget_label': 'Budget Perkiraan',
    'contact.form.budget_opt_default': 'Belum tentu — butuh konsultasi dulu',
    'contact.form.timeline_label': 'Timeline Diinginkan',
    'contact.form.notes_label': 'Catatan Singkat (opsional)',
    'contact.form.submit': 'Kirim ke WhatsApp',
    'contact.form.disclaimer': 'Form ini hanya membuka WhatsApp dengan pesan terisi otomatis — tidak ada data yang disimpan di server kami.',

    // Footer
    'footer.web': 'Pengembangan Website',
    'footer.api': 'REST API / Backend',
    'footer.mobile': 'Aplikasi Mobile',
    'footer.design': 'UI/UX Design',
    'footer.seo': 'SEO Audit',
    'footer.laptop': 'Service Laptop / PC',
    'footer.hp': 'Service HP / Smartphone',
    'footer.network': 'Setup Jaringan & Server',
    'footer.digital': 'Digital',
    'footer.tech': 'Teknis',
    'footer.company': 'Perusahaan',
    'footer.about': 'Tentang Kami',
    'footer.how': 'Cara Kerja',
    'footer.tagline': 'Direktori layanan teknis & digital. Pesan langsung via WhatsApp — cepat, transparan, bergaransi.',
    'footer.copyright': (year: number) => `© ${year} Cell'EX. Hak cipta dilindungi.`,
  },
  en: {
    // Navbar
    'nav.contact': 'Contact Us',
    'nav.services': '/01 — Services',
    'nav.about': '/02 — About',
    'nav.contact_menu': '/03 — Contact',

    // Hero
    'hero.badge': 'System Online',
    'hero.title': "Cell'EX Unlimited\nDigital\n& Technical Services.",
    'hero.subtitle': 'From web development to hardware repair — all in one directory. Order directly, transparent pricing, guaranteed quality.',
    'hero.cta.primary': 'View Services',
    'hero.cta.secondary': 'WhatsApp Chat',
    'hero.stats.response': 'Response Time',
    'hero.stats.response_value': '< 5 min',
    'hero.stats.garansi': 'Guarantee',
    'hero.stats.garansi_value': '100%',

    // Services
    'services.header': 'Services Directory',
    'services.title': 'Services & Pricing',
    'services.desc': 'Choose the service you need. Click a row to view details and order via WhatsApp.',
    'services.digital': 'Digital Services',
    'services.technical': 'Technical Services',
    'services.custom_cta': 'Need a Custom Service?',
    'services.custom_wa': "Hello Cell'EX, I need a custom service",
    'services.column_no': 'No.',
    'services.column_name': 'Service Name',
    'services.column_price': 'Price',

    // About
    'about.header': 'About Cell\'EX',
    'about.title': 'Why Cell\'EX?',
    'about.desc': 'We believe technical & digital services should be accessible, transparent, and high-quality — without the hassle.',
    'about.work_title': 'How We Work',
    'about.stats.project': 'Projects Done',
    'about.stats.client': 'Happy Clients',
    'about.stats.response_avg': 'Avg Response',
    'about.stats.support': 'WhatsApp Support',
    'about.features.speed.title': 'Fast Process',
    'about.features.speed.desc': 'From consultation to completion — streamlined workflow without unnecessary bureaucracy.',
    'about.features.price.title': 'Transparent Pricing',
    'about.features.price.desc': 'No hidden fees. Listed price = what you pay. Upfront estimation.',
    'about.features.garansi.title': 'Work Guarantee',
    'about.features.garansi.desc': 'All technical services come with a 3-month warranty. Digital support for 30 days after delivery.',
    'about.features.consult.title': 'Free Consultation',
    'about.features.consult.desc': 'Discuss your needs with no commitment. We explain the best options, not the most expensive.',

    // Contact
    'contact.header': 'Start Project',
    'contact.title': 'Ready to Work Together?',
    'contact.desc': 'Tell us about your project. We will respond within 5 minutes via WhatsApp.',
    'contact.email_title': 'Email',
    'contact.email_desc': 'For formal proposals & documents',
    'contact.wa_title': 'WhatsApp',
    'contact.wa_desc': 'Fast response < 5 min (business hours)',
    'contact.loc_title': 'Location',
    'contact.loc_value': 'Jakarta, Indonesia',
    'contact.loc_desc': 'Remote-first, onboarding in Jakarta area',
    'contact.wa_init': "Hello Cell'EX, I want to consult about services",
    'contact.form.type_label': 'Project Type',
    'contact.form.type_ph': 'Select project type...',
    'contact.form.budget_label': 'Estimated Budget',
    'contact.form.budget_opt_default': 'Not sure — need consultation first',
    'contact.form.timeline_label': 'Desired Timeline',
    'contact.form.notes_label': 'Short Notes (optional)',
    'contact.form.submit': 'Send to WhatsApp',
    'contact.form.disclaimer': 'This form only opens WhatsApp with a pre-filled message — no data is stored on our server.',

    // Footer
    'footer.web': 'Website Development',
    'footer.api': 'REST API / Backend',
    'footer.mobile': 'Mobile App',
    'footer.design': 'UI/UX Design',
    'footer.seo': 'SEO Audit',
    'footer.laptop': 'Laptop / PC Repair',
    'footer.hp': 'Phone / Smartphone Repair',
    'footer.network': 'Network & Server Setup',
    'footer.digital': 'Digital',
    'footer.tech': 'Technical',
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.how': 'How It Works',
    'footer.tagline': 'Technical & digital services directory. Order directly via WhatsApp — fast, transparent, guaranteed.',
    'footer.copyright': (year: number) => `© ${year} Cell'EX. All rights reserved.`,
  },
}

export function t(lang: Lang, key: string): string {
  const value = translations[lang][key]
  if (typeof value === 'function') return value(0 as any)
  return value ?? key
}

export function tFn(lang: Lang) {
  return (key: string, ...args: any[]) => {
    const value = translations[lang][key]
    if (typeof value === 'function') return value(...args)
    return value ?? key
  }
}
