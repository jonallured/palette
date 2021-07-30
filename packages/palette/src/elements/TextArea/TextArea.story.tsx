import React from "react"
import { States } from "storybook-states"
import { TextArea, TextAreaProps } from "./TextArea"

export default {
  title: "Components/TextArea",
}

export const Default = () => {
  return (
    <States<TextAreaProps>
      states={[
        {},
        { title: "Note" },
        { title: "Note", required: true },
        { error: "Something went wrong" },
        { characterLimit: 10 },
        { name: "my-text-area" },
        {
          name: "my-text-area",
          title: "Note",
          description: "This is my description",
        },
      ]}
    >
      <TextArea placeholder="Start typing..." />
    </States>
  )
}
