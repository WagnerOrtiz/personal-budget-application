import { Container, Summary } from "./styles";
import { SummaryCard } from "../SummaryCard"


export const Dashboard = () => (
  <Container>
    <Summary>
      <SummaryCard title="Entradas" value="4"/>
      <SummaryCard title="Saídas" value="4"/>
      <SummaryCard title="Total" value="4" />
    </Summary>
  </Container>
)