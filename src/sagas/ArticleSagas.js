import { all, call, put , takeLatest } from "redux-saga/effects";
import { delay } from "redux-saga";
import axios from "axios";
import * as actionTypes from "const/ActionTypes";
import * as API from "const/api";

// Worker sagas//
function* getArticle(action) {
	try {
		console.log("Attempting to get detail article with axios..");
		// like promise all will throw error if at least one failed
		const [response, related] = yield all([
			call(axios.get, `${API.ADDRESS_TYPICODE}/posts/${action.id}`),
			call(axios.get, `${API.ADDRESS_TYPICODE}/posts?_limit=3&_page=${Math.floor(Math.random() * 10) + 1}`)
		]);
		if (response.data.length === 0) {
			yield delay(500);
			yield put({type:actionTypes.GET_ARTICLE_NOT_FOUND, response: response.data, related: related.data});
		} else {
			yield delay(1000);
			yield put({type:actionTypes.GET_ARTICLE_SUCCESS, response: response.data, related: related.data});
		}
	} catch(e) {
		console.log("Request failed! could not get detail article");
		console.log(e);
		yield delay(500);
		yield put({type:actionTypes.GET_ARTICLE_FAIL});
	}
}

// Watcher sagas//
export function* wacthGetListPhotos() {
	console.log("Redux saga is watching LOAD_ARTICLE action listener...");
	yield takeLatest(actionTypes.GET_ARTICLE, getArticle);
}
