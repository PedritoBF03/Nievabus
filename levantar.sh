# docker build -t imagen-api -f ./Dockerfile .
docker compose -f docker-compose.yml build
docker compose -f docker-compose.yml up -d
# docker exec -it apiNest /bin/bash