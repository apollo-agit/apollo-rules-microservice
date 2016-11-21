//ies engine

import {AbstractRuleEngineCommand} from '../common/abstract.rule.engine.command';

import {NameRules} from '../rules/rule.name';

export class IesRuleEngineCommand extends AbstractRuleEngineCommand {

	constructor() {
		super();

		Array.prototype.push.apply(this.rules, NameRules);
	}
}