import { all, call } from "redux-saga/effects";
import { hotelsSagas } from "./hotels/hotels.sagas";


export function* rootSaga() {
  yield all([
    call(hotelsSagas)
  ]);
}
