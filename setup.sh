envFile=".env"
nodeDir="node_modules"
bowerDir="bower_components"

# If the value of nodeDir is not exist then run the command
if [[ ! -d "$nodeDir" ]]; then
    echo "Installing npm libraries..."
    npm install
fi

# If bower command is not exist, then install using npm
if ! bowerCommand="$(type -p "bower")" || [ -z "$bowerCommand" ]; then
    echo "Install bower command..."
    npm install -g bower
fi

# If the value of bowerDir is not exist then run the command
if [[ ! -d "$bowerDir" ]]; then
    echo "Installing bower libraries..."
    bower install
fi

# If the value of envFile is not exist then run the command
if [[ ! -f "$envFile" ]]; then
    echo "Copying environment variables..."
    cp .env.example .env
fi

printf "\e[32m ✔ npm libraries \n" # Print in green color
printf "\e[32m ✔ bower components \n" # Print in green color
printf "\e[32m ✔ env variables \n" # Print in green color
printf "\033[0m" # Reset colors back to normal

npm run dev # Run development mode for webpack
babel-node server # Starting server
