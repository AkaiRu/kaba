// import add from '../../../public/add.png'
// import like from '../../../public/like.png'
// import man from '../../../public/man.png'
import {Link} from 'react-router-dom'
// import catalog from "./db.js";


export default function Card(props) {
    return (
        <div>
            <div className="card max-w-[385px] text-black">
                <img src='../../../public/man.png' alt="1" />
                <p className='text-3xl text-black py-2 px-4'>{props.date.name}</p>
                <div className="flex justify-between p-4">
                    <p className='text-black text-3xl'>{props.date.price} ₽</p>
                    <div className="flex">
                        <img src='../../../public/add.png' alt="1" />
                        <img src='../../../public/like.png' alt="1" />
                    </div>
                </div>
                <Link to={props.date.id}>Подробнее</Link>
            </div>
        </div>
    )
}
