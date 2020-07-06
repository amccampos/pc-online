# Funções
* Funções nos blocos
$img(assets/images/funcao.png)[.fright]
* Similar em Python [.fragment]
  * Funções básicas
  * Funções com parâmetros
  * Funções com retorno

```python
def imprima():
  print("Hoje é 20/06/2020")
  print("Pode estar errado")
  print("Mas era quando olhei")

```
[.fragment]
---
# Funções básicas
* Serve para...
  * estruturar o código
  * evitar re-escrever o mesmo trecho

```python [1-8|6|1|2-4|7|8|1|2-4|1-8]
def quadrado():
  for i in range(4):
    turtle.forward(100)
    turtle.left(90)

quadrado()
turtle.left(90)
quadrado()
```
---
# Variáveis locais e globais
Variáveis definidas dentro de uma função *são visíveis* apenas na função (**variável local**)

Variáveis definidas fora de uma função *podem ser visíveis* em qualquer função (**variável global**)

```python
def func():
  a = 0
  b = 1

b = 0
func()
print(a + b) # ERRO! Não sabe quem é 'a'
```
---
# Variáveis globais
Na medida do possível, evitem tratar variáveis globais dentro de funções

É uma boa prática **isolar** os dados na função, porém...

```python
def func():
  global b
  b = 1

b = 0
func()
print(b)
```
Parâmetros nas funções servem<br>para isolar os dados [.fragment]
---
# Funções com parâmetro
* Parâmetros servem para...
  * Alterar o comportamento da rotina (*parametrizável*)
  * Isolar os dados (não precisa acessar variáveis globais)

```python
def quadrado(tamanho):
  for i in range(4):
    turtle.forward(tamanho)
    turtle.left(90)

quadrado(50)
turtle.left(90)
quadrado(100)
```
Parâmetros são variáveis locais<br>inicializadas com valores passados[.fragment .attention]

---
# Exemplo

<iframe src="https://trinket.io/embed/python/630e835028"
  width="100%" height="500"
  frameborder="0"
  marginwidth="0"
  marginheight="0"
  allowfullscreen>
</iframe>

---
# Funções com retorno
Funções podem retornar valores, como abaixo
```python
raiz = math.sqrt(16)
```

(@[.fragment]
O valor de retorno é substituído na chamada da função

```python [1|2]
raiz = math.sqrt(16)
raiz = 4
```
@)

---
# Funções com retorno
Toda função em Python retorna algo.

```python
def hello():
  print("Olá")

retorno = hello()
print(retorno)
```

Olá<br>
None
[.term]


`None` é um tipo especial para representar "Nenhum valor"
[.fragment]

---
# Return
Para retornarmos algum valor, usamos `return`

```python
import math

def areaCirc(raio):
  return math.pi * raio**2

area = areaCirc(10)
```

```python
def volumeCone(raio, altura):
  areaBase = areaCirc(raio)
  return areaBase * altura / 3

volume = volumeCone(10, 15)
```
[.fragment]
---
# Posição do return
`return` pode estar em qualquer trecho da função 

```python
def somaValoresDoUsuario(raio):
  soma = 0
  while True:
    valor = int(input('Digite um valor ou 0 p/ terminar:'))
    if valor == 0:
      return soma
    soma = soma + valor

area = somaValoresDoUsuario()
```

Quando o `return` é alcançado a função termina imediatamente
[.fragment]

---
# Exemplo

<iframe src="https://trinket.io/embed/python/565c8533a4"
  width="100%" height="500"
  frameborder="0"
  marginwidth="0"
  marginheight="0"
  allowfullscreen>
</iframe>