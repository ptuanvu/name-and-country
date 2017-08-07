const animals = require('./data/animals.json');
const countries = require('./data/countries.json');
const fruits = require('./data/fruits.json');
const names = require('./data/names.json');

const initialState = {
  data: { animals: animals.data, countries: countries.data, fruits: fruits.data, names },
  selectedIndex: undefined,
};

export default function (state = initialState, action) {
  return state;
}
