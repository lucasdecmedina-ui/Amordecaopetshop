import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/contato")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  component: () => null,
});
