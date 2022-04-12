// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Types
import type { ReactElement } from "react";
import { GetStaticProps } from "next";

// Head and SEO
import Head from "next/head";

// Links and routing
import Link from "next/link";

// Chakra UI, icons, and other design imports
import { Stack, Heading, Text, Box, useStyleConfig } from "@chakra-ui/react";
function Card(props: { [x: string]: any; variant: string; children: any }) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

// First party components
import ApplicationProvider from "providers/ApplicationProvider";
import Layout from "components/layouts/Layout";
import BrowseLayout from "components/layouts/BrowseLayout";

// Markdown processing libraries
import { getDocs } from "providers/DocsPageProvider";
import OSDataLayout from "components/OSDataLayout";

interface PageDataProps {
  CoreDocsData: any;
}

interface MetadataTypes {
  slug: string;
  name: string;
  summary: string;
}

// Begin page
export default function CoreDocumentationList({ CoreDocsData }: PageDataProps) {
  return (
    <>
      <Head>
        <title>
          ULOSINO Documentation &mdash; Browse, Search, &amp; Matches
        </title>
        <meta
          property="og:title"
          content="ULOSINO Docs: Browse, Search, &amp; Matches"
        />
        <meta
          name="description"
          content="Explore ULOSINO's operating system discovery options."
        />
        <meta
          property="og:description"
          content="Explore ULOSINO's OS discovery options."
        />
      </Head>

      <Stack direction="column" spacing={5}>
        <Heading size="xl">Browse, Search, &amp; Matches</Heading>
        <Text>
          Discover new open source operating system easily with the Operating
          System List, Search, and Matches on ULOSINO.
        </Text>
        <Stack direction="column" spacing={2}>
          {CoreDocsData.map(({ slug, name, summary }: MetadataTypes) => (
            <Link
              href={`/docs/core/${slug}`}
              key={`/docs/core/${slug}`}
              passHref
            >
              <Card variant="button" as="a">
                <OSDataLayout
                  name={name}
                  summary={summary}
                  OSCardId="testingOSDataCard"
                />
              </Card>
            </Link>
          ))}
        </Stack>
      </Stack>
    </>
  );
}

// Apply persistent layout, wrapping page
CoreDocumentationList.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationProvider>
      <Layout
        useBasicLayout={false}
        useAltBackground={false}
        showPreferences={false}
      >
        <BrowseLayout>{page}</BrowseLayout>
      </Layout>
    </ApplicationProvider>
  );
};

// Import CoreDocsData OS Page handling
export const getStaticProps: GetStaticProps = async () => {
  const CoreDocsData = getDocs();
  return {
    props: {
      CoreDocsData,
    },
  };
};
