import React from 'react'
import type { FC } from 'react'
import Modal from 'components/common/Modal'

const Home: FC = () => {
  const [open, setOpen] = React.useState<boolean>(false)
  return (
    <div>
      <button type="button" onClick={() => setOpen(true)}>
        Open
      </button>
      {open && (
        <Modal open={open} changeOpen={setOpen}>
          <h1>Test</h1>
        </Modal>
      )}
    </div>
  )
}

export default Home
