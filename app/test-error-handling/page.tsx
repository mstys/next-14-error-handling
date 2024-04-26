import { notFound } from "next/navigation";
import { ApiClientError } from "../helpers/ApiClientError";
import ApiClient from "../helpers/apiMock";

export const dynamic = "force-dynamic";

export default async function Shop() {
  try {
    const data = await getApiData();
    return <div>VALID RESPONSE: {data}</div>;
  } catch (e) {
    let err = e as ApiClientError;

    if (err.httpCode === 403) {
      return <div>ERROR {`403 - ${err.message}`} </div>;
    } else if (err.httpCode === 401) {
      return <div> ERROR 401 - Check access rules</div>;
    } else if (err.httpCode === 404) {
      notFound();
    } else throw e; // unhandled error
  }
}

const getApiData = async () => {
  const server = new ApiClient();

  return await server.fetchData();
};
