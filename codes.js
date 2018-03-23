/*
Official list of all EVENTS / Actions or anything else in DFCode.
*/

class DiamondFire extends Event {
    events = [
        'JOIN',
        'RCLICK',
        'LCLICK',
        'QUIT',
        'TAKE_DAMAGE',
        'WALK',
        'SPRINT',
        'CONSUME'
    ];
}

class DiamondFire extends Action {
    actions = [
        'sendMessage',
        'giveItems',
        'setChatTag',
        'sendActionBar',
        'sendTitle',
        'setChatColor',
        'damage',
        'givePotionEffect',
        'removePotionEffect',
        'clearChat',
        'removeAllPotionEffects',
        'teleport',
        'randomizedTeleport'
    ];
}
