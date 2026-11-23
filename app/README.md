# Conta Certa — beta local para controle de pensão

Aplicativo estático separado da página de vendas. O diretório /app/ pode ser servido em HTTPS na Hostinger e funciona como PWA onde o navegador permitir a instalação.

## Funcionalidades
- Cofre privado por senha, criptografado no navegador via PBKDF2/SHA-256 e AES-GCM.
- Registro de pagamentos parciais ou totais, agrupados pelo mês de referência.
- Gastos dos filhos por categoria.
- Registro objetivo de convivência.
- Anexo JPG/PNG/WebP/PDF, até 1 MB por registro.
- Resumo por mês e impressão/salvamento como PDF pelo navegador.
- Backup JSON criptografado e restauração por arquivo.
- Sem analytics, anúncios, CDN ou requisições para serviços de dados.

## Limitações e segurança
**Esta é uma beta local, NÃO um SaaS multiusuário com cobrança.**
Não há login na nuvem, acesso entre dispositivos, recuperação de senha ou sincronização. A limpeza de dados do navegador pode apagar os registros; a exportação de backup é responsabilidade do usuário.
Os dados ficam criptografados no IndexedDB do navegador. A senha NÃO é armazenada. Se ela for perdida, os dados podem se tornar irrecuperáveis. O aplicativo precisa de HTTPS (WebCrypto).
Se publicado no mesmo domínio da landing de marketing, o armazenamento é do mesmo origin, embora os registros permaneçam criptografados. Para comercializar o aplicativo, hospedar em subdomínio exclusivo sem Pixel e fazer avaliação de segurança/LGPD antes do lançamento.
O controle de diferença é aritmético simples; não estima valores judiciais, juros, multas ou correção. Anexos são registros pessoais, não provas jurídicas automaticamente válidas.
Relatórios impressos não incluem anexos binários; só os registros textuais.

## Implantação
1. Publicar a pasta /app/ como estática com HTTPS (index.html).
2. Testar em Android e iOS; garantir que service worker e WebCrypto funcionem.
3. Para lançamento SaaS real: criar projeto Supabase exclusivo (não usar o banco do OrçaJá), implementar autenticação, armazenamento privado por usuário com RLS, exportação/remoção e auditoria de privacidade; configurar checkout e liberação por webhook verificado.
4. Não vender como app em nuvem ou prometer sincronização antes desses serviços existirem.
