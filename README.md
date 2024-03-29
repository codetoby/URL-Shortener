# URL Shortener 

A simple and efficient URL shortener service that allows users to convert long URLs into short and shareable links.

## API Endpoints

- **Shorten a URL**:
  - **Endpoint**: `POST /`
  - **Body**: `{ "url": "YOUR_LONG_URL_HERE" }`
  - **Response**: `{ "id": "SHORT_ID" }`

- **Redirect to Original URL**:
  - **Endpoint**: `GET /:shortId`
  - **Response**: Redirects to the original long URL.

**Database Configuration**:
- Create a `.env` file in the root directory.
- Configure the database settings in the `.env` file. Example: `.env.example`

**Run**:
- Make sure to have docker installed
- ```docker-compose up```


