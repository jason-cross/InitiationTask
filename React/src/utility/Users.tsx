import { useState, useEffect } from "react";

export type User = {
  id: string,
  firstName: string,
  lastName: string,
}

export const useFetch = () => {
    const [userList, setUserList] = useState<User[]>([]);
  
    useEffect(() => {
      const fetchData = async() => {
        const response = await fetch('api/users');
        const data = await response.json();
        setUserList(data.users);
      }
  
      fetchData();
    }, []);
  
    return userList;
}