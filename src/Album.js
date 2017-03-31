import React from 'react'
import Images from './Images.json'
import { Link } from 'react-router-dom'
import './App.css'

export default React.createClass ({

	getInitialState: function(){
		return{
			album: Images.filter(function(value){
				return Number(value.album) === Number(this.props.match.params.id)
			}.bind(this))
		}
	},

	render: function (){
		return(
			<div>
				<div>
					<h1>MY PICTURES</h1>
				</div>
				<div>
        	<div className='albums'>
          	<Link to='/album/1'><div> Album 1 </div></Link>
          	<Link to='/album/2'><div> Album 2 </div></Link>
          	<Link to='/album/3'><div> Album 3 </div></Link>
          	<Link to='/album/4'><div> Album 4 </div></Link>
          	<Link to='/album/5'><div> Album 5 </div></Link>
          	<Link to='/album/6'><div> Album 6 </div></Link>
          </div>
				</div>
				<div>
					<ul>
					{this.state.album.map(function(album){
        			return <li key={'id' + album.id} id={album.id}>
        						 	 <div className='albums'>
                					<Link to={"/album/picture/" + album.id }><img id={album.id} src={album.medium + album.img} alt='#'/></Link>
                			 </div>
                   	 </li>
             })}
					</ul>
				</div>
			</div>
		)
	}
})