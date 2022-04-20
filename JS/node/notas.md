# Notas

## Instalação de pacotes  
*npm install*  
Esse tipo de instalação deixa o pacote instalado sujeito a atualizações "minor" e "patches".  
Exemplo de versão caputarado de um arquivo package.json genérico:" *^4.17.1"*.  
O acento cincunflexo a frente da versão indica que a mesma está sujeita a atualizações "minor" e "patches".  

---

## Formato de versão descrito  
### **4.17.1**  
### 4 - Major  
### 17 - Minor  
### 1 - Patch  
**Major**: Versão geral do produto, pode afetar compatbilidade entre versões diferentes.  
**Minor**: Versão que normalmente contém adição de novos recursos..  
**Patch**: Versão que normalmente contém correção de Bugs.  
  
---
  
## Movimentando pacotes entre dependencias do projeto  
Existe a possibilidade de se trabalhar com pacotes em depedências apartadas (ambiente de desenvolvimento e ambiente de "produção"), facilitando assim a
migração do produto final para o ambiente de produção.

### Instalando ou migrando um módulo para o ambiente de DEV  
*npm install express --save-dev*  
Ex.: *"devDependencies":{*  
        *"express": "^4.17.1"*  
*}*  
### Retornando para o ambiente produtivo  
  

*npm install  express --save-prod*  
Ex.: *"dependencies":{*  
        *"express": "^4.17.1"*  
*}*

---

### Instalando pacotes com versões específicas  
*npm install express@2.1.0*  
### Delimitando atualização apenas em versões de patches  
*"dependencies": {*  
        *"express": "~2.1.0"*  
*}*  
### Instalando e mantendo uma versão específica  
*npm install express@2.1.0 -E*  
### Listando pacotes instalados no NPM  
*npm ls --depth=0* - **0** corresponde a "profundidade" na qual as pastas serão listadas e exibidas.  
### Listando pacotes desatualizados no NPM  
*npm outdated*  