import { useState, useEffect } from "react";
import axios from "axios";
// interfaces
import { ServerItem } from "../Constants/interfaces";
import { CurriculumItem } from "../Constants/interfaces";

const arrayBufferToBase64 = (buffer: Uint8Array) => {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

const useFetchItem = () => {
  const [data, setData] = useState<CurriculumItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ServerItem[]>(
          "https://kargo-node.onrender.com/curriculum"
        );
        const curriculumData = response.data.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          image: `data:image/jpeg;base64,${arrayBufferToBase64(
            new Uint8Array(item.image.data)
          )}`,
        }));
        setData(curriculumData);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data: " + err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchItem;
