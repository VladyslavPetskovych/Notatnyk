const oneUserService = require("../services/oneUserService");

exports.GetOneUser = async (req, res) => {
  try {
    const { idC } = req.params;
    const oneUser = await oneUserService.GetOneUser(idC);
    return res.status(200).json(oneUser);
  } catch (error) {
    return res.status(500).json("get one user errrorororo ");
  }
};

exports.postOneUser = async (req, res) => {
  try {
    const { idC, name } = req.body;

    if (!idC || !name) {
      return res.status(400).json({ message: "idC or name missing" });
    }
    await oneUserService.postOneUser({ idC, name });
    return res.status(200).json("Додав нового користувача");
  } catch (error) {
    return res.status(500).json("post one user errrorororo ");
  }
};
