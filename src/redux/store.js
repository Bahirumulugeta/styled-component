import { createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/index.js';
import rootSaga from './sagas/index'
const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null
const sagaMiddleware=createSagaMiddleware();
const store = compose(
    applyMiddleware(sagaMiddleware),
    devTools,)( createStore)(rootReducer);
sagaMiddleware.run(rootSaga);
export default store;
