ssh karthik@54.191.196.74 << EOF
  cd portfolio
  git reset --hard
  git pull origin master
  yarn install
  pm2 restart portfolio
EOF