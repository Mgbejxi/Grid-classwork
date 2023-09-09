import { range } from './utils';

function Grid({ numRows, numCols }) {
  const rows = range(numRows).map((numRow)  => (
   <div keys={numRow} className="row">
     {range(numCols).map((numCol) => (
       <div key={numCol} className="col"></div>
     ))}
   </div>
  ))
  return (<div className="grid">{rows}</div>)
}

export default Grid;
