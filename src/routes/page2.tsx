import type { Route } from "../app/+types/root";
import { Page2Content } from "../home/page2";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Página 2 | OriginalProdutos" },
    { name: "description", content: "Segunda página do site OriginalProdutos" },
  ];
}

export default function Page2() {
  return <Page2Content />;
}