import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Notes from '../Notes/Notes.jsx'
import { deleteApplicationActionCreator } from '../../actions/actions.js'

export default function Row ({
  companyname,
  status,
  createddate,
  notes,
  posting,
  id
}) {
  const [notesOpen, setNotesOpen] = useState(false)
  const dispatch = useDispatch()

  async function deleteApplication () {
    try {
      await fetch(`/api/applications/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      dispatch(deleteApplicationActionCreator(id))
    } catch (err) {
      console.log(err)
    }
  }

  return (
            <>
             <tr>
              <td className='rowcell'>{createddate}</td>
              <td className='rowcell'>{companyname}</td>
              <td className='rowcell' >{status}</td>
              <td className='rowcell'>{notes}</td>
              <td className='rowcell' >{posting}</td>
              <td><button onClick={deleteApplication} id='deletebtn'>Delete</button></td>
            </tr>
            <tr>
              {notesOpen ? <Notes notes={notes}/> : null}
            </tr>
            </>
  )
}
