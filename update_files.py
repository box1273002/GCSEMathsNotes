import os
import json

# Define the path to your folder
dir_paths = ['public/maths_notes','public/questions']



# Loop through the folder and filter for .pdf files (or any type of file)
for dir in dir_paths:
    file_list = []
    for filename in os.listdir(dir):
        # Only add .pdf files (you can modify this to match other file types if needed)
        if filename.endswith(".mdx"):
            file_list.append(filename)
    with open(f"{dir}/files.json","w") as json_file:
        json.dump(file_list,json_file, indent=2)


