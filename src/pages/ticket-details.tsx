import { ChangeEvent, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
    BtnBold,
    BtnBulletList,
    BtnClearFormatting,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnRedo,
    BtnStrikeThrough,
    BtnStyles,
    BtnUnderline,
    BtnUndo,
    ContentEditableEvent, Editor, EditorProvider,
    HtmlButton,
    Separator,
    Toolbar,
} from "react-simple-wysiwyg";
import { getTicket, updateTicket } from "../api";
import { Chat } from "../components/chat";

export async function ticketLoader({ params }: { params: any }) {
    return params;
}

export const TicketDetails = () => {
    const user = JSON.parse(localStorage.getItem('user') ?? '')
    const [html, setHtml] = useState("Ecris l'email <b>Ici.</b>");
    const [ticket, setTicket] = useState<TicketI>();

    function onHtmlChange(e: ContentEditableEvent) {
        setHtml(e.target.value);
    }
    const urlData = useLoaderData();
    const ticketId = (urlData as any).id;

    const onStatusChange = async (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        const value = e.target.value;
        if (value) {
            const res = await updateTicket(user.token, ticketId, { status: value })
            setTicket(res ?? ticket)
        }
    }

    const loadTicket = async () => {
        const data = await getTicket(user.token, ticketId);
        setTicket(data);
    }
    useEffect(() => {
        loadTicket();
    }, [])

    return <>
        <div className="ticket-details">
            <h1 className="title">{`Details du ticket avec l'identifiant ${ticket?._id}`}</h1>
            <div className="container">
                <div className="details">
                    <div>
                        <span className="label">Nom</span>
                        <span className="value">{ticket?.username}</span>
                    </div>
                    <div>
                        <span className="label">Email</span>
                        <span className="value">{ticket?.email}</span>
                    </div>
                    <div>
                        <span className="label">Description</span>
                        <span className="value">{ticket?.description}</span>
                    </div>
                    <div>
                        <span className="label">Status</span>
                        <select onChange={(e) => onStatusChange(e)} value={ticket?.status} name="status" id="status-select" className="outline-none border rounded-sm border-blue-700">
                            <option value="">Opion du status</option>
                            <option value="Finis">Finis</option>
                            <option value="En progress">En progress</option>
                            <option value="En attente">En attente</option>
                            <option value="Annuler">Annuler</option>
                        </select>
                    </div>
                    <div>
                        <span className="label">{ticket?.conversationId ? "Copier le lien de la conversation" : "Créer la conversation"}</span>
                        <button onClick={() => { }} className="bg-zinc-200 px-2 py-1 rounded-md">{ticket?.conversationId ? "Copier" : "Créer"}</button>
                    </div>
                </div>
                <div className="send-messages">
                    <div className="email">
                        <h2>Envoyer Un Email au client</h2>
                        <EditorProvider>
                            <Editor value={html} onChange={onHtmlChange}>
                                <Toolbar>
                                    <BtnUndo />
                                    <BtnRedo />
                                    <Separator />
                                    <BtnBold />
                                    <BtnItalic />
                                    <BtnUnderline />
                                    <BtnStrikeThrough />
                                    <Separator />
                                    <BtnNumberedList />
                                    <BtnBulletList />
                                    <Separator />
                                    <BtnLink />
                                    <BtnClearFormatting />
                                    <HtmlButton />
                                    <Separator />
                                    <BtnStyles />
                                </Toolbar>
                            </Editor>
                        </EditorProvider>
                        <button>Envoyer</button>
                    </div>
                    <div className="instant-message">
                        <h2>Message instantané</h2>
                        <Chat />
                    </div>
                </div>
            </div>
        </div>
    </>
}