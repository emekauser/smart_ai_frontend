import { getToken } from "./AppCookie";
import instance from "./axiosInstance";

const askAgentApi = (query: string) => {
  setHeadersIfNone();
  return instance.post("/ask/", {
    query
  });
};

const setHeadersIfNone = () => {
  if (instance.defaults.headers.common["Authorization"] === undefined) {
    const token = getToken();
    if (token)
      instance.defaults.headers.common["Authorization"] = `Token ${token}`;
  }
};

export default askAgentApi;
