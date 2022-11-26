import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeUserIndex: 0,
  }

  onClickLeftArrow = () => {
    const {activeUserIndex} = this.state
    if (activeUserIndex > 0) {
      this.setState(prevState => ({
        activeUserIndex: prevState.activeUserIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const totalUsers = reviewsList.length
    const {activeUserIndex} = this.state

    if (activeUserIndex < totalUsers - 1) {
      this.setState(prevState => ({
        activeUserIndex: prevState.activeUserIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props

    const {activeUserIndex} = this.state

    const activeUserDetails = reviewsList[activeUserIndex]

    const {imgUrl, username, companyName, description} = activeUserDetails

    const mainEle = (
      <div className="mainBgContainer">
        <h1 className="headerText">Reviews</h1>
        <div className="carouselContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow"
            onClick={this.onClickLeftArrow}
          />

          <div className="reviewContainer">
            <img src={imgUrl} alt={username} className="userImg" />
            <h1 className="username">{username}</h1>
            <p className="companyName">{companyName}</p>
            <p className="description">{description}</p>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="arrow"
            onClick={this.onClickRightArrow}
          />
        </div>
      </div>
    )
    return mainEle
  }
}

export default ReviewsCarousel
