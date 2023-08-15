// Parvathy
// There will be a dropdown with zipcodes 
  // provide list of zipcodes
    // Denver, CU Boulder, Colo Springs, Morrison 
  // submit button next to dropdown
    // event listener on submit button
    // grab input from dropdown and store into variable

// Lizzie
// header 
  //name of the app; logo

// Evan
// history of zipcodes saved
 //list of previously used zipcodes  
    // when page loads use LS get item
    // loop through and render zipcodes onto page using li's
 // stretch goal; turn into buttons

 // Get references to HTML elements 
 const cityDropdown = document.getElementById('cityDropDown');
 const zipcodeList = document.getElementById('zipDropDown');
 const submitButton = document.getElementById('submitzip')

 const savedZipCodes = JSON.parse(localStorage.getItem('zipCodes')) || [];

// Display previously selected zip codes
function displayPreviousZipCodes() {
  // zipcodeSelect.innerHTML = '';
  savedZipCodes.forEach(zipcode => {
    const li = document.createElement('li');
    li.textContent = zipcode;
    zipcodeList.appendChild(li);  
  });
}

// When the page loads
function onLoad() {
  alert("ooooooooooooooooooo")
  displayPreviousZipCodes();
}

// displaying previous zipcodes selected 
displayPreviousZipCodes();



// Brandan
// after selecting a zipcode and clicking submit they'll be shown list of results
//  store zipcode into local storage
//     want to use LS set item to store zipcode into local storage
//  results to be rendered on cards
//     use fetch call using the zipcode to ticketmaster API
//     weather API will use zipcode to display weather for event date
//     each card will have image of event,artist,date,time,cost-range,genre,venue
//  back button 

const cityArray = ["Denver","Boulder", "Colorado Springs","Morrison"]
const denverZipArray = ["80204","80205","80202"]
const boulderZipArray = ["80302","80301"]
const coloSpringZipArray = ["80829","80922","80909"]
const morrisonZipArray = ["80465"]
var cityDropDown
var zipDropDown
function onload(){
  cityDropDown = document.getElementById("cityDropDwn")
  zipDropDown = document.getElementById("zipDropDwn")

  //we need to get the page completely loaded so that we get the element bY ID

  // var option2 = document.createElement("option");
  // option2.text = "kottayam";
  // cityDropDown.add(option2);

  for (var cityIndex=0; cityIndex<cityArray.length;cityIndex++){
    var option1 = document.createElement("option");
    option1.text = cityArray[cityIndex]
    cityDropDown.add(option1);


  }
}
function onSelectCity(){
  let cityName = cityDropDown.options[cityDropDown.selectedIndex].text;
  var zipArray;
  if(cityName=="Denver"){
    zipArray = denverZipArray
  }else if (cityName == "Boulder"){
    zipArray = boulderZipArray
  } else if (cityName == "ColorColo"){
    zipArray=coloSpringZipArray
    
  }
  
  zipDropDown.innerHTML='';


  for (var zipIndex=0; zipIndex<zipArray.length;zipIndex++){
    var option1 = document.createElement("option");
    option1.text = zipArray[zipIndex]
    zipDropDown.add(option1);
  }

}
function onSubmitZip(){
  let zipSeleccted = zipDropDown.options[zipDropDown.selectedIndex].text;
  alert(zipSeleccted)
  getEventsForZipCode(zipSeleccted)
}


async function getEventsForZipCode( zipCode) {
  const response = await fetch("https://app.ticketmaster.com/discovery/v2/events.json?postalCode+"+
  zipCode+"&apikey=RgDfJk0XjgYWckpaANHr8erWBMxmdx0t&radius=50&unit=miles")
 //This API fetches events in 50 miles radius of the zip code.  Is that big radius required ?
  const eventsJson = await response.json();
  console.log("events list: - ")
  console.log(eventsJson);

  console.log(eventsJson._embedded.events[1].name )
  createEventsTable(eventsJson)
}

function createEventsTable(eventsJson){
  eventsTable = document.getElementById("eventsTable")
  eventsJson._embedded.events.forEach((localEvent,index)=>{
    let innerHtmlStr;
    innerHtmlStr="<tr><td> "+localEvent.name+"</td><td>"+
                 localEvent.dates.start.localDate+" "+localEvent.dates.start.localTime+"</td><td>"+
                 localEvent._embedded.venues[0].name+"</td> <td>"
                //  <img src="+
                //  localEvent.images[0].url+"/>
                + "</tr>"
    eventsTable.innerHTML =eventsTable.innerHTML+ innerHtmlStr

  })
}

function onZipSelected(){
  var btnSubmit = document.getElementById("submitzip")
  btnSubmit.disabled=false
}



var requestOptions = {
    method: 'GET',
    //redirect: 'follow',
    //mode: 'cors'
  };
  
  // fetch("https://app.ticketmaster.com/discovery/v2/events.json?postalCode=80465&apikey=RgDfJk0XjgYWckpaANHr8erWBMxmdx0t&radius=50&unit=miles", requestOptions)
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.log('error', error));


  //  // Weather ConvolverNode

  //  var myHeaders = new Headers();
  //  myHeaders.append("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");
  //  myHeaders.append("X-RapidAPI-Key", "359cad1366msh63f358d57b233a3p1edbd6jsn942828c15f06");
   
  //  var requestOptions = {
  //    method: 'GET',
  //    headers: myHeaders,
  //    redirect: 'follow'
  //  };
   
  //  fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=Denver&days=3", requestOptions)
  //    .then(response => response.json())
  //    .then(data => console.log(data))
  //    .catch(error => console.log('error', error));
