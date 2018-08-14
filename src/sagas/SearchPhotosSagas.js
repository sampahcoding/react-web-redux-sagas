import { call, put , takeLatest } from "redux-saga/effects";
import { delay } from "redux-saga";
import axios from "axios";
import * as actionTypes from "const/ActionTypes";
import * as API from "const/api";
import { restoreInit } from "helper/ParamHelper";

var params = ["q", "page", "sortby"];
// Worker sagas//
function* getListPhotos(action) {
	let actionParam = restoreInit(params,action.params);
	try {
		console.log("Attempting to get List Photos with axios..");
		const response = yield call(axios.get, `${API.ADDRESS_TYPICODE}/photos?q=${actionParam.q}&_limit=10&_page=${actionParam.page}&_sort=${actionParam.sortby}`);
		if (response.data.length === 0) {
			yield delay(500);
			yield put({type:actionTypes.GET_PHOTOS_NOT_FOUND, response: response.data, infinite: false});
		} else {
			yield delay(1000);
			yield put({type:actionTypes.GET_PHOTOS_SUCCESS, response: response.data, infinite: false});
		}
	} catch(e) {
		console.log("Request failed! could not get list photos");
		console.log(e);
		yield delay(500);
		yield put({type:actionTypes.GET_PHOTOS_FAIL});
	}
}

// Watcher sagas//
export function* wacthGetListPhotos() {
	console.log("Redux saga is watching LOAD_PHOTOS action listener...");
	yield takeLatest(actionTypes.GET_PHOTOS, getListPhotos);
}
