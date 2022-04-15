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
import { getPagesDocs } from "providers/DocsPageProvider";
import PageDataLayout from "components/PageDataLayout";

interface PageDataProps {
  PagesDocsData: any;
}

interface MetadataTypes {
  slug: string;
  name: string;
  summary: string;
}

// Begin page
export default function PagesDocumentationList({
  PagesDocsData,
}: PageDataProps) {
  return (
    <>
      <Head>
        <title>ULOSINO Documentation &mdash; Operating System Pages</title>
        <meta
          property="og:title"
          content="ULOSINO Docs: Operating System Pages"
        />
        <meta
          name="description"
          content="Learn about Operating System Pages on ULOSINO."
        />
        <meta
          property="og:description"
          content="Learn about Operating System Pages on ULOSINO."
        />
      </Head>

      <Stack direction="column" spacing={5}>
        <Heading size="xl">Operating System Pages</Heading>
        <Text>Learn about Operating System Pages, the core of ULOSINO.</Text>
        <Stack direction="column" spacing={2}>
          {PagesDocsData.map(({ slug, name, summary }: MetadataTypes) => (
            <Link
              href={`/docs/pages/${slug}`}
              key={`/docs/pages/${slug}`}
              passHref
            >
              <Card variant="button" as="a">
                <PageDataLayout
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
PagesDocumentationList.getLayout = function getLayout(page: ReactElement) {
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

// Import PagesDocsData OS Page handling
export const getStaticProps: GetStaticProps = async () => {
  const PagesDocsData = getPagesDocs();
  return {
    props: {
      PagesDocsData,
    },
  };
};
