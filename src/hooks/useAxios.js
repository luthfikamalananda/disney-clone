import { useContext, useEffect } from "react";
import instance from "../utils/axiosInstance";
import { AuthContext } from "../context/AuthProvider";

export default function useAxios() {

  const auth = useContext(AuthContext)

  useEffect(() => {
    const resIntercept = instance.interceptors.response.use(
      (res) => res,
      async (err) => {
        if (err.response.status === 401) {
          auth.setCredential(null)
        }
        return Promise.reject(err);
      }
    );
    return () => {
      instance.interceptors.response.eject(resIntercept);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return instance;
}