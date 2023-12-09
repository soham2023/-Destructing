const person = {
    name: "Maria",
    age: 21,
    address: {
      street: "Sukhobristi Lane.",
      city: "Sector 5, Kolkata",
      state: "West Bengal",
    },
  };
  
  function extractData(obj) {
    const {
      name,
      address: { street },
    } = obj;
    return { name, street };
  }
  
  console.log(extractData(person));
  