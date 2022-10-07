// 37.	Large Shirts: 
   //  Modify the make_shirt() function so that shirts are large by default with a message
      //   that reads I love JavaScript. Make a large shirt and a medium shirt with the default message,
          // and a shirt of any size with a different message.


         

   function make_shirt( size = "large" , msg = "I love JavaScript"){
              console.log(size , msg);
      }
            // **********shirts are large by default  message***********//
            make_shirt();

            // **********shirts are small  by default   message***********//
            make_shirt(size = "small");

            // **********shirts are medium  by default    message***********//
            make_shirt(size = "medium" );

            // **********(Any shirt)  shirts are medium   with a  different  message***********//
            make_shirt(size = "medium", msg = "This shirt is comfotable " )


