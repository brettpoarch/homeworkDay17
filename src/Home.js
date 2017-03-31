import React from 'react'
import Images from './Images.json'
import {Link} from 'react-router-dom'
import './App.css'



export default React.createClass ({

	/*getInitialState: function(){
		return{
			album: Images.filter(function(value){
				return Number(value.album) === undefined
			}
		}
	},
	if(Images.album === undefined){
		return Images.album
	},*/

	render: function (){
		return(
			<div>
				<div>
					<h1>MY ALBUMS</h1>
				</div>
				<div>
					<ul>
						{Images.map(function(album){
        			return <li key={'id' + album.id}>
        						 	 <div className='albums'>
                					<Link to={'/album/' + album.album}><img id={album.album} src={album.medium + album.img} alt='#'/></Link>
                			 </div>
                   	 </li>
             })}
					</ul>
				</div>
			</div>
		)
	}
})