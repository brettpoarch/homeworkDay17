import React from 'react'
import Images from '../images.json'
//import {Link} from 'react-router-dom'
import '../assets/styles/App.css'

export default React.createClass ({

	getInitialState: function(){
		return{
			photo: Images.filter(function(value){
				return Number(value.id) === Number(this.props.match.params.id)
			}.bind(this))[0]
		}
	},

	handleClick: function(e){
		e.preventDefault()
		this.props.history.goBack()
	},

	render: function(){
		return(
			<div>
				<div>
					<h1>PHOTO {this.state.photo.id}</h1>
				</div>
				<div>
					<img id={this.state.photo.album} src={this.state.photo.large + this.state.photo.img} alt='#'/>
				</div>
			</div>
		)
	}
})