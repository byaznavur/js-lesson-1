// Begin1

// let a = +prompt("Kvadrat tomoni: ");

// let P = 4 * a;

// console.log("Perimetr =", P);

// Begin2;

// let a = +prompt("Kvadrat tomoni: ");

// let S = a ** 2;

// console.log("Yuza =", S);

// Begin3

// let R = +prompt("Doirasi radiusi");

// const PI = 3.14;

// L = 2 * PI * R;
// S = PI * R ** 2;

// console.log("Uzunligi =", L);
// console.log("Yuzasi =", S);

// Begin4

// let a = +prompt("a ni kiriting: ");
// let b = +prompt("b ni kiriting: ");

// let G = (a * b) ** (1 / 2);

// console.log(G);

// Begin5

// let x = +prompt("x ni kiriting");

// let y = 3 * x ** 6 - 6 * x ** 2 - 7;

// console.log(y);

// Begin6

// let X = +prompt("X kg");
// let A = +prompt("A sum");
// let Y = +prompt("Y kg");

// let kg1 = A / X;

// let kgY = Y * kg1;

// console.log("1kg =", kg1);

// console.log(Y, "kg = ", kgY);

// Begin7

// let A = 7;
// let B = 10;

// let k = A;

// A = B;

// B = k;

// console.log(A);
// console.log(B);

// Integer1, 2, 3,

// let ab = 62;

// let b = ab % 10;

// let a = (ab - b) / 10;

// console.log(b);

// console.log(a);

// let ba = b * 10 + a;

// console.log(ba);

// Integer 4

// let abc = 274;

// bc = abc % 100;

// a = (abc - bc) / 100;

// console.log(a);

// Integer6

// let N = 10000;

// let restSeconds = N % 3600;

// let hour = (N - restSeconds) / 3600;

// let second = restSeconds % 60;

// let minute = (restSeconds - second) / 60;

// console.log(hour);
// console.log(minute);
// console.log(second);

// HomeWork
//! Begin1. To`g`ri to`rtburchakning tomonlari a va b berilgan. Uning yuzasi va perimetri aniqlansin.
// S = a * b
// P = 2 * (a + b)

//! Begin2. Aylananing diametri d berilgan. Uning uzunligi va yuzasi aniqlansin.
//  let π = 3.14
// L = π * d
// π = 3.14
// r = d / 2;
// S = π * r**2

//! Begin3. Kubning yon tomoni a berilgan. Uning hajmini V va to`la sirti S aniqlansin.
// V = a**3
// S = 6 * a**2

//! Begin4. Paralelepepidning tomonlari a, b, c berilgan. Uning hajmi Vni va to'la sirti Sni aniqlansin.
// V = a * b * c
// S = 2 * (a * b + b * c + a * c)

//! Begin5. Ikkita son a va b berilgan. Ularning o`rta arifmetigi M aniqlansin.
// M = (a + b) / 2

//! Begin6. To`gri uchburchakning katetlari a va b berilgan. Uning gipotenuzasi c va perimetri P aniqlansin.
// c = (a**2+b**2)**(1/2)
// P = a + b + c

//! Begin7. Umumiy markazga bo`lgan ikkita aylana radiusi berilgan. r1, r2. (r1 > r2). Ularning yuzalari S1 va S2, ularning ayirmasi S aniqlansin.
// S1 = π * r1
// S2 = π * r2
// S = π * (r1**2 − r2**2).

//! Begin8. Aylananing uzunligi L berilgan. Uning radiusi R va yuzasi S aniqlansin.
// L = 2 * π * R
// S = π * R**2
// π = 3.14

// Begin9. Tekislikdagi berilgan ikki nuqta (x1, y1) va (x2, y2) orasidagi L masofa topilsin.
// L = ((x1-x2)**2 + (y1 - y2)**2)**(1/2)

//! Begin10. A, B va C sonlari berilgan. A ni qiymati B ga, B ni qiymati C ga va C ni qiymati A ga almashtirilsin. A, B va C ning yangi qiymatilari ekranga chiqarilsin.
// let A = 12;
// let B = 11;

// let K = A;
// A = B;
// B = K;

//! Begin11. x ning qiymati berilganda y funksiyaning qiymati aniqlansin.
// y = 4 * (x - 3)**6 - 7 * (x - 3)**3 + 2

