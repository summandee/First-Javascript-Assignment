//41.	Magicians:
  // Make a array of magician’s names.
    // Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


    //********** function called show_magicians()***********//

    function show_magician(magician) {
        console.log(" The Name_List of  magician  \n")
        for (let i = 0; i < magician.length; i++) {
            console.log(magician[i] + "\n")
        }
    }
    
    //****** magician in the array.********//
    magician = ["JAY MARSHALL", "MAX MAVEN", "CAMPBELL McRAE"];

    //******prints the name of each magician in the array.********//
    show_magician(magician);