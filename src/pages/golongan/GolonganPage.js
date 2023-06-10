import { Button, Card, Form, InputGroup, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import NavigationWidget from "../../widgets/commons/NavigationWidget";


const GolonganPage = () => {
  const navigate = useNavigate();
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
            <tr>
              <td>GL-001</td>
              <td>Gologan-01</td>
              <td>100000</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </NavigationWidget>
  );
};

export default GolonganPage;
