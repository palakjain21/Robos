 import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	const cardcomp = robots.map((user, i) =>{


  return <Card
  			 key={i} 
  			 id={robots[i].id} 
  			 name={robots[i].name} 
  			 tagline={robots[i].tagline}/>
})
  return (
    <div>
      {cardcomp}
	</div>
  );
}

export default CardList;