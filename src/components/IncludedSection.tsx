import { CheckCircle2, File, FileArchive, Folder } from 'lucide-react';
import { zipContents } from '../config/product';
import { Container } from './ui/Container';

const checklist = [
  '50 illustrated children’s stories',
  'One combined storybook PDF',
  'One editable master DOCX',
  'Approximately 199 story pages',
  '10 organised categories',
  'Short 3–5-page stories',
  'Read Me First guide',
  'Personal and single-classroom use licence',
  'Five bonus resources',
  'One easy-to-download ZIP file',
];

export function IncludedSection() {
  return (
    <section id="included" className="py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
            Everything Inside the Mega Bundle
          </h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-text-secondary">
            One organised digital package with the story collection, editable source file, customer guide,
            licence and five practical reading bonuses.
          </p>

          <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary sm:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange-light" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center">
          <div className="rounded-2xl border border-border bg-surface p-5 shadow-orange-glow sm:p-6">
            <div className="flex items-center gap-2.5 border-b border-border pb-4">
              <FileArchive className="h-5 w-5 text-brand-orange-light" aria-hidden="true" />
              <p className="break-all font-display text-sm font-semibold text-text-primary sm:text-base">
                PRODXSTORE_50_Kids_Stories_Mega_Bundle.zip
              </p>
            </div>
            <ul className="mt-4 space-y-2.5">
              {zipContents.map((entry) => {
                const isFolder = !entry.includes('.');
                const Icon = isFolder ? Folder : File;
                return (
                  <li key={entry} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <Icon className="h-4 w-4 shrink-0 text-text-muted" aria-hidden="true" />
                    <span className="break-all font-mono text-[13px]">{entry}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            Editable files are provided for permitted personal and classroom customisation. Resale,
            redistribution and public sharing are not included.
          </p>
        </div>
      </Container>
    </section>
  );
}
