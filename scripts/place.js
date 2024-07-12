document.addEventListener('DOMContentLoaded', function() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Get the copyright-year element
    const copyrightElement = document.getElementById('copyright-year');
    if (copyrightElement) {
        // Set the current year in the first paragraph of the footer
        copyrightElement.textContent = ` ${currentYear}`;
    } else {
        console.error('Element with ID "copyright-year" not found.');
    }

    // Get the document's last modified date
    const lastModified = document.lastModified;
    // Get the last-modified element
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        // Set the last modified date in the second paragraph of the footer
        lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
    } else {
        console.error('Element with ID "last-modified" not found.');
    }
});
