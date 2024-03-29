# Full Stack Airbnb Clone


Airbnb Clone is a web application project aimed at replicating the core functionality and user experience of the Airbnb platform while leveraging the cutting-edge features introduced in Next.js 13. This project combines modern web development practices, the latest technologies, and your creative vision to build a fully functional property rental marketplace.


**Stack:** 
Next.js 13 App Router, React, Tailwind, Prisma, MongoDB, NextAuth 

**Features:**

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Credential authentication
- Google authentication
- Github authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Calendars with react-date-range
- Page loading state
- Page empty state
- Booking / Reservation system
- Guest reservation cancellation
- Owner reservation cancellation
- Creation and deletion of properties
- Pricing calculation
- Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
- For example we will filter out properties that have a reservation in your desired date range to travel
- Favorites system
- Shareable URL filters
- Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results
- How to write POST and DELETE routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle files like error.tsx and loading.tsx which are new - Next 13 templating files to unify loading and error handling
- How to handle relations between Server and Child components!
## Screenshots

![App Screenshot](https://i.imgur.com/WvI7KXR.png)

![App Screenshot](https://i.imgur.com/uAdBHPU.png)

![App Screenshot](https://i.imgur.com/bPRKN1E.png)


## Demo

[AirbnbClone](airexbnb-clone.vercel.app)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
```
`DATABASE_URL`
`GOOGLE_CLIENT_ID`
`GOOGLE_CLIENT_SECRET`
`GITHUB_ID`
`GITHUB_SECRET`
`NEXTAUTH_SECRET`
```

## Prerequisites
Node version 14.x

## Run Locally
Clone the project

```bash
  git clone https://github.com/souhail-ouabou/Airbnb-Clone-Next13
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```
Setup Prisma

```bash
npx prisma db push
```
Start the app

```bash
  npm run dev
```

