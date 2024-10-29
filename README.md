# ![Evento Logo](src/assets/letter-e.svg) EVENTO  
## 🟦 ABOUT PROJECT
Evento is an event sharing platform created for local businesses to share their upcoming events.
Local businesses are able to create their upcoming events within their account page, to create the event businesses must provide title, date, time, duration, price, address, description and upload an image to showcase to potential attendees.
Users of the platform can register and signed up to events and if they wish add events they have signed up for to their calendars.

## 🟩 HOW IT WORKS
> [!TIP]
> ### Application Link: https://appevento.netlify.app/
> ### Sign-In Information
> - Staff email: claudiocamba1@gmail.com | password: Testing4321
> - User email: user@test.com | password: test321
> ### MVP (Minimum Viable Product)
> - Creating events by staff.
>   - Sign in or sign up as staff, while signing up click the 'Check box if you are a staff member.'.
>   - On the account page fill the event form to create a new event on the homepage. 
> - Signing up to events by non-staff.
>   - Sign in or sign up as user, while signing up do **not** click the 'Check box if you are a staff member.'.
>   - Navigate to homepage and select an event by clicking learn more on event card.
>   - Sign up to events by clicking sign up on the event page.
> - Users add events to calendar if signed up.
>   - Once signed in as a user, select event from homepage.
>   - On the event page click sign up below event image and the add to calendar button should appear.
>   - The add to calendar button shows several calendar services to add to (Google, Outlook, Office365 and Yahoo).
> ### How To Create Events
> https://github.com/user-attachments/assets/4701749b-b349-469e-bedd-13bc6af0d099


## 🟦 TECHNOLOGIES
> [!NOTE]
> ### Frontend
> - This projects frontend has been setup using [Vite](https://vitejs.dev/) and [React](https://react.dev/) frameworks.
> - For the appearance of the platform SCSS/CSS and Bootstrap are being used to style components and page layouts.
> ### Backend
> - The backend is setup using [Supabase](https://supabase.com/), It allows me to setup user authentication and relational database within a single service which is free and also quick to get it up and running for my project.
> - [Supabase](https://supabase.com/) makes it is quicker and easier to scale up user authentication to include multiple services such as Google, Apple, GitHub and more.
> - Having the databases and image storage within [Supabase](https://supabase.com/) it makes it quicker and more efficient to create, read, update and delete data, especialy within the relational capability and cascading functionality (deleting an event would also delete any user sign up data relating to the event which keeps the database clean and updated). 
> ### Hosting
> - The application has been hosted on [netlify](https://www.netlify.com/) as it has free hosting plan available and well documented upload instructions.
> - The application has been deployed using github repository which automatically re-deploys when the project repository is updated.

## 🟪 RUN LOCALLY
> [!IMPORTANT]
> - Clone [evento project repository](https://github.com/ClaudioCamba/evento) to your local machine
>    - Terminal command: `git clone https://github.com/ClaudioCamba/evento.git`
> - navigate into project folder (evento)
>    - Terminal command: `cd evento`
> - Install neccessary dependencies
>    - Terminal command: `npm install`
> - Create a .env file within the project root repository ( evento/.env ) to store the supabase url and key to access the project database
>    - Terminal command: `touch .env`
>    - Paste the VITE_PUBLIC_SUPABASE_KEY and VITE_PUBLIC_SUPABASE_URL I have provided into the .env file and save.
> - Run dev version locally by running the command below that should be print a URL e.g (http://localhost:5173/). 
>    - Terminal command: `npm run dev`
> - View the project in your browser by searching the local URL e.g (http://localhost:5173/)

## 🟦 FUTURE FEATURES
> [!NOTE]
> - 💵 Add payment feature to allow users to pay online for certain events
> - 🏙 Use google map API to select event location on event creation form
> - 🗺 Show event location on a map within the event age
> - 📚 Create event list page with filters based on event values (location, price, number of attendees ect)
