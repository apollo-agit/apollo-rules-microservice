//Rule Engine for Profile
import {RuleResponse} from '../model/response.model';

var rules = [{
    "condition": function(R) {
        R.when(this && (this.firstName.length <= 2));
    },
    "consequence": function(R) {
        this.result = new RuleResponse("firstName", "name Must be Larger than 2");
        console.log('here');
        R.stop();
    }
}];

export var NameRules = rules;