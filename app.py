from flask import Flask, render_template, request

app = Flask(__name__)

def cesar(texto, clave, modo):
    desplazamiento = int(clave)
    resultado = ""
    for char in texto.upper():
        if char.isalpha():
            base = ord('A')
            delta = desplazamiento if modo == "encriptar" else -desplazamiento
            resultado += chr((ord(char) - base + delta) % 26 + base)
        else:
            resultado += char
    return resultado

def vigenere(texto, clave, modo):
    texto = texto.upper()
    clave = clave.upper()
    resultado = ""
    j = 0
    for char in texto:
        if char.isalpha():
            base = ord('A')
            k = ord(clave[j % len(clave)]) - base
            delta = k if modo == "encriptar" else -k
            nueva_letra = chr((ord(char) - base + delta) % 26 + base)
            resultado += nueva_letra
            j += 1
        else:
            resultado += char
    return resultado

@app.route("/", methods=["GET", "POST"])
def index():
    resultado = ""
    if request.method == "POST":
        metodo = request.form["metodo"]
        clave = request.form["clave"]
        mensaje = request.form["mensaje"]
        if metodo == "cesar-encriptar":
            resultado = cesar(mensaje, clave, "encriptar")
        elif metodo == "cesar-desencriptar":
            resultado = cesar(mensaje, clave, "desencriptar")
        elif metodo == "vigenere-encriptar":
            resultado = vigenere(mensaje, clave, "encriptar")
        elif metodo == "vigenere-desencriptar":
            resultado = vigenere(mensaje, clave, "desencriptar")
    return render_template("index.html", resultado=resultado)

if __name__ == "__main__":
    app.run(debug=True)
