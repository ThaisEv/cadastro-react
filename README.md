# 👤 Cadastro de Usuários com React

> Um app simples, bonito e funcional para gerenciar usuários — feito com React + Vite e muito carinho.

## ✨ Funcionalidades

- 📝 Cadastro de usuários com formulário controlado
- 📋 Listagem dinâmica dos usuários cadastrados
- ❌ Remoção de usuários da lista
- ✅ Validação básica dos campos do formulário
- 💾 Persistência local com `localStorage`

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Para quê? |
|---|---|---|
| [React](https://react.dev/) | 18+ | Biblioteca de UI |
| [Vite](https://vitejs.dev/) | 5+ | Build tool e dev server |
| JavaScript (ES6+) | — | Linguagem principal |
| CSS Modules / CSS puro | — | Estilização |

---

## ⚙️ Como rodar localmente

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos

```bash
# Clone o repositório
git clone https://github.com/ThaisEv/cadastro-react

# Entre na pasta
cd cadastro-react

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

O app estará disponível em `http://localhost:5173` 🎉

---

## 🧠 Conceitos praticados

Este projeto foi uma desculpa para exercitar:

- **`useState`** — gerenciamento de estado local
- **Formulários controlados** — inputs vinculados ao estado do React
- **Lifting state up** — subindo o estado para o componente pai
- **Props** — comunicação entre componentes
- **Listas e keys** — renderização dinâmica com `.map()`
- **Efeitos colaterais com `useEffect`** — sincronização com localStorage

---

## 📸 Preview

```
┌─────────────────────────────────┐
│         Cadastro de Usuário     │
│                                 │
│  Nome:   [________________]     │
│  Email:  [________________]     │
│  Idade:  [____]                 │
│                                 │
│         [ Cadastrar ]           │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│  👤 Ana Silva                   │
│  ana@email.com · 28 anos        │
│                          [ ✕ ]  │
├─────────────────────────────────┤
│  👤 João Souza                  │
│  joao@email.com · 34 anos       │
│                          [ ✕ ]  │
└─────────────────────────────────┘
```

---

## 🗺️ Próximos passos (ideas)

- [ ] Edição de usuários já cadastrados
- [ ] Busca/filtro por nome ou email
- [ ] Ordenação da lista
- [ ] Testes com Vitest + Testing Library
- [ ] Integração com uma API real (ex: JSONPlaceholder)

---

## 📄 Licença

Este projeto é de uso livre para fins educacionais. Fique à vontade para clonar, estudar e modificar! 🤓

---

<p align="center">
  Feito com ☕ e React por <strong>você</strong>
</p>
