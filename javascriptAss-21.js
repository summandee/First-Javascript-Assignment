//21. They think of something you could store in a JavaScript Object. 
// •  Write a program that creates Objects containing these items.

//1• Object Literals Method (To Create Objects)

let  Students_Data = {
     name: "Faiza",
     age: 20,
     city: "Karachi",
     myFunc : function (){
          console.log(  "Faiza Live In  " + this.city)
     }
}
console.log(1, Students_Data);
Students_Data.myFunc();






