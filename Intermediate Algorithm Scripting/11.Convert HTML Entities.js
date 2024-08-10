/**
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */

function convertHTML(str) {
  let startingArray = str.split("");
  const pairs = {
    "&": `&amp;`,
    "<": `&lt;`,
    ">": `&gt;`,
    '"': `&quot;`,
    "'": `&apos;`,
  };
  for (let item of startingArray) {
    if (pairs.hasOwnProperty(item)) {
      str = str.replace(item, pairs[item]);
    }
  }
  return str;
}
