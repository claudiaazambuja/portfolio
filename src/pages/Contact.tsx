import { Container, Title, TextInput, Button, Stack } from "@mantine/core";

export default function Contact() {
  return (
    <Container size="lg" style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Title>Contato</Title>
      <Stack mt="md">
        <TextInput placeholder="Seu e-mail" label="E-mail" required />
        <Button color="blue">Enviar</Button>
      </Stack>
    </Container>
  );
}
