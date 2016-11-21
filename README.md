#Profile Rule Server


## Summary

The Profile Rule Server is an example Javascript server that executes a rules engine against the client request Fact. The appropriate response message will be returned, otherwise simple boolean "true". These rules are tenant based and each rule can be extended, added, or ignored based on the tenant id. The example project is called Profile Rule but in reality could be used for any rule endpoint.

###Example Request Response

#### Example Milpark Message
Note: Milpark engine extends the Email Rule

##### Request
```Javascript
{
    "tenantId": "101",
	"fact": {
		"firstName": "ian",
		"lastName": "hamilton"
	}
}
```

##### Response
```Javascript
{
    "fieldName": "email",
    "fieldMessage": "Email must exist"
}
```

####Example IES Message
Note: IES does NOT extend the email rule

##### Request
```Javascript
{
    "tenantId": "555",
	"fact": {
		"firstName": "ian",
		"lastName": "hamilton"
	}
}
```

##### Response
```Javascript
true
```


### How to Run

```
* git clone https://github.com/apollo-agit/profile-rules-server.git
* cd profile-rules-server
* npm install
* npm run build
* node build/server.js
```



