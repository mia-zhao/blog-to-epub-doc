import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Get Started"
    description={
      <>
        <p>
          Are you a blogger looking to reach a wider audience and make your
          content more accessible? Are you a reader looking for a convenient
          ebook format to read anytime, anywhere on your e-reader or tablet?
        </p>
        <p>
          Follow these 4 simple steps to convert your blog posts to EPUB format.
        </p>
      </>
    }
  >
    <VerticalFeatureRow
      title="Step 1: Install Blog to EPUB"
      description="Install the Blog to EPUB chrome extension."
      image="/assets/images/step1.png"
      imageAlt="Step 1: Install the Blog to EPUB Chrome Extension"
    />
    <VerticalFeatureRow
      title="Step 2: Open a blog page"
      description={
        <>
          <p>Open a blog page to select the articles you want to convert.</p>
          <p className="italic">
            Tips: use single click to select or deselect a article and double
            clicks to select or deselect a list of articles.
          </p>
        </>
      }
      image="/assets/images/select-articles.gif"
      imageAlt="Step 2: Open a blog page"
      reverse
    />
    <VerticalFeatureRow
      title="Step 3: Select articles to convert"
      description="Choose articles from the previously selected list to convert."
      image="/assets/images/convert-options.gif"
      imageAlt="Step 3: Select articles to convert"
    />
    <VerticalFeatureRow
      title="Step 4: Download the EPUB file"
      description="Click the Download EPUB button to save blog posts as EPUB."
      image="/assets/images/step4.png"
      imageAlt="Step 4: Download the EPUB file"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
