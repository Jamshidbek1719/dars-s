// o'zgaruvchni 3 hil yo'l bilan chaqirish mumkun;
// let, (var), const : let number = 23, var name = "Jamshid"; , const FamilyName = "Qodirov";
// let ishlatsak qiymatni o'zgartira olamiz. const esa o'zgarmas nomlovchi
// console.log("nimadir"); chaqiruvchi
// var hozirgi kunda ishlatilmedi masalan 15 qatorda o'zgaruvchi yozib 14 qatorda chaqirsek xato deb chiqmedi
// "use strict"; - qat'iy rejim orqali xato yozsak xatoyimizni ko'rib olamiz
// "use strict";
// let number = 10;
// console.log(number);

// // Data type Number - ma'lumotlar turlari

//primitive - boolean, NUll, Undefined, string, Symbol, bigint
//object - Array, object, function, RegEx, Date

//================================================================
//Number
// let number = 5.6; // besh butun o'ndan olti
// console.log(8 / 0); //infinity matematikada yo'q narsa
// console.log(-8 / 0); //-infinity matematikada yo'q narsa
// console.log("Jamshid" * 0); //ikki hil malumot turini ko'paytrsa NuN

// // =================================================

// //String
//  const userName = "Jamshid";
//  const familyName = "Qodirov";

// console.log(userName);

// // ===================================================================================

// //boolean (qanaqadur ma'lumotni ha yoki yo'q diyish uchun ishlatiladi)

// const ismaried = false;
// const isCircle = true;
// console.log(ismaried);
// console.log(Circle);
// // ===================================================================================

// //Null yo'q o'zgaruvchini ishlatsek null qaytaradi)
// console.log(clientage); //defined
// console.log(lname); qachonki yo'q o'zgaruvchini ishlatsek defined qaytaradi
// // ===================================================================================

// //undifined (o'zgarvchi bor ammo qiymati yo'q malumotni chaqirganda)

// let und;
// console.log(und);

// let age;
// console.log(age);undifined (o'zgarvchi bor ammo qiymati yo'q malumotni chaqirganda undifined chiqadi)

// ===================================================================================

//object (qanaqadur narsani ta'riflab berish. hohlagan ma'lumot tu'rini ishlatsak bo'ladi, bitta o'zgaruvchi orqali boshqa malumot turlarini ham chaqira olamiz)

// const thief = {
//   age: 30,
//   isjacked: "Black",
//   isLong: false,
// };
// console.log(thief.age); aynan kerakli ma'lumot turini chaqirmoqchi bo'lsek shunday yo'l tutamiz

// =================================================
//array
//=================  0       1     2   3   4
// const colors = ["red", "black", 30, [], {}]; massiv har doim 0 dan boshlanadi
// console.log(colors[2]);
