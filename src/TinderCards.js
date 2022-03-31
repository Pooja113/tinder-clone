import React, {useState} from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';

const TinderCards = () => {
  const [people,setPeople] = useState([
    {
      name: 'Sandra Bullock',
      url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F06%2Fgettyimages-973622954-2000.jpg"
    },
    {
      name: 'Chris Evans',
      url: "https://cdn.britannica.com/28/215028-050-94E9EA1E/American-actor-Chris-Evans-2019.jpg"
    },
    {
      name: 'Tom Hiddleston',
      url: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/tom_hiddleston_0.jpeg"
    },
    {
      name: 'Tom Cruise',
      url: "https://vz.cnwimg.com/thumb-1200x/wp-content/uploads/2009/09/tc.jpg"
    },
    {
      name: 'Keanu Reeves',
      url: "https://i.insider.com/623d200ea2e45b0019504e47?width=700"
    },
  ]);

  const swiped = (direction,nameToDelete) => {
    console.log('Removing ! ' + nameToDelete);
    //setLastDirection(direction);
  }
  
  const outOfFrame = (name) => {
    console.log(name + ' left the screen!!')
  }


  return (
    <div className='tindercards'>
      <div className='tindercards__container'>
        {people.map((person)=> (
          <TinderCard 
          className='swipe'
          key={person.name}
          preventSwipe= {["up","down"]}
          onSwipe={(dir)=>swiped(dir,person.name)}
          onCardLeftScreen={()=> outOfFrame(person.name)}
          >
          <div 
          //style={{backgroundImage: 'url(' + person.url + ')'}}
          style={{backgroundImage: `url(${person.url})`}}
          className='card'
          >
          <h3>{person.name}</h3>
          </div>
          </TinderCard>
        ))}
        </div>
    </div>
  )
}

export default TinderCards
