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

  const showData = () => {
    const current = convertToRaw(editorState.getCurrentContent())
    const markup = draftToHtml(current)
    // eslint-disable-next-line no-console
    console.log('markup: ', markup)
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
          inline: { options: ['bold', 'italic'] },
          list: { options: ['unordered', 'ordered'] },
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
    </div>
  )
}

export default RichTextEditor
