const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models/index');

const { generateAccessToken, generateUsername } = require('../utils/auth');

router.route('/register').post(async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).end();
    }
    const username = generateUsername(email);
    const hash = await bcrypt.hash(password, process.env.SALT_ROUNDS);
    const newUser = await User.create({ email, username, password: hash });
    if (newUser.id) {
      const token = generateAccessToken({ username: newUser.username });
      return res.status(201).json(token);
    }
    return res.status(500).json({ error: 'User cannot be created' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.route('/login').post(async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).end();
    }
    const user = await User.findOne({ where: { email } });
    if (user.id) {
      const isSame = await bcrypt.compare(password, user.password);
      if (isSame) {
        // req.session.userId = user.id;
        return res.status(200).json({ text: 'OK' });
      }
      return res.status(401).json({ error: 'Login Data is incorrect' });
    }
    return res.status(401).end();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
