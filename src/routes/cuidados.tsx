import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/cuidados")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  component: () => null,
});
