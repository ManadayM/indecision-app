
const isAdult = (age) => age >= 18;

const canDrink = (age) => age >= 21;

// export { isAdult, canDrink };

const isSeniorCitizen = (age) => age >= 60;
// export default isSeniorCitizen;
// or
// export default (age) => age >= 60;

// or

export { isAdult, canDrink, isSeniorCitizen as default};

