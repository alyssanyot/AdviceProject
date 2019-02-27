let request = new XMLHttpRequest();
let url = "https://api.adviceslip.com/advice";

request.open("GET", url, true);

//Callback function executes when request is successfully completed
request.onload = function() {
  // Begin accessing JSON data here. Data stored in request.response
  let data = JSON.parse(this.response);
  
  let advice = document.getElementById('advice');
  
  if (request.status >= 200 && request.status < 400) {
  //console.log(data["slip"].advice);
    advice.textContent = data["slip"].advice;
  }
};

request.send();
