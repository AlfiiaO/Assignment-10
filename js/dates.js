//STEP 1
 let d = new Date();
 let month = d.getMonth() + 1;
 let year = d.getFullYear();
 let numberOfDays = new Date(year, month, 0).getDate();
 console.log(numberOfDays);
//STEP 2
// let  month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let d = new Date();
// let monthName = month[d.getMonth()];
// console.log(monthName);
//STEP 3
// let d = new Date();
// if(d.getDay() == 6 || d.getDay() == 0) {
//     console.log(d +" is a Weekend");
//     } else {
//      console.log(d +" is not a Weekend");
// }
//STEP 4
// let d = new Date();
// let pastDay = new Date(d);
// pastDay.setDate(d.getDate()-1)
//         console.log('Yesterday was: ' + pastDay);
   
//STEP 5

// let d = new Date();
// let weekDay = d.toString().split(' ')[0].slice(0,1);
//    console.log(weekDay);
