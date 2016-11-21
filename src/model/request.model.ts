// Client request model

import {FactRuleModel} from './fact.rule.model';

export interface ClientRequestModel {
	tenantId: string,
	fact: FactRuleModel
}