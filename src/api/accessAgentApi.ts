import instance from "./axiosInstance";

const accessAgentApi = (fullName: string, email: string) => {
  return instance.post("/user/access/", {
    full_name: fullName,
    email
  });
};

export default accessAgentApi;
