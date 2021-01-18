import {Router} from 'express'
const router = Router();


import * as itemCtrl from './item.controller'

router.get('/items',itemCtrl.getItems);

router.get('/items/:id',itemCtrl.getItem);

router.post('/items',itemCtrl.createItem);

router.delete('/items/:id',itemCtrl.deleteItem);

router.put('/items/:id',itemCtrl.updateItem);

export default router;