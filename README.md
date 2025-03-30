# Budowanie obrazu

`docker build --build-arg VERSION=2.3.4 -t myapp .`

# Uruchomienie obrazu

`docker run --rm -p 8080:80 myapp`

# Sprawdzenie działania w przeglądarce

`http://localhost:8080/`
