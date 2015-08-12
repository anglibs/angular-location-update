# angular-location-update

Updates location path without reloading of controller

## Usage

````
$location.update_path('/notes/1');
$location.update_path('/notes/1/wysiwyg', true);
````
Parameters:
 1. New path
 1. Keep old path in browser history (By default it will be **replaced** by new one)

## When it's needed?

For example you have route `/notes/new` which shows form for new note.

In modern web app you may have no "Save" button - note created and saved to database once user made any change.
Then you would like to change route to `/notes/1` showing to user, that here is URL of his new document.
Also if he will refresh page or go back and forward using browser buttons - he will see what he expects.

