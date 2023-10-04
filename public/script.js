document.getElementById('shortenBtn').addEventListener('click',  async function() {
    const url = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');

    if (url) {
        
        const response = await fetch("/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: url
            })
        });
        const data = await response.json();

        const id = data.id;

        const shortenedUrl = "http://localhost:3000/" + id
        
        resultDiv.innerHTML = `
            <p>Your shortened URL is:</p>
            <a href="${shortenedUrl}" target="_blank">${shortenedUrl}</a>
        `;

    } else {
        alert('Please enter a URL.');
    }
});
