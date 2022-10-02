import './app.css'

import { Navbar } from './components/navbar/Navbar'
import Header from './components/header/Header'
import { SliderData } from './data/data'
import { Advert } from './components/advert/Advert'
import { Editor } from './components/editor/Editor'
import { Edit } from './data/dataa'
import { Art } from './components/art/Art'
import { Letter } from './components/letter/Letter'
import { Footer } from './components/footer/Footer'

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Navbar />
        <Header slides={SliderData} />
        <Advert />
        <Editor editors={Edit} />
        <Art />
        <Letter />
        <Footer />
      </div>
    </div>
  )
}

export default App
