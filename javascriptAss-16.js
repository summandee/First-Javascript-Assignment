// 16.	More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
// • Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

// *Adding Elements Anywhere in an Array:
const guest_names = ["Neha", "Rameez", "Sheema"];


// *Adding Elements start in an Array:
        const change_Array1 = guest_names.splice(0, 0, 'Nazia');
        console.log(guest_names.length);

// *Adding Elements  in the middle in an Array:
        const change_Array2 = guest_names.splice(2, 0, 'Naheed');
        console.log(guest_names.length);

// *Adding Elements  at last  in an Array:
        const change_Array3 = guest_names.splice(7, 0, 'Wahid');
        console.log(guest_names.length)
//Edited Array
        console.log(guest_names);

  //New Udated Array
         var New_Array = guest_names.valueOf( ) ;
         console.log(New_Array);

         let msg = "";
            for (let i = 0; i < New_Array.length;  i++) {  
                          msg += New_Array[i]  + " plz come to  home for dinner \n";
                      }
 
          console.log(msg);





