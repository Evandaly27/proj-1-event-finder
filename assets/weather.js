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
  .then(result => console.log(result))
  .catch(error => console.log('error', error));