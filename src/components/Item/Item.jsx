import classes from './Item.module.css'
import { useDispatch } from 'react-redux';
import {likeChanger, removeCards} from '../../redux/cards-reducer'

const Item = ({
  name, 
  image_link, 
  id, 
  isLike,
  diet
}) => {

  const dispatch = useDispatch()

  const changeLike = () => {
    dispatch(likeChanger(id))
  }

  const deleteCard = () => {
    dispatch(removeCards(id))
  }

  return (
    <>
      <div className={classes.item}>
        <img src={image_link} alt="Img on card" />
        <p className={classes.name}> {name} </p>
        <p>Diet: {diet} </p>
        <div className={isLike ? classes.like_active : classes.like} onClick={changeLike}>Like</div>
        <div className={classes.del} onClick={deleteCard}></div>
      </div>
    </>
  )
}

export default Item;