echo "Desplegando la app de pnievabus"

# docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pTienda/ptienda/build/docker-compose.yml build
# docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pTienda/ptienda/build/docker-compose.yml up -d

# cd /var/lib/jenkins/workspace/proyecto_final/Job-pNievabus/api-nievabus/

# export $(cat .env | xargs)

docker-compose -f /var/lib/jenkins/workspace/proyecto_final/Job-pNievabus/api-nievabus/docker-compose.yml build --no-cache

docker-compose -f /var/lib/jenkins/workspace/proyecto_final/Job-pNievabus/api-nievabus/docker-compose.yml up -d

# docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pTienda/ptienda/app_nest/docker-compose.yml build --no-cache

# docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pTienda/ptienda/app_nest/docker-compose.yml up -d


# docker-compose -f ptienda/build/docker-compose.yml build --no-cache
# docker-compose -f ptienda/build/docker-compose.yml down
# docker-compose -f ptienda/build/docker-compose.yml up --remove-orphans
