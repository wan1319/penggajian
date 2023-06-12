import { Button, Card, Form, InputGroup, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { useEffect, useState } from "react";
import GolonganService from "../../services/GolonganService";


const GolonganPage = () => {
  const navigate = useNavigate();
  const [daftarGolongan, setDaftarGolongan] = useState([]);
  const [paginateGolongan, setPaginateGolongan] = useState([]);
  const [queryGolongan, setQueryGolongan] = useState({ page: 1, limit: 10 });

  useEffect(() => {
    GolonganService.list(queryGolongan)
      .then((response) => {
        setDaftarGolongan(response.data);
        if (response.headers.pagination) {
          setPaginateGolongan(JSON.parse(response.headers.pagination))
        }
      })
      .catch((error) => console.log(error));
  }, [queryGolongan]);

  const callbackPaginator = (page) => {
    setQueryGolongan((values) => ({ ...values, page }));
  };

  const callbackGolonganSearchInlineWidget = (query) => {
    setQueryGolongan((values) => ({ ...values, ...query }));
  };
  return (
    <NavigationWidget
      buttonCreate={
        <Button onClick={() => navigate("/golongan/add")}>
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
          <h5>Golongan</h5>
        </Card.Header>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama Golongan</th>
              <th>Tunjangan Golongan</th>
            </tr>
          </thead>
          <tbody>
            {daftarGolongan.map((golongan, index) => {
              <tr key={index}>
                <td>{golongan.ID_Golongan}</td>
                <td>{golongan.Nama_Golongan}</td>
                <td>{golongan.Tunjangan_Golongan}</td>
              </tr>
            })}
          </tbody>
        </Table>
      </Card>
    </NavigationWidget>
  );
};

export default GolonganPage;
