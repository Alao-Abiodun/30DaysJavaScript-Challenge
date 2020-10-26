// Declare an empty array
const emptyArray = [];

// Declare an array with more than 5 number of elements
const numArray = [1, 2, 3, 4, 5];

// Find the length of your array
const lengthOfMyArray = numArray.length;
console.log(lengthOfMyArray);

// Get the first item, the middle item and the last item of the array
const firstItem = numArray.splice(0, 1);
const middleItem = numArray.splice(1, 1);
const lastItem = numArray.splice(2, 2);
console.log(firstItem, middleItem, lastItem);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 'alao', true, 1.5, false, 'abiodun'];
console.log(mixedDataTypes);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const companies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];

// Print the array using console.log()
console.log(companies);

// Print the number of companies in the array
console.log(companies.length);

// Print the first company, middle and last company
const firstCompany = companies.splice(0, 1);
const middleCompany = companies.splice(2, 1);
const lastCompany = companies.splice(4, 1);
console.log(firstCompany, middleCompany, lastCompany);

// Print out each company
const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];
itCompanies.forEach(company => console.log(company));

// Change each company name to uppercase one by one and print them out
itCompanies.forEach(company => console.log(company.toUpperCase()));

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const lastItCompanies = itCompanies.length - 1;
let first5ItCompanies = itCompanies.splice(0, 6).join(', ');
console.log(`${first5ItCompanies} and ${lastItCompanies} are big IT companies`);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const newItCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];

newItCompanies.forEach(company => {
  newItCompanies.indexOf(company) == -1
    ? console.log('company is not found')
    : console.log(`${company} exist.`);
});

// Filter out companies which have more than one 'o' without the filter method
newItCompanies.filter(company => company);

// Sort the array using sort() method
const sortedCompanies = newItCompanies.sort();
console.log(sortedCompanies);

// Reverse the array using reverse() method
const reverseCompanies = newItCompanies.reverse();
console.log(reverseCompanies);

// Slice out the first 3 companies from the array
const first3Companies = newItCompanies.slice(0, 3);
console.log(first3Companies);

// Slice out the last 3 companies from the array
const last3Companies = newItCompanies.slice(4, newItCompanies.length);
console.log(last3Companies);

// Slice out the middle IT company or companies from the array
const middleItCompany = newItCompanies.slice(3, newItCompanies.length - 3);
console.log(middleItCompany);

// Remove the first IT company from the array
const firstItCompany = newItCompanies.splice(0, 1);
console.log(firstItCompany);

// Remove the middle IT company or companies from the array
const middleItCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];

const midItCompany = middleItCompanies.splice(3, 1);
console.log(midItCompany);

// Remove the last IT company from the array
const lastItCompany = middleItCompanies.splice(middleItCompanies.length - 7);
console.log(lastItCompany);

// Remove all IT companies
const allItCompanies = middleItCompanies.splice();
console.log(allItCompanies);
