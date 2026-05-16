import { changeShopLanguage } from './shop_lang.js';
let currentLang: string = 'ar';
let cartCountValue: number = 0;
let favCountValue: number = 0;
const langBtn = document.getElementById('langBtn') as HTMLButtonElement;
const productsGrid = document.getElementById('productsGrid') as HTMLElement;
const cartCount = document.getElementById('cartCount') as HTMLElement;
const favCount = document.getElementById('favCount') as HTMLElement;
const productsData = [
    {
        id: 1,
        titleAr: "جهاز قياس ضغط الدم",
        titleEn: "Blood Pressure Monitor",
        descAr: "جهاز رقمي دقيق وسهل الاستخدام لقياس ضغط الدم من المنزل تلقائيًا.",
        descEn: "Accurate and easy-to-use digital monitor for home blood pressure testing.",
        priceAr: "250 ج.م",
        priceEn: "$25.00",
        image: "data:image/jpeg;base64,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",
        quantity: 0,
        fav:false
    },
    {
        id: 2,
        titleAr: "مقياس حرارة عن بعد",
        titleEn: "Infrared Thermometer",
        descAr: "يقيس درجة الحرارة في ثانية واحدة بدون تلامس للحفاظ على الأمان والوقاية.",
        descEn: "Measures temperature in one second without contact for safety.",
        priceAr: "150 ج.م",
        priceEn: "$15.00",
        image: "https://zohaira.com/wp-content/uploads/2021/02/04TTMD99-5.jpg",
        quantity: 0,
        fav:false
    },
    {
        id: 3,
        titleAr: "عبوة كمامات طبية",
        titleEn: "Medical Face Masks",
        descAr: "علبة تحتوي على 50 قطعة كمامة ثلاثية الطبقات عالية الجودة ومريحة للتنفس.",
        descEn: "Box of 50 high quality 3-ply masks, comfortable for daily breathing.",
        priceAr: "50 ج.م",
        priceEn: "$5.00",
        image: "https://m.media-amazon.com/images/I/31FcaoPIt1L._AC_UF350,350_QL80_.jpg",
        quantity: 0,
        fav: false
    }
];
function renderProducts(): void {
    productsGrid.innerHTML = "";
    productsData.forEach(product => {
        const card = document.createElement('div');
        card.className = "product-card";
        const title = currentLang === 'ar' ? product.titleAr : product.titleEn;
        const desc = currentLang === 'ar' ? product.descAr : product.descEn;
        const price = currentLang === 'ar' ? product.priceAr : product.priceEn;
        const cartBtnText = currentLang === 'ar' ? "أضف للسلة" : "Add to Cart";
        const favBtnText = currentLang === 'ar' ? "♥ مفضلة" : "♥ Fav";
        let cartControlHTML = "";
        if (product.quantity === 0) {
            cartControlHTML = `<button class="add-cart-btn">${cartBtnText}</button>`;
        } else {
            cartControlHTML = `
                <div class="quantity-control" style="display: flex; gap: 5px; align-items: center; flex: 2;">
                    <button class="minus-btn" style="background-color: #e02424; color: white; border: none; padding: 8px; cursor: pointer; border-radius: 4px; flex: 1;">-</button>
                    <span class="qty-val" style="flex: 1; text-align: center; font-weight: bold;">${product.quantity}</span>
                    <button class="plus-btn" style="background-color: #0056b3; color: white; border: none; padding: 8px; cursor: pointer; border-radius: 4px; flex: 1;">+</button>
                </div>
            `;
        }
        card.innerHTML = `
            <img src="${product.image}" alt="${title}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${title}</h3>
                <p class="product-desc">${desc}</p>
                <div class="product-price">${price}</div>
                <div class="btn-group">
                    ${cartControlHTML}
                    <button class="add-fav-btn">${favBtnText}</button>
                </div>
            </div>
        `;
        const favBtn = card.querySelector('.add-fav-btn') as HTMLButtonElement;
        favBtn.addEventListener('click', () => {
            if(!product.fav){
                favCountValue++;
                favCount.innerText = favCountValue.toString();
                product.fav = true;
            }else{
                favCountValue--;
                favCount.innerText = favCountValue.toString();
                product.fav = false;
            }
        });
        if (product.quantity === 0) {
            const cartBtn = card.querySelector('.add-cart-btn') as HTMLButtonElement;
            cartBtn.addEventListener('click', () => {
                product.quantity = 1;
                cartCountValue++;
                cartCount.innerText = cartCountValue.toString();
                renderProducts();
            });
        } else {
            const plusBtn = card.querySelector('.plus-btn') as HTMLButtonElement;
            const minusBtn = card.querySelector('.minus-btn') as HTMLButtonElement;
            plusBtn.addEventListener('click', () => {
                product.quantity++;
                cartCountValue++;
                cartCount.innerText = cartCountValue.toString();
                renderProducts();
            });
            minusBtn.addEventListener('click', () => {
                product.quantity--;
                cartCountValue--;
                cartCount.innerText = cartCountValue.toString();
                renderProducts();
            });
        }
        productsGrid.appendChild(card);
    });
}
langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    changeShopLanguage(currentLang);
    renderProducts();
});
renderProducts();