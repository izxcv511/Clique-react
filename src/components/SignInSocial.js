export default function SignInSocial() {
  return (
    <div className="sign-in-social">
      <button className="sign-in-social__item sign-in-social__item--twitter">
        <i className="sign-in-social__icon fab fa-twitter"></i>
        <span className="sign-in-social__text">Twitter log in</span>
      </button>
      <button className="sign-in-social__item sign-in-social__item--facebook">
        <i className="sign-in-social__icon fab fa-facebook-square"></i>
        <span className="sign-in-social__text">Facebook log in</span>
      </button>
    </div>
  );
}