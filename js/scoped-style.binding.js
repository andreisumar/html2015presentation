(function (window, ko, undefined) {
	'use strict';

	ko.bindingHandlers.scopedStyle = {
		update: function (element, valueAccessor) {
			var options = valueAccessor();
			var stylesheet = ko.unwrap(options.stylesheet);
			var scope = ko.unwrap(options.scope);
			if (stylesheet) {
				var scopedStylesheet = '#' + scope + ' .example-live {' + stylesheet + '}';
				$(element).attr('type', 'text/less').html(scopedStylesheet);
				less.refreshStyles();
			}
		}
	}


})(window, ko);