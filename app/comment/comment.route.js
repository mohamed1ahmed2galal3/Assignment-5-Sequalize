const { Router } = require("express");
const commentRouter = Router();
const commentController = require("./comment.controller");

commentRouter.post("/", commentController.createBulkComments);
commentRouter.patch("/:commentId", commentController.updateCommentById);
commentRouter.post("/find-or-create", commentController.findOrCreateComment);
commentRouter.get("/search", commentController.getCommentsByContentWord);
commentRouter.get(
  "/newest/:postId",
  commentController.getRecentCommentsForPost,
);
commentRouter.get("/details/:id", commentController.getCommentDetails);

module.exports = {
  commentRouter,
};
