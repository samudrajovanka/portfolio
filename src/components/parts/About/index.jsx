import Link from '@components/elements/Link';
import Title from '@components/elements/Title';

import profileImg from '@public/images/profile.png';
import Image from 'next/image';

export default function About() {
  return (
    <section className="container min-height-screen center-flex">
      <div id="about-section">
        <div className="image">
          <div className="img-wrapper img-profile">
            <Image src={profileImg} alt="Profile picture" layout="fill" placeholder="blur" />
          </div>
        </div>
        <div className="content">
          <Title as="h2">Hello</Title>

          <div className="paragraph">
            <p>
              I&apos;m Jovanka Samudra, my friends call me Jovan. I am an undergraduate student of Informatics at the
              UPN Veteran Jakarta campus.
            </p>
            <br />
            <p>
              I am interested in learning about Web Development, UI/UX Design, and Backend Development. I have
              experience in making several products for campus assignments and client requests. Building a project gave
              me a lot of experience and training to solve a problem.
            </p>
            <br />
            <p>
              If you want to know more about me just say &quot;Hi!&quot;{' '}
              <Link href="mailto:jovankasamudra20@gmail.com" isExternal>
                here
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
