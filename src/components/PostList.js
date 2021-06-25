import React from "react";

import PostItem from "./PostItem";

import { getListPost, reactionLove, unReactionLove } from "../plugins/axios";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      pageIndex: 0,
      loadPost: true,
    };
    this.handleClickReaction = this.handleClickReaction.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.addPosts = this.addPosts.bind(this);
  }
  componentDidMount() {
    this.addPosts(0);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.category !== this.props.category) {
      this.setState(() => {
        this.addPosts(0);

        return {
          posts: [],
          pageIndex: 0,
          loadPost: false,
        };
      });
    }
    if (
      prevState.pageIndex !== this.state.pageIndex &&
      this.state.loadPost &&
      this.state.loadPost === prevState.loadPost
    ) {
      this.addPosts(this.state.pageIndex);
    }
    if (!this.state.loadPost) {
      this.setState({
        loadPost: true,
      });
    }
  }
  handleScroll() {
    let el = document.querySelector("section.post");
    if (window.innerHeight + window.scrollY >= el.offsetHeight) {
      let { pageIndex } = this.state;
      if (pageIndex < 4) {
        window.removeEventListener("scroll", this.handleScroll);
        pageIndex++;
        this.setState({
          pageIndex: pageIndex,
        });
      }
    }
  }
  addPosts(pageIndex) {
    let posts;
    if (pageIndex === 0) {
      posts = [];
    } else {
      posts = this.state.posts;
    }
    getListPost({ pageIndex }).then((resp) => {
      if (resp.ok) {
        const { category } = this.props;
        let listPost = [];
        let temp = [];
        if (category) {
          temp = resp.data.fanFeedResponses.filter((post) => {
            return post.collection === category;
          });
        } else {
          temp = [...resp.data.fanFeedResponses];
        }
        listPost = [...posts, ...temp];
        this.setState({
          posts: listPost,
          pageIndex: pageIndex,
        });
        window.addEventListener("scroll", this.handleScroll);
      }
    });
  }
  handleClickReaction(id, isFavorite, index) {
    if (!isFavorite) {
      reactionLove({ id }).then((resp) => {
        if (resp.ok) {
          let posts = this.state.posts;
          posts[index].reaction = "love";
          posts[index].totalEmotion.totalLove++;
          this.setState({
            posts: posts,
          });
        } else {
          this.props.notifyWarn(resp.error);
        }
      });
    } else {
      unReactionLove({ id }).then((resp) => {
        if (resp.ok) {
          let posts = this.state.posts;
          posts[index].reaction = "";
          posts[index].totalEmotion.totalLove--;
          this.setState({
            posts: posts,
          });
        } else {
          this.props.notifyWarn(resp.error);
        }
      });
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    const { posts } = this.state;
    const { handleClickReaction } = this;
    return (
      <main className="main">
        <div className="container">
          <section className="post">
            {posts.map((item, index) => (
              <PostItem
                key={item.id}
                item={item}
                index={index}
                handleClickReaction={handleClickReaction}
              />
            ))}
          </section>
        </div>
      </main>
    );
  }
}

export default PostList;
