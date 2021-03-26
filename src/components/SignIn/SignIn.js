import React, { useEffect } from "react";
import { navigate } from "@reach/router";

const SignIn = ({ user, signIns: { signInWithGoogle } }) => {
  useEffect(() => {
    if (user) {
      navigate(`/user/${user.uid}`);
    }
  }, [user]);

  return (
    <div className="sign-in-page">
      <h3>Bem vindo(a) ao Pius Editor</h3>
      <p>Faça login com sua conta para ter acesso.</p>
      <div className="sign-in-buttons">
        <button onClick={signInWithGoogle}>Login com Google</button>
      </div>
    </div>
  );
};

export default SignIn;
