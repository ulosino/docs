// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";

// Head and SEO
import Head from "next/head";

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import {
  Stack,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Box,
  useStyleConfig,
  Icon,
} from "@chakra-ui/react";
function Card(props: { [x: string]: any; variant: string; children: any }) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}
import {
  HiAcademicCap,
  HiCog,
  HiDatabase,
  HiInformationCircle,
  HiLightningBolt,
  HiOutlineArrowRight,
  HiOutlineDatabase,
  HiOutlineInformationCircle,
  HiOutlineSparkles,
  HiPencil,
} from "react-icons/hi";

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import { NoJSWarningHome } from "components/NoJSWarning";
import { ErrorFallback } from "components/ErrorFallback";

interface OSDataPage {
  AZOSPageData: any;
}

// Begin page
export default function Home() {
  const systemDate = new Date();
  const hours = systemDate.getHours();
  var timeGreeting;
  if (hours < 12) timeGreeting = "Good Morning";
  else if (hours >= 12 && hours <= 17) timeGreeting = "Good Afternoon";
  else if (hours >= 17 && hours <= 24) timeGreeting = "Good Evening";

  return (
    <>
      <Head>
        <title>ULOSINO &mdash; Documentation</title>
        <meta property="og:title" content="ULOSINO &mdash; Documentation" />
        <meta
          name="description"
          content="Explore ULOSINO documentation resources. Get help with your ULOSINO app experience."
        />
        <meta
          property="og:description"
          content="Explore ULOSINO documentation resources.."
        />
      </Head>

      <Stack direction="column" spacing={10}>
        <noscript>
          <NoJSWarningHome />
        </noscript>
        <ErrorFallback>
          <Stack direction="column" spacing={5}>
            <Text textStyle="miniHeading" as="h6">
              ULOSINO Documentation
            </Text>
            <Stack direction="column" spacing={5}>
              <Heading size="xl">{timeGreeting}</Heading>
              <Link href="/docs/core" passHref>
                <Button leftIcon={<HiOutlineArrowRight />} as="a">
                  Browse All Documentation
                </Button>
              </Link>
            </Stack>
          </Stack>
        </ErrorFallback>
        <ErrorFallback>
          <Card variant="solid">
            <Stack direction="column" spacing={5}>
              <Text textStyle="miniHeading" as="h6">
                Browse Documentation Highlights
              </Text>
              <SimpleGrid minChildWidth="290px" spacing={10}>
                <Stack direction="column" spacing={5}>
                  <Icon as={HiDatabase} aria-label="Database" w={10} h={10} />
                  <Text>
                    Explore with the Operating System List, Search, and ULOSINO
                    Matches.
                  </Text>
                  <Link href="/docs/core" passHref>
                    <Button leftIcon={<HiOutlineArrowRight />} as="a">
                      Browse Documentation
                    </Button>
                  </Link>
                </Stack>
                <Stack direction="column" spacing={5}>
                  <Icon as={HiPencil} aria-label="Pencil" w={10} h={10} />
                  <Text>
                    Give capital and donate with ULOSINO Tempo donation
                    features.
                  </Text>
                  <Link href="/docs/tempo" passHref>
                    <Button leftIcon={<HiOutlineArrowRight />} as="a">
                      Browse Documentation
                    </Button>
                  </Link>
                </Stack>
                <Stack direction="column" spacing={5}>
                  <Icon as={HiCog} aria-label="Preference gear" w={10} h={10} />
                  <Text>
                    Make moves faster with preferences and keyboard shortcuts.
                  </Text>
                  <Link href="/docs/preferences" passHref>
                    <Button leftIcon={<HiOutlineArrowRight />} as="a">
                      Browse Documentation
                    </Button>
                  </Link>
                </Stack>
              </SimpleGrid>
            </Stack>
          </Card>
        </ErrorFallback>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationProvider>
      <Layout
        useBasicLayout={false}
        useAltBackground={false}
        showPreferences={false}
      >
        {page}
      </Layout>
    </ApplicationProvider>
  );
};
