# 1. Unload the Millenium Falcon in ONE COMMAND!
# Move the whole crew from the millenium_falcon directory into the death_star directory.
mv -v millenium_falcon/ empire/ death_star
# 2. darth_vader has defeated obi_wan! Delete poor obi_wan.
cd millenium_falcon
rm -rf obi_wan
# 3.  Our heroes have disabled the tractor beam! In four commands, Move the whole crew back into the millenium_falcon!
# Remember: darth_vader remains in the death_star and emperor_palpatine is still in the empire.
mv han_solo/ millenium_falcon/
mv luke_skywalker/ millenium_falcon/
mv princess_leia/ millenium_falcon/
# 4. Move the millenium_falcon back into the rebellion directory.
mv millenium_falcon/ ../../
mv millenium_falcon/ rebellion/
# 5. darth_vader leaves the death_star to pursue Luke! Move him from the death_star into the empire directory!
cd empire/
ls
cd death_star/
ls
mv darth_vader ../
# 6. Thanks to his practice back home at Beggar’s Canyon, Luke blew up the death_star! Remove it from the galaxy!
cd empire/
rm -rf death_star/