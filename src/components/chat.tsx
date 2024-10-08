import { useRef, useState } from "react";
import { AgentMessage } from "./agent-message";
import { ClientMessage } from "./client-message";
interface ChatProps {
    messages: MessageI[]
    conversationId: string;
    ticketId: string;
    sendMessage: (message: Partial<MessageI>) => void;
}

export const Chat = (props: ChatProps) => {
    const { messages, conversationId, ticketId, sendMessage } = props;
    const user = JSON.parse(localStorage.getItem('user') ?? '')
    const [message, setMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const onSendMessage = () => {
        console.log(message)
        if (message && ticketId && conversationId)
            sendMessage({ conversation: conversationId, recipient: ticketId, sender: user.id, text: message })
        console.log(messages)
    }
    const onEnterKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key == "Enter") onSendMessage()
    }
    console.log(messages)

    return <>
        <div className="chat shadow-xl">
            <div className="top flex justify-between p-2"
                style={{ "backgroundColor": 'rgb(255, 255, 255)' }}
            >
                <div className="flex items-center">
                    <div className="avatar w-14 h-14 mr-5">
                        <div className="tpl-avatar relative">
                            <div className="tpl-avatar-status h-3 w-3 bg-green-500 rounded-full absolute bottom-0 right-1" style={{ "borderColor": 'rgb(255, 255, 255)' }}></div>
                            <div className="tpl-avatar-image"
                            // style={{ "backgroundColor": "rgb(255, 255, 255)" }}
                            >
                                <div data-status="loaded" data-cover="true" className="">
                                    <img src="/src/assets/message.png" alt="msg-icon" className="object-cover rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="company">
                        <div className="header" style={{ "color": 'rgb(0, 0, 0)' }}>Kondombo</div>
                        <div className="status text-sm" style={{ color: 'rgb(155, 166, 179)' }}>En ligne</div>
                    </div>
                </div>
                <div className="close mt-2 cursor-pointer" onClick={() => close()}>
                    <div data-actions="true" data-size="normal" className="tpl-close w-6 h-6">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#5e6165"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="conversation bg-slate-300">
                <div className="conversation h-[350px]  relative overflow-y-auto overflow-x-hidden pt-3">
                    {
                        messages.map((message) => {
                            if (message.sender == user.id)
                                return <div key={message._id} className="flex justify-end -mt-3">
                                    <AgentMessage key={message._id} message={message.text} />
                                </div>
                            else
                                return <div key={message._id} className="flex justify-start -mt-3">
                                    <ClientMessage message={message.text} />
                                </div>
                        })
                    }
                    {/* <AgentMessage message="Bonjour Mr pour la suppression de votre carte virtuelle nous supprimons la carte definitivement et si vous avez de l'argent sur la carte, l'argent est transferé sur votre wallet PayQin." />
                    <ClientMessage message="Ok, merci de m'avoir assisté, je suis satisfait." />
                    <div className="flex justify-end -mt-3">
                        <ClientMessage message="A bientôt" />
                    </div> */}
                    <div ref={messagesEndRef} />
                </div>
            </div>
            <div className="typing  border-b flex items-center h-14 pr-5" style={{ background: "rgb(255, 255, 255)", borderTopColor: "rgb(234, 234, 234)" }}>
                <input disabled={conversationId ? false : true} onKeyUp={(event) => onEnterKeyUp(event)} value={message} type="text" onChange={(val) => setMessage(val.target.value)} className="w-full h-full pl-3 border-none outline-none" maxLength={256} placeholder="Type your message here" style={{ color: "rgb(150, 155, 166)" }} />
                <div aria-disabled={conversationId ? false : true} className="send-icon w-7 h-7 cursor-pointer" onClick={() => onSendMessage()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlSpace="preserve"><path fill="#d7d7d7" d="M22,11.7V12h-0.1c-0.1,1-17.7,9.5-18.8,9.1c-1.1-0.4,2.4-6.7,3-7.5C6.8,12.9,17.1,12,17.1,12H17c0,0,0-0.2,0-0.2c0,0,0,0,0,0c0-0.4-10.2-1-10.8-1.7c-0.6-0.7-4-7.1-3-7.5C4.3,2.1,22,10.5,22,11.7z"></path></svg>
                </div>
            </div>
        </div>
    </>
}