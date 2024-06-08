document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'AIzaSyD7Oket_b_eY4PI0WdL3Qda0ZgIG3GdnZA';
    const channelId = 'UCO210MIJaGcglj4RGhxSrfg';
    const videoContainer = document.getElementById('video-container');

    fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=3`)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(item => {
                const videoId = item.id.videoId;
                const videoTitle = item.snippet.title;

                const videoElement = document.createElement('div');
                videoElement.innerHTML = `
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                    <h3>${videoTitle}</h3>
                `;
                videoContainer.appendChild(videoElement);
            });
        })
        .catch(error => console.error('Error fetching YouTube data:', error));
});