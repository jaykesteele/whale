var input =  "The  cat chased the fluttering butterfly through the lush garden.";
var vowels = ["a", "e", "i", "o","u"];
var resultArray = [];

for (let i = 0; i < input.length; i++) {
    const letter = input[i];

    for (let j = 0; j < vowels.length; j++) {
        const vowel = vowels[j];
        
        if (letter === vowel){
            resultArray.push(letter) ; 
        if (letter === "e" ){
resultArray.push (letter);


        }
        if (letter === "U" ){
            resultArray.push (letter);
        
        
        
        
        
                }
    }

    
}
}

var resultString = resultArray.join('').toUpperCase();

console.log( resultString);
