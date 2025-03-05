# ACES MERN Workshop 1.0

This project is a simple MERN (MongoDB, Express, React, Node.js) application developed for the ACES MERN Workshop 1.0. It includes a form to submit responses and a page to view all submitted responses.

## Prerequisites

- Node.js (v22.x & above)
- npm (Node Package Manager)
- MongoDB Atlas

## Installation

1. **Install Node.js and npm**

   Download and install **Node.js** from the [official website](https://nodejs.org/). **npm** is included with Node.js.

2. **Clone the repository**

   ```sh
   git clone https://github.com/your-username/MERN-FEB-MARCH.git
   cd MERN-FEB-MARCH
   ```

3. **Install project dependencies**

   ```sh
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the root of your project directory and add your MongoDB connection string:

   ```env
   MONGO_URI=your_mongodb_connection_string
   ```

   Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

## Running the Project

You can start the project in development mode using `nodemon` or in production mode using `node`.

- **Development mode**

  ```sh
  npm run dev
  ```

- **Production mode**

  ```sh
  npm start
  ```

## Accessing the Application

Open your browser and navigate to `http://localhost:3000` to access the application.

## Project Structure

- `app.js`: Main application file.
- `views/index.ejs`: Form to submit responses.
- `views/responses.ejs`: Page to view all submitted responses.
- `.env`: Environment variables file (not included in the repository).
- `package.json`: Project metadata and dependencies.

## Deployment

To deploy your application to Vercel, just push to your repository & Vercel will continuously auto-deploy your app ;)

[Vercel Account Required]

---

Happy coding! If you have any questions, feel free to reach out to the ACES RMDSSOE team.
