// sukurti klase Human
export default class Human {
  // klase ima amziu ir varda kaip argumentus
  constructor(argAge, argName) {
    this.age = argAge;
    this.name = argName;
  }
  // viduje yra metodas kuris apskaiciuoja gimimo metus su vardus (log)
  calculateYearOfBirth() {
    const thisYear = new Date().getFullYear();
    const yearOfBirth = thisYear - this.age;
    console.log(`${this.name} was born on ${yearOfBirth}`);
  }
}
