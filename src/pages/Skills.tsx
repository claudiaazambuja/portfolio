import { Container, Title, List, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export default function Skills() {
  return (
    <Container size="lg" style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Title>Minhas Habilidades</Title>
      <List mt="md" spacing="sm">
        <List.Item icon={<ThemeIcon color="blue" size={24}><IconCheck size={16} /></ThemeIcon>}>React</List.Item>
        <List.Item icon={<ThemeIcon color="blue" size={24}><IconCheck size={16} /></ThemeIcon>}>TypeScript</List.Item>
        <List.Item icon={<ThemeIcon color="blue" size={24}><IconCheck size={16} /></ThemeIcon>}>Node.js</List.Item>
        <List.Item icon={<ThemeIcon color="blue" size={24}><IconCheck size={16} /></ThemeIcon>}>Mantine</List.Item>
      </List>
    </Container>
  );
}
