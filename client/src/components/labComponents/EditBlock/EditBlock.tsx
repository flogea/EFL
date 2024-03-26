import React from 'react';
import { deleteComponent, moveDown, moveUp } from '../../../redux/slices/constructorSlice';
import { useAppDispatch } from '../../../hooks/reduxHook';

import dub from '../../../assets/icons/dub.svg';
import del from '../../../assets/icons/trash.svg';

import './EditBlock.modules.scss';

function EditBlock({ children, id }: { children: any; id: string }) {
  const dispatch = useAppDispatch();

  const deleteBlock = () => {
    dispatch(deleteComponent(id));
  };

  const moveUpHandler = () => {
    dispatch(moveUp(id));
  };

  const moveDownHandler = () => {
    dispatch(moveDown(id));
  };

  const handleData = (data) => {
    console.log(data);
  };

  return (
    <div className="editBlock">
      <div className="leftBlocks">
        <button className="contentBtn">Редактировать</button>
      </div>
      <div className="mainContent">{React.cloneElement(children, { id: id })}</div>
      {/* <div className="mainContent">{children}</div> */}
      <div className="rightBlocks">
        <div className="editLine">
          <button>
            <img src={dub} alt="Дублировать" />
          </button>
          <button onClick={deleteBlock}>
            <img src={del} alt="Удалить" />
          </button>
        </div>
        <div className="moveLine">
          <button onClick={moveUpHandler}>&#9650;</button>
          <button onClick={moveDownHandler}>&#9660;</button>
        </div>
      </div>
      <div className="add">
        <button className="addBlock">&#43;</button>
      </div>
    </div>
  );
}

export default EditBlock;
