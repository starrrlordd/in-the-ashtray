import classes from "../styles/SignInForm.module.css";

const SignInForm = () => {
  return (
    <div>
      <form className={classes.signInForm}>
        <input id="email" name="email" required placeholder="Email"/>
        <input id="password" name="password" required placeholder="Password"/>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
