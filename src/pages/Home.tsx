import { Container, Text, Button, Center } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container size="lg" style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Text size="xl" weight={700} align="center">
        Por que o programador foi ao terapeuta?
      </Text>
      <Text size="lg" mt="md" align="center">
        Porque tinha muitos bugs emocionais! 😂
      </Text>
      <Button mt="xl" onClick={() => navigate("/about")}>
        Continuar
      </Button>
    </Container>
  );
}
