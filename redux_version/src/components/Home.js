import React from 'react'
import Images from '../images.json'
import {Link} from 'react-router-dom'
import '../assets/styles/App.css'



export default React.createClass ({

	/*getInitialState: function(){
		return{
			album: Images.filter(function(value){
				return value.cover === true
			})
		}
	},*/
	

	render: function (){
		return(
			<div>
				<div>
					<h1>MY ALBUMS</h1>
				</div>
				<div>
					<ul>
						{this.state.album.map(function(album){
        			return <li key={'id' + images.id}>
        						 	 <div className='albums'>
                					<Link to={'/album/' + album.album}><img id={album.cover} src={album.medium + album.img} alt='#'/>Album {album.album}</Link>
                			 </div>
                   	 </li>
             })}
					</ul>
				</div>
			</div>
		)
	}
})