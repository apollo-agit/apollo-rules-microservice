//Basic Name Rule
import {RuleResponse} from '../model/response.model';

var rules = [{
    "condition": function(R) {
        R.when(this && (this.firstName.length <= 2));
    },
    "consequence": function(R) {
        this.result = new RuleResponse("firstName", "First Name Must be Larger than 2");
        R.stop();
    }
},
{
    "condition": function(R) {
        R.when(this && (this.lastName.length <= 2));
    },
    "consequence": function(R) {
        this.result = new RuleResponse("lastName", "Last Name Must be Larger than 2");
        R.stop();
    }
}];

export var NameRules = rules;

