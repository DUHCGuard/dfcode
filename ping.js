class DiamondFire extends Event {
    Event (COMMAND) {
        if (playerCommand === "ping") {
            DiamondFire.apply.sendMessage("&a&l+ &fStarted generating.")
            DiamondFire.apply.setChatTag("&8[&4Owner&8]");
        };
    };
};

class DiamondFire extends Event {
  Event (COMMAND) {
    if (playerCommand === "ping") {
      DiamondFire.apply.sendMessage("Pong!")
      }
    }
 }
