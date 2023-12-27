import { useCallback, FormEventHandler, CompositionEventHandler, useRef, useState, useEffect } from 'react';
import { Container } from './styled';

interface EditorProps {
  initialValue: string;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
  onChange?: (value: string) => void;
}

const focusOnEnd = (div: HTMLElement) => {
  const range = document.createRange();
  range.selectNodeContents(div);
  range.collapse();
  const selection = window.getSelection();
  if (!selection) return;
  selection.removeAllRanges();
  selection.addRange(range);
};

export const Editor = (props: EditorProps) => {
  const { initialValue, autoFocus, placeholder, className, onChange } = props;
  const isComposition = useRef(false);
  const [value] = useState(initialValue);
  const ref = useRef<HTMLDivElement>(null);

  const handleInput = useCallback<FormEventHandler>(
    (e) => {
      if (isComposition.current) return;
      const { nativeEvent } = e;
      const { target } = nativeEvent;
      if (!target) return;
      const text = (target as HTMLDivElement).innerHTML;
      onChange?.(text);
    },
    [onChange],
  );

  const handleCompositionStart = useCallback<CompositionEventHandler>(() => {
    isComposition.current = true;
  }, []);

  const handleCompositionEnd = useCallback<CompositionEventHandler>(
    (e) => {
      isComposition.current = false;
      handleInput(e);
    },
    [handleInput],
  );

  useEffect(() => {
    const { current } = ref;
    if (autoFocus && current) {
      focusOnEnd(current);
    }
  }, [autoFocus]);

  return (
    <Container
      className={className}
      ref={ref}
      placeholder={placeholder}
      onInput={handleInput}
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
      dangerouslySetInnerHTML={{ __html: value }}
      suppressContentEditableWarning
      contentEditable
    />
  );
};
