const express = require("express");
const app = express();
const { sequelize } = require("./common/db/connection");
const { User } = require("./common/db/user.model");
const { Post } = require("./common/db/post.model");
const { Comment } = require("./common/db/comment.model");
const { router } = require("./route");

sequelize.sync();

app.use(express.json());
app.use("/api", router);

app.get("/health", async (req, res, next) => {
  const [result] = await sequelize.query("SELECT 1+1 AS sum");
  res.json({
    message: "connection is ok",
    data: result,
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
