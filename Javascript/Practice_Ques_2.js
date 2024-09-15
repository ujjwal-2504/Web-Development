// Random number between 1 to 6.
// console.log(Math.floor(Math.random() * 6) + 1);

// Q1.
function greaterThan(arr, n) {

  let result = [];

  for(let i = 0; i < arr.length; i++) {

    if(arr[i] > n) 
      result.push(arr[i]);
    
  }

  return result;
}

// Q2.
function uniqueChar(str) {

  let ans = "";

  for(let i = 0; i < str.length; i++) {

    if(ans.indexOf(str[i]) == -1) {
      ans += str[i];
    }
  }

  return ans;
}

// Q3.
function BigName(countries) {
  let large = 0;
  
  for(let i = 0; i < countries.length; i++) {

    if(countries[i].length > countries[large].length){
      large = i;
    }
  }

  return countries[large];
}

// Q4.
function countVowels(str) {

  let count = 0;

  for(let i = 0; i < str.length; i++) {

    if(
      str[i] == 'a'|| str[i] == 'e'|| str[i] == 'i'|| str[i] == 'o'|| str[i] == 'u' ||
      str[i] == 'A'|| str[i] == 'E'|| str[i] == 'I'|| str[i] == 'O'|| str[i] == 'U'
    ) {
      count++;
    }

  }

  return count;

}

// Q5.
function generateRandomNum(a, b) {

  let diff = b - a;

  return Math.floor(Math.random() * diff) + a;
}