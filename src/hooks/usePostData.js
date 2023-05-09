import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
const usePostData = (endPoint, body) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .post(endPoint, body, { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { data, loading, error };
};

export default usePostData;
