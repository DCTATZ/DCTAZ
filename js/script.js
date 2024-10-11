const apiUrl = 'https://wttr.in/Budapest?format=%C+%t';

document.getElementById('backgroundSelect').addEventListener('change', function () {
    const selectedValue = this.value;
    document.body.className = selectedValue;
});

// Fetch data from wttr.in API
async function fetchApiData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.text();  // wttr.in returns plain text
        document.getElementById('apiData').innerHTML = `
            <h2>Jelenlegi időjárás</h2>
            <p>${data}</p>
        `;
    } catch (error) {
        document.getElementById('apiData').innerHTML = '<p>Nem sikerült lekérni az adatokat.</p>';
    }
}

// Fetch API data on the Information page
if (window.location.pathname.includes('info.html')) {
    fetchApiData();
}
