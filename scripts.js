const accessKey = '08QMQdOyZbmNguztFV9u8FEbxva42vyZV3gJY_8cOaM'; // Replace with your Unsplash Access Key

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('query').value;
    searchImages(query);
});

function searchImages(query) {
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            data.results.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.urls.small;
                img.alt = photo.description || 'Unsplash Image';
                img.style.width = '200px';
                resultsDiv.appendChild(img);
            });
        })
        .catch(error => console.error('Error:', error));
}
