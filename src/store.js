import RootReducer from "./redux/reducer/RootReducer";
import { createStore } from "redux";

const store = createStore(RootReducer);

export default store;