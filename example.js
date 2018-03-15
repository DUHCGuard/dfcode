/*
EXAMPLE BY --- Guardianeqq

Plot Code --- "2d Terrain Generator"
*/

class DiamondFire extends Event {
    Event (JOIN) {
        if (playerName === "Guardianeqq") {
            DiamondFire.apply.giveItem("STICKY_PISTON", tag="gen", name="&aGenerate", lore="&7&oRight-Click to generate.");
            DiamondFire.apply.setChatTag("&8[&4Owner&8]");
        };
    };
    Event (RCLICK) {
        if (playerHolding === "gen") {
            DiamondFire.setVariable("generating", boolean(true));
            DiamondFire.apply.sendMessage("&a&l+ &fStarted generating.")
            DiamondFire.setVariable("startPos", loc("100", "50", "100"))
        };
    };
};

class DiamondFire extends Loop {
    Loop() {
        if(variable("generating") === boolean(true)) {
            DiamondFire.setVariable("newZ", parseZ("startPos"))
            DiamondFire.setVariable("newZ", addition(1))
            DiamondFire.setVariable("startPos", parseZ("newZ"))
            DiamondFire.setVariable("newY", parseY("startPos"))
            DiamondFire.setVariable("newY", random(-1,1))
            DiamondFire.setVariable("startPos", parseY("newY"))
            DiamondFire.gameApply.setblock("startPos", block("GRASS_BLOCK"))
            if(variable("generating").posZ === 150) {
                DiamondFire.setVariable("generating", boolean(true))
                DiamondFire.apply.sendMessage("&c&lx &fStopped generating.")]
            }
        }
    };
};
