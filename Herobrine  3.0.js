



var invisibleGUI = null;
ModPE.setItem(510,"skull_wither", 0,ChatColor.RED +  "Spawn Herobrine");
ModPE.overrideTexture("images/mob/herobrine.png", " https://dl.dropboxusercontent.com/s/lbwlmb2wbju7b7e/herobrine.png?dl=0 ");
var DHerobrine;
var Activate = 0;
var Card = android.os.Environment.getExternalStorageDirectory();
var Dir1 = new java.io.File(Card.getAbsolutePath(), "games/");
var Dir2 = new java.io.File(Dir1, "com.mojang/minecraftpe");
var File = new java.io.File(Dir2, "options.txt");

Header1 = "mp_username";






function procCmd(cmd) {
 if (cmd == "herobrine") {

		Level.dropItem(Player.getX(),Player.getY(),Player.getZ(),5,510,1,0);
	}
	if(cmd == "back") {
	 setPosition(getPlayerEnt(),this.DeathPos[0],this.DeathPos[1] + 3,this.DeathPos[2]);
}
}
var spawn1 = 0;
function newLevel(){
Activate = 0;
clientMessage("Herobrine 3.0 by BagasMC")
clientMessage(ChatColor.RED + "<WARNING!> TURN YOUR DIFFICULTIES TO HIGH.")


}
function getOptionAttr(attr){

var Reader = new java.io.BufferedReader(new java.io.FileReader(File));

var str, prop;
var line = new Array();

while((str = Reader.readLine()) != null){

line.push(str);

}

i = line.join().replace(",", ":");
prop = i.split(":");

return prop[prop.indexOf(attr) + 1];

}

