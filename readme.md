# Commands

##### To go into the container and explore the fileSystem.

```
docker exec -it container_id /bin/sh
```

##### Volume commands

```
docker volume create volume_name
docker volume ls
docker volume inspect volume_name
docker volume rm volume_name

```

##### Network Commands

```
docker network create network_name
docker network ls
docker network inspect network_name
docker network connect network_name container_name
docker network disconnect network_name container_name
docker network rm network_name

```

##### Running container with network and volume manually.

```
docker run --network=my_network -v my_volume:/path/in/container -d your_image

```
