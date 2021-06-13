const express = require('express');
const router = express.Router();
const cardController = require('../app/api/controllers/cards');

router.get('/', cardController.getAll);
router.post('/', cardController.create);
router.get('/:cardId', cardController.getById);
router.put('/:cardId', cardController.updateById);
router.delete('/:cardId', cardController.deleteById);

module.exports = router;