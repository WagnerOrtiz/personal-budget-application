import { Container, Summary } from "./styles";
import { SummaryCard } from "../SummaryCard"
import { Table } from '../Table'


export const Dashboard = () => (
  <Container>
    <Summary>
      <SummaryCard title="Entradas" value="4"/>
      <SummaryCard title="Saídas" value="4"/>
      <SummaryCard title="Total" value="4" />
    </Summary>
    <Table />
  </Container>
)