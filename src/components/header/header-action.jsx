import React from 'react'
import { Link } from 'react-scroll'

const HeaderAction = ({ goTo, text, itemClass, spanClass, isOpen }) => {
  return (
    <>
      <Link
        className={`${itemClass}`}
        duration={500}
        offset={20}
        smooth={true}
        spy={true}
        to={goTo}
        onClick={() => {
          isOpen();
        }}
      >
        <span className={spanClass}>
          {text}
        </span>
      </Link>
    </>
  )
}

HeaderAction.defaultProps = {
  isOpen: () => { }
}

export default HeaderAction
