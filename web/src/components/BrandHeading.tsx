type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function BrandHeading({eyebrow, title, description}: Props) {
  return (
    <header className="page-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {description && <p className="page-heading__description">{description}</p>}
      <div className="brand-rule" aria-hidden="true">
        <span />
      </div>
    </header>
  );
}
