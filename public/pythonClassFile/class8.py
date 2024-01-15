# creación de clase
class Nombre_de_clase:
    pass

# creación de métodos y atributos
class Persona:
    def __init__(self,nombre,apellido): # con __init__ creas el objeto con los atributos
        self.nombre = nombre
        self.apellido = apellido
    def accion(self):
        return "caminar"

# constructor
persona1 = Persona("juan", "Lopez")
print(persona1.nombre)
print(persona1.apellido)
print(persona1.accion())


# ejemplo real de un desarrollo de juego
class Personaje:
    def __init__(self, nombre, fuerza, inteligencia, defensa, vida):
        self.nombre = nombre
        self.fuerza = fuerza
        self.inteligencia = inteligencia
        self.defensa = defensa
        self.vida = vida

    def atributos(self):
        print(self.nombre, ":", sep="")
        print("·Fuerza:", self.fuerza)
        print("·Inteligencia:", self.inteligencia)
        print("·Defensa:", self.defensa)
        print("·Vida:", self.vida)

    def subir_nivel(self, fuerza, inteligencia, defensa):
        self.fuerza = self.fuerza + fuerza
        self.inteligencia = self.inteligencia + inteligencia
        self.defensa = self.defensa + defensa

    def esta_vivo(self):
        return self.vida > 0

    def morir(self):
        self.vida = 0
        print(self.nombre, "ha muerto")

    def daño(self, enemigo):
        return self.fuerza - enemigo.defensa

    def atacar(self, enemigo):
        daño = self.daño(enemigo)
        enemigo.vida = enemigo.vida - daño
        print(self.nombre, "ha realizado", daño, "puntos de daño a", enemigo.nombre)
        if enemigo.esta_vivo():
            print("Vida de", enemigo.nombre, "es", enemigo.vida)
        else:
            enemigo.morir()

class Guerrero(Personaje):

    def __init__(self, nombre, fuerza, inteligencia, defensa, vida, espada):
        super().__init__(nombre, fuerza, inteligencia, defensa, vida)
        self.espada = espada

    def cambiar_arma(self):
        opcion = int(input("Elige un arma: (1) Acero Valyrio, daño 8. (2) Matadragones, daño 10"))
        if opcion == 1:
            self.espada = 8
        elif opcion == 2:
            self.espada = 10
        else:
            print("Número de arma incorrecta")

    def atributos(self):
        super().atributos()
        print("·Espada:", self.espada)

    def daño(self, enemigo):
        return self.fuerza*self.espada - enemigo.defensa

class Mago(Personaje):

    def __init__(self, nombre, fuerza, inteligencia, defensa, vida, libro):
        super().__init__(nombre, fuerza, inteligencia, defensa, vida)
        self.libro = libro

    def atributos(self):
        super().atributos()
        print("·Libro:", self.libro)

    def daño(self, enemigo):
        return self.inteligencia*self.libro - enemigo.defensa

def realizar_ataque(atacante, defensor):
    if defensor.esta_vivo():
        print(">>> Acción de ", atacante.nombre, ":", sep="")
        atacante.atacar(defensor)


def combate(jugador_1, jugador_2):
    turno = 0
    while jugador_1.esta_vivo() and jugador_2.esta_vivo():
        realizar_ataque(jugador_1, jugador_2)
        realizar_ataque(jugador_2, jugador_1)
        turno = turno + 1
    if jugador_1.esta_vivo():
        print("\nHa ganado", jugador_1.nombre)
    elif jugador_2.esta_vivo():
        print("\nHa ganado", jugador_2.nombre)
    else:
        print("\nEmpate")

personaje_1 = Guerrero("Guts", 20, 10, 4, 100, 4)

personaje_2 = Mago("Vanessa", 5, 15, 4, 100, 3)

personaje_1.atributos()
personaje_2.atributos()

combate(personaje_1, personaje_2)



# ejemplo simplificado
class Guerrero:
    def __init__(self, nombre, vida, daño):
        self.nombre = nombre
        self.vida = vida
        self.daño = daño

    def ataque(self, enemigo):
        if self.vida > 0 and enemigo.vida > 0:
            enemigo.vida -= self.daño
            print(f"{self.nombre} atacó a {enemigo.nombre}. \nVida:\n{self.nombre}: {self.vida}\n{enemigo.nombre}: {enemigo.vida}\n")
            if enemigo.vida <=0:
                print(f"{enemigo.nombre} está muerto\n")
                self.aumentar_nivel()

        # elif self.vida <= 0:
        #     print(f"{self.nombre} no puede atacar, está muerto\n")
        
        # elif enemigo.vida <= 0:
        #     print(f"no puedes atacar a {enemigo.nombre}, ya está muerto\n")
        
    def aumentar_nivel(self):
        self.vida += 43
        print(f"Aumento de nivel para {self.nombre}. Vida de {self.nombre}: {self.vida}")

# Crear instancias de guerreros
p1 = Guerrero("p1", 100, 60)
p2 = Guerrero("p2", 100, 40)
p3 = Guerrero("p3", 100, 40) 

# Combate
p1.ataque(p2)
p2.ataque(p1)
p2.ataque(p1)
p3.ataque(p2)
p1.ataque(p2)
p2.ataque(p1)
p2.ataque(p1)
p3.ataque(p2)
p1.ataque(p2)
p2.ataque(p1)
p2.ataque(p1)
p3.ataque(p2)




# class Persona:
#     def __init__(self, nombre, edad):
#         self.nombre = nombre
#         self.edad = edad

#     def saludar(self):
#         print(f"Hola, soy {self.nombre} y tengo {self.edad} años.")

# persona1 = Persona("Juan", 25)
# persona1.saludar()


# class Perro:
#     def __init__(self, nombre):
#         self.nombre = nombre

#     def ladrar(self):
#         print("¡Guau!")

# mi_perro = Perro("Max")
# mi_perro.ladrar()
