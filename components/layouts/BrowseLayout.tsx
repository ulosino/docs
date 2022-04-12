// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This wraps around our Browse series of pages, implementing a sidebar to navigate between the Browse pages

// Types
import type { ReactElement } from "react";

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import { Flex, Stack, Box, Button } from "@chakra-ui/react";

// First party components
import { ErrorFallback } from "components/ErrorFallback";

// Begin wrapping component
export default function BrowseLayout({ children }: { children: ReactElement }) {
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <ErrorFallback>
        <Stack
          direction="column"
          spacing={2}
          mb={10}
          me={{ base: "none", md: 10 }}
          minW={{ base: "inherit", sm: "350" }}
          display={{ base: "none", sm: "flex" }}
          as="nav"
          id="testingBrowsePageSeriesSidebar"
        >
          <Link href="/docs/core" passHref>
            <Button as="a">Browse, Search, &amp; Matches</Button>
          </Link>
          <Link href="/docs/pages" passHref>
            <Button as="a">Operating System Pages</Button>
          </Link>
          <Link href="/docs/tempo" passHref>
            <Button as="a">ULOSINO Tempo</Button>
          </Link>
          <Link href="/docs/preferences" passHref>
            <Button as="a">Preferences &amp; Keyboard Shortcuts</Button>
          </Link>
          <Link href="/docs/reference" passHref>
            <Button as="a">Reference &amp; Technical Documentation</Button>
          </Link>
        </Stack>
      </ErrorFallback>
      <Box flex={1} as="main">
        <ErrorFallback>{children}</ErrorFallback>
      </Box>
    </Flex>
  );
}
