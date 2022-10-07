//  39.	City Names: Write a function called city_country() that takes in the name of a city and its country. 
      //  The function should return a string formatted like this:
//  "Lahore, Pakistan"
//  Call your function with at least three city-country pairs, and print the value that’s returned.


  //*************City Names Function**************//

function city_country(city, country) {

      return( city  +  country +"\n" );
}
//**********The function should return a string formatted like this: "Lahore, Pakistan"********************//
city = city_country("Lahore  ", " Pakistan");
console.log( city );

//**********Call your function with at least three city-country pairs"********************//
city = city_country("Macca  ", " Saudi Arabia ");
console.log( city );
city = city_country("Bali  ", " Indonesia ");
console.log( city );
city = city_country("maldives  ", " Sri Lanka ");
console.log( city );



