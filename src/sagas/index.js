import { fork, all } from "redux-saga/effects";
import * as SearchPhotosSagas from "./SearchPhotosSagas";

export default function* rootSaga() {
	yield all([
		...Object.values(SearchPhotosSagas)
	].map(fork));
}
