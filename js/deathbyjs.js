//STEP 1
function alphaString(str){
    let string = str.split('');
    let sOrder = string.sort();
    return sOrder.join('');
  }
  console.log(alphaString("webmaster"));

//STEP 2
function firstLetter(string) {
let first = string.split(' ');  // we need to split the sentence into an array of words since we need to each word individually  
let letters = []; 
  for (let i = 0; i < first.length; i++) {
      letters.push(first[i].charAt(0).toUpperCase()+first[i].slice(1));
  } return letters.join(' ');
}
console.log(firstLetter("the quick brown fox"));
//STEP 3
function counter(text) {
    let check = text.match(/[aeiou]/gi);
    // Check if match exists and then calculate length
    if (check) {    
    // Return number of vowels
        return check.length
    } else {
        return 0
    }
} console.log(counter('The quick brown fox'));
//STEP 4
function randomNumbers(random)
{
let numbers = "";
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(let i=0; i < random; i++ )
{  
numbers += characters.charAt(Math.floor(Math.random() * characters.length));
}
return numbers;
}
    console.log(randomNumbers(8));
//STEP 5
function longestName(cname)
  {
  return cname.reduce(function(long_name, country) 
  {
    return long_name.length > country.length ? long_name : country;
  }, 
"");
}
console.log(longestName(["Australia", "Germany", "United States of America"]));

