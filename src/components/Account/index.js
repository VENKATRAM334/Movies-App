import MovieContext from '../../context/MovieContext'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Account = props => (
  <MovieContext.Consumer>
    {value => {
      const {username, password, triggerLogout} = value

      const onClickLogout = () => {
        triggerLogout(props)
      }

      const hiddenPassword = '*'.repeat(password.length)

      return (
        <div className="account-container">
          <Header />
          <div className="bg-container">
            <div className="account-sub-container">
              <h1 className="account-heading">Account</h1>
              <hr className="hr-line" />
              <div className="name-password-container">
                <p className="member-ship">
                  Member ship :{' '}
                  <span className="user-name">{username.toUpperCase()}</span>
                </p>
                <hr className="hr-line" />
                <div className="password-container-account">
                  <p className="member-ship">
                    Password :{' '}
                    <span className="password">{hiddenPassword}</span>
                  </p>
                </div>
              </div>
              <hr className="hr-line" />
              <div className="plan-container">
                <p className="member-ship">Plan details : </p>
                <p className="plan-para">Premium</p>
                <div className="quality-container">
                  <p className="quality-para">Ultra HD</p>
                </div>
              </div>
              <hr className="hr-line" />
            </div>
            <div className="btn-logout-container">
              <button
                className="btn-logout"
                type="button"
                onClick={onClickLogout}
              >
                Logout
              </button>
            </div>
          </div>
          <Footer />
        </div>
      )
    }}
  </MovieContext.Consumer>
)

export default Account
