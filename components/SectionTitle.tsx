interface Props {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-16 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
        {subtitle}
      </p>
      <h2 className="heading-lg mt-3">{title}</h2>
    </div>
  );
}