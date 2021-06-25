import classNames from "classnames";

export default function Loading(props) {
  const { isLoading } = props;
  return (
    <div className={classNames("loading", { show: isLoading })}>
      <div className="lds-dual-ring">
        <div></div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
