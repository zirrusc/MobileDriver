var bkcore=bkcore||{};bkcore.hexgl=bkcore.hexgl||{},bkcore.hexgl.Gameplay=function(a){var b=this;this.startDelay=1e3,this.countDownDelay=1500,this.active=!1,this.timer=new bkcore.Timer,this.modes={timeattack:null,survival:null,replay:null},this.mode=void 0!=a.mode&&a.mode in this.modes?a.mode:"timeattack",this.step=0,this.hud=a.hud,this.shipControls=a.shipControls,this.track=a.track,this.analyser=a.analyser,this.pixelRatio=a.pixelRatio,this.previousCheckPoint=-1,this.results={FINISH:1,DESTROYED:2,WRONGWAY:3,NONE:-1},this.result=this.results.NONE,this.lap=1,this.lapTimes=[],this.lapTimeElapsed=0,this.maxLaps=3,this.score=null,this.finishTime=null,this.onFinish=void 0==a.onFinish?function(){console.log("FINISH")}:a.onFinish,this.modes.timeattack=function(){b.hud.updateTime(b.timer.getElapsedTime());var a=b.checkPoint();if(a==b.track.checkpoints.start&&b.previousCheckPoint==b.track.checkpoints.last){b.previousCheckPoint=a;var c=b.timer.time.elapsed;b.lapTimes.push(c-b.lapTimeElapsed),b.lapTimeElapsed=c,b.lap==this.maxLaps?b.end(b.results.FINISH):(b.lap++,b.hud.updateLap(b.lap,b.maxLaps),b.lap==b.maxLaps&&b.hud.display("Final lap",.5))}else-1!=a&&a!=b.previousCheckPoint&&(b.previousCheckPoint=a);1==b.shipControls.destroyed&&b.end(b.results.DESTROYED)}},bkcore.hexgl.Gameplay.prototype.simu=function(){this.lapTimes=[92300,91250,90365],this.finishTime=this.lapTimes[0]+this.lapTimes[1]+this.lapTimes[2],this.hud.display("Finish"),this.step=100,this.result=this.results.FINISH,this.shipControls.active=!1},bkcore.hexgl.Gameplay.prototype.start=function(){this.finishTime=null,this.score=null,this.lap=1,this.shipControls.reset(this.track.spawn,this.track.spawnRotation),this.shipControls.active=!1,this.previousCheckPoint=this.track.checkpoints.start,this.active=!0,this.step=0,this.timer.start(),this.hud.resetTime(),this.hud.display("Get ready",1),this.hud.updateLap(this.lap,this.maxLaps)},bkcore.hexgl.Gameplay.prototype.end=function(a){this.score=this.timer.getElapsedTime(),this.finishTime=this.timer.time.elapsed,this.timer.start(),this.result=a,this.shipControls.active=!1,a==this.results.FINISH?(this.hud.display("Finish"),this.step=100):a==this.results.DESTROYED&&(this.hud.display("Destroyed"),this.step=100)},bkcore.hexgl.Gameplay.prototype.update=function(){this.active&&(this.timer.update(),0==this.step&&this.timer.time.elapsed>=this.countDownDelay+this.startDelay?(this.hud.display("3"),this.step=1):1==this.step&&this.timer.time.elapsed>=2*this.countDownDelay+this.startDelay?(this.hud.display("2"),this.step=2):2==this.step&&this.timer.time.elapsed>=3*this.countDownDelay+this.startDelay?(this.hud.display("1"),this.step=3):3==this.step&&this.timer.time.elapsed>=4*this.countDownDelay+this.startDelay?(this.hud.display("Go",.5),this.step=4,this.timer.start(),this.shipControls.active=!0):4==this.step?this.modes[this.mode].call(this):100==this.step&&this.timer.time.elapsed>=2e3&&(this.active=!1,this.onFinish.call(this)))},bkcore.hexgl.Gameplay.prototype.checkPoint=function(){var a=Math.round(this.analyser.pixels.width/2+this.shipControls.dummy.position.x*this.pixelRatio),b=Math.round(this.analyser.pixels.height/2+this.shipControls.dummy.position.z*this.pixelRatio),c=this.analyser.getPixel(a,b);return 255==c.r&&255==c.g&&c.b<250?c.b:-1};
//# sourceMappingURL=Gameplay.map