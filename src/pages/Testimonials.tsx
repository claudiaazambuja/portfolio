import { Container, Title, Blockquote } from "@mantine/core";

export default function Testimonials() {
  return (
    <Container size="lg" style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Title>Depoimentos</Title>
      <Blockquote mt="md" cite="– João da Silva">"Claudia é uma excelente desenvolvedora! Seu código é impecável!"</Blockquote>
      <Blockquote mt="md" cite="– Maria Souza">"Trabalhar com Claudia foi incrível, recomendo fortemente!"</Blockquote>
    </Container>
  );
}
