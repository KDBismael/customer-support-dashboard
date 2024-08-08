import { useNavigate } from "react-router-dom";

interface TableRowProps {
    name: string,
    email: string,
    description: string,
    status: string,
}

export const TableRow = (props: TableRowProps) => {
    const navigate = useNavigate();
    const { name, email, description, status } = props;
    const statusClass = status == 'Finis' ? "delivered" : status == 'En attente' ? 'pending' : status == 'En progress' ? 'inProgress' : status == 'Annuler' ? 'return' : ''
    return <>
        <tr onClick={() => navigate(`/tickets/${email}`)}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{description}</td>
            <td><span className={`status ${statusClass} block !w-max ml-auto`}>{status}</span></td>
        </tr>
    </>
}