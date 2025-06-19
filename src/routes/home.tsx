import type { Route } from "../app/+types/root";
import { Welcome } from "../home/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | OriginalProdutos" },
    { name: "description", content: "Bem-vindo à loja OriginalProdutos!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
