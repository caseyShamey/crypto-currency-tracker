import React from 'react'

import './TimeButton.css'

const TimeButton = ({ time, text, setTime} ) => {
  return (
    <div>
      <button
          type="button"
          className="btn btn-primary time-button"
          onClick={() => setTime(time)}
      >
        {text}
      </button>
    </div>
  )
}

export default TimeButton
