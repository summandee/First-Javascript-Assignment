//15.	Changing Guest List: 
// You just heard that one of your guests can’t make the dinner, 
//  so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.


//• Start with your program from Exercise 14. 
//• Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

let guest_names = ["Neha" , "Kanwal" , "Dani" ];

guest_names.pop();
guest_names.push("Sheeza");
console.log(guest_names);
//Output : ['Neha', 'Kanwal', 'Sheeza']

let printMsg_names1= guest_names[0] + " plz come to  home for dinner";
//Output : Neha plz come to  home for dinner
let printMsg_names2= guest_names[1] + " plz come to  home for dinner";
//Output : Kanwal plz come to  home for dinner
let printMsg_names3= guest_names[2] + " plz come to  home for dinner";
//Output : Sheeza plz come to  home for dinner

// add new_name in the list:
        console.log(printMsg_names1);
        console.log(printMsg_names2);
        console.log(printMsg_names3);
        console.log(" Oh!   Dani can't come for dinner");
        //Output :  Oh!   Dani can't come for dinner






