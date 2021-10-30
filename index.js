// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const validateCred = array => {
  // created empty arrays to not change the original arrays
  let checkDigi = [];
  let multiplyDigi = [];
  let subtractDigi = [];
  let sumArray = [];
  let finalSum = 0;

//loops through the array, removed last item/num from the array in a reversed order and jumps in 2 steps
for (let i = array.length -1; i >= 0; i -= 2) {
  checkDigi.push(array[i]);
}
// nested loop, started on the second last to loop through with muliplying/subtracting and jumps in 2 steps from behind
for (let j = array.length -2; j >= 0; j -=2) {
  multiplyDigi.push(array[j] * 2);
}

//loops through multiplyDigi array, because its in the same task to multiply and to subtract
for (let k of multiplyDigi) {
  if (k > 9) {
    subtractDigi.push(k - 9);
  }
}
//its in the same array, because its looking for x number to return, when its less than 9 in the same task.
let _multiplyDigi = multiplyDigi.filter(function(x) {
  return x < 9;
})
//combining subtract and multiply array together and after that combining the both with checkDigi to a whole sum of array
let sumOfMultiplyAndSubtractDigi = subtractDigi.concat(_multiplyDigi);
sumArray = checkDigi.concat(sumOfMultiplyAndSubtractDigi);
//adding the final sum together
for (let l of sumArray) {
  finalSum += l;
}
// checks the credit card number if the result is 0 and returns valid and if its not zero than its invalid
if (finalSum % 10 === 0) {
  return 'Credit card is valid.';
} else {
  return 'Credit card is invalid.';
}
};

// creates a new array with invalid card numbers and returns it
const findInvalidCards = (cardNo) => {
  let invalidCardNo = [];
  for (let i of cardNo) {
    if (validateCred(i) === 'Credit card is invalid.') {
      invalidCardNo.push(i);
    }
  }
  return invalidCardNo;
};

//console.log(findInvalidCards(batch))

// the same that we applied with findInvalid, we will apply with idInvalidCardcompanies, we created an empty array. We loop through invalidCards and check if the first digit in the index is the same as the table show Company and if it is, we will push it to the empty array, after that we check if the element already exists.
const idInvalidCardCompanies = invalidCompanyArray => {
  let invalidCards = findInvalidCards(invalidCompanyArray);
  let invalidCardCompany = [];

  for (let i of invalidCards) {
    if (i[0] === 3) {
      invalidCardCompany.push('Amex (American Express)');
    } else if (i[0] === 4) {
      invalidCardCompany.push('Visa');
    } else if (i[0] === 5) {
      invalidCardCompany.push('Mastercard');
    } else if (i[0] === 6) {
      invalidCardCompany.push('Discover');
    } else {
      invalidCardCompany.push('Company not found');
    }
  } 

  let checkExisting = invalidCardCompany.filter((x, index) => {
    return invalidCardCompany.indexOf(x) === index;
  })
return console.log(checkExisting.sort());


};


validateCred(batch);
findInvalidCards(batch);
idInvalidCardCompanies(batch);