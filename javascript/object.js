const userDetails = {
    firstName: "Jane",
    lastName: "Daniels",
    userName: "jane.daniels",
    email: "jane.daniels@example.com",
    comapny: "Example Inc.",
    address: "1234 Example Street",
    age : 25,
    hobby: "Singing"
};

let keysArray = Object.keys(userDetails);

// console.log(keysArray);

let filteredUsers = users.filter(user => user.age > 40 && user.occupation === 'programmer');
// console.log(filteredUsers);





let filteredUserNames = users.filter(user => user.age > 40 && user.occupation === 'programmer')
    .sort((a, b) => a.age - b.age)
    .map(user => user.name);

// console.log(filteredUserNames);

const userNames = Object.keys(userDetails)
    .filter((key) => key.includes("Name"))
    .reduce((object, key) => {
        return Object.assign(object, {
          [key]: userDetails[key]
        });
  }, {});

// console.log(userNames);