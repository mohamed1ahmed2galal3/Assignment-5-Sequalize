const postRepository = require("./post.repository");
// create a new post with the given title, content, and userId
async function createPost(title, content, userId) {
  const post = await postRepository.createPost(title, content, userId);
  return post;
}

// delete post by id
async function deletePost(postId, userId) {
  // check if the post exists
  const post = await postRepository.getPostById(postId);
  if (!post) {
    throw new Error("Post not found");
  }
  // check if the user is the owner of the post
  if (post.userId !== userId) {
    throw new Error("You are not authorized to delete this post");
  }
  // delete the post
  const deletedRows = await postRepository.deletePost(postId);
  if (deletedRows === 0) {
    throw new Error("Failed to delete post");
  }
}

// Retrieve posts by it's details
async function getPostsByDetails() {
  // call the repository to get posts by details
  const posts = await postRepository.getPostsByDetails();
  return posts;
}

// retrieve a posts with it's comment count
async function getPostsWithCommentCount() {
  // call the repository to get posts with comment count
  const posts = await postRepository.getPostsWithCommentCount();
  return posts;
}

module.exports = {
  createPost,
  deletePost,
  getPostsByDetails,
  getPostsWithCommentCount,
};
