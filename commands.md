## DOCKER 

#### to build an image 

######
docker build . -t <nameoftheimage>

#### to create an intance of the image (container)

######
docker run -p <port:port> <name or id>

#### to enter the container 

######
docker exec -it <nome do conteiner> bash

#### to exit 

######
^P^Q

#### to kill every container

######
docker kill $(docker ps -q)

#### to see what containers are running (global)

######
docker ps 

#### list of images 

######
docker image ls 

#### Run the application 

######
docker-compose up

#### to see what conteiners are running inside the apllication

######
docker-compose ps 

#### to stop the application 

######
docker-compose down 

#### to see the networks

######
docker network ls

#### builds the images for the application

######
docker-compose build 

#### without cache

######
docker-compose build --no-cache

#### check the logs of a the conteiner

######
Docker logs <nome do conteiner>



## Kubernetes

#### aplicar arwiuvo yml ao cluster

######
kubectl create -f <nome do arquivo.yml>

#### verificaar os status da implementação

######
kubectl get deployments, services or pods

#### atualizar recursos nos files 

######
kubectl apply -f <nome do arquivo.yml>

#### ver os logs do pod 

######
kubectl logs <nome do pod>

#### entrar dentro do pod 

######
kubectl exec -it <nome do pod> bash 

#### ver os endpoints 

######
kubectl get ep

#### ver os nodes 

######
kubectl get nodes 

#### ver o config map 

######
kubectl get configmap

##  PSQL

#### conectar a uma base de dados 

######
 psql -U <DB_USER> -d <DB_NAME>

 #### listar tabelas 

 ######
 \dt

 #### status de replicação (conteiner da master)

 ######
 select usename,application_name,client_addr,backend_start,state,sync_state from pg_stat_replication ;

 #### lista de base de dados 

 ###### 
 \l

#### sair 

######
\q
