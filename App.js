import {useState} from 'react';
//import firebaseConfig from './firebase';
import { db } from './firebase';

function App() {
const [name , setName] = useState();
const [age , setAge] = useState();
	
// Push Function
const Push = () => {
	db.collection("newid").add({
	name : name,
	age : age,
	}).catch(console.log);
}

return (
	<div className="App" style={{marginTop : 250}}>
	<center>
	<input type="text" placeholder="Enter your name" value={name}
	onChange={(e) => setName(e.target.value)}/>
	<br/><br/>
	<input type="number" placeholder="Enter your age" value={age}
	onChange={(e) => setAge(e.target.value)}/>
	<br/><br/>
	<button type="submit" onClick={Push}>PUSH</button>
	</center>
	</div>
);
}

export default App;
