import React, { useState, useEffect} from "react";
import "./user.css";
import User from "./User";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Users() {
  const [data, setData] = useState([]);

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1);

  const handleChange = (e, value) => {
    setPage(value);
  };

  const url = "https://reqres.in/api/users";

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${url}?page=${page}`);
        const json = await res.json();
        setData(json.data);
        setTotalPages(json.total_pages);
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setIsLoading(false);
    };
    fetchUsers();
  }, [page]);

  return (
      <div className="container">
        {isLoading ? (
          <div>Loading ... {error}</div>
        ) : (
          <div className="allUsers">
            {data.map((item) => {
              return (
                <User
                  key={item.id}
                  avatar={item.avatar}
                  first_name={item.first_name}
                  last_name={item.last_name}
                  email={item.email}
                  onClick={() => console.log(item.id)}
                />
              );
            })}
          </div>
        )}

        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}

            shape="rounded"
          />
        </Stack>
      </div>
  
  );
}
