import RootReducer from "./redux/reducer/RootReducer";
import { createStore  , applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import { watchSaga } from "./redux/saga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]; // if you have other middleware, put them here

const store = createStore(RootReducer,applyMiddleware(...middleware));

sagaMiddleware.run(watchSaga)

export default store;