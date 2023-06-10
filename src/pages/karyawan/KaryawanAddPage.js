import { Button, Card, Form } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const KaryawanAddPage = () => {
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
                    <h5>Tambah Karyawan</h5>
                </Card.Header>
                <Card.Body>
                    <Form.Group>
                        <Form.Label>ID Karyawan</Form.Label>
                        <Form.Control name="" />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Nama Karyawan</Form.Label>
                        <Form.Control name="" />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Gaji Pokok</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Jabatan</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Divisi</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Golongan</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Card.Body>
            </Card>
        </NavigationWidget>
    );
};

export default KaryawanAddPage;
