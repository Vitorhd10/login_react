import "./Login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import Modal from "../modal";
import { login } from "./auth";
import { history } from "../history";
import axios from "axios";

function App() {
  const handleSignIn = () => {
    login("abc123");
    history.push("/");
  };

  const [openModal, setOpenModal] = useState(false);

  const handleClickLogin = (values) => {
    axios
      .post("http//localhost:8080/v1/api/auth", values)
      .then(resp => {
    const { data } = resp
    if (data) {
      localStorage.setItem('app-token', data)
      history.push('/')
    }
  })
  };

  const validationLogin = yup.object().shape({
    email: yup
      .string()
      .email("Não é um email")
      .required("Este campo é obrigatorio"),
    password: yup
      .string()
      .min(6, "A senha deve ter 6 caracteres")
      .required("Este campo é obrigatorio"),
  });

  return (
    <div className="container">
      <h1>Login</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleClickLogin}
        validationSchema={validationLogin}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="email" className="form-field" placeHolder="Email" />
            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          <div className="login-form-group">
            <Field
              type="password"
              name="password"
              className="form-field"
              placeHolder="Senha"
            />
            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>
          <button type="submit" className="button">
            Login
          </button>
          <div>
            <button
              className="openModalBtn"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Novo Usuario
            </button>
            {openModal && <Modal closeModal={setOpenModal} />}
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
