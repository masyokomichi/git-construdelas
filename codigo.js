a1 = prompt("Digite o nome do aluno 1")
na1 = prompt("Digite as 3 notas do aluno separadas por vírgula")
na1 = na1.split(",")
n1a1 = parseFloat(na1[0])
n2a1 = parseFloat(na1[1])
n3a1 = parseFloat(na1[2])
med1 = ((n1a1+n2a1+n3a1)/3)
if(med1>=5){
	s1="Aprovado"
} else(s1="Reprovado")

a2 = prompt("Digite o nome do aluno 2")
na2 = prompt("Digite as 3 notas do aluno separadas por vírgula")
na2 = na2.split(",")
n1a2 = parseFloat(na2[0])
n2a2 = parseFloat(na2[1])
n3a2 = parseFloat(na2[2])
med2 = ((n1a2+n2a2+n3a2)/3)
if(med2>=5){
	s2="Aprovado"
} else(s2="Reprovado")

a3 = prompt("Digite o nome do aluno 3")
na3 = prompt("Digite as 3 notas do aluno separadas por vírgula")
na3 = na3.split(",")
n1a3 = parseFloat(na3[0])
n2a3 = parseFloat(na3[1])
n3a3 = parseFloat(na3[2])
med3 = ((n1a3+n2a3+n3a3)/3)
if(med3>=5){
	s3="Aprovado"
} else(s3="Reprovado")

a4 = prompt("Digite o nome do aluno 4")
na4 = prompt("Digite as 3 notas do aluno separadas por vírgula")
na4 = na4.split(",")
n1a4 = parseFloat(na4[0])
n2a4 = parseFloat(na4[1])
n3a4 = parseFloat(na4[2])
med4 = ((n1a4+n2a4+n3a4)/3)
if(med4>=5){
	s4="Aprovado"
} else(s4="Reprovado")

a5 = prompt("Digite o nome do aluno 5")
na5 = prompt("Digite as 3 notas do aluno separadas por vírgula")
na5 = na5.split(",")
n1a5 = parseFloat(na5[0])
n2a5 = parseFloat(na5[1])
n3a5 = parseFloat(na5[2])
med5 = ((n1a5+n2a5+n3a5)/3)
if(med5>=5){
	s5="Aprovado"
} else(s5="Reprovado")

alert("Aluno "+ a1 + " foi " + s1 + "\n" + "Aluno "+ a2 + " foi " + s2 + "\n" + "Aluno "+ a3 + " foi " + s3 + "\n" + "Aluno "+ a4 + " foi " + s1 + "\n" + "Aluno "+ a5 + " foi " + s5 + "\n")
