#!/bin/bash

# Funzione per mostrare un messaggio di errore e uscire
show_error() {
    echo "$1"
    exit 1
}

# Verifica se il file .env esiste
if [ -f .env ]; then
    # Leggi le variabili d'ambiente dal file .env
    set -a
    . .env
    set +a

    # Verifica se PORT e MYSQL_ROOT_PASSWORD sono definiti nel file .env
    if [ -z "$MYSQL_PORT" ] || [ -z "$MYSQL_ROOT_PASSWORD" ]; then
        show_error "Errore: Assicurati che il file .env contenga le variabili d'ambiente PORT e MYSQL_ROOT_PASSWORD."
    fi
else
    show_error "Errore: Il file .env non esiste."
fi

# Funzione per creare un nuovo container MySQL
create_container() {
    # Controlla se il container esiste già
    if docker ps -a --format '{{.Names}}' | grep -q "^mysql-trello-clone$"; then
        echo "Il container esiste già."
    else
        # Esegui il comando docker run per creare un nuovo container
        docker run --name mysql-trello-clone -d -p $MYSQL_PORT:3306 \
            -e MYSQL_ROOT_PASSWORD="$MYSQL_ROOT_PASSWORD" \
            -v trello-clone:/var/lib/mysql \
            mysql:latest \
            --character-set-server=utf8mb4 \
            --collation-server=utf8mb4_unicode_ci
        echo "Container creato con successo."
    fi
}

# Verifica se è stato specificato un parametro
if [ -z "$1" ]; then
    show_error "Utilizzo: $0 {create|start|stop|remove}"
fi

# Gestione dei parametri utilizzando l'istruzione case
case "$1" in
    create)
        create_container
        ;;
    start)
        docker start mysql-trello-clone && echo "Container avviato."
        ;;
    stop)
        docker stop mysql-trello-clone && echo "Container fermato."
        ;;
    remove)
        docker rm -f mysql-trello-clone && echo "Container rimosso."
        ;;
    *)
        show_error "Utilizzo: $0 {create|start|stop|remove}"
        ;;
esac

exit 0
