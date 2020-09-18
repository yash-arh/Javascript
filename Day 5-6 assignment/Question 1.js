let Person = [
    {
      name: "Yash",
      age: 23,
      city: "Karnataka",
      salary: 23000,
    },
    {
      name: "Deepa",
      age: 20,
      city: "Karnataka",
      salary: 28000,
    },
    {
      name: "SpiderMan",
      age: 78,
      city: "Hydrabad",
      salary: 32000,
    },
    {
        name: "Aliya",
        age: 33,
        city: "Mumbai",
        salary: 42000,
      },
      {
        name: "Iyla",
        age: 22,
        city: "Chennai",
        salary: 20000,
      },
      {
        name: "Serna",
        age: 56,
        city: "Banglore",
        salary: 28000,
      },
  ];
  
  // To make a Viewrecord function dynamic, we are passing Firstarray  to Viewrecord fn
  // So that we can pass respective array to Viewrecord function
  function Viewrecord(Firstarray) {
    let tabledata = "";
    let srno="1";
    Firstarray.forEach(function (record) {
      let currentrow = `<tr>
      <td>${srno}</td>
      <td>${record.name}</td>
      <td>${record.age}</td>
      <td>${record.city}</td>
      <td>${record.salary}</td>
      <td><button onclick='DeleteRecord(${srno})'>delete</button></td>
      </tr>`;
      tabledata += currentrow;
      srno++;
    });
   document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
  }
    Viewrecord(Person);  // So that we can pass the respective array

  // Search by name
  function searchbyname(){
      let searchName = document.getElementById('search').value;
      let newdata = Person.filter(function (record) {
        return (
            record.name.toUpperCase().indexOf(searchName.toUpperCase()) != -1
        );
          });
          Viewrecord(newdata);
        }
//  Search by city
    function searchbycity(){
            let searchCity = document.getElementById('searching').value;
            let newcity = Person.filter(function (record) {
              return (
                  record.city.toUpperCase().indexOf(searchCity.toUpperCase()) != -1
              );
                });
                Viewrecord(newcity);
        }
        
    // Delete the record
        function DeleteRecord(srno){
            Person.splice(srno,1)
        Viewrecord(Person);
    }
  

  
       
  