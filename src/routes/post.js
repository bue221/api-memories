import express from "express";
//services
import {
  getPosts,
  postPost,
  putPost,
  deletePost,
  putPostLike,
} from "../services/post";

function post(app) {
  const router = express.Router();
  app.use("/api/post", router);

  //methods
  router.get("/", (req, res) => getPosts(req, res));
  router.post("/", (req, res) => postPost(req, res));
  router.put("/:id", (req, res) => putPost(req, res));
  router.delete("/:id", (req, res) => deletePost(req, res));
  router.put("/:id/likepost", (req, res) => putPostLike(req, res));
}
export default post;
