import { call, put, takeLatest, all, delay } from "redux-saga/effects";
import hotelsList from "../../assets/hotels.json";
import { HotelsActionTypes } from "./hotels.types";

import { fetchCollectionSuccess, fetchCollectionError } from "./hotels.actions";

export function* fetchCollectionsAsync(action) {
  try {
    if (action.payload === "ALL") {
      const collectionsMap = yield hotelsList;
      yield put(fetchCollectionSuccess(collectionsMap));
    }
  } catch (error) {
    yield put(fetchCollectionError(error.message));
  }
}
export function* fetchCollectionsByID(action) {
  try {
    const collectionsMap = yield hotelsList;
    yield delay(300);
    yield put(fetchCollectionSuccess(collectionsMap.filter(hotel => hotel.cityId === action.payload)));
  } catch (error) {
    yield put(fetchCollectionError(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    HotelsActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
export function* fetchCollectionsByCityID() {
  yield takeLatest(
    HotelsActionTypes.FETCH_COLLECTIONS_BY_CITY_ID,
    fetchCollectionsByID
  );
}

export function* hotelsSagas() {
  yield all([
    call(fetchCollectionsStart),
    call(fetchCollectionsByCityID)
  ]);
}
