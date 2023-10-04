# URL Shortener 

A simple and efficient URL shortener service that allows users to convert long URLs into short and shareable links.

## API Endpoints

- **Shorten a URL**:
  - **Endpoint**: `POST /shorten`
  - **Body**: `{ "url": "YOUR_LONG_URL_HERE" }`
  - **Response**: `{ "id": "SHORT_ID" }`

- **Redirect to Original URL**:
  - **Endpoint**: `GET /:shortId`
  - **Response**: Redirects to the original long URL.


