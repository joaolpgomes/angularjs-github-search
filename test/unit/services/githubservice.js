'use strict';

describe('Service: GitHub Service', function () {
	beforeEach(module('githubApp'));

	var httpBackEnd, gitService

	beforeEach(inject(function(_$httpBackend_, GithubService) {
		httpBackEnd = _$httpBackend_;
		gitService = GithubService;
	}));

	it ('should get a promise for list of repositories', function() {
		var data = {
			query:{
				results:{
					item: "1"
				}
			}
		}
		var promise = gitService.getListRepositories('angular');

		expect(promise).not.toBe(null);

		httpBackEnd.expectGET('https://api.github.com/search/repositories?q=angular').respond(data);
		httpBackEnd.flush();
	});

	it ('should get a promise for list of issues', function() {
		var data = {
			query:{
				results:{
					item: "1"
				}
			}
		}
		var promise = gitService.getListIssues('angular/angular');

		expect(promise).not.toBe(null);

		httpBackEnd.expectGET('https://api.github.com/search/issues?q=repo:angular/angular').respond(data);
		httpBackEnd.flush();
	});

});
