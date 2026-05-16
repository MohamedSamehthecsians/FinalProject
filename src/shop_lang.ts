const shopTranslations: any = {
    ar: {
        pageTitle: "المتجر الطبي - مستشفى الشفاء",
        logoText: "مستشفى الشفاء",
        homeLink: "الرئيسية",
        aboutLink: "عن المستشفى",
        shopLink: "المتجر الطبي",
        favText: "المفضلة",
        cartText: "السلة",
        shopTitle: "المتجر الطبي الإلكتروني",
        shopSub: "تسوق أفضل الأجهزة والمستلزمات الطبية المعتمدة بجودة عالية.",
        footerText: "جميع الحقوق محفوظة © مستشفى الشفاء 2026",
        langBtn: "English"
    },
    en: {
        pageTitle: "Medical Shop - Al-Shifa Hospital",
        logoText: "Al-Shifa Hospital",
        homeLink: "Home",
        aboutLink: "About Us",
        shopLink: "Medical Shop",
        favText: "Favorites",
        cartText: "Cart",
        shopTitle: "Electronic Medical Shop",
        shopSub: "Shop the best certified medical devices and supplies with high quality.",
        footerText: "All Rights Reserved © Al-Shifa Hospital 2026",
        langBtn: "عربي"
    }
};
export function changeShopLanguage(lang: string): void {
    const htmlTag = document.documentElement;
    htmlTag.setAttribute('lang', lang);
    htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    const langData = shopTranslations[lang];
    for (const id in langData) {
        const element = document.getElementById(id);
        if (element) {
            element.innerText = langData[id];
        }
    }
}