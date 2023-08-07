import { useState } from 'react'
import Card from './Card';

const Cards = () => {
    const min = 1;
    const max = 18;
    const generateRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
    const groups = Array.from({ length: max }, () => generateRandom(min, max));
  const [items, setItems] = useState([
    { val: groups[0], stat: "" },
    { val: groups[0], stat: "" },
    { val: groups[1], stat: "" },
    { val: groups[1], stat: "" },
    { val: groups[2], stat: "" },
    { val: groups[2], stat: "" },
    { val: groups[3], stat: "" },
    { val: groups[3], stat: "" },
    { val: groups[4], stat: "" },
    { val: groups[4], stat: "" },
    { val: groups[5], stat: "" },
    { val: groups[5], stat: "" },
    { val: groups[6], stat: "" },
    { val: groups[6], stat: "" },
    { val: groups[7], stat: "" },
    { val: groups[7], stat: "" },
    { val: groups[8], stat: "" },
    { val: groups[8], stat: "" },
    { val: groups[9], stat: "" },
    { val: groups[9], stat: "" },
    { val: groups[10], stat: "" },
    { val: groups[10], stat: "" },
    { val: groups[11], stat: "" },
    { val: groups[11], stat: "" },
    { val: groups[12], stat: "" },
    { val: groups[12], stat: "" },
    { val: groups[13], stat: "" },
    { val: groups[13], stat: "" },
    { val: groups[14], stat: "" },
    { val: groups[14], stat: "" },
    { val: groups[15], stat: "" },
    { val: groups[15], stat: "" },
    { val: groups[16], stat: "" },
    { val: groups[16], stat: "" },
    { val: groups[17], stat: "" },
    { val: groups[17], stat: "" },
].sort(() => Math.random() - 0.5));

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
