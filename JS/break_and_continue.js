do {
    var promptNumber = prompt("Give me an odd number, between 1- 50");

    if (promptNumber % 2 !== 0){
        console.log("Number to skip is: " + promptNumber)
        for (let i = 1; i <= 50; i++) {
        if (i == promptNumber){
            console.log("Yikes! Skipping number: " + i );
        } else {
            console.log("Here is an odd number: " + i );
        }
        }
    break
    } else{
        continue
    }

} while (true);

