import { Button, Card, Form } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserAddPage = () => {
    const navigate = useNavigate();
    return (
        <NavigationWidget
            actionTop={
                <>
                    <Button className="me-2" variant="secondary" onClick={() => navigate(-1)}>
                        <FaArrowLeft /> Kembali
                    </Button>
                    <Button>
                        <FaSave /> Simpan
                    </Button>
                </>
            }
        >
            <Card>
                <Card.Header>
                    <h5>Tambah User</h5>
                </Card.Header>
                <Card.Body>
                    <Form.Group>
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control name="" />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="" />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Status</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Card.Body>
            </Card>
        </NavigationWidget>
    );
};

export default UserAddPage;
