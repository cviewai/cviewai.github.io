# CrystalView.ai Website

This repository contains the source code for the official CrystalView.ai website, built with React and Tailwind CSS, and deployed on GitHub Pages.

## Local Development

To run the website on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/cviewai/cviewai.github.io.git
    cd cviewai.github.io
    ```

2.  **Install dependencies:**
    Make sure you have Node.js installed. Then, run the following command to install the necessary packages:
    ```bash
    npm install
    ```

3.  **Start the development server:**
    This command will start a local development server (usually on `http://localhost:1234`) with hot-reloading enabled.
    ```bash
    npm run dev
    ```

## Running Tests

This project uses Cypress for end-to-end testing to verify all navigation and links.

To run the tests:

1.  **Start the development server** in one terminal:
    ```bash
    npm run dev
    ```

2.  **Run Cypress** in a separate terminal:
    ```bash
    npm run cy:run
    ```

## Contact Form

The contact page uses an embedded Google Form to handle submissions.

-   **To edit the form's fields or view responses,** you must do so from the Google Form itself.
-   The form is embedded as an `iframe` in `src/pages/ContactPage.jsx`.

## Deployment

The website is deployed to GitHub Pages. The deployment process is automated via an npm script.

To deploy the website, simply run the following command:
```bash
npm run deploy
```

This command will:
1.  Build the production version of the site into the `dist` folder.
2.  Push the contents of the `dist` folder to the `gh-pages` branch.
3.  Automatically handle the `CNAME` file to ensure the custom domain (`crystalview.ai`) is configured correctly.

This project uses `BrowserRouter`. To support direct navigation to sub-pages (e.g., `/contact`) on GitHub Pages, a `404.html` redirect workaround has been implemented.
