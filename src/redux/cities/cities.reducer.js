import citiesList from "../../assets/cities.json";

const INITIAL_STATE = {
  list: citiesList,
};

export const citiesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
