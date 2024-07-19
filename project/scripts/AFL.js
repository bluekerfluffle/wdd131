document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById('copyright-year');
    if (copyrightElement) {
        copyrightElement.textContent = ` ${currentYear}`;
    } else {
        console.error('Element with ID "copyright-year" not found.');
    }
    const lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
    } else {
        console.error('Element with ID "last-modified" not found.');
    }
});