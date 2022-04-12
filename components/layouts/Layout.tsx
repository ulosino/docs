// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// The main layout implements the header and footer. It's opt-in by page

// Types
import type { ReactElement } from "react";

// Suspense and performance
import { Suspense } from "react";
import { LoadingServer } from "components/Loading";
import { writeStorage, useLocalStorage } from "@rehooks/local-storage";

// Links and routing
import Link from "next/link";
import { useRouter } from "next/router";

// Chakra UI, icons, and other design imports
import {
  Flex,
  Spacer,
  Stack,
  Center,
  Container,
  Button,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { HiOutlineArrowLeft, HiOutlineMenu } from "react-icons/hi";
import { VercelLogo } from "components/VercelPromotion";

// First-party components
import LogoDocumentation from "components/Logo";
import HeaderBackButton from "components/HeaderBackButton";

// Keybinding libraries
import { useEffect } from "react";
import { useHotkeyManager } from "providers/KeybindingProvider";
import { isWindows } from "react-device-detect";

interface LayoutProps {
  children: ReactElement;
  useBasicLayout: boolean;
  // useAltBackground is reserved
  useAltBackground: boolean;
  showPreferences: boolean;
}

// Begin wrapping component
export default function Layout({ children, showPreferences }: LayoutProps) {
  // Global preferences
  const [backButton] = useLocalStorage("P3PrefBackButtonLargeWindows");
  const [dangerousRuntime] = useLocalStorage("P3PrefDangerousRuntime");

  // Global keybindings
  const manager = useHotkeyManager();
  const router = useRouter();
  const { toggleColorMode } = useColorMode();

  // Global navigation keybindings
  useEffect(() => {
    {
      isWindows
        ? manager.registerHotkey({
            key: "/",
            ctrl: false,
            shift: false,
            alt: true,
            callback: () => router.push("/"),
          })
        : manager.registerHotkey({
            key: "/",
            ctrl: true,
            shift: false,
            alt: false,
            callback: () => router.push("/"),
          }),
        [manager, router];
    }
  });
  useEffect(() => {
    {
      isWindows
        ? manager.registerHotkey({
            key: "L",
            ctrl: false,
            shift: false,
            alt: true,
            callback: () => router.push("/docs/core"),
          })
        : manager.registerHotkey({
            key: "L",
            ctrl: true,
            shift: false,
            alt: false,
            callback: () => router.push("/docs/core"),
          }),
        [manager, router];
    }
  });
  useEffect(() => {
    {
      isWindows
        ? manager.registerHotkey({
            key: "N",
            ctrl: false,
            shift: false,
            alt: true,
            callback: () => window.open("/docs/core", "_blank"),
          })
        : manager.registerHotkey({
            key: "N",
            ctrl: true,
            shift: false,
            alt: false,
            callback: () => window.open("/docs/core", "_blank"),
          }),
        [manager, window];
    }
  });

  // Session preference keybindings
  useEffect(() => {
    {
      isWindows
        ? ""
        : manager.registerHotkey({
            key: "W",
            ctrl: true,
            shift: false,
            alt: false,
            callback: () => toggleColorMode(),
          }),
        [manager, toggleColorMode];
    }
  });
  useEffect(() => {
    {
      isWindows
        ? manager.registerHotkey({
            key: "B",
            ctrl: false,
            shift: true,
            alt: true,
            callback: () =>
              writeStorage(
                "P3PrefBackButtonLargeWindows",
                backButton ? false : true
              ),
          })
        : manager.registerHotkey({
            key: "B",
            ctrl: true,
            shift: true,
            alt: false,
            callback: () =>
              writeStorage(
                "P3PrefBackButtonLargeWindows",
                backButton ? false : true
              ),
          }),
        [manager, backButton];
    }
  });
  const vercelLogoColour = useColorModeValue("black", "white");
  return (
    <Flex
      display="flex"
      minH="100vh"
      direction="column"
      bg={useColorModeValue("gray.50", "inherit")}
    >
      <Suspense fallback={<LoadingServer />}>
        <Container maxW="container.lg" as="header">
          <Flex mt={4} mb={10}>
            <Center
              display={{ base: "flex", sm: "none" }}
              id="testingHeaderBackButtonMobile"
            >
              <HeaderBackButton />
            </Center>
            {backButton ? (
              <Center
                display={{ base: "none", sm: "flex" }}
                id="testingHeaderBackButtonDesktop"
              >
                <HeaderBackButton />
              </Center>
            ) : (
              ""
            )}
            <Link href="/" passHref>
              <Center
                bg="white"
                rounded="2xl"
                shadow="md"
                p={3}
                cursor="pointer"
                as="a"
                aria-label="Go Home"
                title="Go Home"
                id="testingHeaderLogoLink"
              >
                <LogoDocumentation />
              </Center>
            </Link>
            <Center
              display={{ base: "none", sm: "flex" }}
              as="nav"
              id="testingHeaderLinks"
            >
              <Stack direction="row" spacing={2} mx={10}>
                <Link href="/" passHref>
                  <Button variant="ghost" as="a">
                    Home
                  </Button>
                </Link>
                <Link href="/docs/core" passHref>
                  <Button variant="ghost" as="a" id="testingHeaderBrowseLink">
                    All Documentation
                  </Button>
                </Link>
              </Stack>
            </Center>
            <Spacer />
            <Center display={{ base: "none", sm: "flex" }}>
              <Link href="https://www.ulosino.com" passHref>
                <Button
                  variant="ghost"
                  leftIcon={<HiOutlineArrowLeft />}
                  as="a"
                >
                  Back to ULOSINO
                </Button>
              </Link>
            </Center>
            <Center display={{ base: "flex", sm: "none" }}>
              <Link href="/menu" passHref>
                <IconButton
                  icon={<HiOutlineMenu />}
                  variant="ghost"
                  as="a"
                  aria-label="Open Menu and preferences"
                  title="Open Menu"
                  id="testingHeaderMenuLink"
                />
              </Link>
            </Center>
          </Flex>
        </Container>
      </Suspense>
      <Container maxW="container.lg" flex={1} as="main">
        {children}
      </Container>
      <Container maxW="container.lg" as="footer">
        <Flex mt={10} mb={5}>
          <Stack
            direction="row"
            spacing={2}
            display={{ base: "none", sm: "block" }}
            id="testingFooterGeneralLinks"
          >
            <Center display={{ base: "none", sm: "flex" }}>
              <Link href="https://www.ulosino.com" passHref>
                <Button
                  variant="ghost"
                  size="sm"
                  leftIcon={<HiOutlineArrowLeft />}
                  as="a"
                >
                  Back to ULOSINO
                </Button>
              </Link>
            </Center>
            {showPreferences ? (
              <>
                {/* These are shown on the Options page only */}
                <Button
                  size="sm"
                  onClick={(_) =>
                    writeStorage(
                      "P3PrefBackButtonLargeWindows",
                      backButton ? false : true
                    )
                  }
                  display={{ base: "none", md: "inline-block" }}
                  id="testingFooterBackButtonDesktopSwitch"
                >
                  {backButton ? "Hide" : "Show"} Back
                </Button>
              </>
            ) : (
              ""
            )}
          </Stack>
          <Spacer />
          <Stack direction="row" spacing={2} id="testingLegalLinks">
            <Suspense fallback={<LoadingServer />}>
              {dangerousRuntime ? (
                ""
              ) : (
                <Center display={{ base: "block", sm: "none", md: "block" }}>
                  <Link href="https://vercel.com/home" passHref>
                    <Button
                      size="sm"
                      variant="ghost"
                      as="a"
                      title="Powered by Vercel"
                      aria-label="Powered by Vercel"
                    >
                      <Stack direction="row" spacing={2}>
                        <Text>Powered by</Text>
                        <Center>
                          <VercelLogo fill={vercelLogoColour} />
                        </Center>
                      </Stack>
                    </Button>
                  </Link>
                </Center>
              )}
            </Suspense>
            <Link href="https://www.ulosino.com/about/license" passHref>
              <Button variant="ghost" size="sm" as="a">
                License
              </Button>
            </Link>
            <Link href="https://www.ulosino.com/about/privacy" passHref>
              <Button variant="ghost" size="sm" as="a">
                Privacy
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Container>
    </Flex>
  );
}
