import Hero from "@/components/landing/Hero";
import Products from "@/components/landing/Products";
import Reviews from "@/components/landing/Reviews";
import Features from "@/components/landing/Features";
import Newsletter from "@/components/landing/Newsletter";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <Products />
      <Reviews />
      <Features />
      <Newsletter />
    </div>
  );
}
