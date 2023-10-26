// export register component with h1 tag
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useUser } from "../contexts/UserContext";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validateToken from "../helpers/validateToken";

export const Login = () => {
  const { setUser } = useUser();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkTOKEN() {
      try {
        let result = await validateToken();
        if (result.success) {
          setUser(result.user);
          navigate("/client");
        }
      } catch (error) {
        console.log("hhhh");
      }
    }

    checkTOKEN();
  }, []);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(8).max(16),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    await axios
      .post("http://localhost:3000/api/auth/login", data)
      .then((response) => {
        try {
          setUser(response.data.user);
          navigate("/client");
        } catch (error) {
          console.log(error);
        }
      })
      .catch((error) => {
        console.log(error.response.data.error);
        setError(error.response.data.error);
      });
  };

  return (
    <div>
      <h1> this is the Login</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          style={{ maxWidth: "400px", marginLeft: "auto", marginRight: "auto" }}
        >
          {success && (
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              {success}
            </Alert>
          )}
          {error && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert>
          )}
          <div>
            <TextField
              error={!!errors.email}
              label="email"
              {...register("email")}
            />
            {errors.email && (
              <p style={{ margin: 0, color: "red" }}>{errors.email.message}</p>
            )}
          </div>
          <div>
            <TextField
              type="password"
              error={!!errors.password}
              label="password"
              {...register("password")}
            />
            {errors.password && (
              <p style={{ margin: 0, color: "red" }}>
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </div>
  );
};
