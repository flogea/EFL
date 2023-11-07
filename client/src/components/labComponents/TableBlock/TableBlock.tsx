import React, { useState } from 'react';

function TableBlock() {
  const [rows, setRows] = useState<Array<any>>([]);
  const [cols, setCols] = useState<Array<any>>([]);

  const generateTable = () => {
    return (
      <table>
        <caption>
          <input type="text" />
        </caption>
        <tr>
          {cols.map(() => (
            <th>
              <input type="text" placeholder="Заголовок" />
            </th>
          ))}
        </tr>
        <tbody>
          {rows.map(() => (
            <tr>
              {cols.map(() => (
                <td>
                  <input type="text" />
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
