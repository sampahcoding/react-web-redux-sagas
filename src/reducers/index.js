import { combineReducers } from "redux";
import photos from "reducers/PhotosReducer";
import article from "reducers/ArticleReducer";

const rootReducer = combineReducers({
	photos,
	article
});

export default rootReducer;
