import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


const Register = () => {

    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [successful, setSuccess] = useState(false);
    const [errorMessage, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = { username, password, email };
        setError('Please wait')

        axios.post('http://localhost:5050/iut-cse/admin/register', formData)
            .then((response) => {
                console.log(response.data);
                setSuccess(true);
                // Optionally, display a success message or reset the form here
            })
            .catch((error) => {
                console.error('Error saving information:', error);
                if (error.response)
                    setError(error.response.data.error);
                else
                    setError('Could not connect to server')
                // Optionally, display an error message or handle errors here
            });
    };

    const RenderForm = (
        <div>
            {/* Meta tags */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <title>Pages / Register - NiceAdmin Bootstrap Template</title>
            <meta name="description" content="" />
            <meta name="keywords" content="" />

            {/* Favicons */}
            <link rel="icon" href="assets/img/favicon.png" />
            <link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png" />

            {/* Google Fonts */}
            <link href="https://fonts.gstatic.com" rel="preconnect" />
            <link
                href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
                rel="stylesheet"
            />

            {/* Vendor CSS Files */}
            <link href="../src/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
            <link href="../src/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
            <link href="../src/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
            <link href="../src/assets/vendor/quill/quill.snow.css" rel="stylesheet" />
            <link href="../src/assets/vendor/quill/quill.bubble.css" rel="stylesheet" />
            <link href="../src/assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
            <link href="../src/assets/vendor/simple-datatables/style.css" rel="stylesheet" />

            {/* Template Main CSS File */}
            <link href="../src/assets/css/style.css" rel="stylesheet" />

            {/* Your HTML content */}
            <main>
                <div className="container">
                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                                                <p className="text-center small">Enter your personal details to create account</p>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="col-12">
                                                    <label htmlFor="yourName" className="form-label">Your Name</label>
                                                    <input type="text" name="uname" value={username} onChange={(e) => setName(e.target.value)} required />
                                                    <div className="invalid-feedback">Please, enter your name!</div>
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourEmail" className="form-label">Your Email</label>
                                                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                                                    <div className="invalid-feedback">Please enter a valid Email address!</div>
                                                </div>
                                                <div className="col-12">

                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourPassword" className="form-label">Password</label>
                                                    <input type="password" name="pass" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                                    <div className="invalid-feedback">Please enter your password!</div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-check">
                                                        <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                                                        <label className="form-check-label" htmlFor="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                                                        <div className="invalid-feedback">You must agree before submitting.</div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100" type="submit">Create Account</button>
                                                </div>
                                                <div className="col-12">
                                                    <p className="small mb-0">Already have an account? <a href="/admin/login">Log in</a></p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    )

    if (!successful) return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                {RenderForm}
                <span className='error'>{errorMessage}</span><br />
                <Link to="/admin/login">Go Back</Link>
            </div>
        </div>
    );
    else return (
        <div className="app">
            <div className="login-form">
                <div className="title">Registration Successful!</div>
                <Link to="/admin/login">Go Back</Link>
            </div>
        </div>
    );
}


export default Register;