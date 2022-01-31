import { applyMiddleware, createStore } from "redux";
import cardsReducer from './cards-reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";

let store = createStore(cardsReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;