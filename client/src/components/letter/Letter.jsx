import './letter.css'

export const Letter = () => {
  return (
    <div className='letter'>
      <div className='lette'>
        <h1 className='lett'>Never miss a drop</h1>
        <p className='letp'>Get updates about the latest NTFs and Art</p>
        <div className='let'>
          <input type='email' placeholder='Enter your email' />
          <button className='letbtn'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}
