# Budowanie obrazu

`docker build --build-arg VERSION=2.3.4 -f .\Dockerfile_Scratch -t my-server .`

# Uruchomienie obrazu

`docker run --rm -p 8080:80 my-server`

# Sprawdzenie działania w przeglądarce

`http://localhost:8080/`
