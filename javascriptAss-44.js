//  44.	Sandwiches:
  // Write a function that accepts a array of items a person wants on a sandwich. 
    //The function should have one parameter that collects as many items as the function call provides,
      //  and it should print a summary of the sandwich that is being ordered. 
         //  Call the function three times, using a different number of arguments each time.


         function make_sandwich(... sandwich) {

           console.log("I will make a prefect sandwich for  you  , Plz Place Your Order   \n");
          console.log("Make a sandwich with the given items \n");
          for (let i = 0; i <  sandwich.length; i++) {
              console.log("Add "  +   sandwich[i] + " to the  sandwish  \n");
          }
          console.log(" Sir!  Your Favourit sandwish is ready!  \n");
      }
      make_sandwich("Roast Chicken ", "Cheese") 
      make_sandwich("Seafood ", "Grilled Kabab");
      make_sandwich("Roast Beef ", "Grilled Chicken");
