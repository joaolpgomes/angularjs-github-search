/**
 * 	@description 
 * 	Component to handle the details of the issue fot the repository
 * 
 */
function RepositoryIssueController() {}

angular.module('githubApp').component('githubRepositoryIssue', {
	templateUrl: 'scripts/components/githubrepositoryissue/githubrepositoryissue.view.html',
	controller: RepositoryIssueController,
	bindings: {
		issue: '<'
	}
});