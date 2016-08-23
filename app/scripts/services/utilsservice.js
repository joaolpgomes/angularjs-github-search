/**
 *  @description 
 *  Utils service with helpful functions
 */
angular.module('githubApp')
	.service('UtilsService', function () {

		return {

			/**
			 * @description
			 * Parse the Github Link HTTP header used for the pagination
			 *
			 * @param header
			 * @returns {Object}
			 */
			getLinksHeaders: function (header) {
				if (header.length == 0) {
					throw new Error("input must not be of zero length");
				}
				
				// Split parts by comma
				var parts = header.split(',');
				var links = {};

				// Parse each part into a named link
				angular.forEach(parts, function(p) {
					var section = p.split(';');
					if (section.length != 2) {
						throw new Error("section could not be split on ';'");
					}
					var url = section[0].replace(/<(.*)>/, '$1').trim();
					var name = section[1].replace(/rel="(.*)"/, '$1').trim();
					links[name] = url;
				});

				return links;
			}
		}
	});