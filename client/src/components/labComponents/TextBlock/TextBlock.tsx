import React from 'react';

import styles from './TextBlock.module.scss';

type TTextBlock = {
  onData?: any;
};

function TextBlock({ onData }: TTextBlock) {
  const [isEditable, setIsEditable] = React.useState(false);
  const [content, setContent] = React.useState('');

  const changeText = () => {
    setIsEditable(true);
  };

  function handleInput(event) {
    setContent(event.target.innerHTML);
  }

  React.useEffect(() => {
    onData(content);
  }, [content]);

  return (
    <>
      <div
        className={styles.mainText}
        contentEditable={isEditable}
        onDoubleClick={changeText}
        onInput={handleInput}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quis veritatis omnis
        cumque cupiditate animi libero magni distinctio. Consectetur deleniti non quaerat, voluptate
        at aspernatur labore in odio animi minima!
      </div>
    </>
  );
}

export default TextBlock;
