import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export const Footer = () => {
  return (
    <div className='foot'>
      <div className='footer'>
        <div className='footl'>
          <h1>Open Sea</h1>
          <p>Get updates about the latest NTFs and Art</p>
        </div>
        <div className='footr'>
          <div className='market'>
            <p className='ph'>Market place</p>
            <p className='ppf'>Crypto</p>
            <p className='ppf'>Market </p>
          </div>
          <div className='resource'>
            <p className='ph'>Resources</p>
            <p className='ppf'>Market Gap</p>
            <p className='ppf'>Coin geckp </p>
          </div>
          <div className='company'>
            <p className='ph'>Company</p>
            <p className='ppf'>Lati buying</p>
            <p className='ppf'>Market </p>
          </div>
        </div>
      </div>
      <div className='footb'>
        <div className='footIcon'>
          <FacebookIcon className='footIcons' />
          <InstagramIcon className='footIcons' />
          <LinkedInIcon className='footIcons' />
        </div>
        <p>Copyright all right reserved @PetOlatunji 2022</p>
      </div>
    </div>
  )
}
