const LikeService = require("../services/like-services");

const likeService = new LikeService();

const togglelike = async (req, res) => {
  try {
    const data = req.body;
    const response = await likeService.toggleLike(
      data.modelId,
      data.modelType,
      data.user
    );
    return res.status(201).json({
      success: true,
      message: "Succesfully toggled a like",
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error Encountered in Toggling Like",
      data: {},
      error: error,
    });
  }
  //console.log(response);
};





module.exports = togglelike;
