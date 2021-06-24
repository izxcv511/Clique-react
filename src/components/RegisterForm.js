import { Link } from "react-router-dom";

import FormInput from "./FormInput";
import FormButton from "./FormButton";
import FormTextarea from "./FormTextarea";

export default function RegisterForm() {
  return (
    <form className="register-form" action="">
      <FormInput form="register" type="text" id="talent-name" />
      <FormInput form="register" type="url" id="website" />
      <FormInput form="register" type="text" id="contact" />
      <FormInput form="register" type="url" id="facebook" />
      <FormInput form="register" type="tel" id="phone" />
      <FormInput form="register" type="url" id="instagram" />
      <FormInput form="register" type="email" id="email" />
      <FormInput form="register" type="url" id="twitter" />
      <FormInput form="register" type="password" id="password" />
      <FormInput form="register" type="password" id="confirm-password" />
      <FormTextarea form="register" id="desc" content="Description of talent" />
      <FormButton form="register" type="reset" modifier="none" content="Back" />
      <FormButton
        form="register"
        type="submit"
        modifier="green"
        content="Next"
      />
      <p className="register__sign-in">
        Already have a Clique account? <Link to="/sign-in">Sign in </Link>
      </p>
    </form>
  );
}
