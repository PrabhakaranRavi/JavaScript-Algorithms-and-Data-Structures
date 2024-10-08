/**
 * Quotes are not the only characters that can be escaped inside a string. 
There are two reasons to use escaping characters:
    To allow you to use characters you may not otherwise be able to type out, such as a newline.
    To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.

We learned this in the previous challenge.
*/

/**
 * Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	word boundary
\f	form feed

Note that the backslash itself must be escaped in order to display as a backslash.
 */

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
console.log(myStr);
