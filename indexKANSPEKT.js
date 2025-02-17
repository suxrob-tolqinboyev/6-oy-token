// Token, turli sohalarda turlicha ma'nolarga ega bo'lishi mumkin, ammo dasturlashda yoki kompyuter 
// texnologiyalarida tokenlar ko'pincha autentifikatsiya, xavfsizlik, va ma'lumotlar uzatish uchun 
// ishlatiladi. Quyida tokenning asosiy tushunchalarini ko'rib chiqamiz:

// 1. Dasturlashda Tokenlar:
// Token – bu dasturda yoki tizimda ma'lum bir maqsadga xizmat qiladigan ma'lumotlar birligi.
//  Masalan, tilshunoslikda yoki sintaksis tahlilida token biron bir ma'lumotni (so'z, belgi yoki raqam)
//  ifodalovchi obyekt bo'lishi mumkin.

// JavaScript va Dasturlashda:
// JavaScript va boshqa dasturlash tillarida tokenlar:

// Lexical Tokens: Bu biror dasturdagi sintaktik bo'laklarni (so'zlar, operatorlar, belgilar va h.k.) tasvirlaydi. Masalan, let, function, =, const va boshqalar – bularning barchasi tokenlar hisoblanadi.
// String Token: Matnli ma'lumotlar uchun ishlatiladi, masalan "salom", "hello" kabi.
// Number Token: Raqamli qiymatlar uchun ishlatiladi, masalan, 5, 23.45.
// 2. Xavfsizlik va Autentifikatsiyada Tokenlar:
// Web ilovalarida va API-larda tokenlar foydalanuvchilarni autentifikatsiya qilish va ularga ruxsat berish uchun
//  ishlatiladi. Bu jarayon xavfsizligini oshirishda muhim rol o'ynaydi.

// JWT (JSON Web Token):
// JWT – bu server va foydalanuvchi orasida autentifikatsiya qilish uchun ishlatiladigan token turidir.
// JWT ichida 3 bo'lim mavjud: Header (sarlavha), Payload (ma'lumotlar), Signature (imzo).
// Header: Kodlash usuli va token turi haqida ma'lumot saqlanadi.
// Payload: Foydalanuvchi haqidagi ma'lumotlar (ID, vaqt, ruxsatlar) saqlanadi.
// Signature: Tokenni tekshirish va haqiqiyligini tasdiqlash uchun server tomonidan imzolanadi.
// OAuth 2.0 Tokens:
// OAuth tizimida tokenlar, masalan, access tokenlar va refresh tokenlar, foydalanuvchi autentifikatsiyasidan 
// keyin biror ilovaga ruxsat berish uchun ishlatiladi.

// Access Token: Foydalanuvchi yoki ilovaga xizmatga kirish huquqini beradi.
// Refresh Token: Access tokenning muddati tugagach, yangi access token olish uchun ishlatiladi.
// 3. Kriptografik Tokenlar:
// Kriptovalyutalarda tokenlar aktivlar yoki qiymatlarni ifodalovchi bir birlik sifatida ishlatiladi. 
// Masalan, Bitcoin, Ethereum, va boshqa blokcheyn asosidagi tarmoq tokenlari.

// Xulosa:
// Tokenlar turli sohalarda har xil ma'noga ega bo'lsa-da, dasturlash va xavfsizlikda ular tizimdagi 
// ma'lumotlar yoki foydalanuvchi haqidagi ma'lumotlarni uzatishda muhim rol o'ynaydi. Dasturlashda 
// ular sintaksisni tahlil qilishda ishlatiladi, xavfsizlikda esa autentifikatsiya va ruxsatlarni 
// boshqarishda yordam beradi.