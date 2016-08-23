describe('component: gitHubrepository', function() {
	var $componentController, httpBackEnd, gitService;

	var data =  {
			repository: {
				"name": "bootstrap",
				"full_name": "twbs/bootstrap",
				"private": false,
				"html_url": "https://github.com/twbs/bootstrap",
				"description": "The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.",
				"fork": false,
				"url": "https://api.github.com/repos/twbs/bootstrap",
				"created_at": "2011-07-29T21:19:00Z",
				"updated_at": "2016-08-21T16:43:44Z",
				"pushed_at": "2016-08-20T04:20:09Z",
				"homepage": "http://getbootstrap.com",
				"size": 207618,
				"stargazers_count": 99626,
				"watchers_count": 99626,
				"language": "CSS",
				"has_issues": true,
				"has_downloads": true,
				"has_wiki": false,
				"has_pages": true,
				"forks_count": 44657,
				"mirror_url": null,
				"open_issues_count": 670,
				"forks": 44657,
				"open_issues": 670,
				"watchers": 99626,
				"default_branch": "master",
				"score": 124.70368
			}
	};

	beforeEach(module('githubApp'));


	beforeEach(inject(function(_$httpBackend_, _$componentController_,  GithubService) {
		httpBackEnd = _$httpBackend_;
		gitService = GithubService;
		$componentController = _$componentController_;

	}));

	it('should expose a `repository` object', function() {
		var bindings = data;
		var ctrl = $componentController('githubRepository', null, bindings);

		expect(ctrl.repository).toBeDefined();
		expect(ctrl.repository.full_name).toBe('twbs/bootstrap');
	});

	it('should call service, when searching', function() {
		var bindings = data;
		var ctrl = $componentController('githubRepository', null, bindings);
		ctrl.search('bootstrap');
		expect(ctrl.processing).toBe(true);
		httpBackEnd.expectGET('https://api.github.com/search/issues?q=repo:bootstrap').respond(data);
		httpBackEnd.flush();
		expect(ctrl.processing).toBe(false);
	});


	it('should not call the service, if the details already opened', function() {
		var bindings = data;
		var ctrl = $componentController('githubRepository', null, bindings);
		ctrl.showDetails = true;
		ctrl.search('bootstrap');
		expect(ctrl.processing).toBe(undefined);
	});
});
