import instance from "./axiosInstance";

const askAgentApi = (query: string) => {
  return instance.post("/ask/", {
    query
  });
};

export default askAgentApi;
