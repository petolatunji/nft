import './header.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

const Header = ({ slides }) => {
  return (
    <div className='header'>
      <div className='left'>
        {slides.map((items, index) => {
          return (
            <div key={index} className='slidercont'>
              <div className='lcont'>
                <h1 className='htitle'>{items.title}</h1>
                <p>{items.desc}</p>
                <div className='bp'>
                  <button className='hbtn'> {items.buttons}</button>
                  <ArrowRightAltIcon className='btnicon' />
                  <div className='play'>
                    <PlayArrowIcon className='iconplay' />
                    <p> {items.labels}</p>
                  </div>
                </div>

                <div className='purchase'>
                  <p className='ppp'>{items.downloads}</p>
                  <div className='vl'></div>
                  <p className='ppp'>{items.reviews}</p>
                  <div className='vl'></div>
                  <p className='pppp'>{items.purchase}</p>
                </div>
              </div>
              <div className='rcont'>
                <img className='himage' src={items.Image} alt='' />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Header
