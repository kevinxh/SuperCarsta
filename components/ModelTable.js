import React, { Component, PropTypes } from 'react'
import Models from './Models'
import {BrandList} from '../constants/BrandList'

export default class ModelTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { brand } = this.props
    return (
      <ul className="clients-grid grid-4 nobottommargin clearfix">
        {
          (BrandList.find(item => item.name === brand)).models.map((model,i) => {
            return (
              <Models brand={brand} name={model.name} pic={model.pic} key={i}/>
            )
          })
        }
      </ul>
    )
  }
}

ModelTable.propTypes = {
    brand: PropTypes.string.isRequired
}
