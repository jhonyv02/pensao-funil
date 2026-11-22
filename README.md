# Caderno da Pensão e da Convivência — funil

Site estático HTML/CSS, compatível com hospedagem Hostinger.

## Arquivos principais
- `index.html`: página de vendas (checkout Wiven existente).
- `upsell.html`: página de oferta adicional após a compra.
- `downsell.html`: página alternativa após recusa da oferta anterior.
- `obrigado.html`: página final/agradecimento.
- `funnel-pages.css`: estilos compartilhados das páginas adicionais.
- `assets/`: imagens e mockups existentes.

## Endereços (se publicado na raiz do domínio)
- `https://mundoimprimivel.online/`
- `https://mundoimprimivel.online/upsell.html`
- `https://mundoimprimivel.online/downsell.html`
- `https://mundoimprimivel.online/obrigado.html`

Se a publicação estiver numa subpasta, inclua essa subpasta em todos os endereços.

## Integração Wiven: PENDENTE DE VALIDAR

As páginas de upsell e downsell reutilizam o mesmo widget e script do funil Wiven que já estavam em `obrigado.html`, como base estrutural. **Isso não comprova que a plataforma selecionará a oferta correta em cada etapa.** A Wiven precisa configurar/validar o fluxo real de pós-compra.

1. Confirmar no painel Wiven os produtos, preços e condições específicos do upsell e downsell.
2. Configurar as URLs externas exatas das etapas (se o modo de funil escolhido na Wiven suportar páginas externas).
3. Verificar no painel Wiven se aceitar e recusar são controlados pelo widget embutido; se a Wiven exigir botões, scripts ou URLs específicos por etapa, substitua a integração pela instrução oficial da própria conta.
4. Fazer teste de compra de ponta a ponta, inclusive recusa e aceite, verificando que só ocorre cobrança adicional com confirmação explícita.
5. Configurar os redirecionamentos Wiven e testar a página de obrigado no final. Não marcar pedido como confirmado a partir de mera visita à URL.
6. Manter eventos de compra exclusivamente na Wiven para evitar duplicação do Pixel Meta.

As páginas não inventam valores nem botões de cobrança: os detalhes precisam aparecer na Wiven.

## Cuidados no deploy
Não sobrescrever outro site no domínio sem verificar o diretório correto. Para Hostinger, use o repositório `jhonyv02/pensao-funil` e a branch `main`.
