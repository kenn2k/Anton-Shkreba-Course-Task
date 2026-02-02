import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { registerUser } from "../../api/actions/userActions";
import { useAppDispatch } from "../../store/hooks";

import type { User } from "../../types";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string().min(8, "Minimum 8 characters").required("Required"),
  });

  const handleFormData = async (values: User) => {
    try {
      await dispatch(registerUser(values)).unwrap();
      navigate("/user/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 400,
        width: "100%",
        p: { xs: 3, sm: 4 },
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        sx={{
          mb: 3,
          color: "primary.main",
          fontWeight: 600,
        }}
      >
        Create Account
      </Typography>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={registerSchema}
        onSubmit={handleFormData}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off">
            <Stack spacing={3}>
              <Field
                as={TextField}
                fullWidth
                required
                id="username"
                label="Enter Username"
                name="username"
                variant="outlined"
                type="text"
                error={Boolean(touched.username && errors.username)}
                helperText={touched.username && errors.username}
              />
              <Field
                as={TextField}
                fullWidth
                required
                id="password"
                label="Password"
                name="password"
                variant="outlined"
                type="password"
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />
              <Button
                fullWidth
                variant="contained"
                size="large"
                type="submit"
                sx={{ mt: 2 }}
              >
                Register
              </Button>
              <Typography variant="body2" sx={{ marginTop: 2 }}>
                Already have an account?
                <Link
                  to="/user/login"
                  style={{
                    textDecoration: "none",
                    color: "#646cff",
                    marginLeft: "0.5rem",
                  }}
                >
                  Login here
                </Link>
              </Typography>
            </Stack>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};
