//=============================================================================
// Snippet - Fix FPS Meter
// Fixes the issue where FPSMeter.js cancels PIXI.ticker.shared's _tick callback.
//=============================================================================
(function(){
    const oldFPSMeter = FPSMeter;
    FPSMeter = function(){
        oldFPSMeter.apply(this);
        const FPSMeter_pause = this.pause;
        this.pause = function(){
            FPSMeter_pause.apply(this);
            //sadly, we can't get frameId because of the fpsmeter.js is minified
            //so, restart ticker in all case.
            PIXI.ticker.shared._requestId = null;
            PIXI.ticker.shared._requestIfNeeded();
        }
    }
})();
//=============================================================================
// End of File
//=============================================================================