//! Begin12. A soni berilgan. A ning darajalarini aniqlovchi programma tuzilsin.
// A**3‚ A**6‚ A**9, A**15

//! Begin13. Temperatura Tf (farengeyt) da berilgan. Temperatura qiymatini Tc (gradus selsiy) ga o`tkazuvchi programma tuzilsin.
// Tc = (Tf - 32) * 5/9

//! Begin14. X kg shokolad A so`m turadi va Y kg konfet B so`m turadi. 1 kg shokolad 1 kg konfetdan qancha qimmat turishini aniqlovchi programma tuzilsin.
// let kgsh = A / X;

// let kgk = B / Y;

// let sum = A / B;
//! Begin15. Abdulaziz X kg olmani A so’mdan, Y kg olmani B so’mdan sotib oldi. Abdulaziz jami qancha savdo qilgan?
// let res = X * A + Y * B;
// Keyingi misollarda xonalarni qanday atalishini bilish muhim !

//? Integer1. Uch xonali son berilgan. Oldin uni birliklar xonasidagi raqamni so`ng o`nliklar xonasidagi raqamni chiqaruvchi programma tuzilsin.
// let abc = 123;

// let c = abc % 10;
// let b = ((abc - c) / 10) % 10;
// let a = (abc - b * 10 - c) / 100;
// console.log(a);
// console.log(b);

//? Integer2. Uch xonali son berilgan. Uning raqamlar yig`indisini aniqlovchi programma tuzilsin.
// let abc = 123;

// let c = abc % 10;
// let b = ((abc - c) / 10) % 10;
// let a = (abc - b * 10 - c) / 100;

// let sum = a + b + c;

//? Integer3. Uch xonali son berilgan. Uning raqamlarini teskari tartibda yozishdan hosil bo`lgan sonni aniqlovchi program tuzilsin.
// let abc = 123;

// let c = abc % 10;
// let b = ((abc - c) / 10) % 10;
// let a = (abc - b * 10 - c) / 100;

// let sum = c * 100 + b * 10 + a;
//? Integer4. Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan yuzliklar xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin.
// Input: 123
// Output: 213
// let sum = b * 100 + a * 10 + c;
// Integer5. Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan birliklar xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin.
// Input: 123
// Output: 132

//? Integer6. 999 dan katta bo`lgan son berilgan. Bir marta bo`lib butunni va bo`lib qoldiqni olish operatsiyasidan foydalanib berilgan sonni mingliklar xonasidagi sonni aniqlovchi programma tuzilsin.
// Input: 98123
// Output: 8
// let number = 98123;

// Mingliklar xonasidagi sonni olish
// let thousandsPlace = Math.floor((number % 10000) / 1000);

// console.log(thousandsPlace); // 8

// 1 minut = 60 s
// 1 soat = 60 minut
// 1 soat = 3600s
// 1 sutka = 24 soat

//? Integer7. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha minut to'la o`tganligini aniqlovchi programma tuzilsin.
// let N = 10000;

// let restSeconds = N % 3600;

// let hour = (N - restSeconds) / 3600;

// let second = restSeconds % 60;

// let minute = (restSeconds - second) / 60;

// console.log(hour);
// console.log(minute);
// console.log(second);
// ?Integer8. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha to'la soat o`tganligini aniqlovchi programma tuzilsin.

// let N = 10000;

// let restSeconds = N % 3600;

// let hour = (N - restSeconds) / 3600;

// let second = restSeconds % 60;

// let minute = (restSeconds - second) / 60;

// console.log(hour);
// console.log(minute);
// console.log(second);
// ?Integer9. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha minut va sekund o'tganini aniqlovchi programma tuzilsin.
// let N = 10000;

// let restSeconds = N % 3600;

// let hour = (N - restSeconds) / 3600;

// let second = restSeconds % 60;

// let minute = (restSeconds - second) / 60;

// console.log(hour);
// console.log(minute);
// console.log(second);
//? Integer10. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha soat va sekund o'tganini aniqlovchi programma tuzilsin.
// let N = 10000;

// let restSeconds = N % 3600;

// let hour = (N - restSeconds) / 3600;

// let second = restSeconds % 60;

// let minute = (restSeconds - second) / 60;

// console.log(hour);
// console.log(minute);
// console.log(second);
