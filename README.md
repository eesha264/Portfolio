# Portfolio

A modern portfolio website built with React, TypeScript, and Tailwind CSS.

## Technologies

This project is built with:
- HTML
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Google Sheets (for project data)

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd portfolio

# Step 3: Install the necessary dependencies
npm i

# Step 4: Start the development server
npm run dev
```

## Google Sheets Setup

To use Google Sheets as your backend for projects:

1. Create a Google Sheet with the following columns (in order):
   - title
   - description
   - techStack
   - github
   - demo
   - image

2. Publish your Google Sheet:
   - Go to File → Share → Publish to web
   - Select the sheet and choose "CSV" format
   - Copy the published URL

3. Update the Google Sheet ID in `src/lib/googleSheets.ts`:
   - Extract the Sheet ID from your published URL
   - Or use the full published CSV URL

## Project Structure

- `/src/pages` - Page components
- `/src/components` - Reusable components
- `/src/lib` - Utility functions and services

## Build

```sh
npm run build
```

## Preview

```sh
npm run preview
```
