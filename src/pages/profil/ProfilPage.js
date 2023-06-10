import { Card, Table } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { useNavigate } from "react-router-dom";

const ProfilPage = () => {
    const navigate = useNavigate();
    return (
        <NavigationWidget>
            <Card className="mt-2">
                <Card.Header className="bg-secondary text-light">
                    <h5>Profil</h5>
                </Card.Header>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nama</th>
                            <th>Alamat</th>
                            <th>Telepon</th>
                            <th>Fax</th>
                            <th>Email</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ID-001</td>
                            <td>PT. Cendana Dua</td>
                            <td>Jl. Setapak No.34 Jakarta</td>
                            <td>111222333</td>
                            <td>-</td>
                            <td>cendana@gmail.com</td>
                            <td>www.cendanadua.com</td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
        </NavigationWidget>
    );
};

export default ProfilPage;
