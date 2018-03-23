class DiamondFire extends Event {
  Event (JOIN) {
    DiamondFire.apply.giveItem("DIAMOND SWORD");
  }
  Event (RCLICK) {
    if (playerHolding === item("DIAMOND SWORD")) {
      DiamondFire.apply.sendActionBar("I'm a diamond sword.");
    }
  }
}
