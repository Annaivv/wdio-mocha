## Project Structure

- `config/`: WebDriverIO configuration files
- `data/`: Test data files
- `po/`: Page Object Model implementation
  - `components/`: Reusable UI components
  - `pages/`: Page objects for different application pages
- `tests/spec/`: Test files

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd wdio-mocha
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the tests

```bash
npm run test
```

This will execute the WebDriverIO tests using the configuration in `config/wdio.conf.js`.
