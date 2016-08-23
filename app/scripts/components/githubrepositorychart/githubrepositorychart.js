/**
 *  @description
 *  Component to create a NVD3 chart with details of the repository
 *  Chart withForks count, open issues, stargazers and watchers 
 *
 */
function RepositoryChartController() {
	var ctrl = this;
	
	//data for the chart
	ctrl.data = [
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
	ctrl.options = {
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

angular.module('githubApp').component('githubRepositoryChart', {
	templateUrl: 'scripts/components/githubrepositorychart/githubrepositorychart.view.html',
	controller: RepositoryChartController,
	bindings:{
		repositoryData: "="
	}

});