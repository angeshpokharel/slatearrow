import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SlateArrow" },
    { name: "description", content: "Innovative IT staffing solutions for your business!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
