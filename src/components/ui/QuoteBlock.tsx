type QuoteBlockProps = {
  children: React.ReactNode;
  cite?: string;
};

export default function QuoteBlock({ children, cite }: QuoteBlockProps) {
  return (
    <blockquote className="quote-block">
      <p>“{children}”</p>
      {cite ? <cite className="quote-cite">— {cite}</cite> : null}
    </blockquote>
  );
}
