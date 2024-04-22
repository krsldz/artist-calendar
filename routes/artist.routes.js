const router = require('express').Router();
const { Artist } = require('../db/models/index');

const authenticateToken = require('../middleware/auth');

router.route('/').get(authenticateToken, async (req, res) => {
  try {
    const { userId } = req.user;
    const list = await Artist.findAll({
      where: {
        user_id: userId,
      },
    });
    if (list) {
      return res.status(200).json(list);
    }
    return res.status(404).end();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
