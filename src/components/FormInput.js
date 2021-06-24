import classNames from "classnames";

export default function FormInput(props) {
  const { type, id, isInvalid, form, value, handleChangeValue } = props;
  const textLabel = id.split("-").join(" ");
  return (
    <div
      className={classNames([`${form}-form__item`], [`${form}-form__${id}`], {
        invalid: !isInvalid,
      })}
    >
      <div className={classNames([`${form}-form__content`])}>
        <input
          className={classNames([`${form}-form__input`])}
          type={type}
          name={type}
          placeholder={id}
          id={id}
          value={value}
          onChange={handleChangeValue}
        />
        <label className={classNames([`${form}-form__label`])} htmlFor={id}>
          {textLabel}
        </label>
      </div>
      <div className={classNames([`${form}-form__invalid`])}>
        <p>{`Invalid ${id} format`}</p>
      </div>
    </div>
  );
}
