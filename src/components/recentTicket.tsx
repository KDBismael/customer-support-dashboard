import { TableRow } from "./table-row"

export const RecentTicket = () => {
    return <div className="recentOrders">
        <div className="cardHeader">
            <h2>Recent Orders</h2>
            <a href="#" className="btn">View All</a>
        </div>
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
                <TableRow name="coulibaly" email="coulby@gmail.com " description="probleme1" status="En attente" />
                <TableRow name="zadi kouakou" email="kouakouz@gmail.com" description="probleme2" status="Annuler" />
                <TableRow name="Kondombo" email="contact.kondombo@gmail.com" description="Je rencontre un soucis lors de la suppression de ma carte virtuelle. j'ai pu supprimé 1 carte mais vu que j'ai de l'argent sur le 2eme je ne sais pas comment faire pour supprimer et recuperer mon argent. pouvez vous m'aider?" status="Finis" />
            </tbody>
        </table>
    </div>
}