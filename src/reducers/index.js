import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
// the syntax below allows us to avoid using the property name, 'reducer',
// as using that name could lead to naming conflicts
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
