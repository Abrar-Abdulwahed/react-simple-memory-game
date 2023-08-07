import { useState } from 'react'
import Card from './Card';

const Cards = () => {
    const min = 1;
    const max = 18;
    const generateRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const groups = Array.from({ length: max }, () => generateRandom(min, max));
    const [items, setItems] = useState(
        Array.from({ length: groups.length * 2 }, (_, index) => ({
            val: groups[Math.floor(index / 2)],
            stat: ""
        })).sort(() => Math.random() - 0.5)
    );

    const [prev, setPrev] = useState(-1)
    function handleClick(idx){
        if(prev === -1){
            items[idx].stat = " active"
            setItems([...items])
            setPrev(idx)
        }else{
            if(idx !== prev)
                check(idx)
        }
    }

    function check(current){
        if(items[current].val == items[prev].val){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }
  return (
        <div className='game-board'>
          {items.map((item,i) => <Card key={i} item={item} idx={i} handleCardClick={handleClick}/>)}
        </div>
  )
}
export default Cards;
