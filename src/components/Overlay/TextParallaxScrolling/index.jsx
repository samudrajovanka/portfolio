import cn from 'classnames';
import Text from '@components/Overlay/TextParallaxScrolling/Text';
import Word from '@components/Overlay/TextParallaxScrolling/Word';
import { Fragment, useEffect } from 'react';
import style from './style.module.scss';

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const position = document.documentElement;
    const setX = (x) => {
      position.style.setProperty('--x', `${x}px`);
    };

    position.addEventListener('mousemove', (e) => {
      setX(e.clientX);
    });

    return () => {
      position.removeEventListener('mousemove', (e) => {
        setX(e.clientX);
      });
    };
  });

  return (
    <div className={cn('uppercase font-code overflow-x-scroll md:overflow-hidden w-full mt-10')}>
      <div className={cn('-skew-y-3 -translate-y-5 relative', style['text-container'])}>
        {new Array(14).fill(0).map((_, i) => (
          <Fragment key={i.toString()}>
            <Text speed={i * 0.1 + 0.1}>
              {new Array(4).fill(0).map((__, j) => (
                <Fragment key={j.toString()}>
                  <Word>HTML</Word>
                  <Word>CSS</Word>
                  <Word>Javascript</Word>
                  <Word>Mysql</Word>
                  <Word>React</Word>
                  <Word>Next</Word>
                  <Word>Figma</Word>
                  <Word>MongoDB</Word>
                  <Word>GIT</Word>
                  <Word>Node</Word>
                  <Word>Java</Word>
                  <Word>Express</Word>
                  <Word>NPM</Word>
                  <Word>Python</Word>
                </Fragment>
              ))}
            </Text>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
