import type {TreeNode} from "../states/types.tsx";
import * as React from "react";
import {createContext, useContext} from "react";

export interface EditorContextValue {
    tree: TreeNode;
    setTree: React.Dispatch<React.SetStateAction<TreeNode>>;
    selectedId: string;
    setSelectedId: React.Dispatch<React.SetStateAction<string>>;
}

const EditorContext = createContext<EditorContextValue | undefined>(undefined);

export function useEditor(): EditorContextValue {
    const ctx = useContext(EditorContext);
    if (!ctx) {
        throw new Error("useEditor must be used within an EditorProvider");
    }
    return ctx;
}

export default EditorContext;