import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { apiClient } from "../utils/httpClient";
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
        if (!loginForm.name) {
            formIsValid = false;
            errors.name = "Please enter your name.";
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
        try {
            const response = await apiClient.post('/login', loginForm);
            console.log(response)
            if (response.data.status) {
                setUser(response.data.user);
                localStorage.setItem('adminToken', response.data.token);
                navigation('/dashboard');
                setLoader(false);
            }
        } catch (error) {
            console.log('Error', error);

        } finally {
            setLoader(false);
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
                                                    placeholder="Enter name"
                                                    aria-label="name"
                                                    aria-describedby="basic-addon1"
                                                    name="name"
                                                    onChange={handleChange}
                                                />

                                            </div>
                                            <div>
                                                {formErr.name && <p className="err">{formErr.name}</p>}
                                                {formErr.notValidname && !formErr.name && <p className="err">{formErr.notValidname}</p>}
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
                                                    aria-label="name"
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
