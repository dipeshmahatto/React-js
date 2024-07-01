// let email = "dipeshmahatto@gmail.com"
// let password ="12345678"

// if(email === "dipeshmahatto@gmail.com" && password ==="12345678"){
//     console.log("Login Successfully !");
// }else {
//     console.log("Invalid credentials !")
// }

// SEE Grade check
// let grade = 85;
// if (grade >= 90) {
//   console.log("Grade: A+");
// } else if (grade >= 80) {
//   console.log("Grade: A");
// } else if (grade >= 70) {
//   console.log("Grade: B+");
// } else if (grade >= 60) {
//   console.log("Grade: B");
// } else if (grade >= 50) {
//   console.log("Grade: C+");
// } else if (grade >= 40) {
//   console.log("Grade: C");
// }else {
//  console.log("Failed");
// }

// if-else !!!

// let weather = "rainy";
// if (weather === "sunny") {
//   console.log("sunny");
// } else if (weather === "winter") {
//   console.log("winter");
// } else if (weather === "rainy") {
//   console.log("rainy");
// } else if (weather === "cloudy") {
//   console.log("cloudy");
// } else {
//   console.log("Invalid weather");
// }

// switch statement  !!!

// let day = 3;
// switch (day) {
//   case 1:
//     console.log("Sun");
//     break;
//   case 2:
//     console.log("Mon");
//     break;
//   case 3:
//     console.log("Thu");
//     break;
//   case 4:
//     console.log("Wen");
//     break;
//   case 5:
//     console.log("Thur");
//     break;
//   case 6:
//     console.log("Fri");
//     break;
//   case 7:
//     console.log("Staurday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// let date = new Date().getDay();
// // console.log(date);

// switch (date) {
//   case 0:
//     console.log("Sun");
//     break;
//   case 1:
//     console.log("Mon");
//     break;
//   case 2:
//     console.log("Thu");
//     break;
//   case 3:
//     console.log("Wen");
//     break;
//   case 4:
//     console.log("Thur");
//     break;
//   case 5:
//     console.log("Fri");
//     break;
//   case 6:
//     console.log("Staurday");
//     break;
//   default:
//     console.log("Invalid");
// }

// Status !!!
let status = 200;
switch (status) {
  case 201:
    console.log("Created");
    break;

  case 400:
    console.log("Bad request");
    break;

  case 401:
    console.log("UnAuthorized");
    break;

  case 403:
    console.log("ForBidden");
    break;

  case 500:
    console.log("..");
    break;

  case 200:
    console.log("Ok");
    break;

  default:
    console.log("Invalid");
}
