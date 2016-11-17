/** 
* Route API to route to all tenate's rule/fact execution
*/
import * as express from 'express';
import {TenateRuleController} from '../controllers/tenate.rule.controller';


var wsRouter = express.Router();
var tenateRuleController = new TenateRuleController();

wsRouter.get('/user/:id', function(req, res) {
	tenateRuleController.execute(null);
})



export var TenateRoute = wsRouter;