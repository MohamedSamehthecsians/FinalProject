const translations: any = {
    ar: {
        pageTitle: "مستشفى الشفاء",
        logoText: "مستشفى الشفاء",
        aboutLink: "عن المستشفى",
        shopLink: "المتجر الطبي",
        bookLink: "احجز الآن",
        heroTitle: "رعايتكم هي أولويتنا دائمًا",
        heroDesc: "نقدم أفضل الخدمات الطبية برعاية أمهر الأطباء والمتخصصين بأحدث الأجهزة.",
        mainBookBtn: "ابدأ الحجز الآن",
        aboutTitle: "عن مستشفى الشفاء",
        aboutText1: "تأسست مستشفى الشفاء عام 1990، وعلى مدار أكثر من ثلاثة عقود قمنا بتقديم الرعاية الطبية الفائقة لملايين المرضى وتطوير منظومتنا الصحية باستمرار.",
        aboutText2: "تضم المستشفى نخبة من أمهر الأطباء والاستشاريين في كافة التخصصات الطبية، والذين يعملون بروح الفريق الواحد لضمان سلامتكم.",
        aboutText3: "نتبع نظاماً إدارياً وطبياً رقمياً بالكامل، يسهل على المريض حجز المواعيد، متابعة الفحوصات، وتلقي الاستشارات بسرعة ودقة عالية.",
        servicesTitle: "أقسامنا الطبية",
        card1Title: "عيادة الأطفال",
        card1Desc: "رعاية متكاملة لصحة أطفالكم الطبية والنفسية.",
        card2Title: "طوارئ 24 ساعة",
        card2Desc: "مستعدون لاستقبال كافة الحالات الحرجة على مدار الساعة.",
        card3Title: "العمليات الجراحية",
        card3Desc: "غرفة عمليات مجهزة بأحدث التقنيات العالمية.",
        footerText: "جميع الحقوق محفوظة © مستشفى الشفاء 2026",
        langBtn: "English",
        modalTitle: "حجز موعد جديد",
        labelName: "الاسم بالكامل:",
        labelPhone: "رقم الهاتف:",
        labelSpecialty: "التخصص المطلوب:",
        optSpecialtyDefault: "اختر التخصص",
        optPediatrics: "عيادة الأطفال",
        optSurgery: "العمليات الجراحية",
        labelDoctor: "اسم الدكتور:",
        optDoctorDefault: "اختر الطبيب",
        submitBookingBtn: "تأكيد الحجز"
    },
    en: {
        pageTitle: "Al-Shifa Hospital",
        logoText: "Al-Shifa Hospital",
        aboutLink: "About Us",
        shopLink: "Medical Shop",
        bookLink: "Book Now",
        heroTitle: "Your Health Is Always Our Priority",
        heroDesc: "We provide the best medical services with expert doctors and modern equipment.",
        mainBookBtn: "Start Booking Now",
        aboutTitle: "About Al-Shifa Hospital",
        aboutText1: "Established in 1990, Al-Shifa Hospital has provided superior medical care to millions of patients for over three decades, continuously evolving our healthcare system.",
        aboutText2: "The hospital features an elite group of expert doctors and consultants across all medical specialties, working as one team to ensure your safety.",
        aboutText3: "We follow a fully digital medical and administrative system, making it easy for patients to book appointments, track medical tests, and receive consultations quickly.",
        servicesTitle: "Our Medical Departments",
        card1Title: "Pediatrics Clinic",
        card1Desc: "Comprehensive care for your children physical and mental health.",
        card2Title: "24/7 Emergency",
        card2Desc: "Ready to receive all critical cases around the clock.",
        card3Title: "Surgical Operations",
        card3Desc: "Operating rooms equipped with the latest international technologies.",
        footerText: "All Rights Reserved © Al-Shifa Hospital 2026",
        langBtn: "عربي",
        modalTitle: "Book a New Appointment",
        labelName: "Full Name:",
        labelPhone: "Phone Number:",
        labelSpecialty: "Required Specialty:",
        optSpecialtyDefault: "Select Specialty",
        optPediatrics: "Pediatrics Clinic",
        optSurgery: "Surgical Operations",
        labelDoctor: "Doctor Name:",
        optDoctorDefault: "Select Doctor",
        submitBookingBtn: "Confirm Booking"
    }
};
export function changeLanguage(lang: string): void {
    const htmlTag = document.documentElement;
    htmlTag.setAttribute('lang', lang);
    htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    const langData = translations[lang];
    for (const id in langData) {
        const element = document.getElementById(id);
        if (element) {
            element.innerText = langData[id];
        }
    }
}