import { useEffect, useState } from "react";
import { users as list } from "../../Services/users";
import { ContactCard } from "../../Components/ContactCard";
import { Box, Typography } from "@mui/material";
import { api } from "../../Services/api";
import { useLogin } from "../../Providers/Login";

const Chat = () => {
  // const users = list;
  const [usersList, setUsersList] = useState([]);
  const { user } = JSON.parse(localStorage.getItem("@buyAnIdea:Login"));

  useEffect(() => {
    api.get("/users").then((res) => {
      setUsersList(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Matches</h2>
      <Box mt={5}>
        {usersList.map((userData, index) => {
          console.log(userData);
          const data = userData.matches.filter(
            (data) => data.matchId === user.id
          );

          console.log(data);

          if (data.length > 0)
            return (
              <ContactCard key={index} user={user} message={data[0].message} />
            );
        })}
      </Box>
    </div>
  );
};

export default Chat;
