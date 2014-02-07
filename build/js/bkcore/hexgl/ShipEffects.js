var bkcore=bkcore||{};bkcore.hexgl=bkcore.hexgl||{},bkcore.hexgl.ShipEffects=function(a){this.scene=a.scene,this.shipControls=a.shipControls,this.booster=a.booster,this.boosterLight=a.boosterLight,this.boosterSprite=a.boosterSprite,this.useParticles=a.useParticles,this.useParticles&&(this.pVel=new THREE.Vector3(.5,0,0),this.pOffset=new THREE.Vector3(-3,-.3,0),this.pRad=new THREE.Vector3(0,0,1.5),this.shipVelocity=new THREE.Vector3,this.pVelS=this.pVel.length(),this.pOffsetS=this.pOffset.length(),this.pRadS=this.pRad.length(),this.pVel.normalize(),this.pOffset.normalize(),this.pRad.normalize(),this.particles={leftSparks:new bkcore.threejs.Particles({randomness:new THREE.Vector3(.4,.4,.4),tint:16777215,color:16760832,color2:16777215,texture:a.textureSpark,size:2,life:60,max:500}),leftClouds:new bkcore.threejs.Particles({opacity:.8,tint:16777215,color:6710886,color2:10809855,texture:a.textureCloud,size:6,blending:THREE.NormalBlending,life:60,max:500,spawn:new THREE.Vector3(3,-.3,0),spawnRadius:new THREE.Vector3(1,1,2),velocity:new THREE.Vector3(0,0,-.4),randomness:new THREE.Vector3(.05,.05,.1)}),rightSparks:new bkcore.threejs.Particles({randomness:new THREE.Vector3(.4,.4,.4),tint:16777215,color:16760832,color2:16777215,texture:a.textureSpark,size:2,life:60,max:500}),rightClouds:new bkcore.threejs.Particles({opacity:.8,tint:16777215,color:6710886,color2:10809855,texture:a.textureCloud,size:6,blending:THREE.NormalBlending,life:60,max:500,spawn:new THREE.Vector3(-3,-.3,0),spawnRadius:new THREE.Vector3(1,1,2),velocity:new THREE.Vector3(0,0,-.4),randomness:new THREE.Vector3(.05,.05,.1)})},this.shipControls.mesh.add(this.particles.leftClouds.system),this.shipControls.mesh.add(this.particles.rightClouds.system),this.scene.add(this.particles.leftSparks.system),this.scene.add(this.particles.rightSparks.system))},bkcore.hexgl.ShipEffects.prototype.update=function(a){var b,c,d,e,f;this.shipControls.destroyed?(c=0,d=0,e=0,f=0):(b=this.shipControls.getBoostRatio(),c=this.shipControls.key.forward?.8:.3+.4*b,d=(this.shipControls.key.forward?1:.8)+.5*b,e=this.shipControls.key.forward?4:2,f=.2*Math.random()),this.booster&&(this.booster.rotation.z+=1,this.booster.scale.set(d,d,d),this.booster.material.opacity=f+c,this.boosterSprite.opacity=f+c,this.boosterLight.intensity=e*(f+.8)),this.useParticles&&(this.shipVelocity.copy(this.shipControls.currentVelocity).multiplyScalar(.7),this.particles.rightSparks.velocity.copy(this.pVel),this.particles.rightSparks.spawnRadius.copy(this.pRad),this.particles.rightSparks.spawn.copy(this.pOffset),this.particles.leftSparks.velocity.copy(this.pVel).x*=-1,this.particles.leftSparks.spawn.copy(this.pOffset).x*=-1,this.shipControls.mesh&&(this.shipControls.mesh.matrix.rotateAxis(this.particles.rightSparks.spawn),this.particles.rightSparks.spawn.multiplyScalar(this.pOffsetS).addSelf(this.shipControls.dummy.position),this.shipControls.mesh.matrix.rotateAxis(this.particles.rightSparks.velocity),this.particles.rightSparks.velocity.multiplyScalar(this.pVelS).addSelf(this.shipVelocity),this.shipControls.mesh.matrix.rotateAxis(this.particles.rightSparks.spawnRadius),this.particles.rightSparks.spawnRadius.multiplyScalar(this.pRadS),this.shipControls.mesh.matrix.rotateAxis(this.particles.leftSparks.spawn),this.particles.leftSparks.spawn.multiplyScalar(this.pOffsetS).addSelf(this.shipControls.dummy.position),this.shipControls.mesh.matrix.rotateAxis(this.particles.leftSparks.velocity),this.particles.leftSparks.velocity.multiplyScalar(this.pVelS).addSelf(this.shipVelocity),this.particles.leftSparks.spawnRadius.copy(this.particles.rightSparks.spawnRadius)),this.shipControls.collision.right&&(this.particles.rightSparks.emit(Math.round(30*a)),this.particles.rightClouds.emit(Math.round(10*a))),this.shipControls.collision.left&&(this.particles.leftSparks.emit(Math.round(30*a)),this.particles.leftClouds.emit(Math.round(10*a))),this.particles.rightSparks.update(a),this.particles.rightClouds.update(a),this.particles.leftSparks.update(a),this.particles.leftClouds.update(a))};
//# sourceMappingURL=ShipEffects.map