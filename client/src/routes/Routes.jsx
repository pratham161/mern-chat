import {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";
import RegisterAndLoginForm from "../pages/RegisterAndLoginForm.jsx";
import Chat from "../pages/Chat";

export default function Routes() {
  const {username, id} = useContext(UserContext);

  if (username) {
    return <Chat />;
  }

  return (
    <RegisterAndLoginForm />
  );
}