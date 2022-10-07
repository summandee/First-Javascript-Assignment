//31.	No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//  • If the list is empty, print the message We need to find some users!
//  • Remove all of the user_names from your array, and make sure the correct message is printed.


 let user_names = [ "mohsin" , "admin" , "osama" , "madiha", "nimra"];

let empty_array = user_names.slice(5);
     console.log(empty_array)


if (user_names[0] === false) {
    console.log("Hello, " + user_names[0] + "thank you for loggin in again");
}
 else if (empty_array = true) {
    console.log("We need to find some users!");
}




    
