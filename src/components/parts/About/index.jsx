import Link from '@components/elements/Link';
import Title from '@components/elements/Title';
import Image from 'next/image';

import profileImg from '@public/images/profile.png';

export default function About({ emailUrl }) {
  return (
    <section className="container min-height-screen center-flex">
      <div id="about-section">
        <div className="image" data-aos="fade-up">
          <div className="img-wrapper img-profile">
            <Image src={profileImg} alt="Profile picture" layout="fill" placeholder="blur" />
          </div>
        </div>
        <div className="content" data-aos="fade-up">
          <Title>Hello</Title>

          <div className="paragraph">
            <p>
              I&apos;m Jovanka Samudra, my friends call me Jovan. I am an undergraduate student of Informatics at the
              UPN Veteran Jakarta University.
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
              <Link href={emailUrl} isExternal>
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
