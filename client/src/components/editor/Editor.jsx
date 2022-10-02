import './editor.css'
import HistoryIcon from '@mui/icons-material/History'

export const Editor = ({ editors }) => {
  return (
    <div className='editor'>
      <div className='edit cont'>
        <h1>Editors pick for the week </h1>
        <div className='btns'>
          <button className='btnEdit'> Art</button>
          <button className='btnEdit'> Music</button>
          <button className='btnEdit'> Video</button>
          <button className='btnEdit'> Cartoon</button>
          <button className='btnEdit'> Craft</button>
          <button className='btnEdit'> Token</button>
        </div>
        <div className='total'>
          {editors.map((items, index) => {
            return (
              <div key={index} className='map'>
                <div className='et'>
                  <img src={items.image} alt='' className='topImg' />
                  <div className='ttp'>
                    <h2>{items.title}</h2>
                    <p className='ep'>{items.rating}</p>
                  </div>
                </div>

                <div className='top'>
                  <img src={items.pp} alt='' className='profpics' />
                  <div className='subg'>
                    <p>{items.own}</p>
                    <p>{items.name}</p>
                  </div>
                  <div className='rigth'>
                    <p>{items.cb}</p>
                    <p>{items.price}</p>
                  </div>
                </div>

                <div className='bottom'>
                  <button className='btnleft'>{items.label}</button>

                  <span className='history'>
                    <HistoryIcon className='icon' />
                    <p className='hist'>{items.history}</p>
                  </span>
                </div>
              </div>
            )
          })}
        </div>
        <div className='centbtn'>
          <button className='see'>See all</button>
        </div>
      </div>
    </div>
  )
}
