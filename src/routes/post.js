import express from "express";
//services
import { getPosts, postPost } from "../services/post";

function post(app) {
  const router = express.Router();
  app.use("/api/post", router);

  //methods
  router.get("/", (req, res) => getPosts(req, res));
  router.post("/", (req, res) => postPost(req, res));
  //router.get("/", (req, res) => getPost(req, res));
}
export default post;
