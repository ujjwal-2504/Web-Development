import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const isLoggedIn = () => {
  const { email } = useContext(UserContext);

  if (email !== "") {
    return true;
  } else {
    return false;
  }
};

export default isLoggedIn;
