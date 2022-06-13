export const AXIOS_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://sidgrinker-backend.herokuapp.com"
    : "http://localhost:8000";
