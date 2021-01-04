import { HotelsActionTypes } from "./hotels.types";
import hotelsList from "../../assets/hotels.json";

const INITIAL_STATE = {
  list: hotelsList,
  isFetching: false,
  errorMessage: undefined,
};

export const hotelsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HotelsActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case HotelsActionTypes.FETCH_COLLECTIONS_BY_CITY_ID:
      return {
        ...state,
        isFetching: true,
      };
    case HotelsActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isFetching: false,
      };
    case HotelsActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
