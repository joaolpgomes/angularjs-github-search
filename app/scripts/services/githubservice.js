/**
 *  @description Service to do the call to the yahoo API
 */
angular.module('githubApp')
	.service('GithubService', function ($rootScope, $http, $q, AppConstants) {

		return{
			getListRepositories: function (query) {

				var endpoint = AppConstants.ENDPOINTGITHUBREPOSITORIES + "?q=" + query;
				
				var deferred = $q.defer();

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
				var endpoint = AppConstants.ENDPOINTGITHUBISSUES + "?q=repo:" + query;

				var deferred = $q.defer();

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

				var deferred = $q.defer();

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