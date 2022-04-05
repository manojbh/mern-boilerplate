const express = require('express');

const router = express.Router();

const { getDatas, createData, getSingleData, updateData, deleteData } = require('../controllers/homeController');

router.route('/datas').get(getDatas);
router.route('/data/new').post(createData);
router.route('/data/:id').put(updateData);
router.route('/data/:id').get(getSingleData);
router.route('/data/:id').delete(deleteData);
module.exports = router;