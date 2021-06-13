const express = require('express');
const router = express.Router();
const historyController = require('../app/api/controllers/historys');

router.get('/', historyController.getAll);
router.post('/', historyController.create);
router.get('/:historyId', historyController.getById);
router.put('/:historyId', historyController.updateById);
router.delete('/:historyId', historyController.deleteById);

module.exports = router;