import { shopActionTypes } from './shopActionTypes';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => {
  return {
    type: shopActionTypes.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionsSuccess = (shopCollections) => {
  return {
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: shopCollections,
  };
};

export const fetchCollectionsFailure = (errorMessage) => {
  return {
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  };
};

// This is a thunk: a function that returns a function that gets access to `dispatch`
// By using redux-thunk to `dispatch` this, redux-thunk will call this with `dispatch` as the first argument
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const shopCollections = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(shopCollections));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
