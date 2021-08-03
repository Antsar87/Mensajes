import './App.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Firebase';
import SignIn from './components/SignIn';
import Chat from './components/Chat';

function App() {
  const [user] = useAuthState(auth);

  return <>{user ? <Chat /> : <SignIn />}</>;
}

export default App;
