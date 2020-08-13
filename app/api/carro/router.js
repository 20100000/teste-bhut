import express from 'express';
import Controller from './controller';
import model from './model';
const PATH = '/carro';

const router = express.Router();

const controller = Controller.getController(model);
router.get('/', controller.allCarro);
router.get('/:id', controller.getCarro);
router.post('/', controller.saveCarro);
router.delete('/:id', controller.removeCarro);
router.put('/:id', controller.updateCarro);

module.exports = { path: PATH, router };
