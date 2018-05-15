# Karthik Iyengar

Portfolio

Deployment:


`docker tag portfolio gcr.io/portfolio-204212/portfolio:0.3`
`docker push portfolio gcr.io/portfolio-204212/portfolio:0.3`

`env NODE_ENV=production pm2 start npm --name=portfolio -- start`