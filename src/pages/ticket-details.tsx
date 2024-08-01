export const TicketDetails = () => {
    return <>
        <div className="ticket-details">
            <h1 className="title">Details du ticket ###########</h1>
            <div className="container">
                <div className="details">
                    <div>
                        <span className="label">Nom</span>
                        <span className="value">Kondombo</span>
                    </div>
                    <div>
                        <span className="label">Email</span>
                        <span className="value">contact.kondombo@gmail.com</span>
                    </div>
                    <div>
                        <span className="label">Description</span>
                        <span className="value">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</span>
                    </div>
                </div>
                <div className="send-messages">
                    <div className="email">
                        <h2>Envoyer Un Email au client</h2>
                        <form action="">
                            <textarea name="emailContent" id="email-content"></textarea>
                            <button>Envoyer</button>
                        </form>
                    </div>
                    <div className="instant-message">
                        <h2>Message instantané</h2>
                        <div className="container"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
}