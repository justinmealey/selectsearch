jQuery Select Search
===============

I created this as a rework of jQuery Chosen (http://harvesthq.github.io/chosen/) because it was a little bit
too difficult to extend, and didn't capture extra attributes of the selected option.

Advantages to select search:

-Easier to extend -- written in a similar fashion to most jQuery modules
-Allows an easy way to obtain the selected object and all of its attributes
    $('#someSelect').selectsearch('selected');
-Select searches can be deselected
    $('#someSelect').selectsearch('deselect');
-Allows a function handler to be attached to an onChange event for when the user selects an option
    $('#someSelect').selectsearch({onChange: function() { alert('Changed'); } });

This was made for a very narrow single use, so any feedback is appreciated.

Events
======

-onChange: Fires where a user clicks on one of the options.

Example:
    $('#someSelect').selectsearch({onChange: function() { alert('Changed'); } });


Methods
=======

-append: Used to append options directly into the select search.  Each option must contain the class "ss-option".
Example:
    var options;
    for(var i = 0; i < 10; i++) {
        options += '<option value="' + i + '" class="ss-choices">Option ' + i + '</option>';
    }
    $('#someSelect').selectsearch('append', options);

*Note:  Create a string containing all of the options first, before appending.  Although you could run selectsearch('append')
within in a loop, it begins to get much slower at 1000-ish elements.

-deselect: Clears the selection box and display the defaultText.

Example:
    $('#someSelect').selectsearch('deselect');

-replace: Used to replace all of the options in the select search.  Each option must contain the class "ss-option".
Example:
    var options;
    for(var i = 0; i < 10; i++) {
        options += '<option value="' + i + '" class="ss-choices">Option ' + i + '</option>';
    }
    $('#someSelect').selectsearch('replace', options);

-select: Selects the option with the supplied value.

Example:
    $('#exampleSelect').selectsearch('select', '3');


Options
=======

-width: Sets the width in pixels.

Example:
    $('#someSelect').selectsearch({width: '200'});

-defaultText: The text to display when no options are selected.

Example:
    $('#someSelect').selectsearch({defaultText: 'Select an option'});


License
=======

Feel free to use any or all of this in any project.

-Justin
justin.mealey@gmail.com
