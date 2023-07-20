import Coment from './Component/Comment';
import './App.css';
const userComment = {
  id: '1',
  userName: 'Hello Kitty',
  commentText: 'Learn react is awesome',
  commentDate: new Date(),
avatarUrl:'https://placekitten.com/g/64/64'
}
function App() {
  return (
    <div className="App">
      <Coment data={userComment} />
    </div>
  );
}

export default App;