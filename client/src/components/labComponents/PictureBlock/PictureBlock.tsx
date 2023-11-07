import React from 'react';

import styles from './PictureBlock.module.scss';

import exampleImage from '../../../assets/images/exampleImage.jpg';

type TPicBlock = {
  onData?: any;
};

function PictureBlock({ onData }: TPicBlock) {
  const [isEditable, setIsEditable] = React.useState(false);
  const [fileURL, setFileURL] = React.useState<any>(exampleImage);
  const [content, setContent] = React.useState('');

  const changeLabel = () => {
    setIsEditable(true);
  };

  const changePhoto = (e) => {
    let file = e.target.files[0];
    console.log(file);
    fileReader.readAsDataURL(file);
  };

  const handleInput = (e) => {
    setContent(e.target.innerHTML);
  };

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setFileURL(fileReader.result);
  };

  React.useEffect(() => {
    onData({ file: fileURL, label: content });
  }, [content]);

  return (
    <div className={styles.contentImage}>
      <input
        type="file"
        name="inputFile"
        id="inputFile"
        onChange={changePhoto}
        accept="image/*, .png, .jpg, .jpeg"
        style={{ display: 'none' }}
      />
      <label htmlFor="inputFile" className={styles.editablePic}>
        <img src={fileURL} data-name="inputFile" alt="place for your image" />
      </label>
      <label
        htmlFor="pic"
        onDoubleClick={changeLabel}
        contentEditable={isEditable}
        onInput={handleInput}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </label>
    </div>
  );
}

export default PictureBlock;
