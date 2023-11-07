import React from 'react';

import styles from './TitleBlock.module.scss';

type TTitleBlock = {
  onData?: any;
};

function TitleBlock({ onData }: TTitleBlock) {
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
    <h1
      className={styles.title}
      contentEditable={isEditable}
      onDoubleClick={changeText}
      onInput={handleInput}>
      Ваш заголовок
    </h1>
  );
}

export default TitleBlock;
