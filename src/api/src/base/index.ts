import axios from "axios";

export function setup() {
  const baseURL = "/";

  const apiClient = axios.create({
    baseURL,
    headers: {
      "Cache-Control": "no-cache",
    },
  });

  return { apiClient };
}

const {
  apiClient: { get, post, put, patch, delete: destroy },
} = setup();

export { get, post, put, patch, destroy };
