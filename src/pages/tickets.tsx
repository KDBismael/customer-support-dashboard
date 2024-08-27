import { TableRow } from "../components/table-row";
import { useMainStore } from "../stores/mainStore";

export const Tickets = () => {
    const { tickets } = useMainStore();


    return <div className="tickets">
        <h1 className="title">Tickets</h1>
        <div className="details">
            <div className="container recentOrders">
                <table>
                    <thead>
                        <tr>
                            <td>Nom</td>
                            <td>Email</td>
                            <td>description</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tickets.map((ticket) => (
                                <TableRow id={ticket._id} key={ticket._id} name={ticket.username} email={ticket.email} description={ticket.description} status={ticket.status} />
                            ))
                        }
                        {/* <TableRow name="coulibaly" email="coulby@gmail.com " description="probleme1" status="En attente" />
                        <TableRow name="zadi kouakou" email="kouakouz@gmail.com" description="probleme2" status="Annuler" />
                        <TableRow name="Kondombo" email="contact.kondombo@gmail.com" description="Je rencontre un souci lors de la suppression de ma carte virtuelle. J'ai pu supprimer une carte, mais comme j'ai de l'argent sur la deuxième, je ne sais pas comment faire pour la supprimer et récupérer mon argent. Pouvez-vous m'aider ?" status="Finis" /> */}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}