import React from 'react'
import './discount.scss'

const Discount = ({ company, value, description }) => ! company ? null :
  <a href={company.website} className="Discount u-base-link">
    <span className="Discount-company">{company.name}</span>
    <span className="Discount-value">{value}</span>
    {description && <span className="Discount-description">{description}</span>}
  </a>

Discount.propTypes = {
  company: React.PropTypes.object,
  value: React.PropTypes.string,
  description: React.PropTypes.string,
}

export default Discount
