const name = 'nagaraju';

let age = 29;
const hasHobbies = true;

age = 32;

const summarizeUser = (userName, userAge, userHasHobby) =>
{
    return (
        'Name is '+userName+', userAge '+userAge+', and the user has hobbies '+userHasHobby
    );
}

console.log(summarizeUser(name,age,hasHobbies));

const sum = (a,b) => a+b;
console.log(sum(2,3));

const add = (a) => a+1;
console.log(add(4));