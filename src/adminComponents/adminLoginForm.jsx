import React from "react";
import { Link } from "react-router-dom";
import * as registerService from "../services/registerServices";
import { toast } from "react-toastify";
import Form from "../macroComponents/form/form";
import Joi from "joi-browser";
class AdminLogIn extends Form {
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
    const { data, error } = await registerService.adminAuthentication(
      this.state.formData
    );
    if (data) {
      const stake = data.profileType;
      toast.success(data.message);
      this.props.history.push(`/${stake.toLowerCase()}`);
      window.location.reload();
    }
    if (error) return;
  };

  render() {
    return (
      <div class="page">
        <div class="container-fluid">
          <div class="row no-gutter">
            <div class="col-md-6 col-lg-6 col-xl-7 d-none d-md-flex bg-primary-transparent">
              <div class="row wd-100p mx-auto text-center">
                <div class="col-md-12 col-lg-12 col-xl-12 my-auto mx-auto wd-100p">
                  <img
                    src="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/common/img/backgrounds/login.png"
                    class="my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-5 bg-white">
              <div class="login d-flex align-items-center py-2">
                <div class="container p-0">
                  <div class="row">
                    <div class="col-md-10 col-lg-10 col-xl-9 mx-auto">
                      <div class="card-sigin">
                        <div class="mb-2 d-flex">
                          <a href="#">
                            <img
                              src="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/common/img/logo/logo.png"
                              class="sign-favicon "
                              alt="logo"
                            />
                          </a>
                        </div>
                        <div class="card-sigin">
                          <div class="main-signup-header">
                            <h2>Welcome Admin!</h2>
                            <h5 class="font-weight-semibold mb-4">
                              Please sign in to continue.
                            </h5>
                            <form action="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/dashboard">
                              {this.renderInput("email", "Email")}
                              {this.renderInput(
                                "password",
                                "Password",
                                "password"
                              )}
                              {this.renderButton("Sign In", this.handleSubmit)}
                            </form>
                            <div class="main-signin-footer mt-5">
                              <p>
                                <Link to="/forgotPassword">
                                  Forgot password?
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

export default AdminLogIn;
