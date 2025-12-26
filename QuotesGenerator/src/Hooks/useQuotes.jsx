import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function useQuotes(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // save controller in a ref so it doesn’t recreate every render
  const controllerRef = useRef(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // create new AbortController for each request
      controllerRef.current = new AbortController();

      const res = await axios.get(url, {
        signal: controllerRef.current.signal,
      });

      setData(res.data);
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("Request canceled");
        return;
      }
      setError("Failed To Fetch Data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    // cleanup: abort if component unmounts
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, [url]);

  return { data, loading, error, fetchData };
}
