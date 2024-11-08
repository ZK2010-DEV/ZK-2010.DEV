// Sample games data array
const games = [
    {
      title:"Arma 3",
      description:" Get in the battlefield with Arma 3, the reasonable military shooter embeded in a large, open-world environment. This video game offers a true-to-life military experience, featuring a huge selection of weapons, cars, and techniques. Players are charged with finishing a range of missions, from stealth operations to full-blown warfare, as they participate in extreme multiplayer battles with gamers from all around the world. With its sensible graphics, immersive sound results, and tough gameplay, Arma 3 offers an unequaled military simulation experience that ensures to keep you on the edge of your seat.",
      downloadlink:"https://se7en.ws/arma-3/?lang=en"
    },
    {
        title: "Valorant",
        description: "A 5v5 character-based tactical shooter developed by Riot Games.",
        downloadLink: "https://playvalorant.com/"
    },
    {
        title: "Warframe",
        description: "A cooperative free-to-play third-person online action game.",
        downloadLink: "https://www.warframe.com/"
    },
    {
        title: "Genshin Impact",
        description: "An open-world action RPG developed by miHoYo.",
        downloadLink: "https://genshin.mihoyo.com/en"
    },
    {
        title: "League of Legends",
        description: "A multiplayer online battle arena game by Riot Games.",
        downloadLink: "https://play.na.leagueoflegends.com/"
    },
    {
        title: "Apex Legends",
        description: "A Battle Royale game that combines unique character abilities with squad-based gameplay.",
        downloadLink: "https://www.ea.com/games/apex-legends"
    },
    {
        title: "Dota 2",
        description: "A popular multiplayer online battle arena game developed by Valve.",
        downloadLink: "https://store.steampowered.com/app/570/Dota_2/"
    },
    {
        title: "Counter-Strike: Global Offensive",
        description: "A multiplayer first-person shooter developed by Valve and Hidden Path Entertainment.",
        downloadLink: "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/"
    },
    {
        title: "PUBG: Battlegrounds",
        description: "A Battle Royale game where 100 players fight to be the last person standing.",
        downloadLink: "https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/"
    },
    {
        title: "Rocket League",
        description: "A high-powered hybrid of arcade-style soccer and vehicular mayhem.",
        downloadLink: "https://www.rocketleague.com/"
    },
  {
   title: "Forza Horizon 5",
        description: "Forza Horizon 5 is an arcade racing game from the famous British developer Playground Games. The racing series is published by Xbox Game Studios..",
        downloadLink: "https://se7en.ws/forza-horizon-5/?lang=en"   },
 {
   title: "Grand Theft Auto V",
        description: " Los Santos is a radiant city of starlets and already shining stars. Erstwhile city was the envy of the whole westworld. For now it’s a shelter for dirty reality shows choking in the vise of economic difficulties. At the center of all events – trio of completely different offenders who tries to catch the luck in unceasing struggle for a place under the sun. Ex-member of the street gang Franklin tries to quit his past. A retired bank robber Michael discovers that in an honest life everything is not as rosy as imagined. Trevor – fan of violence and psycho who tries himself in several busineses in hoping of large jackpot. When they were exhausting of options they risk of their lives, make a series of daring robberies with only way to have all or nothing.",
        downloadLink: 
 "https://se7en.ws/gta-v/?lang=en"},
  
  {
    title: "Team Fortress 2",
    description: "A team-based first-person shooter developed by Valve, featuring unique character classes and intense multiplayer gameplay.",
    downloadLink: "https://store.steampowered.com/app/440/Team_Fortress_2/"
},
{
    title: "Path of Exile",
    description: "A dark and deep online action RPG in a dark fantasy world, featuring complex skill trees and items.",
    downloadLink: "https://www.pathofexile.com/"
},
{
    title: "Dauntless",
    description: "A cooperative action RPG where you hunt massive Behemoths in a fantasy world.",
    downloadLink: "https://playdauntless.com/"
},
{
    title: "War Thunder",
    description: "A vehicular combat multiplayer game focusing on World War II and Cold War-era military vehicles.",
    downloadLink: "https://warthunder.com/"
},
{
    title: "Paladins",
    description: "A team-based shooter with fantasy elements, featuring unique champions with special abilities.",
    downloadLink: "https://www.paladins.com/"
},
{
    title: "Smite",
    description: "A third-person MOBA game where players take on the role of mythological gods in team-based combat.",
    downloadLink: "https://www.smitegame.com/"
},
{
    title: "World of Tanks",
    description: "A team-based MMO dedicated to armored warfare, where you can control historically accurate tanks.",
    downloadLink: "https://worldoftanks.com/"
},
{
    title: "Destiny 2",
    description: "A popular sci-fi MMORPG first-person shooter where players explore a futuristic universe.",
    downloadLink: "https://store.steampowered.com/app/1085660/Destiny_2/"
},
{
    title: "Brawlhalla",
    description: "A platform fighting game where players battle opponents in a fun, cartoonish setting.",
    downloadLink: "https://www.brawlhalla.com/"
},
{
    title: "Realm Royale",
    description: "A fantasy Battle Royale game with unique classes and abilities, allowing players to customize their characters.",
    downloadLink: "https://www.realmroyale.com/"
},
{
    title: "Star Wars: The Old Republic",
    description: "A story-driven MMORPG set in the Star Wars universe, where players can choose different character classes and factions.",
    downloadLink: "https://www.swtor.com/"
},
{
    title: "Roblox",
    description: "A massive online platform where players can create and explore thousands of user-generated games.",
    downloadLink: "https://www.roblox.com/"
},
{
    title: "Enlisted",
    description: "A squad-based first-person shooter set in World War II, with realistic environments and team-based gameplay.",
    downloadLink: "https://enlisted.net/"
},
{
    title: "Hyper Scape",
    description: "A futuristic, urban Battle Royale with vertical combat, unique abilities, and a fast-paced environment.",
    downloadLink: "https://www.ubisoft.com/en-us/game/hyper-scape"
},
{
    title: "Fallout Shelter",
    description: "A simulation game where you manage and build a vault to protect people from the post-apocalyptic wasteland.",
    downloadLink: "https://play.google.com/store/apps/details?id=com.bethsoft.falloutshelter&hl=en&gl=US"
},
{
    title: "Magic: The Gathering Arena",
    description: "The digital version of the classic card game where you can battle other players with strategic decks.",
    downloadLink: "https://magic.wizards.com/en/mtgarena"
},
{
    title: "Splitgate",
    description: "A fast-paced first-person shooter that combines traditional FPS mechanics with portal-based combat.",
    downloadLink: "https://www.splitgate.com/"
},
{
    title: "Planetside 2",
    description: "A massive online FPS where thousands of players fight for control across sprawling continents.",
    downloadLink: "https://www.planetside2.com/"
},
 {
    title: "Hearthstone",
    description: "A digital collectible card game by Blizzard Entertainment, featuring characters from the Warcraft universe.",
    downloadLink: "https://playhearthstone.com/"
},
{
    title: "Albion Online",
    description: "A sandbox MMORPG with a player-driven economy, open world PvP, and classless combat system.",
    downloadLink: "https://albiononline.com/"
},
{
    title: "Phantasy Star Online 2",
    description: "A fast-paced, sci-fi MMORPG with action combat and character customization.",
    downloadLink: "https://pso2.com/"
},
{
    title: "Battlefield Play4Free",
    description: "A military FPS from the Battlefield series, featuring large maps and vehicles.",
    downloadLink: "https://www.battlefield.play4free.com/"
},
{
    title: "Black Squad",
    description: "A fast-paced military FPS with various game modes, weapons, and realistic combat.",
    downloadLink: "https://store.steampowered.com/app/550650/Black_Squad/"
},
{
    title: "Cuisine Royale",
    description: "A Battle Royale game with a twist: players wear kitchen utensils as armor.",
    downloadLink: "https://store.gaijin.net/story.php?id=1729"
},
{
    title: "Star Conflict",
    description: "A space combat MMO with PvP and PvE missions, where players command customizable spaceships.",
    downloadLink: "https://star-conflict.com/"
},
{
    title: "Heroes & Generals",
    description: "A WWII shooter blending FPS action with real-time strategy elements.",
    downloadLink: "https://heroesandgenerals.com/"
},
{
    title: "Trove",
    description: "A voxel-based sandbox MMO with exploration, building, and RPG elements.",
    downloadLink: "https://trovegame.com/"
},
{
    title: "Rogue Company",
    description: "A tactical third-person shooter where players become elite mercenaries.",
    downloadLink: "https://www.roguecompany.com/"
},
{
    title: "Crusader Kings II",
    description: "A grand strategy game set in the Middle Ages, focusing on ruling and expanding your dynasty.",
    downloadLink: "https://store.steampowered.com/app/203770/Crusader_Kings_II/"
},
{
    title: "The Cycle: Frontier",
    description: "A PvPvE extraction shooter where players explore a hostile alien world.",
    downloadLink: "https://thecycle.game/"
},
{
    title: "EVE Online",
    description: "A massive sandbox space MMORPG where players create empires and engage in large-scale battles.",
    downloadLink: "https://www.eveonline.com/"
},
{
    title: "Fishing Planet",
    description: "A realistic first-person fishing simulator with various fishing locations and challenges.",
    downloadLink: "https://fishingplanet.com/"
},
{
    title: "Crossout",
    description: "A vehicular combat MMO where players build custom vehicles and battle in post-apocalyptic arenas.",
    downloadLink: "https://crossout.net/"
},
{
    title: "Spellbreak",
    description: "A battle royale game where players wield elemental magic in fast-paced battles.",
    downloadLink: "https://playspellbreak.com/"
},
{
    title: "World of Warships",
    description: "A naval warfare MMO where players control warships and engage in strategic naval battles.",
    downloadLink: "https://worldofwarships.com/"
},
{
    title: "Neverwinter",
    description: "A free-to-play MMORPG set in the Dungeons & Dragons universe.",
    downloadLink: "https://www.arcgames.com/en/games/neverwinter"
},
{
    title: "ArcheAge",
    description: "An open-world sandbox MMORPG with a player-driven economy, sailing, and housing.",
    downloadLink: "https://www.archeagegame.com/"
},
{
    title: "Aion Online",
    description: "A fantasy MMORPG with high-flying combat, where players can take to the skies.",
    downloadLink: "https://www.aiononline.com/"
},
{
    title: "Warface",
    description: "A free-to-play first-person shooter with cooperative and competitive modes.",
    downloadLink: "https://warface.com/"
},
{
    title: "SCP: Secret Laboratory",
    description: "A multiplayer horror game inspired by the SCP Foundation, with player-controlled monsters.",
    downloadLink: "https://scpslgame.com/"
},
{
    title: "Rec Room",
    description: "A social VR game where players can create games, explore, and hang out with friends.",
    downloadLink: "https://recroom.com/"
},
{
    title: "Spelunky Classic",
    description: "A challenging roguelike platformer with randomly generated levels.",
    downloadLink: "https://spelunkyworld.com/original.html"
},
{
    title: "Risk of Rain",
    description: "A challenging 2D action roguelike where players face off against waves of enemies.",
    downloadLink: "https://www.riskofrain.com/"
},
{
    title: "Lineage II",
    description: "A classic MMORPG with large-scale PvP battles and a fantasy setting.",
    downloadLink: "https://www.lineage2.com/"
},
{
    title: "Unturned",
    description: "A sandbox survival game set in a zombie-infested world.",
    downloadLink: "https://store.steampowered.com/app/304930/Unturned/"
},
{
    title: "Planetside Arena",
    description: "A sci-fi Battle Royale set in the Planetside universe.",
    downloadLink: "https://www.planetsidearena.com/"
},
{
    title: "Darwin Project",
    description: "A Battle Royale game with survival elements, set in the snowy Canadian wilderness.",
    downloadLink: "https://www.scavengers.ca/darwinproject/"
},
{
    title: "Survarium",
    description: "A multiplayer shooter set in a post-apocalyptic world where players face off in PvP matches.",
    downloadLink: "https://survarium.com/"
},
{
    title: "MU Online",
    description: "A classic MMORPG with a medieval fantasy setting and epic battles.",
    downloadLink: "https://muonline.webzen.com/"
},
{
    title: "Robocraft",
    description: "A game where players build robots and battle each other in a futuristic arena.",
    downloadLink: "https://robocraftgame.com/"
},
{
    title: "Vindictus",
    description: "An action MMORPG with fast-paced, skill-based combat and intense boss battles.",
    downloadLink: "https://vindictus.nexon.net/"
},
{
    title: "Cabal Online",
    description: "A classic MMORPG with a combo-based combat system and challenging dungeons.",
    downloadLink: "https://cabalonline.com/"
},
{
    title: "Smash Legends",
    description: "A real-time action brawler where players battle opponents in short, intense matches.",
    downloadLink: "https://www.smashlegends.com/"
},
{
    title: "Project Torque",
    description: "A free-to-play racing game with MMO features, allowing players to race against others online.",
    downloadLink: "https://www.project-torque.com/"
},
{
    title: "Digital Combat Simulator",
    description: "A realistic flight simulation game with various military aircraft to pilot.",
    downloadLink: "https://www.digitalcombatsimulator.com/"
},
{
    title: "Operation: Harsh Doorstop",
    description: "A tactical shooter with a focus on realism, inspired by popular military simulators.",
    downloadLink: "https://www.operationharshdoorstop.com/"
},
{
    title: "Infestation: The New Z",
    description: "An open-world survival shooter with PvP and PvE modes, set in a post-apocalyptic world.",
    downloadLink: "https://playnewz.com/"
},
{
    title: "Lost Ark",
    description: "A top-down MMORPG with dynamic combat, set in a vast fantasy world.",
    downloadLink: "https://www.playlostark.com/"
},
{
    title: "Heavy Metal Machines",
    description: "A vehicular MOBA where players control weaponized vehicles in intense team battles.",
    downloadLink: "https://www.heavymetalmachines.com/"
},
{
    title: "Dead Frontier 2",
    description: "A survival horror MMO where players battle zombies in a post-apocalyptic world.",
    downloadLink: "https://www.deadfrontier2.com/"
},
{
    title: "Lost Light",
    description: "A survival shooter where players scavenge for supplies and battle enemies.",
    downloadLink: "https://www.lostlight.game/"
},
{
    title: "Metro Conflict",
    description: "A fast-paced, team-based shooter set in a futuristic world.",
    downloadLink: "https://store.steampowered.com/app/353510/Metro_Conflict/"
},
{
    title: "The Isle",
    description: "A survival game where players can control dinosaurs in an open-world environment.",
    downloadLink: "https://store.steampowered.com/app/376210/The_Isle/"
},
{
    title: "Unreal Tournament",
    description: "A fast-paced arena shooter where players compete in intense battles with unique weapons.",
    downloadLink: "https://www.epicgames.com/unrealtournament/"
},
{
    title: "Iron Harvest",
    description: "A strategy game set in an alternate 1920s, featuring giant mechs and tactical combat.",
    downloadLink: "https://store.steampowered.com/app/826630/Iron_Harvest/"
},
{
    title: "SoulWorker",
    description: "A fast-action anime-style MMORPG with various unique characters and skillful combat.",
    downloadLink: "https://soulworker.gameforge.com/"
},
{
    title: "Battle Arena VR",
    description: "An action-packed multiplayer VR shooter with different characters and unique environments.",
    downloadLink: "https://store.steampowered.com/app/938830/Battle_Arena_VR/"
},
{
    title: "IronSight",
    description: "A futuristic military shooter with realistic environments, weapons, and character customization.",
    downloadLink: "https://ironsightgame.com/"
},
{
    title: "Muck",
    description: "A survival roguelike game where players gather resources, build bases, and survive.",
    downloadLink: "https://store.steampowered.com/app/1625450/Muck/"
},
{
    title: "Pixel Strike 3D",
    description: "A pixelated FPS with a range of game modes and customization options.",
    downloadLink: "https://store.steampowered.com/app/441050/Pixel_Strike_3D/"
},
{
    title: "Hide and Shriek",
    description: "A Halloween-themed multiplayer game where players attempt to scare their opponents.",
    downloadLink: "https://store.steampowered.com/app/480430/Hide_and_Shriek/"
},
{
    title: "Diabotical",
    description: "An arena shooter where players compete in various game modes with unique weapons.",
    downloadLink: "https://store.epicgames.com/en-US/p/diabotical"
},
{
    title: "Conqueror's Blade",
    description: "An MMO tactical warfare game with medieval combat and player-led armies.",
    downloadLink: "https://conqblade.com/"
},
{
    title: "Kingdom Maker",
    description: "A medieval kingdom builder with diplomacy, alliances, and large-scale battles.",
    downloadLink: "https://kingdommaker.com/"
},
{
    title: "Cuisine Royale",
    description: "A Battle Royale game with quirky kitchen-themed armor and tactical gameplay.",
    downloadLink: "https://store.gaijin.net/story.php?id=1729"
},
{
    title: "Shotgun Farmers",
    description: "A unique FPS where players shoot and grow weapons from the ground.",
    downloadLink: "https://store.steampowered.com/app/604240/Shotgun_Farmers/"
},
{
    title: "PlanetSide 2",
    description: "A massive sci-fi MMO FPS where players engage in continent-spanning battles.",
    downloadLink: "https://www.planetside2.com/"
},
{
    title: "SoulCalibur VI Lite",
    description: "A free version of the iconic 3D fighting game, allowing players to test several characters.",
    downloadLink: "https://store.steampowered.com/app/544750/SoulCalibur_VI/"
},
{
    title: "Vector",
    description: "A fast-paced action game inspired by parkour, where players race and escape obstacles.",
    downloadLink: "https://store.steampowered.com/app/248970/Vector/"
},
{
    title: "Spiral Knights",
    description: "An MMORPG with cooperative dungeons and unique character classes.",
    downloadLink: "https://www.spiralknights.com/"
},
{
    title: "Relic Hunters Zero",
    description: "A colorful and fast-paced top-down shooter where players battle across different worlds.",
    downloadLink: "https://store.steampowered.com/app/383930/Relic_Hunters_Zero/"
},
{
    title: "Realm Grinder",
    description: "An idle RPG game where players build kingdoms, make alliances, and explore magic.",
    downloadLink: "https://store.steampowered.com/app/610080/Realm_Grinder/"
},
{
    title: "Heroes of the Storm",
    description: "A team-based MOBA with iconic characters from Blizzard franchises.",
    downloadLink: "https://heroesofthestorm.com/"
},
{
    title: "Deathgarden",
    description: "A team-based asymmetrical shooter where players are hunters or survivors in a deadly arena.",
    downloadLink: "https://store.steampowered.com/app/555440/Deathgarden/"
},
{
    title: "Sakura Clicker",
    description: "A fun anime-style idle clicker game with a unique cast of characters and monsters.",
    downloadLink: "https://store.steampowered.com/app/386950/Sakura_Clicker/"
},
{
    title: "Iris and the Giant",
    description: "A unique RPG deck-building game with psychological themes and beautiful visuals.",
    downloadLink: "https://store.steampowered.com/app/1122180/Iris_and_the_Giant/"
},
{
    title: "Zula",
    description: "A free-to-play FPS set in modern locations around the world with various game modes.",
    downloadLink: "https://playzula.com/"
},
{
    title: "Pixel Dungeon",
    description: "A challenging roguelike RPG set in a retro pixel art world with procedurally generated dungeons.",
    downloadLink: "https://pixeldungeon.org/"
},
{
    title: "Deceit",
    description: "A first-person social deduction game where players must figure out who among them is infected.",
    downloadLink: "https://store.steampowered.com/app/466240/Deceit/"
},
{
    title: "Creativerse",
    description: "A sandbox adventure game similar to Minecraft with crafting and exploration elements.",
    downloadLink: "https://www.creativerse.com/"
},
{
    title: "Battle Breakers",
    description: "A cartoonish tactical RPG where players save heroes and battle through dungeons.",
    downloadLink: "https://store.epicgames.com/en-US/p/battle-breakers"
},
{
    title: "Fistful of Frags",
    description: "A Wild West-themed multiplayer shooter with various game modes and historical weapons.",
    downloadLink: "https://store.steampowered.com/app/265630/Fistful_of_Frags/"
},
{
    title: "Dungeon Fighter Online",
    description: "A 2D side-scrolling beat 'em up MMORPG with arcade-style action.",
    downloadLink: "https://www.dfoneople.com/"
},
{
    title: "Dragon Saga",
    description: "A fantasy MMORPG with fast-paced combat and unique character customization.",
    downloadLink: "https://www.warpportal.com/"
},
{
    title: "Eternal",
    description: "A strategic digital card game with hundreds of cards and tactical gameplay.",
    downloadLink: "https://www.direwolfdigital.com/eternal/"
},
{
    title: "Unfortunate Spacemen",
    description: "A multiplayer shooter game where players work together to survive on hostile planets.",
    downloadLink: "https://store.steampowered.com/app/408900/Unfortunate_Spacemen/"
},
{
    title: "For The King",
    description: "A challenging turn-based strategy game set in a procedurally generated fantasy world.",
    downloadLink: "https://store.steampowered.com/app/527230/For_The_King/"
},
{
    title: "Galactic Civilizations III",
    description: "A strategy game where players build empires and explore space.",
    downloadLink: "https://store.steampowered.com/app/226860/Galactic_Civilizations_III/"
},
{
    title: "City of Heroes Homecoming",
    description: "A private server revival of the classic superhero MMORPG, City of Heroes.",
    downloadLink: "https://cityofheroes.dev/"
},
{
    title: "Beneath a Steel Sky",
    description: "A classic point-and-click adventure game with a deep, story-driven experience.",
    downloadLink: "https://store.steampowered.com/app/7300/Beneath_a_Steel_Sky/"
},
{
    title: "Zero-K",
    description: "An open-source real-time strategy game with sci-fi themes and massive robot battles.",
    downloadLink: "https://zero-k.info/"
},
{
    title: "FTL: Faster Than Light",
    description: "A space exploration strategy game with permadeath and rogue-like elements.",
    downloadLink: "https://subsetgames.com/ftl.html"
},
{
    title: "TERA",
    description: "An action-packed MMORPG with a focus on combat and character abilities.",
    downloadLink: "https://store.steampowered.com/app/212740/TERA/"
},
{
    title: "Gwent: The Witcher Card Game",
    description: "A card game based on The Witcher series, featuring deck-building and strategic play.",
    downloadLink: "https://www.playgwent.com/"
},
{
    title: "Daedalus - No Escape",
    description: "A top-down shooter with a sci-fi setting, inspired by classic arcade games.",
    downloadLink: "https://store.steampowered.com/app/315830/Daedalus__No_Escape/"
},
{
    title: "Minion Masters",
    description: "A fast-paced strategy card game where players summon creatures and spells in PvP battles.",
    downloadLink: "https://store.steampowered.com/app/489520/Minion_Masters/"
},
{
    title: "Realm Royale",
    description: "A fantasy battle royale game with class-based abilities and unique weapons.",
    downloadLink: "https://www.realmroyale.com/"
},
{
    title: "Idle Big Devil",
    description: "An idle RPG game where players manage kingdoms and battle monsters.",
    downloadLink: "https://store.steampowered.com/app/992950/Idle_Big_Devil/"
},
{
    title: "Barony",
    description: "A first-person RPG roguelike with dungeon crawling, pixel graphics, and co-op mode.",
    downloadLink: "https://store.steampowered.com/app/371970/Barony/"
},
{
    title: "Bless Unleashed",
    description: "An action MMORPG with a detailed world, intense combat, and expansive skill trees.",
    downloadLink: "https://www.blessunleashedpc.com/"
},
{
    title: "School of Dragons",
    description: "An educational MMORPG where players train dragons, inspired by the How to Train Your Dragon series.",
    downloadLink: "https://www.schoolofdragons.com/"
},
{
    title: "VRChat",
    description: "A social VR platform where users can create, share, and explore virtual worlds together.",
    downloadLink: "https://vrchat.com/"
},
{
    title: "Heroes Showdown",
    description: "An auto-battler game with fantasy characters and tactical gameplay.",
    downloadLink: "https://store.steampowered.com/app/1200180/Heroes_Showdown/"
},
  
{
    title: "Heroes & Generals",
    description: "A World War II-inspired FPS with large-scale battles and multiple play styles.",
    downloadLink: "https://store.steampowered.com/app/227940/Heroes__Generals/"
},
{
    title: "Unturned",
    description: "A sandbox survival game where players explore, scavenge, and survive against zombies.",
    downloadLink: "https://store.steampowered.com/app/304930/Unturned/"
},
{
    title: "Fallout Shelter",
    description: "A simulation game where players build and manage their own Vault from the Fallout universe.",
    downloadLink: "https://store.steampowered.com/app/588430/Fallout_Shelter/"
},
{
    title: "Hawken",
    description: "A mech combat FPS with fast-paced battles in detailed environments.",
    downloadLink: "https://www.playhawken.com/"
},
{
    title: "Hyper Scape",
    description: "A futuristic urban battle royale with vertical gameplay and unique abilities.",
    downloadLink: "https://www.ubisoft.com/game/hyper-scape"
},
{
    title: "Rogue Company",
    description: "A tactical third-person shooter where players battle in objective-based maps.",
    downloadLink: "https://www.roguecompany.com/"
},
{
    title: "Warface",
    description: "A military FPS with PvE missions, co-op gameplay, and competitive PvP modes.",
    downloadLink: "https://www.my.com/games/warface"
},
{
    title: "Secret World Legends",
    description: "A horror MMORPG set in a world filled with conspiracies, legends, and monsters.",
    downloadLink: "https://www.secretworldlegends.com/"
},
{
    title: "Pox Nora",
    description: "A turn-based strategy game with collectible cards and tactical combat.",
    downloadLink: "https://store.steampowered.com/app/201210/Pox_Nora/"
},
{
    title: "KARDS - The WWII Card Game",
    description: "A strategic card game set during World War II, combining deck-building and tactics.",
    downloadLink: "https://www.kards.com/"
},
{
    title: "Dauntless",
    description: "A co-op action RPG where players hunt giant monsters known as Behemoths.",
    downloadLink: "https://playdauntless.com/"
},
{
    title: "Splitgate",
    description: "A sci-fi FPS with a unique portal mechanic, allowing for creative plays in fast-paced combat.",
    downloadLink: "https://www.splitgate.com/"
},
{
    title: "America's Army: Proving Grounds",
    description: "An authentic military FPS developed by the U.S. Army, focused on teamwork and tactics.",
    downloadLink: "https://www.americasarmy.com/"
},
{
    title: "Brawlhalla",
    description: "A platform fighter where players battle in various game modes with unique characters.",
    downloadLink: "https://www.brawlhalla.com/"
},
{
    title: "Destiny 2",
    description: "A sci-fi MMOFPS with rich lore, large worlds to explore, and cooperative and competitive gameplay.",
    downloadLink: "https://store.steampowered.com/app/1085660/Destiny_2/"
},
{
    title: "Teamfight Tactics",
    description: "An auto-battler strategy game set in the League of Legends universe.",
    downloadLink: "https://teamfighttactics.leagueoflegends.com/"
},
{
    title: "Aim Lab",
    description: "A training platform for FPS games, helping players improve aim and reaction time.",
    downloadLink: "https://store.steampowered.com/app/714010/Aim_Lab/"
},
{
    title: "Hades' Star",
    description: "A strategy game set in space, where players expand their empire and engage in space battles.",
    downloadLink: "https://store.steampowered.com/app/763890/Hades_Star/"
},
{
    title: "Realm of the Mad God",
    description: "A pixel-art MMO bullet-hell game with permadeath and fast-paced combat.",
    downloadLink: "https://www.realmofthemadgod.com/"
},
{
    title: "Mortal Royale",
    description: "A medieval battle royale game where players engage in melee combat with various weapons.",
    downloadLink: "https://store.steampowered.com/app/924400/Mortal_Royale/"
},
{
    title: "Legends of Runeterra",
    description: "A collectible card game set in the League of Legends universe with strategic gameplay.",
    downloadLink: "https://playruneterra.com/"
},
{
    title: "Heavy Metal Machines",
    description: "A unique MOBA where players control cars equipped with weapons in arena-based combat.",
    downloadLink: "https://store.steampowered.com/app/331360/Heavy_Metal_Machines/"
},
{
    title: "Dreadnought",
    description: "A space combat game where players control massive ships in tactical battles.",
    downloadLink: "https://www.greybox.com/dreadnought/en/"
},
{
    title: "Rec Room",
    description: "A social VR game with various mini-games, from battle royale to sports and more.",
    downloadLink: "https://recroom.com/"
},
{
    title: "Grimm's Hollow",
    description: "A pixel-art RPG where players explore the spirit world to save their brother.",
    downloadLink: "https://store.steampowered.com/app/1144140/Grimms_Hollow/"
},
{
    title: "Magic: The Gathering Arena",
    description: "A digital version of the classic card game with regular events and tournaments.",
    downloadLink: "https://magic.wizards.com/en/mtgarena"
},
{
    title: "Da Vinci’s Mystery",
    description: "An immersive puzzle game where players solve mysteries inspired by Leonardo da Vinci's inventions.",
    downloadLink: "https://store.steampowered.com/app/894670/Da_Vincis_Mystery/"
},
{
    title: "Magic Chess: Bang Bang",
    description: "An auto-battler spin-off of the popular Mobile Legends game, with fantasy characters and strategy.",
    downloadLink: "https://www.mobilelegends.com/"
},
{
    title: "Prop and Seek",
    description: "A multiplayer prop hunt game where players hide as objects or search for hidden players.",
    downloadLink: "https://store.steampowered.com/app/1268060/Prop_and_Seek/"
},
{
    title: "Phantom Forces",
    description: "An FPS on Roblox with realistic physics and weapon handling, popular in online multiplayer.",
    downloadLink: "https://www.roblox.com/games/292439477/Phantom-Forces/"
},
{
    title: "Loadout",
    description: "A quirky and humorous third-person shooter with customizable weapons and fast action.",
    downloadLink: "https://store.steampowered.com/app/208090/Loadout/"
},
{
    title: "Vampire: The Masquerade – Bloodhunt",
    description: "A battle royale set in the Vampire: The Masquerade universe, where players use supernatural abilities.",
    downloadLink: "https://bloodhunt.com/"
},
{
    title: "Fishing Planet",
    description: "A realistic fishing simulator where players explore various locations and fish species.",
    downloadLink: "https://store.steampowered.com/app/380600/Fishing_Planet/"
},
{
    title: "Auto Chess",
    description: "A strategy game where players deploy units in an auto-battle arena, part of the auto-battler genre.",
    downloadLink: "https://store.steampowered.com/app/1026440/Auto_Chess/"
},
{
    title: "Wartune",
    description: "A hybrid MMORPG and strategy game with real-time combat, dungeons, and city building.",
    downloadLink: "https://www.r2games.com/"
},
{
    title: "The Cycle: Frontier",
    description: "A PvPvE first-person shooter set on a hostile alien world with resource collection and extraction.",
    downloadLink: "https://thecycle.game/"
},
{
    
    title: "Stronghold Kingdoms",
    description: "A strategy MMO set in medieval Europe, where players build castles and manage resources.",
    downloadLink: "https://www.strongholdkingdoms.com/"
},
{
    title: "Trove",
    description: "A voxel-based MMORPG with various classes, biomes, and player-generated content.",
    downloadLink: "https://store.steampowered.com/app/304050/Trove/"
},
{
    title: "Albion Online",
    description: "A sandbox MMORPG with a player-driven economy, PvP battles, and territory control.",
    downloadLink: "https://albiononline.com/"
},
{
    title: "ArcheAge",
    description: "An MMORPG with a vast open world, naval combat, and a complex economy system.",
    downloadLink: "https://www.archeagegame.com/"
},
{
    title: "Islands of Nyne",
    description: "A sci-fi battle royale game with fast-paced gameplay and futuristic weapons.",
    downloadLink: "https://store.steampowered.com/app/728540/Islands_of_Nyne_Battle_Royale/"
},
{
    title: "Project Winter",
    description: "A multiplayer survival game where players must survive in a snowy wilderness with hidden traitors.",
    downloadLink: "https://store.steampowered.com/app/774861/Project_Winter/"
},
{
    title: "The Awesome Adventures of Captain Spirit",
    description: "A story-driven game set in the Life is Strange universe about a young boy’s imagination.",
    downloadLink: "https://store.steampowered.com/app/845070/The_Awesome_Adventures_of_Captain_Spirit/"
},
{
    title: "Battlerite",
    description: "A team-based PvP arena brawler with fast, skill-based combat.",
    downloadLink: "https://store.steampowered.com/app/504370/Battlerite/"
},
{
    title: "Strange Brigade",
    description: "A co-op shooter set in the 1930s, featuring mythological creatures and ancient temples.",
    downloadLink: "https://store.steampowered.com/app/312670/Strange_Brigade/"
},
{
    title: "The Cycle",
    description: "A competitive quest shooter where players complete objectives on an alien world.",
    downloadLink: "https://thecycle.game/"
},
{
    title: "SCP: Secret Laboratory",
    description: "A multiplayer horror game based on the SCP Foundation universe with randomized rounds.",
    downloadLink: "https://store.steampowered.com/app/700330/SCP_Secret_Laboratory/"
},
{
    title: "Gwent: The Witcher Card Game",
    description: "A strategic card game from the world of The Witcher.",
    downloadLink: "https://www.playgwent.com/"
},
{
    title: "Brawlhalla",
    description: "A free-to-play platform fighting game with various characters and gameplay modes.",
    downloadLink: "https://www.brawlhalla.com/"
},
{
    title: "The Expendabros",
    description: "A free action-packed 2D shooter inspired by the movie *The Expendables*.",
    downloadLink: "https://store.steampowered.com/app/312990/The_Expendabros/"
},
{
    title: "War Thunder",
    description: "A cross-platform MMO combat game with military vehicles from WW2 and the Cold War.",
    downloadLink: "https://warthunder.com/"
},
{
    title: "Ring of Elysium",
    description: "A battle royale game with unique environmental survival mechanics and fast-paced action.",
    downloadLink: "https://store.steampowered.com/app/755790/Ring_of_Elysium/"
},
{
    title: "Battalion 1944",
    description: "A WW2 multiplayer shooter inspired by classic games like Call of Duty 2.",
    downloadLink: "https://store.steampowered.com/app/489940/BATTALION_1944/"
},
{
    title: "The King's Bird",
    description: "A momentum-based precision-platformer that blends aerial movement with physics.",
    downloadLink: "https://store.steampowered.com/app/819000/The_Kings_Bird/"
},
{
    title: "Toribash",
    description: "A unique physics-based fighting game where players control characters with turn-based commands.",
    downloadLink: "https://store.steampowered.com/app/248570/Toribash/"
},
{
    title: "Shadowverse CCG",
    description: "A strategic card game with an anime art style and detailed characters.",
    downloadLink: "https://store.steampowered.com/app/453480/Shadowverse_CCG/"
},
{
    title: "Splitgate: Arena Warfare",
    description: "An FPS that combines classic arena shooter mechanics with a portal system.",
    downloadLink: "https://store.steampowered.com/app/677620/Splitgate_Arena_Warfare/"
},
{
    title: "Lineage 2",
    description: "An MMORPG set in a high-fantasy world, known for its PvP and large-scale battles.",
    downloadLink: "https://www.lineage2.com/"
},
{
    title: "Catan Universe",
    description: "The digital version of the popular board game Catan with online multiplayer.",
    downloadLink: "https://www.catanuniverse.com/"
},
{
    title: "War Selection",
    description: "An RTS game that spans multiple eras, from the Stone Age to the modern era.",
    downloadLink: "https://store.steampowered.com/app/1022450/War_Selection/"
},
{
    title: "Unfortunate Spacemen",
    description: "A multiplayer game of space survival and betrayal, with shapeshifting aliens.",
    downloadLink: "https://store.steampowered.com/app/408900/Unfortunate_Spacemen/"
},
{
    title: "Card Hunter",
    description: "A tactical card game with RPG elements and strategic dungeon crawling.",
    downloadLink: "https://store.steampowered.com/app/293260/Card_Hunter/"
},
{
    title: "Ragnarok Online",
    description: "An MMORPG with anime-inspired graphics and a unique job system.",
    downloadLink: "https://www.playragnarok.com/"
},
{
    title: "Cuisine Royale",
    description: "A battle royale game with kitchen-themed gear, like colanders for helmets.",
    downloadLink: "https://store.steampowered.com/app/884660/Cuisine_Royale/"
},
{
    title: "Cobra Kai: Card Fighter",
    description: "A card-based fighting game featuring characters from the Cobra Kai series.",
    downloadLink: "https://store.steampowered.com/app/1375190/Cobra_Kai_Card_Fighter/"
},
{
    title: "C9 (Continent of the Ninth Seal)",
    description: "An action RPG with detailed combat and dungeons set in a fantasy world.",
    downloadLink: "https://c9.webzen.com/"
},
{
    title: "Secret Neighbor",
    description: "A multiplayer social horror game where players work together to find their friend while avoiding a disguised Neighbor.",
    downloadLink: "https://store.steampowered.com/app/859570/Secret_Neighbor/"
},
{
    title: "Mighty Party",
    description: "A turn-based strategy RPG with a cartoonish art style and tactical battles.",
    downloadLink: "https://store.steampowered.com/app/629910/Mighty_Party/"
},
{
    title: "Dragon Nest",
    description: "A 3D fantasy MMORPG with real-time combat and anime-inspired graphics.",
    downloadLink: "https://dragonnest.nexon.net/"
},
{
    title: "Pummel Party",
    description: "A party game that mixes board game mechanics with minigames, supporting up to 8 players.",
    downloadLink: "https://store.steampowered.com/app/880940/Pummel_Party/"
},
{
    title: "Darwin Project",
    description: "A battle royale with survival elements, set in a cold wilderness where players hunt each other.",
    downloadLink: "https://store.steampowered.com/app/544920/Darwin_Project/"
},
{
    title: "Northgard",
    description: "A Norse mythology-inspired RTS where players manage resources and expand their settlement.",
    downloadLink: "https://store.steampowered.com/app/466560/Northgard/"
},
{
    title: "Gwent: Rogue Mage",
    description: "A single-player deck-building game set in The Witcher universe.",
    downloadLink: "https://store.steampowered.com/app/1605700/Gwent_Rogue_Mage/"
},
{
    title: "Fear the Wolves",
    description: "A battle royale set in Chernobyl, featuring mutated creatures and radioactive zones.",
    downloadLink: "https://store.steampowered.com/app/819500/Fear_The_Wolves/"
},
{
    title: "Conqueror's Blade",
    description: "An MMO that combines strategic battles with medieval combat and open-world exploration.",
    downloadLink: "https://conqblade.com/"
},
{
    title: "We Were Here",
    description: "A cooperative puzzle game where two players must communicate to escape a mysterious castle.",
    downloadLink: "https://store.steampowered.com/app/582500/We_Were_Here/"
},
{
    title: "Infinite Lagrange",
    description: "A space strategy game where players expand their fleet and conquer the galaxy.",
    downloadLink: "https://lagrange.neteasegamer.com/"
},
{
    title: "Vampire Survivors",
    description: "A minimalistic survival game where players fend off waves of monsters with unique weapons.",
    downloadLink: "https://store.steampowered.com/app/1794680/Vampire_Survivors/"
},
{
    title: "Guns of Icarus Alliance",
    description: "A steampunk airship combat game where players work together to fly and fight in team-based battles.",
    downloadLink: "https://store.steampowered.com/app/608800/Guns_of_Icarus_Alliance/"
},
{
    title: "Blightbound",
    description: "A multiplayer dungeon crawler where players fight against corrupted foes.",
    downloadLink: "https://store.steampowered.com/app/1263070/Blightbound/"
},
{
    title: "Atlas",
    description: "An open-world survival MMO with pirates, naval battles, and exploration.",
    downloadLink: "https://store.steampowered.com/app/834910/ATLAS/"
},
{
    title: "Deck of Ashes",
    description: "A deck-building RPG with tactical combat and a dark fantasy setting.",
    downloadLink: "https://store.steampowered.com/app/1016730/Deck_of_Ashes/"
},
{
    title: "GigaBash",
    description: "A chaotic arena brawler where players control giant kaiju-style monsters.",
    downloadLink: "https://store.steampowered.com/app/1547400/GigaBash/"
},
{
    title: "Albion Online",
    description: "A sandbox MMORPG with a player-driven economy, PvP battles, and territory control.",
    downloadLink: "https://albiononline.com/"
},
{
    title: "Witch It",
    description: "A hide-and-seek multiplayer game where players are witches hiding from hunters.",
    downloadLink: "https://store.steampowered.com/app/559650/Witch_It/"
},
{
    title: "Realm Royale Reforged",
    description: "A battle royale game set in the fantasy universe of Paladins, featuring unique classes and abilities.",
    downloadLink: "https://store.steampowered.com/app/813820/Realm_Royale_Reforged/"
}


  
];

// Function to load and display games
function loadGames() {
    const gameList = document.getElementById("game-list");
    gameList.innerHTML = ""; // Clear any existing games

    games.forEach(game => {
        const gameItem = document.createElement("div");
        gameItem.className = "game-item";
        
        const gameTitle = document.createElement("h2");
        gameTitle.textContent = game.title;
        
        const gameDesc = document.createElement("p");
        gameDesc.textContent = game.description;
        
        const downloadButton = document.createElement("button");
        downloadButton.textContent = "Download Now";
        downloadButton.onclick = () => window.open(game.downloadLink, "_blank");

        gameItem.appendChild(gameTitle);
        gameItem.appendChild(gameDesc);
        gameItem.appendChild(downloadButton);

        gameList.appendChild(gameItem);
    });
}

// Function for search filter
document.getElementById("search-bar").addEventListener("keyup", function (e) {
    const filter = e.target.value.toLowerCase();
    const gameItems = document.querySelectorAll(".game-item");

    gameItems.forEach((game) => {
        const title = game.querySelector("h2").textContent.toLowerCase();
        if (title.includes(filter)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
});

// Load games when the page loads
window.onload = loadGames;
