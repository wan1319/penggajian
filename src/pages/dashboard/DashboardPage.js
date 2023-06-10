import { Card, Table } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  return (
    <NavigationWidget>
      <Card className="mt-2">
        <Card.Header className="bg-secondary text-light">
          <h5>User</h5>
        </Card.Header>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Test</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TST-001</td>
              <td>Test</td>
            </tr>
            <tr>
              <td>TST-002</td>
              <td>Test</td>
            </tr>
            <tr>
              <td>TST-003</td>
              <td>Test</td>
            </tr>
          </tbody>
        </Table>
      </Card>
      <Card className="mt-2">
        <Card.Header className="bg-secondary text-light">
          <h5>User</h5>
        </Card.Header>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Test</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TST-001</td>
              <td>Test</td>
            </tr>
            <tr>
              <td>TST-002</td>
              <td>Test</td>
            </tr>
            <tr>
              <td>TST-003</td>
              <td>Test</td>
            </tr>
          </tbody>
        </Table>
      </Card>
      <Card className="mt-2">
        <Card.Header className="bg-secondary text-light">
          <h5>User</h5>
        </Card.Header>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Test</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TST-001</td>
              <td>Test</td>
            </tr>
            <tr>
              <td>TST-002</td>
              <td>Test</td>
            </tr>
            <tr>
              <td>TST-003</td>
              <td>Test</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </NavigationWidget>
  );
};

export default DashboardPage;
