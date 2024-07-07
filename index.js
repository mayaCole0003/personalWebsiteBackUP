document.addEventListener("DOMContentLoaded", function() {
    const circleContent = document.getElementById('circle-content');
    if (circleContent) {
        const items = document.querySelectorAll('.circle-item');

        function getRandomPosition() {
            const x = Math.random() * 90;
            const y = Math.random() * 90;
            return { x, y };
        }

        items.forEach(item => {
            const { x, y } = getRandomPosition();
            item.style.left = `${x}vw`;
            item.style.top = `${y}vh`;
        });

        circleContent.classList.add('visible');
    }
    
    let artworks = [
        {
            title: 'Untitled',
            dateCreated: '2024',
            medium: 'Photoshop',
            image: '../imgs/MayaC_designSprint.png'
        },
        {
            title: 'Another Artwork',
            dateCreated: '2024',
            medium: 'Photoshop',
            image: '../imgs/MayaC_poster.jpg'
        },
        {
            title: 'Another Artwork2',
            dateCreated: '2024',
            medium: 'Photoshop',
            image: '../imgs/MayaC_meta-2versionA.png'
        },
        {
            title: 'Another Artwork3',
            dateCreated: '2024',
            medium: 'Photoshop',
            image: '../imgs/mayaC_meta4_versionC.jpg'
        },
        {
            title: 'Another Artwork4',
            dateCreated: '2024',
            medium: 'Photoshop',
            image: '../imgs/MayaC_Module7_project.jpg'
        }
    ];

    let currentArtworkIndex = 0;

    function showArtwork(index) {
        let artwork = artworks[index];
        document.getElementById('title').innerText = artwork.title;
        document.getElementById('dateCreated').innerText = artwork.dateCreated;
        document.getElementById('medium').innerText = artwork.medium;
        document.getElementById('artImage').src = artwork.image;
    }

    document.querySelectorAll('.next-button').forEach(button => {
        button.addEventListener('click', function() {
            if (this.innerHTML.includes('fa-arrow-left')) {
                currentArtworkIndex = (currentArtworkIndex - 1 + artworks.length) % artworks.length;
            } else {
                currentArtworkIndex = (currentArtworkIndex + 1) % artworks.length;
            }
            showArtwork(currentArtworkIndex);
        });
    });

    showArtwork(currentArtworkIndex);
});
