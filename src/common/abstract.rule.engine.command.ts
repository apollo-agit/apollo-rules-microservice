
// Abstract controller, base for tenate controllers

import {FactRuleModel} from '../model/fact.rule.model';
import {NameRules}  from '../rules/rule.name';
import {RuleResponse} from '../model/response.model';

var RuleEngine = require('node-rules');


export abstract class AbstractRuleEngineCommand {

	protected rules: Array<any>;

	constructor() {
		this.rules = new Array<any>();
	}

	public execute(fact:FactRuleModel, receiver: (result: any) => any):  void {
		var R = new RuleEngine(this.rules);

		R.execute(fact,function(result){ 
		 	var check = result.result
		 	if(!check)
		 		check = new RuleResponse("", "");
		 	receiver(check);
		 });
	}

}

