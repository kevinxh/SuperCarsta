import React, { Component, PropTypes } from 'react'

export default class UserModal extends Component {

  render() {
    const { userName, userBio, userPic } = this.props
    return (
        <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-body">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="logout_modal_user_info">
                    <img className="img-circle alignleft" src={userPic} alt={userName} />
                    <h2 className="uppercase font-secondary">{userName}</h2>
                    <h5 className="font-secondary">{userBio}</h5>
                  </div>
                  <hr/>
                  <a href="/oauth/logout" className="button button-large button-dirtygreen btn-block center"><i className="icon-instagram"></i><span>Log out</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}


UserModal.propTypes = {
  userName: PropTypes.string,
  userBio: PropTypes.string,
  userPic: PropTypes.string
}