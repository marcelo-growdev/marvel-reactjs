import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './modules/rootReducer';
import persistReducer from './persistReducer';

const store = createStore(
  persistReducer(rootReducer),
  composeWithDevTools(applyMiddleware())
);

const persistor = persistStore(store);

export { store, persistor };
