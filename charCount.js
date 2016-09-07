function countLetters(string) {
    var countObject = {};
    var spaceless = string.replace(/\s/g, "").split("")
    var objectLength //number of unique letters
    var uniqueArray = [];
    var countArray = [];
    var uniqueCount = 0;
    // this loop creates the array of unique letters
    for (var i = 0; i <= spaceless.length - 1; i++) {
        var indexInArray = uniqueArray.indexOf(spaceless[i]);
        if (indexInArray === -1) { // if not found in unique array
            uniqueArray.push(spaceless[i])
            countArray.push(1)
            uniqueCount++;
        } else {
            var currentCount = countArray[uniqueArray.indexOf(spaceless[i])] + 1
            countArray.splice(uniqueArray.indexOf(spaceless[i]), 1, currentCount)
        } // end of if - else statement
        // console.log("uniqueCount: " + uniqueCount)
        // console.log("uniqueArray: " + uniqueArray)
        // console.log("countArray: " + countArray)
        // console.log("-----------------------------")
    } // end of counting loop

    for (var x = 0; x <= uniqueCount - 1; x++) {

        countObject[uniqueArray[x]] = countArray[x];

    }


    console.log(countObject)
    return countObject;
}

countLetters("lighthouse in the house");
