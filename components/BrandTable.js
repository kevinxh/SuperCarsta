import React, { Component, PropTypes } from 'react'
import Brands from './Brands'
import {BrandList} from '../constants/BrandList'

export default class BrandTable extends Component {
  render() {
    return (
      <ul className="clients-grid grid-5 nobottommargin clearfix">
        {BrandList.map((brand,i) =>
          <Brands name={brand.name} link="#" logo={brand.logo} key={i}/>
      )}
      </ul>
    )
  }
}
