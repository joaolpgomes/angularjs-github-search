describe('component: gitHubrepositoryIssue', function() {
	var $componentController, httpBackEnd, gitService;

	var data = {
		issue: {
			"url": "https://api.github.com/repos/twbs/bootstrap/issues/20550",
			"repository_url": "https://api.github.com/repos/twbs/bootstrap",
			"labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/20550/labels{/name}",
			"comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/20550/comments",
			"events_url": "https://api.github.com/repos/twbs/bootstrap/issues/20550/events",
			"html_url": "https://github.com/twbs/bootstrap/issues/20550",
			"id": 172302699,
			"number": 20550,
			"title": "is .bg-faded apart of the utility classes?",
			"state": "open",
			"locked": false,
			"assignee": null,
			"milestone": null,
			"comments": 0,
			"created_at": "2016-08-21T03:37:23Z",
			"updated_at": "2016-08-21T03:37:23Z",
			"closed_at": null,
			"body": "In the documentation the navbar uses .bg-faded but I don't see it referenced any place but http://v4-alpha.getbootstrap.com/components/navbar/#brand. Is this a custom class just for the documentation or is it included in the core? ",
			"score": 1.0
		}
	}
	
	beforeEach(module('githubApp'));
	
	beforeEach(inject(function(_$httpBackend_, _$componentController_,  GithubService) {
		httpBackEnd = _$httpBackend_;
		gitService = GithubService;
		$componentController = _$componentController_;

	}));

	it('should expose the  `issue` object', function() {
		var bindings = data;
		var ctrl = $componentController('githubRepositoryIssue', null, bindings);
		expect(ctrl.issue).toBeDefined();
		expect(ctrl.issue.url).toBe('https://api.github.com/repos/twbs/bootstrap/issues/20550');
	});

});
