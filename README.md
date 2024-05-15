# Project Setup and Usage

This guide outlines the steps to install dependencies, run the application in development mode, build for production, and preview the built project.

## Prerequisites

- **Node.js and npm:** Ensure you have Node.js and npm (Node Package Manager) installed on your system. You can download them from the official Node.js website: https://nodejs.org/en/download

## Clone

**Clone the repository:** If you haven't already, clone this repository using Git: `git clone https://your-github-repo-url.git`

## Installation

Navigate to the project directory and run the following command to install all the required packages from `package.json`

`npm install`

## Start development server

Run the following command to start the development server

`npm run dev`

## Create production build

Run the following command to create an optimized production build of your application

`npm run build`

## Preview Build

This allows you to preview the application in its production-ready state

`npm run preview`

## Environment Variables

Create a `.env` file in your project's root directory to store sensitive environment variables. This file should **not** be committed to version control.

The following environment variables are required for the application to function properly:

- **`VITE_BACKEND_API_URL`:** The base URL for your backend API.
- **`VITE_CARDS_COUNT_TOBE_SHOWN`:** The default number of cards to display on a row.
- **`VITE_CARDS_COUNT_TOBE_SHOWN_IN_CATEGORY_PAGE`:** The number of cards to display on a specific category page.
- **`VITE_CARD_SIZE_IN_PX`:** The desired width of individual product cards (specified in pixels).

**Example `.env` file content:**

```
VITE_BACKEND_API_URL=https://fakestoreapi.com
VITE_CARDS_COUNT_TOBE_SHOWN=4
VITE_CARDS_COUNT_TOBE_SHOWN_IN_CATEGORY_PAGE=20
VITE_CARD_SIZE_IN_PX=300
```
