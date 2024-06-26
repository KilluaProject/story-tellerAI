import { Frame } from "@gptscript-ai/gptscript";

const renderEventMessage =(events:Frame) => {
    switch (events.type) {
      case "runStart":
        return <div>Run Started at {events.start}</div>;
        
        case "callStart":
            return (
                <div>
                    <p>Tool Starting: {events.tool?.description}</p>
                </div>
            )
    }
}