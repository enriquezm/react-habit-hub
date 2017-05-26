import React from 'react';
import ReactDOM from 'react-dom';

class Avatar extends React.Component {
  render() {
    return (
      <img src="http://i.pravatar.cc/50" alt="Avatar image." />
    );
  }
}

class Name extends React.Component {
  render() {
    return (
      <div>Myles Enriquez</div>
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

class App extends React.Component{
  render() {
    return (
      <div className="container">
        <section>
          <div className="card">
            <div className="row">
              <div className="col-xs-4 col-xs-offset-4 user-profile-container">
                <div>
                  <Avatar />
                </div>
                <div>
                  <Name />
                  <Description />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default App;
