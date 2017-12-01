console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement("section");
  middleEarth.setAttribute("id","middle-earth");
  for (var i =0; i<lands.length; ++i){
   var newLands = document.createElement("article");
   var newH1 = document.createElement("h1");
   newH1.innerHTML = lands[i];
   newLands.setAttribute("id",lands[i]);
   newLands.appendChild(newH1);
   middleEarth.appendChild(newLands);
  }
  body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  var myHobbits = document.createElement("ul");
  myHobbits.setAttribute("id", "theHobbits");
  for(var i = 0; i<hobbits.length; ++i){
    var newLI = document.createElement("li");
    newLI.setAttribute("id",hobbits[i]);
    newLI.setAttribute("class","hobbit");
    newLI.innerHTML = hobbits[i];
    myHobbits.appendChild(newLI);
  }
  document.getElementById("The Shire").appendChild(myHobbits);
}
makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var myRing = document.createElement("div");
  myRing.setAttribute("id","the-ring");
  myRing.setAttribute("class","magic-imbued-jewelry");
  myRing.addEventListener("click",function(){nazgulScreech();});
  document.getElementById("Frodo Baggins").appendChild(myRing);
}
keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var myAside = document.createElement("aside");
  myAside.setAttribute("id","buddiesAside");
  var myUL = document.createElement("ul");
  myUL.setAttribute("id","buddiesUL");
  for(var i = 0; i<buddies.length; ++i){
    var myLI = document.createElement("li");
    myLI.setAttribute("id",buddies[i]);
    myLI.innerHTML = buddies[i];
    myUL.appendChild(myLI);
  }
  myAside.appendChild(myUL);
  document.getElementById('Rivendell').appendChild(myAside);
}
makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  document.getElementById("Strider").innerHTML = "Aragorn";
  document.getElementById("Strider").setAttribute("id","Aragorn");
}
beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  document.getElementById("Rivendell").appendChild(document.getElementById("theHobbits"));
}
leaveTheShire();


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  myFellowship = document.createElement("div");
  myFellowship.setAttribute("id","the-fellowship");
  myHobbits = document.getElementById("theHobbits");
  myBuddies = document.getElementById("buddiesUL");
  document.getElementById("Rivendell").appendChild(myFellowship);
  for(var i = myHobbits.childNodes.length-1; i>=0; i--){
    myFellowship.appendChild(myHobbits.childNodes[i]);
    // alert(myFellowship.childNodes[myFellowship.childNodes.length-1].getAttribute("id") + " has joined your party!");
  }
  for(var j = myBuddies.childNodes.length-1; j>=0; j--){
    myFellowship.appendChild(myBuddies.childNodes[j]);
    // alert(myFellowship.childNodes[myFellowship.childNodes.length-1].getAttribute("id") + " has joined your party!");
  }
  console.log(myFellowship);
} 
forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var gandalfLi = document.getElementById('Gandalf the Grey');
  console.log(gandalfLi);
  gandalfLi.innerHTML = "Gandalf the White";
  gandalfLi.style.background = "white";
  gandalfLi.style.border = "grey 4px solid";
}
theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  // alert("The Horn of Gondor has been blown!");
  document.getElementById("Boromir").style.textDecoration = "line-through";
  document.getElementById("the-fellowship").removeChild(document.getElementById("Boromir"));

}
hornOfGondor();


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var babyBilbo = document.getElementById("Frodo Baggins");
  var samuel = document.getElementById("Samwise \'Sam\' Gamgee");
  moredoor = document.getElementById("Mordor");
  moredoor.appendChild(samuel);
  moredoor.appendChild(babyBilbo);
  mtDoom = document.createElement("div");
  mtDoom.setAttribute("id","mount-doom");
  moredoor.appendChild(mtDoom);
}
itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gollum = document.createElement("div");
  document.getElementById("Mordor").appendChild(gollum);
  gollum.setAttribute("id","gollum");
  gollum.appendChild(document.getElementById("the-ring"));
  document.getElementById('mount-doom').appendChild(gollum);

}
weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  document.getElementById('mount-doom').removeChild(document.getElementById('gollum'));
  var myHobbits = document.getElementsByClassName("hobbit");
  for(var i = 0; i<myHobbits.length;++i){
    document.getElementById("The Shire").appendChild(myHobbits[i]);
  }
}
thereAndBackAgain();