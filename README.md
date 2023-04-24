### Instructions

1. Git clone this repository.
2. Once clone, `yarn` to install dependencies.
3. Run `yarn dev` in order to launch the application.

### Details

The application will assume the user is a regular `Guest`. The user can log in as a `Client` by clicking on the Sign In button on the splash page or from the button on the top right hand corner. To log in as a `Provider`, the user must click on the Provider Login link located on the bottom right hand corner.

The provider must log in and set a valid date and time in order for the client to make a booking. Logging in first as the client will show that there is no availability because nothing has been set by default. Reservations will only be valid for future dates and clients cannot book reservations that are within the 24 hour window as they must be booked 24 hours in advance.

The application is built using React, tailwindcss, Material UI, and custom hooks for state management, primarily with `useReducer` and `useState`.
