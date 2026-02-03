// function createCharacters () {
//     const characters = [
//       { name: "Mario", level: 5, health: 300 },
//       { name: "Luigi", level: 5, health: 200 },
//       { name: "Peach", level: 5, health: 600 },
//       { name: "Yoshi", level: 5, health: 700 },
//       { name: "Hai", level: 5, health: 800 }
//     ];

//     const charactersPowerUp = characters.map(character => ({
//         name: character.name.toUpperCase(),
//         level: character.level * 2,
//         health: character.health * 3
//     }));

//     const possibleWinner = charactersPowerUp.filter(character => character.health > 1000);
//     console.log(possibleWinner);
// }
// createCharacters();

// function printLeaderboard () {
//     const players = [
//         {name: "Mario", score: 1000},
//         {name: "Luigi", score: 9000},
//         {name: "Peach", score: 8000},
//         {name: "Hai", score: 5000}
//     ];
//     players.sort((a, b) => b.score - a.score);
//     console.log(players)
//     for (let i = 0; i < players.length; i++) {
//         let medal = "";
//         if (i === 0) {
//             medal === "🥇";
//         } else if (i === 1) {
//             medal === "🥈";
//         } else if (i === 2) {
//             medal === "🥉";
//         }
//         console.log(`${medal} ${i + 1}. ${players[i].name} - ${players[i].score} pts`)
//     }

// }
// printLeaderboard();
// console.log("\nemoji cua em bi ko in ra dc 🥇");

// const numbers= [];
// for (let i = 1; i <= 100; i++) {
//     numbers.push(i);
// }
// console.log(numbers);

// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < i; j++) {
//         if ((numbers[i] + numbers[j]) % 17 === 0) {
//             console.log(`Cặp ${numbers[i]} va ${numbers[j]}`);
//             count++;
//         }
//     }
// }
// console.log(`Tổng số cặp: ${count}`);

// const fruits = ["apple", "banana", "cherry"];

// // Sử dụng hàm ẩn danh (function)
// fruits.forEach(function (fruit, index, array1) {
//   console.log(`Index ${index}: ${fruit}`, array1);
// });

function groupAnagrams(strs) {
  const groups = {}; // key: sorted string, value: array of original strings

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];

    // sort ký tự trong word
    const key = word.split("").sort().join("");

    // nếu chưa có key thì tạo mảng mới
    if (!groups[key]) {
      groups[key] = [];
    }

    // thêm word vào nhóm
    groups[key].push(word);
  }

  // chuyển object -> array kết quả
//   const result = [];
//   for (let key in groups) {
//     result.push(groups[key]);
//   }

//   return result;
}

const strs = ["act","pots","tops","cat","stop","hat"];
console.log(groupAnagrams(strs));

const object = {name, tuoi};
console.log(object)