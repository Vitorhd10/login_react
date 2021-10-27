import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./modal.css";


function Modal({ closeModal }) {
  const handleClickRegister = (values) => console.log(values);

  const validationRegister = yup.object().shape({
    email: yup
      .string()
      .email("Não é um email")
      .required("Este campo é obrigatorio"),
    password: yup
      .string()
      .min(6, "A senha deve ter 6 caracteres")
      .required("Este campo é obrigatorio"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas não são iguais"),
  });

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit(){

    const data = {email, senha}

  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        
        <div className="title">
          <h1>Cadastre-se Agora</h1>
        </div>
        <div className="body">
          <Formik
            initialValues={{}}
            onSubmit={handleClickRegister}
            validationSchema={validationRegister}
          >
            <Form className="login-form">
              <div className="login-form-group">
                <Field
                  name="email"
                  className="form-field"
                  placeHolder="Email"
                  value={email}
                  onchange = {e => setEmail(e.target.value)}
                />
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
                  value={senha}
                  onchange = {e => setSenha(e.target.value)}
                />
                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>
              <div className="login-form-group">
                <Field
                  type="password"
                  name="confirmPassword"
                  className="form-field"
                  placeHolder="Confirme sua Senha"
                />
                <ErrorMessage
                  component="span"
                  name="confirmPassword"
                  className="form-error"
                />
              </div>
            </Form>
          </Formik>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)}>Cancelar</button>
          <button>Confirmar</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
