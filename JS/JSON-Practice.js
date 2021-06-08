// TODO: create a JSON object about your favorite hobby. make sure to include at least one of every data type that can
//  be accepted as values
// {
//     "favoriteHobby": "Gaming",
//     "favoriteGame": "Valorant",
//     "lengthofHobby": "15 years",
// }

// jQuery .ajax() method
// syntax

// $.ajax("url",{
// type: "POST",
//     data: {
//     title:"blah blah blah",
//     article: "blah blah blah blah"
//     }
// })


// url - location to go look for something/ post something.

// LOOK UP GET, POST, DELETE, PUT REQUESTS.

// TODO: using https://jsonplaceholder.typicode.com/ make an ajax request to the comments endpoint and console it.
// TODO: make a POST request to the '/posts' endpoint, make sure to include
//  any data required for that post to be made successfully
// TODO: what status do you get back when making a GET request to: https://jsonplaceholder.typicode.com/cmments

console.log($.ajax("https://jsonplaceholder.typicode.com/"));

console.log($.ajax("https://jsonplaceholder.typicode.com/posts",{
type: "POST",
    data: {
    userId: 1,
    id:1,
        "title":"blah blah blah",
    body: "blah blah blah blah",
    }
}));

console.log($.ajax("https://jsonplaceholder.typicode.com/comments",{
    type: "GET",
}));


// RESPONSES

// SUCCESSFUL

// FAILED

// ALWAYS

