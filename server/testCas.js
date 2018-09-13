var request = require('request');

function auth(username,password){
	return new Promise((res,rej)=>{
		request.post('https://cas.enib.fr/v1/tickets/', {form:{'username': username, 'password': password}}, function(err,httpResponse,body){
			if(err)rej(err);
			else res(httpResponse.statusCode==201);
		});
	});
}

auth("t5baillo","delta42!!").then(u=>console.log(u?"good":"bad"));

//http://www.django-rest-framework.org/api-guide/authentication/#tokenauthentication