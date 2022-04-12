// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This contains keybinding reference tables
// All are displayed at /about/keybindings

// Chakra UI, icons, and other design imports
import { Table, Tbody, Td, Th, Thead, Tr, Code } from "@chakra-ui/react";

export default function EmbeddedMetadataTable() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Metadata</Th>
          <Th>Meaning</Th>
          <Th>Introduction</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <Code>name</Code>
          </Td>
          <Td>The name of the operating system </Td>
          <Td>3.0.0</Td>
        </Tr>
        <Tr>
          <Td>
            <Code>summary</Code>
          </Td>
          <Td>A short description of the OS (2-7 words)</Td>
          <Td />
        </Tr>
        <Tr>
          <Td>
            <Code>date</Code>
          </Td>
          <Td>The date of writing. Uses the Year-Month-Date format</Td>
          <Td />
        </Tr>
        <Tr>
          <Td>
            <Code>version</Code>
          </Td>
          <Td>The version of the OS when written</Td>
          <Td />
        </Tr>
        <Tr>
          <Td>
            <Code>category</Code>
          </Td>
          <Td>The category of the OS</Td>
          <Td>1.3.0</Td>
        </Tr>
        <Tr>
          <Td>
            <Code>platform</Code>
          </Td>
          <Td>A list of popular platforms available, separated by commas</Td>
          <Td />
        </Tr>
        <Tr>
          <Td>
            <Code>descends</Code>
          </Td>
          <Td>The OS that the OS of writing is based on</Td>
          <Td />
        </Tr>
        <Tr>
          <Td>
            <Code>desktop</Code>
          </Td>
          <Td>The preinstalled desktop environment</Td>
          <Td />
        </Tr>
        <Tr>
          <Td>
            <Code>shell</Code>
          </Td>
          <Td>The default shell (e.g. bash, zsh, etc.)</Td>
          <Td />
        </Tr>
        <Tr>
          <Td>
            <Code>packagemgr</Code>
          </Td>
          <Td>
            The default package manager, excluding cross-OS platforms (e.g.
            flatpak)
          </Td>
          <Td />
        </Tr>
        <Tr>
          <Td>
            <Code>startup</Code>
          </Td>
          <Td>The default startup manager (e.g. systemd, launchctl, etc.)</Td>
          <Td />
        </Tr>
        <Tr>
          <Td>
            <Code>size</Code>
          </Td>
          <Td>The approximated size of the OS in MB</Td>
          <Td />
        </Tr>
        <Tr>
          <Td>
            <Code>browser</Code>
          </Td>
          <Td>The preinstalled web browser</Td>
          <Td />
        </Tr>
        <Tr>
          <Td>
            <Code>license</Code>
          </Td>
          <Td>The license used by the OS</Td>
          <Td />
        </Tr>
        <Tr>
          <Td>
            <Code>origin</Code>
          </Td>
          <Td>The region of origin (e.g. France, Australia, Hong Kong)</Td>
          <Td />
        </Tr>
        <Tr>
          <Td>
            <Code>website</Code>
          </Td>
          <Td>The full URL to the OS's website</Td>
          <Td>1.4.0</Td>
        </Tr>
        <Tr>
          <Td>
            <Code>repository</Code>
          </Td>
          <Td>The full URL to the OS's public source repository</Td>
          <Td>1.4.0</Td>
        </Tr>
        <Tr>
          <Td>
            <Code>donate</Code>
          </Td>
          <Td>The full URL to the donation page of the OS's website</Td>
          <Td>1.4.0</Td>
        </Tr>
        <Tr>
          <Td>
            <Code>donateOpenCollective</Code>
          </Td>
          <Td>The full URL to the OS's Open Collective page</Td>
          <Td>1.4.0</Td>
        </Tr>
        <Tr>
          <Td>
            <Code>donateLiberapay</Code>
          </Td>
          <Td>The full URL to the OS's Liberapay page</Td>
          <Td>1.4.0</Td>
        </Tr>
        <Tr>
          <Td>
            <Code>donateGithub</Code>
          </Td>
          <Td>The full URL to the OS's GitHub Sponsor page</Td>
          <Td>1.4.0</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
