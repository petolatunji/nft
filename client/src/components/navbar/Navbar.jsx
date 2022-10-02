import './navbar.css'
import SearchIcon from '@mui/icons-material/Search'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navCont'>
        <div className='logo'>Open sea</div>

        <div className='navItems'>
          <div className='navinput'>
            <input type='text' placeholder='Search' className='navSearch' />
            <SearchIcon className='navIcon' />
          </div>
          <ul className='navlists'>
            <li className='navlist'>About us</li>
            <li className='navlist'>Products</li>
            <li className='navlist'>FAQs</li>
            <li className='navlist'>Contact</li>
          </ul>
          <button className='navbtn'>Buy Now</button>
        </div>
      </div>
    </div>
  )
}
