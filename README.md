# js-lesson-1

### **Dasturlash tillari**

- **C**: 1970-yillarda yaratilgan kuchli umumiy maqsadli dasturlash tili. Asosiy tizim va ilovalar dasturlashda ishlatiladi.
- **C++**: C tili kengaytmasi, ob'ektga yo'naltirilgan dasturlashni qo'llab-quvvatlaydi. O'yinlar, real vaqtli tizimlar va samaradorlikka muhtoj ilovalarda qo'llaniladi.
- **C#**: Microsoft tomonidan .NET framework’ining bir qismi sifatida ishlab chiqilgan. Windows ilovalari, o'yinlar (Unity bilan) va korxona dasturlarini yaratishda ishlatiladi.
- **JavaScript**: Web rivojlantirishda interaktiv front-end tajribalar yaratish uchun ishlatiladigan yuqori darajadagi, dinamik tiplashgan skript tili.
- **Java**: Platformadan mustaqil bo'lgan dasturlash tili. Android ilovalari, web ilovalar va korxona dasturlarida ishlatiladi.
- **Python**: O'qilishi va foydalanilishi oson, web rivojlantirish, ma'lumotlarni tahlil qilish, sun'iy intellekt va avtomatizatsiya uchun ishlatiladi.
- **PHP**: Server tomonida ishlaydigan skript tili. Dinamik kontent boshqarish va server tomonidagi ilovalar uchun ishlatiladi.
- **Go**: Google tomonidan ishlab chiqilgan, soddaligi va samaradorligi bilan mashhur. Bulutga asoslangan va parallellikni qo'llab-quvvatlovchi ilovalar uchun ideal.
- **Dart**: Google tomonidan ishlab chiqilgan, asosan Flutter framework’ida mobil ilovalarni yaratishda ishlatiladi.

### **JavaScript Tarixi**

- **Brendan Eich** (Netscape ishlab chiquvchisi) 1995 yilda JavaScriptni 10 kun ichida yaratgan.
- Dastlab **Mocha**, keyin **LiveScript**, so'ngra **JavaScript** deb nomlangan (Java tili mashhur bo'lgani uchun).
- Microsoft **Internet Explorer 3** ni Netscape bilan raqobatlash uchun yaratdi va bu ikkita JavaScript versiyasining paydo bo'lishiga olib keldi:
  1. **Netscape Navigator JavaScript**
  2. **Internet Explorer JavaScript**

### **Nima uchun JavaScript?**

- **Dinamik tiplashgan**: JavaScript o'zgaruvchilar turini dinamik ravishda o'zgartirishi mumkin.
- **Voqeaga asoslangan**: JavaScript foydalanuvchi interaktsiyalari kabi voqealarni samarali boshqaradi.
- **Platformadan mustaqil**: Har qanday brauzerda ishlaydi.
- **Ko'p tomonlama**: Mijoz tomoni va server tomoni dasturlashda qo'llaniladi.

### **JavaScript Nima qiladi?**

- JavaScript web brauzerlarda uchta asosiy qismdan iborat:
  1. **ECMAScript**: Standart skript tili spetsifikatsiyasi.
  2. **DOM (Document Object Model)**: Web sahifaning tuzilishini boshqaradi va voqealar, shakllar orqali o'zaro aloqani ta'minlaydi.
  3. **BOM (Browser Object Model)**: Brauzer bilan bog'liq funksiyalarni boshqaradi, masalan, joylashuv, bildirishnomalar.

### **JavaScript Versiyalari (ES1 dan ES6 gacha)**

- **ES5 (2009)**: Muayyan xususiyatlar, masalan, qattiq rejim va JSON qo'llab-quvvatlanadi.
- **ES6 (2015+)**: Katta o'zgarishlar, masalan, `let`, `const`, стрелочные funksiyalar, sinflar va modullar kiritildi.
- **Keyingi ES**: Tilni yangilash va takomillashtirish davom etmoqda.

### **JavaScriptni qayerda ishlatish mumkin?**

- **Inline**: HTML teglarida to'g'ridan-to'g'ri `onclick` atributi orqali.
- **Internal**: HTML fayllari ichidagi `<script>` teglarida.
- **External**: Alohida `.js` fayllarda va HTMLga ulanish orqali.

### **JavaScriptda Kirish va Chiqish**

- **Kirish**: Foydalanuvchi ma'lumotlarini `prompt()` orqali olish.
- **Chiqish**: Natijalarni `innerHTML`, `document.write()`, `window.alert()`, `window.confirm()` va `console.log()` orqali ko'rsatish.

