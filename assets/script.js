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

// Brandan
// after selecting a zipcode and clicking submit they'll be shown list of results
 //store zipcode into local storage
    //want to use LS set item to store zipcode into local storage
 //results to be rendered on cards
    // use fetch call using the zipcode to ticketmaster API
    //weather API will use zipcode to display weather for event date
    //each card will have image of event,artist,date,time,cost-range,genre,venue
 // back button 

const cityArray = ["Denver","Boulder", "Colorado Springs","Morrison"]
const denverZipArray = ["80221","280229","3"]
const boulderZipArray = ["94","0924","3984"]
const coloSpringZipArray = ["1894","294","39898","0489","2980"]
const morrisonZipArray = ["1894","294","399830000000000898","0489","2997480","94894"]
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

}
function onZipSelected(){
  var btnSubmit = document.getElementById("submitzip")
  btnSubmit.disabled=false
}



var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://app.ticketmaster.com/discovery/v2/events.json?postalCode=80465&apikey=RgDfJk0XjgYWckpaANHr8erWBMxmdx0t&radius=50&unit=miles", requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('error', error));


   // Weather ConvolverNode

   var myHeaders = new Headers();
   myHeaders.append("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");
   myHeaders.append("X-RapidAPI-Key", "359cad1366msh63f358d57b233a3p1edbd6jsn942828c15f06");
   
   var requestOptions = {
     method: 'GET',
     headers: myHeaders,
     redirect: 'follow'
   };
   
   fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=Denver&days=3", requestOptions)
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.log('error', error));
