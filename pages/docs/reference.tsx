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
import { getReferenceDocs } from "providers/DocsPageProvider";
import OSDataLayout from "components/OSDataLayout";

interface PageDataProps {
  ReferenceDocsData: any;
}

interface MetadataTypes {
  slug: string;
  name: string;
  summary: string;
}

// Begin page
export default function ReferenceDocumentationList({
  ReferenceDocsData,
}: PageDataProps) {
  return (
    <>
      <Head>
        <title>
          ULOSINO Documentation &mdash; Reference &amp; Technical Documentation
        </title>
        <meta property="og:title" content="ULOSINO Docs: Reference" />
        <meta
          name="description"
          content="Explore reference guides and technical documentation for the ULOSINO platform."
        />
        <meta
          property="og:description"
          content="Explore reference guides and technical documentation for ULOSINO."
        />
      </Head>

      <Stack direction="column" spacing={5}>
        <Heading size="xl">Reference</Heading>
        <Text>
          Read through in-depth technical documentation and other reference
          resources.
        </Text>
        <Stack direction="column" spacing={2}>
          {ReferenceDocsData.map(({ slug, name, summary }: MetadataTypes) => (
            <Link
              href={`/docs/reference/${slug}`}
              key={`/docs/reference/${slug}`}
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
ReferenceDocumentationList.getLayout = function getLayout(page: ReactElement) {
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

// Import ReferenceDocsData OS Page handling
export const getStaticProps: GetStaticProps = async () => {
  const ReferenceDocsData = getReferenceDocs();
  return {
    props: {
      ReferenceDocsData,
    },
  };
};
