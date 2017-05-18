import React, { Component } from 'react';

class HabitsContainer extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="thumbnail">
                <h2>Meditate</h2>

              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="thumbnail">
                <h2>Yoga</h2>

              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="thumbnail">
                <h2>Read</h2>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HabitsContainer;
