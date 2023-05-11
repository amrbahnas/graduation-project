import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
const useGet = (endPoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get(endPoint, { signal: controller.signal })
      .then((res) => {
        setLoading(true);
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

export default useGet;
