import User from "../models/User"

class UserController {
  async register(req, res) {
    const {
      id,
      name,
      cpf,
      birth_date,
      email,
      phone,
      address,
      city,
      state
    } = await User.create(req.body)

    return res.json({
      id,
      name,
      cpf,
      birth_date,
      email,
      phone,
      address,
      city,
      state
    })
  }
}

export default new UserController;
