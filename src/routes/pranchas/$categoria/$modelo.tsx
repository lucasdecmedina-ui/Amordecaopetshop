import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/pranchas/$categoria/$modelo")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  component: () => null,
});
