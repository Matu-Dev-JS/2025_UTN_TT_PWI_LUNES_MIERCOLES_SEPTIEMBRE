import MessageCard from "../MessageCard/MessageCard"
import './MessagesContainer.css'

function MessagesContainer() {
    return (
        <div className="msg-container">
            <MessageCard
                avatar={'https://archive.siasat.com/wp-content/uploads/2021/05/Discord.jpg'}
                usuario={'User'}
                fecha={'10/23/2020'}
                message={`Hey guys, I'm new here!`}
               />
            <MessageCard
                avatar={'https://archive.siasat.com/wp-content/uploads/2021/05/Discord.jpg'}
                usuario={'Dawn'}
                fecha={'10/23/2020'}
                message={`Hey, I'm new here too!`}
                />
            <MessageCard
                avatar={'https://archive.siasat.com/wp-content/uploads/2021/05/Discord.jpg'}
                usuario={'Sanctuary'}
                color={'blue'}
                fecha={'10/23/2020'}
                message={`Hey. Welcome to our server`}
                />
            <MessageCard
                avatar={'https://archive.siasat.com/wp-content/uploads/2021/05/Discord.jpg'}
                usuario={'Tewlve'}
                color={'green'}
                fecha={'10/23/2020'}
                message={`Hello everyone! How's it going`}
                
                />
            <MessageCard
                avatar={'https://archive.siasat.com/wp-content/uploads/2021/05/Discord.jpg'}
                usuario={'User'}
                fecha={'10/23/2020'}
                message={`Thank you @Sanctuary`}
                is_pinned
                />
            <MessageCard
                avatar={'https://archive.siasat.com/wp-content/uploads/2021/05/Discord.jpg'}
                usuario={'Yotsube'}
                fecha={'10/23/2020'}
                message={`I'm doing well. What about yourself?`}
                
                />
            <MessageCard
                avatar={'https://archive.siasat.com/wp-content/uploads/2021/05/Discord.jpg'}
                usuario={'Tewlve'}
                color={'green'}
                fecha={'10/23/2020'}
                message={`8ball! How am I doing today?`}
                
               />
            <MessageCard
                avatar={'https://archive.siasat.com/wp-content/uploads/2021/05/Discord.jpg'}
                usuario={'Rinon'}
                color={'purple'}
                fecha={'10/23/2020'}
                message={`Yes.`}
                is_bot={true}/>
        </div>
    )
}

export default MessagesContainer