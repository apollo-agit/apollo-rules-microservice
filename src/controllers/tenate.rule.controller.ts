import {FactRuleModel} from '../model/fact.rule.model';
import {NameRules}  from '../rules/rule.name';

var RuleEngine = require('node-rules');


export class TenateRuleController {

	public execute(fact: FactRuleModel):  String {
		console.log(fact);
		var R = new RuleEngine(NameRules);
		var ret: String

		 R.execute(fact,function(result){ 
		 	ret = result.result
		 });

		return ret;
	}
	
}