import { ApiClientError } from "./ApiClientError";

function getRandomInt(): number {
  return Math.floor(Math.random() * 4);
}

export default class ApiClient {
  fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
      // Simulate fetching data from a server (e.g., an API call)
      // For this mock, let's just throw an error
      const err = [401, 403, 404, 500];
      setTimeout(() => {
        // resolve("SUCESS FETCHED DATA")
        reject(
          new ApiClientError(
            "Failed to fetch data from the server.",
            err[getRandomInt()],
            "Server failed"
          )
        );
      }, 1000); // Simulating delay of 1 second
    });
  }
}
