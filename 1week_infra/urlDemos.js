import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

//URL object
const urlObj = new URL(urlString);
console.log(urlObj);
console.log(urlObj.pathname);

//format()
console.log(url.format(urlObj));

//import.meta.url - file URL
console.log(import.meta.url);