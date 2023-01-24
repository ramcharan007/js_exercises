/* 1. Return a string in reverse
 * ex. reverseString('hello') === 'olleh'
 */
function reverseString(str) {
  let text1='';
  for(var i=str.length-1;i>=0;i--){
    text1=text1.concat(str[i]);

  }
  return text1;
}



/* 2. Return true if palindrome and false if not
 * ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
 */
function isPalindrome(str) {
  let temp=reverseString(str);
  if(temp==str){
    return true;
  }
  else{
    return false;
  }
}



/* 3. Return an integer in reverse
 * ex. reverseInt(521) === 125
 */
function reverseInt(num) {
  let temp=num.toString();
  temp=reverseString(temp);
  return parseInt(temp);
}



/* 4. Return a string with the first letter of every word capitalized
 * ex. capitalizeWords('i love javascript') === 'I Love Javascript'
 */
function capitalizeWords(str) {

  const word=str.split(" ");
  for(var i=0;i<word.length;i++){
  word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1);
  
  }
  return word.join(" ");
}



/* 5. Return the character that is most common in a string
 * ex. maxCharacter('javascript') == 'a'
 */
function maxCharacter(str) {
  
const occ_map=new Map();

for(var c of str){
  occ_map.set(c,occ_map.get(c)+1||1);
}
console.log(occ_map)
let max={char:'',occur:-Infinity};
for(const [char,occur] of occ_map){
  if(occur>max.occur){
    max={char,occur};
  }
}
  return max.char;
}



// 6. Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for(var i=0;i<=100;i++){
    if(i%3==0 && i%5==0){
      console.log('FizzBuzz');
    }
    else if(i%3==0){
      console.log('Fizz');
    }
    else if(i%5==0){
      console.log('Buzz');
    }
    else{
      console.log(i);
    }
  }
}



/* 7. Return the longest word of a string
 * ex. longestWord('Hi there, my name is Brad') === 'there,'
 */
function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  var arr=sen.split(" ");
  var long=[]
  var sortedArray=arr.sort((a,b)=>a.length-b.length).reverse();
  var len=sortedArray[0].length;
  var i=0;
  while(sortedArray[i].length==len){
    long.push(sortedArray[i]);
    i++
  }
  if(long.length==1){
    return long[0];
  }
  else{
    return long;
  }

}



/* 8. Split an array into chunked arrays of a specific length
 * ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
 * ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
 */
function chunkArray(arr, len) {
  l=[];
  for(var i=0;i<arr.length;i+=len){
    l.push(arr.slice(i,i+len));
  }
  return l;
}



/* 9. Take an array of arrays and flatten to a single array
 * ex. flattenArray([[1, 2], [3, 4], [5, 6], [7]]) should return [1, 2, 3, 4, 5, 6, 7]
 */
function flattenArray(arrays) {
  return arrays.reduce(function(array,num){
    return array.concat(num);
  });
}



/* 10. Return true if anagram and false if not
 * ex. isAnagram('elbow', 'below') === true
 */
function isAnagram(str1, str2) {
  const arr1=str1.split("").sort();
  let st1=arr1.join("");
  const arr2=str2.split("").sort();
  let st2=arr2.join("");
  if(st1==st2){
    return true;
  }
  else{
    return false;
  }
  
}



/* 11. Change every letter of the string to the one that follows it (circularly), and capitalize the vowels
 * ex. 'hello there' === 'Ifmmp UIfsf'
 */
function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char) {
    if(char === 'z' || char === 'Z') {
      return 'a';
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });
  newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel) {
    return vowel.toUpperCase();
  });
  return newStr;
}



/* 12. Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
 * ex. addAll(2,5,6,7) === 20
 */
function addAll() {
  var sum=0;
for(var i=0;i<arguments.length;i++){
sum+=arguments[i];
}
return sum;
}



/* 13. Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
 * ex. sumAllPrimes(10) == 17
 */
function sumAllPrimes(num) {
  var sum=0;
for(var i=2;i<=num;i++){
  if(checkPrime(i)){
    sum+=i;
  }
}
return sum;
}
function checkPrime(num){
  var c=0;
  for(var i=1;i<=num;i++){
    if(num%i==0){
      c++;
    }
  }
  if(c==2){
    return true;
  }
  else{
    return false
  }
}



/* 14. Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
 * ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
 */
function seekAndDestroy() {
for(var i=1;i<arguments.length;i++){
  var result=arrayRemove(arguments[0],arguments[i]);
}
return result;
}
function arrayRemove(arr,value){
  return arr.filter(function(num){
    return num != value;
  });
}


/* 15. Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
 * ex. sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]) == [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  l=[];
  indices=[];
for(var i=0;i<arr.length;i++){
  if(arr[i]!=-1){
    l.push(arr[i]);
  }
  else{
    indices.push(i);
  }
}
l.sort();
for(let k of indices){
  l.splice(k,0,-1);
}
return l;
}



/* 16. Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
 * ex. missingLetters("abce") == "d"
 * ex. missingLetters("abcdefghjklmno") == "i"
 * ex. missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined
 */
function missingLetters(str) {
  var i='a'.charCodeAt(0);
  for(var k=0;k<str.length;k++){
    if(i==str.charCodeAt(k)){
      i++;
    }
    else{
      break;
    }
  }
if(k<str.length){
  return String.fromCharCode(i);
}

}



/* 17. Take in an array and return an array of the sums of even and odd numbers
 * ex. evenOddSums([50, 60, 60, 45, 71]) == [170, 116]
 */
function evenOddSums(arr) {
  const result=[];
  var oddsum=0;
  var evensum=0;
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
      evensum+=arr[i];
    }
    else{
      oddsum+=arr[i];
    }
  }
  result.push(evensum,oddsum);
  return result;
}


