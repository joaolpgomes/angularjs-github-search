'use strict';
/**
 * @description Component for pagination
 *
 */

function PaginationController(){

	var ctrl = this;

	/**
	 * @description
	 * Calls the api in the parent component
	 * 
	 * @param pageUrl
	 */
	ctrl.requestNewPage = function(pageUrl){
		ctrl.requestPage(pageUrl);
	}

}

angular.module('githubApp').component('githubPagination', {
	templateUrl: 'scripts/components/githubrepositorypagination/githubrepositorypagination.view.html',
	controller: PaginationController,
	bindings:{
		pagination: '=',
		requestPage: '&'
	}
});