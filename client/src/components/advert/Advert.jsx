import './advert.css'
import coinb from '../../images/binance.png'
import coinbit from '../../images/bitmex.png'
import coinbase from '../../images/coinbase.jpg'
import coinsol from '../../images/solana.jfif'

export const Advert = () => {
  return (
    <div className='advert'>
      <div className='advertCont'>
        <img className='adimg' src={coinb} alt='' />
        <img className='adimg' src={coinbit} alt='' />
        <img className='adimg' src={coinbase} alt='' />
        <img className='adimg' src={coinsol} alt='' />
      </div>
    </div>
  )
}
