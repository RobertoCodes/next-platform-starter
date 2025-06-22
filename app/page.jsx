"use client";

import {
  Box,
  VStack,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Link,
  Icon,
  AspectRatio,
} from "@chakra-ui/react";
import { FiMail, FiDownload } from "react-icons/fi";

export default function HomePage() {
  return (
    <Box bg="gray.900" color="white" minH="100vh" px={4} py={16} textAlign="center">
      <VStack spacing={16} align="center" maxW="3xl" mx="auto">
        {/* Logo */}
        <Heading size="2xl">
          COLDBLOOD<span style={{ color: "#e53e3e" }}> INC.</span>
        </Heading>
        <Text fontSize="xl" maxW="lg">
          An indie game studio working on our debut title, <strong>NEVERWAY</strong>.
        </Text>

        {/* Newsletter */}
        <Stack
          as="form"
          direction={{ base: "column", md: "row" }}
          spacing={4}
          w="100%"
          maxW="md"
        >
          <Input
            placeholder="Your email"
            variant="filled"
            bg="gray.800"
            _placeholder={{ color: "gray.400" }}
            required
          />
          <Button colorScheme="red" leftIcon={<Icon as={FiMail} />} type="submit">
            Subscribe
          </Button>
        </Stack>

        {/* Trailer */}
        <Box w="100%" maxW="2xl">
          <Heading size="lg" mb={4}>Watch the Trailer</Heading>
          <AspectRatio ratio={16 / 9} borderRadius="md" overflow="hidden">
            <iframe
              title="NEVERWAY Trailer"
              src="https://www.youtube.com/embed/YOUR_TRAILER_ID"
              allowFullScreen
            />
          </AspectRatio>
        </Box>

        {/* Download Rules */}
        <Box w="100%" maxW="md">
          <Heading size="lg" mb={4}>Game Rules</Heading>
          <Button
            as="a"
            href="/rules.pdf"
            download
            colorScheme="red"
            leftIcon={<Icon as={FiDownload} />}
            w="full"
          >
            Download Rules PDF
          </Button>
        </Box>

        {/* Footer */}
        <VStack spacing={2} mt={8} opacity={0.6} fontSize="sm">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Text>&copy; {new Date().getFullYear()} Coldblood Inc.</Text>
        </VStack>
      </VStack>
    </Box>
  );
}