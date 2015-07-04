(function (window, undefined) {
	'use strict';

	var appViewModel = {
		examples: [
		    {
		        "id": "ex01-div-span",
		        "title": "Div & Span"
		    },
		    {
		        "id": "ex02-paragraph",
		        "title": "Paragraph"
		    },
		    {
		        "id": "ex03-hr",
		        "title": "Thematic Break"
		    },
		    {
		        "id": "ex04-headings",
		        "title": "Headings"
		    },
		    {
		        "id": "ex05-blockquote",
		        "title": "Blockquote"
		    },
		    {
		        "id": "ex06-pre",
		        "title": "Preformatted Text"
		    },
		    {
		        "id": "ex07-ol",
		        "title": "Ordered List"
		    },
		    {
		        "id": "ex08-ul",
		        "title": "Unordered List"
		    },
		    {
		        "id": "ex09-dl",
		        "title": "Description List"
		    },
		    {
		        "id": "ex10-link",
		        "title": "Link"
		    },
		    {
		        "id": "ex11-anchor",
		        "title": "Anchor"
		    },
		    {
		        "id": "ex12-0-legacy-tags",
		        "title": "Legacy Tags"
		    },			
		    {
		        "id": "ex12-emphasizing",
		        "title": "Emphasizing"
		    },
		    {
		        "id": "ex13-image",
		        "title": "Image"
		    },
		    {
		        "id": "ex14-iframe",
		        "title": "IFrame"
		    },
		    {
		        "id": "ex15-form",
		        "title": "Form"
		    },
		    {
		        "id": "ex16-buttons",
		        "title": "Buttons"
		    },
		    {
		        "id": "ex17-inputs",
		        "title": "Inputs"
		    },
		    {
		        "id": "ex18-textarea",
		        "title": "Textarea"
		    },
		    {
		        "id": "ex19-fileupload",
		        "title": "File Upload"
		    },
		    {
		        "id": "ex20-check-radio",
		        "title": "Checkbox & Radiobutton"
		    },
		    {
		        "id": "ex21-select",
		        "title": "Select Box"
		    },
		    {
		        "id": "ex22-table",
		        "title": "Table"
		    },
		    {
		        "id": "ex23-noscript",
		        "title": "Noscript"
		    },
		    {
		        "id": "ex24-audio",
		        "title": "Audio"
		    },
		    {
		        "id": "ex25-video",
		        "title": "Video"
		    },
		    {
		        "id": "ex26-canvas",
		        "title": "Canvas"
		    },
		    {
		        "id": "ex27-svg",
		        "title": "SVG"
		    }
		]
	};


	ko.applyBindings(appViewModel, $('body').get(0));


})(window);