// 27.	Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
        //  • If the alien is green, print a message that the player earned 5 points.
        //  • If the alien is yellow, print a message that the player earned 10 points.
        //  • If the alien is red, print a message that the player earned 15 points.
        //  • Write three versions of this program, making sure each message is printed for the appropriate color alien.


        var alien_color  = ['green', 'yellow',  'red'];

        //  • 1st  versions of this program:

        if (alien_color [0]=true) {
           console.log("You Just Earned 5 Points!");
        } else if (alien_color[1] =false) {
            console.log("You Just Earned 10 Points!");
        } else {
            console.log("You Just Earned 15 Points!");
        }

        //  • 2nd versions of this program:
        
        if (alien_color [0]=false) {
            console.log("You Just Earned 5 Points!");
         } else if (alien_color[1] =true) {
             console.log("You Just Earned 10 Points!");
         } else {
             console.log("You Just Earned 15 Points!");
         }

       //  • 3rd versions of this program:
        
        if (alien_color [0]=false) {
            console.log("You Just Earned 5 Points!");
         } else if (alien_color[1] =false) {
             console.log("You Just Earned 10 Points!");
         } else  if (alien_color[2] =true){
             console.log("You Just Earned 15 Points!");
         }