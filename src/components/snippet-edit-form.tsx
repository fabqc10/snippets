"use client";
import React, { useState } from "react";
import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";

interface SnippetEditForm {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditForm) => {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={code}
        options={{
          minimap: { enable: false },
        }}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default SnippetEditForm;
