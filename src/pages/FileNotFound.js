import FormButton from "../components/FormButton";

export default function fileNotFound(props) {
  return (
    <div className="fileNotFound">
      <FormButton
        form="fileNotFound"
        type="submit"
        modifier="green"
        content="Back to home"
        handleClickButton={function () {
          props.history.push("/");
        }}
      />
    </div>
  );
}
