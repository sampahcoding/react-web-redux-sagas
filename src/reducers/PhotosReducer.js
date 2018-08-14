import * as actionTypes from "const/ActionTypes";

const articles = {
	datas: [],
	progress: false,
	reload: false,
	no_result: false,
	delay: 500 };

function result(state, action) {
	if (action.infinite === true) {
		return state.datas.concat(action.response);
	}
	return action.response;
}

export default function Photos(state = articles, action) {
	if (action.infinite !== true) {
		state = {...state, ...articles};
	}
	switch (action.type) {
	case actionTypes.GET_PHOTOS:
		return { ...state, progress: true };
	case actionTypes.GET_PHOTOS_SUCCESS:
		return { ...state, datas: result(state, action), delay: 1000, progress: false };
	case actionTypes.GET_PHOTOS_NOT_FOUND:
		return { ...state, datas: result(state, action), no_result: true};
	case actionTypes.GET_PHOTOS_FAIL:
		return {
			...state,
			reload: true,
			error: "Error while fetching repositories"
		};
	default:
		return state;
	}
}

export function listPhotos(params) {
	return { type: actionTypes.GET_PHOTOS, params: params };
}
