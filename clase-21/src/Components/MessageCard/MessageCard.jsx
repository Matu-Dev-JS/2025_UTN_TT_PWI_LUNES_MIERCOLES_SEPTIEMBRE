import './MessageCard.css'


function MessageCard(props) {
    /* Los props requeridos son: avatar, usuario, fecha, mensaje, color_usuario, bot, pinned */
    const bgColor = props.is_pinned ? 'gray' : 'transparent'

    return (
        <div className='main-message-container'
        style={{backgroundColor: bgColor}}>
            {/* Avatar */}
            <div className="avatar">
                <img src={props.avatar} alt="Avatar" />
            </div>

            {/* Message Container */}
            <div className="message-container">
                <div className="message-info">
                    {/* User */}
                    <div
                    style={
                        {
                            color: props.color ? props.color : 'white'
                        }
                    }
                    className="message-user">
                        {props.usuario}</div>
                    {props.is_bot && <span className='bot'>BOT</span>}
                    {/* Date */}
                    <div className="message-date">{props.fecha}</div>
                </div>

                {/* Message */}
                <span className="message">{props.message}</span>
            </div>
        </div>
    )
}

export default MessageCard