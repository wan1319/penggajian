import { Button, Card, Col, Row, Table } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PenggajianListPage = () => {
  const navigate = useNavigate("/penggajian/list");
  return (
    <NavigationWidget
      actionTop={
        <>
          <Button className="me-2" variant="danger" onClick={() => navigate(-1)}>
            <MdCancel /> Batal
          </Button>
          <Button>
            <FaSave /> Simpan
          </Button>
        </>
      }
    >
      <Card>
        <Card.Header>
          <h5>Data Penggajian</h5>
        </Card.Header>

        <Card.Body>
          <Table >
            <thead>
              <tr>
                <th>ID Gaji</th>
                <th>Tanggal Entri</th>
                <th>ID Karyawan</th>
                <th>Nama Karyawan</th>
                <th>Jabatan</th>
                <th>Divisi</th>
                <th>Golongan</th>
                <th>Status Pernikahan</th>
                <th>Jumlah Anak</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PG-001</td>
                <td>8 juni 2023</td>
                <td>KY-001</td>
                <td>Kiki Putra</td>
                <td>Manager</td>
                <td>Divisi-01</td>
                <td>Golongan-01</td>
                <td>Menikah</td>
                <td>2</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Row>
        <Col md={6}>
          <Card className="mt-2">
            <Card.Header className="bg-secondary text-light">
              <h5>Pendapatan</h5>
            </Card.Header>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>ID Potongan</th>
                  <th>Nama Potongan</th>
                  <th>Jumlah Potongan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PD-001</td>
                  <td>Gaji Pokok</td>
                  <td>250.000</td>
                </tr>
                <tr>
                  <td>PD-002</td>
                  <td>Tunjangan Jabatan</td>
                  <td>251.000</td>
                </tr>
                <tr>
                  <td>PD-003</td>
                  <td>Tunjangan Golongan</td>
                  <td>252.000</td>
                </tr>
                <tr>
                  <td>PD-005</td>
                  <td>Tunjangan Keluarga</td>
                  <td>253.000</td>
                </tr>
                <tr>
                  <td>PD-006</td>
                  <td>Tunjangan Anak</td>
                  <td>254.000</td>
                </tr>
                <tr>
                  <td>PD-007</td>
                  <td>Uang Tansport</td>
                  <td>255.000</td>
                </tr>
                <tr>
                  <td>PD-008</td>
                  <td>Uang Makan</td>
                  <td>256.000</td>
                </tr>
                <tr>
                  <td>PD-009</td>
                  <td>Uang Lembur</td>
                  <td>257.000</td>
                </tr>
                <tr>
                  <td>PD-010</td>
                  <td>Uang Lain-lain</td>
                  <td>258.000</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mt-2">
            <Card.Header className="bg-secondary text-light">
              <h5>Potongan</h5>
            </Card.Header>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>ID Potongan</th>
                  <th>Nama Potongan</th>
                  <th>Jumlah Potongan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PO-001</td>
                  <td>PPh 21</td>
                  <td>350.000</td>
                </tr>
                <tr>
                  <td>PO-002</td>
                  <td>BPJS</td>
                  <td>351.000</td>
                </tr>
                <tr>
                  <td>PO-003</td>
                  <td>Simpanan Wajib Koperasi</td>
                  <td>352.000</td>
                </tr>
                <tr>
                  <td>PO-004</td>
                  <td>Pinjaman Koperasi</td>
                  <td>353.000</td>
                </tr>
                <tr>
                  <td>PO-005</td>
                  <td>Potongan Lain-lain</td>
                  <td>354.000</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </NavigationWidget>
  );
};

export default PenggajianListPage;
