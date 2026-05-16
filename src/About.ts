import { changeAboutLanguage } from './about_lang.js';
let currentLang: string = 'ar';
const langBtn = document.getElementById('langBtn') as HTMLButtonElement;
langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    changeAboutLanguage(currentLang);
});