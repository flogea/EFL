import React, { useEffect, useState } from 'react';

import styles from './TableBlock.module.scss';

function TableBlock() {
  const [rows, setRows] = useState<Array<any>>([]);
  const [cols, setCols] = useState<Array<any>>([]);
  const [tableData, setTableData] = useState<Object>({});

  useEffect(() => {
    console.log(rows, cols);
    console.log(tableData);
  }, [tableData]);

  const generateTable = () => {
    const handleChangeTable = (e) => {
      console.log(e.target.name);
      setTableData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    return (
      <table>
        <caption>
          <input type="text" placeholder="Название таблицы" />
        </caption>
        <tr>
          {cols.map(() => (
            <th>
              <input type="text" placeholder="Заголовок" />
            </th>
          ))}
        </tr>
        <tbody>
          {rows.map((_, row) => (
            <tr>
              {cols.map((_, col) => (
                <td>
                  <input type="text" name={`${row}_${col}`} onChange={handleChangeTable} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Строки"
        onChange={(e) => setRows(new Array(+e.target.value).fill(0))}
      />
      <input
        type="number"
        placeholder="Столбцы"
        onChange={(e) => setCols(new Array(+e.target.value).fill(0))}
      />
      {generateTable()}
    </div>
  );
}

export default TableBlock;
