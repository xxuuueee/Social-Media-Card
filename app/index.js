var person = {
  name: 'Xue Wu',
  location: 'Waterloo, Ontario',
  occupation: {
    title: 'Former Child',
    employer: '@xxuuueee'
  },
  photo: './images/xue.jpg',
  updates: [
    {
      platform: 'facebook',
      status: 'The distance between dreams and reality is called action.'
    },
    {
      platform: 'twitter',
      status: 'It\'s not what happens, it\'s how you handle it.' 
    },
    {
      platform: 'twitter',
      status: 'Fear makes the wolf look bigger'
    },
    {
      platform: 'facebook',
      status: 'Just because you\'re not making progress as fast as you think you should doesn\'t mean you aren\'t making progress.'
    }
  ]
}


class Updates extends React.Component{
  updates(){
    return this.props.updates.map(function(update, index){
      return(
        <li className={"update " + update.platform} key={index}>
          {update.status}
          </li>


        )

    });

  }

  render(){

  return(
    <div className="updates">
         <ul>
          {this.updates()}
         </ul>
      </div>

      )

      }
}

class Bio extends React.Component{
  render (){
    return(

      <div className="bio">
        <h1 className="name">{this.props.name}</h1>
        <h2 className="location">{this.props.location}</h2>
        <div className="occupation">
          <p>{this.props.occupation.title} at {this.props.occupation.employer}</p>
        </div>
      </div>

    )
  }

}
class Photo extends React.Component {
  render (){
    return(
      <div className="photo">
          <img src={this.props.photo} alt="Photo" width="300px" height="225px"/>
        </div>
    )
  }
}

class Card extends React.Component {
  render () {
    return(
      <div className="card">
      <Photo photo={"images/xue.jpg" }/>
      <Bio name={person.name} location={person.location} occupation={person.occupation}/>
      <Updates updates={person.updates}/>
     </div>
    )


  }


}




ReactDOM.render(<Card/>,  document.getElementById('app'));

