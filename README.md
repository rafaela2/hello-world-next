
## Build da imagem docker

Na raiz do projeto executar:
~~~javascript
docker build -t hello-world-app:v0.0.0-alpha.2 -f deploy/Dockerfile .
~~~

Após o build executar a imagem:

~~~javascript
docker run --name hello-world-app -p 3000:3000 --env NEXT_PUBLIC_TITLE="Hello from docker"  hello-world-app:v0.0.0-alpha.1
~~~