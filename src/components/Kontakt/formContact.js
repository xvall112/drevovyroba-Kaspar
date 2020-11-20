import React from "react"
import { useFormik } from "formik"
import * as yup from "yup"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { IoMdSend } from "react-icons/io"
import styled from "styled-components"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import cogoToast from "cogo-toast"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const validationSchema = yup.object({
  name: yup.string("Jmeno").required("Vyplňte jméno"),
  email: yup
    .string("Email")
    .email("Napište email ve správném tvaru")
    .required("Vyplňte email"),
  zprava: yup.string("Enter your email").required("Napiš zprávu"),
})

const FormContact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      zprava: "",
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "KontaktniFormular",
          ...values,
        }),
      })
        .then(() => {
          cogoToast.success("Zpráva byla odeslána", {
            position: "bottom-left",
          })
          formik.resetForm()
        })
        .catch(error => cogoToast.alert(error, { position: "bottom-left" }))
    },
  })

  return (
    <Wrapper>
      <h2>Napiš...</h2>
      <ThemeProvider theme={theme}>
        <form
          onSubmit={formik.handleSubmit}
          data-netlify="true"
          name="KontaktniFormular"
          method="post"
        >
          <input type="hidden" name="KontaktniFormular" value="contact" />

          <div className="field">
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Jméno"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </div>
          <div className="field">
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          <div className="field">
            <TextField
              multiline
              rows={4}
              fullWidth
              id="zprava"
              name="zprava"
              label="Zpráva"
              value={formik.values.zprava}
              onChange={formik.handleChange}
              error={formik.touched.zprava && Boolean(formik.errors.zprava)}
              helperText={formik.touched.zprava && formik.errors.zprava}
            />
          </div>
          <div className="field">
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              endIcon={<IoMdSend>send</IoMdSend>}
            >
              Odeslat
            </Button>
          </div>
        </form>
      </ThemeProvider>
    </Wrapper>
  )
}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#b39987",
      main: "#a1806a",
      dark: "#70594a",
      contrastText: "#fff",
    },
  },
})

const Wrapper = styled.div`
  margin-top: 15px;
  .field {
    min-height: 70px;
    padding: 20px;
  }
`
export default FormContact
