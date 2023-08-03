const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  

//   companies.forEach(function(company) {
//   console.log(company.category);
// });

// ages.forEach(function(age){
//     console.log(age)
// } )
// console.log(companies.length)




/****************
 *   filter through an array
 *************************/
// let canDrink = [];

// for (let i = 0; i < ages.length; i++) {

//   if (ages[i] > 21) { //if true enter block
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink)

//or ES6
// const elementary = ages.filter(age => age > 5);

// // const elementary = ages.filter(/function(v){ v > 21 })
// console.log(elementary);



// function getUser(name, school){
//     //code here
// }
// //arrow function
// const getUsers = (name, school) => {
//     //code here
// }

//filter company with category = "Retail"
// const RetailCompanies = companies.filter(company => company.category === "Auto");

// console.log(RetailCompanies)


//filter company with category =  start > 1979 and < 1990
// const eightiesCompany = companies.filter(company => company.start > 1979 && company.start < 1990);
//  console.log(eightiesCompany);



//map

//map company to array of names with start and end years
const companyNames = companies.map(company => {
    return [company.name, company.start, company.end];
  })
//   console.log(companyNames);
  
  //map ages to array of squareroots
  const agesSquared = ages.map(old => {
    // return Math.sqrt(age);
    return old * 4;
  })

//console.log(agesSquared);
  

//sorting

// sort company by start year
const sortedCompany = companies.sort((a, b) => {
    return a.start - b.start;
  })
//    console.log(sortedCompany);
  
  //sort ages by age
  const sortedAges = ages.sort((a, b) => {
    return a - b;
  })
//   console.log(sortedAges);
  




  //reduce age sum
const sum = ages.reduce((a, b) => {
    return a + b;
  })
  //  console.log(sum);
  
  //reduce total years for all comapnies
  const totalYears = companies.reduce((total, company)  => 
     total + ( company.end - company.start), 0);
  
  
  // const sumCompany = companies.reduce((a  , b) => {
  //   return a.start + b.end;
  // })
  
    //  console.log(totalYears);

    //  const temperature = [
    //   33, 12, 16, 5, 25, 64, 32,
    //   {name : "temp", patientId: 4, clinic: "Nyaho"},
    //   {name : "temp", patientId: 5, clinic: "Trinity"},

    //  ];

    //  const clinic = temperature[8].filter(pt => pt.patientId == 4)
    //                 .map(patient.clinic)
    //       console.log(clinic)


    