import { HotelsActionTypes } from "./hotels.types";

export const fetchCollectionStart = (type) => ({
  type: HotelsActionTypes.FETCH_COLLECTIONS_START,
  payload: type
});

export const fetchCollectionByCityId = (cityId) => ({
  type: HotelsActionTypes.FETCH_COLLECTIONS_BY_CITY_ID,
  payload: cityId
});

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: HotelsActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionError = (errorMessage) => ({
  type: HotelsActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
