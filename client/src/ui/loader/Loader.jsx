import React from 'react'
import {useSelector} from 'react-redux'
import './style.css'

const Loader = () => {
  const isLoader = useSelector(state => state.globalState.isLoader)

  return (
    <React.Fragment>
      {
        isLoader
          ? <div className="loadingio-spinner-dual-ball-2xyk3ziecyv">
            <div className="ldio-t6o4onbuo3r">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          : null
      }
    </React.Fragment>
  )
}

export default Loader