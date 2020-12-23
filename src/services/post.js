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

export const putPost = async (req, res)=> {
  const { id: _id } = req.params;

}