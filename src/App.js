import { ChatEngine, ChatFeed } from 'react-chat-engine';
import ChatFeed from '/components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height='100vh'
            projectID="0e447263-6d11-4a15-89d0-e387dfd9d49f"
            userName="davidreese26"
            userSecret="123123"
            renderCHatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;