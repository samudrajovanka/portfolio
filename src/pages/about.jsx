import Heading from '@components/Heading';
import TextParallaxScrolling from '@components/Overlay/TextParallaxScrolling';
import cn from 'classnames';

export default function AboutPage() {
  return (
    <div className={cn('full-height-content overflow-hidden pt-5')}>
      <div className={cn('padding-content')}>
        <Heading as="h2" className={cn('text-blue')}>
          My, Self & I
        </Heading>
        <p className={cn('mt-5')}>
          I&apos;m Jovanka Samudra, my friends call me Jovan. I am an undergraduate student of Informatics at the UPN
          Veterans Jakarta campus. I am interested in learning about UI/UX Design, Web Development and Backend
          Development. I have experience in making several products for campus assignments and client requests. Building
          a project gave me a lot of experience and training to solve a problem.
        </p>

        <br />

        <p>
          If you want to know more about me just say &quot;Hi!&quot;{' '}
          <a href="mailto:jovankasamudra20@gmail.com">here</a>.
        </p>
      </div>

      <TextParallaxScrolling />
    </div>
  );
}

AboutPage.title = 'About';
