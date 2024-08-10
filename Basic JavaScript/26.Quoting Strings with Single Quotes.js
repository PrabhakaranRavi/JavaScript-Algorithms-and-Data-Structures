const doubleQuoteStr = "This is a string";
const singleQuoteStr = 'This is also a string';

/**
 * The reason why you might want to use one type of quote over the other is if you want to use both in a string. This might happen if you want to save a conversation in a string and have the conversation in quotes. Another use for it would be saving an <a> tag with various attributes in quotes, all within a string.
 */
const conversation = 'Finn exclaims to Jake, "Algebraic!"';

const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';

// Error const badStr = 'Finn responds, "Let's go!"';

/**
 * Here badStr will throw an error.

In the goodStr above, you can use both quotes safely by using the backslash \ as an escape character.

Note: The backslash \ should not be confused with the forward slash /. They do not do the same thing.

 */

//const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';