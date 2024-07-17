// store/store.js

import { createStore } from 'redux';
import rootReducer from '../reducers'; // Correct path to rootReducer

const store = createStore(rootReducer);

export default store;
