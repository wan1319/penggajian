import { Button, Card, Form, InputGroup, Table } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { useNavigate } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";

const KaryawanPage = () => {
  const navigate = useNavigate();
  return (
    <NavigationWidget
      buttonCreate={
        <Button onClick={() => navigate("/karyawan/add")}>
          <VscAdd /> Tambah
        </Button>
      }
      actionTop={
        <InputGroup>
          <Form.Control />
          <Button size="sm" variant="outline-secondary">
            <FaSearch /> Search
          </Button>
        </InputGroup>
      }
    >
      <Card className="mt-2">
        <Card.Header className="bg-secondary text-light">
          <h5>Karyawan</h5>
        </Card.Header>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Gaji Pokok</th>
              <th>Golongan</th>
              <th>Jabatan</th>
              <th>Divisi</th>
              <th>Status Pernikahan</th>
              <th>Jumlah Anak</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>KY-001</td>
              <td>Kiki Putra</td>
              <td>5000000</td>
              <td>Golongan-01</td>
              <td>Manager</td>
              <td>Divisi-01</td>
              <td>Menikah</td>
              <td>2</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </NavigationWidget>
  );
};

export default KaryawanPage;
