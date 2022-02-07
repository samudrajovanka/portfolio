/* eslint-disable consistent-return */
import { useCallback, useEffect, useState } from 'react';

export const TypePhase = {
  Typing: 'Typing',
  Pausing: 'Pausing',
  Deleting: 'Deleting',
};

const TYPING_INTERVAL_MIN = 80;
const TYPING_INTERVAL_MAX = 150;
const TYPING_PAUSE_MS = 2000;
const DELETING_INTERVAL = 50;
const DELETING_PAUSE_MS = 500;

const getRandomTypingInterval = () =>
  Math.floor(Math.random() * (TYPING_INTERVAL_MAX - TYPING_INTERVAL_MIN + 1)) + TYPING_INTERVAL_MIN;

export function useTyped(texts) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(TypePhase.Typing);
  const [typedText, setTypedText] = useState('');

  const resume = useCallback(() => {
    if (phase !== TypePhase.Pausing) return;
    setPhase(TypePhase.Deleting);
  }, [phase]);

  useEffect(() => {
    switch (phase) {
      case TypePhase.Typing: {
        const nextTypedText = texts[selectedIndex].slice(0, typedText.length + 1);

        if (nextTypedText === typedText) {
          setPhase(TypePhase.Pausing);
          return;
        }

        const timeout = setTimeout(() => {
          setTypedText(nextTypedText);
        }, getRandomTypingInterval());

        return () => clearTimeout(timeout);
      }
      case TypePhase.Deleting: {
        if (!typedText) {
          const timeout = setTimeout(() => {
            const nextIndex = selectedIndex + 1;
            setSelectedIndex(texts[nextIndex] ? nextIndex : 0);
            setPhase(TypePhase.Typing);
          }, DELETING_PAUSE_MS);

          return () => clearTimeout(timeout);
        }

        const nextRemaining = texts[selectedIndex].slice(0, typedText.length - 1);

        const timeout = setTimeout(() => {
          setTypedText(nextRemaining);
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      case TypePhase.Pausing:
      default:
        const timeout = setTimeout(() => {
          setPhase(TypePhase.Deleting);
        }, TYPING_PAUSE_MS);

        return () => clearTimeout(timeout);
    }
  }, [texts, typedText, selectedIndex, phase]);

  return {
    typedText,
    phase,
    resume,
    selectedText: texts[selectedIndex],
  };
}
