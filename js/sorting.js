const categories = document.querySelectorAll('.categories li');
const grid = document.querySelector('.pictures-grid');
const initialSelected = document.querySelector('.selected');

let selectedCategory = initialSelected.innerText.toLowerCase(); // 'all'

// Pictures
const pictures = [
	
	{
		url:
			'./images/Calypso_gcek.png',
		category: 'all',
		file: 'https://calypso-gcek.github.io/calypsogcek/index.html'

	},
	{
		url:
			'./images/Meet_and_Greet.png',
		category: 'all',
		file: 'https://shegcek.github.io/meet-and-greet/'

	},
	{
		url:
			'./images/SHE_STATE_LEVEL_LAUNCH.png',
		category: 'all',
		file: 'https://shegcek.github.io/SHE-State-Level-Launch/'

	},
	{
		url:
			'./images/COWIKI.jpg',
		category: 'all',
		file: 'https://punyaj.github.io/Covid-Encyclopedia/index.html'
	},
	{
		url:
			'./images/sanjeevani.jpg',
		category: 'all',
		file: 'https://punyaj.github.io/ambulance-traffic-signal-alert/index.html'
	},
   
	{
		url:
			'./images/DTMF.jpg',
		category: 'all'
	},
	{
		url:
			'./images/Mini-Project.jpeg',
		category: 'all'
	},

	{
		url: './images/TheHillMoviePoster.png',
		category: 'all',
		file: './images/TheHillMoviePoster.png',
	},
	{
		url: './images/TheLegendMoviePoster.png',
		category: 'all',
		file: '../images/TheLegendMoviePoster.png',
	},
	{
		url: './images/TheSpecialist MoviePoster.png',
		category: 'all',
		file: './images/TheSpecialist MoviePoster.png'
	},





	{
		url:
			'./images/Calypso_gcek.png',
		category: 'web',
		file: 'https://calypso-gcek.github.io/calypsogcek/index.html'

	},
	{
		url:
			'./images/Meet_and_Greet.png',
		category: 'web',
		file: 'https://shegcek.github.io/meet-and-greet/'

	},
	{
		url:
			'./images/SHE_STATE_LEVEL_LAUNCH.png',
		category: 'web',
		file: 'https://shegcek.github.io/SHE-State-Level-Launch/'

	},
	{
		url:
			'./images/COWIKI.jpg',
		category: 'web',
		file: 'https://punyaj.github.io/Covid-Encyclopedia/index.html'
	},
	{
		url:
			'./images/sanjeevani.jpg',
		category: 'web',
		file: 'https://punyaj.github.io/ambulance-traffic-signal-alert/index.html'
	},
   
{
	url: './images/TheHillMoviePoster.png',
	category: 'poster',
	file: './images/TheHillMoviePoster.png',
},
{
	url: './images/TheLegendMoviePoster.png',
	category: 'poster',
	file: '../images/TheLegendMoviePoster.png',
},
{
	url: './images/TheSpecialist MoviePoster.png',
	category: 'poster',
	file: './images/TheSpecialist MoviePoster.png'
},

	{
		url:
			'./images/DTMF.jpg',
		category: 'projects'
	},
	{
		url:
			'./images/Mini-Project.jpeg',
		category: 'projects'
	}
];


// Render pictures based on category
const renderPictures = category => {
    pictures.forEach(picture => {
        if (picture.category === category) {
            const img = document.createElement('img');
            img.src = picture.url;
            img.srcset = picture.url;
            img.addEventListener('click', () => {
                window.open(picture.file, '_blank'); // Open file in a new tab
            });
            grid.appendChild(img);
        }
    });
};

// Initial render
renderPictures(selectedCategory);

// Menu & Filter
categories.forEach(category => {
    category.addEventListener('click', () => {
        // Update selected category and add 'selected' class
        selectedCategory = category.innerText.toLowerCase();
        category.classList.add('selected');

        // Re-render pictures
        grid.innerHTML = '';
        renderPictures(selectedCategory);

        // Remove 'selected' class from the others
        categories.forEach(categ => {
            if (categ.innerText.toLowerCase() !== selectedCategory) {
                categ.classList.remove('selected');
            }
        });
    });
});