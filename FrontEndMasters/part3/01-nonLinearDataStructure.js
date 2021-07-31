// Example 1-  Below is sample dataStructure modal for a simple chatBot
/*
const chatBot = {
  question: "Do you feel like cooking?",
  yes: {
    question: "Do you like milk?",
    yes: <question>,
    no: <question>
  },
  no: {
    question: "Do you like toast?".
    yes: <question>,
    no: <question>
  }
}*/

class Tree {
  constructor(question) {
    this.question = question;
    this.yes = null;
    this.no = null;
  }

  insertChild(question, side) {
    const newQuestion = new Tree(question);
    this[side] = newQuestion;
    return newQuestion;
  }

  removeChild(value) {
    // ??
  }
}

const myChatBotTree = new Tree("Do you feel like cooking?");
const yesChild1 = myChatBotTree.insertChild("Do you like milk?", "yes");
const noChild1 = myChatBotTree.insertChild("Do you like toast?", "no");
console.log("myChatBotTree = ", myChatBotTree);








  