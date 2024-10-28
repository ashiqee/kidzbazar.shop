import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import HomepageSlider from "@/components/ui/Slider/HomepageSlider";
import FeaturedSection from "./(pagesection)/Homepages/FeaturedSection";

export default function Home() {
  return (
    <>
    
    <section className="max-h-[600px]">
   <HomepageSlider/>

    </section>
    <section className=" md:px-6">
      <FeaturedSection/>
    </section>
    </>
  );
}
