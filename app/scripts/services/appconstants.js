'user strict';

/**
 *  @description Constants
 */

angular.module('githubApp')
		.constant('AppConstants', {
			'ENDPOINTGITHUBREPOSITORIES' : 'https://api.github.com/search/repositories',
			'ENDPOINTGITHUBISSUES' : 'https://api.github.com/search/issues'
		});