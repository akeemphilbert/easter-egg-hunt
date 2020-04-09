import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const initialState = {
  eggs: {

    '1bd4b823-1beb-4468-b150-d93a1d6ae117': {
      id: '1bd4b823-1beb-4468-b150-d93a1d6ae117',
      title: 'egg 2',
      image: require(`./res/eggs/1bd4b823-1beb-4468-b150-d93a1d6ae117.jpg`),
    },

    '06aab64c-dbd0-466c-8499-0efff5f8f4cd': {
      id: '06aab64c-dbd0-466c-8499-0efff5f8f4cd',
      title: 'egg',
      image: require(`./res/eggs/06aab64c-dbd0-466c-8499-0efff5f8f4cd.jpg`),
    },

    '67fbfd37-603b-4287-869d-3a7365b3141e': {
      id: '67fbfd37-603b-4287-869d-3a7365b3141e',
      title: 'GreenPink',
      image: require(`./res/eggs/67fbfd37-603b-4287-869d-3a7365b3141e.jpg`),
    },

    '92d3f8a6-06be-420a-9cac-621e13d60bbf': {
      id: '92d3f8a6-06be-420a-9cac-621e13d60bbf',
      title: 'egg 3',
      image: require(`./res/eggs/92d3f8a6-06be-420a-9cac-621e13d60bbf.jpg`),
    },

    '92d9d6c7-1b74-46c6-92d6-9b407dfe30b2': {
      id: '92d9d6c7-1b74-46c6-92d6-9b407dfe30b2',
      title: 'wepalaGold',
      image: require(`./res/eggs/92d9d6c7-1b74-46c6-92d6-9b407dfe30b2.png`),
    },

    '96b16cab-c11f-4989-b38b-05c9b8f25461': {
      id: '96b16cab-c11f-4989-b38b-05c9b8f25461',
      title: 'redWhiteBlack',
      image: require(`./res/eggs/96b16cab-c11f-4989-b38b-05c9b8f25461.jpg`),
    },

    '945afe34-e5a0-46fc-89bd-4a77e763ee90': {
      id: '945afe34-e5a0-46fc-89bd-4a77e763ee90',
      title: 'rainvow',
      image: require(`./res/eggs/945afe34-e5a0-46fc-89bd-4a77e763ee90.jpg`),
    },

    '4467c943-a350-452d-a074-98611a9a3f53': {
      id: '4467c943-a350-452d-a074-98611a9a3f53',
      title: 'PurpleBlue',
      image: require(`./res/eggs/4467c943-a350-452d-a074-98611a9a3f53.jpg`),
    },

    'b0710951-1b95-4831-9e82-c3c7cf81c4ed': {
      id: 'b0710951-1b95-4831-9e82-c3c7cf81c4ed',
      title: 'tiger',
      image: require(`./res/eggs/b0710951-1b95-4831-9e82-c3c7cf81c4ed.jpg`),
    },

    'b887927e-7b1e-4485-9c6a-d586580c0d01': {
      id: 'b887927e-7b1e-4485-9c6a-d586580c0d01',
      title: 'egg 1 ',
      image: require(`./res/eggs/b887927e-7b1e-4485-9c6a-d586580c0d01.jpg`),
    },

    'b6371107-6f68-4d4c-b616-0ce285242626': {
      id: 'b6371107-6f68-4d4c-b616-0ce285242626',
      title: 'heartsPink',
      image: require(`./res/eggs/b6371107-6f68-4d4c-b616-0ce285242626.jpg`),
    },

    'c1640ef1-06f9-43ad-8631-5848735db10e': {
      id: 'c1640ef1-06f9-43ad-8631-5848735db10e',
      title: 'heartsPink',
      image: require(`./res/eggs/c1640ef1-06f9-43ad-8631-5848735db10e.png`),
    },


    'd73488c1-9556-4b5e-8ab0-999fbdfc1341': {
      id: 'd73488c1-9556-4b5e-8ab0-999fbdfc1341',
      title: 'GreenYellow',
      image: require(`./res/eggs/d73488c1-9556-4b5e-8ab0-999fbdfc1341.jpg`),
    },

    'e4ec47b4-45b7-4237-a053-3e770c4ef1b6': {
      id: 'e4ec47b4-45b7-4237-a053-3e770c4ef1b6',
      title: 'RedYellow',
      image: require(`./res/eggs/e4ec47b4-45b7-4237-a053-3e770c4ef1b6.jpg`),
    },

    'f406e3d6-eea5-459c-b476-ae8ed6911846': {
      id: 'f406e3d6-eea5-459c-b476-ae8ed6911846',
      title: 'wepalaBlue',
      image: require(`./res/eggs/f406e3d6-eea5-459c-b476-ae8ed6911846.jpg`),
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
