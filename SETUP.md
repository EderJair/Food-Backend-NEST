# 🚀 Guía de Configuración - Food Backend NEST

## 📋 Requisitos Previos

Asegúrate de tener instalado en tu sistema:
- **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (viene con Node.js)
- **Git** - [Descargar aquí](https://git-scm.com/)

## 🔧 Instalación Paso a Paso

### 1. Clonar el Repositorio
```bash
git clone https://github.com/EderJair/Food-Backend-NEST.git
cd Food-Backend-NEST
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Verificar la Instalación
```bash
npm run build
```

### 4. Ejecutar en Modo Desarrollo
```bash
npm run start:dev
```

## ✅ Verificación

Si todo está correcto, deberías ver en la consola:
```
[Nest] 12345  - 06/08/2025, 10:30:45 AM     LOG [NestFactory] Starting Nest application...
[Nest] 12345  - 06/08/2025, 10:30:45 AM     LOG [InstanceLoader] AppModule dependencies initialized +20ms
[Nest] 12345  - 06/08/2025, 10:30:45 AM     LOG [InstanceLoader] UsersModule dependencies initialized +1ms
[Nest] 12345  - 06/08/2025, 10:30:45 AM     LOG [InstanceLoader] JwtModule dependencies initialized +1ms
[Nest] 12345  - 06/08/2025, 10:30:45 AM     LOG [InstanceLoader] AuthModule dependencies initialized +1ms
[Nest] 12345  - 06/08/2025, 10:30:45 AM     LOG [RoutesResolver] AuthController {/auth}: +5ms
[Nest] 12345  - 06/08/2025, 10:30:45 AM     LOG [RouterExplorer] Mapped {/auth/register, POST} route +2ms
[Nest] 12345  - 06/08/2025, 10:30:45 AM     LOG [RouterExplorer] Mapped {/auth/login, POST} route +1ms
[Nest] 12345  - 06/08/2025, 10:30:45 AM     LOG [NestApplication] Nest application successfully started +2ms
```

## 🧪 Probar las APIs

### Registro de Usuario
```bash
# Con curl
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "123456"
  }'
```

### Login de Usuario
```bash
# Con curl
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "123456"
  }'
```

## 📱 Usar con Postman/Insomnia

1. **Registro**:
   - URL: `POST http://localhost:3000/auth/register`
   - Body (JSON):
   ```json
   {
     "email": "usuario@ejemplo.com",
     "password": "mipassword123"
   }
   ```

2. **Login**:
   - URL: `POST http://localhost:3000/auth/login`
   - Body (JSON):
   ```json
   {
     "email": "usuario@ejemplo.com",
     "password": "mipassword123"
   }
   ```

## 🚨 Solución de Problemas

### Error: "Cannot find module"
```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port 3000 already in use"
```bash
# Cambiar puerto (Windows)
set PORT=3001 && npm run start:dev

# Cambiar puerto (Mac/Linux)
PORT=3001 npm run start:dev
```

### Error: "bcrypt compilation failed"
```bash
# Windows
npm install --build-from-source bcrypt

# O instalar herramientas de compilación
npm install -g windows-build-tools
```

## 📚 Scripts Disponibles

- `npm run start` - Ejecutar en producción
- `npm run start:dev` - Ejecutar en desarrollo (con watch)
- `npm run start:debug` - Ejecutar en modo debug
- `npm run build` - Compilar el proyecto
- `npm run test` - Ejecutar tests
- `npm run lint` - Revisar código con ESLint

## 🔗 Endpoints Disponibles

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/auth/register` | Registrar nuevo usuario |
| POST | `/auth/login` | Iniciar sesión |

## 📝 Notas Importantes

- El proyecto **NO** requiere base de datos (los usuarios se almacenan en memoria)
- Los datos se pierden al reiniciar el servidor
- El JWT secret está hardcodeado para desarrollo
- El servidor corre por defecto en el puerto 3000

## 🆘 ¿Problemas?

Si tienes algún problema:
1. Verifica que Node.js esté instalado: `node --version`
2. Verifica que npm esté instalado: `npm --version`
3. Asegúrate de estar en la carpeta correcta del proyecto
4. Revisa que no haya otros procesos usando el puerto 3000
