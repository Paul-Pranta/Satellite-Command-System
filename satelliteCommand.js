// Defining a class to represent a Satellite
class Satellite {
    constructor() {
      this.orientation = "North";
      this.solarPanels = "Inactive";
      this.dataCollected = 0;
    }
  
    // function to rotate the satellite's orientation
    rotate(direction) {
      if (["North", "South", "East", "West"].includes(direction)) {
        this.orientation = direction;
        this.log(`Satellite rotated to ${direction}.`);
      } else {
        this.error("Invalid direction. Please use North, South, East, or West.");
      }
    }
  
    // function to activate the solar panels
    activatePanels() {
      this.solarPanels = "Active";
      this.log("Solar panels activated.");
    }
  
    // function to deactivate the solar panels
    deactivatePanels() {
      this.solarPanels = "Inactive";
      this.log("Solar panels deactivated.");
    }
  
    // function to collect data (increments data if solar panels are active)
    collectData() {
      if (this.solarPanels === "Active") {
        this.dataCollected += 10;
        this.log("Data collected.");
      } else {
        this.error("Cannot collect data. Solar panels are inactive.");
      }
    }
  
    // function to get and display the satellite's status
    getStatus() {
      this.log(`Orientation: ${this.orientation}`);
      this.log(`Solar Panels: ${this.solarPanels}`);
      this.log(`Data Collected: ${this.dataCollected}`);
    }
  
    // Method for logging regular messages
    log(message) {
      console.log(message);
    }
  
    // Method for logging error messages
    error(message) {
      console.error(message);
    }
  }
  
  // Create an instance of the Satellite class
  const satellite = new Satellite();
  
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  // Function to execute user commands
  function executeCommand(command) {
    const [action, parameter] = command.split(" ");
    switch (action) {
      case "rotate":
        satellite.rotate(parameter);
        break;
      case "activatePanels":
        satellite.activatePanels();
        break;
      case "deactivatePanels":
        satellite.deactivatePanels();
        break;
      case "collectData":
        satellite.collectData();
        break;
      case "getStatus":
        satellite.getStatus();
        break;
      default:
        satellite.error("Invalid command. Available commands: rotate, activatePanels, deactivatePanels, collectData, getStatus");
    }
  }
  
  // Display welcome message and available commands
  console.log("Welcome to the Satellite Command System!");
  console.log("Available commands: rotate, activatePanels, deactivatePanels, collectData, getStatus");
  
  // Function to get user input and execute commands
  function getInput() {
    rl.question("Enter a command (e.g., 'rotate North'): ", (command) => {
      if (command === "exit") {
        rl.close();
      } else {
        executeCommand(command);
        getInput();
      }
    });
  }
  
  // Start getting user input
  getInput();
  