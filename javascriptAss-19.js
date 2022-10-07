//19.	Dinner Guests:
// • Working with one of the programs from Exercises 14 through 18,
// • print a message indicating the number of people you are inviting to dinner.


//• Start with program from Exercise 15. 
let  guest_names = ["Neha" , "Kanwal" , "Dani" ];

guest_names.pop();
guest_names.push("Sheeza");

console.log(guest_names);
//  Output  : ['Neha', 'Kanwal', 'Sheeza']

let  printMsg_names= guest_names   + " plz come to  home for dinner.";

console.log(printMsg_names);
//Output :   Neha,Kanwal,Sheeza plz come to  home for dinner.
