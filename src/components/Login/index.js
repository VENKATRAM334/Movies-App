import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import MovieContext from '../../context/MovieContext'
import Footer from '../Footer'

import './index.css'

class Login extends Component {
  state = {errorMsg: '', isErrorMsg: false, learnMoreMsg: false}

  showLearnMoreText = () => {
    this.setState(prevState => ({
      learnMoreMsg: !prevState.learnMoreMsg,
    }))
  }

  render() {
    return (
      <div className="login-page-container">
        <MovieContext.Consumer>
          {value => {
            const {
              username,
              password,
              triggerChangeUsername,
              triggerChangePassword,
            } = value
            const onChangeUsername = event => {
              triggerChangeUsername(event)
            }

            const onChangePassword = event => {
              triggerChangePassword(event)
            }
            const onSubmitSuccess = jwtToken => {
              const {history} = this.props

              Cookies.set('jwt_token', jwtToken, {
                expires: 30,
                path: '/',
              })
              history.replace('/')
            }

            const onSubmitFailure = errorMsg => {
              this.setState({errorMsg, isErrorMsg: true})
            }

            const onSubmitForm = async event => {
              event.preventDefault()

              const url = 'https://apis.ccbp.in/login'
              const userDetails = {
                username,
                password,
              }
              const options = {
                method: 'POST',
                body: JSON.stringify(userDetails),
              }
              const response = await fetch(url, options)
              const data = await response.json()

              if (response.ok === true) {
                onSubmitSuccess(data.jwt_token)
              } else {
                onSubmitFailure(data.error_msg)
              }
            }

            const {isErrorMsg, errorMsg, learnMoreMsg} = this.state

            const jwtToken = Cookies.get('jwt_token')
            if (jwtToken !== undefined) {
              return <Redirect to="/" />
            }

            return (
              <div className="login-container">
                <div className="login-container-one">
                  <img
                    src="https://res.cloudinary.com/duv0mhzrm/image/upload/v1665899170/Group_7399_vwxbql.png"
                    alt="login website logo"
                    className="web-site-logo"
                  />
                  <div className="container-center">
                    <div className="login-form-container">
                      <h1 className="login-heading">Login</h1>
                      <form className="form" onSubmit={onSubmitForm}>
                        <label className="label-login" htmlFor="username">
                          USERNAME
                        </label>
                        <input
                          id="username"
                          className="login-input-user-name"
                          type="text"
                          value={username}
                          placeholder="Email or phone number"
                          onChange={onChangeUsername}
                        />
                        <label
                          className="label-login-password"
                          htmlFor="password"
                        >
                          PASSWORD
                        </label>
                        <input
                          id="password"
                          value={password}
                          placeholder="Password"
                          onChange={onChangePassword}
                          className="login-input-user-name"
                          type="password"
                        />
                        {isErrorMsg && (
                          <p className="error-msg-para">{errorMsg}</p>
                        )}
                        <button type="submit" className="sign-in-button">
                          Login
                        </button>
                      </form>
                      <div className="need-help-container">
                        <div className="check-box-container">
                          <input type="checkbox" />
                          <p className="remember-me">Remember me</p>
                        </div>
                        <a
                          href="https://www.netflix.com/in-hi/LoginHelp"
                          className="remember-me need-help"
                        >
                          Need Help?
                        </a>
                      </div>
                      <div>
                        <p className="remember-me">
                          New to Netflix?
                          <a
                            className="remember-me sign-up-now"
                            href="Sign up now."
                          >
                            Sign up now.
                          </a>
                        </p>
                        <p className="learn-more">
                          This page is protected by Google reCAPTCHA to <br />{' '}
                          ensure you are not a bot.
                          <button
                            className="learn-more-button"
                            onClick={this.showLearnMoreText}
                            type="button"
                          >
                            Learn More.
                          </button>
                        </p>
                        {learnMoreMsg && (
                          <p className="learn-more">
                            The information collected by Google reCAPTCHA is{' '}
                            <br />
                            subject to the Google Privacy Policy and Terms of
                            Service,
                            <br /> and is used for providing, maintaining, and
                            improving the <br /> reCAPTCHA service and for
                            general security purposes <br /> (it is not used for
                            personalised advertising by Google).
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            )
          }}
        </MovieContext.Consumer>
      </div>
    )
  }
}

export default Login
