const postService = require("./post.service");
// create a new post with the given title, content, and userId
async function createPost(req, res, next) {
  try {
    // extract data from the request body
    const { title, content, userId } = req.body;
    // call the service to create a new post
    const post = await postService.createPost(title, content, userId);
    // send a success response
    res.status(201).json({
      message: "Post created successfully",
      success: true,
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create post",
      success: false,
      error: error.message,
    });
  }
}

// delete post by id
async function deletePost(req, res, next) {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    await postService.deletePost(id, userId);
    res.status(200).json({
      message: "Post deleted successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

// get posts by details
async function getPostsByDetails(req, res, next) {
  try {
    const posts = await postService.getPostsByDetails();
    res.status(200).json({
      message: "Posts retrieved successfully",
      success: true,
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

// get posts with comment count
async function getPostsWithCommentCount(req, res, next) {
  try {
    const posts = await postService.getPostsWithCommentCount();
    res.status(200).json({
      message: "Posts retrieved successfully",
      success: true,
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

module.exports = {
  createPost,
  deletePost,
  getPostsByDetails,
  getPostsWithCommentCount,
};
