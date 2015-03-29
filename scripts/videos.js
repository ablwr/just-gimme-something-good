/** @jsx React.DOM */

var StaffPicks = React.createClass({
  getInitialState: function() {
    return {
      title: '',
      id: '',
      url: '',
      description: '',
      user_name: '',
      user_url: '',
      likes: '',
      plays: '',
      comments: '',
      duration: '',
      tags: ''

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
          url: lastPick.url,
          description: lastPick.description,
          user_name: lastPick.user_name,
          user_url: lastPick.user_url,
          likes: lastPick.stats_number_of_likes,
          plays: lastPick.stats_number_of_plays,
          comments: lastPick.stats_number_of_comments,
          duration: lastPick.duration,
          tags: lastPick.tags
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
            <div id="description">
                <h2>{this.state.title}</h2>
                <h4>by <a href={this.state.user_url}>{this.state.user_name}</a></h4>
                <p>{this.state.description.replace(/(<([^>]+)>)/gi, "").substring(0, 250)} <a href={this.state.url}>... [More Info]</a></p>
              </div>
              <div id="stats">
                <h2>Stats</h2>
                <ul>
                  <li><i className="fa fa-thumbs-up" title="Likes"></i> {this.state.likes}</li>
                  <li><i className="fa fa-eye" title="Views"></i> {this.state.plays}</li>
                  <li><i className="fa fa-comments" title="Comments"></i> {this.state.comments}</li>
                  <li><i className="fa fa-clock-o" title="Seconds"></i> {this.state.duration}</li>
                </ul>
              </div>
              <div id="tags">
                <h2>Tags</h2>
                <p>{this.state.tags}</p>
              </div>
        </div>
      </div>
    );
  }
});

React.render(
  <StaffPicks source="http://vimeo.com/api/v2/channel/staffpicks/videos.json" />,
  document.getElementById('videos')
);

// Get those buttons a'working

$(document).ready(function() {
  $( ".fa-info-circle" ).click(function() {
      $('.video-info').show();
    });

  $( ".fa-refresh" ).click(function() {
      $('iframe').attr('src', ($('iframe').attr('src')+"?&autoplay=1"));
    });

  $( ".fa-chevron-right" ).click(function() {
      location.reload();
    });

  $(".fa-arrow-circle-o-down").click(function() {
      $('html,body').animate({
      scrollTop: $("#videos").offset().top
      }, 1000); 
    });

  $(window).scroll(function(){
      var fromTopPx = 500;
      var scrolledFromtop = $(window).scrollTop();
      if(scrolledFromtop > fromTopPx){
          $('#main').addClass('scrolled');
      }else{
          $('#main').removeClass('scrolled');
      }
  });
});

