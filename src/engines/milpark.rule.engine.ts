//Milpark Engine

import {AbstractRuleEngineCommand} from '../common/abstract.rule.engine.command';

import {NameRules} from '../rules/rule.name';
import {EmailRules} from '../rules/rule.email';

export class MilparkRuleEngineCommand extends AbstractRuleEngineCommand {

	constructor() {
		super();

		Array.prototype.push.apply(this.rules, NameRules);
		Array.prototype.push.apply(this.rules, EmailRules);
	}
}