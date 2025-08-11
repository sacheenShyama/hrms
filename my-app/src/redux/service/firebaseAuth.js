import { auth } from "../../../firebase-config";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  //   signInWithRedirect,
  //   getRedirectResult,
  //   onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

import {
  setUser,
  setLoading,
  setError,
  logoutUser,
} from "../features/authSlice";

export const registerUser = async (dispatch, email, password) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("userCredential", userCredential);
    // const { uid, email, displayName, photoURL } = userCredential.user;

    dispatch(
      setUser({
        uid: userCredential.user.uid,
        userEmail: userCredential.user.email,
        displayName: userCredential.user.displayName,
        photoURL: userCredential.user.photoURL,
      })
    );
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const googleSignIn = async (dispatch) => {
  dispatch(setLoading(true));
  const provider = new GoogleAuthProvider();

  try {
    // const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log("result", result);
    const { uid, email, displayName, photoURL } = result.user;

    dispatch(setUser({ uid, userEmail: email, displayName, photoURL }));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const loginUser = async (dispatch, email, password) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("result", userCredential);

    // const { uid, email,displayName, photoURL } = userCredential.user;

    dispatch(
      setUser({
        uid: userCredential.user.uid,
        userEmail: userCredential.user.email,
        displayName: userCredential.user.displayName,
        photoURL: userCredential.user.photoURL,
      })
    );
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const logOut = async (dispatch) => {
  console.log("logout");
  await signOut(auth);
  dispatch(logoutUser());
};
