import React from "react";
import "../Login/LoginSection.css";

const Logins = () => {
  return (
    <div className="head_Section">
      <div className="child_card_center">
        <div className="card_head">
          <form className="sign-up">
            <div className="form-group">
              <label>
                <input type="tezt" placeholder="Username" />
              </label>
              <label>
                <input type="tezt" placeholder="Password" />
              </label>
              <button type="button" className="submit">
              <span>Login</span>  
              </button>
            </div>
          </form>

          <div className="Register_link">
            <p>
              belum punya akun ? <a href="">Daftar</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logins;
