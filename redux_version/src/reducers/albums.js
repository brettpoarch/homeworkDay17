const InitialState = {
	albums: []
}

export function albumsReducer(state = InitialState, action){
	switch(action.type){
		case 'SHOW_COVER':
			return{images: Images.filter(function(value){
				return value.cover === true}
		case 'SHOW_ALBUM':
			return{}
		case 'SWITCH_ALBUM':
			return{}
		case 'SHOW_PHOTO':
			return{}
		default:
			return state
	}
}