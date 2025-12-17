import React from "react";
import DashboardSection from "../components/dashboard/DashboardSection";
import { Container } from "@chakra-ui/react";

function Home() {
  return (
    <Container padding={10} id="home_screen">
      <DashboardSection />
    </Container>
  );
}

export default Home;
