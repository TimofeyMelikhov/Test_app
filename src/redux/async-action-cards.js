import axios from "axios";
import { addCards } from "./cards-reducer";

export const getCards = () => {
  return (dispatch) => {
    axios
      .get("https://zoo-animal-api.herokuapp.com/animals/rand/10")
      .then((response) => dispatch(addCards(response.data)))
      .catch((error) => console.log(error));
  };
};