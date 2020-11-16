import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { IoMdSend } from "react-icons/io"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const KontaktForm = () => {
  return (
    <Wrapper>
      <div className="contactForm mt-4">
        <h2>Napiš...</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Vyplňte jméno"),
            email: Yup.string()
              .email("Špatný tvar emailu")
              .required("Není vyplňeno"),
            message: Yup.string().required("Není vyplňeno"),
          })}
          onSubmit={(values, actions) => {
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "Kontaktni Formular", ...values }),
            })
              .then(() => {
                alert("Děkujeme. Zpráva byla odeslána. Brzy se ozveme")
                actions.resetForm()
              })
              .catch(() => {
                alert("Něco se pokazilo. Zkuste formulář odeslat znovu")
              })
              .finally(() => actions.setSubmitting(false))
          }}
        >
          {() => (
            <Form name="kontaktniFormular">
              <Row>
                <Col xs={12}>
                  <div className="inputBox">
                    <Field name="name" component="input" required />
                    <span htmlFor="name">Jméno </span>

                    <div className="err">
                      <ErrorMessage name="name" />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <div className="inputBox">
                    <Field name="email" component="input" required />
                    <span htmlFor="email">Email </span>

                    <div className="err">
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <div className="inputBox">
                    <Field
                      name="message"
                      component="textarea"
                      rows="3"
                      required
                    />
                    <span htmlFor="message">Zpráva</span>

                    <div className="err">
                      <ErrorMessage name="message" />
                    </div>
                  </div>
                </Col>
              </Row>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="mt-3"
                endIcon={<IoMdSend>send</IoMdSend>}
              >
                Odeslat
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Wrapper>
    /* <form>
      <h2>Napiš...</h2>
      <div className="inputBox">
        <input type="text" name="" required="ruquired" />
        <span>Jmeno</span>
      </div>
      <div className="inputBox">
        <input type="email" name="" required="ruquired" />
        <span>Email</span>
      </div>
      <div className="inputBox">
        <textarea type="text" name="" required="ruquired" />
        <span>Zpráva</span>
      </div>
      <div className="inputBox">
        <input
          type="submit"
          name=""
          value="Odeslat"
          style={{ borderRadius: "5px" }}
        />
      </div>
    </form> */
  )
}

const Wrapper = styled.div`
  width: 100%;
  .MuiButton-containedPrimary {
    background-color: var(--clr-primary);
    &:hover {
      background-color: green;
    }
  }
  .err {
    color: red;
    height: 20px;
    margin-top: -5px;
  }
  .contactForm {
    width: 100%;
    padding: 40px;
    background: var(--clr-fourth);
    border-radius: 5px;

    h2 {
      font-size: 30px;
      color: #333;
      font-weight: 500;
    }

    .inputBox {
      position: relative;
      width: 100%;
      margin-top: 10px;
    }

    .inputBox input,
    .inputBox textarea {
      width: 100%;
      padding: 5px 0;
      font-size: 16px;
      margin: 10px 0;
      border: none;
      border-bottom: 2px solid #333;
      outline: none;
      resize: none;
    }

    .inputBox span {
      position: absolute;
      left: 0;
      padding: 5px 0;
      font-size: 16px;
      margin: 10px 0;
      pointer-events: none;
      transition: 0.5s;
      color: #666;
    }
    .inputBox input:focus ~ span,
    .inputBox input:valid ~ span,
    .inputBox textarea:focus ~ span,
    .inputBox textarea:valid ~ span {
      color: var(--clr-primary);
      font-size: 12px;
      transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -webkit-transform: translateY(-20px);
    }

    .inputBox input[type="submit"] {
      width: 100px;
      background: var(--clr-primary);
      color: #fff;
      border: none;
      cursor: pointer;
      padding: 10px;
      font-size: 18px;
    }
  }
`
export default KontaktForm
