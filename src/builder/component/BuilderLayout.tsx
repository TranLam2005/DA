import * as React from "react";
import {useState} from "react";
import {Laptop, RefreshCcw, Smartphone, Tablet, ZoomIn, ZoomOut} from "lucide-react";
import {Tabs, TabsList, TabsTrigger} from '@radix-ui/react-tabs'
import {Dialog} from '@radix-ui/react-dialog'
interface BuilderLayoutProps {
    children: React.ReactNode;
    leftSidebar?: React.ReactNode;
    rightSidebar?: React.ReactNode;
}
type PreviewMode = "pc" | "tablet" | "mobile";

interface LayoutConfig {
    showLeft: boolean;
    showRight: boolean;
    zoom: number;
    previewMode: PreviewMode;
}

export const BuilderLayout: React.FC<BuilderLayoutProps> = () => ({
    children,
    leftSidebar,
    rightSidebar,
}) => {
    const [config, setConfig] = useState<LayoutConfig> ({
        showLeft: true,
        showRight: true,
        zoom: 1,
        previewMode: "tablet",
    })
    const zoomIn = () => setConfig(pre => ({...pre, zoom: Math.min(pre.zoom + 0.1, 2)}));
    const zoomOut = () => setConfig(pre => ({...pre, zoom: Math.max(pre.zoom - 0.1, 0.5)}));
    const resetZoom = () => setConfig(pre => ({...pre, zoom: 1}));


    const previewWidths: Record<PreviewMode, string> = {
        pc: "w-[1200px]",
        tablet: "w-[768px]",
        mobile: "w-[375px]"
    }
    return (
        <div>
            {config.showLeft && (
                <aside>
                    {leftSidebar}
                </aside>
            )}
            <main>
                <div className={cn(
                    previewWidths[config.previewMode]
                )}
                    style={{
                        transform: `scale(${config.zoom})`,
                        transformOrigin: "center center"
                    }}
                >
                    {children}
                </div>
            </main>
            {config.showRight && (
                <aside>
                    {rightSidebar}
                </aside>
            )}
            <div>
                <div>
                    <button>
                        <RefreshCcw className={'w-4 h-4'}/>
                    </button>
                    <button>
                        <ZoomIn className={'w-4 h-4'}/>
                    </button>
                    <button>
                        <ZoomOut className={'w-4 h-4'}/>
                    </button>
                </div>
                <Tabs
                    value={config.previewMode}
                    onValueChange={value => {
                        setConfig(pre => ({...pre, previewMode: value as PreviewMode}))
                    }}
                >
                    <TabsList>
                        <TabsTrigger value={'pc'}>
                            <Laptop className={'w-4 h-4'}/>
                        </TabsTrigger>
                        <TabsTrigger value={'tablet'}>
                            <Tablet className={'w-4 h-4'}/>
                        </TabsTrigger>
                        <TabsTrigger value={'mobile'}>
                            <Smartphone className={'w-4 h-4'}/>
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
        </div>
    )
}