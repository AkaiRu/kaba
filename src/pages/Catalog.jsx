import React, { useState } from 'react'
import Card from '../components/card/CardTovar.jsx'
import catalog from '../components/card/db.js'
import { Link } from 'react-router-dom';



function Catalog() {

    // const[query,setQuery]=useState("");



    return (
        <section >
            <div className='container '>
                <div className='pt-[23px]'>
                    <div className='flex items-center gap-[11px]'>
                        <Link to='/' className='text-xl text-black'>Главная</Link>
                        <div className='text-xl text-black'>\</div>
                        <Link to='/catalog' className='text-xl text-black'>Каталог</Link>
                    </div>
                </div>
                <div className='flex justify-center items-center pt-[44px]'>
                    <ul className='flex items-center gap-5'>
                        <li><a href="#" className='catalog__filter-item active'>Всё</a></li>
                        <li><a href="#" className='catalog__filter-item'>Топ</a></li>
                        <li><a href="#" className='catalog__filter-item'>Низ</a></li>
                        <li><a href="#" className='catalog__filter-item'>Обувь</a></li>
                    </ul>
                </div>
                <div>
                    <div className='my-20'>
                        <ul className='catalog-list flex flex-wrap gap-20'>
                            {catalog?.map((card) =>
                                <Card date={card} key={card.id}/>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catalog