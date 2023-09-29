"use strict";

var alunos = [{
  nome: "David Vilela",
  nota: 9.5
}, {
  nome: "Selma Correia",
  nota: 5.5
}, {
  nome: "Luiz Augusto",
  nota: 3.5
}, {
  nome: "Lis Vilela",
  nota: 6.0
}, {
  nome: "Luana Bomfim",
  nota: 8.5
}];
var alunosAprovados = function alunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};
var listaAlunosAprovados = alunosAprovados(alunos);
console.log("Lista de alunos aprovados:");
listaAlunosAprovados.forEach(function (aluno) {
  return console.log("Aluno(a): ".concat(aluno.nome, "; Nota: ").concat(aluno.nota));
});