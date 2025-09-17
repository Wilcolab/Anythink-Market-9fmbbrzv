
/**
 * @fileoverview API routes for managing comments.
 * Provides endpoints to create, read, update, and delete comments.
 *
 * Routes:
 *   GET    /api/comments         - Get all comments
 *   GET    /api/comments/:id     - Get a comment by ID
 *   POST   /api/comments         - Create a new comment
 *   PUT    /api/comments/:id     - Update a comment by ID
 *   DELETE /api/comments/:id     - Delete a comment by ID
 */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHub Copilot, please help me write the following routes for comments:
// 1. GET /api/comments - Get all comments
// 2. GET /api/comments/:id - Get a comment by ID
// 3. POST /api/comments - Create a new comment
// 4. PUT /api/comments/:id - Update a comment by ID
// 5. DELETE /api/comments/:id - Delete a comment by ID


/**
 * @route GET /api/comments
 * @group Comments - Operations about comments
 * @returns {Array.<Comment>} 200 - An array of comments
 * @returns {Error} 500 - Failed to fetch comments
 */
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});


/**
 * @route GET /api/comments/:id
 * @group Comments
 * @param {string} id.path.required - Comment ID
 * @returns {Comment.model} 200 - The requested comment
 * @returns {Error} 404 - Comment not found
 * @returns {Error} 500 - Failed to fetch comment
 */
router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comment" });
  }
});


/**
 * @route POST /api/comments
 * @group Comments
 * @param {Comment.model} comment.body.required - New comment data
 * @returns {Comment.model} 201 - Created comment
 * @returns {Error} 400 - Failed to create comment
 */
router.post("/", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(400).json({ error: "Failed to create comment" });
  }
});


/**
 * @route PUT /api/comments/:id
 * @group Comments
 * @param {string} id.path.required - Comment ID
 * @param {Comment.model} comment.body.required - Updated comment data
 * @returns {Comment.model} 200 - Updated comment
 * @returns {Error} 404 - Comment not found
 * @returns {Error} 400 - Failed to update comment
 */
router.put("/:id", async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json(updatedComment);
  } catch (err) {
    res.status(400).json({ error: "Failed to update comment" });
  }
});


/**
 * @route DELETE /api/comments/:id
 * @group Comments
 * @param {string} id.path.required - Comment ID
 * @returns {object} 200 - Success message
 * @returns {Error} 404 - Comment not found
 * @returns {Error} 500 - Failed to delete comment
 */
router.delete("/:id", async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});