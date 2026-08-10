export default function Divider({ center = true }: { center?: boolean }) {
  return <hr className={`divider ${center ? "divider--center" : ""}`} aria-hidden="true" />;
}
