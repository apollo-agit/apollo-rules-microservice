import {FactRuleModel} from '../model/fact.rule.model';
import {NameRules}  from '../rules/rule.name';
import {RuleResponse} from '../model/response.model';
import * as express from 'express';

var RuleEngine = require('node-rules');


export abstract class TenateRuleController {

	public executeRules(req: express.Request, res: express.Response):  void {
		var fact: FactRuleModel = req.body;
		var R = new RuleEngine(NameRules);

		R.execute(fact,function(result){ 
		 	var check = result.result
		 	if(!check)
		 		check = new RuleResponse("none", "none");
		 	res.json(check);
		 });
	}
	
}