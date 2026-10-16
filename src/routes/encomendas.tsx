import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/encomendas")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  component: () => null,
});
