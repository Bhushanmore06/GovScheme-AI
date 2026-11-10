# GovScheme AI - local project package

## Included files
- `index.html`, `style.css`, `script.js`: your existing frontend files (copied unchanged)
- `server.mjs`: your existing Node chat server (copied unchanged)
- `db.php`: PDO connection for database `govscheme_ai` (no echo output)
- `php/register.php`: registration endpoint
- `php/login.php`: login endpoint
- `database/setup_users.sql`: expected `users` table structure

## Important database details
- Database: `govscheme_ai`
- Table: `users`
- Expected columns: `id`, `name`, `email`, `password_hash`, `created_at`

The PHP endpoints expect the table structure shown in `database/setup_users.sql`.
If your existing `users` table has different columns, do not run the SQL blindly; check phpMyAdmin > govscheme_ai > users > Structure first.

## Run with XAMPP
1. Extract this folder into `C:\\xampp\\htdocs\\project` (or another folder under `htdocs`).
2. Start Apache and MySQL in XAMPP.
3. Open phpMyAdmin at `http://localhost/phpmyadmin`.
4. Confirm database `govscheme_ai` and table `users` exist with the expected columns.
5. Open `http://localhost/project/`.

## Test PHP endpoints
The endpoints accept POST form data:
- `php/register.php`: `name`, `email`, `password`
- `php/login.php`: `email`, `password`

## Important frontend note
The original `index.html` and `script.js` are included unchanged. The current sign-in JavaScript shows a demo success alert; it does not yet send the login form to `php/login.php`. The current page also does not include a registration form. The PHP endpoints are provided, but connecting them to the existing UI requires a separate, approved frontend change.

## .env note
The original `.env` file is intentionally not included because it may contain private API credentials. Keep your existing `.env` file local and do not share it.
