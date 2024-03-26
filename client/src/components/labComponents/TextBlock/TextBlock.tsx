import React from 'react';

import styles from './TextBlock.module.scss';
import { useAppSelector } from '../../../hooks/reduxHook';

type TTextBlock = {
  id?: string,
  onData?: any;
};

function TextBlock({ id }: TTextBlock) {



  const [isEditable, setIsEditable] = React.useState(false);
  const [content, setContent] = React.useState('');
  const data = useAppSelector(state => state.labConstructor.blocks)

  React.useEffect(() => {
    // const currentData = 

    console.log(data.filter((currentId) => currentId.id === id)[0].data.content.text!)
  }, [])

  const changeText = () => {
    setIsEditable(true);
  };

  function handleInput(event) {
    setContent(event.target.innerHTML);
  }

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
