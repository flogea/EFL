import React from 'react';
import { TextBlock } from '../TextBlock';
import { TableBlock } from '../TableBlock';
import { PictureBlock } from '../PictureBlock';
import { InputBlock } from '../InputBlock';
import { FileBlock } from '../FileBlock';
import { setIsOpen } from '../../../redux/slices/sideMenuStatusSlice';
import { setComponents } from '../../../redux/slices/constructorSlice';
import { useAppDispatch } from '../../../hooks/reduxHook';

import './InlineMenu.modules.scss';

const components = {
  text: {
    title: 'text',
    name: 'Текст',
    data: <TextBlock />,
  },
  table: {
    title: 'table',
    name: 'Таблица',
    data: <TableBlock />,
  },
  picture: {
    title: 'picture',
    name: 'Картинка',
    data: <PictureBlock />,
  },
  input: {
    title: 'input',
    name: 'Поля для ввода',
    data: <InputBlock />,
  },
  file: {
    title: 'file',
    name: 'Файлы',
    data: <FileBlock />,
  },
};

function InlineMenu() {
  const dispatch = useAppDispatch();

  const showSideMenu = () => {
    dispatch(setIsOpen(true));
  };

  const addComponentToConstructor = (e) => {
    const name = e.target.getAttribute('data-name');
    const componentId = Date.now();
    const componentData = components[name].data;
    dispatch(setComponents({ componentId, componentData }));
  };

  return (
    <div className="inlineMenu">
      <button className="allBlocks" onClick={showSideMenu}>
        Все блоки
      </button>
      <ul className="blocks">
        <li onClick={addComponentToConstructor} data-name={components.text.title}>
          Текст
        </li>
        <li onClick={addComponentToConstructor} data-name={components.table.title}>
          Таблица
        </li>
        <li onClick={addComponentToConstructor} data-name={components.file.title}>
          Файл
        </li>
        <li onClick={addComponentToConstructor} data-name={components.picture.title}>
          Картинка
        </li>
      </ul>
    </div>
  );
}

export default InlineMenu;
