import React from 'react';

const Card =(props) => {
// const { id, name, tagline} = props;   then we don't need to write props.id and all
	return (
		<div className='tc dib br3 pa3 ma2 grow bw2 shadow-6'>
		 <img alt='robots' src={`https://robohash.org/${props.id}?size=300x300`}/>

		
		<div>
		<h2> {props.name}</h2>
		<p> {props.tagline}</p>
		</div>
		</div>

		);
}
export default Card;