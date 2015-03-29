/** @jsx React.DOM */

var StaffPicks = React.createClass({
  getInitialState: function() {
    return {
      title: '',
      id: '',
      url: ''
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      var random = Math.floor(Math.random() * 15) + 1;
      var lastPick = result[random];
      if (this.isMounted()) {
        this.setState({
          title: lastPick.title,
          id: lastPick.id,
          url: lastPick.url
        });
      }
    }.bind(this));
  },

  render: function() {

    return (
      <div>
      <div className="videos">
        <iframe id="iframe" src={ "https://player.vimeo.com/video/" + this.state.id} width="500" height="378" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
      <div className="medium-button">
        <i className="fa fa-info-circle"></i> 
        <i className="fa fa-refresh"></i> 
        <i className="fa fa-chevron-right"></i>
      </div>
      <div className="video-info">
        {this.state.title}
        </div>
      </div>

    );
  }
});


React.render(
  <StaffPicks source="http://vimeo.com/api/v2/channel/staffpicks/videos.json" />,
  document.getElementById('videos')
);




