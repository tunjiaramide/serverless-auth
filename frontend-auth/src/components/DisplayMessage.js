import React from 'react'

export default function DisplayMessage({message}) {
  return (
    <>
        {(message) && <div className="alert alert-dark" role="alert">{message}</div>}
    </>
  )
}
