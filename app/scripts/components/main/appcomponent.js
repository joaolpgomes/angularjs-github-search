'use strict';
/**
 * @description Component to handle the logic between the service and the view
 */

function AppComponentController(GithubService, UtilsService){
	
	var ctrl = this, search;

	/**
	 *  @description
	 *  Calls the service and requests the repositories based on the search
	 */
	ctrl.requestRepositories = function(){

		// if search input less than 2 characters or if the request in progress or if is the same search
		if(ctrl.search.length < 2 || ctrl.processing || search	 === ctrl.search) return;
		search = ctrl.search; 			// prevents to request the same input
		ctrl.processing = true; 		// requests status

		GithubService.getListRepositories(ctrl.search).then(function(result){
			ctrl.processing = false;
			ctrl.items = result.data.items;
			
			if(result.headers) 	ctrl.pagination = UtilsService.getLinksHeaders(result.headers); //creates a object with the links for the pages

		}, function(error){
			ctrl.error = true;			//error message in the view
			ctrl.processing = false;
		});
	}
	
	/**
	 *  @description
	 *  Calls the service and requests the repositories based on page url
	 *  The page url it's provided in headers of the response from the API
	 */
	ctrl.requestPage = function(pageUrl){

		GithubService.getPagination(pageUrl).then(function(result){
			ctrl.processing = false;
			ctrl.items = result.data.items;
			ctrl.pagination = UtilsService.getLinksHeaders(result.headers); //creates a object with the links for the pages

		}, function(error){
			ctrl.error = true; 			//error message in the view
			ctrl.processing = false;
		});
	}
}

angular.module('githubApp').component('appComponent', {
	templateUrl: 'scripts/components/main/appcomponent.view.html',
	controller: AppComponentController
});