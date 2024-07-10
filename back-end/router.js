






import { Router } from "express";
import * as request from './requestHandler.js'


const router=Router();


router.route('/add').post(request.adddata)
router.route('/get').get(request.getdatas)
router.route('/update/:id').patch(request.updatedata)
router.route('/delete/:id').delete(request.deletedata);



export default router;