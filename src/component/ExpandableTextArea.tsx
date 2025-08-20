import { Textarea, type TextareaProps } from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function ExpandableTextArea(props: TextareaProps) {
  const inputTextRef = useRef(null);
  const [height, setHeight] = useState("2.5rem");

  const onChange = e => {
    props.onChange && props.onChange(e);
    setHeight("auto");
    const contentScrollHeight = inputTextRef.current.scrollHeight;
    setHeight(contentScrollHeight + "px");
  };

  return (
    <Textarea
      h={height}
      minH="2.5rem"
      ref={inputTextRef}
      resize="none"
      overflow="hidden"
      {...props}
      onChange={onChange}
    />
  );
}
