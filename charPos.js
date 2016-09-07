function countLetters(string) {
    var countObject = {};
    var spaceless = string.replace(/\s/g, "").split("")

    for (var i = 0; i <= spaceless.length - 1; i++) {

        if (countObject[spaceless[i]] === undefined) {
          countObject[spaceless[i]] = [i];
        } else {
          var posArray = [];
          posArray = countObject[spaceless[i]]
          countObject[spaceless[i]].push(i);
        } // end of if - else statement

    } // end of counting loop

    console.log(countObject)
    return countObject;
}

countLetters("lighthouse in the house");
