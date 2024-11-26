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

##Configure Environment Variables

NEXT_PUBLIC_MAKES_DATA_LINK=https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json
NEXT_PUBLIC_MODELS_DATA_LINK=https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json

## Technologies Used

- **Next.js** (React Framework)
- **TypeScript**
- **Tailwind CSS** (Utility-first CSS framework)
- **Axios** (HTTP client)
- **Prettier & ESLint** (Code formatting and linting)

## Features

- **Vehicle Makes:** Search for vehicle makes by make and year.
- **Vehicle Models:** Display a list of vehicle models (e.g., Ford, Toyota) fetched from an external API.
- **Environment Variables:** Use environment variables to manage API URLs and other sensitive configurations.
- **Responsive Design:** The app is fully responsive and optimized for both desktop and mobile devices.
