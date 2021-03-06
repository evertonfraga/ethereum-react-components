import React from "react"
import PropTypes from 'prop-types'

const EthAddress = ({address, short, onClick}) => (
  <span className='eth-address' onClick={onClick}>
    {short
    ? [...address.split('').slice(0, 10), '...', ...address.split('').slice(42 - 10)].join('')
    : address
    }

    {/*language=CSS*/}
    <style jsx>{`
      .eth-address {
        color: black;
        padding: 4px 10px;
        font-size: 14px;
        border: 1px solid gray;
        border-radius: 4px;
        cursor: pointer;
      }
    `}</style>
  </span>
)

EthAddress.propTypes = {
  address: PropTypes.string.isRequired,
  /** Display abbreviated form with '...'& 23 instead of 42 chars.  */
  short: PropTypes.bool
};

EthAddress.defaultProps = {
  short: false
};

export default EthAddress;