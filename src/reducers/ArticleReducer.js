import * as actionTypes from "const/ActionTypes";

const article = {
	data: [],
	progress: false,
	reload: false,
	no_result: false,
	delay: 500 };

export default function Article(state = article, action) {
	if (action.infinite !== true) {
		state = {...state, ...article};
	}
	switch (action.type) {
	case actionTypes.GET_ARTICLE:
		return { ...state, progress: true };
	case actionTypes.GET_ARTICLE_SUCCESS:
		return { ...state, data: action.response, related: action.related, delay: 1000, progress: false };
	case actionTypes.GET_ARTICLE_NOT_FOUND:
		return { ...state, data: action.response, no_result: true};
	case actionTypes.GET_ARTICLE_FAIL:
		return {
			...state,
			reload: true,
			error: "Error while fetching repositories"
		};
	default:
		return state;
	}
}

export function getArticle(id) {
	return { type: actionTypes.GET_ARTICLE, id: id };
}
