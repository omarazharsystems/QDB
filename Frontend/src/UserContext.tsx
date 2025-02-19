import { createContext, useContext } from "react";
import useFetchUser from "./hooks/useUser";
import { User } from "./model/UserType";

const UserContext = createContext<User | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = useFetchUser();
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUserData = () => useContext(UserContext);
