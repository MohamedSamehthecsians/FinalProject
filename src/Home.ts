import { changeLanguage } from './lang.js';
let currentLang: string = 'ar';
const langBtn = document.getElementById('langBtn') as HTMLButtonElement;
const bookLink = document.getElementById('bookLink') as HTMLElement;
const mainBookBtn = document.getElementById('mainBookBtn') as HTMLButtonElement;
const bookingModal = document.getElementById('bookingModal') as HTMLElement;
const closeModalBtn = document.getElementById('closeModalBtn') as HTMLElement;
const bookingForm = document.getElementById('bookingForm') as HTMLFormElement;
langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    changeLanguage(currentLang);
});
function openModal(): void {
    bookingModal.style.display = "flex";
}
function closeModal(): void {
    bookingModal.style.display = "none";
    bookingForm.reset();
}
bookLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});
mainBookBtn.addEventListener('click', () => {
    openModal();
});
closeModalBtn.addEventListener('click', () => {
    closeModal();
});
window.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
        closeModal();
    }
});
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form Submitted!');
    closeModal();
});