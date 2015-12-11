import React, { Component, PropTypes } from 'react'
import Brands from './Brands'
import {BrandList} from '../constants/BrandList'

export default class ModelTable extends Component {
  constructor(props) {
    super(props)
  }

  renderModels() {
    const { brand } = this.props
    BrandList.map((item,i) => {
      if(item.name == brand){
        return(
          <h1>heihei your name is {item.name}!</h1>
        )
      }}
    )
  }

  render() {
    const { brand } = this.props
    console.log(this.renderModels())
    return (
      <div>
        {this.renderModels()}
      </div>
    )
  }
}

ModelTable.propTypes = {
    brand: PropTypes.string.isRequired
}
