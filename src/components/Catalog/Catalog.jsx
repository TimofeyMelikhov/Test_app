import classes from './Catalog.module.css';
import Item from '../Item/Item'
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getCards} from '../../redux/async-action-cards'

const Catalog = () => {

  const dispatch = useDispatch()
  const isFetching = useSelector(state => state.isFetching)
  const cardsState = useSelector(state => state.cards)
  const cardsStateOnlyLike = cardsState.filter(card => card.isLike)

  const [likesFilter, setLikesFilter] = useState(false)

  useEffect(() => {
    dispatch(getCards())
  }, [dispatch]);

  const filterByLikes = () => {
    setLikesFilter(!likesFilter)
  }

  const selectionArr = likesFilter ? cardsStateOnlyLike : cardsState

  return (
    <>
      <div className={classes.likesFilter} onClick={filterByLikes}> 
        {likesFilter ? 'Показать все' : 'Показать только лайки'} 
      </div> 
      <div className={classes.container}>
        { !isFetching 
          ? 
            selectionArr.map(({id, diet, image_link, isLike, name}) => {
              return <Item key={id} diet={diet} image_link={image_link} id={id} isLike={isLike} name={name} />
            }) 
          : 
            <div className={classes.fetching}/> 
        }
      </div>
    </>
  )
}

export default Catalog;