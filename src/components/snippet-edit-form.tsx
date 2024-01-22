"use client";
import React from "react";
import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";

interface SnippetEditForm {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditForm) => {
  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{
          minimap: { enable: false },
        }}
      />
    </div>
  );
};

export default SnippetEditForm;
