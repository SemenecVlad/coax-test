import { combineReducers } from "redux";
import { citiesReducer } from "./cities/cities.reducer";
import { hotelsReducer } from "./hotels/hotels.reducer";

export const rootReducer = combineReducers({
  cities: citiesReducer,
  hotels: hotelsReducer
});
