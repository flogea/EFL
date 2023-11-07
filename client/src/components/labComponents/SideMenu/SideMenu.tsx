import React from 'react';
import { TextBlock } from '../TextBlock';
import { TableBlock } from '../TableBlock';
import { PictureBlock } from '../PictureBlock';
import { InputBlock } from '../InputBlock';
import { FileBlock } from '../FileBlock';
import { setIsOpen } from '../../../redux/slices/sideMenuStatusSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHook';
import { TitleBlock } from '../TitleBlock';
import { setComponents } from '../../../redux/slices/constructorSlice';

const allBlocks = [
  {
    name: 'Текст',
    data: <TextBlock />,
  },
  {
    name: 'Таблица',
    data: <TableBlock />,
  },
  {
    name: 'Картинка',
    data: <PictureBlock />,
  },
  {
    name: 'Поля для ввода',
    data: <InputBlock />,
  },
  {
    name: 'Файлы',
    data: <FileBlock />,
  },
  {
    name: 'Заголовок',
    data: <TitleBlock />,
  },
];

function SideMenu() {
  const { isOpen } = useAppSelector((state) => state.sideMenu);
  const dispatch = useAppDispatch();

  const closeSideMenu = () => {
    dispatch(setIsOpen(false));
  };

  return (
    <div className={`leftMenu ${isOpen ? 'open' : ''}`} onClick={closeSideMenu}>
      {allBlocks.map((block, index) => (
        <div
          className="blockInLeftPanel"
          key={index}
          data-name={block.name}
          onClick={() =>
            dispatch(setComponents({ componentId: Date.now(), componentData: block.data }))
          }>
          {block.name}
        </div>
      ))}
    </div>
  );
}

export default SideMenu;
