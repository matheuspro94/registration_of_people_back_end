const User = require("../models/User");
const yup = require('yup');
const axios = require('axios');

class UserController {
  async register(req, res) {

    const regexCpf = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/

    const schema = yup.object().shape({
      name: yup.string()
        .min(3)
        .max(30)
        .required(),
      cpf: yup.string()
        .matches(regexCpf)
        .required(),
      birth_date: yup.string()
        .required(),
      email: yup.string()
        .email()
        .required(),
      phone: yup.string()
        .required(),
      address: yup.string()
        .required(),
      city: yup.string()
        .required(),
      state: yup.string()
        .required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }

    const userExists = await User.findOne({
      where: {
        cpf: req.body.cpf,
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
      return res.status(400).json({ message: "id not found." })
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

  async update(req, res) {
    const {
      name,
      cpf,
      birth_date,
      email,
      phone,
      address,
      city,
      state
    } = req.body
    const regexCpf = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/

    const schema = yup.object().shape({
      name: yup.string()
        .min(3)
        .max(30)
        .required(),
      cpf: yup.string()
        .matches(regexCpf)
        .required(),
      birth_date: yup.string()
        .required(),
      email: yup.string()
        .email()
        .required(),
      phone: yup.string()
        .required(),
      address: yup.string()
        .required(),
      city: yup.string()
        .required(),
      state: yup.string()
        .required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }

    const { id } = req.params;

    const user = await User.findByPk(id)

    if (!user) {
      return res.status(400).json({ message: "id not found." })
    }

    const update = await user.update(
      {
        name,
        cpf,
        birth_date,
        email,
        phone,
        address,
        city,
        state
      },
      { where: { id } }
    )

    return res.status(200).json({
      id: update.id,
      name: update.name,
      cpf: update.cpf,
      birth_date: update.birth_date,
      email: update.email,
      phone: update.phone,
      address: update.address,
      city: update.city,
      state: update.state,
    })
  }

  async delete(req, res) {
    const { id } = req.params
    const user = await User.findByPk(id)

    if (!user) {
      return res.status(400).json({ message: "id not found." })
    }

    await user.destroy({
      where: {
        id: id,
      }
    })

    return res.status(200).json({ message: "successfully deleted." })
  }

  async listAllUsers(req, res) {
    const listAll = await User.findAll()
    return res.status(200).json(listAll)
  }

  async getCidades(req, res) {
    const UF = req.params.uf;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF.toUpperCase()}/municipios`;
    const cities = [];

    var options = {
      method: 'GET',
      url,
    };

    await axios.request(options).then(function (response) {
      response.data.forEach(element => {
        cities.push(element.nome);
      });
    }).catch(function (error) {
      console.error(error);
    });

        return res.status(200).json({ cities: cities });
  }
}

module.exports = new UserController;
