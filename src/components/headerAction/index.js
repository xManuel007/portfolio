import React from 'react'
import { Link } from 'react-scroll'

const HeaderAction = ({ goTo, text, itemClass, isOpen }) => {
  return (
    <>
      <Link
        className={itemClass}
        duration={500}
        offset={20}
        smooth={true}
        spy={true}
        to={goTo}
        onClick={() => {
          isOpen();
        }}
      >
        {text}
      </Link>
    </>
  )
}

HeaderAction.defaultProps = {
  isOpen: () => {}
}

export default HeaderAction
