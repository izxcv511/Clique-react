export default function NavHome(props) {
  const { handleChangeCategory } = props;
  return (
    <nav className="nav">
      <div className="container">
        <ul className="nav__list">
          <li className="nav-item">
            <div
              className="nav-item__link"
              onClick={() => {
                handleChangeCategory("news");
              }}
            >
              News
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-item__link"
              onClick={() => {
                handleChangeCategory("event");
              }}
            >
              Event
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-item__link"
              onClick={() => {
                handleChangeCategory("result");
              }}
            >
              Result
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-item__link"
              onClick={() => {
                handleChangeCategory("photo");
              }}
            >
              Photo
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-item__link"
              onClick={() => {
                handleChangeCategory("video");
              }}
            >
              Video
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-item__link"
              onClick={() => {
                handleChangeCategory("audio");
              }}
            >
              Audio
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-item__link"
              onClick={() => {
                handleChangeCategory("status");
              }}
            >
              Status
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
