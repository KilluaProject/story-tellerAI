import { Frame } from "@gptscript-ai/gptscript";

const renderEventMessage =(event:Frame) => {
    switch (event.type) {
      case "runStart":
        return <div>Run Started at {event.start}</div>;
        
        case "callStart":
            return (
                <div>
                    <p>Tool Starting: {event.tool?.description}</p>
                </div>
            )
    }
}