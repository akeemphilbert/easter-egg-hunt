import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const initialState = {
  eggs: {
    'b887927e-7b1e-4485-9c6a-d586580c0d01': {
      id: 'b887927e-7b1e-4485-9c6a-d586580c0d01',
      title: 'egg 1 ',
      image: require(`./res/eggs/b887927e-7b1e-4485-9c6a-d586580c0d01.jpg`),
    },
    '1bd4b823-1beb-4468-b150-d93a1d6ae117': {
      id: '1bd4b823-1beb-4468-b150-d93a1d6ae117',
      title: 'egg 2',
      image: require(`./res/eggs/1bd4b823-1beb-4468-b150-d93a1d6ae117.jpg`),
    },
  },
};
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares),
);

export default store;
