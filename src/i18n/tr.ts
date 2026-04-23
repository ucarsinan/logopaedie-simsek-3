import type { Translations } from "./de";

export const tr: Translations = {
  nav: {
    home: "Anasayfa",
    therapy: "Terapi",
    team: "Ekip",
    karriere: "Kariyer",
    contact: "İletişim",
    aria_main: "Ana Navigasyon",
    aria_mobile: "Mobil Navigasyon",
    aria_menu_open: "Menüyü aç",
    aria_menu_close: "Menüyü kapat",
    links: {
      home: "/anasayfa/",
      therapy: "/terapi/",
      team: "/ekip/",
      karriere: "/kariyer/",
      contact: "/iletisim/",
    },
  },
  header: {
    location: "Duisburg Dil ve Konuşma Terapisi",
    lang_label: "Deutsche Version aufrufen",
    lang_title: "Deutsch",
    lang_short: "DE",
    home_href: "/anasayfa/",
  },
  footer: {
    tagline: "Dil ve Konuşma Terapisi Duisburg",
    nav_label: "Footer Navigasyonu",
    links: {
      services: { label: "Terapi", href: "/terapi/" },
      tuerkische: { label: "Türkçe Logopedi", href: "/anasayfa/" },
      insurance: { label: "Sigorta", href: "/tr/kostenuebernahme/" },
      team: { label: "Ekip", href: "/ekip/" },
      karriere: { label: "Kariyer", href: "/kariyer/" },
      contact: { label: "İletişim", href: "/iletisim/" },
    },
    copyright: "Tüm hakları saklıdır",
    privacy: "Gizlilik",
    accessibility: "Erişilebilirlik",
  },
  hero: {
    badge: "Duisburg'da Dil ve Konuşma Terapisi",
    heading_line1: "Konuşun.",
    heading_line2: "Anlayın.",
    heading_line3: "Bağlanın.",
    description:
      "Tüm yaş grupları için Almanca ve Türkçe iki dilli dil ve konuşma terapisi – erken müdahaleden yaşlılığa kadar. Kalp ve akılla.",
    cta_primary: "Randevu Talebi",
    cta_secondary: "Hizmetleri Keşfet",
    badge_station: "Merkez'e 2 dk.",
    badge_lang: "Almanca & Türkçe",
    badge_homevisit: "Ev Ziyareti Mümkün",
    badge_age: "Her Yaş Grubu",
  },
  about: {
    quote:
      '„Etkili bir terapi ancak <strong>terapistlerin kendileri iyi </strong> ve hastaların kendilerini<strong> güvende hissettikleri</strong> bir ortamda ortaya çıkar."',
    section_label: "Muayenehane Hakkında",
    heading: "Kalp ve Akılla Dil ve Konuşma Terapisi",
    description:
      "Devlet onaylı dil ve konuşma terapisti <strong>Emel Şimşek-Uçar</strong>'ın liderliğinde modern muayenehanemiz; erken çocukluktan yaşlılığa kadar tüm yaş gruplarına kapsamlı tanı, danışmanlık ve terapi hizmeti sunmaktadır.",
    stat_bilingual: "Almanca ve Türkçe İki Dilli Hizmet",
    stat_areas_value: "Tüm",
    stat_areas: "Tüm Yaş Grupları için Terapi Alanları",
    stat_station: "Duisburg Merkez İstasyonu'ndan",
    stat_floor: "Asansörle Engelsiz Erişim",
    stat_station_value: "2 dk",
    stat_floor_value: "3. Kat",
  },
  services: {
    section_label: "Terapi Alanlarımız",
    heading: "Dil ve Konuşma Terapisinin Tüm Alanları",
    description:
      "Çocuklar, yetişkinler ve yaşlılar için tüm dil ve konuşma bozukluklarını tedavi ediyoruz.",
    more: "Daha fazla bilgi",
    overview: "Tüm Terapi Alanlarına Genel Bakış",
    items: [
      {
        title: "Dil Bozuklukları",
        text: "Dil anlama ve ifade bozukluklarının tanı ve tedavisi – dil gelişim gecikmesinden inme sonrası gelişen afaziye kadar, çocuklar ve yetişkinler için.",
        tags: ["Dil Gelişimi", "Afazi", "Erken Müdahale"],
        href: "/terapi/dil-bozuklugu/",
      },
      {
        title: "Konuşma Bozuklukları",
        text: "Motor kaynaklı konuşma bozuklukları ile akıcılık ve artikülasyon sorunlarının tedavisi. Kekemelik, bozuk konuşma veya dizartri olsun – yanınızdayız.",
        tags: [
          "Dizartri",
          "Kekemelik",
          "Artikülasyon Bozukluğu",
          "Konuşma Apraksisi",
        ],
        href: "/terapi/konusma-bozuklugu/",
      },
      {
        title: "Ses Bozuklukları",
        text: "Fonksiyonel ve organik ses bozukluklarının tedavisi. En önemli iletişim aracınız olan sesinizi güçlendirip kalıcı olarak korumanıza yardımcı oluyoruz.",
        tags: ["Disfoni", "Ses", "Fonksiyonel"],
        href: "/terapi/ses-terapisi/",
      },
      {
        title: "Yutma Bozuklukları (Disfaji)",
        text: "Yetişkinlerde ve çocuklarda yutma bozukluklarının tanı ve tedavisi – güvenli beslenmenin sağlanması, yaşam kalitesinin korunması ve olası komplikasyonların önlenmesi için.",
        tags: ["Disfaji", "Yutma", "Beslenme"],
        href: "/terapi/yutma-bozuklugu/",
      },
    ],
  },
  praxis: {
    section_label: "Konum & Tesisler",
    heading: "Duisburg'un Merkezinde Modern Muayenehane",
    description:
      "Yüksek kaliteli terapi materyalleriyle donatılmış, çocuklara özel oyun alanlarına sahip ve toplu taşımaya kolayca erişilebilen ışık dolu terapi odaları.",
    address_label: "Adres",
    address_sub: "3. Kat · Asansörle Engelsiz Erişim",
    hours_label: "Çalışma Saatleri",
    hours_weekdays: "Pazartesi – Cuma",
    hours_weekend: "Hafta Sonu",
    hours_closed: "Kapalı",
    transit_label: "Ulaşım",
    transit_value: "Duisburg Merkez İstasyonu'ndan 2 dakika yürüme mesafesinde",
    transit_sub: "Bölge treni, metro, otobüs – hepsi kapı önünde",
    feature_rooms: "Modern, ışık dolu terapi odaları",
    feature_kids: "Çocuklara özel oyun alanları",
    feature_materials: "Yüksek kaliteli, güncel terapi materyalleri",
    feature_accessible: "Engelsiz erişim – binada asansör mevcut",
    map_open: "Google Maps'te Aç",
    map_address_sub: "Tonhallenstraße 21, 3. Kat",
    call: "Ara",
  },
  team: {
    section_label: "Ekibimiz",
    description:
      "Farklı uzmanlık geçmişlerine sahip, yüksek nitelikli dil ve konuşma terapistleri – mesleki yetkinlik, sıcaklık ve terapiye gerçek tutkuyla bir araya gelmiş.",
    join_heading: "Siz de burada olabilirsiniz!",
    join_role: "Ekibe Katılın",
    join_text: "Bizimle birlikte büyümek isteyen motive meslektaşlar arıyoruz.",
    join_cta: "Hemen Başvurun",
    members: [
      {
        role: "Devlet Onaylı Dil ve Konuşma Terapisti",
        badge: "Muayenehane Yöneticisi",
        extra:
          "Muayenehanenin kurucusu ve yöneticisi. İki dilli tanı ve terapi (DE/TR) ile kültürlerarası erken müdahalede uzman.",
      },
      {
        role: "Devlet Onaylı Dil ve Konuşma Terapisti",
        badge: "",
        extra:
          "Çocuklar ve gençlerde dil gelişimine odaklanan deneyimli terapist. İlk görüşmeden terapinin sonuna kadar empatik bir yaklaşımla eşlik eder.",
      },
    ],
  },
  testimonials: {
    section_label: "Hasta Yorumları",
    heading: "Hastalarımız Ne Diyor?",
    description:
      "Gerçek hasta deneyimleri – gizlilik koruması için anonimleştirilmiştir.",
    footnote:
      "Alıntılar gerçek hasta deneyimlerine dayanmakta olup gizlilik nedeniyle anonimleştirilmiştir.",
    stars_aria_template: "{n} yıldız üzerinden 5",
    items: [
      {
        quote:
          "Kızım 3 yaşında sadece birkaç kelime söylüyordu. Burada aldığı terapi sayesinde artık cümleler kuruyor ve anaokulunda kendini rahatça ifade edebiliyor. Türkçe terapi seçeneği bizim için gerçekten büyük bir avantajdı.",
        author: "E. K.",
        detail: "Bir çocuğun annesi",
        stars: 5,
      },
      {
        quote:
          "İnme sonrasında konuşmakta çok güçlük çekiyordum. Burada hem Almanca hem Türkçe destek gördüm. Verilen egzersizler ve terapistlerin sabırlı yaklaşımı sayesinde tekrar konuşabiliyorum.",
        author: "M. Y.",
        detail: "61 yaşında hasta",
        stars: 5,
      },
      {
        quote:
          "Öğretmen olarak sesim en önemli aracım. Kronik kısıklık sorunum nedeniyle ses terapisi aldım ve bütüncül yaklaşım sayesinde okulda yeniden tam kapasite çalışabiliyorum.",
        author: "S. B.",
        detail: "İlkokul öğretmeni",
        stars: 5,
      },
    ],
  },
  faq: {
    section_label: "SSS",
    heading: "Sık Sorulan Sorular",
    description:
      "Dil ve konuşma terapisi hakkında en sık sorulan sorular ve yanıtları.",
    no_question: "Sorunuz burada yok mu?",
    ask_cta: "Bize Sorun",
    ask_href: "/anasayfa/#kontakt",
    items: [
      {
        q: "Dil ve konuşma terapistleri ne tedavi eder?",
        a: "Dil ve konuşma terapistleri; dil (örn. dil gelişim gecikmesi, afazi), konuşma (örn. kekemelik, artikülasyon bozukluğu, dizartri), ses (örn. kısıklık, disfoni) ve yutma (disfaji) alanlarındaki bozuklukları tedavi eder. Çocuklar, yetişkinler ve yaşlılar terapi alabilir.",
      },
      {
        q: "Çocuğum dil ve konuşma terapistine ne yaşında gidebilir?",
        a: "Dil ve konuşma terapisi bebeklik döneminden itibaren uygulanabilir. Dil gelişim gecikmesi ne kadar erken fark edilip tedavi edilirse sonuçlar o kadar olumlu olur. Okul öncesi dönemdeki erken müdahale özellikle etkilidir.",
      },
      {
        q: "Dil ve konuşma terapisi için reçete gerekli mi?",
        a: "Sigorta kapsamındaki terapi için aile hekiminizden veya uzman doktorunuzdan tıbbi reçete almanız gerekmektedir. Bireysel ödeme yapacaksanız reçetesiz randevu alabilirsiniz.",
      },
      {
        q: "Sağlık sigortası dil ve konuşma terapisi masraflarını karşılar mı?",
        a: "Yasal sağlık sigortalıları, geçerli reçete ile terapi masraflarının büyük bölümünü karşılar. Genellikle tedavi ücretinin %10'u artı 10 € reçete ücreti katkı payı ödenir. Tüm yasal ve özel sigortalarla çalışıyoruz.",
      },
      {
        q: "İlk seans nasıl geçer?",
        a: "İlk seansta kapsamlı bir anamnez alır ve standart tanı araçlarıyla mevcut terapi ihtiyacını değerlendiririz. Bu seans yaklaşık 60 dakika sürer. Birlikte terapi hedefleri belirler ve bireysel tedavi planını oluştururuz.",
      },
      {
        q: "Bir seans ne kadar sürer?",
        a: "Standart bir terapi seansı 45 dakika sürer. İlk seansta (tanı ve anamnez) biraz daha fazla zaman ayrılır. Terapi sürecinin toplam uzunluğu bozukluğun türüne ve bireysel ilerlemeye göre değişir; düzenli olarak yeniden değerlendirilir.",
      },
      {
        q: "Haftalık kaç seans gerekir?",
        a: "Bozukluğun türüne ve şiddetine bağlı olarak genellikle haftada 1–2 seans önerilir. Seanslar arasında düzenli ev egzersizleri, terapinin önemli bir parçasını oluşturur ve kalıcı ilerleme için belirleyicidir.",
      },
      {
        q: "Türkçe terapi sunuyor musunuz?",
        a: "Evet – Almanca ve Türkçe olarak kapsamlı tanı, danışmanlık ve terapi hizmeti sunuyoruz. Özellikle iki dilli büyüyen çocuklar ve Türkçe konuşan yetişkinler için bu kültürlerarası yetkinlik büyük bir avantaj sağlar. Duisburg'da bu hizmet oldukça nadirdir.",
      },
      {
        q: "Duisburg'da ev ziyareti yapıyor musunuz?",
        a: "Evet, talep üzerine Duisburg ve çevresinde ev ziyareti gerçekleştiriyoruz – özellikle hareket kabiliyeti kısıtlı hastalar ya da kendi ortamında terapi almanın daha verimli olduğu durumlar için.",
      },
      {
        q: "Dil bozukluğu ile konuşma bozukluğu arasındaki fark nedir?",
        a: "Dil bozuklukları; sözcük dağarcığı, dilbilgisi ve dili anlama gibi dilsel becerileri etkiler (örn. afazi, dil gelişim gecikmesi). Konuşma bozuklukları ise seslerin ve sözcüklerin nasıl üretildiğini etkiler (örn. kekemelik, artikülasyon bozukluğu, dizartri). Her iki bozukluk aynı anda da görülebilir.",
      },
    ],
  },
  kontakt: {
    section_label: "İletişim",
    heading: "Randevu Al",
    description:
      "Randevular yalnızca telefonla alınmaktadır. Hemen arayın – size veya çocuğunuza en uygun terapi zamanını birlikte bulalım.",
    phone_only_notice:
      "Randevular yalnızca <strong>telefonla</strong> alınmaktadır. Genel sorularınız için bize e-posta ile ulaşabilirsiniz. İletişim formu sunmuyoruz.",
    phone_cta_heading: "Hemen Arayın",
    phone_cta_sub:
      "Bizi doğrudan arayın – size yardımcı olmaktan memnuniyet duyarız.",
    phone_cta_hours_label: "Ulaşılabilirlik",
    phone_cta_bilingual:
      "Danışmanlık <strong>Türkçe</strong> olarak da mümkündür.",
    info_phone_label: "Telefon",
    info_phone_hours: "Pzt–Cum 08:00–18:00",
    info_email_label: "E-Posta",
    info_email_hours: "Genel sorular için · Randevular telefonla alınır",
    info_address_label: "Adres",
    info_address_sub: "3. Kat · Asansör mevcut · Merkez'e 2 dk.",
    info_lang_label: "Diller",
    info_lang_value: "Almanca & Türkçe",
    info_lang_sub: "Her iki dilde terapi mevcuttur",
    insurance_note:
      "<strong>Sigorta kapsamı mı, bireysel ödeme mi?</strong><br>Tüm yasal sağlık sigortalarıyla çalışıyor, özel sigortalıları ve bireysel ödemeli hastaları da kabul ediyoruz. Ödeme ve sigorta konusundaki tüm sorularınızı yanıtlamaktan memnuniyet duyarız.",
  },
  cookie: {
    aria_label: "Çerez Bildirimi",
    text: "Web sitemizi geliştirmek için Google Analytics'i yalnızca onayınızla kullanıyoruz. Onay olmadan Google Analytics betiği yüklenmez.",
    decline: "Reddet",
    accept: "Kabul et",
  },
  schema: {
    business_description:
      "Duisburg'da dil, konuşma ve ses terapisi alanında uzmanlaşmış logoterapi kliniği. Çocuklar ve yetişkinler için iki dilli (DE/TR) terapi.",
    founder_title: "Devlet Onaylı Logoped",
    offer_catalog_name: "Logoterapi Alanları",
    services: [
      { name: "Dil Terapisi", url: "/therapieangebot/sprachstoerungen" },
      { name: "Konuşma Terapisi", url: "/therapieangebot/sprechstoerungen" },
      { name: "Ses Terapisi", url: "/therapieangebot/stimmtherapie" },
      { name: "Yutma Terapisi", url: "/therapieangebot/schluckstoerungen" },
    ],
  },
};
