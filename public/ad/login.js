'use strict';

var LoginSelector = React.createClass({
  signIn: function () {

    //TODO for demo
    var email = this.email.value.trim();
    var password = this.password.value.trim();
    console.log(email);
    console.log(password);

    window.location.href = '/admin';
    return;


    if (!password || !email) {
      return;
    }
    //send to server
    $.post('/api/signIn', {email: email, password: password}, function (data) {
      if (data.code === '8000') {
        window.location.href = '/amdin';
      }
    }.bind(this));
  },
  render: function () {
    return (
      <article className="hold-transition login-page loginSelector">
        <div className="login-box">
          <div className="login-logo">
            Huami - Forum
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="Email" ref={(ref)=>this.email=ref} />
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>

            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Password" ref={(ref)=>this.password=ref} />
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <button onClick={this.signIn} type="submit" className=" btn btn-primary btn-block btn-flat">Sign In
                </button>
              </div>
            </div>

            <div className="social-auth-links text-center">
              <p>- OR -</p>
              <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i>Login via Facebook </a>
              <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i>Login via Google+ </a>
            </div>

            <a href="#">I forgot my password</a><br />
            <a href="/signup" className="text-center">Sign up</a>

          </div>
        </div>
      </article>
    );
  }
});

ReactDOM.render(<LoginSelector />, document.getElementById('login'));

