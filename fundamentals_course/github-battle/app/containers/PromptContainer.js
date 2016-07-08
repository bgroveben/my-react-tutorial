var React = require('react');

var PromptContainer = React.createClass({
  render: function () {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <h1>SOME HEADER TEXT</h1>
        <div className="col-sm-12">
          <form>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Github Username"
                type="text" />
            </div>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = PromptContainer;
