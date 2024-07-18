# Cypress and Playwright Grep Example

A simple example demonstrating how `grep` works in Cypress and Playwright.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project showcases the usage of `grep` in Cypress and Playwright for filtering tests based on specified criteria.

## Installation

To set up the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/EmilChurlevski/cypress-playwright-grep-example.git
    ```
2. Navigate to the project directory:
    ```sh
    cd cypress-playwright-grep-example
    ```
3. Install the dependencies for cypress:
    ```sh
    cd cypress
    npm install
    ```
4. Install the dependencies for playwright: 
    ```sh
   cd playwright 
   npm install
   npx playwright install 
   ```

## Usage

### Running Cypress Tests

To run Cypress tests with `grep` run the package.json script:

```sh
npm run run:smoke:tests
npm run run:ui:tests
```

### Running Playwright Tests

To run Playwright tests with `grep` run the package.json script:

```sh
npm run run:smoke:tests
npm run run:ui:tests
```

## Project Structure

* cypress/: Cypress test files and configuration. 
* playwright/: Playwright test files and configuration.
* .gitignore: Git ignore file.
* README.md: Project documentation.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or additions.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
