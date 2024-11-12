/**
 * 
 * 
 * Task-4:
    Count the number of properties.

    Input:
    let student = {
        name: 'Ariana Grande',
        age: 21,
        city: 'Gaibandha',
        isStudent: true
    };


    Output: 4

 */


// Solution:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const property = Object.keys(student);

const propertyNumbers = property.length;
console.log(propertyNumbers);