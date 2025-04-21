
# PHI Redaction UI

## Setup and Installation

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/Hannan940/PHI_UI.git
```

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
npm install 
```

```bash
npm i 
```

### 3. Run the Application

Start the development server:

```bash
ng serve
```

The application will be available at `http://localhost:4200`.

## Important Commands

- **To install Angular CLI** (if not installed):

```bash
npm install -g @angular/cli
```

- **To build the project** for production:

```bash
ng build --prod
```

- **To run the tests**:

```bash
ng test
```

- **To run the end-to-end tests**:

```bash
ng e2e
```

## API Integration

Ensure the backend API is running (replace `localhost:44396` in file-processor.component.ts line no 17. with your backend API URL) before making requests.
Frontend needed was basic so I kept it in same file otherwise we can read it from any config.json file or environment file.
