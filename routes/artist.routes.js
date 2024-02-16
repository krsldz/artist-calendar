const router = require('express').Router();
const { Artist } = require('../db/models/index');

router.route('/').get(async (req, res) => {
  try {
    const list = await Artist.findAll({
      where: {
        // TODO: add user from session
        user_id: 1,
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
