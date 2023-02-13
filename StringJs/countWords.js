countWord=(str)=>{
    var i=0;
    var wordCount =0;
    while(i<str.length)
    {
        if(str[i]=== " " || i===str.length-1){
           wordCount++;
        }
        i++;
    }
    //console.log(wordCount)
    return wordCount;
}
var inputString = "My Name Is Manohar Kumar Singh";
var totalWord = countWord(inputString);
console.log(totalWord);