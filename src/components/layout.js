import { Box } from "@chakra-ui/react";
import WithSubnavigation from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <WithSubnavigation />
      <main>{children}</main>
    </>
  );
}
