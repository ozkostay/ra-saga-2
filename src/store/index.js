import {createStore, combineReducers, applyMiddleware, compose,} from 'redux';
import createSagaMiddleware from 'redux-saga';
import servicesReducer from '../reducers/services';
import saga from '../sagas';

const reducer = combineReducers({ services: servicesReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, 
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);

export default store;





// import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
// import {combineEpics, createEpicMiddleware} from 'redux-observable';
// import servicesReducer from '../reducers/services';
// import {listServicesRequestEpic, ItemServiceRequestEpic} from '../epics';

// const reducer = combineReducers({services: servicesReducer,});
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const epic = combineEpics( listServicesRequestEpic, ItemServiceRequestEpic);
// const epicMiddleware = createEpicMiddleware();

// const store = createStore(
//   reducer, 
//   composeEnhancers(applyMiddleware(epicMiddleware))
// );

// epicMiddleware.run(epic);
// export default store;
