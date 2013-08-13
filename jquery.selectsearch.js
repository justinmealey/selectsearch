(function($){
	// Make jquery :contains() case insensitive
	$.expr[":"].contains = jQuery.expr.createPseudo(function(arg) {
	    return function( elem ) {
	        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
	    	};
		});

  	$.fn.selectsearch = function(input, value) {
  		var $elements = this;
  		var options = $.extend({}, $.fn.selectsearch.defaults, input);
  		if (input === 'selected') {
  			var el = $(this).find('li.selected');
  			if (!el.length) {return false;}
  			var obj = {text: el.text()};
  			$.each(el.get(0).attributes, function(i, attribute) {
  				obj[attribute.name] = attribute.value;
  				});
			return obj;
  			}
  		if (input === 'select') {
			$('.ss-dropdown').hide();
			var option = $(this).find('li[value="' + value + '"]');
			var selectId = option.parents('.ss-container').attr('id');
			$('#' + selectId).data('select', option.text());
			option.parent().find('.ss-option').removeClass('selected');
			option.addClass('selected');
			$('#' + selectId).find('span').text(option.text());
			return true;
  			}
		return $elements.each(function() {
			if(typeof input === 'string') {
				switch(input) {
					case 'clear':
						if (value) {
							$(this).find('span').text(value);
							$(this).find('ul').html('');
							}
						else {
							$(this).find('span').text($elements.find('span').attr('default'));
							$(this).find('ul').html('');
							}
						break;
					case 'deselect':
						if (value) {
							$(this).find('span').text(value);
							$(this).find('.ss-option').removeClass('selected');
							}
						else {
							$(this).find('span').text($elements.find('span').attr('default'));
							$(this).find('.ss-option').removeClass('selected');
							}
						break;
					case 'append':
						$(this).find('.ss-choices').append(value);
						break;
					case 'replace':
						$(this).find('.ss-choices').html(value);
						break;
					}
				}
			else if(typeof input === 'object') {
				replaceSelect(this.id, options);
				}
			else {
				replaceSelect(this.id, options);
				}
			});
  		};

  	function replaceSelect(select, options) {
		$('#' + select).attr('id', select + '_ss_choices').removeClass().addClass('ss-choices')
			.wrap('<div id="' + select + '" class="ss-container"/>')
			.wrap('<div id="' + select + '_ss_dropdown" class="ss-dropdown"/>');
		$('#' + select + '_ss_dropdown').prepend('<input id="' + select + '_ss_input" class="ss-input"/>').width(options.width).hide();
		$('#' + select + '_ss_choices').changeElementType('ul');
		$('#' + select + '_ss_choices').find('option').each(function() {
			$(this).changeElementType('li');
			});
		$('#' + select + '_ss_choices').find('li').addClass('ss-option');
		var selectEl = $('#' + select);
		selectEl.data('onChange', options.onChange);
		selectEl.on('click', function(event) {
			$('.ss-dropdown').hide();
			$('#' + select + '_ss_dropdown').show();
			event.stopPropagation();
			}).width(options.width);
		$(document).on('click', function() {
			$('#' + select + '_ss_dropdown').hide();
			});
		selectEl.prepend('<div id="' + select + '_ss_select" class="ss-select"><span default="' + options.defaultText + '">' + options.defaultText + '</span><b/></div>');
		selectEl.find('span').width(options.width - 20);
		$('#' + select + '_ss_choices').on('click', function(event) {
			event.stopPropagation();
			var option = $(event.target);
			$('.ss-dropdown').hide();
			var selectId = option.parents('.ss-container').attr('id');
			$('#' + selectId).data('select', option.html());
			option.parent().find('.ss-option').removeClass('selected');
			option.addClass('selected');
			$('#' + selectId).find('span').html(option.html());
			if (typeof options.onChange === 'function') {
				options.onChange();
				}
			});
		selectEl.find('input').on('keyup', function() {
			var value = $(this).val();
			var ss_options = selectEl.find('.ss-option');
			if (value) {
				ss_options.hide();
				selectEl.find('.ss-option:contains("' + value + '")').show();
				}
			else {
				ss_options.show();
				}
			});
  		}

	$.fn.selectsearch.defaults = {
		width: '200',
		defaultText: 'Select an option',
		onChange: null
		};

})(jQuery);

(function($) {
    $.fn.changeElementType = function(newType) {
        var attrs = {};

        $.each(this[0].attributes, function(idx, attr) {
            attrs[attr.nodeName] = attr.nodeValue;
        });

        this.replaceWith(function() {
            return $("<" + newType + "/>", attrs).append($(this).contents());
        });
    };
})(jQuery);