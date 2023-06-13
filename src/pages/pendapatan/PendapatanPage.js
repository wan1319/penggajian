import { Button, Card, Form, InputGroup, Table } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { useNavigate } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import PendapatanService from "../../services/PendapatanService";


const PendapatanPage = () => {
  const navigate = useNavigate();
  const [daftarPendapatan, setDaftarPendapatan] = useState({});
  const [queryPendapatan, setQueryPendapatan] = useState({ page: 1, limit: 10 });
  const [paginatePendapatan, setPaginatePendapatan] = useState([]);
  useEffect(() => {
    PendapatanService.list(daftarPendapatan)
      .then((response) => {
        setDaftarPendapatan(response.data);
        if (response.headers.pagination) {
          setPaginatePendapatan(JSON.parse(response.headers.pagination));
        }
      })
      .catch((error) => console.log(error));
  }, [queryPendapatan]);

  const callbackPaginator = (page) => {
    setQueryPendapatan((values) => ({ ...values, page }));
  };

  const callbackPendapatanSearchInlineWidget = (query) => {
    setQueryPendapatan((values) => ({ ...values, ...query }));
  };

  return (
    <NavigationWidget
      buttonCreate={
        <Button onClick={() => navigate("/pendapatan/add")}>
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
          <h5>Pendapatan</h5>
        </Card.Header>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID Pendapatan</th>
              <th>Nama Pendapatan</th>
            </tr>
          </thead>
          <tbody onClick={() => navigate("/pendapatan/edit/:ID_Pendapatan")}>
          {daftarPendapatan.results && daftarPendapatan.results.map((pendapatan, index) => (
                <tr key={index}>
                  <td>{pendapatan.ID_Pendapatan}</td>
                  <td>{pendapatan.Nama_Pendapatan}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Card>
    </NavigationWidget>
  );
};

export default PendapatanPage;
