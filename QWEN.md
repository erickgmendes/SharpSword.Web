# SharpSword.Web - Light Bootstrap Dashboard Angular

## Project Overview

SharpSword.Web is an Angular-based admin dashboard template called "Light Bootstrap Dashboard Angular". It's a responsive admin dashboard built on top of Bootstrap 3, designed to be beautiful and simple for creating admin panels, project management systems, web applications backend, CMS or CRM systems.

The project is based on the Creative Tim Light Bootstrap Dashboard template and includes various UI components, charts, and dashboard elements. It features 6 filter colors for the sidebar ("black", "azure","green","orange","red","purple") and supports background images.

## Technologies Used

- **Angular 14.2.0** - Frontend framework
- **Bootstrap 3.3.7** - CSS framework
- **TypeScript** - Language for development
- **SCSS** - CSS preprocessor
- **jQuery 3.5.1** - JavaScript library
- **Chartist 0.11.4** - Charting library
- **Perfect Scrollbar 1.5.0** - Custom scrollbar library
- **Animate.css 4.1.1** - CSS animations

## Key Features

- Responsive admin dashboard design
- Multiple UI components (tables, forms, notifications, maps, etc.)
- Chart integration for data visualization
- Sidebar navigation with color options
- Google Maps integration
- Notification system
- Custom scrollbars
- Material Design components

## Project Structure

```
SharpSword.Web/
├── src/                    # Source files
│   ├── app/               # Angular application modules
│   │   ├── components/    # Reusable components
│   │   ├── layouts/       # Layout components (admin layout)
│   │   ├── shared/        # Shared components (navbar, footer)
│   │   └── modules        # Feature modules
│   ├── assets/            # Static assets (images, CSS, SCSS)
│   ├── environments/      # Environment configurations
│   └── index.html         # Main HTML file
├── documentation/         # Documentation files
├── e2e/                   # End-to-end tests
├── node_modules/          # Dependencies
└── dist/                  # Build output directory
```

## Building and Running

### Prerequisites
- Node.js (from [Node.js Official Page](https://nodejs.org/en))
- Angular CLI: `npm install -g @angular/cli`

### Installation
```bash
# Navigate to project directory
cd SharpSword.Web

# Install dependencies
npm install
```

### Development Server
```bash
# Start development server
ng serve

# Or use npm script
npm start

# Navigate to http://localhost:4200/
```

### Production Build
```bash
# Build for production
npm run build

# Or with cross-env
cross-env CI=false ng build
```

### Testing
```bash
# Unit tests
npm test

# End-to-end tests
npm run e2e
```

### Additional Scripts
- `npm run lint` - Lint the code
- `npm run install:clean` - Clean install of dependencies (Unix/Mac only)

## Deployment

The project includes Genezio deployment configuration (`genezio.yaml`) for easy cloud deployment:

```yaml
name: light-bootstrap-dashboard-angular2
region: us-east-1
frontend:
  path: .
  publish: dist
  scripts:
    deploy:
      - npm install --legacy-peer-deps
      - npm run build
```

## Development Conventions

- Components follow Angular best practices
- SCSS is used for styling with Bootstrap integration
- Responsive design principles applied throughout
- Modular architecture with shared components
- TypeScript for type safety
- Component-based architecture
- Routing handled by Angular Router

## Key Modules and Components

- **Admin Layout**: Main dashboard layout component
- **Sidebar Module**: Navigation sidebar
- **Navbar Module**: Top navigation bar
- **Footer Module**: Footer component
- **Charts**: Integration with Chartist.js
- **Maps**: Google Maps integration
- **Tables**: Data table components
- **Notifications**: Alert and notification system

## Configuration Files

- `angular.json` - Angular CLI configuration
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `genezio.yaml` - Deployment configuration
- `karma.conf.js` - Unit test configuration
- `protractor.conf.js` - E2E test configuration

## License

Licensed under MIT license as specified in LICENSE.md file.