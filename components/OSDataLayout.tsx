// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Chakra UI, icons, and other design imports
import { Box, Heading, Text } from "@chakra-ui/react";

interface MetadataTypes {
  name: string;
  summary: string;
  OSCardId: string;
}

// Begin component
export default function OSDataLayout({
  name,
  summary,
  OSCardId,
}: MetadataTypes) {
  // Get preferences
  return (
    <Box w="full" id={OSCardId}>
      <Heading size="md">{name}</Heading>
      <Text fontSize="sm">{summary}</Text>
    </Box>
  );
}
