import {Routes,Route} from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Banner from './components/banner/Banner.jsx'
import Footer from './components/footer/Footer.jsx'
import CatalogPage from './pages/Catalog.jsx'
import './assets/style/global.css'

function App(){
    return(
        <>
        <Header/>
            <Routes>
                <Route path="/" element = {<Banner />}/>
                <Route path="/catalog" element = {<CatalogPage />}/>
            </Routes>
        <Footer/>
        </>
    )
}

export default App