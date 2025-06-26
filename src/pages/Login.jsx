import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { authClient } from "../utils/httpClient";
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "../utils/context";
const Login = () => {
    const navigation = useNavigate();
    const [loginForm, setLoginForm] = useState({});
    const [formErr, setFormErr] = useState({});
    const [loader, setLoader] = useState(false);
    const [user, setUser] = useState({});
    const handleChange = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    }

    const validateForm = () => {
        let errors = {};
        let formIsValid = true;
        if (!loginForm.username) {
            formIsValid = false;
            errors.username = "Please enter your username.";
        }

        if (!loginForm.password) {
            formIsValid = false;
            errors.password = "Please enter your password.";
        }
        setFormErr(errors);
        return formIsValid;
    }

    const handleSubmit = async () => {
        setLoader(true);
        if (validateForm()) {
            const response = await authClient.post('/userlogin', loginForm);
            if (response.data.status) {
                setUser(response.data.data?.data);
                localStorage.setItem('adminToken', response.data.data.token);
                navigation('/expoDashboard');
                setLoader(false);
            }
        }
        else {
            console.log('form is invalid');
        }
    }

    return (
        <>
            <UserInfoContext.Provider value={{ user }}>
                {loader && <Loader />}
                <div className="container-fluid authentication-bg overflow-hidden">
                    <div className="bg-overlay"></div>
                    <div className="row align-items-center justify-content-center min-vh-100">
                        <div className="col-10 col-md-6 col-lg-4 col-xxl-3">
                            <div className="card mb-0">
                                <div className="card-body">
                                    <div className="text-center">
                                        <a className="logo-dark">
                                            <img
                                                src="assets/images/logo.png"
                                                alt=""
                                                width="100"
                                                className="auth-logo logo-dark mx-auto"
                                            />
                                        </a>
                                    </div>

                                    <div className="p-2 mt-3">
                                        <form>
                                            <div className="input-group auth-form-group-custom mb-3">
                                                <span
                                                    className="input-group-text bg-primary bg-opacity-10 fs-16 "
                                                    id="basic-addon1"
                                                >
                                                    <i className="mdi mdi-account-outline auti-custom-input-icon"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter username"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                    name="username"
                                                    onChange={handleChange}
                                                />

                                            </div>
                                            <div>
                                                {formErr.username && <p className="err">{formErr.username}</p>}
                                                {formErr.notValidUsername && !formErr.username && <p className="err">{formErr.notValidUsername}</p>}
                                            </div>

                                            <div className="input-group auth-form-group-custom mb-3">
                                                <span
                                                    className="input-group-text bg-primary bg-opacity-10 fs-16"
                                                    id="basic-addon2"
                                                >
                                                    <i className="mdi mdi-lock-outline auti-custom-input-icon"></i>
                                                </span>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="userpassword"
                                                    placeholder="Enter password"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                    name="password"
                                                    onChange={handleChange}
                                                />

                                            </div>
                                            <div>
                                                {formErr.password && <p class="err">{formErr.password}</p>}
                                            </div>

                                            <div className="pt-3 text-center">
                                                <button
                                                    className="btn btn-primary w-xl waves-effect waves-light"
                                                    type="button"
                                                    onClick={handleSubmit}
                                                >
                                                    Log In
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserInfoContext.Provider>
        </>
    );
};

export default Login;
