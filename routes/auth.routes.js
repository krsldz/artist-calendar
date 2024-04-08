const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Blacklist } = require('../db/models/index');

const { generateAccessToken, generateRefreshToken, generateUsername } = require('../utils/auth');

router.route('/register').post(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Please enter your email and password' });
    }
    const username = generateUsername(email);
    const saltRounds = Number(process.env.SALT_ROUNDS) ?? 10;
    const hash = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({ email, username, password: hash });
    if (newUser.id) {
      const accessToken = generateAccessToken({ username: newUser.username });
      const refreshToken = generateRefreshToken({ username: newUser.username });
      res
        .cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict' })
        .cookie('accessToken', accessToken, { httpOnly: true, sameSite: 'strict' });
      return res.status(201).json({ message: 'OK' });
    }
    return res.status(500).json({ error: 'User cannot be created' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.route('/login').post(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Please enter your email and password' });
    }
    const user = await User.findOne({ where: { email } });
    if (user.id) {
      const isSame = await bcrypt.compare(password, user.password);
      if (isSame) {
        const accessToken = generateAccessToken({ username: user.username });
        const refreshToken = generateRefreshToken({ username: user.username });
        res
          .cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict' })
          .cookie('accessToken', accessToken, { httpOnly: true, sameSite: 'strict' });
        return res.json({ message: 'OK' });
      }
      return res.status(401).json({ error: 'Login Data is incorrect' });
    }
    return res.status(401).end({ error: 'Login Attempt is failed' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.route('/logout').get(async (req, res) => {
  try {
    const authHeader = req?.headers?.cookie;
    const token = authHeader && authHeader.split('=')[1];
    if (!token) return res.status(401).json({ message: 'You are logged out!' });
    const checkIfBlacklisted = await Blacklist.findOne({ where: { token } });
    if (checkIfBlacklisted) return res.sendStatus(204);
    const newBlacklist = await Blacklist.create({ token });
    if (newBlacklist.id) {
      res.setHeader('Clear-Site-Data', '"cookies"');
      return res.status(200).json({ message: 'You are logged out!' });
    }
    return res.status(500).json({ error: 'Logout is failed' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
