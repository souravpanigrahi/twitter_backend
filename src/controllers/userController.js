const UserService = require("../services/user-services");

const userService = new UserService();

const createUser = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const response = await userService.signUp(data);

    return res.status(201).json({
      success: true,
      message: "Succesfully created an user",
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error Encountered ",
      data: {},
      error: error,
    });
  }
};
const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await userService.getUser(id);
    return res.status(201).json({
      success: true,
      message: "Succesfully fetched an user",
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error Encountered ",
      data: {},
      error: error,
    });
  }
};

const SignInUser = async (req, res) => {
  try {
    const data = req.body;
    //console.log(data);
    const response = await userService.signIn(data);

    return res.status(201).json({
      success: true,
      message: "Succesfully signed in an user",
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error Encountered ",
      data: {},
      error: error,
    });
  }
};

module.exports = { createUser, getUser, SignInUser };
