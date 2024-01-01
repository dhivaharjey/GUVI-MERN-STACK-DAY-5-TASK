/////////// DAY 5 TASK ////////////////

//////////////////////-----------practise all for loops-----------/////////////////
let objArr = [
  {
    name: "Krunal",
    age: 12,
  },
  {
    name: "Ankit",
    age: 15,
  },
  {
    name: "Rushabh",
    age: 20,
  },
];
// for (let key in objArr) {
//   console.log(`Key: ${key}`);
// }

// const iterateObj = function (obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       iterateObj(obj[key]);
//     } else {
//       console.log(`${key} : ${obj[key]}`);
//     }
//   }
// };
// iterateObj(objArr);

// console.log(Object.values(objArr));
const obj = [
  {
    id: 1,
    name: "John",
    age: 25,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    contacts: [
      {
        id: 1,
        type: "phone",
        value: "123-456-7890",
      },
      {
        id: 2,
        type: "email",
        value: "john.doe@example.com",
      },
    ],
  },
  {
    id: 2,
    name: "Jane",
    age: 30,
    address: {
      street: "456 Wall St",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
    },
    contacts: [
      {
        id: 1,
        type: "phone",
        value: "234-567-8901",
      },
      {
        id: 2,
        type: "email",
        value: "jane.doe@example.com",
      },
    ],
  },
];
//////////////////////////////////////////////////////////////////////////////////
const flattenObj = (obj) => {
  let result = {};
  for (let i in obj) {
    if (typeof obj[i] == "object" && obj[i] !== null) {
      let temp = flattenObj(obj[i]);
      // console.log(temp);
      for (let j in temp) {
        result[i + "." + j] = temp[j];
      }
    } else {
      result[i] = obj[i];
    }
  }
  return result;
};

const res = flattenObj(obj);
console.log(res);
//////////////////////////////////////////////////////////////////////////////////////////////
const printNestedObject = function (obj) {
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      printNestedObject(obj[key]);
    } else {
      console.log(`${key}: ${obj[key]}`);
    }
  }
};

const resobj = printNestedObject(obj);
console.log(resobj);

console.log(Object.keys(obj));
////////////////////////////////////////////////////////////////////////////////////////
Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});
////////////////////////////////////////////////////////////////////////////////////////////////
Object.values(obj).forEach(function (value) {
  console.log(value);
});
///////////////////////////////////////////////////////////////////////////////////
function printObject(obj) {
  Object.keys(obj).forEach(function (key) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      printObject(obj[key]);
    } else {
      console.log(`${key}: ${obj[key]}`);
    }
  });
}

console.log(printObject(obj));
