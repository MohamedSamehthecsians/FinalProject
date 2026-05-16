const aboutTranslations: any = {
    ar: {
        pageTitle: "عن المستشفى - مستشفى الشفاء",
        logoText: "مستشفى الشفاء",
        aboutLink: "عن المستشفى",
        shopLink: "المتجر الطبي",
        bookLink: "احجز الآن",
        homeLink: "الرئيسية",
        aboutTitle: "عن مستشفى الشفاء",
        aboutText1: "تأسست مستشفى الشفاء عام 1990، وعلى مدار أكثر من ثلاثة عقود قمنا بتقديم الرعاية الطبية الفائقة لملايين المرضى وتطوير منظومتنا الصحية باستمرار.",
        aboutText2: "تضم المستشفى نخبة من أمهر الأطباء والاستشاريين في كافة التخصصات الطبية، والذين يعملون بروح الفريق الواحد لضمان سلامتكم.",
        aboutText3: "نتبع نظاماً إدارياً وطبياً رقمياً بالكامل، يسهل على المريض حجز المواعيد، متابعة الفحوصات، وتلقي الاستشارات بسرعة ودقة عالية.",
        footerText: "جميع الحقوق محفوظة © مستشفى الشفاء 2026",
        langBtn: "English"
    },
    en: {
        pageTitle: "About Us - Al-Shifa Hospital",
        logoText: "Al-Shifa Hospital",
        aboutLink: "About Us",
        shopLink: "Medical Shop",
        bookLink: "Book Now",
        homeLink: "Home",
        aboutTitle: "About Al-Shifa Hospital",
        aboutText1: "Established in 1990, Al-Shifa Hospital has provided superior medical care to millions of patients for over three decades, continuously evolving our healthcare system.",
        aboutText2: "The hospital features an elite group of expert doctors and consultants across all medical specialties, working as one team to ensure your safety.",
        aboutText3: "We follow a fully digital medical and administrative system, making it easy for patients to book appointments, track medical tests, and receive consultations quickly.",
        footerText: "All Rights Reserved © Al-Shifa Hospital 2026",
        langBtn: "عربي"
    }
};
export function changeAboutLanguage(lang: string): void {
    const htmlTag = document.documentElement;
    htmlTag.setAttribute('lang', lang);
    htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    const langData = aboutTranslations[lang];
    for (const id in langData) {
        const element = document.getElementById(id);
        if (element) {
            element.innerText = langData[id];
        }
    }
}