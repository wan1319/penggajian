import { Button, Card, Form, InputGroup, Table } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { useNavigate } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";

const LaporanGajiPage = () => {
  const navigate = useNavigate();
  return (
    <NavigationWidget
      buttonCreate={
        <Button onClick={() => navigate("/user/add")}>
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
          <h5>Laporan Gaji</h5>
        </Card.Header>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID Gaji</th>
              <th>Tanggal</th>
              <th>Nama Karyawan</th>
              <th>Divisi</th>
              <th>Total Pendapatan</th>
              <th>Total Potongan</th>
              <th>Gaji Bersih</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GJ-001</td>
              <td>7 Juni 2023</td>
              <td>Kiki Saputra</td>
              <td>HRD</td>
              <td>5000000</td>
              <td>700000</td>
              <td>4300000</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </NavigationWidget>
  );
};

export default LaporanGajiPage;
