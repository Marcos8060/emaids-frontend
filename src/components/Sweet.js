import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function Sweet() {

    MySwal.fire({
        title: <p>Hello World</p>,
        footer: 'Copyright 2018',
        didOpen: () => {
          MySwal.clickConfirm()
        }
      }).then(() => {
        return MySwal.fire(
          'Congratulations!',
          'Your profile is saved successfully',
          'success'
        )
      })
  return (
    <div>Sweet</div>
  )
}

export default Sweet