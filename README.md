
## Seja bem-vindo ao curso de **Desenvolvimento Ágil de Sistemas com Impacto Social utilizando Framework Web**!

Este projeto foi desenvolvido como exemplo prático para os alunos do curso, proporcionando uma introdução ao **Django**, um dos frameworks mais populares para desenvolvimento web com Python.

---

## Estrutura do Projeto

O projeto está organizado conforme os padrões do Django e inclui:

- **requirements.txt**: Arquivo com as dependências necessárias para rodar o projeto.
- **venv/**: Ambiente virtual pré-configurado (Windows).
- **app principal**: Diretório onde a aplicação Django foi desenvolvida.

---

## Configuração do Projeto

Para configurar o projeto em sua máquina, siga os passos abaixo:

### 1. Clone o repositório (ou extraia o projeto baixado)
```bash
git clone https://github.com/rideckszz/Desenvolvimento-agil.git
cd Django
```

### 2. Crie e ative o ambiente virtual (caso não utilize o venv fornecido)
```bash
python -m venv venv
# Ativação no Windows
venv\Scripts\activate
# Ativação no Linux ou MacOS
source venv/bin/activate
```

### 3. Instale as dependências
```bash
pip install -r requirements.txt
```

### 4. Configure o banco de dados
```bash
python manage.py migrate
```

### 5. Crie um superusuário (para acessar o admin)
```bash
python manage.py createsuperuser
```

### 6. Execute o servidor de desenvolvimento
```bash
python manage.py runserver
```

Acesse o projeto em [http://127.0.0.1:8000/](http://127.0.0.1:8000/).

---

## Estrutura dos Módulos do Curso

O curso está dividido em **módulos semanais**, que incluem:

- **Videoaulas teóricas**: Conteúdo complementar opcional.
- **Tarefas práticas**: Obrigatórias para a conclusão de cada módulo.
- **Fóruns de dúvidas**: Utilize o fórum de perguntas e respostas ou o Chat Moodle.

---

## Tecnologias Utilizadas

- **Python 3.12+**
- **Django Framework**
- **HTML/CSS (templates Django)**
- **Banco de Dados SQLite (default)**

---

## Observações Importantes

- Algumas atividades serão concluídas **automaticamente** no Moodle, enquanto outras devem ser marcadas **manualmente**.
- Em caso de dúvidas, utilize o **Fórum de Perguntas e Respostas** ou o **Chat Moodle**.

---

## Contato

Dúvidas adicionais? Entre em contato com o suporte do curso ou utilize os canais fornecidos na plataforma Moodle.

---

