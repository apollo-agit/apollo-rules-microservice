/** 
* Route API to route to all tenate's rule/fact execution
*/
import * as express from 'express';
import {TenateRuleController} from '../controllers/tenate.rule.controller';


var wsRouter = express.Router();
var tenateRuleController = new TenateRuleController();

wsRouter.post('/fact/check', function(req, res) {
	var check: String = tenateRuleController.execute(req.body);
	res.json({eval: check});
})



export var TenateRoute = wsRouter;