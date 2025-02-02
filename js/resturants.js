// Sample restaurant data (replace with API call)
const restaurants = [
  {
    name: "The Gourmet Kitchen",
    location: "New York",
    
    rating: 4.5,
    description: "A fine dining experience with a modern twist.",
  },
  {
    name: "Pizza Palace",
    location: "Chicago",
    image: "https://via.placeholder.com/300x200",
    rating: 4.2,
    description: "Authentic Italian pizzas made with love.",
  },
  {
    name: "Sushi Haven",
    location: "Los Angeles",
    image: "https://via.placeholder.com/300x200",
    rating: 4.7,
    description: "Fresh sushi and sashimi prepared daily.",
  },
  {
    name: "Burger Barn",
    location: "Texas",
    image: "https://via.placeholder.com/300x200",
    rating: 4.0,
    description: "Juicy burgers and crispy fries.",
  },
];

// Function to display restaurants
function displayRestaurants(filteredRestaurants) {
  const restaurantList = document.getElementById("restaurantList");
  restaurantList.innerHTML = ""; // Clear previous results

  if (filteredRestaurants.length === 0) {
    restaurantList.innerHTML = "<p>No restaurants found. Try another location.</p>";
    return;
  }

  filteredRestaurants.forEach((restaurant) => {
    const card = document.createElement("div");
    card.className = "restaurant-card";

    card.innerHTML = `
      <img src="${restaurant.image}" alt="${restaurant.name}">
      <div class="details">
        <h3>${restaurant.name}</h3>
        <p>${restaurant.description}</p>
        <p class="rating">Rating: ${restaurant.rating} <i class="fas fa-star"></i></p>
      </div>
    `;

    restaurantList.appendChild(card);
  });
}

// Function to handle search
document.getElementById("searchBtn").addEventListener("click", () => {
  const location = document.getElementById("locationInput").value.trim().toLowerCase();

  if (location === "") {
    alert("Please enter a location.");
    return;
  }

  // Filter restaurants by location (replace with API call)
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.location.toLowerCase().includes(location)
  );

  displayRestaurants(filteredRestaurants);
});

// Display all restaurants on page load
displayRestaurants(restaurants);