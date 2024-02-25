import Data from "../models/formSchema.js";

export const addData = async (req, res) => {
  const {
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
    // Check if all required fields are present and non-null
    if (
      firstName &&
      lastName &&
      username &&
      email &&
      githubProfile &&
      linkedinProfile &&
      skill &&
      aboutMe
    ) {
      // Check if username is not null or empty string
      if (!username.trim()) {
        return res.status(400).json({ message: "Username cannot be empty" });
      }
      
      const isData = await Data.findOne({ username });
      if (isData) {
        return res
          .status(208)
          .json({ message: "This userName already present" });
      } else {
        const newData = await Data({
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
    } else {
      return res.status(208).json({ message: "Please provide full details" });
    }
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
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
    const username = req.params.id;
    const data = await Data.findOne({ username: username });
    res.status(200).json(data);
  } catch (e) {
    console.log("Error, find in data By  given ID  due to ", e.message);
    return res.status(500).json(e.message);
  }
};
