# Instrucciones de Deploy en Netlify

## Pasos para hacer el deploy:

### 1. Preparar el proyecto
Los archivos ya están listos para deploy. El proyecto incluye:
- ✅ Build de producción generado (`dist/` folder)
- ✅ Archivo `netlify.toml` configurado
- ✅ Meta Pixel de Facebook instalado (ID: 2039513873452358)
- ✅ Variables de entorno para Supabase

### 2. Subir a Netlify

**Opción A: Deploy Manual (Drag & Drop)**
1. Ve a [Netlify](https://app.netlify.com/)
2. Haz clic en "Add new site" → "Deploy manually"
3. Arrastra y suelta la carpeta `dist/` completa
4. ¡Listo! Tu sitio estará en línea

**Opción B: Deploy desde Git (Recomendado)**
1. Sube tu proyecto a GitHub, GitLab o Bitbucket
2. Ve a [Netlify](https://app.netlify.com/)
3. Haz clic en "Add new site" → "Import an existing project"
4. Conecta tu repositorio
5. Netlify detectará automáticamente la configuración del archivo `netlify.toml`
6. Haz clic en "Deploy site"

### 3. Configurar Variables de Entorno en Netlify

Después del deploy, ve a: **Site settings → Environment variables** y agrega:

```
VITE_SUPABASE_URL=https://0ec90b57d6e95fcbda19832f.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJib2x0IiwicmVmIjoiMGVjOTBiNTdkNmU5NWZjYmRhMTk4MzJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4ODE1NzQsImV4cCI6MTc1ODg4MTU3NH0.9I8-U0x86Ak8t2DGaIk0HfvTSLsAyzdnz-Nw00mMkKw
```

Luego haz clic en "Trigger deploy" para reconstruir el sitio con las variables.

### 4. Verificar que todo funciona

- ✅ Meta Pixel rastreando eventos (PageView, InitiateCheckout, Purchase)
- ✅ Sistema de login conectado a Supabase
- ✅ Página de agradecimiento con tracking de compras
- ✅ Todos los módulos del curso accesibles

## Notas importantes:

- El archivo `.env` NO se sube a Git por seguridad
- Las variables de entorno deben configurarse manualmente en Netlify
- El dominio personalizado se puede configurar en: Site settings → Domain management
- SSL/HTTPS se configura automáticamente por Netlify

## Soporte

Si tienes problemas con el deploy, verifica:
1. Que las variables de entorno estén correctamente configuradas
2. Que el build se complete sin errores en los logs de Netlify
3. Que la carpeta `dist/` contenga todos los archivos necesarios
