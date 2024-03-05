import { MaterialReactTable } from 'material-react-table'
import React from 'react'

export const TablaRegistros = ({columnas,data,estilo}) => {
  return (
    <div style={estilo}>
    <MaterialReactTable columns={columnas} data={data}></MaterialReactTable>
    </div>
  )
}
