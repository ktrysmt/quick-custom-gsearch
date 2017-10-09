import React from 'react'

export default function Frame (props) {
  const { data } = props;
  return (
    <div className="quick-custom-gsearch">
      <div className="term">
        <span className="head">Term</span>
        <a data="none" className="active">Any time</a>
        <a data="m3">Past 3 Month</a>
        <a data="m6">Past 6 Month</a>
        <a data="y">Past 1 Year</a>
        <a data="y2">Past 2 Year</a>
        <a data="y3">Past 3 Year</a>
        <span></span>
      </div>
      <div className="language">
        <span className="head">Language</span>
        <a data="" className="active">Any pages</a>
        <a data="lang_en">English pages</a>
        <a data="lang_local">Local pages</a>
        <span></span>
      </div>
    </div> 
  )
}
