import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProList = (props) => {
  return (
    <div className="home--list__block">
      {props.productList.map((item, key) =>
        <div className="product--list" key={key} style={{ backgroundImage: "url(" + item.prodUrl + ")" }}>
          <Link to="/">
            <span className="no">TOP {key + 1}</span>
            <div className="product--list__info">
              <p className="product--list__title">
                {item.prodName}
              </p>
              <p className="product--list__desc">
                {item.prodPropaganda}
              </p>
              <p className="product--list__prize">
                {item.prodPrice}
              </p>
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}
ProList.propTypes = {
  productList: PropTypes.array
}

ProList.defaultProps = {
  productList: [],
}
export default ProList
