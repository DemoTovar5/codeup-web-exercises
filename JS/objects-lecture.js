/*** OBJECTS LECTURE ***/

// var losSpurs = new Object();
//
// console.log(losSpurs)

// var aboutMe = new Object();
//
// console.log(aboutMe);
//
// var thisIsMe = {
//     Name: "Demo",
//     Height: "5'9'",
//     FavoriteSport: "Football",
// };
//
// thisIsMe.siblings = 3;
// thisIsMe.age = 27;
// thisIsMe.FavoriteTeam = "Cowboys";
//
// thisIsMe["LastName"] = "Tovar";
// thisIsMe["Pets"] = "River";
// thisIsMe["FavoriteFood"] = "Italian";
//
// console.log(thisIsMe);

// console.log(typeof thisIsMe);
//
// Example:
//
// var theSpurs = {
//     city: "San Antonio",
//     coach: "Greg P.",
//     colors: "black and silver ",
// };

// what is a custom object??

// ANY OBJECT THAT YOU CREATE, BECAUSE OBJECT IS ALREADY A BUILT IN FUNCTION.

// using dot notation (losSpurs)
// var losSpurs = new Object();
// console.log(losSpurs);

// nameofObject.nameOfProperty = value
// losSpurs.coach = "Gregg";
// losSpurs.mascot = "coyote";
// console.log(losSpurs);

// // bracket notation

// var daMavs = {};
//
// // brackets and quotes
//
// daMavs["city"] = "Dallas";
// daMavs["wins"] = 1;
// console.log(daMavs)

// TODO: create an empty 'yourFaveSportsTeam' object using object literals
// TODO: let's add a 'city', 'coach', and 'sport' property to our 'team' object using dot
// TODO: let's add 'numOfPlayers', 'numOfChampsWon', and 'isBestTeam' properties to our same 'teams' object using bracket notation
// TODO: write a function that returns the sport and numOfPlayers from your 'team' object

// var MyFaveSportsTeam = {}
//
//     MyFaveSportsTeam.city = "Dallas";
//    MyFaveSportsTeam.coach = "Mike McCarthy";
//    MyFaveSportsTeam.sport = "Football";
//
// MyFaveSportsTeam["numOfPlayers"] = 53;
// MyFaveSportsTeam["numOfChampsWon"] = 5;
// MyFaveSportsTeam["isBestTeam"] = "Cowboys";
//


// NESTED VALUES

// var theSpurs = {
//     city: "SA",
//     coach: "Gregg",
//     wins: 5,
//     players: ["one", "two", "Three", "Four"],
//
//     playerInfo: [
//         {
//             name: "Tim",
//             age: 40,
//             mvp: 3,
//         },
//         {
//             name: "manu",
//             age: 38,
//             mvp: 6,
//         },
//     ]
// }
//
// console.log(theSpurs.playerInfo[0].age);

// Assigning Functionality

// var laptop = {
//     color: 'grey',
//     make: 'mac',
//     size: 13,
//
//     shutDown: function (){
//         return "Laptop is shutting down";
//     }
// }

// console.log(laptop.shutDown());
//
// laptop.turnOn = function turnOn () {
//     return "laptop is now starting";
// }
//
// console.log(laptop.turnOn());
// console.log(laptop);

// // THIS keyword

// var laptop = {
//     color: 'grey',
//     make: 'mac',
//     size: 13,
//     whatSize: function(){
//     return `A laptop is ${this.size} inches wide`;
//
//     }
// }
//
// console.log(laptop.whatSize());

// THIS === self-aware Object

var theSpurs = {
    city: "SA",
    coach: 'gregg',
    wins: 5,
    players: ["one", "two", "tim duncan", "manu", "david robinson"],
    playerInfo: [
        {
            name: "Tim",
            age: 40,
            mvp: 3
        },
        {
            name: "manu",
            age: 38,
            mvp: 6
        }
    ],
    otherNBATeams: {
        Jazz: {
            city: "Salt Lake City",
            mascot: "Jazz Bear",
            champsWon: 0
        },
        Mavs: {
            city: "Dallas",
            mascot: "MavsMan & Champ",
            champsWon: 1
        },
        Pistons: {
            city: "Detroit",
            mascot: "Hooper the Horse",
            champsWon: 3
        }
    }
};

theSpurs.playerInfo[1].name = "Ginobili";

console.log(theSpurs.playerInfo[1].name)
console.log(theSpurs.otherNBATeams.Mavs.mascot);
console.log(theSpurs.otherNBATeams.Jazz.mascot);
console.log(theSpurs.otherNBATeams.Pistons.mascot);

console.log(theSpurs.players[2])

// console.log(theSpurs.otherNBATeams.Mavs);
// console.log(theSpurs.playerInfo[0].age);
// console.log(theSpurs);
// TODO: using above nested object, log the mascot of the "otherNBATeams", change "manu's" name
//  from "manu" to "Ginobli", print out the 3rd element in the 'players' array, add another
//  'otherNBATeam' team object.