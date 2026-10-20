const { Router } = require("express");
const { userRouter } = require("./user/user.route");
const { postRouter } = require("./post/post.route");
const { commentRouter } = require("./comment/comment.route");
const router = Router();

router.use("/users", userRouter);
router.use("/posts", postRouter);
router.use("/comments", commentRouter);

module.exports = {
  router,
};
