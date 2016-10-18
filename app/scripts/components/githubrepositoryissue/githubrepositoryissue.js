/**
 * 	@description 
 * 	Component to handle the details of the issue fot the repository
 * 
 */
function RepositoryIssueController() {}

const githubRepositoryIssue = {
	templateUrl: 'scripts/components/githubrepositoryissue/githubrepositoryissue.view.html',
	controller: RepositoryIssueController,
	bindings: {
		issue: '<'
	}
}

angular.module('githubApp').component('githubRepositoryIssue', githubRepositoryIssue);