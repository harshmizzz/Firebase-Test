import React, { Component } from "react";
import firebase from "firebase";
import Google from "./google";
export class App extends Component {
  handleClick = () => {
    var recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    var number = "+917007799607";
    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then(function (e) {
        var code = prompt("Enter the otp", "");

        if (code === null) return;

        e.confirm(code)
          .then(function (result) {
            console.log(result.user);

            document.querySelector("label").textContent +=
              result.user.phoneNumber + "Number verified";
          })
          .catch(function (error) {
            console.error(error);
          });
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  render() {
    return (
      <div>
        <label></label>

        <div id="recaptcha"></div>

        <button onClick={this.handleClick}>Click for otp login</button>
        <Google />
      </div>
    );
  }
}

export default App;
