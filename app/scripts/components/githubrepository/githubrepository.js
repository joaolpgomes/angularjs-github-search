/**
 *	@description
 * Component to handle the detail of a repository
 *
 */
function RepositoryController(GithubService, UtilsService) {
	var ctrl = this;

	ctrl.showDetails = false; 		//controls the details visibility of the repository

	/**
	 * @description
	 * Function to request the list of issues for the repositoy
	 * It only does the http request if the detail of the repository it's closed and we don't have requested already
	 * 
	 * @param {String} query
	 */
	ctrl.search = function(query) {
		if(!ctrl.showDetails) {
			ctrl.showDetails = true;
			if(ctrl.issues === undefined  && ctrl.repository.has_issues && !ctrl.processing){
				ctrl.processing = true;
				GithubService.getListIssues(query).then(function (result) {
					ctrl.processing = false;
					ctrl.issues = result.data.items;

					if(result.headers) 	ctrl.pagination = UtilsService.getLinksHeaders(result.headers);  //creates a object with the links for the pages
				}, function (error) {
					ctrl.error = true;				//error message in the view
					ctrl.processing = false;
				});
			}
		}else{
			ctrl.showDetails = false;
		}
	};
	
	
	/**
	 *  @description
	 *  Calls the service and requests more issues based on the page url
	 *  The page url it's provided in headers of the response from the API
	 *  
	 *  @param {String} query
	 */
	ctrl.requestPage = function(pageUrl){

		GithubService.getPagination(pageUrl).then(function(result){
			ctrl.processing = false;
			ctrl.issues = result.data.items;
			ctrl.pagination = UtilsService.getLinksHeaders(result.headers);
		}, function(error){
			ctrl.error = true;
			ctrl.processing = false;
		});
	}
}

angular.module('githubApp').component('githubRepository', {
	templateUrl: 'scripts/components/githubrepository/githubrepository.view.html',
	controller: RepositoryController,
	bindings: {
		repository: '<'
	}
});