import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
    // console.log(window.location.href);
    // console.log(window.localStorage.getItem("emailForRegistration"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // validation
    if (!email || !password) {
      toast.error("Email và mật khẩu không được để trống");
      return;
    }

    if (password.length < 6) {
      toast.error("Mật khẩu phải có ít nhất 6 kí tự");
      return;
    }

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      //   console.log("RESULT", result);
      if (result.user.emailVerified) {
        // remove user email fom local storage
        window.localStorage.removeItem("emailForRegistration");
        // get user id token
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        // redux store
        console.log("user", user, "idTokenResult", idTokenResult);
        // redirect
        history.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="email" className="form-control" value={email}  />

      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mật khẩu"
        autoFocus
      />
      <br />
      <button type="submit" className="btn btn-block btn-dark">
        Tạo tài khoản
      </button>
    </form>
  );

  return (
    <div>
      {loading ? (
        <div className="preloader">
          <div className="lds-ripple">
            <div className="lds-pos" />
            <div className="lds-pos" />
          </div>
        </div>
      ) : (
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h4>Thiết lập mật khẩu</h4>
              {completeRegistrationForm()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterComplete;
