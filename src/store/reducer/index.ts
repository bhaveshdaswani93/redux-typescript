import { combineReducers } from "redux";
import RepositoryReducer from "./repository-reducer";

const reducers = combineReducers({
  repositoryReducer: RepositoryReducer
})

export default reducers;