
# iNotebook

iNotebook is a note-taking application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to register, log in, and manage their notes efficiently.

## Deployed Application

Check out the live version of the application: [iNotebook on Render](https://inotes-deploy-frontend.onrender.com)

## Features

- User Authentication (Register, Login, Logout)
- Create, Read, Update, and Delete Notes
- Responsive Design
- Secure password handling with JWT and bcrypt

## Project Structure

```
inotebook/
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── (other backend files)
│
├── frontend/
│   ├── package.json
│   ├── (other frontend files)
│
├── Dockerfile
├── package.json
├── docker-compose.yml
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Rajat-Gupta-Work/MERN-APP-iNotes
   cd MERN-APP-iNotes
   ```

2. Install dependencies for both backend and frontend:
   ```sh
   npm install
   cd backend
   npm install
   cd ../frontend
   npm install
   cd ..
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory and add the following:
     ```
     MONGODB_URI=your_mongodb_atlas_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. Run the application:
   ```sh
   npm run dev
   ```

## Technologies Used

- **Frontend:** React, React Router, Axios
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB Atlas
- **Authentication:** JWT, bcrypt
- **Containerization:** Docker, Docker Compose

## Docker

Build and run the application using Docker:
```sh
docker-compose up --build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
