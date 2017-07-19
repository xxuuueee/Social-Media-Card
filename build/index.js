var person = {
  name: 'Xue Wu',
  location: 'Waterloo, Ontario',
  occupation: {
    title: 'Former Child',
    employer: '@xxuuueee'
  },
  photo: './images/xue.jpg',
  updates: [{
    platform: 'facebook',
    status: 'The distance between dreams and reality is called action.'
  }, {
    platform: 'twitter',
    status: 'It\'s not what happens, it\'s how you handle it.'
  }, {
    platform: 'twitter',
    status: 'Fear makes the wolf look bigger'
  }, {
    platform: 'facebook',
    status: 'Just because you\'re not making progress as fast as you think you should doesn\'t mean you aren\'t making progress.'
  }]
};

class Updates extends React.Component {
  updates() {
    return this.props.updates.map(function (update, index) {
      return React.createElement(
        'li',
        { className: "update " + update.platform, key: index },
        update.status
      );
    });
  }

  render() {

    return React.createElement(
      'div',
      { className: 'updates' },
      React.createElement(
        'ul',
        null,
        this.updates()
      )
    );
  }
}

class Bio extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'bio' },
      React.createElement(
        'h1',
        { className: 'name' },
        this.props.name
      ),
      React.createElement(
        'h2',
        { className: 'location' },
        this.props.location
      ),
      React.createElement(
        'div',
        { className: 'occupation' },
        React.createElement(
          'p',
          null,
          this.props.occupation.title,
          ' at ',
          this.props.occupation.employer
        )
      )
    );
  }

}
class Photo extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'photo' },
      React.createElement('img', { src: this.props.photo, alt: 'Photo', width: '300px', height: '225px' })
    );
  }
}

class Card extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'card' },
      React.createElement(Photo, { photo: "images/xue.jpg" }),
      React.createElement(Bio, { name: person.name, location: person.location, occupation: person.occupation }),
      React.createElement(Updates, { updates: person.updates })
    );
  }

}

ReactDOM.render(React.createElement(Card, null), document.getElementById('app'));