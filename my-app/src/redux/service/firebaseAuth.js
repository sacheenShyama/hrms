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

import { store } from "../store";

export const registerUser = async (email, password) => {
  store.dispatch(setLoading(true));
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("userCredential", userCredential);
    const { uid, email, displayName, photoURL } = userCredential.user;

    store.dispatch(setUser({ uid, userEmail: email, displayName, photoURL }));
  } catch (error) {
    store.dispatch(setError(error.message));
  } finally {
    store.dispatch(setLoading(false));
  }
};

export const googleSignIn = async () => {
  store.dispatch(setLoading(true));
  const provider = new GoogleAuthProvider();

  try {
    // const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log("result", result);
    const { uid, email, displayName, photoURL } = result.user;

    store.dispatch(setUser({ uid, userEmail: email, displayName, photoURL }));
  } catch (error) {
    store.dispatch(setError(error.message));
  } finally {
    store.dispatch(setLoading(false));
  }
};

export const loginUser = async (email, password) => {
  store.dispatch(setLoading(true));
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("result", userCredential);

    const { uid, email, displayName, photoURL } = userCredential.user;

    store.dispatch(setUser({ uid, userEmail: email, displayName, photoURL }));
  } catch (error) {
    store.dispatch(setError(error.message));
  } finally {
    store.dispatch(setLoading(false));
  }
};

export const logOut = async () => {
  console.log("logout");
  await signOut(auth);
  store.dispatch(logoutUser());
};
