'use strict';

describe('Service: Utils Service', function () {
	beforeEach(module('githubApp'));

	var  utilSrvc;

	beforeEach(inject(function(UtilsService) {
		utilSrvc = UtilsService;
	}));

	it ('should get a promise for list of repositories', function() {
		var header = '<https://api.github.com/search/repositories?q=angular&page=2>; rel=\"next\", <https://api.github.com/search/repositories?q=angular&page=34>; rel=\"last\"';
		var links = utilSrvc.getLinksHeaders(header);
		expect(links.next).toBe('https://api.github.com/search/repositories?q=angular&page=2');
		expect(links.last).toBe('https://api.github.com/search/repositories?q=angular&page=34');
	});

});
