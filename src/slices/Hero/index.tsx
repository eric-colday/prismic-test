import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className="flex flex-col justify-center items-center space-y-4"
      >
        <PrismicRichText field={slice.primary.heading} components={{
          heading1: ({ children }) => <h2 className="text-6xl ">{children}</h2>,
        }} />
        <PrismicRichText field={slice.primary.body} />
        <PrismicNextLink field={slice.primary.button_link}
          className="
            px-4
            py-2
            bg-blue-500
            text-white
            rounded-lg
            hover:bg-blue-600
            transition-colors
          "
        >
          <>{slice.primary.button_text}</>
        </PrismicNextLink>
        <PrismicNextImage field={slice.primary.image} className="
          w-full
          max-w-3xl
          h-96
          object-cover
          rounded-lg
         "/>
      </div>
    </section>
  );
};

export default Hero;
