import React, { Component } from "react";
import Form from "./macroComponents/form/form";
import { Link } from "react-router-dom";
import http from "./services/httpService";
import config from "./config.json";
import { toast } from "react-toastify";

const Joi = require("joi-browser");

class LoginForm extends Form {
  state = {
    formData: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(8),
  };

  doSubmit = async () => {
    try {
      await http.post(`${config.apiendpoint}/login`, {
        email: this.state.formData.email,
        password: this.state.formData.password,
      });
    } catch (ex) {
      if (ex.response) toast.error(ex.response.data);
    }
  };

  render() {
    return (
      <div className="page">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-md-6 col-lg-6 col-xl-7 d-none d-md-flex bg-primary-transparent">
              <div className="row wd-100p mx-auto text-center">
                <div className="col-md-12 col-lg-12 col-xl-12 my-auto mx-auto wd-100p">
                  <img
                    src="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/common/img/backgrounds/login.png"
                    className="my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-5 bg-white">
              <div className="login d-flex align-items-center py-2">
                <div className="container p-0">
                  <div className="row">
                    <div className="col-md-10 col-lg-10 col-xl-9 mx-auto">
                      <div className="card-sigin">
                        <div className="mb-2 d-flex">
                          <Link href="#">
                            <img
                              src="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/common/img/logo/logo.png"
                              className="sign-favicon "
                              alt="logo"
                            />
                          </Link>
                        </div>
                        <div className="card-sigin">
                          <div className="main-signup-header">
                            <h2>Welcome back!</h2>
                            <h5 className="font-weight-semibold mb-4">
                              Please sign in to continue.
                            </h5>
                            <form
                              onSubmit={this.handleSubmit}
                              action="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/dashboard"
                            >
                              {this.renderInput("email", "Email")}
                              {this.renderInput(
                                "password",
                                "Password",
                                "password"
                              )}
                              {this.renderButton("Sign In", this.handleSubmit)}
                              <div className="row row-xs">
                                <div className="col-sm-6">
                                  <button className="btn btn-block">
                                    <i className="fa fa-facebook"></i> Signin
                                    with Facebook
                                  </button>
                                </div>
                                <div className="col-sm-6 mg-t-10 mg-sm-t-0">
                                  <button className="btn btn-danger btn-block">
                                    <i className="fa fa-google"></i> Signin with
                                    Google
                                  </button>
                                </div>
                              </div>
                            </form>
                            <div className="main-signin-footer mt-5">
                              <p>
                                <Link to="/forgotPassword">
                                  Forgot password?
                                </Link>
                              </p>
                              <p>
                                Don't have an account?
                                <Link to="/createAccount">
                                  Create an Account
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
