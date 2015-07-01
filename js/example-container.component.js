(function (window, ko, undefined) {
	'use strict';

	function ExampleContainerViewModel(params) {
		var self = this;

		self.id = params.id;
		self.markup = ko.observable('');
		self.styles = ko.observable('');
var data = '<b>ff</b>';
		$.get('examples/' + params.id + '/markup.html', function (data) {
			self.markup(data);
		});
		$.get('examples/' + params.id + '/styles.less', function (data) {
			self.styles(data);
		});		
	}

	ko.components.register('example-container', {
		viewModel: ExampleContainerViewModel,
		template: { element: 'example-container-template' }
	});


})(window, ko);