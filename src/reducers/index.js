import {combineReducers} from 'redux';
import AddReducer from './AddReducer';
import EditReducer from './EditReducer';
import PostReducer from './PostReducer'

export default combineReducers({
    postData: PostReducer,
    isEditUser: EditReducer,
    isAddUser: AddReducer
})