import mongoose from "mongoose";
import PostMessage from "../models/post";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostMessage.find();
    res.status(200).json({
      state: "success",
      data: posts,
    });
  } catch (err) {
    res.status(400).json({ state: "Algo salio mal" });
  }
};

export const postPost = async (req, res) => {
  const data = req.body;
  const newPost = new PostMessage(data);
  try {
    await newPost.save();
    res.status(201).json({ postCreated: newPost });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const putPost = async (req, res) => {
  const { id: _id } = req.params;
  const data = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, data, {
    new: true,
  });

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  //validar _id
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");
  // se elimina el post de la base de datos
  const deletePost = await PostMessage.findByIdAndDelete(_id);
  res.json(deletePost);
};
