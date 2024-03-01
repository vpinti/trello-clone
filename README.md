# Trello Clone

Questo è un clone dell'applicazione Trello realizzato utilizzando Next.js 14, Tailwind CSS, Shadn/ui, Server Actions, Prisma, Stripe e MySQL, con il supporto per l'autenticazione e la gestione degli utenti tramite Clerk.

## Panoramica del Progetto

Questo progetto è un'applicazione web che replica le funzionalità di Trello, consentendo agli utenti di creare, gestire e condividere board contenenti liste e card organizzate. L'autenticazione e la gestione degli utenti sono gestite tramite Clerk, una piattaforma di gestione degli utenti.

## Tecnologie Principali

- **Next.js 14**: Framework React per il rendering lato client e lato server delle applicazioni web.
- **Tailwind CSS**: Framework CSS utilizzato per la creazione di interfacce utente moderne e responsive.
- **Shadn/ui**: Libreria di componenti React progettata per facilitare la creazione di interfacce utente accessibili.
- **Server Actions**: Libreria per la gestione delle azioni del server nelle applicazioni Next.js.
- **Prisma**: ORM (Object-Relational Mapping) per Node.js e TypeScript che semplifica l'interazione con il database.
- **Stripe**: Piattaforma di pagamento online utilizzata per l'elaborazione dei pagamenti.
- **MySQL**: Sistema di gestione del database relazionale.
- **Clerk**: Piattaforma di gestione degli utenti per l'autenticazione e l'autorizzazione.

## Requisiti di Sistema

- Node.js 14 o versione successiva
- MySQL

## Installazione

1. Clonare il repository:
```bash
git clone https://github.com/vpinti/trello-clone.git
```

2. Navigare nella directory del progetto:
```bash
cd trello-clone
```

3. Installare le dipendenze:
```bash
npm install
```

4. Creare un file `.env` nella radice del progetto e configurare le variabili d'ambiente necessarie:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

5. Eseguire le migrazioni del database con Prisma:
```bash
npx prisma migrate dev
```

6. Avviare l'applicazione:
```bash
npm run dev
```


## Contribuire

Le pull requests sono benvenute. Per modifiche importanti, ti preghiamo di aprire prima un'issue per discutere di cosa vorresti cambiare.

## Licenza

Questo progetto è distribuito con la licenza MIT. Per ulteriori informazioni, vedere il file `LICENSE`.
