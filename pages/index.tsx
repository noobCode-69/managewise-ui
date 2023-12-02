import Hero from "@/src/ui/home/hero";
import Features from "@/src/ui/home/features";
import ProductBreakDown from "@/src/ui/home/product";
import FAQ from "@/src/ui/home/faq";
import Pricing from "@/src/ui/home/pricing";
import Footer from "@/src/ui/home/footer";
import Navbar from "@/src/ui/shared/navbar";

import { Box } from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Box id="features">
        <ProductBreakDown />
        <Features />
      </Box>
      <Box id="faq">
        <FAQ />
      </Box>
      <Box id="pricing">
        <Pricing />
      </Box>
      <Footer />
    </>
  );
}
