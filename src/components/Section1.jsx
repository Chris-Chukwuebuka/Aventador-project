import React,{useState} from 'react'
import "../styles/section1.css"
import data from "../data"
import Adventures from './Adventures';
const Section1 = () => {
    const [adventures, setAdventures] = useState(data);
    //remove adventure function
    const removeAdventure = (id) => {
        const remainingAdventures = adventures.filter((a) => a.id !== id);
        setAdventures(remainingAdventures);
    };
    //Refresh function
    const refresh = () => {
        setAdventures(data)
    }
    return(
    <div className="Section1">
        <div className="sec1-heading">
            <h2 className='take'>Take Yourself</h2>
            <h2 className='ideas'>Adventure Ideas</h2>
        </div>  
            <div>
                <Adventures adventures={adventures} removeAdventure={removeAdventure} refresh={refresh}/>
            </div>
    </div>
    );;
}

export default Section1