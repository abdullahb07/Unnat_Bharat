class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleComplaintStatus = () => {
    const message = this.createChatBotMessage(
      "Please enter your complaint ID to track your status.",
      { widget: "ComplaintTracker" }
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleYojanaInfo = () => {
    const message = this.createChatBotMessage(
      "I can help you find information about government yojanas. Which yojana are you interested in?",
      { widget: "YojanaInfo" }
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleHelpline = () => {
    const message = this.createChatBotMessage(
      "If your query can't be resolved, you can call our helpline: 1800-123-4567.",
      { widget: "Helpline" }
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      "I'm sorry, I didn't understand that. How can I assist you?"
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

export default ActionProvider;
