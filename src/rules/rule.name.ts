//Basic Name Rule

var rules = [{
    "condition": function(R) {
        R.when(this && (this.firstName.length < 2));
    },
    "consequence": function(R) {
        this.result = "name Must be Larger than 2";
        console.log('here');
        R.stop();
    }
}];

export var NameRules = rules;

