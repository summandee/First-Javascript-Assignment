//  18.	Seeing the World: Think of at least five places in the world you’d like to visit.
//  • Store the locations in a array. Make sure the array is not in alphabetical order.
//  1• Print your array in its original order.
//  2• Print your array in alphabetical order without modifying the actual list.
//  3• Show that your array is still in its original order by printing it.
//  4• Print your array in reverse alphabetical order without changing the order of the original list.
//  5• Show that your array is still in its original order by printing it again.
//  6• Reverse the order of your list. Print the array to show that its order has changed.
//  7• Reverse the order of your list again. Print the list to show it’s back to its original order.
//  8• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// 9 • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


// Array
let places  = ["Turkey", "Iran", "SaudiArabia",  "Germany", "United States", "Afganistan"];
let new_array =[...places]
//  1 • Print your array in its original order.
             console.log(places);
 //  2 • Print your array in alphabetical order without modifying the actual list.
             console.log(places.sort());
 //  3 • Show that your array is still in its original order by printing it.
             console.log(new_array)
//  4 • Print your array in reverse alphabetical order without changing the order of the original list.
            var value2 = places.reverse(); 
                 console.log(value2);
//  5 • Show that your array is still in its original order by printing it again.
                  console.log(new_array)
//  6 • Reverse the order of your list. Print the array to show that its order has changed.
                  console.log(value2.reverse());
//  7 • Reverse the order of your list again. Print the list to show it’s back to its original order.
                      console.log(value2.reverse());

//  8 • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// 9 • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

