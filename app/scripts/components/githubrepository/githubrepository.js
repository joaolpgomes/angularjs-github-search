
/**
 *	@description
 * Component to handle the detail of a repository
 *
 */
function RepositoryController(GithubService, UtilsService) {
	let ctrl = this;

	/**
 	 * @description
 	 * Init of the component
 	 *
 	 */
 	this.$onInit = function(){
 		this.showDetails = false; 		//controls the details visibility of the repository
 		this.issues = []; 				
 		this.error = false;
 		this.processing = false;
 		this.pagination;
 	}

	/**
 	 * @description
 	 * Objects passing by reference
 	 *
 	 */
 	this.$onChanges = function(changes){
	    if (changes.repository) {
	      this.repository = Object.assign({}, this.repository);
	    }
  	}

	/**
	 * @description
	 * Function to request the list of issues for the repositoy
	 * It only does the http request if the detail of the repository it's closed and we don't have requested already
	 * 
	 * @param {String} query
	 */
	this.search = function(query) {
		if(!this.showDetails) {
			this.showDetails = true;
			if(this.repository.has_issues && !this.processing){
				this.processing = true;
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
			this.showDetails = false;
		}
	};
	
	
	/**
	 *  @description
	 *  Calls the service and requests more issues based on the page url
	 *  The page url it's provided in headers of the response from the API
	 *  
	 *  @param {String} query
	 */
	this.requestPage = function(pageUrl){
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


const githubRepository = {
	templateUrl: 'scripts/components/githubrepository/githubrepository.view.html',
	controller: RepositoryController,
	bindings: {
		repository: '<'
	}
}

angular.module('githubApp').component('githubRepository', githubRepository);



