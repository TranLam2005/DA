import EditorProvider from "../provider/provider.tsx";
import {pageExample1} from "../states/mock.tsx";

const WebBuilder = () => {
    return (
        <EditorProvider initialTree={pageExample1.content}>
            <BuilderLayout>
                <Canvas />
            </BuilderLayout>
        </EditorProvider>
    )
}