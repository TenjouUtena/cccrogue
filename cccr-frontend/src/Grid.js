import React from 'react';
//import ReactDOM from 'react-dom';
//import ErrorBox from './ErrorBox.js';



class GridSquare extends React.Component {
  state = {
  }

  typeClassMap = {
    'wall': 'GridWall',
    'floor': 'GridFloor',
  }

  render () {
    return( <div className={`${this.typeClassMap[this.props.type]} GridSquare`}/>)
  }
}


class Grid extends React.Component {
  state = {
    foo: 1
  }


  createTable() {
    let table = []

    for (let i = 0; i < this.props.height; i++) {
      let children = []
      for (let j = 0; j < this.props.width; j++) {
        var type = (i===0 || j===0 || i===this.props.height-1 || j===this.props.width-1) ? 'wall' : 'floor'
        children.push(<td key={'td-'+(i*this.props.height+j)} className='Grid'>
                      <GridSquare x={j} y={i} type={type} key={'td-'+(i*this.props.height+j)} /></td>)
      }
      table.push(<tr className='Grid' key={'row-'+i}>{children}</tr>)
    }
    return table
  }

  render() {
    return (<div className='Grid'>
            <table className='Grid'>
            {this.createTable()}
            </table>
            </div>);
  }
}
export default Grid;
