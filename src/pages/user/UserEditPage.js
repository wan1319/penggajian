import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
import { FaArrowLeft, FaSave, FaTrash } from "react-icons/fa";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import UserService from "../../services/UserService";

const UserEditPage = () => {
    const navigate = useNavigate();
    const { ID_User } = useParams();
    const [user, setUser] = useState({});

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser((values) => ({ ...values, [name]: value }));
    };

    useEffect(() => {
        UserService.get(ID_User).then((response) => {
            setUser(response.data);
        });
    }, [ID_User]);

    const handleUserServiceEdit = () => {
        UserService.edit(ID_User, user).then((response) => {
            alert(`Berhasil mengubah data user ${ID_User}`);
            navigate("/user");
        });
    };

    const handleUserServiceDelete = () => {
        let isDelete = window.confirm(`Delete user ${ID_User}?`)
        if (isDelete) {
            UserService.delete(ID_User, user).then(() => {
                alert(`Berhasil mengubah data user ${ID_User}`);
                navigate("/user");
            });
        }

    };

    return (
        <NavigationWidget actionTop={
            <>
                <Button className="me-2" variant="secondary" onClick={() => navigate(-1)}>
                    <FaArrowLeft /> Kembali
                </Button>
                <Button className="me-2" variant="danger" onClick={handleUserServiceDelete}>
                    <FaTrash />Hapus
                </Button>
                <Button onClick={handleUserServiceEdit}>
                    <FaSave />Simpan
                </Button>
            </>
        }>
            <Card>
                <Card.Header>
                    <h5>Edit User</h5>
                </Card.Header>
                <Card.Body>
                    <Form.Group>
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control
                            name="NamaLengkap"
                            value={user.NamaLengkap || ""}
                            onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            disabled
                            name="email"
                            value={user.email || ""}
                            onChange={handleInput}
                            required // Tambahkan atribut required
                            type="email" // Tambahkan tipe email untuk validasi
                        />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            value={user.password || ""}
                            onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Status</Form.Label>
                        <Form.Control
                            name="Status"
                            value={user.Status || ""}
                            onChange={handleInput} />
                    </Form.Group>
                </Card.Body>
            </Card>
        </NavigationWidget>
    );
};

export default UserEditPage;