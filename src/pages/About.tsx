import { Container, Title, Text, Group, Button, Box } from "@mantine/core";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Box
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundImage: "url('https://vetex.vet.br/blog/wp-content/uploads/2021/12/Dachshund-o-cao-salsicha-930x620.png)", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        size="lg"
        style={{
          paddingTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)", 
          borderRadius: "8px",
        }}
      >
        <Title order={2} style={{ color: "white" }}>
          cclabdis
        </Title>
        <Group >
          <Button variant="link" component={Link} to="/skills" style={{ color: "white" }}>
            Habilidades
          </Button>
          <Button variant="link" component={Link} to="/testimonials" style={{ color: "white" }}>
            Depoimentos
          </Button>
          <Button variant="link" component={Link} to="/contact" style={{ color: "white" }}>
            Contato
          </Button>
        </Group>
      </Container>

  
      <Container
        size="lg"
        style={{
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)", 
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <Title order={1}>Oi, eu sou Claudia Azambuja!</Title>
        <Text mt="md">Sou desenvolvedora e amo criar soluções incríveis com código! 🚀</Text>
      </Container>
    </Box>
  );
}
