import { Container, Text, Button, Box } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState("");
  const [isDaytime, setIsDaytime] = useState(true); // Estado para verificar se é dia ou noite

  // Função para determinar o cumprimento baseado no horário
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setIsDaytime(true); // Dia
      return "Bom dia!";
    } else if (hour < 18) {
      setIsDaytime(true); // Tarde
      return "Boa tarde!";
    } else {
      setIsDaytime(false); // Noite
      return "Boa noite!";
    }
  };

  // Atualiza o cumprimento a cada renderização
  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  return (
    <>
      {/* Header com animação e mudança de estilo baseado no horário */}
      <Box
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "10px",
          textAlign: "center",
          borderBottom: "1px solid #ddd",
          zIndex: 1000,
          backgroundColor: isDaytime ? "#F8F8F8" : "#2c3e50", // Cor do fundo: clara ou escura
          color: isDaytime ? "#000" : "#ecf0f1", // Cor do texto: escura ou clara
          transition: "background-color 0.5s, color 0.5s", // Animação suave
        }}
      >
        <Text size="lg" fw={600}>
          {greeting}
        </Text>
      </Box>

      {/* Conteúdo principal */}
      <Container
        size="lg"
        style={{
          height: "calc(100vh - 100px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "80px", // Para não cobrir o conteúdo com o cabeçalho fixo
        }}
      >
        <Text size="xl" fw={700} ta="center">
          O que o 1 disse para o 0?
        </Text>
    

        {/* Botão estilizado */}
        <Button
          mt="xl"
          size="lg"
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
          onClick={() => navigate("/about")}
          style={{
            fontWeight: 700,
            padding: "12px 24px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          Continuar
        </Button>
      </Container>

      {/* Rodapé */}
      <Container
        style={{
          backgroundColor: "#f1f1f1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          width: "100%",
          bottom: 0,
          height: "60px",
          boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Text size="sm" c="gray" ta="center">
          © 2025 Pulse B. | Todos os direitos reservados
        </Text>
      </Container>
    </>
  );
}
