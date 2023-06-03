import { set } from 'mongoose'
import React, { useState } from 'react'
import { Toast } from 'react-bootstrap'



export default function ToastComponent(props) {
  const [showToast, setToast] = useState(true)
  return (
    <div style={{position: "absolute", top: "0px", right: "0px", zIndex: "1"}}>
    
      <Toast
        onClose={() => setToast(false)}
        show= {setToast}
      >
        <Toast.Header>
          <p>{props.name}</p>
        </Toast.Header>
        <Toast.Body>
        {props.message}
        <div class="mt-2 pt-2 border-top">
            <button type="button" class="btn btn-primary btn-sm">Got it!</button>
            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Remind Me Later</button>
          </div>
        </Toast.Body>
      </Toast>
      
    </div>
  )
}