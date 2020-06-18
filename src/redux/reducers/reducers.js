import { combineReducers } from "redux";
import fetchTech from "./fetchTech";
import customSearch from "./customSearch";

//combine reducers
//remember you need to export the reducers to use them
const reducers = combineReducers({
  FetchTech: fetchTech,
  CustomSearch: customSearch,
});

export default reducers;
