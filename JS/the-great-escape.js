"use strict";

function getKindOfDog(){
   return prompt("What kind of dog is it?");
}

function getContactInfo(){
    return prompt("How Do I contact you when I find the dog?");
}


function getDogName(){
    return prompt("What is your dog's name?")
}


function playTheGreatEscape(){
  var dogKind = getKindOfDog();
  var dogName = getDogName();
  var contactInfo =  getContactInfo();

  alert("Time to search for this pupper!");
  alert("I see a pup!");


  var kindOfDogSeen = getKindOfDog();

  var isTheLostDog = (kindOfDogSeen === dogKind) && confirm ("Does dog respond to the name: " + dogName);



  if (isTheLostDog) {
      alert ( "Puts leash on " + dogName)
      alert ("Calling: " + contactInfo)
      alert ("Returning pupper to their owner!!")
  }
}

playTheGreatEscape();

