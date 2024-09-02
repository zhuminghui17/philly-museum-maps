# Philly Museum Maps

philly-museum-maps.vercel.app

### 🎨 An Interactive Map and Museum Guide for Philadelphia

Philly Museum Maps is a React-based web application that provides an interactive way to explore art museums across Philadelphia. Users can view a list of museums, see details about each museum, and interact with a dynamic map that highlights and zooms in on selected museums.

## Features

- **Interactive Map**: A Leaflet-powered map displays the locations of art museums in Philadelphia.
- **Searchable Museum List**: A sidebar allows users to search through a list of museums by name and view their addresses.
- **Dynamic Details View**: Upon selecting a museum from the list or the map, detailed information is displayed in a right-hand sidebar.
- **Responsive Map Markers**: Map markers for each museum open popups automatically when selected, either from the map or the sidebar.
- **Smooth Map Transitions**: The map smoothly centers and zooms in on selected museums, enhancing the user experience.


## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/philly-museum-maps.git
    cd maps
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the Development Server**:
    ```bash
    npm start
    ```
    This will start the app on `http://localhost:3000`.

4. **API Data**:
    - Ensure that you have the museum data available in `public/museum-data.json`. This file should contain the list of museums in Philadelphia with their details (name, location, address, and description).

## How It Works
- **Initialization**: When the app loads, it fetches the museum data from museum-data.json and displays all the museums on the map, centered on Philadelphia with a zoom level that shows the city.

- **Selecting a Museum**: Users can select a museum either by clicking on a marker on the map or by clicking on a museum name in the left sidebar. The map will then center on the selected museum, and the right sidebar will display detailed information about it.

- **Search Functionality**: The search input in the left sidebar allows users to filter the list of museums by name, making it easy to find specific museums.

- **Dynamic Popups**: When a museum is selected, its corresponding marker's popup will automatically open, providing immediate visual feedback on the map.

## To-do

- [ ] Integrated with Google Maps or other API to enrich the museum details page. 

- [ ] Show 3 pieces of art work for each museum at the museum details page. 

- [ ] Make the UI prettier. Font, color, etc. 

- [ ] Responsive Design

## Nice-to-Have

- [ ] Integrate with OpenAI API for recommendation and fun!