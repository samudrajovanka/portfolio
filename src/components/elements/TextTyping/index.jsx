import { TypePhase, useTyped } from 'src/lib/hooks/useTyped';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default function TextTyping({ texts, className }) {
  const { typedText, phase, selectedText } = useTyped(texts);

  return (
    <span
      className={cn(
        {
          'end-cursor': phase !== TypePhase.Deleting,
          blinking: phase === TypePhase.Pausing,
        },
        className
      )}
      aria-label={selectedText}
    >
      {typedText}
    </span>
  );
}

TextTyping.defaultProps = {
  className: '',
};

TextTyping.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};
