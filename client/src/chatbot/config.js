import { createChatBotMessage } from "react-chatbot-kit";
import ComplaintTracker from "./widgets/ComplaintTracker";
import YojanaInfo from "./widgets/YojanaInfo";
import Helpline from "./widgets/Helpline";

const config = {
  botName: "UnnatiBot",
  initialMessages: [createChatBotMessage("Hello! How can I assist you today?")],
  widgets: [
    {
      widgetName: "ComplaintTracker",
      widgetFunc: (props) => <ComplaintTracker {...props} />,
    },
    {
      widgetName: "YojanaInfo",
      widgetFunc: (props) => <YojanaInfo {...props} />,
    },
    {
      widgetName: "Helpline",
      widgetFunc: (props) => <Helpline {...props} />,
    },
  ],
};

export default config;
