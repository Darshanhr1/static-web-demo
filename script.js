const vegetables = [
    {
        name: "Carrot",
        farmer: "John Doe",
        location: "Farm A",
        details: "Carrots are root vegetables, usually orange in color."
    },
    {
        name: "Tomato",
        farmer: "Jane Smith",
        location: "Farm B",
        details: "Tomatoes are juicy, red fruits that are often used in salads."
    },
    {
        name: "Spinach",
        farmer: "Tom Brown",
        location: "Farm C",
        details: "Spinach is a leafy green vegetable that is rich in iron."
    }
];

const veggieList = document.getElementById('veggie-list');
const farmerInfo = document.getElementById('farmer-info');

// Populate vegetable list
vegetables.forEach(veggie => {
    const li = document.createElement('li');
    li.textContent = veggie.name;
    li.addEventListener('click', () => displayFarmerInfo(veggie));
    veggieList.appendChild(li);
});

// Display farmer information
function displayFarmerInfo(veggie) {
    farmerInfo.innerHTML = `
        <h3>${veggie.name}</h3>
        <p><strong>Farmer:</strong> ${veggie.farmer}</p>
        <p><strong>Location:</strong> ${veggie.location}</p>
        <p><strong>Details:</strong> ${veggie.details}</p>
    `;
}
