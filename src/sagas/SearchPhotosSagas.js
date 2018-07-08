import { call, put , takeLatest} from "redux-saga/effects";
import axios from "axios";
import * as actionTypes from "../const/ActionTypes";
import * as API from "../const/api";


// Worker sagas//
function* getListPhotos(action) {
	try {
		console.log("Attempting to get List Photos with axios..");
		const response = yield call(axios.get, `${API.ADDRESS_TYPICODE}/photos?q=${action.params.q}&_limit=10&_page=${action.params.page}`);
		yield put({type:actionTypes.GET_PHOTOS_SUCCESS, response: response.data, infinite: action.params.infinite});
	} catch(e) {
		console.log("Request failed! could not get list photos");
		console.log(e);
		yield put({type:actionTypes.GET_PHOTOS_FAIL});
	}
}

// Watcher sagas//
export function* wacthGetListPhotos() {
	console.log("Redux saga is watching LOAD_PHOTOS action listener...");
	yield takeLatest(actionTypes.GET_PHOTOS, getListPhotos);
}
