# Next Gallery

This project demonstrates the key features of **Next.js 14**, focusing on its powerful app router capabilities. It provides a simple and elegant image showcase that interacts with the Unsplash API to fetch and display images.

## Features

This project highlights several key features of Next.js 14:

- **Static and Dynamic Server-Side Rendering**: Efficiently render pages using static generation and server-side logic.
- **Incremental Static Regeneration**: Automatically update static content without a full rebuild.
- **Route Handlers (API Endpoints)**: Create custom API routes for server-side logic directly within your Next.js app.
- **Metadata API**: Manage and optimize metadata for improved SEO and social media sharing.
- **And More**: Additional features that make building performant and scalable applications easier.

## Unsplash API Integration

The website uses the Unsplash API to fetch and display image content. Please note that Unsplash has a free quota limit of **50 requests per hour**, so you may encounter errors if you exceed this limit.

## Exploring Next.js 14

This project serves as a hands-on exploration of Next.js 14 through a straightforward and stylish image showcase.

## Getting Started

To run this project locally and explore its features, follow these steps:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine.
- **pnpm**: This project uses pnpm as the package manager. If you don't have pnpm installed, you can install it globally using:
  npm install -g pnpm

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/nextjs-14-showcase.git
   ```

2. Navigate to the project directory:
   ```
   cd nextjs-14-showcase
   ```
3. Install the dependencies:

```
 pnpm install
```

### Set up environment variables:

1. Create a `.env.local` file in the root of your project.
2. Add the following environment variable:
   UNSPLASH_ACCESS_KEY=your_unsplash_access_key

Replace `your_unsplash_access_key` with your actual Unsplash API access key.

### Running the Project

Start the development server using:

```
pnpm dev
```

Open your browser and navigate to `http://localhost:3000` to view the app.