function useItem(x,y,z,itemId,blockId,side){ 

	if(itemId == 510){
	 DHerobrine = Level.spawnMob(x,y+1,z,35,"mob/herobrine.png");
  Entity.setRenderType(DHerobrine,3);
  Entity.setHealth(DHerobrine,2500);
	 addItemInventory(510,-1);
	 PlayerName = getOptionAttr(Header1);
	 spawn = 1;
	 
	 Activate = 1;
  
	 }
	 if(itemId == 510 && spawn == 1 && Activate == 1 && Healths < 1)
	 {
	 spawn = 0;
	 addItemInventory(510,1);
	 Activate = 0;
	 var Healths = Entity.getHealth(DHerobrine);
	 clientMessage(ChatColor.RED + "<WARNING> TURN YOUR DIFFICULTIES TO HARD.")
	  
	 }
	 }
	
	 
	 var str = 0;
	 var explod = 20;
	 var ti = 90;
	 var check1 = 0;
	 var mobs = 100;
	 var ticks = 80;
	 var tickz = 300;
	 function modTick(){ //repeats every tick (20th of a sec)
	 if(Activate == 1){
	   ticks--;
  mobs--;
  tickz--;
  peo--;
  
Level.addParticle(ParticleType.lava, Entity.getX(DHerobrine)-0.2 , Entity.getY(DHerobrine)+1, Entity.getZ(DHerobrine), 0, 0, 0, 10000);
Level.addParticle(ParticleType.lava, Entity.getX(DHerobrine)-0.2 , Entity.getY(DHerobrine)+1, Entity.getZ(DHerobrine), 0, 0, 0, 10000);
Level.addParticle(ParticleType.lava, Entity.getX(DHerobrine)-0.2 , Entity.getY(DHerobrine)+1, Entity.getZ(DHerobrine), 0, 0, 0, 10000);
  if(ticks == 1){
     	var shotYaw1 = Math.atan2((Entity.getZ(DHerobrine) - Entity.getZ(getPlayerEnt())), (Entity.getX(DHerobrine) - Entity.getX(getPlayerEnt())));
	var shotPitch1 = Math.atan2((Entity.getY(DHerobrine) - Entity.getY(getPlayerEnt())), Math.sqrt( (Math.pow(Entity.getX(DHerobrine) - Entity.getX(getPlayerEnt()), 2)) + (Math.pow(Entity.getZ(DHerobrine) - Entity.getZ(getPlayerEnt()), 2))));
	var turretShot1 = lookDir(((shotYaw1 * 180) / Math.PI) - 90, (shotPitch1 * 180) / Math.PI);
	var xSpawn = Entity.getX(DHerobrine) + (-turretShot1.x * 1.5);
	var ySpawn = Entity.getY(DHerobrine) + 1 + (turretShot1.y);
	var zSpawn = Entity.getZ(DHerobrine) + (-turretShot1.z * 1.5);
	var shotYaw2 = Math.atan2((zSpawn - Entity.getZ(getPlayerEnt())), (xSpawn - Entity.getX(getPlayerEnt())));
	var shotPitch2 = Math.atan2((ySpawn - Entity.getY(getPlayerEnt())), Math.sqrt( (Math.pow(xSpawn - Entity.getX(getPlayerEnt()), 2)) + (Math.pow(zSpawn - Entity.getZ(getPlayerEnt()), 2))));
	var turretShot2 = lookDir(((shotYaw2 * 180) / Math.PI) - 90, (shotPitch2 * 180) / Math.PI);
	var shotRow = Level.spawnMob(xSpawn, ySpawn, zSpawn, 65); 
	 	var shotTNT = Level.spawnMob(xSpawn, ySpawn, zSpawn, 80); 
	 rideAnimal(shotRow,shotTNT);
	Entity.setVelX(shotTNT, -turretShot2.x * 3);
	Entity.setVelY(shotTNT, turretShot2.y * 3);
	Entity.setVelZ(shotTNT, -turretShot2.z * 3);
	Level.playSoundEnt(DHerobrine, "random.bow", 1000, 30);
	str = 1;
  ticks = 80;
  }
  if(mobs == 1){
  mobs = 100;
      	var shotYaw1 = Math.atan2((Entity.getZ(DHerobrine) - Entity.getZ(getPlayerEnt())), (Entity.getX(DHerobrine) - Entity.getX(getPlayerEnt())));
	var shotPitch1 = Math.atan2((Entity.getY(DHerobrine) - Entity.getY(getPlayerEnt())), Math.sqrt( (Math.pow(Entity.getX(DHerobrine) - Entity.getX(getPlayerEnt()), 2)) + (Math.pow(Entity.getZ(DHerobrine) - Entity.getZ(getPlayerEnt()), 2))));
	var turretShot1 = lookDir(((shotYaw1 * 180) / Math.PI) - 90, (shotPitch1 * 180) / Math.PI);
	var xSpawn = Entity.getX(DHerobrine) + (-turretShot1.x * 1.5);
	var ySpawn = Entity.getY(DHerobrine) + 1 + (turretShot1.y);
	var zSpawn = Entity.getZ(DHerobrine) + (-turretShot1.z * 1.5);
	var shotYaw2 = Math.atan2((zSpawn - Entity.getZ(getPlayerEnt())), (xSpawn - Entity.getX(getPlayerEnt())));
	var shotPitch2 = Math.atan2((ySpawn - Entity.getY(getPlayerEnt())), Math.sqrt( (Math.pow(xSpawn - Entity.getX(getPlayerEnt()), 2)) + (Math.pow(zSpawn - Entity.getZ(getPlayerEnt()), 2))));
	var turretShot2 = lookDir(((shotYaw2 * 180) / Math.PI) - 90, (shotPitch2 * 180) / Math.PI);
	 
	Entity.setVelX(DHerobrine, -turretShot2.x * 3);
	Entity.setVelY(DHerobrine, turretShot2.y * 3);
	Entity.setVelZ(DHerobrine, -turretShot2.z * 3);
Level.spawnMob(Entity.getX(DHerobrine)+3,Entity.getY(DHerobrine),Entity.getZ(DHerobrine),34);
  Level.spawnMob(Entity.getX(DHerobrine)-3,Entity.getY(DHerobrine),Entity.getZ(DHerobrine),34);
   
  }
  if(tickz == 0){
  check1 = 1;
  }
  if(check1 == 1){
  ti--;
    	var shotYaw1 = Math.atan2((Entity.getZ(DHerobrine) - Entity.getZ(getPlayerEnt())), (Entity.getX(DHerobrine) - Entity.getX(getPlayerEnt())));
	var shotPitch1 = Math.atan2((Entity.getY(DHerobrine) - Entity.getY(getPlayerEnt())), Math.sqrt( (Math.pow(Entity.getX(DHerobrine) - Entity.getX(getPlayerEnt()), 2)) + (Math.pow(Entity.getZ(DHerobrine) - Entity.getZ(getPlayerEnt()), 2))));
	var turretShot1 = lookDir(((shotYaw1 * 180) / Math.PI) - 90, (shotPitch1 * 180) / Math.PI);
	var xSpawn = Entity.getX(DHerobrine) + (-turretShot1.x * 1.5);
	var ySpawn = Entity.getY(DHerobrine) + 1 + (turretShot1.y);
	var zSpawn = Entity.getZ(DHerobrine) + (-turretShot1.z * 1.5);
	var shotYaw2 = Math.atan2((zSpawn - Entity.getZ(getPlayerEnt())), (xSpawn - Entity.getX(getPlayerEnt())));
	var shotPitch2 = Math.atan2((ySpawn - Entity.getY(getPlayerEnt())), Math.sqrt( (Math.pow(xSpawn - Entity.getX(getPlayerEnt()), 2)) + (Math.pow(zSpawn - Entity.getZ(getPlayerEnt()), 2))));
	var turretShot2 = lookDir(((shotYaw2 * 180) / Math.PI) - 90, (shotPitch2 * 180) / Math.PI);
	var shotArrow = Level.spawnMob(xSpawn, ySpawn, zSpawn, 80); 
	Entity.setVelX(shotArrow, -turretShot2.x * 3);
	Entity.setVelY(shotArrow, turretShot2.y * 3);
	Entity.setVelZ(shotArrow, -turretShot2.z * 3);
	Level.playSoundEnt(DHerobrine, "random.bow", 1000, 30);
  }
  if(ti == 1){
  check1 = 3;
  }
  if(check1 == 3){
  ti = 90;
  tickz = 300;
  check1 = 0;
  }
  if(check1 == 4){
  ti = 0;
  tickz = 0;
  } 
  if(check1 == 5){
  mobs = 0;
  }
  if(check1 == 6){
  ticks = 0;
  }
  if(Entity.getHealth(DHerobrine) == 2000){
  check1 = 4;
  }
  if(Entity.getHealth(DHerobrine) == 1000){
  check1 = 5;
  }
  if(Entity.getHealth(DHerobrine) == 500){
  check1 = 6;
  }
  if(Entity.getHealth(DHerobrine) == 100){
  }
  if(Entity.getHealth(DHerobrine) == 0){
  }

  }
  
  }
  
  
  var rope = 50;
  var et = 0;
  var peo = 200;
  
  
  
  
  
  
  //Mike Alpha Delta Echo Bravo Yankee Bravo Alpha Golf Alpha Sierra
  
  var blood = 0;
  
  
  
  
  function checkProximity(entity1, entity2, distanceXZ, distanceY)
{
	if(!(Math.abs(Entity.getX(entity1) - Entity.getX(entity2)) <= distanceXZ))
		return false;
	if(!(Math.abs(Entity.getY(entity1) - Entity.getY(entity2)) <= distanceY))
		return false;
	if(!(Math.abs(Entity.getZ(entity1) - Entity.getZ(entity2)) <= distanceXZ))
		return false;
	return true;
}

