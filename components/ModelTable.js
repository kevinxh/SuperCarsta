import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Models from './Models'
import {BrandList} from '../constants/BrandList'

export default class ModelTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { brand } = this.props
    return (
      <div className="fullwidth">
      <ul className="clients-grid grid-4 nobottommargin clearfix">
        {
          (BrandList.find(item => item.name === brand)).models.map((model,i) => {
            return (
              <Models brand={brand} name={model.name} pic={model.pic} key={i}/>
            )
          })
        }
      </ul>
      <div className="Button-center">
        <Link to="/" className="button button-rounded button-reveal button-large  button-dirtygreen">
          <i className="icon-reply"></i><span>Back</span>
        </Link>
      </div>
    </div>
    )
  }
}

ModelTable.propTypes = {
    brand: PropTypes.string.isRequired
}
