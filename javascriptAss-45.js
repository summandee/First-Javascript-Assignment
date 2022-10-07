//  45.	Cars: 
  // Write a function that stores information about a car in a Object. 
    //  The function should always receive a manufacturer and a model name.
      //  It should then accept an arbitrary number of keyword arguments. 
        //  Call the function with the required information and two other name-value pairs, 
          //  such as a color or an optional feature. Print the Object that’s returned to make sure
              //   all the information was stored correctly.


     

        function make_car(manufacturer, model, ...options) {
          console.log(" Car Information .");
            car_info = {
                "company" : manufacturer,
                "model" : model,
                "Options" : options
            }
            return car_info;
        }

            let car1 = make_car('Honda Civic', 'Oriel ', color = 'Grey Dark',  features = "1800 cc",  Assembly = "Local");
            console.log(car1)
            let car2 = make_car('Toyota Corolla', 'GLi', color = 'White',  features = "Power Mirrors", BodyType = "Sedan");
            console.log(car2)

