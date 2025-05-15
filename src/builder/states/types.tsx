import * as React from "react";
import {Text, Frame, ImageIcon} from 'lucide-react'

export interface Page {
    id: string;
    title: string;
    slug: string;
    content: TreeNode;
}

export interface TreeNode {
    id: string;
    label: string;
    type: string;
    setting: TreeNodeSetting;
    children: TreeNode[];
}

export interface FrameSetting {
    style?: React.CSSProperties;
}
export interface ImageSetting {
    src: string;
    alt: string;
    style?: React.CSSProperties;
}
export interface TextSetting {
    content: string;
    style?: React.CSSProperties;
}
export type TreeNodeSetting = FrameSetting | ImageSetting | TextSetting;


export interface TreeNodeProps {
    node: TreeNode;
}

export const IsToolBoxItem = (id: unknown): id is TreeNodeType => {
    return typeof id === "string" && id in iconMap;
}
export type TreeNodeType = "frame" | "image" | "text";


export const labelMap: Record<string, string> = {
    text: "văn bản",
    image: "Hình ảnh",
    frame: "Khung",
}

export const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    text: Text,
    image: ImageIcon,
    frame: Frame,
}