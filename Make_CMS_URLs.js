/*
Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes. For example, if you write a Medium post titled "Stop Using Reduce", it's likely the URL would have some form of the title string in it (".../stop-using-reduce"). You may have already noticed this on the freeCodeCamp site
Fill in the urlSlugfunction so it converts a string titleand returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces
*/

// the global variable
var globalTitle = "Winter Is Coming";

function urlSlug(title) {
return title.toLowerCase().split(/\s+/).filter((item)=>item).join("-");
}

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming”
