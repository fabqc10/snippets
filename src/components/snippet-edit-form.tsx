"use client";
import React from "react";

import type { Snippet } from "@prisma/client";

interface SnippetEditForm {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditForm) => {
  return <div>Client component has snippet with title {snippet.title}</div>;
};

export default SnippetEditForm;
