import { Button, Card, Form, InputGroup, Table } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { useNavigate } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const UserPage = () => {
    const navigate = useNavigate();
    const [daftarUser, setDaftarUser] = useState([])


    return (
        <NavigationWidget
            buttonCreate={
                <Button onClick={() => navigate("/user/add")}>
                    <VscAdd />  Tambah
                </Button>
            }
            actionTop={
                <InputGroup >
                    <Form.Control />
                    <Button size="sm" variant="outline-secondary">
                        <FaSearch />  Search
                    </Button>
                </InputGroup>
            }
        >
            <Card className="mt-2">
                <Card.Header className="bg-secondary text-light">
                    <h5>User</h5>
                </Card.Header>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Nama Lengkap</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>bunga@gmail.com</td>
                            <td>Bunga</td>
                            <td>Bunga Mawar Merah</td>
                            <td>Admin</td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
        </NavigationWidget>
    );
};

export default UserPage;
