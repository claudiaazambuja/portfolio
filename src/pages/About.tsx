import { Container, Title, Text, Group, Button } from "@mantine/core";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Container size="lg" style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Title>Oi, eu sou Claudia Azambuja!</Title>
      <Text mt="md">Sou desenvolvedora e amo criar soluções incríveis com código! 🚀</Text>
      
      <Group mt="xl">
        <Button component={Link} to="/skills">Habilidades</Button>
        <Button component={Link} to="/testimonials">Depoimentos</Button>
        <Button component={Link} to="/contact">Contato</Button>
      </Group>
    </Container>
  );
}
