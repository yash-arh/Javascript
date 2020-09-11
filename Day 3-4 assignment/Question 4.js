let criminals = [
    {
        name: "yash",
        age: "22",
        country: "India",
        hobbies: ['draw', 'dance', 'kill']
    },
    {
        name: "deeps",
        age: "20",
        country: "India",
        hobbies: ['kill', 'hack', 'fight']
    },
    {
        name: "edward",
        age: "32",
        country: "queens",
        hobbies: ['sing', 'kill', 'write']
    },

     {
        name: "charlie",
        age: "38",
        country: "roswell",
        hobbies: ['kill', 'kill', 'write']
    }
];

function displayAge(criminals) {
    console.log("people with the age less than 30");

    console.log("______________________________________________________________________________");
   criminals.forEach(element => {
      if(element.age<30)
      {
          console.log(element);
      }
       
   });
}
function displayCountry(criminals) {
    console.log("people with country as India");

    console.log("______________________________________________________________________________");
    criminals.forEach(element => {
        if (element.country == "India") {
            console.log(element);
        }

    });
}
displayAge(criminals);
displayCountry(criminals);