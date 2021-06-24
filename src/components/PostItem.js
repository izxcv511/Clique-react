import classNames from "classnames";

export default function PostItem(props) {
  const { handleClickReaction,index } = props;
  const {
    id,
    externalImageUrl,
    title,
    collection,
    createdDate,
    description,
    reaction,
    totalComment,
    totalEmotion,
  } = props.item;
  const isFavorite = reaction === "love" ? true : false;
  const { totalLove } = totalEmotion;
  return (
    <article className="post__item">
      {externalImageUrl && (
        <img className="post__image" src={externalImageUrl} alt={id} />
      )}
      <span className="post__title">{title}</span>
      <p className="post__desc">{description}</p>
      <span className="post__category">{collection}</span>
      <div className="post__footer">
        <span className="post__time">{createdDate}</span>
        <div className="post-interactive">
          <div
            className={classNames(
              "post-interactive__item interactive-favorite",
              {
                "isFavorite": isFavorite,
              }
            )}
          >
            <i
              className="fas fa-heart post-interactive__icon"
              onClick={() => {
                handleClickReaction(id,isFavorite,index);
              }}
            ></i>
            <span className="post-interactive__number">{totalLove}</span>
          </div>
          <div className="post-interactive__item interactive-comment">
            <i className="fas fa-comment post-interactive__icon"></i>
            <span className="post-interactive__number">{totalComment}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
