//Model for evaluation response

export class RuleResponse {

	fieldName: String;
	fieldMessage: String;

	constructor (fieldName: String, fieldMessage: String) {
		this.fieldName = fieldName;
		this.fieldMessage = fieldMessage;
	}
	
}