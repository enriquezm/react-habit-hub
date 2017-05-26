import React from 'react';
import ReactDOM from 'react-dom';

class Avatar extends React.Component {
  render() {
    return (
      <img src="http://i.pravatar.cc/50" alt="Avatar image." />
    );
  }
}

class Title extends React.Component {
  render() {
    return (
      <h3>{this.props.text}</h3>
    );
  }
}

class Description extends React.Component {
  render() {
    return (
      <div>Coder | React Coder | Creator</div>
    );
  }
}
class UserProfile extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="row">
          <div className="col-xs-4 col-xs-offset-4 user-profile-container">
            <div>
              <Avatar />
            </div>
            <div>
              <Title text="Myles Enriquez" />
              <Description />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component{
  render() {
    return (
      <div className="container">
        <section className="user-profile">
          <UserProfile />
        </section>
        <section className="user-habits">
          <Title text="Yoga" />
        </section>

      </div>
    );
  }
}

export default App;
