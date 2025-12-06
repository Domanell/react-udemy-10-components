# React Components Playground

This is a UI component playground built with React and Tailwind CSS. It allows users to explore, test, and learn from a variety of reusable components and custom hooks. The project demonstrates modern React patterns, custom navigation, and utility-first styling.

## Features

- **Reusable Components**: Accordion, Button, Dropdown, Modal, Panel, Sidebar, Table, SortableTable, Link, Route
- **Custom Hooks**: Includes hooks like `use-navigation` for navigation logic and `use-sort` for table sorting
- **Custom Routing**: Simple navigation context and Route component for SPA-like navigation without external libraries
- **Expandable Panels**: Collapsible UI components for better organization of content
- **Responsive Design**: Styled with Tailwind CSS for a modern and responsive UI

## Technologies Used

- **React**: For building the user interface
- **Tailwind CSS**: For utility-first styling

## Custom Hooks

### use-navigation

Custom hook for managing navigation state and logic. Provides:

- Navigation state and current path
- Functions to update and listen to navigation changes

### use-sort

Custom hook for sorting table data. Provides:

- Sorting state and direction
- Functions to sort data by column

## Components

The project includes the following reusable components:

- **Accordion**: Expandable/collapsible panels for organizing content
- **Button**: Customizable button component
- **Dropdown**: Select options from a list
- **Modal**: Dialog overlay for displaying content
- **Panel**: Container for grouping UI elements
- **Sidebar**: Navigation sidebar for switching between pages
- **Table**: Basic table for displaying data
- **SortableTable**: Table with sorting functionality
- **Link**: Custom navigation link
- **Route**: Handles route matching and rendering

## Project Structure

```
src/
  App.js                # Main app component
  index.js              # Entry point
  index.css             # Tailwind CSS imports
  components/           # Reusable UI components
    Accordion.js
    Button.js
    Dropdown.js
    Link.js
    Modal.js
    Panel.js
    Route.js
    Sidebar.js
    SortableTable.js
    Table.js
  context/
    navigation.js       # Navigation context for custom routing
  hooks/
    use-navigation.js   # Custom hook for navigation
    use-sort.js         # Custom hook for sorting table data
  pages/                # Demo pages for each component
    AccordionPage.js
    ButtonPage.js
    CounterPage.js
    DropdownPage.js
    ModalPage.js
    TablePage.js
public/
  index.html            # HTML template
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd 10-comps
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open the application in your browser at http://localhost:3000.

## Usage

Navigate through the sidebar to explore different component demos. Each page demonstrates the usage and props of a specific component.

## Scripts

- `npm start`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint to check for code quality.

## License

This project is for educational purposes.
