import classNames from "classnames";

export default function FormButton(props) {
  const { form, modifier, type, content, handleClickButton } = props;
  return (
    <button
      className={classNames([`${form}-form__button`], [`btn--${modifier}`])}
      type={type}
      onClick={handleClickButton}
    >
      {content}
    </button>
  );
}
