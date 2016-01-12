'use strict';

var SignUpSelector = React.createClass({
  signUp: function () {

    //TODO for demo
    var userName=this.userName.value.trim();
    var email=this.email.value.trim();
    var password=this.password.value.trim();
    var confirmedPassword=this.confirmedPassword.value.trim();
    console.log(userName);
    console.log(email);
    console.log(password);
    console.log(confirmedPassword);

    window.location.href = '/login';
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
            <p className="login-box-msg">Sign up to create your account</p>

            <div className="form-group has-feedback">
              <input type="text" className="form-control" placeholder="Name" ref={(ref)=>this.userName=ref} />
              <span className="glyphicon glyphicon-user form-control-feedback"></span>
            </div>

            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="Email" ref={(ref)=>this.email=ref} />
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>

            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Password" ref={(ref)=>this.password=ref}/>
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>

            <div className="form-group has-feedback">
              <input type="passwordConfirmed" className="form-control" placeholder="Confirm Password" ref={(ref)=>this.confirmedPassword=ref}/>
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <button onClick={this.signUp} type="submit" className=" btn btn-primary btn-block btn-flat">Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
});

ReactDOM.render(<SignUpSelector />, document.getElementById('signup'));

