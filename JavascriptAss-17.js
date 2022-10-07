//17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//   and you have space for only two guests.
//   • Start with your program from Exercise 16.
    // Add a new line that prints a message saying that you can invite only two people for dinner.
   //   • Remove guests from your list one at a time until only two names remain in your list.
    //  Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//   • Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



const guest_names = ['Nazia', 'Neha', 'Naheed', 'Rameez', 'Sheema', 'Wahid'];

//   • Remove guests from your list one at a time until only two names remain in your list.
let msg_guest1 = guest_names.pop(); 
console.log( " sorry " +msg_guest1 + " I can't  invite  you  for dinner." );
let msg_guest2 = guest_names.pop(); 
console.log( " sorry " +msg_guest2 + " I can't  invite  you  for dinner." );
let msg_guest3 = guest_names.pop(); 
console.log( " sorry " +msg_guest3 + " I can't  invite  you  for dinner." );
let msg_guest4 = guest_names.pop(); 
console.log( " sorry " +msg_guest4 + " I can't  invite  you  for dinner." );

var New_Array = guest_names.valueOf( ) ;
console.log(New_Array);

//   • Print a message to each of the two people still on your list, letting them know they’re still invited.
let msg = "";
for (let i = 0; i < New_Array.length;  i++) {  
              msg += New_Array[i]  + "   you are still invited  for dinner \n";
          }

console.log(msg);

//• Print New_Array  ======> of the two people still on your list

console.log(New_Array); 

//Remove the last two names from your list, 
New_Array.length = 0;
console.log(New_Array); 

// Output  an Empty Array  ==> [ ]