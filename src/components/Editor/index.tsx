import {
  useCallback,
  FormEventHandler,
  CompositionEventHandler,
  useRef,
} from "react";
import { Container } from "./styled";

interface EditorProps {
  initialValue: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const Editor = (props: EditorProps) => {
  const { initialValue, onChange } = props;
  const isComposition = useRef(false);

  const handleInput = useCallback<FormEventHandler>(
    (e) => {
      if (isComposition.current) return;
      const { nativeEvent } = e;
      const { target } = nativeEvent;
      if (!target) return;
      onChange?.((target as HTMLDivElement).innerText);
    },
    [onChange]
  );

  const handleCompositionStart = useCallback<CompositionEventHandler>(() => {
    isComposition.current = true;
  }, []);

  const handleCompositionEnd = useCallback<CompositionEventHandler>(
    (e) => {
      isComposition.current = false;
      handleInput(e);
    },
    [handleInput]
  );

  return (
    <Container
      onInput={handleInput}
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
      contentEditable
      suppressContentEditableWarning
    >
      {initialValue}
    </Container>
  );
};
