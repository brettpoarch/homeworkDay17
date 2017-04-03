import { createStore } from 'redux'
import { albumsReducer } from './reducers/albums'

const store = createStore(albumsReducer)

export default store