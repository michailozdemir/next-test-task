import Container from "../components/ui/Container";
import ServiceItem from "../components/ServiceItem";
import ServicesList from "../components/ServicesList";
import Title from "../components/ui/Title";
import { SERVICES } from "../data/services";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="bg-offWhite min-h-screen py-[80px] md:py-[108px] text-base">
      <Container>
        <header className="max-w-[730px] mx-auto mb-12 text-center md:mb-20">
          <Title size="h1">
            We make creative media that <span className="text-blue">adds value</span>
          </Title>
        </header>
        <ServicesList>
          {SERVICES.map((service) => (
            <ServiceItem
              key={service.title}
              title={service.title}
              description={service.description}
              listItems={service.listItems}
              images={service.images}
            />
          ))}
        </ServicesList>
        <footer className="mt-12 text-center mt:mb-20">
          <Button variant="primary">Get started</Button>
        </footer>
      </Container>
    </main>
  );
}
