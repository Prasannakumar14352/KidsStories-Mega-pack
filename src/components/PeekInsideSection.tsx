import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { Container } from './ui/Container';

/**
 * Placeholder filenames - rename your real sample-page photos to match these
 * (inside-1.JPG ... inside-6.JPG) and drop them in public/proof/. Captions
 * are editable placeholders too.
 */
const proofImages = [
  { src: '/proof/inside-1.JPG', caption: 'Bedtime story sample' },
  { src: '/proof/inside-2.JPG', caption: 'Adventure story spread' },
  { src: '/proof/inside-3.JPG', caption: 'Early-reader page' },
  { src: '/proof/inside-4.JPG', caption: 'Confident-reader page' },
  { src: '/proof/inside-5.JPG', caption: 'Illustrated story page' },
  { src: '/proof/inside-6.JPG', caption: 'Story activity page' },
];

function ProofImage({ src, caption }: { src: string; caption: string }) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className="flex w-[78%] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-brand-orange-dark bg-surface sm:w-auto sm:shrink">
      <div className="flex aspect-[4/3] items-center justify-center bg-black/30">
        {hasError ? (
          <BookOpen className="h-10 w-10 text-text-muted" aria-hidden="true" />
        ) : (
          <img
            src={src}
            alt={caption}
            loading="lazy"
            className="h-full w-full object-contain"
            onError={() => setHasError(true)}
          />
        )}
      </div>
      <figcaption className="border-t border-border px-4 py-3 text-center text-sm font-medium text-text-secondary">
        {caption}
      </figcaption>
    </figure>
  );
}

export function PeekInsideSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
            Peek Inside the Bundle
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-base leading-relaxed text-text-secondary">
            Real pages from the bundle — see the illustrations and reading levels before you buy.
          </p>
        </div>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 scrollbar-thin snap-x snap-mandatory sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
          {proofImages.map((image) => (
            <ProofImage key={image.src} src={image.src} caption={image.caption} />
          ))}
        </div>
      </Container>
    </section>
  );
}
