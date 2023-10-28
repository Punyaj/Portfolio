const categories = document.querySelectorAll('.categories li');
const grid = document.querySelector('.pictures-grid');
const initialSelected = document.querySelector('.selected');

let selectedCategory = initialSelected.innerText.toLowerCase(); // 'all'

// Pictures
const pictures = [
	{
		url:
			'../images/COWIKI.jpg',
		category: 'all'
	},
	{
		url:
			'../images/sanjeevani.jpg',
		category: 'all'
	},
    {
		url:
			'../images/SHE_STATE_LEVEL_LAUNCH.png',
		category: 'all'

	},
	{
		url:
			'../images/Calypso_gcek.png',
		category: 'all'

	},
	{
		url:
			'../images/DTMF.jpg',
		category: 'all'
	},
	{
		url:
			'../images/Mini-Project.jpeg',
		category: 'all'
	},
	{
		url:
			'../images/COWIKI.jpg',
		category: 'web'

	},
	{
		url:
			'../images/sanjeevani.jpg',
		category: 'web'
        
	},
	{
		url:
			'../images/SHE_STATE_LEVEL_LAUNCH.png',
		category: 'web'

	},
	{
		url:
			'../images/Calypso_gcek.png',
		category: 'web'

	},
	{
		url:
			'../images/DTMF.jpg',
		category: 'projects'
	},
	{
		url:
			'../images/Mini-Project.jpeg',
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
