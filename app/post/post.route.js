const { Router } = require("express");
const postRouter = Router();
const postController = require("./post.controller");

postRouter.post("/", postController.createPost);
postRouter.delete("/:id", postController.deletePost);
postRouter.get("/details", postController.getPostsByDetails);
postRouter.get("/comment-count", postController.getPostsWithCommentCount);

module.exports = {
  postRouter,
};
