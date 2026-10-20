const commentService = require("./comment.service");

async function createBulkComments(req, res, next) {
  try {
    const { comments } = req.body;

    const createdComments = await commentService.createBulkComments(comments);
    res.status(201).json({
      message: "Bulk comments created successfully",
      success: true,
      data: createdComments,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal server error",
      success: false,
    });
  }
}

// update comment by id & ensure that the comment belongs to the user
async function updateCommentById(req, res, next) {
  try {
    const { commentId } = req.params;
    const { userId } = req.body;
    const updatedData = req.body;
    await commentService.updateCommentById(commentId, userId, updatedData);
    res.status(200).json({
      message: "Comment updated successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal server error",
      success: false,
    });
  }
}

// find or create comment
async function findOrCreateComment(req, res, next) {
  try {
    const { postId, userId, content } = req.body;
    const { comment, created } = await commentService.findOrCreateComment(
      postId,
      userId,
      content,
    );
    res.status(200).json({
      message: created
        ? "Comment created successfully"
        : "comment fetched successfully",
      success: true,
      data: comment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal server error",
      success: false,
    });
  }
}

// Retrieve all comments that contain a specific word in their content and return the number of comments matched
async function getCommentsByContentWord(req, res, next) {
  try {
    const { word } = req.query;
    const { comments, count } =
      await commentService.getCommentsByContentWord(word);
    res.status(200).json({
      message: "Comments retrieved successfully",
      count: count,
      success: true,
      data: comments,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal server error",
      success: false,
    });
  }
}

//Retrieve the 3 most recent comments for a specific post, ordered by creation date.
async function getRecentCommentsForPost(req, res, next) {
  try {
    const { postId } = req.params;
    const comments = await commentService.getRecentCommentsForPost(postId);
    res.status(200).json({
      message: "comments fetched successfully ",
      success: true,
      comments,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal server error",
      success: false,
    });
  }
}

// Get Specific Comment By PK with User and Post Information. (0.5 Grade)
async function getCommentDetails(req, res, next) {
  try {
    const { id } = req.params;
    const comment = await commentService.getCommentDetails(id);
    res.status(200).json({
      message: "comment fetched successfully",
      success: true,
      comment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal server error",
      success: false,
    });
  }
}

module.exports = {
  createBulkComments,
  updateCommentById,
  findOrCreateComment,
  getCommentsByContentWord,
  getRecentCommentsForPost,
  getCommentDetails,
};
