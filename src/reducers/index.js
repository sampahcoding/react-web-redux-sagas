import { combineReducers } from 'redux';
import photos from './PhotosReducer';

const rootReducer = combineReducers({
  photos
});

export default rootReducer;
