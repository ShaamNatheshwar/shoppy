import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../../utils/firebase.utils";
import "./sign-in.styles.scss";
import { useEffect } from "react";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";

const Authentication = () => {
  return (
    <div className="authentication-container"> 
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
