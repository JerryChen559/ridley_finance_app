/*
// Note to self. Rates as of 2019 
 statetaxrate = [
  { Alabama: 5 },
  { Alaska: 0 },
  { Arizona: 4.54 },
  { Arkansas: 6.9 },
  { California: 12.3 },
  { Colorado: 4.63 },
  { Connecticut: 6.99 },
  { Delaware: 6.6 },
  { Florida: 0 },
  { Georgia: 6 },
  { Hawaii: 11 },
  { Idaho: 7.4 },
  { Illinois: 4.95 },
  { Indiana: 3.23 },
  { Iowa: 8.98 },
  { Kansas: 5.7 },
  { Kentucky: 6 },
  { Louisiana: 6 },
  { Maine: 7.15 },
  { Maryland: 5.75 },
  { Massachusetts: 5.1 },
  { Michigan: 4.25 },
  { Minnesota: 9.85 },
  { Mississippi: 5 },
  { Missouri: 5.9 },
  { Montana: 6.9 },
  { Nebraska: 6.84 },
  { Nevada: 0 },
  { NewHampshire: 0 },
  { NewJersey: 8.97 },
  { NewMexico: 4.9 },
  { NewYork: 8.82 },
  { NorthCarolina: 5.499 },
  { NorthDakota: 2.9 },
  { Ohio: 4.997 },
  { Oklahoma: 5 },
  { Oregon: 9.9 },
  { Pennsylvania: 3.07 },
  { RhodeIsland: 5.99 },
  { SouthCarolina: 7 },
  { SouthDakota: 0 },
  { Tennessee: 0 },
  { Texas: 0 },
  { Utah: 5 },
  { Vermont: 8.95 },
  { Virginia: 5.75 },
  { Washington: 0 },
  { WestVirginia: 6.5 },
  { Wisconsin: 7.65 },
  { Wyoming: 0 },
  { DistrictOfColumbia: 8.95 }
];
*/

const initialState = {
  salary: 0,
  federaltax: 0,
  statetax: 0,
  sideincome: 0,
  rent: 0,
  mortgage: 0,
  car: 0,
  gas: 0,
  water: 0,
  healthcare: 0,
  school: 0,
  food: 0,
  restaurants: 0,
  clothes: 0,
  gym: 0,
  entertainment: 0,
  travel: 0
};

const UPDATE_SALARY = "UPDATE_SALARY";
const UPDATE_FEDERALTAX = "UPDATE_FEDERALTAX";
const UPDATE_STATETAX = "UPDATE_STATETAX";
const UPDATE_SIDEINCOME = "UPDATE_SIDEINCOME";
const UPDATE_HEALTHCARE = "UPDATE_HEALTHCARE";
const UPDATE_RENT = "UPDATE_RENT";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_CAR = "UPDATE_CAR";
const UPDATE_GAS = "UPDATE_GAS";
const UPDATE_SCHOOL = "UPDATE_SCHOOL";
const UPDATE_WATER = "UPDATE_WATER";
const UPDATE_FOOD = "UPDATE_FOOD";
const UPDATE_CLOTHES = "UPDATE_CLOTHES";
const UPDATE_GYM = "UPDATE_GYM";
const UPDATE_RESTAURANTS = "UPDATE_RESTAURANTS";
const UPDATE_ENTERTAINMENT = "UPDATE_ENTERTAINMENT";
const UPDATE_TRAVEL = "UPDATE_TRAVEL";

function statementReducer(state = initialState, action) {
  console.log("STATEMENT REDUCER HIT: Action ->", action);

  switch (action.type) {
    case UPDATE_SALARY:
      return { ...state, salary: action.payload };
    case UPDATE_FEDERALTAX:
      return { ...state, federaltax: action.payload };
    case UPDATE_STATETAX:
      return { ...state, statetax: action.payload };
    case UPDATE_SIDEINCOME:
      return { ...state, sideincome: action.payload };
    case UPDATE_HEALTHCARE:
      return { ...state, healthcare: action.payload };
    case UPDATE_RENT:
      return { ...state, rent: action.payload };
    case UPDATE_MORTGAGE:
      return { ...state, mortgage: action.payload };
    case UPDATE_CAR:
      return { ...state, car: action.payload };
    case UPDATE_GAS:
      return { ...state, gas: action.payload };
    case UPDATE_SCHOOL:
      return { ...state, school: action.payload };
    case UPDATE_WATER:
      return { ...state, water: action.payload };
    case UPDATE_FOOD:
      return { ...state, food: action.payload };
    case UPDATE_CLOTHES:
      return { ...state, clothes: action.payload };
    case UPDATE_GYM:
      return { ...state, gym: action.payload };
    case UPDATE_RESTAURANTS:
      return { ...state, restaurants: action.payload };
    case UPDATE_ENTERTAINMENT:
      return { ...state, entertainment: action.payload };
    case UPDATE_TRAVEL:
      return { ...state, travel: action.payload };
    default:
      return state;
  }
}

export function updateSalary(salary) {
  return {
    type: UPDATE_SALARY,
    payload: salary
  };
}
export function updateFederalTax(federaltax) {
  return {
    type: UPDATE_FEDERALTAX,
    payload: federaltax
  };
}
export function updateStateTax(statetax) {
  return {
    type: UPDATE_STATETAX,
    payload: statetax
  };
}
export function updateSideIncome(sideincome) {
  return {
    type: UPDATE_SIDEINCOME,
    payload: sideincome
  };
}
export function updateRent(rent) {
  return {
    type: UPDATE_RENT,
    payload: rent
  };
}
export function updateMortgage(mortgage) {
  return {
    type: UPDATE_MORTGAGE,
    payload: mortgage
  };
}
export function updateCar(car) {
  return {
    type: UPDATE_CAR,
    payload: car
  };
}
export function updateGas(gas) {
  return {
    type: UPDATE_GAS,
    payload: gas
  };
}
export function updateWater(water) {
  return {
    type: UPDATE_WATER,
    payload: water
  };
}
export function updateHealthCare(healthcare) {
  return {
    type: UPDATE_HEALTHCARE,
    payload: healthcare
  };
}
export function updateSchool(school) {
  return {
    type: UPDATE_SCHOOL,
    payload: school
  };
}
export function updateFood(food) {
  return {
    type: UPDATE_FOOD,
    payload: food
  };
}
export function updateRestaurants(restaurants) {
  return {
    type: UPDATE_RESTAURANTS,
    payload: restaurants
  };
}
export function updateClothes(clothes) {
  return {
    type: UPDATE_CLOTHES,
    payload: clothes
  };
}
export function updateGym(gym) {
  return {
    type: UPDATE_GYM,
    payload: gym
  };
}
export function updateEntertainment(entertainment) {
  return {
    type: UPDATE_ENTERTAINMENT,
    payload: entertainment
  };
}
export function updateTravel(travel) {
  return {
    type: UPDATE_TRAVEL,
    payload: travel
  };
}

export default statementReducer;
