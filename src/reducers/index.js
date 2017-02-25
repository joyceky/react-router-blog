import { combineReducers } from 'redux';
import PostsReducer from './reducer-posts';

const rootReducer = combineReducers({
  post: PostsReducer
});

export default rootReducer;
