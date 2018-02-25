envFile=".env"
nodeDir="node_modules"

# If the value of nodeDir is not exist then run the command
# if [[ ! -d "$nodeDir" ]]; then
#    echo "Installing npm libraries..."
#    npm install
#    npm install -D
# fi

# If the value of envFile is not exist then run the command
if [[ ! -f "$envFile" ]]; then
    echo "Copying environment variables..."
    cp .env.example .env
fi

printf "\e[32m ✔ npm libraries \n" # Print in green color
printf "\e[32m ✔ env variables \n" # Print in green color
printf "\033[0m" # Reset colors back to normal

npm run dev # Run production mode for webpack
babel-node server # Starting server
