/**
 *  @description
 *  Component to create a NVD3 chart with details of the repository
 *  Chart withForks count, open issues, stargazers and watchers 
 *
 */
function RepositoryChartController() {
	
	/**
 	 * @description
 	 * Init of the component
 	 *
 	 */
 	this.$onInit = function(){
 		//data for the chart
 		this.data = [
			{
				key: "Number of Forks",
				y: this.repositoryData.forks_count
			},
			{
				key: "Open Issues",
				y: this.repositoryData.open_issues_count
			},
			{
				key: "Stargazer Count",
				y: this.repositoryData.stargazers_count
			},
			{
				key: "Watchers Count",
				y: this.repositoryData.watchers_count
			}
		];


		//options of the chart
		this.options = {
			chart: {
				type: 'pieChart',
				height: 500,
				x: function (d) {
					return d.key;
				},
				y: function (d) {
					return d.y;
				},
				showLabels: true,
				duration: 500,
				labelThreshold: 0.01,
				labelSunbeamLayout: true
			}
		};
 	}

 	/**
 	 * @description
 	 * Objects passing by reference
 	 *
 	 */
 	this.$onChanges = function(changes){
	    if (changes.repositoryData) {
	      this.repositoryData = Object.assign({}, this.repositoryData);
	    }
  	}
}

const githubRepositoryChart = {
	templateUrl: 'scripts/components/githubrepositorychart/githubrepositorychart.view.html',
	controller: RepositoryChartController,
	bindings:{
		repositoryData: "<"
	}
}

angular.module('githubApp').component('githubRepositoryChart', githubRepositoryChart);