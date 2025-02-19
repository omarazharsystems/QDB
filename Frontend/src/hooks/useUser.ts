import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  name: string;
  email: string;
  id: number;
}

export default function useFetchUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const randomUserId = Math.floor(Math.random() * 10) + 1;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URI}/users/${randomUserId}`
        );
        setUser(response.data);
      } catch (error) {
        setUser(null);
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []);

  return user;
}
