/**
 * @description Component to handle the logic between the service and the view
 */

  function AppComponentController(GithubService, UtilsService){
	
	let search, ctrl = this;

	/**
 	 * @description
 	 * Init of the component
 	 *
 	 */
 	this.$onInit = function(){
 		this.error = false;
 		this.processing = false;
 		this.items;
 		this.pagination;
 	}


	/**
	 *  @description
	 *  Calls the service and requests the repositories based on the search
	 */
	this.requestRepositories = function(){
		// if search input less than 2 characters or if the request in progress or if is the same search
		if(this.search.length < 2 || this.processing || search	 === this.search) return;

		search = this.search; 			// prevents to request the same input
		this.processing = true; 		// requests status
		GithubService.getListRepositories(this.search).then(function(result){
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
	this.requestPage = function(pageUrl){
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


const appComponent = {
	templateUrl: 'scripts/components/main/appcomponent.view.html',
	controller: AppComponentController
};

angular.module('githubApp').component('appComponent', appComponent);





