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
import { getPreferencesDocs } from "providers/DocsPageProvider";
import OSDataLayout from "components/OSDataLayout";

interface PageDataProps {
  PreferencesDocsData: any;
}

interface MetadataTypes {
  slug: string;
  name: string;
  summary: string;
}

// Begin page
export default function PreferencesDocumentationList({
  PreferencesDocsData,
}: PageDataProps) {
  return (
    <>
      <Head>
        <title>
          ULOSINO Documentation &mdash; Preferences &amp; Keyboard Shortcuts
        </title>
        <meta
          property="og:title"
          content="ULOSINO Docs: Preferences &amp; Keyboard Shortcuts"
        />
        <meta
          name="description"
          content="Learn about ULOSINO's customisation and keyboard shortcuts options."
        />
        <meta
          property="og:description"
          content="Learn about ULOSINO's customisation options."
        />
      </Head>

      <Stack direction="column" spacing={5}>
        <Heading size="xl">Preferences &amp; Keyboard Shortcuts</Heading>
        <Text>
          Learn how to get the most out of the comprehensive customisation
          options and advanced features available across the ULOSINO platform.
        </Text>
        <Stack direction="column" spacing={2}>
          {PreferencesDocsData.map(({ slug, name, summary }: MetadataTypes) => (
            <Link
              href={`/docs/preferences/${slug}`}
              key={`/docs/preferences/${slug}`}
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
PreferencesDocumentationList.getLayout = function getLayout(
  page: ReactElement
) {
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

// Import PreferencesDocsData OS Page handling
export const getStaticProps: GetStaticProps = async () => {
  const PreferencesDocsData = getPreferencesDocs();
  return {
    props: {
      PreferencesDocsData,
    },
  };
};
