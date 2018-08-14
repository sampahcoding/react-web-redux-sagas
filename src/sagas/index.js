import { fork, all } from "redux-saga/effects";
import * as SearchPhotosSagas from "sagas/SearchPhotosSagas";
import * as ArticleSagas from "sagas/ArticleSagas";

export default function* rootSaga() {
	yield all([
		...Object.values(SearchPhotosSagas),
		...Object.values(ArticleSagas)
	].map(fork));
}
