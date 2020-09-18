window.onload=function(){
let Bus = [
  {
      name: "Cinderila",
      age: 43,
      source: "Chennai",
      destination: "Banglore",
      number: "BAS2244",
      Passenger_capacity: 12,
    },
];
//  Fetching the Objects to store in local
// Check for the object bus whether the local storage is present or not, 
// if no create
if(localStorage.getItem("Bus") == null){
  let stringBus = JSON.stringify(Bus);
  localStorage.setItem("Bus", stringBus);

}
};
  function viewBus(superarray = undefined) {
    let tabledata = "";
    let srno="1";
    if (superarray == undefined) {
      Bus = JSON.parse(localStorage.getItem("Bus"));
    } else {
      Bus = superarray;
    }
  
    //let Bus = JSON.parse(localStorage.getItem("Bus"));
    //let record = JSON.parse(localStorage.getItem("Bus"));
    Bus.forEach(function (record) {
      let currentrow = `<tr>
      <td>${srno}</td>
      <td>${record.name}</td>
      <td>${record.age}</td>
      <td>${record.source}</td>
      <td>${record.destination}</td>
      <td>${record.Bus_Number}</td>
      <td>${record.Passenger}</td>
      </tr>`;
      tabledata += currentrow;
      srno++;
    });
   document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
  }
  viewBus();
// Adding new bus
  function addBus(e) {
    e.preventDefault();
    let newBus = {};
    let name = document.getElementById("upname").value;
    let age = document.getElementById("upage").value;
    let source = document.getElementById("upsource").value;
    let destination = document.getElementById("updest").value;
    let Bus_Number = document.getElementById("upnum").value;
    let Passenger = document.getElementById("uppass").value;
    //console.log(Bus_Number);
    newBus.name = name;
    newBus.age = Number(age);
    newBus.source = source;
    newBus.destination = destination;
    newBus.Bus_Number = Number(Bus_Number);
    newBus.Passenger = Number(Passenger);
    //Bus.push(newBus); // adding data to the form
    //console.log(Bus_Number);
    // Local Storage- JSON.parse-string to object
    let Bus = JSON.parse(localStorage.getItem("Bus"));
    Bus.push(newBus);
    //let stringBus = JSON.stringify(Bus);
    localStorage.setItem("Bus", JSON.stringify(Bus));
    viewBus();
    // Clearing the data from the form
    document.getElementById("upname").value = "";
    document.getElementById("upage").value = "";
    document.getElementById("upsource").value = "";
    document.getElementById("updest").value = "";
    document.getElementById("upnum").value = "";
    document.getElementById("uppass").value  = "";

  }
  // Search by source
  function searchbysource(){
    let searchName = document.getElementById('search').value;
    let Bus = JSON.parse(localStorage.getItem("Bus"));// Fetching the data from local
    let newdata = Bus.filter(function (record) {
      return (
          record.source.toUpperCase().indexOf(searchName.toUpperCase()) != -1
      );
        });
        viewBus(newdata);
      }
  // Search by destination
  function searchbydestination(){
    let searchName = document.getElementById('searching').value;
    let Bus = JSON.parse(localStorage.getItem("Bus"));
    let newdata = Bus.filter(function (record) {
      return (
          record.destination.toUpperCase().indexOf(searchName.toUpperCase()) != -1
      );
        });
        viewBus(newdata);
      }
      