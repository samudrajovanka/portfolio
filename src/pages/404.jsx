import Button from '@components/elements/Button';
import SeoPage from '@components/elements/SeoPage';
import NotFoundImage from '@images/notFound.svg';

export default function NotFoundPage() {
  return (
    <>
      <SeoPage title="404 - Page Not Found" description="What are you looking for? there's nothing here" />
      <section className="center-flex error">
        <NotFoundImage className="error__image" />

        <Button href="/" isShadow isAnimated>
          Go Home
        </Button>
      </section>
    </>
  );
}
