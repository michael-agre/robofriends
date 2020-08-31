import React from 'react';

function Card({name, email, id}) {
	//const {name, email, id} = props;
	return (
		<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5d'>
			<img alt={name} src={`https://robohash.org/${name}?size=200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card