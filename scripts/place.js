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
const temperature = 30.55; // °C
const windSpeed = 22.53; // km/h

        // Function to calculate windchill factor
        function calculateWindChill(temp, speed) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2);
        }

        // Function to display the windchill factor
        function displayWindChill() {
            const tempElement = document.getElementById('temperature');
            const speedElement = document.getElementById('windSpeed');
            const windChillElement = document.getElementById('windChill');

            const temp = parseFloat(tempElement.textContent);
            const speed = parseFloat(speedElement.textContent);

            let windChill = 'N/A';

            // Check if conditions for windchill calculation are met
            if (temp <= 10 && speed > 4.8) {
                windChill = calculateWindChill(temp, speed);
            }

            windChillElement.textContent = windChill;
        }

        // Call the function to display windchill factor when the page loads
        window.onload = displayWindChill;