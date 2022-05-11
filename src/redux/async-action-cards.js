import axios from "axios";
import { addCards, setIsFetching } from "./cards-reducer";

export const getCards = () => {
  return async (dispatch) => {
    dispatch(setIsFetching(true))
    const response = await axios.get("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    dispatch(addCards(response.data))
  };
};