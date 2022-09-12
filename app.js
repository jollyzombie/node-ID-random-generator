const fs = require('fs');

const genders = ['Male', 'Female'];
const maleNames = [
  'Luke',
  'Obi Wan',
  'Anakin',
  'Yoda',
  'Grogu',
  'Bobba',
  'Han',
  'Ben',
  'Henry',
  'Palpatine',
];
const femaleNames = [
  'Leia',
  'Rey',
  'Ahsoka',
  'Padme',
  'Jyn',
  'Delva',
  'Barrissa',
  'Mara Jade',
  'Bastila',
  'Yaddle',
  'Traya',
];
const lastNames = ['Skywalker', 'Kenobi', 'Organa', 'Solo', 'Fett'];

const people = [];

function randChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

for (i = 0; i < 20; i++) {
  let obj = {
    gender: '',
    name: '',
    lastName: '',
    age: '',
  };

  const randGender = randChoice(genders);

  if (randGender === 'Male') {
    const nameM = randChoice(maleNames);
    obj.gender = 'Male';
    obj.name = nameM;
  }
  if (randGender === 'Female') {
    const nameF = randChoice(femaleNames);
    obj.gender = 'Female';
    obj.name = nameF;
  }
  obj.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  obj.age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;
  people.push(obj);
}

const peopleJson = JSON.stringify(people);

fs.writeFile('people.json', peopleJson, (err) => {
  if (err) {
    console.log('Something went wrong');
    throw err;
  }
  console.log('The file has been successfully generated! Check people.json');
});