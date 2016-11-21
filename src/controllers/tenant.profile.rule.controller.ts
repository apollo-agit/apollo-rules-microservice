var RuleEngine = require('node-rules');
import * as express from 'express';
import {FactRuleModel} from '../model/fact.rule.model';
import {ClientRequestModel} from '../model/request.model';
import {RuleResponse} from '../model/response.model';
import {NameRules}  from '../rules/rule.name';
import {AbstractRuleEngineCommand} from '../common/abstract.rule.engine.command';

import {MilparkRuleEngineCommand} from '../engines/milpark.rule.engine';
import {IesRuleEngineCommand} from '../engines/ies.rule.engine';


export class TenantProfileRuleController {

	private ruleEngines: Map<string, AbstractRuleEngineCommand>;

	constructor() {
		this.ruleEngines = new Map<string, AbstractRuleEngineCommand>();

		this.ruleEngines.set("101", new MilparkRuleEngineCommand());
		this.ruleEngines.set("555", new IesRuleEngineCommand());
	}

	public executeRules(req: express.Request, res: express.Response):  void {
		let requestModel: ClientRequestModel = req.body;
		let fact: FactRuleModel = requestModel.fact;
		
		this.ruleEngines.get(requestModel.tenantId).execute(fact, (result) => {
			res.json(result);
		});
		
	}


}