### **Sintaksis va Izohlar**

- **Izohlar**: Bir qator uchun `//` va ko'p qator uchun `/* ... */` ishlatiladi.
- **Bayonotlar**: `;` bilan tugatiladi.
- **Bloklar**: Bir nechta bayonotlarni `{}` bilan guruhlash.
- **Ifodalar**: Qiymatlarni ifodalaydi, masalan, `3 + 4`.
- **Bo'sh joylar**: O'qish uchun bo'sh joylar, yangi qator va tabulator.

### **Identifikatorlar yoki Ismlar**

- **Qoidalar**:
  - Harflar, raqamlar, pastki chiziqlar yoki dollar belgilari ishlatish.
  - Raqam bilan boshlamaslik.
  - Tushunarli (masalan, `firstName`).
  - Rezerv qilingan kalit so'zlardan foydalanmaslik.
  - JavaScript katta-kichik harflarga sezgir.
- **Nomi Yozish Qoidalari**:
  - **PascalCase**: `FirstName`
  - **snake_case**: `first_name`
  - **camelCase**: `firstName` (tavsiya etiladi)
  - **kebab-case**: `first-name` (o'zgaruvchilar uchun qo'llab-quvvatlanmaydi)

### **O'zgaruvchilar**

- **O'zgaruvchi Nima?**
  - Ma'lumotlarni saqlash uchun konteyner.
- **Turlari**:
  - **var**: Eski versiya, funktsiya doirasida.
  - **let**: ES6 da qo'shilgan, blok doirasida.
  - **const**: ES6 da qo'shilgan, e'lon qilingan paytda qiymat tayinlanishi kerak.
- **Muhim Tushunchalar**:
  - **E'lon qilish**: O'zgaruvchini aniqlash.
  - **Tayyorlash**: O'zgaruvchiga qiymat berish.
  - **Tayinlash**: O'zgaruvchining qiymatini yangilash.
- **Amaliy Analogiya**:
  ```jsx
  let message; // e'lon qilish
  message = "Hello!"; // tayyorlash
  message = "World!"; // tayinlash
  console.log(message); // chiqish
  ```
- **Muhim Jihatlar**:
  - `undefined`: E'lon qilingan o'zgaruvchining qiymati.
  - `undeclared`: E'lon qilinmagan o'zgaruvchini ishlatish.
  - `=`: Tayinlash operatori, tenglik emas.
- **Maslahat**:
  - O'zgaruvchilarni algebra kabi fikr qiling.
  - Bir bayonotda ko'p o'zgaruvchilarni e'lon qilmaslik.
- **var vs let**:
  - `var` qayta e'lon qilinishi mumkin; `let` - yo'q.
- **Doimiylar**:
  - E'lon qilinganida qiymat tayinlanishi kerak.
  - UPPERCASE bilan yozilishi kerak.
- **`typeof` Operatori**:
  - O'zgaruvchining turini qaytaradi (masalan, string, number).

### **O'zgaruvchilarni Aylantirish**

```jsx
let A = 10;
let B = 20;

let K = A;
A = B;
B = K;
```

### **Aritmetik Operatorlar**

- **+**: Qo'shish
- \*\*\*\*: Ayirish
- \*\*\*\*: Ko'paytirish
- **/**: Bo'lish
- **\*\***: Daraja
- **%**: Qoldiqli bo'lish

### **Yagona Operatorlar**

- **+x**: x ni musbat raqamga aylantiradi.
- **x**: x ni manfiy raqamga aylantiradi.
- **++x**: x ni 1 ga oshiradi (prefiks).
- **-x**: x ni 1 ga kamaytiradi (prefiks).
- **x++**: x ni 1 ga oshiradi (postfix).
- **x--**: x ni 1 ga kamaytiradi (postfix).

### \*

Amaliy Savollar\*\*

1. **O'zgaruvchilar**: Uchta o'zgaruvchini e'lon qiling, tayinlang va qiymatlarni chop eting.
2. **Aritmetik Operatorlar**: Qo'shish, ayirish, ko'paytirish va bo'lishni amalga oshiruvchi kalkulyator yarating.
3. **Aylantirish**: Ikkita o'zgaruvchining qiymatlarini uchinchi o'zgaruvchi ishlatmasdan almashtrang.

### **Nazariy Savollar**

1. `var`, `let` va `const` o'rtasidagi farqlarni tushuntiring.
2. JavaScriptda nomlash qoidalarining ahamiyatini izohlang.
3. JavaScript nimani dinamik tiplashgan til sifatida hisoblanadi?
