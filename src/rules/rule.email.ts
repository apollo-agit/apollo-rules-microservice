//email rule
import {RuleResponse} from '../model/response.model';

var rules = [{
    "condition": function(R) {
        R.when(this && (!this.email || (this.email.length <= 0)));
    },
    "consequence": function(R) {
        this.result = new RuleResponse("email", "Email must exist");
        R.stop();
    }
}];

export var EmailRules = rules;