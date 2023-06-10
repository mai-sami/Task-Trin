import axios from "axios";
import { useState } from "react";
import { Base_Url } from "../config/api";
  
export const useProfileData = () => {
  const [data, setData] = useState([]);
   const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const getProfileDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${Base_Url}demo_profile`);
      setLoading(false);
      setData(response.data);
     } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return { getProfileDetails, data, isLoading };
};
