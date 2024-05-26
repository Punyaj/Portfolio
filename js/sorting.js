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
			'./images/ArtHive.png',
		category: 'web',
		file: 'https://vandana-sreedharan.github.io/ArtHive/'

	},
	{
		url:
			'./images/PortfolioWeb.png',
		category: 'web',
		file: 'https://punyaj.github.io/Pwebsite2/'
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
	url: './images/Grow More Tech Catalogue_1.jpg',
	category: 'brochure',
	file: 'https://drive.google.com/file/d/1uD5oj-vKzCOPGkF163dYU5LGb5cPnW0B/view?usp=drive_link'
},
{
	url: './images/Black catalog final file.jpg',
	category: 'brochure',
	file: 'https://drive.google.com/file/d/1yzAd-ZyIP2dJvsMdD0WddFu9oIPtrca_/view?usp=drive_link, https://drive.google.com/file/d/1eYzAv62kJEHK4JHIdwM30o0Jyzqu6Q5_/view?usp=drive_link'
},
{
	url: './images/Punya Copper catalog final file_1.jpg',
	category: 'brochure',
	file: 'https://drive.google.com/file/d/1yzAd-ZyIP2dJvsMdD0WddFu9oIPtrca_/view?usp=drive_link'
},
{
	url: './images/Central Limit Theorm_1.jpg',
	category: 'more',
	file: 'https://drive.google.com/file/d/1QAKO7bj7vzdupLLM_ifK6RvlR4-agRsv/view?usp=sharing'
},
{
	url: './images/Outliers_1.jpg',
	category: 'more',
	file: 'https://drive.google.com/file/d/1BXPj9QgHjW8jATHSYJdoRwRJm-XWrvVQ/view?usp=drive_link'
},
{
	url: './images/OOB Error_1.jpg',
	category: 'more',
	file: 'https://drive.google.com/file/d/16PbUsUXB70-A9NCBNNkz6wWzKGBvMS8l/view?usp=drive_link'
},


{
	url: './images/Brandiasm_Desktop.png',
	category: 'ui/ux',
	file: 'https://drive.google.com/file/d/1G_MI78jMVa88kQHFlXh61jc8wgQTZ-NL/view?usp=sharing'
},
{
	url: './images/SHEGcek_Website.png',
	category: 'ui/ux',
	file: 'https://drive.google.com/file/d/1kBQ5ceIuMXCyH_ET7fas0RduYWYE3Il6/view?usp=drive_link'
},
{
	url: './images/SHEGcek_Website2.png',
	category: 'ui/ux',
	file: 'https://drive.google.com/file/d/1-yjWvsHGmscPy3AaFETK1KNwiC5KmlHf/view?usp=drive_link'
},
{
	url: './images/Survey_Site.png',
	category: 'ui/ux',
	file: 'https://drive.google.com/file/d/1yP07CGBFbIfX1rsyZHdfSbZGAjNTSmRQ/view?usp=drive_link'
},
{
	url: './images/Brandiasm_Mobile.png',
	category: 'ui/ux',
	file: 'https://drive.google.com/file/d/1kGz2HC5Yk8ntW5uaQjAf0U_xY77-zsM-/view?usp=drive_link'
},
{
	url: './images/Mobile App.png',
	category: 'ui/ux',
	file: 'https://drive.google.com/file/d/1pBECE4O4DU-pXkWxAP2MJrbjUeiaGCTv/view?usp=drive_link'
},
	// {
	// 	url:
	// 		'./images/DTMF.jpg',
	// 	category: 'projects'
	// },
	// {
	// 	url:
	// 		'./images/Mini-Project.jpeg',
	// 	category: 'projects'
	// }
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