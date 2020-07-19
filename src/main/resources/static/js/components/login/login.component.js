function LoginController($resource) {
  	let $ctrl = this;
	
	let loginEndpoint = $resource('/login');

  	$ctrl.submit = function(){
		loginEndpoint.save($ctrl.model).then(function(data){
			console.log('Success: ' + data);
		}, function(error){
			console.log('Error: ' + error);
		})
	}
}

angular.module('app').component('login', {
  templateUrl: 'js/components/login/login.html',
  controller: ['$resource', LoginController]
});