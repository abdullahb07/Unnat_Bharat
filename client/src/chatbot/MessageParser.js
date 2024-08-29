class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (
      lowerCaseMessage.includes("complaint") ||
      lowerCaseMessage.includes("status")
    ) {
      this.actionProvider.handleComplaintStatus();
    } else if (
      lowerCaseMessage.includes("yojana") ||
      lowerCaseMessage.includes("scheme")
    ) {
      this.actionProvider.handleYojanaInfo();
    } else if (
      lowerCaseMessage.includes("help") ||
      lowerCaseMessage.includes("call")
    ) {
      this.actionProvider.handleHelpline();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;
