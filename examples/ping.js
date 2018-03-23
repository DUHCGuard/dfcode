
class DiamondFire extends Event {
    Event (COMMAND) {
      if (playerCommand === "ping") {
        DiamondFire.apply.sendMessage("Pong!")
        }
    }
}
  