function vector3d(x, y, z)
{
	this.x = x;
	this.y = y;
	this.z = z;
}

function lookDir(yaw, pitch)
{
	var direction = new vector3d(0, 0, 0);
	direction.y = -Math.sin(java.lang.Math.toRadians(pitch));
	direction.x = -Math.sin(java.lang.Math.toRadians(yaw)) * Math.cos(java.lang.Math.toRadians(pitch));
	direction.z = Math.cos(java.lang.Math.toRadians(yaw)) * Math.cos(java.lang.Math.toRadians(pitch));
	return direction;
}


function deathHook(murderer, victim) {
    if (Entity.getMobSkin(victim) == "herobrine.png") {
        clientMessage("<Herobrine> N-Nooooo!!")
     Level.addParticle(ParticleType.redstone, Entity.getX(victim) - 0.2, Entity.getY(victim) + 1, Entity.getZ(victim), 0, 0, 0, 1000);
     Activate = 0;
     
     }
     if(victim == getPlayerEnt() && spawn == 1){
    
    Player = Entity.getHealth(getPlayerEnt());
    Entity.setHealth(DHerobrine,0);
    Activate = 0;
    spawn = 0;
    clientMessage("<Herobrine>" + ChatColor.DARK_RED + " Mwahahahahahaha!");
    addItemInventory(510,1);
    clientMessage("<TIP> Type /back to get back to your death location")
     this.DeathPos = [this.X,this.Y,this.Z];
    
    }
     }
function leaveGame(){
Activate = 0;
}


function entityRemovedHook(entity)
{
if(entity == DHerobrine)
{
Activate = 0;
spawn = 0;
}
}


this.X = Math.round(Player.getX());
this.Y = Math.round(Player.getY());
this.Z = Math.round(Player.getZ());
