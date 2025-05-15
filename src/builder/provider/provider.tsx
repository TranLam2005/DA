import type {TreeNode} from "../states/types.tsx";
import {type ReactNode, useState} from "react";
import type {EditorContextValue} from "../hooks/useEditor.tsx";
import EditorContext from "../hooks/useEditor.tsx";
import * as React from "react";

interface EditorProviderProps {
    initialTree: TreeNode;
    children: ReactNode;
}

export const EditorProvider: React.FC<EditorProviderProps> = ({
    initialTree,
    children
}) => {
    const [tree, setTree] = useState<TreeNode>(initialTree);
    const [selectedId, setSelectedId] = useState<string>("");

    const value: EditorContextValue = {
        tree,
        setTree,
        selectedId,
        setSelectedId
    }
    return (
        <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
    )
}
export default EditorProvider;