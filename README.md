# Dashboard Next.js Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It features a responsive dashboard with theme toggling and a sidebar navigation.

## Project Details

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Theme Management**: next-themes
- **Font**: Geist

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── menuList.ts
├── components/
│   ├── DashboardLayout.tsx
│   ├── MenuItem.tsx
│   └── Sidebar.tsx
└── public/
    └── next.svg
```

- **app/layout.tsx**: Root layout with `ThemeProvider`.
- **app/page.tsx**: Main page using `DashboardLayout`.
- **components/DashboardLayout.tsx**: Layout component with header and theme toggle.
- **components/Sidebar.tsx**: Sidebar with navigation links.
- **components/MenuItem.tsx**: Individual menu item component.
- **app/globals.css**: Global styles with theme variables.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- **Theme Toggle**: Click the theme toggle button in the header to switch between light and dark modes.
- **Sidebar Navigation**: Use the sidebar to navigate between different sections of the dashboard.

## Adding a New Page

To add a new page to this layout, follow these steps:

1. **Create a New Page File**: Add a new file in the `src/app` directory, for example, `newPage.tsx`.

2. **Use the `DashboardLayout` Component**: Import and wrap your page content with the `DashboardLayout` component.

   ```typescript
   import DashboardLayout from "../components/DashboardLayout";

   export default function NewPage() {
     return (
       <DashboardLayout>
         <main className='flex-1 min-h-screen p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white'>
           <h2 className='text-2xl font-semibold mb-4'>New Page</h2>
           <p>This is the content of the new page.</p>
         </main>
       </DashboardLayout>
     );
   }
   ```

3. **Add to Sidebar Navigation**: Update `menuList.ts` to include the new page in the sidebar.

   ```typescript
   export const menuList = [
     { name: "Dashboard", icon: "HomeIcon", href: "/" },
     { name: "Analytics", icon: "ChartBarIcon", href: "/analytics" },
     { name: "Settings", icon: "CogIcon", href: "/settings" },
     { name: "New Page", icon: "HomeIcon", href: "/newPage" }, // Add this line
   ];
   ```

4. **Navigate to the New Page**: Use the sidebar to navigate to your new page.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
