# 1. In THIS directory, create a new directory called star_wars. > Example answer: mkdir star_wars
mkdir star_wars
# 2. In two commands, in the star_wars folder, create two new directories: empire and rebellion. IN THAT ORDER!!!
cd star_wars
ls
mkdir empire rebellion
# 3. Inside the empire directory, create a file called darth_vader.
cd empire
touch darth_vader
# 4. Use the force (or your echo) to add the text ...heavy breathing... to the darth_vader file. (Don’t remember how to do this? Use the ‘other force’, known as Google!)
echo "...heavy breathing..." > darth_vader
# 5. Inside the empire directory, create a file called emperor_palpatine.
cd empire
touch emperor_palpatine
# 6. Inside the empire directory, create a directory called death_star.
mkdir death_star
# 7. Move darth_vader into the death_star.
mv darth_vader death_star/