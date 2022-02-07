import Button from '@components/elements/Button';
import NotFoundImage from '@images/notFound.svg';

export default function NotFoundPage() {
  return (
    <section className="center-flex error">
      <NotFoundImage className="error__image" />

      <Button href="/" isShadow isAnimated>
        Go Home
      </Button>
    </section>
  );
}
