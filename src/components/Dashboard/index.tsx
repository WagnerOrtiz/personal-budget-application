import { Container, Summary } from "./styles";
import { SummaryCard } from "../SummaryCard"
import { Table } from '../Table'


export const Dashboard = () => (
  <Container>
    <Summary>
      <SummaryCard title="Entradas" amount="4"/>
      <SummaryCard title="Saídas" amount="4"/>
      <SummaryCard title="Total" amount="4" />
    </Summary>
    <Table />
  </Container>
)