'use client'

import {
    Box,
    VStack,
    Stack,
    Heading,
    Text,
    Button,
    Icon,
    AspectRatio,
  } from "@chakra-ui/react";
  import { FiMail, FiDownload } from "react-icons/fi";
  import { useEffect, useState, useRef } from "react";

  export function RevealAnimation() {
    const [revealed, setRevealed] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => setRevealed(true), 500);
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <>
        {/* Left Half */}
        <img
          src="/box.png" // <- your full image
          alt="Left"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "contain",
            clipPath: "inset(0 50% 0 0)",
            transition: "transform 1.5s ease-in-out",
            transform: revealed ? "translateX(-100%)" : "translateX(0)",
            zIndex: 9999,
            pointerEvents: "none",
            backgroundColor: "black",
          }}
        />
  
        {/* Right Half */}
        <img
          src="/box.png" // <- your full image
          alt="Right"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "contain",
            clipPath: "inset(0 0 0 50%)",
            transition: "transform 1.5s ease-in-out",
            transform: revealed ? "translateX(100%)" : "translateX(0)",
            zIndex: 9999,
            pointerEvents: "none",
            backgroundColor: "black",
          }}
        />
      </>
    );
  }
  
  
  function MatrixBackground() {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
  
      function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
  
      resize();
      window.addEventListener("resize", resize);
  
      const fontSize = 16;
      let columns = Math.floor(canvas.width / fontSize);
      let drops = Array(columns).fill(1);
      const chars = "01";
  
      function draw() {
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ed1c25";
        ctx.font = `${fontSize}px monospace`;
  
        for (let i = 0; i < columns; i++) {
          const text = chars.charAt(Math.floor(Math.random() * chars.length));
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
  
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }
  
      const interval = setInterval(draw, 50);
  
      return () => {
        clearInterval(interval);
        window.removeEventListener("resize", resize);
      };
    }, []);
  
    return (
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    );
  }
  
    
  export default function HomePage() {
    return (
      <Box position="relative" bg="black" color="green.400" minH="100vh" px={4} py={16} textAlign="center">
        <RevealAnimation/>
<MatrixBackground/>
        <Box
    position="absolute"
    top={0}
    left={0}
    w="100%"
    h="100%"
    bg="rgba(0,0,0,0.7)" // 70% black overlay
    zIndex={1}
  />

        <VStack spacing={16} align="center" maxW="3xl" mx="auto" position="relative" zIndex={1}>
        <Heading
  as="h1"
  fontFamily="'Major Mono Display', monospace"
  fontSize={{ base: "4xl", md: "7xl" }}
//   color="red.500"
//   textShadow="0 0 12px #ff0000, 0 0 24px #ff0000"
  color="white"
  textShadow="0 0 8px #89cff0, 0 0 12px #89cff0"

  letterSpacing="widest"
  className="neon-flicker"
  mb={12} // 👈 Adds bottom margin so it doesn't overlap next section
>
  Hack The Abyss
</Heading>
<Box w="100%" textAlign="center" mb={8}>
  <img
    src="/game_box.png"
    alt="Board game box"
    style={{
      width: "100%",
      maxWidth: "200px",
      height: "auto",
      display: "inline-block",
    }}
  />
</Box>


          <Box w="100%" maxW="md">
          <Heading
    size="lg"
    mb={4}
    color="white"
    textShadow="0 0 8px #89cff0, 0 0 12px #89cff0"
    textAlign="center"
  >
    Game Rules
  </Heading>

            <Button bg="#fa4f4d" as="a" href="/rules.pdf" download colorScheme="red" leftIcon={<Icon as={FiDownload} />} w="full">Download Rules</Button>
          </Box>
          <Box w="100%" maxW="3xl">
          <Heading
    size="lg"
    marginY={4}
    color="white"
    textShadow="0 0 8px #89cff0, 0 0 12px #89cff0"
    textAlign="center"
  >
    Reviews
  </Heading>
  </Box>

  {/* Horizontal scroll */}
  <Box
    overflowX="auto"
    whiteSpace="nowrap"
    pb={4}
    css={{ scrollbarWidth: "thin" }}
  >
    <Stack direction="row" spacing={6} w="auto">
      {[
        { name: "Rob R", text: "Hack The Abyss is fast-paced enough to keep anyone's attention", rating: 5 },
        { name: "Hans W", text: "While the gameplay is great, the visuals of the game are arguably even better. You can tell that a lot of effort was put into every piece.", rating: 4},
        { name: "Wen T", text: "A great blend of luck and sabotage ", rating: 5 },
      ].map((review, index) => (
        <Box
  key={index}
  flexShrink={0}             // prevent shrinking
  w="250px"                  // fixed width per review
  border="1px solid"
  borderColor="green.500"
  borderRadius="md"
  p={4}
  bg="rgba(0,0,0,0.7)"
  textAlign="left"
  color="green.300"
  transition="transform 0.2s"
  whiteSpace="normal"        // allow wrapping
>
  <Text fontSize="sm" mb={2}>{review.text}</Text>
  <Box mt={2} fontSize="sm" opacity={0.8}>— {review.name}</Box>
  <Box mt={2} color="red.500">
    {"★".repeat(review.rating)}
    {"☆".repeat(5 - review.rating)}
  </Box>
</Box>

      ))}
    </Stack>
    
  </Box>
  

          </VStack>

</Box>)}