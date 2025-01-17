/* || GETTING AUTHOMATIC DATE */
document.addEventListener('DOMContentLoaded', function() {
    const siteYear = document.getElementById('siteYear');
    siteYear.textContent = new Date().getFullYear();
  });

/* || DARK MODE FUNCTION */
const modeToggle = document.getElementById('modeToggle');
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

// Set initial mode based on stored preference
document.body.classList.toggle('dark-mode', isDarkMode);
modeToggle.checked = isDarkMode;

modeToggle.addEventListener('change', function() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
  localStorage.setItem('isDarkMode', isDarkMode);
});

/* || FUNCTION TO ADD IMAGE SLIDER */
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/* || FUNCTIONS FOR EVENTS PAGE */
// Sample data for events
const events = [
    { title: 'Inter School Debate', date: '2023-10-01', category: 'Academics' },
    { title: 'Quiz Competition', date: '2024-2-15', category: 'Sports' },
    { title: 'Inter House Sport', date: '2024-05-10', category: 'Social Club' },
    { title: 'Visitation', date: '2024-06-10', category: 'Social Club' }
    // Add more events here...
  ];
  
  // Function to display upcoming events
  function displayUpcomingEvents() {
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = '';
  
    // Sort events by date
    const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));
  
    // Display the upcoming events
    sortedEvents.forEach(event => {
      const eventItem = document.createElement('div');
      eventItem.textContent = `${event.title} - ${event.date}`;
      eventList.appendChild(eventItem);
    });
  }
  
  // Function to display event categories
  function displayEventCategories() {
    const categoryList = document.getElementById('category-list');
    categoryList.innerHTML = '';
  
    // Get unique event categories
    const categories = [...new Set(events.map(event => event.category))];
  
    // Display the event categories
    categories.forEach(category => {
      const categoryItem = document.createElement('li');
      categoryItem.textContent = category;
      categoryList.appendChild(categoryItem);
    });
  }
  
  // Function to search events
  function searchEvents() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';
  
    const searchTerm = searchInput.value.toLowerCase();
  
    // Filter events based on search term
    const filteredEvents = events.filter(event =>
      event.title.toLowerCase().includes(searchTerm) ||
      event.category.toLowerCase().includes(searchTerm)
    );
  
    // Display the search results
    filteredEvents.forEach(event => {
      const searchResultItem = document.createElement('div');
      searchResultItem.textContent = `${event.title} - ${event.date}`;
      searchResults.appendChild(searchResultItem);
    });
  }
  
  // Event listeners
  document.addEventListener('DOMContentLoaded', () => {
    displayUpcomingEvents();
    displayEventCategories();
  });
  
  document.getElementById('search-input').addEventListener('input', searchEvents);
     

/* || CODE TO EMBED CURRENT DATE AND TIME */
    function displayDateTime() {
      const dateTimeElement = document.getElementById('date-time');
      const currentDate = new Date();
  
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      };
  
      const formattedDateTime = currentDate.toLocaleString('en-US', options);
      dateTimeElement.textContent = formattedDateTime;
    }
  
    // Call the displayDateTime function initially
    displayDateTime();
  
    // Update the date and time every second
    setInterval(displayDateTime, 1000);


function redirectAfterLogin(event) {
  event.preventDefault(); // Prevent form submission

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var errorMessage = document.getElementById('error_message');

  // Perform login validation here (e.g., check username and password)

  if (username === 'student101' && password === '50505050') {
    window.location.href = 'students_dashboard.html'; // Replace with the desired redirect URL
  } else {
    // Handle invalid login
    errorMessage.innerText = 'Invalid username or password';
  }

  return false; // Prevent form submission
}

