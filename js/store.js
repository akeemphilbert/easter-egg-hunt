import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const initialState = {
  eggs: {
    'b887927e-7b1e-4485-9c6a-d586580c0d01': {
      id: 'b887927e-7b1e-4485-9c6a-d586580c0d01',
      title: 'egg 1 ',
      image: 'some image',
    },
    '1bd4b823-1beb-4468-b150-d93a1d6ae117': {
      id: '1bd4b823-1beb-4468-b150-d93a1d6ae117',
      title: 'egg 2',
      image: 'some image',
    },
    '2bd4b823-1beb-4468-b150-d93a1d6ae117': {
      id: '2bd4b823-1beb-4468-b150-d93a1d6ae117',
      title: 'egg 3',
      image: 'some image',
    },
    '3bd4b823-1beb-4468-b150-d93a1d6ae117': {
      id: '3bd4b823-1beb-4468-b150-d93a1d6ae117',
      title: 'egg 4',
      image: 'some image',
    },
    '4bd4b823-1beb-4468-b150-d93a1d6ae117': {
      id: '3bd4b823-1beb-4468-b150-d93a1d6ae117',
      title: 'egg 5',
      image: 'some image',
    },
    '5bd4b823-1beb-4468-b150-d93a1d6ae117': {
      id: '3bd4b823-1beb-4468-b150-d93a1d6ae117',
      title: 'egg 6',
      image: 'some image',
    },
    '6bd4b823-1beb-4468-b150-d93a1d6ae117': {
      id: '3bd4b823-1beb-4468-b150-d93a1d6ae117',
      title: 'egg 7',
      image: 'some image',
    },
    '7bd4b823-1beb-4468-b150-d93a1d6ae117': {
      id: '3bd4b823-1beb-4468-b150-d93a1d6ae117',
      title: 'egg 7',
      image: 'some image',
    },
    '8bd4b823-1beb-4468-b150-d93a1d6ae117': {
      id: '3bd4b823-1beb-4468-b150-d93a1d6ae117',
      title: 'egg 7',
      image: 'some image',
    },
    '9bd4b823-1beb-4468-b150-d93a1d6ae117': {
      id: '3bd4b823-1beb-4468-b150-d93a1d6ae117',
      title: 'egg 7',
      image: 'some image',
    },
    '10d4b823-1beb-4468-b150-d93a1d6ae117': {
      id: '3bd4b823-1beb-4468-b150-d93a1d6ae117',
      title: 'egg 7',
      image: 'some image',
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
