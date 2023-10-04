document.getElementById('shortenBtn').addEventListener('click',  async function() {
    const url = document.getElementById('urlInput').value;
    console.log(url.length);
    const resultDiv = document.getElementById('result');

    if (url && url.trim() != "" && isValidURL(url)) {
        
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

function isValidURL(string) {
    const pattern = new RegExp('^(https?:\\/\\/)?'+
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
        '(\\:\\d+)?'+ 
        '(\\/[-a-z\\d%_.~+]*)*'+ 
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
        '(\\#[-a-z\\d_]*)?$','i');
    return !!pattern.test(string);
}
