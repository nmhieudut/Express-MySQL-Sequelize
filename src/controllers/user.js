import db from 'models';

export const UserController = {
  async getAll(req, res) {
    try {
      const users = await db.User.findAll();
      return res.send(users);
    } catch (e) {
      return res.status(500).send(e);
    }
  },
  async getUser(req, res) {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id
        }
      });
      if (!user) {
        return res.status(404).send({
          message: 'User not found'
        });
      }
      return res.status(200).send(user);
    } catch (e) {
      return res.status(400).send({
        message: e.message
      });
    }
  }
};
