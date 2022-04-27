import User from "../models/User"

class UserController {
  async register(req, res) {
    const userExists = await User.findOne({
      where: {
        email: req.body.email,
      }
    })

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' })
    }

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

  async read(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id)

    if (!user) {
      return res.status(400).json({ message: "id not found."})
    }

    return res.status(200).json({
      id: user.id,
      name: user.name,
      cpf: user.cpf,
      birth_date: user.birth_date,
      email: user.email,
      phone: user.phone,
      address: user.address,
      city: user.city,
      state: user.state,
    })
  }
}

export default new UserController;
