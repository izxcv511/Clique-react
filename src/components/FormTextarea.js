import classNames from "classnames";

export default function FormTextarea(props) {
    const {form, id, content} = props;
  return (
    <div className={classNames([`${form}-form__item`], [`${form}-form__${id}`])}>
      <div className={classNames([`${form}-form__content`])}>
        <textarea
          className={classNames([`${form}-form__input`])}
          placeholder={content}
          id={id}
          rows="3"
        ></textarea>
        <label className={classNames([`${form}-form__label`])} htmlFor={id}>
          {content}
        </label>
      </div>
    </div>
  );
}
