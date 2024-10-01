# Evento

## Project Summary
Evento is an event sharing platform created for local businesses to share their upcoming events.
Local businesses are able to create their upcoming events within their account page, to create the event businesses must provide title, date, time, duration, price, address, description and upload an image to showcase to potential attendees.
Users of the platform can register and signed up to events and if they wish add events they have signed up for to their calendars.

## 💫 Frontend 

- This projects frontend has been setup using [Vite](https://vitejs.dev/) and [React](https://react.dev/).
- For the appearance of the platform SCSS/CSS and Bootstrap are being used to style components and page layouts.

## 💫 Backend

- The backend is setup using [Supabase](https://supabase.com/), It allows me to setup user authentication and relational database within a single service which is free and also quick to get it up and running for my project.
  - [Supabase](https://supabase.com/) makes it is quicker and easier to scale up user authentication to include multiple services such as Google, Apple, GitHub and more.
  - Having the databases and image storage within [Supabase](https://supabase.com/) it makes it quicker and more efficient to create, read, update and delete data, especialy within the relational capability and cascading functionality (deleting an event would also delete any user sign up data relating to the event which keeps the database clean and updated). 
