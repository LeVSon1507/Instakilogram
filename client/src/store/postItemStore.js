import { observable, action, makeObservable } from "mobx";

class PostItemStore {
  postItem = null;

  constructor() {
    makeObservable(this, {
      postItem: observable,
      setPostItem: action,
    });
  }

  setPostItem(postItem) {
    this.postItem = postItem;
    console.log("postItem", postItem);
  }
  updateLike(index, userId) {
    const arrayPostItem = this.postItem[index];
    if (this.postItem && arrayPostItem) {
      const arrayPostLike = arrayPostItem.likes;
      if (arrayPostLike.includes(userId)) {
        const updatedPost = arrayPostLike.filter((id) => id !== userId);
        arrayPostItem.likes = updatedPost;
      } else {
        const updatedPost = arrayPostLike.concat(userId);
        arrayPostItem.likes = updatedPost;
      }
      this.postItem = [...this.postItem];
    }
  }
  updateComment(index, userId, content, instaName, avatar) {
    const arrayComment = this.postItem[index]?.comments;
    if (this.postItem && arrayComment) {
      arrayComment.push({
        userId: {
          instaName: instaName,
          avatar: avatar,
        },
        content: content,
        _id: userId,
      });
      this.postItem = [...this.postItem];
    }
  }
  deletePost(index) {
    if (this.postItem) {
      this.postItem.splice(index, 1);
      this.postItem = [...this.postItem];
    }
  }
}

const postItemStore = new PostItemStore();

export default postItemStore;
