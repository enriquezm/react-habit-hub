import React from 'react';

class Avatar extends React.Component {
  render() {
    return (
      <img src="http://i.pravatar.cc/50" alt="Avatar." />
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
        <div>
          <div className="user-profile-container">
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

class SVGGraph extends React.Component {
  render() {
    return (
      <svg width="117">
        <rect x="0" y="0" width="15" height="15"  />
        <rect x="17" y="0" width="15" height="15"  />
        <rect x="34" y="0" width="15" height="15"  />
        <rect x="51" y="0" width="15" height="15"  />
        <rect x="68" y="0" width="15" height="15"  />
        <rect x="85" y="0" width="15" height="15"  />
        <rect x="102" y="0" width="15" height="15"  />

        <rect x="0" y="17" width="15" height="15"  />
        <rect x="17" y="17" width="15" height="15"  />
        <rect x="34" y="17" width="15" height="15"  />
        <rect x="51" y="17" width="15" height="15"  />
        <rect x="68" y="17" width="15" height="15"  />
        <rect x="85" y="17" width="15" height="15"  />
        <rect x="102" y="17" width="15" height="15"  />

        <rect x="0" y="34" width="15" height="15"  />
        <rect x="17" y="34" width="15" height="15"  />
        <rect x="34" y="34" width="15" height="15"  />
        <rect x="51" y="34" width="15" height="15"  />
        <rect x="68" y="34" width="15" height="15"  />
        <rect x="85" y="34" width="15" height="15"  />
        <rect x="102" y="34" width="15" height="15"  />

        <rect x="0" y="51" width="15" height="15"  />
        <rect x="17" y="51" width="15" height="15"  />
        <rect x="34" y="51" width="15" height="15"  />
        <rect x="51" y="51" width="15" height="15"  />
        <rect x="68" y="51" width="15" height="15"  />
        <rect x="85" y="51" width="15" height="15"  />
        <rect x="102" y="51" width="15" height="15"  />

        <rect x="0" y="68" width="15" height="15"  />
        <rect x="17" y="68" width="15" height="15"  />
        <rect x="34" y="68" width="15" height="15"  />
        <rect x="51" y="68" width="15" height="15"  />
        <rect x="68" y="68" width="15" height="15"  />
        <rect x="85" y="68" width="15" height="15"  />
        <rect x="102" y="68" width="15" height="15"  />
      </svg>
    );
  }
}

class UserHabit extends React.Component {
  render() {
    return(
      <div className="fl w-100 w-third-ns pa2">
        <Title text="Yoga" />
        <SVGGraph />
      </div>
    );
  }
}

class App extends React.Component{
  render() {
    return (
      <div>
        <section className="user-profile">
          <UserProfile />
        </section>
        <section className="user-habits">
          <div className="mw9 center ph3-ns">
            <div className="cf ph2-ns">
              <UserHabit />
              <UserHabit />
              <UserHabit />
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default App;
