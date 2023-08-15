const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name); //  John
console.log(jsonObject.age);  //  30
console.log(jsonObject.city); // New York

///////////////////////////////////////

const person = {
    name: "Jane",
    age: 25,
    city: "Los Angeles"
};

const jsonString = JSON.stringify(person);
console.log(jsonString); // Выводит: {"name":"Jane","age":25,"city":"Los Angeles"}

///////////////////////////////////////

const jsonArrayString = '[{"name": "Alice", "age": 28}, {"name": "Bob", "age": 32}]';
const jsonArray = JSON.parse(jsonArrayString);

console.log(jsonArray[0].name); //  Alice
console.log(jsonArray[1].age);  //  32

////////////////////////////////////////////////////////

const nestedJsonString = '{"person": {"name": "Tom", "age": 22}, "hobbies": ["Reading", "Music"]}';
const nestedJsonObject = JSON.parse(nestedJsonString);

console.log(nestedJsonObject.person.name);    //  Tom
console.log(nestedJsonObject.hobbies[0]);     //  Reading

///////////////////////////////////////////////////////

const invalidJsonString = '{name: "Invalid JSON"}';
try {
    const invalidJsonObject = JSON.parse(invalidJsonString);
} catch (error) {
    console.error('Error parsing JSON:', error);
}


