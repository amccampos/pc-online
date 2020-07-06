# Repetições
* Repetições nos blocos
  $img(../assets/images/lacos.png)
* Há apenas 2 formas de repetições em Python[.fragment]
  * Enquanto...
  * Para...

---
# Laço enquanto
$img(../assets/images/laco_enquanto.png)[.fright]
Similar ao laço do bloco

(@[.fragment]
Sintaxe

```python
while condição:
  comando1
  comando2
  comando3

comando_fora_do_laço
```
@)

Comandos dentro do laço precisam estar identados (como no `if`)
[.fragment .attention]

---
# Exemplo do enquanto

Exemplo
```python [1-5|1|2|3|4|2|3|4|2|3|4|2|5|1-5]
count = 0
while count < 3:
  print(count)
  count = count + 1
print("terminou")
```

count: 0
[#p1var .variables]

Saída

?
[#p1out .term]

---
# Exemplo 1

<iframe src="https://trinket.io/embed/python/a0e90ae718"
  width="100%" height="500"
  frameborder="0"
  marginwidth="0"
  marginheight="0"
  allowfullscreen>
</iframe>

---
# Exemplo 2

<iframe src="https://trinket.io/embed/python/f52b08f555"
  width="100%" height="500"
  frameborder="0"
  marginwidth="0"
  marginheight="0"
  allowfullscreen>
</iframe>

---
# Laço para (`for`)
$img(../assets/images/laco_conte.png)[.fright]
Pode substituir o bloco `conte`, porém é mais genérico

(@[.fragment]
Sintaxe

```python
for elemento in sequência:
  comando1
  comando2
  comando3

comando_fora_do_laço
```
@)

---
# Exemplo do `for`

Exemplo
```python [1-3|1|2|1|2|1|2|1|2|1|3|1-3]
for element in [1, 2, 3, 4]:
  print(element)
print("terminou")
```

element: ?
[#p2var .variables]

Saída

?
[#p2out .term]

---
# Função `range()`
Permite criar uma sequência numérica (inteiros)
```python
range(primeiro, limite, passo)
```

(@[.fragment]
O limite não entra na sequência gerada

```python
range(2, 5, 1) --> [2, 3, 4]
```
@)

(@[.fragment]
Variações dos parâmetros

```python
range(10)      --> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
range(5, 10)   --> [5, 6, 7, 8, 9]
```
@)

---
# Usando `range()` no `for`

Permite simular o bloco `conte até`

$img(../assets/images/laco_conte.png)[.fright]
```python
for i in range(0, 11, 1):
  ...
```

Outros exemplos[.fragment]

```python 
for i in range(10):   # imprime os 10 primeiros números pares
  print(2*i)
```
[.fragment]

```python
v = int(input("Valor: "))
for i in range(v, 100, v): # imprime os múltiplos de um valor
  print(i)                 # fornecido pelo usuário até 100
```
[.fragment]


---
# Exemplo 1

<iframe src="https://trinket.io/embed/python/958fecd0a1"
  width="100%" height="500"
  frameborder="0"
  marginwidth="0"
  marginheight="0"
  allowfullscreen>
</iframe>

---
# Exemplo 2

<iframe src="https://trinket.io/embed/python/00d4177e7c"
  width="100%" height="500"
  frameborder="0"
  marginwidth="0"
  marginheight="0"
  allowfullscreen>
</iframe>

---
# Laços aninhados

<iframe src="https://trinket.io/embed/python/1b8667d00f"
  width="100%" height="500"
  frameborder="0"
  marginwidth="0"
  marginheight="0"
  allowfullscreen>
</iframe>

---
# Quebra/continuação de laços
$img(../assets/images/break_continue.png)[.fright]
Similares aos blocos

* `break`: para o laço
* `continue`: volta para o início do bloco

```python [1-8|1|2|3|6|1|2|3|4|8|1-8]
while True:
  valor = int(input("Digite um valor de 1 a 5:"))
  if valor >= 1 and valor <= 5:
    break
  else:
    print("Valor inválido!")

print("Muito bem!")
```
[.fragment]
