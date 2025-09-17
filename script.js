    const userGreeter = {
      greetingPrefix: "Hello",
      punctuation: "!",
      greet: function(name) {
        return `${this.greetingPrefix}, ${name}${this.punctuation}`;
      }
    };

    function showMessage(message, elementId) {
      document.getElementById(elementId).innerText = message;
    }

   
    function greetUser() {
      const name = document.getElementById("nameInput").value;
      const greetingMessage = userGreeter.greet(name);  // calling method
      showMessage(greetingMessage, "output");           // passing parameters
    }
