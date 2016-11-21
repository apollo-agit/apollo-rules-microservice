/** 
* Route API to route to all tenate's rule/fact execution
*/
import * as express from 'express';
import {TenantProfileRuleController} from '../controllers/tenant.profile.rule.controller';

var wsRouter = express.Router();
var tenateRuleController = new TenantProfileRuleController();

wsRouter.post('/fact/check/profile', function(req, res) {
	tenateRuleController.executeRules(req, res);	
})



export var TenantRoute = wsRouter;