import { Button, Card, Form } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GolonganService from "../../services/GolonganService";

const GolonganAddPage = () => {
    const navigate = useNavigate();
    const [golongan, setGolongan] = useState({});

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setGolongan((values) => ({ ...values, [name]: value }));
    };

    const handleGolonganServiceCreate = () => {
        GolonganService.create(golongan).then((response) => {
            alert("Golongan berhasil ditambahkan.");
            navigate("/golongan");
        });
    };

    return (
        <NavigationWidget
            actionTop={
                <>
                    <Button className="me-2" variant="secondary" onClick={() => navigate(-1)}>
                        <FaArrowLeft /> Kembali
                    </Button>
                    <Button onClick={handleGolonganServiceCreate}>
                        <FaSave /> Simpan
                    </Button>
                </>
            }
        >
            <Card>
                <Card.Header>
                    <h5>Tambah Golongan</h5>
                </Card.Header>
                <Card.Body>
                    <Form.Group>
                        <Form.Label>ID Golongan</Form.Label>
                        <Form.Control
                            name="ID_Golongan"
                            value={golongan.ID_Golongan || ""}
                            onChange={handleInput}
                        />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Nama Golongan</Form.Label>
                        <Form.Control
                            name="Nama_Golongan"
                            value={golongan.Nama_Golongan || ""}
                            onChange={handleInput}
                        />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Tunjangan</Form.Label>
                        <Form.Control
                            name="Tunjangan_Golongan"
                            value={golongan.Tunjangan_Golongan || ""}
                            onChange={handleInput}
                        />
                    </Form.Group>
                </Card.Body>
            </Card>
        </NavigationWidget>
    );
};

export default GolonganAddPage;
