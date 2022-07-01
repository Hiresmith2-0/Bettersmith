import React from 'react'
import { useDispatch } from 'react-redux'

import './AddApplication.css'
import { addApplicationActionCreator } from '../../actions/actions'

export default function AddApplication ({
  columns
}) {
  const dispatch = useDispatch()

  async function addApplication () {
    const form = document.querySelectorAll('.form')
    const body = {}
    form.forEach((el) => {
      body[el.id] = el.value
    })
    body.notes = ''
    body.priority = ''
    body.userId = 1
    try {
      await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: (JSON.stringify(body))
      })
      dispatch(addApplicationActionCreator(body))
    } catch (err) {
      console.log(err)
    }
  }

  const inputs = columns.map((column, i) => <td key={`input${i}`}><input type="text" id={column} className="form" /></td>)

  return (
    <tr>
      {inputs}
      <td><button id='addbtn' onClick={addApplication}><span class="material-symbols-outlined">add</span></button></td>
    </tr>
  )
}
