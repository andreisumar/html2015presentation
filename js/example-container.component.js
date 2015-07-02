(function (window, ko, undefined) {
	'use strict';

	function ExampleContainerViewModel(params) {
		var self = this;

		self.id = params.id;
		self.markup = ko.observable('');
		self.sourceCode = ko.observable('');
		self.styles = ko.observable('');
var data = '<b>ff</b>';

		var processMarkup = function (data) {
			var $el = $('<div>').html(data);
			var $markup = $el.find('example-markup');
			var $code = $el.find('example-code');
			if ($markup.length && $code.length) {
				self.markup($markup.html());
				self.sourceCode($code.html().replace(/^\n+|\n+$/g, '')); //remove newlines at both ends
			}else{
				self.markup(data);
				self.sourceCode(data);
			}
		};

		$.get('examples/' + params.id + '/markup.html', processMarkup);
		$.get('examples/' + params.id + '/styles.less', function (data) {
			self.styles(data);
		});		
	}

	ko.components.register('example-container', {
		viewModel: ExampleContainerViewModel,
		template: { element: 'example-container-template' },
		synchronous: true
	});


})(window, ko);