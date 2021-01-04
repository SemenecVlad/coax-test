import { createSelector } from "reselect";

const selectCitiesState = (state) => state.cities;

export const selectCitiesList = createSelector(
  selectCitiesState,
  (cities) => cities.list
);
