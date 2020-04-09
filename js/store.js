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

    '150bb7f2-6264-48ee-9253-215a8780de4b': {
      id: '150bb7f2-6264-48ee-9253-215a8780de4b',
      title: 'egg 3',
      image: require(`./res/eggs/150bb7f2-6264-48ee-9253-215a8780de4b.jpg`),
    },
    'ccccbd4d-4bf0-45c8-88f4-bd182c7851f4': {
      id: 'ccccbd4d-4bf0-45c8-88f4-bd182c7851f4',
      title: 'egg 4',
      image: require(`./res/eggs/ccccbd4d-4bf0-45c8-88f4-bd182c7851f4.jpg`),
    }
  },
};
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares),
);

export default store;
