# Proyecto NOC

El objetivo es crear una serie de tareas usando arquitectura limpia con TypeScript.

## Dev

1. Renombrar el archivo .env.template a .env
2. Configurar las variables de entorno
3. Ejecutar `npm i`
4. levantar bases de datos con `docker compose up -d`
5. Ejecutar

    ```
    npx prisma generate
    npx prisma migrate dev
    ```

6. Ejecutar `npm run dev`
