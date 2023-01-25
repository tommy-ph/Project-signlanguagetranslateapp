import { useForm } from "react-hook-form";
import "./loginform.css";
const usernameConfig = {
  required: true,
  minLength: 3,
};

const LoginForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    props.getSubmitedValue(data.username);
  };

  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }

    if (errors.username.type === "required") {
      return <span> Username is required</span>;
    }
    if (errors.username.type === "minLength") {
      return (
        <span> Username is too short, it has to be at least 3 characters</span>
      );
    }
  })();
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="sub-form-container">
          <i className="icon">icon</i>
          <fieldset className="fieldset">
            <input
              className=""
              type="text"
              placeholder="What's your name? "
              {...register("username", usernameConfig)}
            />
            {errorMessage}
          </fieldset>
          <button className="submit-btn" type="submit"></button>
        </div>
      </form>
    </>
  );
};
export default LoginForm;
