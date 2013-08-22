jQuery Select Search
===============

I created this as a rework of jQuery Chosen (http://harvesthq.github.io/chosen/) because it was a little bit
too difficult to extend, and didn't capture extra attributes of the selected option.

Advantages to select search:

* Easier to extend -- written in a similar fashion to most jQuery modules
* Allows an easy way to obtain the selected object and all of its attributes
* Select searches can be deselected
* Allows a function handler to be attached to an onChange event for when the user selects an option

This was made for a very narrow single use, so any feedback is appreciated.


Example
=======

Hosted at http://mitm-inc.com/selectsearch/


Events
======

* onChange: Fires where a user clicks on one of the options.

Example:

```javascript
$('#someSelect').selectsearch({onChange: function() { alert('Changed'); } });
```


Methods
=======

* append: Used to append options directly into the select search.  Each option must contain the class "ss-option".
Example:

```javascript
var options;
for(var i = 0; i < 10; i++) {
    options += '<option value="' + i + '" class="ss-choices">Option ' + i + '</option>';
}
$('#someSelect').selectsearch('append', options);
```

*Note:  Create a string containing all of the options first, before appending.  Although you could run selectsearch('append')
within in a loop, it begins to get much slower at 1000-ish elements.

* deselect: Clears the selection box and display the defaultText.

Example:

```javascript
$('#someSelect').selectsearch('deselect');
```

* replace: Used to replace all of the options in the select search.  Each option must contain the class "ss-option".
Example:

```javascript
var options;
for(var i = 0; i < 10; i++) {
    options += '<option value="' + i + '" class="ss-choices">Option ' + i + '</option>';
}
$('#someSelect').selectsearch('replace', options);
```

* select: Selects the option with the supplied value.

Example:

```javascript
$('#exampleSelect').selectsearch('select', '3');
```

* selected: Returns the selected option back as a JSON object with all of its attributes or returns false if nothing is selected.  Use the tag ".ss-container" to cycle through all select search boxes.
 
```javascript
var selectedOption = $('#someSelect').selectsearch('selected');
// Returns, at the minimum, { class: "ss-option selected",  text: "This option's text", value: "1" }
```

Options
=======

* defaultText: The text to display when no options are selected.

Example:

```javascript
$('#someSelect').selectsearch({defaultText: 'Select an option'});
```

* width: Sets the width in pixels.

Example:

```javascript
$('#someSelect').selectsearch({width: '200'});
```

Issues
======

-Options (width, defaultText) and the onChange handler should be set at creation and not passed after creation.

-Not sure if I fixed a problem with the arrow graphic position incorrectly under certain conditions

License
=======

Feel free to use any or all of this in any project.

-Justin
justin.mealey@gmail.com
