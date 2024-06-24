// Copyright year (current year)
const currentYear = new Date().getFullYear();

// Last modified date
const lastModified = document.lastModified;

// Output the results
document.getElementById("copyright").innerHTML = `© ${currentYear} Your Company Name`;
document.getElementById("lastModified").innerHTML = `Last modified: ${lastModified}`;
