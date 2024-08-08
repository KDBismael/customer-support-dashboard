import { useState } from "react";
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
import { Chat } from "../components/chat";

export async function ticketLoader({ params }: { params: any }) {
    return params;
}

export const TicketDetails = () => {
    const [html, setHtml] = useState("Ecris l'email <b>Ici.</b>");

    function onHtmlChange(e: ContentEditableEvent) {
        setHtml(e.target.value);
    }
    const data = useLoaderData();
    console.log(data);

    return <>
        <div className="ticket-details">
            <h1 className="title">Details du ticket 3</h1>
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
                        <span className="value">Je rencontre un soucis lors de la suppression de ma carte virtuelle. j'ai pu supprimé 1 carte mais vu que j'ai de l'argent sur le 2eme je ne sais pas comment faire pour supprimer et recuperer mon argent. pouvez vous m'aider?</span>
                    </div>
                    <div>
                        <span className="label">Status</span>
                        <select value={'Finis'} name="status" id="status-select" className="outline-none border rounded-sm border-blue-700">
                            <option value="">Opion du status</option>
                            <option value="Finis">Finis</option>
                            <option value="En progres">En progress</option>
                            <option value="En attente">En attente</option>
                            <option value="Annule">Annuler</option>
                        </select>
                    </div>
                    <div>
                        <span className="label">Copie le lien de la conversation</span>
                        <button className="bg-zinc-200 px-2 py-1 rounded-md">Copier</button>
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