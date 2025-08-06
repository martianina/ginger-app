# Horizon Pro Auth Components

This folder contains all the necessary components and dependencies for the Horizon Pro authentication pages.

## What's Included

### Auth Pages
- Sign In (Default & Centered layouts)
- Sign Up (Default & Centered layouts)
- Forgot Password (Default & Centered layouts)
- Verification (Default & Centered layouts)
- Lock (Default & Centered layouts)

### Core Components
- `InputField` - Form input component with auth styling
- `Checkbox` - Custom checkbox component
- `Card` - Card container component
- `NavLink` - Next.js link wrapper
- `FixedPlugin` - Dark mode toggle
- `NavbarAuth` - Navigation bar for auth pages
- `Sidebar` - Sidebar component with navigation
- `FooterAuthDefault` & `FooterAuthCentered` - Footer components

### Layout Components
- `DefaultAuthLayout` - Default auth page layout
- `CenteredAuthLayout` - Centered auth page layout

### Supporting Components
- `LineChart` - Chart component for sidebar
- `Scrollbar` - Custom scrollbar utilities
- `DashIcon` - Dashboard icon component
- Various sidebar components (Links, SidebarCard)

### Utilities & Types
- `navigation.ts` - Navigation utilities
- `routes.tsx` - Route definitions
- `navigation.d.ts` - TypeScript types
- `charts.ts` - Chart configuration data
- Context providers (SidebarContext, ConfiguratorContext)

### Assets
- Auth background images
- Layout images
- Avatar images

## Installation Instructions

1. Copy the `src` folder contents to your project's `src` directory
2. Copy the `public/img` folder contents to your project's `public/img` directory
3. Install required dependencies:

```bash
npm install react-icons react-custom-scrollbars-2 react-apexcharts react-pin-input @chakra-ui/accordion
```

4. Make sure your project has the following dependencies:
   - Next.js
   - React
   - TypeScript
   - Tailwind CSS

## Usage

The auth pages are located in `src/app/auth/` and follow Next.js App Router structure:

- `/auth/sign-in/default` - Default sign in page
- `/auth/sign-in/centered` - Centered sign in page
- `/auth/sign-up/default` - Default sign up page
- `/auth/sign-up/centered` - Centered sign up page
- `/auth/forgot-password/default` - Default forgot password page
- `/auth/forgot-password/centered` - Centered forgot password page
- `/auth/verification/default` - Default verification page
- `/auth/verification/centered` - Centered verification page
- `/auth/lock/default` - Default lock page
- `/auth/lock/centered` - Centered lock page

## Styling

The components use Tailwind CSS classes and expect the Horizon UI theme variables to be available. Make sure your Tailwind configuration includes the necessary color variables and utilities.

## Notes

- The components are designed to work with the Horizon Pro theme
- Some components may require additional configuration for your specific use case
- The verification pages use `react-pin-input` for OTP input
- The sidebar includes a chart component that requires `react-apexcharts`
- Dark mode functionality is included via the `FixedPlugin` component 