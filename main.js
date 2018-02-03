/* Global variables */
var textBoxA;
var buttonA;
var textBoxB;
var buttonB;
var textBoxC;
var buttonC;
var database; // firebase database
//var ref; // database reference

/* p5 functions */
function setup(){
  console.log(firebase);

    textBoxA = document.getElementById("textBoxA");
    buttonA = document.getElementById("buttonA");
    textBoxB = document.getElementById("textBoxB");
    buttonB = document.getElementById("buttonB");
    textBoxC = document.getElementById("textBoxC");
    buttonC = document.getElementById("buttonC");

    buttonA.addEventListener("click", buttonA_Clicked);
    buttonB.addEventListener("click", buttonB_Clicked);
    buttonC.addEventListener("click", buttonC_Clicked);



    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyADP3VQlFq81ea5Th0yvYzA0UQ_dQs_EUQ",
    authDomain: "fir-test-8b45b.firebaseapp.com",
    databaseURL: "https://fir-test-8b45b.firebaseio.com",
    projectId: "fir-test-8b45b",
    storageBucket: "",
    messagingSenderId: "715359221818"
  };
  firebase.initializeApp(config);
  database = firebase.database();

  /* Show database */
  var ref = database.ref('data');
  ref.on('value', gotData, errData);
}

function gotData(data){ // event triggered by 'data' on firebase
  var listings = selectAll('.listing');
  console.log(listings);
  for(var i=0; i<listings.length; i++){
    listings[i].remove();
  }

  var scores = data.val();
  var keys = Object.keys(scores);
  for(var i=0; i<keys.length; i++){
    var k = keys[i];
    var a = scores[k].A;
    var b = scores[k].B;
    var c = scores[k].C;
    var li = createElement('li', a + ", " + b + ", " + c);
    li.class('listing');
    li.parent('list');

  }
  textBoxA.innerHTML = scores[keys[keys.length-1]].A;
  textBoxB.innerHTML = scores[keys[keys.length-1]].B;
  textBoxC.innerHTML = scores[keys[keys.length-1]].C;
}
function errData(err){ // event triggered by 'data' on firebase
  console.log("Error!");
  console.log(err);
}

/* onlick events */
function buttonA_Clicked(){
  //localStorage.setItem("a", textBoxA.value);
  //localStorage = textBoxA.value;
  //console.log(localStorage);
  var ref = database.ref('data');
  var data = {
    A: textBoxA.value,
    B: textBoxB.value,
    C: textBoxC.value
  }
  ref.push(data);
}
function buttonB_Clicked(){
  //localStorage.setItem("b", textBoxB.value);
  var ref = database.ref('data');
  var data = {
    A: textBoxA.value,
    B: textBoxB.value,
    C: textBoxC.value
  }
  ref.push(data);
}
function buttonC_Clicked(){
  //localStorage.setItem("c", textBoxC.value);
  var ref = database.ref('data');
  var data = {
    A: textBoxA.value,
    B: textBoxB.value,
    C: textBoxC.value
  }
  ref.push(data);
}
