/* Esto en una app real NO EXISTE, solo estamos guardando datos de mook (boceto) para hacer pruebas */
const contact_data = [
    {
        contact_id: 1,
        contact_name: 'Maria',
        contact_avatar: 'https://images.immediate.co.uk/production/volatile/sites/3/2017/12/yoda-the-empire-strikes-back-28a7558.jpg',
        contact_unseen_messages: 5,
        last_message_content: 'testing',
        last_message_state: 'RECEIVED',/*'NOT_SEND' | 'NOT_RECEIVED' | 'RECEIVED' | 'SEEN'*/
        last_message_created_at: new Date()
    },
    {
        contact_id: 2,
        contact_name: 'Juan',
        contact_avatar: 'https://images.immediate.co.uk/production/volatile/sites/3/2017/12/yoda-the-empire-strikes-back-28a7558.jpg',
        contact_unseen_messages: 0,
        last_message_content: 'Que tal?',
        last_message_state: 'SEEN',
        last_message_created_at: new Date()
    },
]

export default contact_data