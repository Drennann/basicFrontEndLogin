import "../index.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { login } from "../api/index";
import { joinClassNames } from "../utils/joinClassNames";
import next from "../svgs/i24-next.svg";
import loader from "../svgs/i24-loader.svg";
import cross from "../svgs/i24-cross.svg";
import { LoginProps, LoginArgument } from "../interfaces/interfaces";

const er = /.@./; // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function Form({ user, setUser }: LoginProps) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginArgument>();

  const onSubmitHandler = handleSubmit(async (e) => {
    setLoading(true);
    const res = await login({ email: e.email, password: e.password });
    console.log(res);
    setUser(res);
    setLoading(false);
  });

  return (
    <form className="formContainer" onSubmit={onSubmitHandler}>
      <h2>Welcome, stranger!</h2>
      <p>
        Please log in to this form if you wish <br></br> to pass the exam.
      </p>
      <div
        className={`inputContainer`}
      >
        <input
          type="text"
          {...register("email", { required: true, pattern: er })}
          placeholder="Email"
          className={user?.error || errors.email ? "BorderError" : ""}
        ></input>
        <img
          src={cross}
          alt="cross"
          className={user?.error || errors.email ? "show" : "hidden"}
        ></img>
      </div>
      {
        <p className={joinClassNames(["error"])}>
          {(user?.error && "Incorrect credentials") ||
            (errors.email && "Incorrect email")}
        </p>
      }
      <div className={`inputContainer`}>
        <input
          className={`${user?.error ? "BorderError" : ""}`}
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        ></input>
        <img
          src={cross}
          alt="cross"
          className={user?.error ? "show" : "hidden"}
        ></img>
      </div>
      {
        <p className={joinClassNames(["error"])}>
          {user?.error && "Incorrect credentials"}
        </p>
      }
      <button>
        {loading ? (
          <img src={loader} alt="loader" id="loader"></img>
        ) : (
          <>
            <p>Login</p>
            <img src={next} alt="next"></img>
          </>
        )}
      </button>
    </form>
  );
}
