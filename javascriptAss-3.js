//3. Name Cases: 
//Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.

// let personName  = "DANIYAL NAGORI";
// console.log(personName.toLowerCase());


// let personName2  = "daniyal nagori";
// console.log(personName.toUpperCase());

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  console.log(titleCase("daniyal nagori"));

  /////////////////////////////
//   let str = "sHoRt AnD sToUt";
//   let strLowerCase = str.toLowerCase();
//   let wordArr = strLowerCase.split(" ").map(function(currentValue) {
//     return currentValue[0].toUpperCase() + currentValue.substring(1);
// });
// return wordArr.join(" ");

function titleCase(str) {
    let strLowerCase = str.toLowerCase();
    let wordArr = strLowerCase.split(" ").map(function(currentValue) {
        return currentValue[0].toUpperCase() + currentValue.substring(1);
    });

    return wordArr.join(" ");
}


