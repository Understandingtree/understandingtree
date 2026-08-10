import Divider from "./Divider";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  as?: "h2" | "h3";
  center?: boolean;
  children?: React.ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  as = "h2",
  center = false,
  children,
}: SectionHeadingProps) {
  const Heading = as;
  return (
    <div
      className="section-heading"
      style={center ? { alignItems: "center", textAlign: "center" } : undefined}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Heading>{title}</Heading>
      <Divider center={center} />
      {children}
    </div>
  );
}
