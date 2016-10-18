/**
 *  @description Service to do the call to the yahoo API
 */
angular.module('githubApp')
	.service('GithubService', function ($rootScope, $http, $q, AppConstants) {

		return{
			getListRepositories: function (query) {

				let endpoint = AppConstants.ENDPOINTGITHUBREPOSITORIES + "?q=" + query;
				
				let deferred = $q.defer();

				$http.get(endpoint)
					.success(function(data, status, headers) {
						var results = [];
						results.data = data;
						results.headers = headers('Link');
						deferred.resolve(results);
					})
					.error(function(reason) {
						//error	
						deferred.reject(reason);
					});

				return deferred.promise;
			},
			getListIssues: function(query){
				let endpoint = AppConstants.ENDPOINTGITHUBISSUES + "?q=repo:" + query;

				let deferred = $q.defer();

				$http.get(endpoint)
					.success(function(data, status, headers) {
						var results = [];
						results.data = data;
						results.headers = headers('Link');
						deferred.resolve(results);
					})
					.error(function(reason) {
						//error
						deferred.reject(reason);
					});

				return deferred.promise;
			},
			getPagination: function(endpoint){

				let deferred = $q.defer();

				$http.get(endpoint)
					.success(function(data, status, headers) {
						var results = [];
						results.data = data;
						results.headers = headers('Link');
						deferred.resolve(results);
					})
					.error(function(reason) {
						//error
						deferred.reject(reason);
					});

				return deferred.promise;
			},
			
		}
});