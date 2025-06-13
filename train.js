// MITASK

// TASK C:
const moment = require("moment");

class Shop {
  non;
  lagmon;
  cola;

  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  qoldiq() {
    const time = moment().format("HH:mm");
    console.log(
      `Hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud.`
    );
  }

  sotish(nomi, soni) {
    const time = moment().format("HH:mm");
    if (nomi === "non" && this.non >= soni) {
      this.non -= soni;
      console.log(`Hozir ${time}da ${soni}ta non sotildi.`);
    } else if (nomi === "lagmon" && this.lagmon >= soni) {
      this.lagmon -= soni;
      console.log(`Hozir ${time}da ${soni}ta lagmon sotildi.`);
    } else if (nomi === "cola" && this.cola >= soni) {
      this.cola -= soni;
      console.log(`Hozir ${time}da ${soni}ta cola sotildi.`);
    } else {
      console.log(`Hozir ${time}da ${nomi} yetarli emas yoki nomi xato.`);
    }
  }

  qabul(nomi, soni) {
    const time = moment().format("HH:mm");
    if (nomi === "non") {
      this.non += soni;
      console.log(`Hozir ${time}da ${soni}ta non qabul qilindi.`);
    } else if (nomi === "lagmon") {
      this.lagmon += soni;
      console.log(`Hozir ${time}da ${soni}ta lagmon qabul qilindi.`);
    } else if (nomi === "cola") {
      this.cola += soni;
      console.log(`Hozir ${time}da ${soni}ta cola qabul qilindi.`);
    } else {
      console.log(`Hozir ${time}da mahsulot nomi notogri: ${nomi}`);
    }
  }
}

const shop = new Shop(6, 7, 8);

shop.qoldiq();
shop.sotish("lagmon", 3);
shop.qabul("cola", 4);
shop.sotish("non", 3);
shop.sotish("cola", 5);
shop.qoldiq();

// // TASK B:

// function countDigits(string) {
//   let count = 0;
//   for (let char of string) {
//     if (char >= "0" && char <= "9") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countDigits("kjnzxckh734892787kjhhda8789sfgb927987zxxcbjj72384"));

// // TASK A:

// function countLetter(letter, soz) {
//   let count = 0;

//   for (let i = 0; i < soz.length; i++) {
//     if (soz[i] === letter) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countLetter("a", "Jack Ma Maslahatlari"));

// console.log("Jack Ma Maslahatlari");
// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang", //20-30
//   "ozingizga ishlashni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq", // 60
// ];

// // CALLBACK Function:

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log(data);
//   }
// });

// console.log("passed here 1");

// ASYNC FUNCTION:

// // Definition qismda async function ishlatidi
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("Insert a number", null);
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     // return list[5];
//     return new Promise((resolve, reject) => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 1000);
//     });

//     // setTimeout(function () {
//     //   return list[5];
//     // }, 5000);
//   }
// }

// // CALL via then & catch methodlari ishlatidi
// console.log("passed here 0");
// maslahatBering(65)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });

// console.log("passed here 1");

// //CALL via async&await. Call qismda async function ishlatildi. async & await methodlarini orqali qurib oldik
// async function run() {
//   let javob = await maslahatBering(65);
//   console.log("javob:", javob);
//     javob = await maslahatBering(75);
//     console.log("javob:", javob);
//     javob = await maslahatBering(40);
//     console.log("javob:", javob);
// }
// run();
