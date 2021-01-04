import { createSelector } from "reselect";

const selectHotelsState = (state) => state.hotels;

export const selectHotelsList = createSelector(
  selectHotelsState,
  (hotels) => hotels.list
);

export const isFetchingHotels = createSelector(
  selectHotelsState,
  (hotels) => hotels.isFetching
);

