import express from "express";
//services
import { getPosts, postPost, putPost } from "../services/post";

function post(app) {
  const router = express.Router();
  app.use("/api/post", router);

  //methods
  router.get("/", (req, res) => getPosts(req, res));
  router.post("/", (req, res) => postPost(req, res));
  router.put("/:id", (req, res) => putPost(req, res));
}
export default post;
