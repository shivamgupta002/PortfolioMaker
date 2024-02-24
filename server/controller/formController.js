import Data from "../models/formSchema.js";

export const addData = async (req, res) => {
  const {
    id,
    firstName,
    lastName,
    username,
    email,
    githubProfile,
    linkedinProfile,
    skill,
    aboutMe,
  } = req.body;
  try {
    if (
      id &&
      firstName &&
      lastName &&
      username &&
      email &&
      githubProfile &&
      linkedinProfile &&
      skill &&
      aboutMe
    ) {
      const isData = await Product.findOne({ username });
      if (isData) {
        return res
          .status(208)
          .json({ message: "This userName already present" });
      } else {
        const newData = await Data({
          id,
          firstName,
          lastName,
          username,
          email,
          githubProfile,
          linkedinProfile,
          skill,
          aboutMe,
        }).save();
        if (newData) {
          return res.status(201).json({ message: "Data Save Successfully" });
        } else {
          return res.status(209).json({ message: "Data Not save" });
        }
      }
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const getData = async (req, res) => {
  try {
    const data = await Data.find({});
    return res.status(200).json(data);
  } catch (err) {
    console.log(err.message);
  }
};

export const getDataById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Data.findOne({ id: id });
    res.status(200).json(data);
  } catch (e) {
    console.log("Error, find in data By  given ID  due to ", e.message);
    return res.status(500).json(e.message);
  }
};
