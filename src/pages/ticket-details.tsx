import { useState } from "react";
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

export const TicketDetails = () => {
    const [html, setHtml] = useState('Write the Email <b>Here.</b>');

    function onHtmlChange(e: ContentEditableEvent) {
        setHtml(e.target.value);
    }

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