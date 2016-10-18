'use strict';
/**
 * @description Component for pagination
 *
 */

function PaginationController(){

	/**
	 * @description
	 * Calls the api in the parent component
	 * 
	 * @param pageUrl
	 */
	this.requestNewPage = function(pageUrl){
		this.requestPage(pageUrl);
	}

}


const githubPagination = {
	templateUrl: 'scripts/components/githubrepositorypagination/githubrepositorypagination.view.html',
	controller: PaginationController,
	bindings:{
		pagination: '=',
		requestPage: '&'
	}
}

angular.module('githubApp').component('githubPagination', githubPagination);