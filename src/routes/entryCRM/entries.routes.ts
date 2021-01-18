import {Router} from 'express'
const router = Router();

import * as entryCtrl from './entry.controller'

router.get('/entries',entryCtrl.getEntries);
router.get('entry/:id',entryCtrl.getEntry);
router.post('/entry',entryCtrl.createEntry);
router.delete('/entry/:id',entryCtrl.deleteEntry);
router.put('/entry/:id',entryCtrl.updateEntry);

export default router;