import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { EditorState, convertToRaw } from 'draft-js'
import { EditorProps } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'

const Editor = dynamic<EditorProps>(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), {
  ssr: false,
})

const RichTextEditor: React.FC = () => {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty())

  const onEditorStateChange = (_editorState: EditorState) => {
    setEditorState(_editorState)
  }

  const [dataShow, setDataShow] = useState<string>('')
  const showData = () => {
    const current = convertToRaw(editorState.getCurrentContent())
    const markup = draftToHtml(current)
    // eslint-disable-next-line no-console
    setDataShow(markup)
  }

  return (
    <div className="rich-text-editor">
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        toolbarClassName="toolbar-class"
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: ['inline', 'list', 'blockType', 'textAlign', 'link'],
          inline: {
            options: ['bold', 'italic'],
            bold: { icon: '/icons/bold.svg' },
            italic: { icon: '/icons/italic.svg' },
          },
          list: {
            options: ['unordered', 'ordered'],
            unordered: { icon: '/icons/list.svg' },
          },
          blockType: {
            className: 'quote',
            inDropdown: false,
            options: ['Blockquote'],
          },
          textAlign: { options: ['left', 'center', 'right'] },
        }}
      />
      <button type="button" onClick={showData}>
        Submit demo data
      </button>
      <textarea value={dataShow} />
    </div>
  )
}

export default RichTextEditor
