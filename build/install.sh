
echo "Desplegando la app de ptienda"

# docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pTienda/ptienda/build/docker-compose.yml build
# docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pTienda/ptienda/build/docker-compose.yml up -d

cd /var/lib/jenkins/workspace/proyecto_final/Job-pNievabus/api_nievabus

export $(cat .env | xargs)

docker-compose -f /var/lib/jenkins/workspace/proyecto_final/Job-pNievabus/api_nievabus/docker-compose.yml build --no-cache

docker-compose -f /var/lib/jenkins/workspace/proyecto_final/Job-pNievabus/api_nievabus/docker-compose.yml up -d

# docker-compose -f /var/lib/jenkins/workspace/proyecto_final/Job-pNievabus/app_nievabus/docker-compose.yml build --no-cache

# docker-compose -f /var/lib/jenkins/workspace/proyecto_final/Job-pNievabus/app_nievabus/docker-compose.yml up -d


# docker-compose -f ptienda/build/docker-compose.yml build --no-cache
# docker-compose -f ptienda/build/docker-compose.yml down
# docker-compose -f ptienda/build/docker-compose.yml up --remove-orphans

